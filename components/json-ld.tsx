type JsonLdProps = {
  data: Record<string, unknown> | Record<string, unknown>[];
};

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

type FaqItem = {
  question: string;
  answer: string;
};

export function faqPageJsonLd(faqs: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

type SoftwareApplicationInput = {
  name: string;
  description: string;
  url: string;
  price: number;
  priceCurrency?: string;
};

export function softwareApplicationJsonLd({
  name,
  description,
  url,
  price,
  priceCurrency = "ZAR",
}: SoftwareApplicationInput) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name,
    description,
    url,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: String(price),
      priceCurrency,
      availability: "https://schema.org/InStock",
    },
    provider: {
      "@type": "Organization",
      name: "AuraStudioZa",
      url: "https://aurastudioza.com",
    },
  };
}

type BlogPostingInput = {
  title: string;
  description: string;
  slug: string;
  publishedAt: string;
  modifiedAt?: string;
  keywords?: string[];
  image?: string;
};

export function blogPostingJsonLd({
  title,
  description,
  slug,
  publishedAt,
  modifiedAt,
  keywords,
  image,
}: BlogPostingInput) {
  const url = `https://aurastudioza.com/blog/${slug}`;
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description,
    url,
    datePublished: publishedAt,
    dateModified: modifiedAt ?? publishedAt,
    keywords: keywords?.join(", "),
    image: image ?? "https://aurastudioza.com/brand-mark.png",
    author: {
      "@type": "Organization",
      name: "AuraStudioZa",
      url: "https://aurastudioza.com",
    },
    publisher: {
      "@type": "Organization",
      name: "AuraStudioZa",
      url: "https://aurastudioza.com",
      logo: {
        "@type": "ImageObject",
        url: "https://aurastudioza.com/brand-mark.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
  };
}

export function aboutOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "AuraStudioZa",
    url: "https://aurastudioza.com",
    logo: "https://aurastudioza.com/brand-mark.png",
    description:
      "AuraStudioZa builds practical software for South African freelancers and small businesses — including InvoiceFast, Vehicle Logbook, and free business tools.",
    email: "support@aurastudioza.com",
    foundingLocation: {
      "@type": "Place",
      name: "South Africa",
    },
    founder: {
      "@type": "Person",
      name: "Gerswin Isaacs",
      jobTitle: "Founder",
    },
  };
}
