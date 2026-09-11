import type { Metadata } from "next";

import { PostGrid } from "@/components/blog/post-grid";
import { JsonLd } from "@/components/seo/json-ld";
import { getAllNews, NEWS_DESCRIPTION, NEWS_SECTION } from "@/lib/news";
import { BASE_URL, breadcrumbJsonLd, buildMetadata, itemListJsonLd } from "@/lib/seo";

const base = buildMetadata({
  title: "IPTV News & Service Updates",
  description: NEWS_DESCRIPTION,
  path: NEWS_SECTION.path,
  keywords: ["iptv news", "iptv canada news", "streaming news", "iptv service updates"],
});

export const metadata: Metadata = {
  ...base,
  alternates: {
    ...base.alternates,
    types: { "application/rss+xml": `${BASE_URL}${NEWS_SECTION.path}/feed.xml` },
  },
};

export default function NewsPage() {
  const news = getAllNews();

  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: NEWS_SECTION.label, path: NEWS_SECTION.path },
          ]),
          ...(news.length > 0 ? [itemListJsonLd(NEWS_SECTION, news)] : []),
        ]}
      />

      <section className="border-b px-6 py-24 text-center lg:px-8">
        <h1 className="text-2xl font-medium tracking-tight md:text-3xl">IPTV NOW News</h1>
        <p className="mx-auto mt-4 max-w-2xl font-medium text-muted-foreground">
          {NEWS_DESCRIPTION}
        </p>
      </section>

      <PostGrid
        posts={news}
        section={NEWS_SECTION}
        empty={{
          title: "No updates yet",
          text: "Channel additions, outages and service news will be posted here as they happen. Check back soon.",
          link: { label: "View pricing", href: "/#pricing" },
        }}
      />
    </>
  );
}
