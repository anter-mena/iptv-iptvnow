/* Contact-form email — the same design as the One Base invitation email:
   logo on top, one white card, a white button, a small grey footer.
   Tables and inline styles only, so Gmail and Outlook render it the same.

   Only the BRAND block below changes between sites.                       */

/* ── Brand — THE ONLY PART THAT CHANGES BETWEEN SITES ──────────────────── */
const BRAND = {
  name: "IPTVNow",
  domain: "iptvnow.ca",
  referencePrefix: "IPN",
  // The site has no image logo yet, so the wordmark is set in text: it shows
  // in every mail client, images on or off.
  logo: `<table role="presentation" align="center" cellpadding="0" cellspacing="0" border="0"><tr><td style="background:#0a0a0a;border-radius:8px;padding:9px 12px;font-family:Arial,Helvetica,sans-serif;font-size:14px;line-height:1;font-weight:800;letter-spacing:-0.2px;color:#ffffff;">IPTV NOW</td></tr></table>`,
  privacyUrl: "https://iptvnow.ca/privacy-policy",
  termsUrl: "https://iptvnow.ca/terms-of-use",
  termsLabel: "Terms of Use",
};
/* ─────────────────────────────────────────────────────────────────────── */

type ContactEmailInput = {
  name: string;
  email: string;
  message: string;
  topic: string;
  subject: string;
  phone: string;
  emailSubject: string;
  text: string;
  fallbackHtml: string;
};

const TEXT = "font-size:14px;line-height:1.5;";
const NOTE = "margin-top:8px;font-size:12px;line-height:1.4;color:#71717a;";

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function paragraph(html: string) {
  return `<p style="margin:0 0 21px 0;${TEXT}">${html}</p>`;
}

/** The One Base white button skin, inline. Gmail drops shadows and Outlook gradients; the border keeps it a button. */
function button(href: string, label: string) {
  return `<table role="presentation" align="center" cellpadding="0" cellspacing="0" border="0" style="margin:8px auto 0 auto;"><tr><td style="background:#fafafa;border-radius:8px;border:1px solid #e4e4e7;"><a href="${escapeHtml(href)}" style="display:inline-block;padding:8px 16px;font-size:13px;font-weight:600;color:#000000;text-decoration:none;border-radius:8px;background-color:#fafafa;background-image:linear-gradient(180deg, transparent 70.48%, #ffffff 93.62%, transparent 100%);box-shadow:rgba(0,0,0,0.08) 0 -2px 1px 0 inset, rgba(255,255,255,0.5) 0 2px 1px 0 inset, 0 2px 5px -1px rgba(0,0,0,0.05), 0 1px 3px -1px rgba(0,0,0,0.3);text-shadow:0 1px 1px rgba(0,0,0,0.12);">${escapeHtml(label)}</a></td></tr></table>`;
}

export function buildBrandedContactEmail(input: ContactEmailInput) {
  const { name, email, message, topic, subject, phone, emailSubject, text } = input;
  const reference = `${BRAND.referencePrefix}-${crypto.randomUUID().slice(0, 8).toUpperCase()}`;
  const receivedAt = new Intl.DateTimeFormat("en-CA", {
    dateStyle: "medium",
    timeStyle: "short",
    timeZone: "America/Toronto",
  }).format(new Date());

  const who = `<strong>${escapeHtml(name)}</strong>`;
  const about = subject || topic;
  const replyHref = `mailto:${email}?subject=${encodeURIComponent(`Re: ${about}`)}`;
  const contactLine = [
    `<a href="mailto:${escapeHtml(email)}" style="color:#202124;text-decoration:underline;">${escapeHtml(email)}</a>`,
    phone ? escapeHtml(phone) : "",
  ]
    .filter(Boolean)
    .join(" &middot; ");

  const card = `
          <div style="text-align:left;${TEXT}">
            ${paragraph("Hello,")}
            ${paragraph(`${who} sent a message from the ${BRAND.name} contact form about <strong>${escapeHtml(about)}</strong>.`)}
            ${paragraph(`${who} wrote:<br>&quot;${escapeHtml(message).replace(/\n/g, "<br>")}&quot;`)}
            ${paragraph(contactLine)}
          </div>
          ${button(replyHref, `Reply to ${name.split(" ")[0] || name}`)}
          <div style="${NOTE}">${escapeHtml(receivedAt)} &middot; ${reference}</div>`;

  const link = (href: string, label: string) =>
    `<a href="${href}" style="color:#71717a;text-decoration:underline;">${label}</a>`;

  const html = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="color-scheme" content="light">
</head>
<body style="margin:0;padding:0;background:#f4f4f5;color:#202124;font-family:Arial,Helvetica,sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#f4f4f5;">
    <tr><td align="center" style="padding:24px 16px;">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width:560px;">
        <tr><td align="center" style="padding:0 0 20px 0;">
          ${BRAND.logo}
        </td></tr>
        <tr><td style="background:#ffffff;border:1px solid #e4e4e7;padding:32px 28px;text-align:center;">
          ${card}
        </td></tr>
        <tr><td style="padding:16px 8px 0 8px;text-align:center;font-size:11px;line-height:1.6;color:#71717a;">
          You are receiving this email because someone used the contact form on ${BRAND.domain}.<br>
          &copy; ${new Date().getFullYear()} ${BRAND.name} &middot; ${link(BRAND.privacyUrl, "Privacy Policy")} &middot; ${link(BRAND.termsUrl, BRAND.termsLabel)}
        </td></tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;

  return { subject: emailSubject, html, text: `${text}\n\nReference: ${reference}` };
}
