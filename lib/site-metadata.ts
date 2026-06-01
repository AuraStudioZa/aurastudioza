import type { Metadata } from "next";

export const siteUrl = "https://aurastudioza.com";

export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const url = `${siteUrl}${path}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: "AuraStudioZa",
      type: "website",
    },
  };
}

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
