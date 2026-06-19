import type { StudioImageMode } from "./signature-template-config";
import type { SignatureTemplate } from "./signature-template-config";
import { TEMPLATE_IDS } from "./signature-template-config";

export const SIGNATURE_DRAFT_KEY = "aurastudioza-email-signature-draft";
const DRAFT_VERSION = 1;

export type SignatureDraftForm = {
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
};

export type SignatureDraft = {
  version: typeof DRAFT_VERSION;
  template: SignatureTemplate;
  form: SignatureDraftForm;
  uploadedFileName: string | null;
  savedAt: string;
};

const TEMPLATES = new Set<SignatureTemplate>(TEMPLATE_IDS);

function isStudioImageMode(value: unknown): value is StudioImageMode {
  return value === "logo" || value === "headshot";
}

function parseDraft(raw: string): SignatureDraft | null {
  try {
    const data = JSON.parse(raw) as Partial<SignatureDraft>;
    if (data.version !== DRAFT_VERSION) return null;
    if (!data.template || !TEMPLATES.has(data.template)) return null;
    if (!data.form || typeof data.form !== "object") return null;

    const form = data.form;
    if (!isStudioImageMode(form.studioImageMode)) return null;

    return {
      version: DRAFT_VERSION,
      template: data.template,
      form: {
        fullName: String(form.fullName ?? ""),
        jobTitle: String(form.jobTitle ?? ""),
        company: String(form.company ?? ""),
        phone: String(form.phone ?? ""),
        email: String(form.email ?? ""),
        website: String(form.website ?? ""),
        tagline: String(form.tagline ?? ""),
        accentColor: String(form.accentColor ?? "#1e2a5a"),
        imageUrl: String(form.imageUrl ?? ""),
        studioImageMode: form.studioImageMode,
        linkedIn: String(form.linkedIn ?? ""),
        instagram: String(form.instagram ?? ""),
        facebook: String(form.facebook ?? (form as { behance?: string }).behance ?? ""),
        includeInvoiceFastLine: Boolean(form.includeInvoiceFastLine),
      },
      uploadedFileName:
        typeof data.uploadedFileName === "string" ? data.uploadedFileName : null,
      savedAt: typeof data.savedAt === "string" ? data.savedAt : new Date().toISOString(),
    };
  } catch {
    return null;
  }
}

export function loadSignatureDraft(): SignatureDraft | null {
  if (typeof window === "undefined") return null;
  const raw = window.localStorage.getItem(SIGNATURE_DRAFT_KEY);
  if (!raw) return null;
  return parseDraft(raw);
}

export function saveSignatureDraft(
  draft: Pick<SignatureDraft, "template" | "form" | "uploadedFileName">
): boolean {
  if (typeof window === "undefined") return false;

  const payload: SignatureDraft = {
    version: DRAFT_VERSION,
    template: draft.template,
    form: draft.form,
    uploadedFileName: draft.uploadedFileName,
    savedAt: new Date().toISOString(),
  };

  try {
    window.localStorage.setItem(SIGNATURE_DRAFT_KEY, JSON.stringify(payload));
    return true;
  } catch {
    if (!payload.form.imageUrl.startsWith("data:")) return false;

    try {
      const withoutImage: SignatureDraft = {
        ...payload,
        form: { ...payload.form, imageUrl: "" },
        uploadedFileName: null,
      };
      window.localStorage.setItem(SIGNATURE_DRAFT_KEY, JSON.stringify(withoutImage));
      return false;
    } catch {
      return false;
    }
  }
}

export function clearSignatureDraft(): void {
  if (typeof window === "undefined") return;
  window.localStorage.removeItem(SIGNATURE_DRAFT_KEY);
}

export function draftHasContent(form: SignatureDraftForm): boolean {
  return Boolean(
    form.fullName.trim() ||
      form.jobTitle.trim() ||
      form.company.trim() ||
      form.phone.trim() ||
      form.email.trim() ||
      form.website.trim() ||
      form.tagline.trim() ||
      form.imageUrl.trim() ||
      form.linkedIn.trim() ||
      form.instagram.trim() ||
      form.facebook.trim()
  );
}
