import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogPostView } from "../../../components/blog/blog-post-view";
import { getAllBlogSlugs, getBlogPostBySlug } from "../../../lib/blog";
import { pageMetadata, siteUrl } from "../../../lib/site-metadata";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) {
    return { title: "Article not found" };
  }

  const base = pageMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${post.slug}`,
    keywords: post.keywords,
    openGraphTitle: post.title,
    openGraphDescription: post.description,
  });

  if (post.ogImage) {
    return {
      ...base,
      openGraph: {
        ...base.openGraph,
        images: [{ url: `${siteUrl}${post.ogImage}`, width: 1200, height: 630, alt: post.title }],
      },
      twitter: {
        ...base.twitter,
        images: [`${siteUrl}${post.ogImage}`],
      },
    };
  }

  return base;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) {
    notFound();
  }
  return <BlogPostView post={post} />;
}
