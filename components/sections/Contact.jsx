"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import ConfirmModal from "@/components/ui/ConfirmModal";
import {
    CONTACT_PHONE_E164,
    CONTACT_PHONE_DISPLAY,
    CONTACT_EMAIL,
} from "@/lib/site";

const MIN_FORM_FILL_MS = 3000;

export default function Contact() {
    const formRef = useRef(null);
    const mountedAtRef = useRef(Date.now());
    const [status, setStatus] = useState("idle");
    const [errorMsg, setErrorMsg] = useState("");
    const [showConfirm, setShowConfirm] = useState(false);

    useEffect(() => {
        mountedAtRef.current = Date.now();
    }, []);

    const onSubmit = (e) => {
        e.preventDefault();

        const honeypot = formRef.current?.elements.namedItem("website")?.value;
        if (honeypot) {
            setStatus("sent");
            return;
        }

        if (Date.now() - mountedAtRef.current < MIN_FORM_FILL_MS) {
            setStatus("error");
            setErrorMsg(
                "Merci de prendre quelques instants pour remplir le formulaire.",
            );
            return;
        }

        setShowConfirm(true);
    };

    const handleConfirm = async () => {
        setShowConfirm(false);
        setErrorMsg("");
        setStatus("sending");

        const form = formRef.current;
        const payload = {
            firstname: form.elements.namedItem("firstname").value,
            lastname: form.elements.namedItem("lastname").value,
            email: form.elements.namedItem("email").value,
            message: form.elements.namedItem("message").value,
            website: form.elements.namedItem("website").value,
            pageLoadedAt: mountedAtRef.current,
        };

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });

            if (!response.ok) {
                const data = await response.json().catch(() => ({}));
                throw new Error(
                    data.error ||
                        "Une erreur est survenue. Merci de réessayer.",
                );
            }

            setStatus("sent");
            form.reset();
        } catch (error) {
            console.error("Contact form error:", error);
            setStatus("error");
            setErrorMsg(
                error.message ||
                    "Une erreur est survenue. Merci de réessayer.",
            );
        }
    };

    return (
        <section id="contact" className="bg-sand py-[90px]">
            <div className="mx-auto max-w-[1180px] px-7">
                <div className="reveal mx-auto mb-[54px] max-w-[40em] text-center">
                    <span className="eyebrow">
                        <span className="eyebrow-dot" /> Contact
                    </span>
                    <h2 className="mb-3 mt-[18px] font-heading text-[clamp(1.95rem,3.6vw,2.7rem)] font-extrabold leading-[1.12] tracking-[-0.018em] text-green-dark">
                        Travaillons ensemble
                    </h2>
                    <p className="text-[1.06rem] text-muted">
                        Vous avez envie de collaborer ? Remplissez ce formulaire
                        et je vous recontacte sous 24&nbsp;h.
                    </p>
                </div>

                <div className="grid grid-cols-[0.85fr_1.15fr] items-stretch gap-[30px] max-[860px]:grid-cols-1">
                    {/* contact info card */}
                    <div className="reveal d1 relative overflow-hidden rounded-[24px] bg-gradient-to-br from-green to-green-deep p-[40px_34px] text-white">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src="/images/FiligraneTiare.webP"
                            alt=""
                            aria-hidden="true"
                            className="pointer-events-none absolute -bottom-[125px] left-0 w-[460px] rotate-[38deg] opacity-[0.12]"
                        />
                        <h3 className="relative mb-[26px] font-heading text-[1.3rem] font-bold">
                            Contactez-moi directement
                        </h3>
                        <div className="relative mb-5 flex items-center gap-3.5">
                            <span className="flex h-[42px] w-[42px] flex-none items-center justify-center rounded-xl bg-white/15">
                                <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="#fff"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <rect x="3" y="5" width="18" height="14" rx="2" />
                                    <path d="m3 7 9 6 9-6" />
                                </svg>
                            </span>
                            <span>
                                <span className="text-[0.8rem] text-[#cfe0d6]">
                                    Email
                                </span>
                                <br />
                                <a
                                    href={`mailto:${CONTACT_EMAIL}`}
                                    className="font-semibold text-white"
                                >
                                    {CONTACT_EMAIL}
                                </a>
                            </span>
                        </div>
                        <div className="relative mb-5 flex items-center gap-3.5">
                            <span className="flex h-[42px] w-[42px] flex-none items-center justify-center rounded-xl bg-white/15">
                                <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="#fff"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
                                </svg>
                            </span>
                            <span>
                                <span className="text-[0.8rem] text-[#cfe0d6]">
                                    Téléphone
                                </span>
                                <br />
                                <a
                                    href={`tel:${CONTACT_PHONE_E164}`}
                                    className="font-semibold text-white"
                                >
                                    {CONTACT_PHONE_DISPLAY}
                                </a>
                            </span>
                        </div>
                        <div className="relative mt-[30px] flex items-center gap-3.5 border-t border-white/15 pt-[26px]">
                            <Image
                                src="/images/AvatarPersonnel.webP"
                                alt="Mandy Micheau, fondatrice de Tiaré Assist'"
                                width={60}
                                height={60}
                                className="h-[60px] w-[60px] rounded-full border-2 border-white/30 object-cover"
                            />
                            <span>
                                <span className="font-script text-[1.3rem] leading-tight">
                                    « J&apos;ai hâte que nous travaillions
                                    ensemble »
                                </span>
                                <br />
                                <span className="text-[0.82rem] text-[#cfe0d6]">
                                    Mandy Micheau · Fondatrice
                                </span>
                            </span>
                        </div>
                    </div>

                    {/* form */}
                    <form
                        ref={formRef}
                        onSubmit={onSubmit}
                        className="reveal d2 rounded-[24px] border border-green/[0.06] bg-white p-[38px_34px] shadow-card"
                    >
                        <div
                            className="absolute left-[-9999px]"
                            aria-hidden="true"
                        >
                            <label htmlFor="website">Ne pas remplir</label>
                            <input
                                type="text"
                                id="website"
                                name="website"
                                tabIndex={-1}
                                autoComplete="off"
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-[18px] max-[860px]:grid-cols-1">
                            <div className="mb-[18px] flex flex-col">
                                <label
                                    htmlFor="firstname"
                                    className="mb-[7px] font-heading text-[0.85rem] font-semibold text-green-dark"
                                >
                                    Prénom *
                                </label>
                                <input
                                    type="text"
                                    id="firstname"
                                    name="firstname"
                                    required
                                    maxLength={60}
                                    placeholder="Votre prénom"
                                    className="field-input"
                                />
                            </div>
                            <div className="mb-[18px] flex flex-col">
                                <label
                                    htmlFor="lastname"
                                    className="mb-[7px] font-heading text-[0.85rem] font-semibold text-green-dark"
                                >
                                    Nom *
                                </label>
                                <input
                                    type="text"
                                    id="lastname"
                                    name="lastname"
                                    required
                                    maxLength={60}
                                    placeholder="Votre nom"
                                    className="field-input"
                                />
                            </div>
                        </div>
                        <div className="mb-[18px] flex flex-col">
                            <label
                                htmlFor="email"
                                className="mb-[7px] font-heading text-[0.85rem] font-semibold text-green-dark"
                            >
                                Email *
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                maxLength={100}
                                placeholder="vous@exemple.fr"
                                className="field-input"
                            />
                        </div>
                        <div className="mb-[18px] flex flex-col">
                            <label
                                htmlFor="message"
                                className="mb-[7px] font-heading text-[0.85rem] font-semibold text-green-dark"
                            >
                                Message *
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows={5}
                                required
                                minLength={10}
                                maxLength={2000}
                                placeholder="Décrivez votre besoin en quelques lignes…"
                                className="field-input min-h-[122px] resize-y"
                            />
                        </div>

                        <div role="status" aria-live="polite">
                            {status === "sending" && (
                                <p className="mb-3 text-center text-sm text-muted">
                                    Envoi en cours…
                                </p>
                            )}
                            {status === "sent" && (
                                <p className="mb-3 text-center text-sm font-semibold text-green">
                                    Message envoyé ✅
                                </p>
                            )}
                        </div>
                        {status === "error" && (
                            <p
                                role="alert"
                                className="mb-3 text-center text-sm font-semibold text-[#c0392b]"
                            >
                                {errorMsg}
                            </p>
                        )}

                        <button
                            type="submit"
                            disabled={status === "sending"}
                            className="btn btn-primary mt-1.5 w-full disabled:cursor-not-allowed disabled:opacity-70"
                        >
                            <svg
                                width="18"
                                height="18"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#fff"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="m22 2-7 20-4-9-9-4Z" />
                                <path d="M22 2 11 13" />
                            </svg>
                            {status === "sending"
                                ? "Envoi..."
                                : "Envoyer le message"}
                        </button>
                        <p className="mt-3 text-center text-[0.8rem] text-muted">
                            * Champs obligatoires — vos données restent
                            confidentielles.
                        </p>
                    </form>
                </div>
            </div>

            <ConfirmModal
                isOpen={showConfirm}
                onConfirm={handleConfirm}
                onCancel={() => setShowConfirm(false)}
                title="Confirmer l'envoi"
                message="En soumettant ce formulaire, vous acceptez que vos données soient traitées conformément à notre politique de confidentialité."
                confirmLabel="Valider"
                cancelLabel="Refuser"
            />
        </section>
    );
}
