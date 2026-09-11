import type { Metadata } from "next";

import type { ArticleSection, FaqItem, PostMeta } from "@/lib/content";

// ── Site details: the only part of this file that differs between sites ──

export const SITE_NAME = "IPTV NOW";
export const BASE_URL = "https://iptvnow.ca";

/** Publisher logo in article structured data, or null if the site has none. */
export const LOGO_URL: string | null = null;

/** Social image for pages without their own opengraph-image, or null. */
export const DEFAULT_OG_IMAGE: { url: string; alt: string } | null = null;

// ── Shared helpers: identical on every site ──

/**
 * Page metadata with an absolute canonical URL. Pass a short `title`: the brand
 * is appended here ("Title | Brand") as an absolute title, so the result is the
 * same whether or not the site's root layout has a title template.
 */
export function buildMetadata({
  title,
  description,
  path,
  keywords,
}: {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
}): Metadata {
  const url = `${BASE_URL}${path}`;
  const fullTitle = `${title} | ${SITE_NAME}`;

  return {
    title: { absolute: fullTitle },
    description,
    keywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      ...(DEFAULT_OG_IMAGE
        ? { images: [{ url: DEFAULT_OG_IMAGE.url, width: 1200, height: 630, alt: DEFAULT_OG_IMAGE.alt }] }
        : {}),
      title: fullTitle,
      description,
      url,
      siteName: SITE_NAME,
      locale: "en_CA",
      type: "website",
    },
    twitter: {
      ...(DEFAULT_OG_IMAGE ? { images: [DEFAULT_OG_IMAGE.url] } : {}),
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map(({ name, path }, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name,
      item: `${BASE_URL}${path}`,
    })),
  };
}

export function itemListJsonLd(section: ArticleSection, posts: PostMeta[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: posts.map((post, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: post.title,
      url: `${BASE_URL}${section.path}/${post.slug}`,
    })),
  };
}

export function articleJsonLd(meta: PostMeta, section: ArticleSection) {
  const url = `${BASE_URL}${section.path}/${meta.slug}`;

  return {
    "@context": "https://schema.org",
    "@type": section.schemaType,
    headline: meta.title,
    description: meta.description,
    datePublished: meta.date,
    dateModified: meta.updated,
    ...(meta.image ? { image: meta.image } : {}),
    author: { "@type": "Organization", name: meta.author },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: BASE_URL,
      ...(LOGO_URL ? { logo: { "@type": "ImageObject", url: LOGO_URL } } : {}),
    },
    mainEntityOfPage: url,
    url,
  };
}

export function faqJsonLd(faqs: FaqItem[]) {
  if (faqs.length === 0) return null;

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}
