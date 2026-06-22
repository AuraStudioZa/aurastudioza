export const socialProof = [
  "Freelance Designers",
  "Consultants",
  "Content Creators",
  "Small Agencies",
];

export const features = [
  {
    title: "Live invoice builder",
    description:
      "Build invoices in one flow with instant preview — ZAR defaults to VAT-inclusive line rates.",
  },
  {
    title: "Professional PDFs",
    description:
      "Download clean, client-ready PDFs during your Pro trial. Add bank details and VAT reg from your account.",
  },
  {
    title: "Invoice history",
    description:
      "Saved invoices in your account — after trial, Free keeps 10; Pro keeps 50 (oldest removed when full).",
  },
  {
    title: "Payment details on PDF",
    description:
      "Save bank and VAT registration once on your profile; show them on every PDF automatically.",
  },
  {
    title: "Share on WhatsApp",
    description:
      "Send the PDF and a prefilled payment message to clients in one tap from the app.",
  },
  {
    title: "CSV exports",
    description: "Pro: export saved invoices for bookkeeping and monthly reporting.",
  },
  {
    title: "VAT-friendly totals",
    description:
      "Ex-VAT subtotal and VAT breakdown on the PDF — built for South African freelancers.",
  },
];

export const steps = [
  {
    title: "Create",
    description:
      "Add client, line items, and due date. ZAR invoices default to VAT-inclusive rates.",
  },
  {
    title: "Export or send",
    description:
      "During your 14-day Pro trial: email clients, share on WhatsApp, or download PDFs with no watermark.",
  },
  {
    title: "Get paid",
    description:
      "Bank details on the PDF, optional signature block, and saved history when you finalize.",
  },
];

export const plans = {
  trial: {
    name: "Pro trial",
    price: "Free",
    priceSuffix: "14 days · no card",
    subtext: "Full Pro access when you sign up",
    features: [
      "Unlimited PDF downloads",
      "Email invoices to clients",
      "Your logo on PDFs — no watermark",
      "Up to 50 saved invoices during trial",
      "Bank & VAT details on PDF",
    ],
    cta: "Start 14-day trial",
  },
  free: {
    name: "Free",
    price: "R0",
    subtext: "After your trial ends",
    features: [
      "10 PDF downloads per month",
      "10 saved invoices in history",
      "Share on WhatsApp",
      "Watermark on PDFs",
      "Bank & VAT details on PDF (profile)",
      "VAT-inclusive ZAR line items",
    ],
    cta: "Start trial",
  },
  pro: {
    name: "Pro",
    price: "R79",
    priceSuffix: "incl. VAT / month",
    subtext: "Keep full access after your trial",
    features: [
      "Unlimited PDF downloads",
      "Up to 50 saved invoices (oldest removed when full)",
      "Your logo on PDFs — no watermark",
      "Email invoices to clients (PDF attached)",
      "CSV export from invoice history",
    ],
    footnote:
      "Billed via Lemon Squeezy. Cancel anytime from the billing portal in the app.",
    cta: "Upgrade to Pro",
  },
};

export const faqs = [
  {
    question: "Is there a free trial?",
    answer:
      "Yes. Every new account gets 14 days of full Pro access — unlimited PDFs, email, logo, no watermark. No credit card required to start.",
  },
  {
    question: "What happens after the trial?",
    answer:
      "Your account moves to the free plan: 10 watermarked PDF downloads per month and up to 10 saved invoices, unless you upgrade to Pro.",
  },
  {
    question: "Does the Free plan include a watermark?",
    answer:
      "Yes. After your trial, free PDFs include a small InvoiceFast watermark. Pro removes it and lets you upload your logo.",
  },
  {
    question: "What does Pro cost?",
    answer:
      "R79 per month including VAT (15%). Checkout total is R79 — your bank may charge slightly more for card or FX fees.",
  },
  {
    question: "How many invoices are saved on Pro?",
    answer:
      "Pro keeps up to 50 saved invoices in Previous invoices. When you save more, the oldest saved invoice is removed to make room. Download PDFs or export CSV if you need long-term records.",
  },
  {
    question: "Is VAT supported for South Africa?",
    answer:
      "Yes. ZAR invoices default to VAT-inclusive line rates with ex-VAT and VAT shown on the PDF. Add your VAT reg number on your profile to print it on invoices.",
  },
  {
    question: "Can I cancel Pro at any time?",
    answer:
      "Yes. Cancel from the Lemon billing portal (Manage subscription in the app). Pro stays active until the end of your billing period.",
  },
  {
    question: "Is the 14-day trial the same as the 14-day refund?",
    answer:
      "No. The trial is free Pro access with no payment. The 14-day refund applies if you pay for Pro and want your money back within 14 days of that purchase.",
  },
];
