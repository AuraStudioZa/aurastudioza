import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/web-design", "/web-design/"],
    },
    sitemap: "https://aurastudioza.com/sitemap.xml",
  };
}
