"use client";

import { useEffect } from "react";
import { JsonLd, blogPostingJsonLd } from "../json-ld";
import { SiteFooter } from "../site-footer";
import { SiteHeader } from "../site-header";
import type { BlogPost } from "../../lib/blog/types";
import { BlogPostCtaBanner } from "./blog-post-cta";
import { SimpleMarkdown } from "./simple-markdown";

type BlogPostViewProps = {
  post: BlogPost;
};

function formatDate(isoDate: string): string {
  return new Intl.DateTimeFormat("en-ZA", {
    dateStyle: "long",
    timeZone: "UTC",
  }).format(new Date(isoDate));
}

export function BlogPostView({ post }: BlogPostViewProps) {
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
      <JsonLd
        data={blogPostingJsonLd({
          title: post.title,
          description: post.description,
          slug: post.slug,
          publishedAt: post.publishedAt,
          modifiedAt: post.updatedAt,
          keywords: post.keywords,
          image: post.ogImage,
        })}
      />
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <SiteHeader />
      <main id="main-content" className="section legal-page blog-page">
        <article className="container legal-content glass-panel reveal">
          <p className="eyebrow">AuraStudioZa Blog</p>
          <h1 className="display-heading">{post.title}</h1>
          <p className="blog-meta">
            <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
          </p>
          <p className="blog-lead">{post.description}</p>
          <SimpleMarkdown source={post.body} />
        </article>
        <BlogPostCtaBanner cta={post.cta} />
      </main>
      <SiteFooter showSupport />
    </>
  );
}
