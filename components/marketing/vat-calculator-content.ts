import { withUtm, appLinks } from "../../lib/site-links";

export const vatCalculatorLinks = {
  signup: withUtm(appLinks.signup, {
    medium: "tool",
    campaign: "vat-calculator",
  }),
  invoicefast: withUtm("https://aurastudioza.com/invoicefast", {
    medium: "tool",
    campaign: "vat-calculator",
  }),
} as const;

export const vatFaqs = [
  {
    question: "Which countries and currencies are supported?",
    answer:
      "Type in the country field to search by name, code (e.g. ZA, GB), or currency (EUR, USD). We also try to pre-select your country from browser locale or timezone — no GPS or permission needed. Standard rates are editable.",
  },
  {
    question: "When do I use excl. VAT vs incl. VAT?",
    answer:
      "Use excl. VAT when your price or quote is before tax (VAT is added on top). Use incl. VAT when the price you quote or receive already includes tax — common on receipts and consumer prices.",
  },
  {
    question: "How is VAT calculated on an inclusive amount?",
    answer:
      "Divide the inclusive total by (1 + rate ÷ 100). Example at 15%: 115 ÷ 1.15 = 100 excl., 15 tax, 115 incl.",
  },
  {
    question: "Is this tax advice?",
    answer:
      "No. Standard rates are indicative only — reduced rates, exemptions, and registration rules differ by country. Confirm with a registered tax practitioner.",
  },
  {
    question: "Can InvoiceFast use these amounts on invoices?",
    answer:
      "Yes. InvoiceFast supports VAT-inclusive line items in ZAR (and other currencies), bank details on the PDF, and a 14-day Pro trial with no card required.",
  },
] as const;
