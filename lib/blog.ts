import { createPostCollection, type ArticleSection } from "@/lib/content";

export type { PostMeta as BlogMeta } from "@/lib/content";

export const BLOG_DESCRIPTION =
  "Streaming guides, device setup walkthroughs and cord-cutting tips from the IPTV NOW team.";

export const BLOG_SECTION: ArticleSection = {
  label: "Blog",
  path: "/blog",
  schemaType: "BlogPosting",
  dateLine: "published",
  backLabel: "All blog posts",
  next: { label: "Latest news", href: "/news" },
};

const blog = createPostCollection({
  folder: "blog",
  defaultAuthor: "IPTV NOW Editorial Team",
  defaultCategory: "Article",
});

/** Published blog posts, newest first. */
export const getAllPosts = blog.getAll;
export const getPost = blog.get;
