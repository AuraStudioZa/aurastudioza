import { pageMetadata } from "../../lib/site-metadata";

export const metadata = pageMetadata({
  title: "Web Design for Local Businesses",
  description:
    "Mobile-first websites for South African local businesses — .co.za domains, professional email, POPIA-ready forms, and ZAR pricing. Built by AuraStudioZa.",
  path: "/web-design",
  keywords: [
    "web design South Africa",
    "small business website",
    "local business website",
    ".co.za website design",
    "POPIA contact form",
    "mobile-first web design SA",
    "WhatsApp business website",
    "AuraStudioZa web design",
  ],
  openGraphTitle: "Web Design for SA Local Businesses | AuraStudioZa",
  openGraphDescription:
    "Mobile-first websites with .co.za domains, professional email, POPIA-ready forms, and clear ZAR pricing for plumbers, salons, clinics, and local services.",
});

export default function WebDesignLayout({ children }: { children: React.ReactNode }) {
  return children;
}
