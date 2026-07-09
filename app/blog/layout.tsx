import { pageMetadata } from "../../lib/site-metadata";

export const metadata = pageMetadata({
  title: "Freelancer Checklists & Tips — SA",
  description:
    "Short checklists for South African freelancers and small businesses — invoicing, records, and admin tips. Educational only; not tax advice.",
  path: "/blog",
  keywords: [
    "freelancer checklist South Africa",
    "small business admin tips",
    "invoice checklist SA",
    "freelancer records",
    "AuraStudioZa blog",
  ],
  openGraphTitle: "AuraStudioZa Blog — Checklists for SA Freelancers",
  openGraphDescription:
    "Short educational articles on invoicing, expense reports, travel records, VAT orientation, and email signatures for South African independent work.",
});

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return children;
}
