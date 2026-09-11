# Blog & News Authoring Guide (MDX)

How to write a post for IPTV NOW. One `.mdx` file = one fully built, SEO-ready page:
the route, listing card, sitemap entry, RSS item, social share image, structured data
and table of contents are all generated automatically.

---

## 1. How to publish

1. Create a file in the right folder:
   - **Blog** → `content/blog/your-slug.mdx`
   - **News** → `content/news/your-slug.mdx`
2. The **filename becomes the URL**: `content/blog/best-iptv-players.mdx` → `iptvnow.ca/blog/best-iptv-players`.
   Lowercase words separated by hyphens. No spaces, capitals or dates in the slug.
3. Commit and push. Vercel rebuilds and the post is live in a few minutes.
   (Locally: `npm run build`.)

There is **no code to touch** — only the `.mdx` file.

---

## 2. Frontmatter (the settings block)

Every file **must** start with a `---` block:

```mdx
---
title: "Your Headline — Main Keyword Near the Front"   # REQUIRED
description: "A 120–160 character summary. This is your Google snippet and social text." # REQUIRED
date: "2026-09-10"            # REQUIRED — publish date, YYYY-MM-DD
updated: "2026-09-10"         # optional — date of the last significant edit
author: "IPTV NOW Team"       # optional — defaults to "IPTV NOW Editorial Team" (news: "IPTV NOW Newsroom")
category: "Tutorials"         # optional — shown on the card (Tutorials, Guides, Streaming Tips, News…)
image: "/blog/cover.webp"     # optional — card image + structured data image
keywords:                     # optional — 4–8 target phrases
  - "primary keyword"
  - "secondary keyword"
faqs:                         # optional — FAQ section + FAQ structured data
  - question: "A real question a viewer would ask?"
    answer: "A clear, self-contained 1–3 sentence answer."
related:                      # optional — internal links + external sources
  - label: "Plans and pricing"
    href: "/#pricing"                              # internal → "Related reading"
  - label: "CRTC streaming report"
    href: "https://crtc.gc.ca/…"                   # external (http) → "Sources"
draft: true                   # optional — keeps the post off the live site
---
```

| Field | Required | Notes |
|---|---|---|
| `title` | ✅ | **Max ~55 characters** — " \| IPTV NOW" is added automatically in search results. Main keyword near the start. |
| `description` | ✅ | 120–160 characters. Your search snippet — make it compelling. |
| `date` | ✅ | `YYYY-MM-DD`. Controls ordering (newest first). |
| `updated` | — | Change it **only for a real content update** (new section, corrected facts, new steps). It feeds the sitemap and "Updated" line, and Google stops trusting dates that change without real edits. Falls back to `date`. |
| `category` | — | One or two words, shown on the card. |
| `image` | — | Card image. Omit → a blue gradient is used. |
| `keywords` | — | 4–8 phrases. |
| `faqs` | — | 3–5 recommended. |
| `related` | — | Internal `/…` links = **Related reading**; `http…` links = **Sources**. |
| `draft` | — | `true` = not published (also left out of the sitemap and RSS). |

> **News posts** must list their real sources as external `related` links.

---

## 3. Writing the body (Markdown)

Everything after the second `---` is the article, written in **Markdown**:

```mdx
Opening paragraph — answer the question first and use the primary keyword once, naturally.

## A Section Heading (H2)

Body text. **Bold**, *italic* and [links](/#pricing) all work.

- Bullet lists
- Work fine

### A Subsection (H3)

> Blockquotes render as callouts.

| Column | Column |
|---|---|
| Tables | Work |
```

`##` and `###` headings build the **table of contents** ("On this page"). Use **at least 3
headings** so it appears. Never add a `#` (H1) — the title is the only H1.

---

## 4. Media — photos, video, embeds

**Images:** put them in `public/blog/` (or `public/news/`) and reference them as `/blog/file.webp`.
Use WebP or compressed JPG, about 1200 px wide. External image URLs also work.

```mdx
![Descriptive alt text for SEO and accessibility](/blog/firestick-setup.webp)
```

**Image with caption:**
```html
<figure>
  <img src="/blog/firestick-setup.webp" alt="Descriptive alt text" />
  <figcaption>A short caption.</figcaption>
</figure>
```

**YouTube / Vimeo:**
```html
<iframe src="https://www.youtube.com/embed/VIDEO_ID" title="What the video shows" allowfullscreen></iframe>
```

**Self-hosted video:**
```html
<video controls src="/blog/clip.mp4"></video>
```

Images never overflow the column, and videos/iframes are automatically 16:9 and responsive.
Always give images meaningful `alt` text.

---

## 5. Quality criteria (the standard to hit)

**Length**
- **Blog / tutorial / guide:** ~1,500–2,500 words (target ~2,000).
- **News:** ~500–900 words — tight, factual, timely.

**Structure**
- One clear topic per post, answer up top, 3+ `##`/`###` sections.

**SEO**
- Primary keyword in the `title`, the **first paragraph** and **one heading**.
- **2–4 internal links** to pages that exist: the homepage (`/`), pricing (`/#pricing`),
  `/about-us`, `/contact` and other posts. Link to `/installation-guides` and `/faq`
  only once those pages have real content.
- 3–5 `faqs` targeting real "People also ask" questions.
- Descriptive `alt` text on every image.

**Quality (E-E-A-T)**
- **Original writing only.** Never copy from another site — including our other sites
  (e.g. Easy IPTV). Duplicate content means Google shows one version and ignores the other.
- Write from experience: specific devices, apps, steps, settings and honest caveats.
- Stay on topic: IPTV, streaming, cord-cutting, device setup, Canadian viewers.
- **News:** a real event, in your own words, with **Sources**.

**Checklist before publishing**
- [ ] `title` (≤ ~55 chars), `description`, `date`
- [ ] Clean, lowercase, hyphenated slug
- [ ] 3+ headings, one topic, answer up top
- [ ] ≥1 image with alt text
- [ ] 2–4 internal links + 3–5 FAQs
- [ ] Original, on-topic, on-brand
- [ ] (News) real sources under `related`

---

## 6. Drafts & scheduling

- `draft: true` keeps a post off the live site, the sitemap and RSS.
- No timed scheduling: a post goes live on the next deploy after the file is added
  (or `draft` is removed).

---

## 7. Copy-paste template

```mdx
---
title: ""
description: ""
date: "2026-09-10"
category: ""
image: ""
keywords:
  - ""
faqs:
  - question: ""
    answer: ""
related:
  - label: ""
    href: ""
---

Opening paragraph.

## First section

Body.

## Second section

Body.

## Third section

Body.
```
