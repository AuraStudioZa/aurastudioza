import { emailSignatureAppLink, emailSignatureMarketingLink } from "../../lib/site-links";
import type { SignatureTemplate } from "../../lib/signature-template-config";

export const emailSignatureLinks = {
  signup: emailSignatureAppLink("signup"),
  login: emailSignatureAppLink("login"),
  invoicefast: emailSignatureMarketingLink("/invoicefast"),
  invoiceFastInSignature: emailSignatureAppLink("signup"),
} as const;

export type TemplateOption = {
  id: SignatureTemplate;
  label: string;
  description: string;
  group: "classic" | "creative";
};

export const templateOptions: TemplateOption[] = [
  {
    id: "professional",
    label: "Professional",
    description: "Clean centred layout — consultants and corporates.",
    group: "classic",
  },
  {
    id: "minimal",
    label: "Minimal",
    description: "Name and contact only — no clutter.",
    group: "classic",
  },
  {
    id: "compact",
    label: "Compact",
    description: "One-line name and role — ultra-short signatures.",
    group: "classic",
  },
  {
    id: "bold",
    label: "Bold",
    description: "Accent bar and large name — stand out.",
    group: "creative",
  },
  {
    id: "studio",
    label: "Studio",
    description: "Portfolio CTA, socials, headshot or logo.",
    group: "creative",
  },
  {
    id: "modern",
    label: "Modern",
    description: "Side-by-side split — contemporary and sharp.",
    group: "creative",
  },
  {
    id: "luxe",
    label: "Luxe",
    description: "Dark panel with gold accent — premium agency feel.",
    group: "creative",
  },
  {
    id: "banner",
    label: "Banner",
    description: "Wide logo strip with accent rule — brand-forward.",
    group: "creative",
  },
  {
    id: "accent",
    label: "Accent",
    description: "Colour header block with clean details below.",
    group: "creative",
  },
];

export const templateGroups = [
  { id: "classic" as const, label: "Classic" },
  { id: "creative" as const, label: "Modern & creative" },
];

/** Shown near logo upload / URL fields and in install instructions. */
export const logoImageGuidance = {
  upload:
    "Upload JPEG/PNG — resized and embedded in your signature. Best for Spacemail paste and most personal inboxes.",
  url: "Or paste image URL — a public https link (~100–180px wide) if your logo is already hosted online.",
  corporate:
    "Uploaded logos are embedded in the HTML. Some strict corporate mail filters block embedded images. If a recipient cannot see your logo, host it on a website and use Or paste image URL instead.",
} as const;

export const installSteps = [
  {
    client: "Spacemail",
    steps: [
      "Open Settings → Mail → Signatures → + New signature (or edit existing).",
      "On the generator, click Copy signature (not HTML source).",
      "Click inside the signature box and paste (Ctrl+V) — formatted text and logo should appear.",
      "Logo: Upload JPEG/PNG on the generator, or paste a hosted https image URL.",
      logoImageGuidance.corporate,
      "Check Default signature, Save, then compose a new email to verify.",
    ],
  },
  {
    client: "Gmail",
    steps: [
      "Settings → See all settings → General → Signature.",
      "Create or edit a signature.",
      "Click Copy signature on the generator, then paste into the editor.",
      logoImageGuidance.corporate,
      "Scroll down and Save Changes.",
    ],
  },
  {
    client: "Outlook",
    steps: [
      "Settings → Mail → Compose and reply → Email signature.",
      "Paste into the signature editor (use Copy signature on the generator).",
      logoImageGuidance.corporate,
      "Save and send a test message.",
    ],
  },
];

export const signatureFaqs = [
  {
    question: "Is my data saved if I refresh?",
    answer:
      "Yes — your details are stored in this browser only (local storage) until you copy your signature or click Start over. Nothing is sent to our servers.",
  },
  {
    question: "Why do fields change when I switch templates?",
    answer:
      "Each template only shows what it uses — for example Minimal hides logo and social fields, while Studio shows portfolio and social links. Pick a template first, then fill in the fields that appear.",
  },
  {
    question: "Can I upload a logo from my computer?",
    answer:
      "Yes — use Upload JPEG/PNG. The image is embedded in your signature HTML (great for Spacemail). " +
      logoImageGuidance.corporate,
  },
  {
    question: "Why do I paste an image URL instead of uploading?",
    answer:
      "A public https link lets recipients' mail apps load your logo from the web. Use this if you do not want an embedded image, or if corporate filters block embedded logos. Host on your website, Canva, or cloud storage with a direct .png or .jpg link.",
  },
  {
    question: "Why table-based HTML?",
    answer:
      "Gmail, Outlook, and most clients strip modern CSS. Tables with inline styles are the reliable standard for signatures that look the same everywhere.",
  },
  {
    question: "Is this free?",
    answer:
      "Yes — no sign-up required. InvoiceFast (professional invoicing for SA freelancers) is optional and linked separately if you want it.",
  },
];
