import { siteLinks } from "../../lib/site-links";

type BlogDisclaimerProps = {
  variant?: "tax" | "general";
};

export function BlogDisclaimer({ variant = "general" }: BlogDisclaimerProps) {
  return (
    <aside className="blog-disclaimer" role="note">
      <p>
        <strong>Educational only.</strong> AuraStudioZa is a software studio, not a tax practitioner
        or law firm. Rules change and depend on your situation.
        {variant === "tax" ? (
          <>
            {" "}
            Confirm amounts, deadlines, and obligations on{" "}
            <a href="https://www.sars.gov.za" rel="noopener noreferrer">
              sars.gov.za
            </a>{" "}
            or with a registered tax practitioner before you rely on this article.
          </>
        ) : (
          <>
            {" "}
            For product terms see our{" "}
            <a href={siteLinks.terms}>Terms of Service</a> and{" "}
            <a href={siteLinks.privacy}>Privacy Policy</a>.
          </>
        )}
      </p>
    </aside>
  );
}
