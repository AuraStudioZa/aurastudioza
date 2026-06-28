import { BlogIndexView } from "../../components/blog/blog-index-view";
import { getAllBlogPosts } from "../../lib/blog";

export default function BlogIndexPage() {
  const posts = getAllBlogPosts();
  return <BlogIndexView posts={posts} />;
}
