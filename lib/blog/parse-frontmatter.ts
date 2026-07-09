import type { BlogPost, BlogPostCta } from "./types";

type RawFrontmatter = {
  slug: string;
  title: string;
  seoTitle?: string;
  description: string;
  publishedAt: string;
  updatedAt?: string;
  keywords: string[];
  ogImage?: string;
  cta: BlogPostCta;
};

function parseYamlLine(line: string): [string, string] | null {
  const idx = line.indexOf(":");
  if (idx === -1) return null;
  const key = line.slice(0, idx).trim();
  const value = line.slice(idx + 1).trim();
  return [key, value];
}

function parseKeywords(value: string): string[] {
  if (value.startsWith("[") && value.endsWith("]")) {
    return value
      .slice(1, -1)
      .split(",")
      .map((item) => item.trim().replace(/^"|"$/g, ""))
      .filter(Boolean);
  }
  return value
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
}

function parseCtaBlock(lines: string[]): BlogPostCta {
  const cta: Partial<BlogPostCta> = {};
  for (const line of lines) {
    const parsed = parseYamlLine(line);
    if (!parsed) continue;
    const [key, value] = parsed;
    const clean = value.replace(/^"|"$/g, "");
    if (key === "eyebrow") cta.eyebrow = clean;
    if (key === "title") cta.title = clean;
    if (key === "primaryHref") cta.primaryHref = clean;
    if (key === "primaryLabel") cta.primaryLabel = clean;
    if (key === "secondaryHref") cta.secondaryHref = clean;
    if (key === "secondaryLabel") cta.secondaryLabel = clean;
  }
  if (!cta.eyebrow || !cta.title || !cta.primaryHref || !cta.primaryLabel) {
    throw new Error("Blog post CTA frontmatter is incomplete.");
  }
  return cta as BlogPostCta;
}

export function parseBlogMarkdown(source: string): BlogPost {
  const match = source.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!match) {
    throw new Error("Blog post must start with YAML frontmatter.");
  }

  const [, frontmatterRaw, body] = match;
  const lines = frontmatterRaw.split(/\r?\n/);
  const scalar: Record<string, string> = {};
  let keywordLine: string | undefined;
  const ctaLines: string[] = [];
  let inCta = false;

  for (const line of lines) {
    if (line.trim() === "cta:") {
      inCta = true;
      continue;
    }
    if (inCta) {
      if (line.startsWith("  ")) {
        ctaLines.push(line.trim());
        continue;
      }
      inCta = false;
    }
    const parsed = parseYamlLine(line);
    if (!parsed) continue;
    const [key, value] = parsed;
    if (key === "keywords") {
      keywordLine = value;
      continue;
    }
    scalar[key] = value.replace(/^"|"$/g, "");
  }

  const post: BlogPost = {
    slug: scalar.slug,
    title: scalar.title,
    seoTitle: scalar.seoTitle,
    description: scalar.description,
    publishedAt: scalar.publishedAt,
    updatedAt: scalar.updatedAt,
    keywords: keywordLine ? parseKeywords(keywordLine) : [],
    ogImage: scalar.ogImage,
    cta: parseCtaBlock(ctaLines),
    body: body.trim(),
  };

  if (!post.slug || !post.title || !post.description || !post.publishedAt) {
    throw new Error("Blog post frontmatter is missing required fields.");
  }

  return post;
}
