import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aura Studio ZA | InvoiceFast - Professional Online Invoice Generator",
  description:
    "Create professional invoices, export PDFs, track history, and upgrade to Pro for logo, email sending, and no watermark.",
  keywords: [
    "invoice generator South Africa",
    "freelance invoicing",
    "online invoice maker",
    "PDF invoices",
    "VAT friendly invoices",
    "InvoiceFast",
  ],
  openGraph: {
    title: "InvoiceFast by Aura Studio ZA",
    description: "Professional invoices in minutes. Built for freelancers and small teams.",
    url: "https://aurastudioza.com",
    siteName: "Aura Studio ZA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "InvoiceFast by Aura Studio ZA",
    description: "Create, export, and track invoices with a clean workflow built for freelancers.",
  },
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
