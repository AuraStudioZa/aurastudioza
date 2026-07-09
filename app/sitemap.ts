import type { MetadataRoute } from "next";
import { getAllBlogPosts } from "../lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const blogPosts = getAllBlogPosts();

  return [
    {
      url: "https://aurastudioza.com",
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://aurastudioza.com/about",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://aurastudioza.com/blog",
      lastModified,
      changeFrequency: "weekly",
      priority: 0.75,
    },
    ...blogPosts.map((post) => ({
      url: `https://aurastudioza.com/blog/${post.slug}`,
      lastModified: new Date(post.updatedAt ?? post.publishedAt),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    {
      url: "https://aurastudioza.com/invoicefast",
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://aurastudioza.com/logbook",
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://aurastudioza.com/expenses",
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://aurastudioza.com/privacy",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.4,
    },
    {
      url: "https://aurastudioza.com/terms",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.4,
    },
    {
      url: "https://aurastudioza.com/email-signature",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.65,
    },
    {
      url: "https://aurastudioza.com/vat-calculator",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.65,
    },
    {
      url: "https://aurastudioza.com/contact",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ];
}
