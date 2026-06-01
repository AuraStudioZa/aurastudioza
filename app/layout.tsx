import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import { Analytics } from "../components/analytics";
import { SiteJsonLd } from "../components/site-json-ld";
import { brandAssets, brandOpenGraphImage } from "../lib/brand-assets";
import { siteUrl } from "../lib/site-metadata";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-body" });
const sora = Sora({ subsets: ["latin"], variable: "--font-display" });

const themeInitScript = `
(function () {
  try {
    var stored = localStorage.getItem("theme");
    var theme = stored === "light" || stored === "dark"
      ? stored
      : (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    document.documentElement.setAttribute("data-theme", theme);
  } catch (e) {}
})();
`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "AuraStudioZa — Practical Software for Freelancers and Small Business",
    template: "%s | AuraStudioZa",
  },
  description:
    "AuraStudioZa builds focused tools for modern independent work. Explore InvoiceFast and future products from one studio.",
  alternates: { canonical: siteUrl },
  icons: {
    icon: [
      { url: brandAssets.favicon, type: "image/svg+xml" },
      { url: brandAssets.markCompactPng, type: "image/png", sizes: "96x96" },
    ],
    apple: [{ url: brandAssets.markIconPng, type: "image/png" }],
  },
  openGraph: {
    images: [brandOpenGraphImage],
  },
  twitter: {
    card: "summary_large_image",
    images: [brandOpenGraphImage.url],
  },
  keywords: [
    "AuraStudioZa",
    "freelancer software South Africa",
    "small business tools",
    "InvoiceFast",
    "invoice generator",
  ],
  ...(process.env.GOOGLE_SITE_VERIFICATION
    ? {
        verification: {
          google: process.env.GOOGLE_SITE_VERIFICATION,
        },
      }
    : {}),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-ZA" className={`${inter.variable} ${sora.variable}`} suppressHydrationWarning>
      <body className={inter.className}>
        <SiteJsonLd />
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
