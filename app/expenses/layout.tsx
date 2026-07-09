import { pageMetadata } from "../../lib/site-metadata";
import { JsonLd, faqPageJsonLd, softwareApplicationJsonLd } from "../../components/json-ld";
import { expenseFaqs } from "../../components/marketing/expense-content";

export const metadata = pageMetadata({
  title: "Expense Report Generator — ZAR PDF SA",
  description:
    "Free expense report PDFs in ZAR for SA contractors — 10/mo, WhatsApp share, 14-day Pro trial. Receipts & spreadsheet on Pro from R49/mo incl. VAT.",
  path: "/expenses",
  keywords: [
    "expense report generator South Africa",
    "free expense report PDF ZAR",
    "contractor expense claim template SA",
    "freelancer expense report app",
    "expense report WhatsApp South Africa",
    "reimbursement report PDF",
    "R49 expense software",
    "expense report spreadsheet export",
  ],
  openGraphTitle: "Expense Report — Contractor Reimbursement PDFs (SA)",
  openGraphDescription:
    "Create ZAR expense report PDFs with live preview. 10 free reports/mo, WhatsApp share, 14-day Pro trial — R49/mo incl. VAT for receipts and spreadsheet export.",
});
export default function ExpensesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <JsonLd data={faqPageJsonLd(expenseFaqs)} />
      <JsonLd
        data={softwareApplicationJsonLd({
          name: "Expense Report",
          description:
            "Expense report generator for South African contractors with ZAR PDF export, WhatsApp share, receipt images, and spreadsheet export on Pro.",
          url: "https://expenses.aurastudioza.com",
          price: 49,
        })}
      />
      {children}
    </>
  );
}
