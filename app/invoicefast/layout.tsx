import type { Metadata } from "next";
import { brandOpenGraphImage } from "../../lib/brand-assets";
import { pageMetadata } from "../../lib/site-metadata";

export const metadata: Metadata = {
  ...pageMetadata({
    title: "InvoiceFast",
    description:
      "Create professional invoices, export PDFs, track history, and upgrade to Pro for logo, email sending, and no watermark.",
    path: "/invoicefast",
  }),
  openGraph: {
    title: "InvoiceFast by AuraStudioZa",
    description: "Professional invoices in minutes. Built for freelancers and small teams.",
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
