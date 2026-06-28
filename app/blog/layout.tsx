import { pageMetadata } from "../../lib/site-metadata";

export const metadata = pageMetadata({
  title: "Blog",
  description:
    "Guides for South African freelancers and small businesses — VAT, invoicing, SARS logbooks, email signatures, and monthly tax habits from AuraStudioZa.",
  path: "/blog",
  keywords: [
    "freelancer blog South Africa",
    "VAT guide South Africa",
    "SARS logbook guide",
    "invoice freelancer SA",
    "small business tax tips",
    "AuraStudioZa blog",
  ],
  openGraphTitle: "AuraStudioZa Blog — Guides for SA Freelancers",
  openGraphDescription:
    "Practical articles on VAT, invoicing, vehicle logbooks, email signatures, and monthly tax tracking for South African independent work.",
});

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return children;
}
