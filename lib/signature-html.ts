import type { SignatureTemplate, StudioImageMode } from "./signature-template-config";

export type { SignatureTemplate, StudioImageMode };

export type SignatureFields = {
  fullName: string;
  jobTitle: string;
  company: string;
  phone: string;
  email: string;
  website: string;
  tagline: string;
  accentColor: string;
  imageUrl: string;
  studioImageMode: StudioImageMode;
  linkedIn: string;
  instagram: string;
  facebook: string;
  includeInvoiceFastLine: boolean;
  invoiceFastUrl: string;
};

const FONT = "Arial, Helvetica, sans-serif";
const MUTED = "#4a5578";
const DEFAULT_ACCENT = "#1e2a5a";

export const defaultSignatureFields: SignatureFields = {
  fullName: "",
  jobTitle: "",
  company: "",
  phone: "",
  email: "",
  website: "",
  tagline: "",
  accentColor: DEFAULT_ACCENT,
  imageUrl: "",
  studioImageMode: "headshot",
  linkedIn: "",
  instagram: "",
  facebook: "",
  includeInvoiceFastLine: true,
  invoiceFastUrl: "https://app.aurastudioza.com/sign-up",
};

function contactInline(fields: SignatureFields, linkColor: string): string {
  const parts: string[] = [];

  if (fields.phone.trim()) {
    const phone = escapeHtml(fields.phone.trim());
    parts.push(
      `<a href="tel:${phone.replace(/\s/g, "")}" style="color:${linkColor};text-decoration:none;">${phone}</a>`
    );
  }
  if (fields.email.trim()) {
    const email = escapeHtml(fields.email.trim());
    parts.push(`<a href="mailto:${email}" style="color:${linkColor};text-decoration:none;">${email}</a>`);
  }
  const website = normalizeUrl(fields.website);
  if (website) {
    const label = escapeHtml(website.replace(/^https?:\/\//, "").replace(/\/$/, ""));
    parts.push(
      `<a href="${escapeHtml(website)}" style="color:${linkColor};text-decoration:none;font-weight:700;">${label}</a>`
    );
  }

  if (parts.length === 0) return "";

  return (
    `<tr><td style="padding:6px 0 0;font-family:${FONT};font-size:11px;color:${MUTED};line-height:1.6;">` +
    parts
      .map(
        (part, i) =>
          (i > 0 ? `<span style="color:#c9a227;margin:0 5px;">·</span>` : "") + part
      )
      .join("") +
    `</td></tr>`
  );
}

function sideImageHtml(
  imageUrl: string | null,
  mode: StudioImageMode,
  alt: string
): string {
  if (!imageUrl) return "";

  if (mode === "headshot") {
    return (
      `<img src="${escapeHtml(imageUrl)}" width="76" height="76" alt="${escapeHtml(alt)}" ` +
      `style="display:block;border-radius:50%;border:2px solid #dde4f0;" />`
    );
  }

  return (
    `<img src="${escapeHtml(imageUrl)}" width="88" alt="${escapeHtml(alt)}" ` +
    `style="display:block;border:0;max-width:100px;height:auto;" />`
  );
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function normalizeUrl(url: string): string | null {
  const trimmed = url.trim();
  if (!trimmed) return null;
  try {
    const parsed = new URL(trimmed.startsWith("http") ? trimmed : `https://${trimmed}`);
    if (parsed.protocol !== "https:" && parsed.protocol !== "http:") return null;
    return parsed.toString();
  } catch {
    return null;
  }
}

function normalizeImageUrl(url: string): string | null {
  const trimmed = url.trim();
  if (!trimmed) return null;

  if (/^data:image\/(png|jpeg|jpg);base64,[a-z0-9+/=]+$/i.test(trimmed)) {
    return trimmed;
  }

  const normalized = normalizeUrl(trimmed);
  if (!normalized || !normalized.startsWith("https://")) return null;
  return normalized;
}

function accent(fields: SignatureFields): string {
  const color = fields.accentColor.trim();
  return /^#[0-9a-fA-F]{6}$/.test(color) ? color : DEFAULT_ACCENT;
}

function displayName(fields: SignatureFields): string {
  return fields.fullName.trim() || "Your Name";
}

function roleLine(fields: SignatureFields, options?: { titleOnly?: boolean }): string {
  if (options?.titleOnly) return fields.jobTitle.trim();
  const parts = [fields.jobTitle.trim(), fields.company.trim()].filter(Boolean);
  return parts.join(" · ");
}

function contactRows(
  fields: SignatureFields,
  linkColor: string,
  options?: { skipWebsite?: boolean; mutedColor?: string }
): string {
  const rows: string[] = [];
  const muted = options?.mutedColor ?? MUTED;

  if (fields.phone.trim()) {
    const phone = escapeHtml(fields.phone.trim());
    rows.push(
      `<tr><td style="padding:2px 0;font-family:${FONT};font-size:12px;color:${muted};">` +
        `<a href="tel:${phone.replace(/\s/g, "")}" style="color:${linkColor};text-decoration:none;">${phone}</a>` +
        `</td></tr>`
    );
  }

  if (fields.email.trim()) {
    const email = escapeHtml(fields.email.trim());
    rows.push(
      `<tr><td style="padding:2px 0;font-family:${FONT};font-size:12px;color:${muted};">` +
        `<a href="mailto:${email}" style="color:${linkColor};text-decoration:none;">${email}</a>` +
        `</td></tr>`
    );
  }

  const website = normalizeUrl(fields.website);
  if (website && !options?.skipWebsite) {
    const label = escapeHtml(website.replace(/^https?:\/\//, "").replace(/\/$/, ""));
    rows.push(
      `<tr><td style="padding:2px 0;font-family:${FONT};font-size:12px;">` +
        `<a href="${escapeHtml(website)}" style="color:${linkColor};text-decoration:none;font-weight:700;">${label}</a>` +
        `</td></tr>`
    );
  }

  return rows.join("");
}

function invoiceFastRow(fields: SignatureFields, options?: { mutedColor?: string }): string {
  if (!fields.includeInvoiceFastLine) return "";
  const muted = options?.mutedColor ?? MUTED;
  const url = normalizeUrl(fields.invoiceFastUrl) ?? fields.invoiceFastUrl;
  return (
    `<tr><td style="padding:8px 0 0;font-family:${FONT};font-size:11px;color:${muted};font-style:italic;">` +
    `Invoices: <a href="${escapeHtml(url)}" style="color:${accent(fields)};text-decoration:none;">InvoiceFast</a>` +
    `</td></tr>`
  );
}

function imageBlock(
  imageUrl: string | null,
  mode: StudioImageMode,
  alt: string
): string {
  if (!imageUrl) return "";

  if (mode === "headshot") {
    return (
      `<tr><td style="padding:0 0 10px;font-family:${FONT};">` +
      `<img src="${escapeHtml(imageUrl)}" width="72" height="72" alt="${escapeHtml(alt)}" ` +
      `style="display:block;border-radius:50%;border:2px solid #dde4f0;object-fit:cover;" />` +
      `</td></tr>`
    );
  }

  return (
    `<tr><td style="padding:0 0 10px;font-family:${FONT};">` +
    `<img src="${escapeHtml(imageUrl)}" width="140" alt="${escapeHtml(alt)}" ` +
    `style="display:block;border:0;max-width:180px;height:auto;" />` +
    `</td></tr>`
  );
}

function socialRow(fields: SignatureFields, linkColor: string): string {
  const links: { label: string; url: string }[] = [];

  const linkedIn = normalizeUrl(fields.linkedIn);
  if (linkedIn) links.push({ label: "LinkedIn", url: linkedIn });

  const instagram = normalizeUrl(fields.instagram);
  if (instagram) links.push({ label: "Instagram", url: instagram });

  const facebook = normalizeUrl(fields.facebook);
  if (facebook) links.push({ label: "Facebook", url: facebook });

  if (links.length === 0) return "";

  const items = links
    .map(
      (link, index) =>
        (index > 0
          ? `<span style="color:#c9a227;margin:0 6px;font-family:${FONT};">·</span>`
          : "") +
        `<a href="${escapeHtml(link.url)}" style="color:${linkColor};text-decoration:none;font-size:12px;font-family:${FONT};font-weight:600;">${link.label}</a>`
    )
    .join("");

  return `<tr><td style="padding:8px 0 0;font-family:${FONT};font-size:12px;">${items}</td></tr>`;
}

function buildProfessional(fields: SignatureFields): string {
  const color = accent(fields);
  const name = escapeHtml(displayName(fields));
  const role = roleLine(fields);
  const imageUrl = normalizeImageUrl(fields.imageUrl);

  return (
    `<table cellpadding="0" cellspacing="0" border="0" style="font-family:${FONT};max-width:400px;">` +
    (imageUrl
      ? imageBlock(imageUrl, fields.studioImageMode, fields.company.trim() || displayName(fields))
      : "") +
    `<tr><td style="padding:0 0 10px;"><hr style="border:none;border-top:2px solid ${color};margin:0;" /></td></tr>` +
    `<tr><td style="padding:0 0 2px;font-family:${FONT};font-size:16px;font-weight:700;color:${color};letter-spacing:-0.2px;">${name}</td></tr>` +
    (role
      ? `<tr><td style="padding:0 0 8px;font-family:${FONT};font-size:12px;color:${MUTED};">${escapeHtml(role)}</td></tr>`
      : "") +
    contactInline(fields, color) +
    invoiceFastRow(fields) +
    `</table>`
  );
}

function buildMinimal(fields: SignatureFields): string {
  const color = accent(fields);
  const name = escapeHtml(displayName(fields));
  const role = roleLine(fields, { titleOnly: true });

  return (
    `<table cellpadding="0" cellspacing="0" border="0" style="font-family:${FONT};max-width:380px;">` +
    `<tr><td style="padding:0 0 4px;font-family:${FONT};font-size:14px;font-weight:700;color:${color};">${name}</td></tr>` +
    (role
      ? `<tr><td style="padding:0 0 8px;font-family:${FONT};font-size:12px;color:${MUTED};">${escapeHtml(role)}</td></tr>`
      : "") +
    contactInline(fields, color) +
    invoiceFastRow(fields) +
    `</table>`
  );
}

function buildBold(fields: SignatureFields): string {
  const color = accent(fields);
  const name = escapeHtml(displayName(fields));
  const role = roleLine(fields);
  const imageUrl = normalizeImageUrl(fields.imageUrl);

  return (
    `<table cellpadding="0" cellspacing="0" border="0" style="font-family:${FONT};max-width:440px;">` +
    `<tr>` +
    `<td width="6" style="background-color:${color};font-size:0;line-height:0;">&nbsp;</td>` +
    `<td style="padding:0 0 0 14px;font-family:${FONT};">` +
    `<table cellpadding="0" cellspacing="0" border="0">` +
    (imageUrl
      ? imageBlock(imageUrl, fields.studioImageMode, fields.company.trim() || displayName(fields))
      : "") +
    `<tr><td style="padding:0 0 4px;font-family:${FONT};font-size:20px;font-weight:700;color:${color};line-height:1.2;">${name}</td></tr>` +
    (role
      ? `<tr><td style="padding:0 0 6px;font-family:${FONT};font-size:12px;color:${MUTED};font-weight:600;">${escapeHtml(role)}</td></tr>`
      : "") +
    (fields.tagline.trim()
      ? `<tr><td style="padding:0 0 8px;font-family:${FONT};font-size:12px;color:${MUTED};">${escapeHtml(fields.tagline.trim())}</td></tr>`
      : "") +
    contactRows(fields, color) +
    socialRow(fields, color) +
    invoiceFastRow(fields) +
    `</table>` +
    `</td>` +
    `</tr>` +
    `</table>`
  );
}

function buildStudio(fields: SignatureFields): string {
  const color = accent(fields);
  const name = escapeHtml(displayName(fields));
  const role = roleLine(fields);
  const imageUrl = normalizeImageUrl(fields.imageUrl);
  const website = normalizeUrl(fields.website);

  const portfolioCta = website
    ? `<tr><td style="padding:10px 0 4px;font-family:${FONT};">` +
      `<a href="${escapeHtml(website)}" style="display:inline-block;background-color:${color};color:#ffffff;text-decoration:none;font-size:12px;font-weight:700;padding:8px 14px;border-radius:4px;font-family:${FONT};">View my work</a>` +
      `</td></tr>`
    : "";

  return (
    `<table cellpadding="0" cellspacing="0" border="0" style="font-family:${FONT};max-width:440px;">` +
    (imageUrl ? imageBlock(imageUrl, fields.studioImageMode, displayName(fields)) : "") +
    `<tr><td style="padding:0 0 4px;font-family:${FONT};font-size:18px;font-weight:700;color:${color};">${name}</td></tr>` +
    (role
      ? `<tr><td style="padding:0 0 6px;font-family:${FONT};font-size:12px;color:${MUTED};font-weight:600;">${escapeHtml(role)}</td></tr>`
      : "") +
    (fields.tagline.trim()
      ? `<tr><td style="padding:0 0 8px;font-family:${FONT};font-size:12px;color:${MUTED};font-style:italic;">${escapeHtml(fields.tagline.trim())}</td></tr>`
      : "") +
    socialRow(fields, color) +
    portfolioCta +
    contactRows(fields, color, { skipWebsite: Boolean(website) }) +
    invoiceFastRow(fields) +
    `</table>`
  );
}

function buildModern(fields: SignatureFields): string {
  const color = accent(fields);
  const name = escapeHtml(displayName(fields));
  const role = roleLine(fields);
  const imageUrl = normalizeImageUrl(fields.imageUrl);
  const imageHtml = sideImageHtml(imageUrl, fields.studioImageMode, displayName(fields));
  const leftCell = imageHtml
    ? `<td width="100" valign="middle" style="padding:0 16px 0 0;border-right:2px solid ${color};font-family:${FONT};">${imageHtml}</td>`
    : `<td width="4" valign="middle" style="background-color:${color};font-size:0;line-height:0;">&nbsp;</td>`;

  return (
    `<table cellpadding="0" cellspacing="0" border="0" style="font-family:${FONT};max-width:480px;">` +
    `<tr>` +
    leftCell +
    `<td valign="middle" style="padding-left:16px;font-family:${FONT};">` +
    `<table cellpadding="0" cellspacing="0" border="0">` +
    `<tr><td style="padding:0 0 2px;font-family:${FONT};font-size:17px;font-weight:700;color:${color};letter-spacing:-0.3px;">${name}</td></tr>` +
    (role
      ? `<tr><td style="padding:0 0 4px;font-family:${FONT};font-size:12px;color:${MUTED};font-weight:600;">${escapeHtml(role)}</td></tr>`
      : "") +
    (fields.tagline.trim()
      ? `<tr><td style="padding:0 0 6px;font-family:${FONT};font-size:11px;color:${MUTED};font-style:italic;">${escapeHtml(fields.tagline.trim())}</td></tr>`
      : "") +
    contactInline(fields, color) +
    invoiceFastRow(fields) +
    `</table>` +
    `</td>` +
    `</tr>` +
    `</table>`
  );
}

function buildLuxe(fields: SignatureFields): string {
  const color = accent(fields);
  const name = escapeHtml(displayName(fields));
  const role = roleLine(fields);
  const imageUrl = normalizeImageUrl(fields.imageUrl);
  const LIGHT = "#edf2ff";
  const MUTED_LIGHT = "#a8b3d1";
  const DARK = "#0f1628";

  const logoRow = imageUrl
    ? imageBlock(imageUrl, fields.studioImageMode, fields.company.trim() || displayName(fields))
    : "";

  const socialOnDark = socialRow(fields, color);
  const contactDark = contactRows(fields, color, { mutedColor: MUTED_LIGHT });
  const invoiceDark = invoiceFastRow(fields, { mutedColor: MUTED_LIGHT });

  return (
    `<table cellpadding="0" cellspacing="0" border="0" style="font-family:${FONT};max-width:460px;">` +
    `<tr><td style="background-color:${DARK};border-radius:8px;padding:0;font-family:${FONT};">` +
    `<table cellpadding="0" cellspacing="0" border="0" width="100%">` +
    `<tr><td height="4" style="background-color:${color};font-size:0;line-height:0;border-radius:8px 8px 0 0;">&nbsp;</td></tr>` +
    `<tr><td style="padding:18px 22px 20px;font-family:${FONT};">` +
    `<table cellpadding="0" cellspacing="0" border="0">` +
    logoRow +
    `<tr><td style="padding:0 0 4px;font-family:${FONT};font-size:19px;font-weight:700;color:${LIGHT};letter-spacing:-0.3px;">${name}</td></tr>` +
    (role
      ? `<tr><td style="padding:0 0 6px;font-family:${FONT};font-size:12px;color:${MUTED_LIGHT};font-weight:600;">${escapeHtml(role)}</td></tr>`
      : "") +
    (fields.tagline.trim()
      ? `<tr><td style="padding:0 0 10px;font-family:${FONT};font-size:12px;color:${color};font-style:italic;">${escapeHtml(fields.tagline.trim())}</td></tr>`
      : "") +
    `<tr><td style="padding:0 0 8px;"><hr style="border:none;border-top:1px solid #2a3558;margin:0;" /></td></tr>` +
    contactDark +
    socialOnDark +
    invoiceDark +
    `</table>` +
    `</td></tr>` +
    `</table>` +
    `</td></tr>` +
    `</table>`
  );
}

function buildCompact(fields: SignatureFields): string {
  const color = accent(fields);
  const name = escapeHtml(displayName(fields));
  const title = escapeHtml(fields.jobTitle.trim());

  const nameLine = title
    ? `${name}<span style="color:${MUTED};font-weight:400;"> · ${title}</span>`
    : name;

  return (
    `<table cellpadding="0" cellspacing="0" border="0" style="font-family:${FONT};max-width:360px;">` +
    `<tr><td style="padding:0 0 4px;font-family:${FONT};font-size:13px;font-weight:700;color:${color};line-height:1.5;">${nameLine}</td></tr>` +
    contactInline(fields, color) +
    invoiceFastRow(fields) +
    `</table>`
  );
}

function buildBanner(fields: SignatureFields): string {
  const color = accent(fields);
  const name = escapeHtml(displayName(fields));
  const role = roleLine(fields);
  const imageUrl = normalizeImageUrl(fields.imageUrl);

  const bannerImg =
    imageUrl && fields.studioImageMode === "logo"
      ? `<tr><td style="padding:0 0 10px;font-family:${FONT};">` +
        `<img src="${escapeHtml(imageUrl)}" width="280" alt="${escapeHtml(fields.company.trim() || displayName(fields))}" ` +
        `style="display:block;border:0;max-width:300px;height:auto;" />` +
        `</td></tr>`
      : imageUrl
        ? imageBlock(imageUrl, "headshot", displayName(fields))
        : "";

  return (
    `<table cellpadding="0" cellspacing="0" border="0" style="font-family:${FONT};max-width:400px;">` +
    bannerImg +
    `<tr><td style="padding:0 0 10px;"><hr style="border:none;border-top:3px solid ${color};margin:0;" /></td></tr>` +
    `<tr><td style="padding:0 0 2px;font-family:${FONT};font-size:15px;font-weight:700;color:${color};">${name}</td></tr>` +
    (role
      ? `<tr><td style="padding:0 0 8px;font-family:${FONT};font-size:12px;color:${MUTED};">${escapeHtml(role)}</td></tr>`
      : "") +
    contactInline(fields, color) +
    invoiceFastRow(fields) +
    `</table>`
  );
}

function buildAccent(fields: SignatureFields): string {
  const color = accent(fields);
  const name = escapeHtml(displayName(fields));
  const role = roleLine(fields);

  return (
    `<table cellpadding="0" cellspacing="0" border="0" style="font-family:${FONT};max-width:420px;border:1px solid #dde4f0;border-radius:8px;overflow:hidden;">` +
    `<tr><td style="background-color:${color};padding:14px 18px;font-family:${FONT};">` +
    `<table cellpadding="0" cellspacing="0" border="0" width="100%">` +
    `<tr><td style="font-family:${FONT};font-size:18px;font-weight:700;color:#ffffff;letter-spacing:-0.2px;">${name}</td></tr>` +
    (role
      ? `<tr><td style="padding:4px 0 0;font-family:${FONT};font-size:11px;color:#e8ecf8;font-weight:600;">${escapeHtml(role)}</td></tr>`
      : "") +
    `</table>` +
    `</td></tr>` +
    `<tr><td style="padding:12px 18px 14px;background-color:#ffffff;font-family:${FONT};">` +
    `<table cellpadding="0" cellspacing="0" border="0">` +
    (fields.tagline.trim()
      ? `<tr><td style="padding:0 0 8px;font-family:${FONT};font-size:12px;color:${MUTED};font-style:italic;">${escapeHtml(fields.tagline.trim())}</td></tr>`
      : "") +
    contactInline(fields, color) +
    invoiceFastRow(fields) +
    `</table>` +
    `</td></tr>` +
    `</table>`
  );
}

export function buildSignatureHtml(template: SignatureTemplate, fields: SignatureFields): string {
  switch (template) {
    case "professional":
      return buildProfessional(fields);
    case "minimal":
      return buildMinimal(fields);
    case "compact":
      return buildCompact(fields);
    case "bold":
      return buildBold(fields);
    case "studio":
      return buildStudio(fields);
    case "modern":
      return buildModern(fields);
    case "luxe":
      return buildLuxe(fields);
    case "banner":
      return buildBanner(fields);
    case "accent":
      return buildAccent(fields);
    default:
      return buildProfessional(fields);
  }
}

export function buildSignaturePlainText(template: SignatureTemplate, fields: SignatureFields): string {
  void template;
  const lines: string[] = [displayName(fields)];

  const role = roleLine(fields);
  if (role) lines.push(role);
  if (fields.tagline.trim()) lines.push(fields.tagline.trim());
  if (fields.phone.trim()) lines.push(fields.phone.trim());
  if (fields.email.trim()) lines.push(fields.email.trim());

  const website = normalizeUrl(fields.website);
  if (website) lines.push(website);

  const socials = [fields.linkedIn, fields.instagram, fields.facebook]
    .map((url) => normalizeUrl(url))
    .filter(Boolean) as string[];
  if (socials.length) lines.push(...socials);

  if (fields.includeInvoiceFastLine) {
    lines.push(`Invoices: ${fields.invoiceFastUrl}`);
  }

  return lines.join("\n");
}
