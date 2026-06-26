/** Portfolio demo URLs — update when showcase domain is live */
export const showcaseUrls = {
  plumber: process.env.NEXT_PUBLIC_SHOWCASE_PLUMBER ?? "https://capeflow.showcase.co.za",
  salon: process.env.NEXT_PUBLIC_SHOWCASE_SALON ?? "https://bloomblade.showcase.co.za",
  dental: process.env.NEXT_PUBLIC_SHOWCASE_DENTAL ?? "https://smilecare.showcase.co.za",
};

export const portfolio = [
  {
    name: "Cape Flow Plumbing",
    niche: "Plumber",
    description: "Emergency plumbing with 24/7 call-outs, service areas, and trust signals.",
    href: showcaseUrls.plumber,
  },
  {
    name: "Bloom & Blade Salon",
    niche: "Hair salon",
    description: "Services, pricing, gallery, and WhatsApp booking for a Durbanville salon.",
    href: showcaseUrls.salon,
  },
  {
    name: "SmileCare Dental",
    niche: "Dentist",
    description: "Family dentistry with team bios, treatments, and patient information.",
    href: showcaseUrls.dental,
  },
];

export const processSteps = [
  {
    title: "Discovery",
    description: "Short call to understand your business, goals, and content readiness.",
  },
  {
    title: "Proposal",
    description: "Fixed quote covering pages, features, timeline, and ongoing costs.",
  },
  {
    title: "50% deposit",
    description: "Work begins once deposit is received and contract is signed.",
  },
  {
    title: "Build & revisions",
    description: "Mobile-first site with included revision rounds. Domain and email set up during build.",
  },
  {
    title: "Handover",
    description: "Final payment, then full access. Optional monthly retainer for hosting and support.",
  },
];

export const ongoingPlans = [
  {
    name: ".co.za domain",
    price: "R120–R180",
    suffix: "/ year",
    features: ["Registration & renewal", "DNS management", "Client owns domain"],
  },
  {
    name: "Hosting-Only",
    price: "R200–R300",
    suffix: "/ month",
    features: ["Server & SSL", "Domain management", "1 email mailbox included"],
  },
  {
    name: "Maintenance",
    price: "R500–R1,500",
    suffix: "/ month",
    features: ["Hosting + backups", "Security updates", "Up to 3 email mailboxes"],
  },
  {
    name: "Extra mailbox",
    price: "R50–R150",
    suffix: "/ mailbox / month",
    features: ["Professional email on client's .co.za", "Webmail access", "SPF/DKIM configured"],
  },
];

export const whyPoints = [
  {
    title: "We ship real products",
    description:
      "InvoiceFast and Vehicle Logbook are live SaaS tools — not just mockups. Your site gets the same engineering care.",
  },
  {
    title: "POPIA-ready forms",
    description: "Contact forms include consent checkboxes and privacy notices from day one.",
  },
  {
    title: "Built for SA local businesses",
    description: "Click-to-call, WhatsApp, .co.za domains, and ZAR pricing throughout.",
  },
  {
    title: "You own your domain",
    description:
      "Your .co.za is registered in your name. We manage DNS and hosting as your technical partner.",
  },
];

export const faqs = [
  {
    question: "Who owns the .co.za domain?",
    answer:
      "You do. We register it on your behalf with you listed as the legal owner. We hold the technical contact for DNS and hosting management during our relationship.",
  },
  {
    question: "What does email hosting cost?",
    answer:
      "Basic professional email on your .co.za domain starts from R50–R80 per mailbox per month. One mailbox is included in our Hosting-Only retainer (R200–R300/mo).",
  },
  {
    question: "How long does a website take?",
    answer:
      "A typical 4–5 page local business site takes 2–4 weeks, depending on how quickly you provide content and feedback.",
  },
  {
    question: "What's included in the build?",
    answer:
      "Mobile-responsive design, contact form with POPIA notice, basic on-page SEO, and launch handover. Copywriting, photography, and logo design are quoted separately if needed.",
  },
  {
    question: "Do you use templates?",
    answer:
      "We use a proven site framework customised to your brand, colours, and content — so you get a professional result faster without sacrificing quality.",
  },
];
