"use client";

import { useEffect } from "react";
import { siteLinks } from "../../lib/site-links";
import type { BlogPost } from "../../lib/blog/types";
import { SiteFooter } from "../site-footer";
import { SiteHeader } from "../site-header";
import { BlogDisclaimer } from "./blog-disclaimer";

type BlogIndexViewProps = {
  posts: BlogPost[];
};

function formatDate(isoDate: string): string {
  return new Intl.DateTimeFormat("en-ZA", {
    dateStyle: "medium",
    timeZone: "UTC",
  }).format(new Date(isoDate));
}

export function BlogIndexView({ posts }: BlogIndexViewProps) {
  useEffect(() => {
    const revealElements = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14, rootMargin: "0px 0px -24px 0px" }
    );
    revealElements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <SiteHeader />
      <main id="main-content" className="section">
        <div className="container">
          <div className="section-heading reveal">
            <p className="eyebrow">Blog</p>
            <h1 className="display-heading">Short checklists for SA freelancers &amp; small business</h1>
            <p className="section-lead">
              Short checklists for South African independent work — invoicing, records, and everyday
              admin. Not tax or legal advice.
            </p>
            <BlogDisclaimer variant="tax" />
          </div>
          <div className="blog-index-grid">
            {posts.map((post) => (
              <article key={post.slug} className="bento-card glass-panel reveal blog-card">
                <p className="blog-meta">
                  <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
                </p>
                <h2 className="display-heading display-heading-sm">
                  <a href={`${siteLinks.blog}/${post.slug}`}>{post.title}</a>
                </h2>
                <p>{post.description}</p>
                <a className="btn btn-secondary" href={`${siteLinks.blog}/${post.slug}`}>
                  Read article
                </a>
              </article>
            ))}
          </div>
        </div>
      </main>
      <SiteFooter showSupport />
    </>
  );
}
