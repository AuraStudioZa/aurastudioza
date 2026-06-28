import type { BlogPostCta } from "../../lib/blog/types";

type BlogPostCtaBannerProps = {
  cta: BlogPostCta;
};

export function BlogPostCtaBanner({ cta }: BlogPostCtaBannerProps) {
  return (
    <section className="section">
      <div className="container cta-banner reveal">
        <div>
          <p className="eyebrow">{cta.eyebrow}</p>
          <h2>{cta.title}</h2>
        </div>
        <div className="cta-actions">
          <a className="btn btn-primary btn-lg" href={cta.primaryHref}>
            {cta.primaryLabel}
          </a>
          {cta.secondaryHref && cta.secondaryLabel ? (
            <a className="btn btn-ghost btn-lg" href={cta.secondaryHref}>
              {cta.secondaryLabel}
            </a>
          ) : null}
        </div>
      </div>
    </section>
  );
}
