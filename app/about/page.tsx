import { pageMetadata } from "../../lib/site-metadata";
import { AboutPageContent } from "../../components/about/about-page-content";

export const metadata = pageMetadata({
  title: "About AuraStudioZa",
  description:
    "Meet AuraStudioZa — a South African solo-founder studio building InvoiceFast, Vehicle Logbook, and free tools for freelancers and small businesses.",
  path: "/about",
  keywords: [
    "AuraStudioZa about",
    "South African software studio",
    "freelancer tools South Africa",
    "solo founder SaaS SA",
    "InvoiceFast studio",
    "small business software Cape Town",
  ],
  openGraphTitle: "About AuraStudioZa — SA Freelancer & SMB Software",
  openGraphDescription:
    "Founded by Gerswin Isaacs. Mission: practical, fairly priced software for South African independent work — clean UX, ZAR pricing, no bloat.",
});

export default function AboutPage() {
  return <AboutPageContent />;
}
