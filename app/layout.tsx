import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://aurastudioza.com"),
  keywords: [
    "AuraStudioZa",
    "freelancer software South Africa",
    "small business tools",
    "InvoiceFast",
    "invoice generator",
  ],
  twitter: {
    card: "summary_large_image",
  },
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
    <html lang="en-ZA">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
