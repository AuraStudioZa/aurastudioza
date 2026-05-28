import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: "https://aurastudioza.com",
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://aurastudioza.com/invoicefast",
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ];
}
