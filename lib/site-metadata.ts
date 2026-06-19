import type { Metadata } from "next";
import { brandOpenGraphImage } from "./brand-assets";

export const siteUrl = "https://aurastudioza.com";

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
  title: "AuraStudioZa — Practical Software for Freelancers and Small Business",
  description:
    "AuraStudioZa builds focused tools for South African freelancers and small businesses — InvoiceFast invoicing, Vehicle Logbook mileage tracking, and free tools like our email signature generator.",
  keywords: [
    "AuraStudioZa",
    "freelancer software South Africa",
    "small business tools",
    "InvoiceFast",
    "invoice generator",
    "vehicle logbook South Africa",
  ],
  alternates: { canonical: siteUrl },
  openGraph: {
    title: "AuraStudioZa — Freelancer & Small Business Software South Africa",
    description:
      "InvoiceFast, Vehicle Logbook, and free tools for freelancers and small businesses in South Africa.",
    url: siteUrl,
    siteName: "AuraStudioZa",
    type: "website",
    images: [brandOpenGraphImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "AuraStudioZa — Freelancer & Small Business Software South Africa",
    description:
      "InvoiceFast, Vehicle Logbook, and free tools for freelancers and small businesses in South Africa.",
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
