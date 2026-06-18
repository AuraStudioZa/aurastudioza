export const products = [
  {
    slug: "invoicefast",
    name: "InvoiceFast",
    tagline: "Create professional invoices in minutes.",
    description:
      "Live builder, PDF export, invoice history, and Pro features for freelancers and small teams.",
    status: "Live" as const,
    href: "/invoicefast",
    highlights: ["14-day Pro trial", "VAT-inclusive ZAR", "Pro R79 incl. VAT"],
  },
  {
    slug: "logbook",
    name: "Vehicle Logbook",
    tagline: "Log business & private km — monthly and annual exports.",
    description:
      "Odometer-based travel log with ZA tax year support, cloud sync, and business travel CSV/PDF.",
    status: "Live" as const,
    href: "/logbook",
    highlights: ["1 month free trial", "R89/mo incl. VAT", "Mar–Feb tax year"],
  },
];

export const freeTools = [
  {
    slug: "email-signature",
    name: "Email Signature Generator",
    tagline: "Professional HTML signatures for Gmail, Outlook, and Spacemail.",
    description:
      "Nine templates, optional logo upload, and one-click rich copy — no account required.",
    status: "Free" as const,
    href: "/email-signature",
    highlights: ["No sign-up", "Rich HTML copy", "InvoiceFast line optional"],
  },
];
