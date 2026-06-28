import { pageMetadata } from "../../lib/site-metadata";
import { JsonLd, faqPageJsonLd, softwareApplicationJsonLd } from "../../components/json-ld";
import { faqs } from "../../components/marketing/content";

export const metadata = pageMetadata({
  title: "InvoiceFast",
  description:
    "InvoiceFast — 14-day full Pro trial (no card). Bank details on PDF, VAT-inclusive ZAR, Share on WhatsApp. After trial: 10 free PDFs/mo or R79/month incl. VAT for unlimited PDFs, logo, email, 50 saved invoices.",
  path: "/invoicefast",
  keywords: [
    "InvoiceFast",
    "invoice generator South Africa",
    "freelance invoice template ZAR",
    "VAT invoice PDF South Africa",
    "WhatsApp invoice share",
    "14 day free trial invoicing",
    "R79 invoice software",
    "bank details on invoice PDF",
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
  return (
    <>
      <JsonLd data={faqPageJsonLd(faqs)} />
      <JsonLd
        data={softwareApplicationJsonLd({
          name: "InvoiceFast",
          description:
            "Professional invoice generator for South African freelancers with VAT-inclusive ZAR, PDF export, WhatsApp share, and subscription plans.",
          url: "https://app.aurastudioza.com",
          price: 79,
        })}
      />
      {children}
    </>
  );
}
