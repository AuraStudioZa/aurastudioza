import { pageMetadata } from "../../lib/site-metadata";

export const metadata = pageMetadata({
  title: "InvoiceFast",
  description:
    "InvoiceFast — 14-day full Pro trial (no card). Bank details on PDF, VAT-inclusive ZAR, Share on WhatsApp. After trial: 10 free PDFs/mo or R79/month incl. VAT for unlimited PDFs, logo, email, 50 saved invoices.",
  path: "/invoicefast",
  keywords: [
    "invoice generator South Africa",
    "invoice software for freelancers",
    "VAT invoice generator",
    "free invoice maker ZA",
    "InvoiceFast",
    "ZAR invoice PDF",
  ],
  openGraphTitle: "InvoiceFast — Invoice Generator for South African Freelancers",
  openGraphDescription:
    "Professional ZAR invoices with VAT-inclusive lines, bank details on PDF, WhatsApp share, and a 14-day Pro trial. Free tier: 10 PDFs/mo — or R79/month incl. VAT for Pro.",
});

export default function InvoiceFastLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
