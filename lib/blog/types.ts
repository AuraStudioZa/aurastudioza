export type BlogPostCta = {
  eyebrow: string;
  title: string;
  primaryHref: string;
  primaryLabel: string;
  secondaryHref?: string;
  secondaryLabel?: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  /** Optional shorter title for `<title>` / metadata only; H1 always uses `title`. */
  seoTitle?: string;
  description: string;
  publishedAt: string;
  updatedAt?: string;
  keywords: string[];
  ogImage?: string;
  cta: BlogPostCta;
  body: string;
};
