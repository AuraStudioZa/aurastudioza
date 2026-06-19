export type SignatureTemplate =
  | "professional"
  | "minimal"
  | "compact"
  | "bold"
  | "studio"
  | "modern"
  | "luxe"
  | "banner"
  | "accent";

export type StudioImageMode = "logo" | "headshot";

export type TemplateFieldConfig = {
  group: "classic" | "creative";
  company: boolean;
  tagline: boolean;
  website: boolean;
  websiteLabel: string;
  accentColor: boolean;
  image: boolean;
  imageUsesHeadshotMode: boolean;
  social: boolean;
  invoiceFastOption: boolean;
  defaultAccent: string;
};

export const TEMPLATE_IDS: SignatureTemplate[] = [
  "professional",
  "minimal",
  "compact",
  "bold",
  "studio",
  "modern",
  "luxe",
  "banner",
  "accent",
];
export const templateFieldConfig: Record<SignatureTemplate, TemplateFieldConfig> = {
  minimal: {
    group: "classic",
    company: false,
    tagline: false,
    website: true,
    websiteLabel: "Website (optional)",
    accentColor: false,
    image: false,
    imageUsesHeadshotMode: false,
    social: false,
    invoiceFastOption: true,
    defaultAccent: "#1e2a5a",
  },
  compact: {
    group: "classic",
    company: false,
    tagline: false,
    website: true,
    websiteLabel: "Website (optional)",
    accentColor: false,
    image: false,
    imageUsesHeadshotMode: false,
    social: false,
    invoiceFastOption: true,
    defaultAccent: "#1e2a5a",
  },
  professional: {
    group: "classic",
    company: true,
    tagline: false,
    website: true,
    websiteLabel: "Website",
    accentColor: true,
    image: true,
    imageUsesHeadshotMode: true,
    social: false,
    invoiceFastOption: true,
    defaultAccent: "#1e2a5a",
  },
  bold: {
    group: "creative",
    company: true,
    tagline: true,
    website: true,
    websiteLabel: "Website",
    accentColor: true,
    image: true,
    imageUsesHeadshotMode: true,
    social: true,
    invoiceFastOption: false,
    defaultAccent: "#1e2a5a",
  },
  studio: {
    group: "creative",
    company: true,
    tagline: true,
    website: true,
    websiteLabel: "Portfolio / website URL",
    accentColor: true,
    image: true,
    imageUsesHeadshotMode: true,
    social: true,
    invoiceFastOption: false,
    defaultAccent: "#1e2a5a",
  },
  modern: {
    group: "creative",
    company: true,
    tagline: true,
    website: true,
    websiteLabel: "Website",
    accentColor: true,
    image: true,
    imageUsesHeadshotMode: true,
    social: false,
    invoiceFastOption: false,
    defaultAccent: "#1e2a5a",
  },
  luxe: {
    group: "creative",
    company: true,
    tagline: true,
    website: true,
    websiteLabel: "Website",
    accentColor: true,
    image: true,
    imageUsesHeadshotMode: true,
    social: true,
    invoiceFastOption: false,
    defaultAccent: "#c9a227",
  },
  banner: {
    group: "creative",
    company: true,
    tagline: false,
    website: true,
    websiteLabel: "Website",
    accentColor: true,
    image: true,
    imageUsesHeadshotMode: true,
    social: false,
    invoiceFastOption: false,
    defaultAccent: "#1e2a5a",
  },
  accent: {
    group: "creative",
    company: true,
    tagline: true,
    website: true,
    websiteLabel: "Website",
    accentColor: true,
    image: false,
    imageUsesHeadshotMode: false,
    social: false,
    invoiceFastOption: false,
    defaultAccent: "#1e2a5a",
  },
};

export function defaultIncludeInvoiceFast(template: SignatureTemplate): boolean {
  return templateFieldConfig[template].invoiceFastOption;
}

export function imageProcessModeForTemplate(
  template: SignatureTemplate,
  studioImageMode: StudioImageMode
): "logo" | "headshot" {
  const config = templateFieldConfig[template];
  if (config.imageUsesHeadshotMode && studioImageMode === "headshot") {
    return "headshot";
  }
  return "logo";
}
