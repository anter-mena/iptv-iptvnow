import { createPostCollection, type ArticleSection } from "@/lib/content";

export type { PostMeta as NewsMeta } from "@/lib/content";

export const NEWS_DESCRIPTION =
  "Channel additions, outages, service updates and streaming industry news from IPTV NOW.";

export const NEWS_SECTION: ArticleSection = {
  label: "News",
  path: "/news",
  schemaType: "NewsArticle",
  dateLine: "published",
  backLabel: "All news",
  next: { label: "Read the blog", href: "/blog" },
};

const news = createPostCollection({
  folder: "news",
  defaultAuthor: "IPTV NOW Newsroom",
  defaultCategory: "News",
});

/** Published news items, newest first. */
export const getAllNews = news.getAll;
export const getNews = news.get;
