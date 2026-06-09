import type { Metadata } from "next";
import { brandOpenGraphImage } from "../../lib/brand-assets";
import { pageMetadata } from "../../lib/site-metadata";

export const metadata: Metadata = {
  ...pageMetadata({
    title: "InvoiceFast",
    description:
      "InvoiceFast — 14-day full Pro trial (no card). Bank details on PDF, VAT-inclusive ZAR. Then R79/month incl. VAT for unlimited PDFs, logo, email, 50 saved invoices.",
    path: "/invoicefast",
  }),
  openGraph: {
    title: "InvoiceFast by AuraStudioZa",
    description:
      "Professional invoices in minutes. 14-day Pro trial, then free tier or R79/month incl. VAT.",
    url: "https://aurastudioza.com/invoicefast",
    siteName: "AuraStudioZa",
    type: "website",
    images: [brandOpenGraphImage],
  },
};

export default function InvoiceFastLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
