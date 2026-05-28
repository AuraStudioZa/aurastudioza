import Link from "next/link";
import type { ReactNode } from "react";
import { BrandLogo } from "./brand-logo";
import { SiteFooter } from "./site-footer";
import { siteLinks } from "../lib/site-links";

type LegalPageShellProps = {
  title: string;
  children: ReactNode;
};

export function LegalPageShell({ title, children }: LegalPageShellProps) {
  return (
    <>
      <header className="site-header glass-panel">
        <div className="container nav-wrap">
          <BrandLogo href={siteLinks.home} variant="compact" />
          <Link className="btn btn-ghost" href={siteLinks.home}>
            Back to home
          </Link>
        </div>
      </header>
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
