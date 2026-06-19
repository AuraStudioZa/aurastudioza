import { pageMetadata } from "../../lib/site-metadata";

export const metadata = pageMetadata({
  title: "Vehicle Logbook",
  description:
    "Vehicle Logbook — log odometer stops, business vs private km, monthly and tax-year exports. 1 month free, then R89/month incl. VAT.",
  path: "/logbook",
  keywords: [
    "vehicle logbook South Africa",
    "SARS travel logbook",
    "mileage log app",
    "business travel log South Africa",
    "odometer logbook",
    "tax year logbook Mar-Feb",
    "claim travel allowance SARS",
    "company car logbook",
  ],
  openGraphTitle: "Vehicle Logbook — SARS-Ready Mileage Log for South Africa",
  openGraphDescription:
    "Log odometer stops, split business vs private km, and export monthly or Mar–Feb tax-year reports. Built for SA company car and travel allowance records.",
});

export default function LogbookLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
