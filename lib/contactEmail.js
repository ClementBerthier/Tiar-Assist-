// Branded rendering for the contact-form notification email.
// Email HTML must be table-based with inline styles — mail clients ignore
// modern CSS (flexbox, <style>, external stylesheets). Kept dependency-free
// and image-free so it renders reliably even with images blocked.

const COLORS = {
    green: "#23613f",
    greenSoft: "#cfe0d6",
    terracotta: "#cb6a2c",
    cream: "#fffaf2",
    sand: "#f8ecdc",
    sandDeep: "#f0ddc4",
    ink: "#33302b",
    muted: "#6a6052",
    border: "#eadfce",
};

const FONT = "Arial, Helvetica, sans-serif";

function escapeHtml(value) {
    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;");
}

/** Plain-text fallback (deliverability + non-HTML clients). */
export function renderContactEmailText({ firstname, lastname, email, message }) {
    return `Nouveau message depuis le formulaire Tiaré Assist'

Prénom : ${firstname}
Nom : ${lastname}
Email : ${email}

Message :
${message}`;
}

function fieldRow(label, valueHtml) {
    return `<tr><td style="padding:0 0 16px;">
    <p style="margin:0 0 3px;color:${COLORS.muted};font:700 11px/1.2 ${FONT};text-transform:uppercase;letter-spacing:.6px;">${label}</p>
    <p style="margin:0;color:${COLORS.ink};font:400 15px/1.45 ${FONT};">${valueHtml}</p>
  </td></tr>`;
}

/** Branded HTML notification sent to the business inbox. */
export function renderContactEmailHtml({ firstname, lastname, email, message }) {
    const safe = {
        firstname: escapeHtml(firstname),
        lastname: escapeHtml(lastname),
        email: escapeHtml(email),
        message: escapeHtml(message).replace(/\n/g, "<br>"),
    };

    return `<!doctype html>
<html lang="fr">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:${COLORS.sand};">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${COLORS.sand};">
    <tr>
      <td align="center" style="padding:28px 12px;">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="width:100%;max-width:600px;background:${COLORS.cream};border-radius:16px;overflow:hidden;border:1px solid ${COLORS.border};">
          <tr>
            <td style="background:${COLORS.green};padding:26px 30px;">
              <p style="margin:0;color:${COLORS.greenSoft};font:700 12px/1.2 ${FONT};text-transform:uppercase;letter-spacing:1.4px;">Tiaré Assist' · Formulaire de contact</p>
              <h1 style="margin:8px 0 0;color:#ffffff;font:700 23px/1.3 ${FONT};">Nouveau message</h1>
            </td>
          </tr>
          <tr>
            <td style="padding:28px 30px 8px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                ${fieldRow("Prénom", safe.firstname)}
                ${fieldRow("Nom", safe.lastname)}
                ${fieldRow("Email", `<a href="mailto:${safe.email}" style="color:${COLORS.green};text-decoration:none;font-weight:700;">${safe.email}</a>`)}
              </table>
              <div style="margin:6px 0 4px;background:${COLORS.sandDeep};border-left:4px solid ${COLORS.terracotta};border-radius:8px;padding:16px 18px;">
                <p style="margin:0 0 6px;color:${COLORS.muted};font:700 11px/1.2 ${FONT};text-transform:uppercase;letter-spacing:.6px;">Message</p>
                <p style="margin:0;color:${COLORS.ink};font:400 15px/1.6 ${FONT};">${safe.message}</p>
              </div>
            </td>
          </tr>
          <tr>
            <td style="padding:18px 30px 24px;">
              <p style="margin:0;color:${COLORS.muted};font:400 12px/1.5 ${FONT};border-top:1px solid ${COLORS.border};padding-top:16px;">Message envoyé depuis le formulaire de contact de <a href="https://www.tiareassist.fr" style="color:${COLORS.green};text-decoration:none;">www.tiareassist.fr</a></p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}
