import Link from "next/link";
import type { ReactNode } from "react";
import { BrandLogo } from "./brand-logo";
import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";
import { siteLinks } from "../lib/site-links";

type LegalPageShellProps = {
  title: string;
  children: ReactNode;
};

export function LegalPageShell({ title, children }: LegalPageShellProps) {
  return (
    <>
      <SiteHeader />
      <main className="section legal-page">
        <div className="container legal-content glass-panel">
          <h1 className="display-heading">{title}</h1>
          {children}
        </div>
      </main>
      <SiteFooter showSupport />
    </>
  );
}
