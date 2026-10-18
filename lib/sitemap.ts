import type { MetadataRoute } from "next";

import { getAllPosts } from "@/lib/blog";
import { getAllNews } from "@/lib/news";
import { DEVICE_GUIDES, GUIDES_PATH, deviceGuideHref } from "@/lib/installation-guides";
import { BASE_URL } from "@/lib/seo";

// Each section is served at /sitemap/<section>.xml and listed by the index at /sitemap.xml
export const sitemapSections = ["pages", "blog", "news"] as const;

export type SitemapSection = (typeof sitemapSections)[number];

// Last real content change of each page, taken from git history. Update a date
// only when that page's visible content changes — not for design, metadata or
// code-only changes — so search engines can keep trusting these dates.
const pageLastModified = {
  home: "2026-08-02",
  aboutUs: "2026-08-02",
  contact: "2026-08-02",
  faq: "2026-10-18",
  installationGuides: "2026-10-18",
  legal: "2026-10-18",
  // The listing pages' own date; a newer post moves them forward automatically.
  blogHub: "2026-09-10",
  newsHub: "2026-09-10",
};

function toDate(day: string): Date {
  return new Date(`${day}T00:00:00Z`);
}

function newestDate(days: string[]): Date {
  return toDate(days.reduce((latest, day) => (day > latest ? day : latest)));
}

export function isSitemapSection(value: string): value is SitemapSection {
  return (sitemapSections as readonly string[]).includes(value);
}

export function getSitemapEntries(section: SitemapSection): MetadataRoute.Sitemap {
  if (section === "blog") {
    const posts = getAllPosts();

    return [
      {
        url: `${BASE_URL}/blog`,
        lastModified: newestDate([pageLastModified.blogHub, ...posts.map((post) => post.updated)]),
        changeFrequency: "weekly",
        priority: 0.8,
      },
      ...posts.map((post) => ({
        url: `${BASE_URL}/blog/${post.slug}`,
        lastModified: toDate(post.updated),
        changeFrequency: "monthly" as const,
        priority: 0.7,
      })),
    ];
  }

  if (section === "news") {
    const news = getAllNews();

    return [
      {
        url: `${BASE_URL}/news`,
        lastModified: newestDate([pageLastModified.newsHub, ...news.map((item) => item.updated)]),
        changeFrequency: "daily",
        priority: 0.8,
      },
      ...news.map((item) => ({
        url: `${BASE_URL}/news/${item.slug}`,
        lastModified: toDate(item.updated),
        changeFrequency: "monthly" as const,
        priority: 0.7,
      })),
    ];
  }

  return [
    {
      url: BASE_URL,
      lastModified: toDate(pageLastModified.home),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/about-us`,
      lastModified: toDate(pageLastModified.aboutUs),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: toDate(pageLastModified.contact),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/faq`,
      lastModified: toDate(pageLastModified.faq),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}${GUIDES_PATH}`,
      lastModified: toDate(pageLastModified.installationGuides),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    ...DEVICE_GUIDES.map((guide) => ({
      url: `${BASE_URL}${deviceGuideHref(guide.slug)}`,
      lastModified: toDate(pageLastModified.installationGuides),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...["privacy-policy", "terms-of-use", "refund-policy", "general-disclaimer"].map((slug) => ({
      url: `${BASE_URL}/${slug}`,
      lastModified: toDate(pageLastModified.legal),
      changeFrequency: "yearly" as const,
      priority: 0.3,
    })),
  ];
}

// Same markup Next.js generates for a built-in app/sitemap.ts, which can't be
// used here because it would take over /sitemap.xml from the index.
export function toUrlsetXml(entries: MetadataRoute.Sitemap): string {
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

  for (const entry of entries) {
    xml += "<url>\n";
    xml += `<loc>${entry.url}</loc>\n`;
    if (entry.lastModified) {
      const lastModified =
        entry.lastModified instanceof Date ? entry.lastModified.toISOString() : entry.lastModified;
      xml += `<lastmod>${lastModified}</lastmod>\n`;
    }
    if (entry.changeFrequency) {
      xml += `<changefreq>${entry.changeFrequency}</changefreq>\n`;
    }
    if (typeof entry.priority === "number") {
      xml += `<priority>${entry.priority}</priority>\n`;
    }
    xml += "</url>\n";
  }

  xml += "</urlset>\n";
  return xml;
}

export function toSitemapIndexXml(): string {
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

  for (const section of sitemapSections) {
    xml += "<sitemap>\n";
    xml += `<loc>${BASE_URL}/sitemap/${section}.xml</loc>\n`;
    xml += "</sitemap>\n";
  }

  xml += "</sitemapindex>\n";
  return xml;
}
