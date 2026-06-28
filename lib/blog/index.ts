import fs from "node:fs";
import path from "node:path";
import { parseBlogMarkdown } from "./parse-frontmatter";
import type { BlogPost } from "./types";

const blogDir = path.join(process.cwd(), "content", "blog");

function readPostFile(fileName: string): BlogPost {
  const source = fs.readFileSync(path.join(blogDir, fileName), "utf8");
  return parseBlogMarkdown(source);
}

export function getAllBlogPosts(): BlogPost[] {
  const files = fs
    .readdirSync(blogDir)
    .filter((file) => file.endsWith(".md"))
    .sort();

  return files
    .map(readPostFile)
    .sort((a, b) => Date.parse(b.publishedAt) - Date.parse(a.publishedAt));
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return getAllBlogPosts().find((post) => post.slug === slug);
}

export function getAllBlogSlugs(): string[] {
  return getAllBlogPosts().map((post) => post.slug);
}
