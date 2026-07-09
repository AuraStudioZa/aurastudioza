import type { Metadata } from "next";
import { brandOpenGraphImage } from "./brand-assets";

export const siteUrl = "https://aurastudioza.com";

/**
 * Per-page SEO for marketing routes and free tools.
 *
 * **Required for every new public page** (especially `/free-tool` routes):
 * - `title`, `description`, `path`, `keywords` (5–10 phrases — page-specific, not homepage copy)
 * - `openGraphTitle` / `openGraphDescription` when the default title differs from social copy
 *
 * **Free tool checklist** (add alongside `app/<tool>/layout.tsx`):
 * 1. `pageMetadata({ ... keywords: [...] })` in layout
 * 2. Entry in `app/sitemap.ts`
 * 3. Card in `components/studio/content.ts` → `freeTools`
 * 4. UTM helper in `lib/site-links.ts` if linking to InvoiceFast
 * 5. After deploy: GSC → request indexing (submit `sitemap.xml` only — not the page URL)
 *
 * For **full SaaS apps**, define keywords in the product brief before build — do not inherit root layout defaults.
 */
type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
  keywords: string[];
  openGraphTitle?: string;
  openGraphDescription?: string;
};

export function pageMetadata({
  title,
  description,
  path,
  keywords,
  openGraphTitle,
  openGraphDescription,
}: PageMetadataInput): Metadata {
  const url = `${siteUrl}${path}`;
  const ogTitle = openGraphTitle ?? title;
  const ogDescription = openGraphDescription ?? description;

  return {
    title,
    description,
    keywords,
    alternates: { canonical: url },
    openGraph: {
      title: ogTitle,
      description: ogDescription,
      url,
      siteName: "AuraStudioZa",
      type: "website",
      images: [brandOpenGraphImage],
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description: ogDescription,
      images: [brandOpenGraphImage.url],
    },
  };
}

export const homePageMetadata: Metadata = {
  title: {
    absolute: "AuraStudioZa — SA Freelancer & Small Business Tools",
  },
  description:
    "InvoiceFast invoicing, Vehicle Logbook km tracking, Expense Report PDFs, and free tools for SA freelancers — VAT calculator, email signatures, ZAR pricing.",
  keywords: [
    "AuraStudioZa",
    "freelancer software South Africa",
    "small business tools SA",
    "studio home InvoiceFast logbook expense report",
    "expense report generator South Africa",
    "free VAT calculator",
    "email signature generator",
    "South African SaaS studio",
    "ZAR business software",
  ],
  alternates: { canonical: siteUrl },
  openGraph: {
    title: "AuraStudioZa — SA Freelancer & Small Business Tools",
    description:
      "InvoiceFast invoicing, Vehicle Logbook km tracking, Expense Report PDFs, and free tools for SA freelancers — VAT calculator, email signatures, ZAR pricing.",
    url: siteUrl,
    siteName: "AuraStudioZa",
    type: "website",
    images: [brandOpenGraphImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "AuraStudioZa — SA Freelancer & Small Business Tools",
    description:
      "InvoiceFast invoicing, Vehicle Logbook km tracking, Expense Report PDFs, and free tools for SA freelancers — VAT calculator, email signatures, ZAR pricing.",
    images: [brandOpenGraphImage.url],
  },
};

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: "AuraStudioZa",
      url: siteUrl,
      logo: `${siteUrl}/brand-mark.png`,
      email: "support@aurastudioza.com",
    },
    {
      "@type": "WebSite",
      name: "AuraStudioZa",
      url: siteUrl,
    },
  ],
};
