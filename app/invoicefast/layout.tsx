import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "InvoiceFast | AuraStudioZa - Professional Online Invoice Generator",
  description:
    "Create professional invoices, export PDFs, track history, and upgrade to Pro for logo, email sending, and no watermark.",
  openGraph: {
    title: "InvoiceFast by AuraStudioZa",
    description: "Professional invoices in minutes. Built for freelancers and small teams.",
    url: "https://aurastudioza.com/invoicefast",
    siteName: "AuraStudioZa",
    type: "website",
  },
};

export default function InvoiceFastLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
