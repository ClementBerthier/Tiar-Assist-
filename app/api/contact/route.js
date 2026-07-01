import nodemailer from "nodemailer";
import { z } from "zod";

const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX_REQUESTS = 3;
const RATE_LIMIT_MAP_SOFT_CAP = 1000;
const MIN_FORM_FILL_MS = 3000;

const contactSchema = z.object({
    firstname: z
        .string()
        .trim()
        .min(1, "Le prénom est requis.")
        .max(60, "Le prénom est trop long.")
        .regex(/^[^\r\n\t]+$/, "Le prénom contient des caractères invalides."),
    lastname: z
        .string()
        .trim()
        .min(1, "Le nom est requis.")
        .max(60, "Le nom est trop long.")
        .regex(/^[^\r\n\t]+$/, "Le nom contient des caractères invalides."),
    email: z
        .string()
        .trim()
        .email("Adresse email invalide.")
        .max(100, "L'email est trop long."),
    message: z
        .string()
        .trim()
        .min(10, "Le message doit contenir au moins 10 caractères.")
        .max(2000, "Le message est trop long."),
    website: z.string().max(0).optional().or(z.literal("")),
    pageLoadedAt: z.number().int().positive(),
});

const hits = new Map();

function getClientIp(request) {
    const forwarded = request.headers.get("x-forwarded-for");
    if (forwarded && forwarded.length > 0) {
        return forwarded.split(",")[0].trim();
    }
    return request.headers.get("x-real-ip") || "unknown";
}

function checkRateLimit(ip) {
    const now = Date.now();
    const fresh = (hits.get(ip) || []).filter(
        (t) => now - t < RATE_LIMIT_WINDOW_MS,
    );

    if (fresh.length >= RATE_LIMIT_MAX_REQUESTS) {
        hits.set(ip, fresh);
        return false;
    }

    fresh.push(now);
    hits.set(ip, fresh);

    if (hits.size > RATE_LIMIT_MAP_SOFT_CAP) {
        for (const [key, timestamps] of hits.entries()) {
            const stillFresh = timestamps.filter(
                (t) => now - t < RATE_LIMIT_WINDOW_MS,
            );
            if (stillFresh.length === 0) {
                hits.delete(key);
            } else {
                hits.set(key, stillFresh);
            }
        }
    }

    return true;
}

function buildTransport() {
    return nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
        },
    });
}

function escapeHtml(value) {
    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;");
}

export async function POST(request) {
    const ip = getClientIp(request);
    if (!checkRateLimit(ip)) {
        return Response.json(
            {
                error: "Trop de tentatives. Merci de réessayer dans une minute.",
            },
            { status: 429 },
        );
    }

    let body;
    try {
        body = await request.json();
    } catch {
        return Response.json({ error: "Requête invalide." }, { status: 400 });
    }

    const parsed = contactSchema.safeParse(body);
    if (!parsed.success) {
        return Response.json(
            { error: "Données invalides. Vérifiez les champs du formulaire." },
            { status: 400 },
        );
    }

    const { firstname, lastname, email, message, website, pageLoadedAt } =
        parsed.data;

    if (website) {
        return Response.json({ ok: true });
    }

    if (Date.now() - pageLoadedAt < MIN_FORM_FILL_MS) {
        return Response.json({ ok: true });
    }

    if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
        console.error("SMTP credentials missing");
        return Response.json(
            { error: "Configuration serveur manquante." },
            { status: 500 },
        );
    }

    const to = process.env.MAIL_TO || process.env.SMTP_USER;
    const fullName = `${firstname} ${lastname}`;

    try {
        const transporter = buildTransport();

        await transporter.sendMail({
            from: `"Tiaré Assist' - Formulaire" <${process.env.SMTP_USER}>`,
            to,
            replyTo: `"${fullName}" <${email}>`,
            subject: `Nouveau message de ${fullName}`,
            text: `Prénom : ${firstname}
Nom : ${lastname}
Email : ${email}

Message :
${message}`,
            html: `<p><strong>Prénom :</strong> ${escapeHtml(firstname)}</p>
<p><strong>Nom :</strong> ${escapeHtml(lastname)}</p>
<p><strong>Email :</strong> ${escapeHtml(email)}</p>
<p><strong>Message :</strong></p>
<p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>`,
        });

        return Response.json({ ok: true });
    } catch (error) {
        console.error("Nodemailer error:", error);
        return Response.json(
            {
                error: "Une erreur est survenue lors de l'envoi. Merci de réessayer.",
            },
            { status: 500 },
        );
    }
}

export async function GET() {
    return Response.json({ error: "Méthode non autorisée." }, { status: 405 });
}
