import type { Metadata } from "next";

import { PostGrid } from "@/components/blog/post-grid";
import { JsonLd } from "@/components/seo/json-ld";
import { BLOG_DESCRIPTION, BLOG_SECTION, getAllPosts } from "@/lib/blog";
import { BASE_URL, breadcrumbJsonLd, buildMetadata, itemListJsonLd } from "@/lib/seo";

const base = buildMetadata({
  title: "IPTV Blog: Streaming Guides & Tips",
  description: BLOG_DESCRIPTION,
  path: BLOG_SECTION.path,
  keywords: ["iptv blog", "iptv canada", "streaming tips", "cord cutting canada"],
});

export const metadata: Metadata = {
  ...base,
  alternates: {
    ...base.alternates,
    types: { "application/rss+xml": `${BASE_URL}${BLOG_SECTION.path}/feed.xml` },
  },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: BLOG_SECTION.label, path: BLOG_SECTION.path },
          ]),
          ...(posts.length > 0 ? [itemListJsonLd(BLOG_SECTION, posts)] : []),
        ]}
      />

      <section className="border-b px-6 py-24 text-center lg:px-8">
        <h1 className="text-2xl font-medium tracking-tight md:text-3xl">IPTV NOW Blog</h1>
        <p className="mx-auto mt-4 max-w-2xl font-medium text-muted-foreground">
          {BLOG_DESCRIPTION}
        </p>
      </section>

      <PostGrid
        posts={posts}
        section={BLOG_SECTION}
        empty={{
          title: "Our first guides are on the way",
          text: "We're writing setup walkthroughs, app comparisons and streaming tips for Canadian viewers. Check back soon.",
          link: { label: "View pricing", href: "/#pricing" },
        }}
      />
    </>
  );
}
