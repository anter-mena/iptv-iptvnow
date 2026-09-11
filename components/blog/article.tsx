import Link from "next/link";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

import { Breadcrumbs } from "@/components/blog/breadcrumbs";
import { PostImage } from "@/components/blog/post-image";
import { TableOfContents } from "@/components/blog/table-of-contents";
import { JsonLd } from "@/components/seo/json-ld";
import { formatDate, type ArticleSection, type Post } from "@/lib/content";
import { articleJsonLd, breadcrumbJsonLd, faqJsonLd } from "@/lib/seo";
import { extractToc } from "@/lib/toc";

/** Full article page, shared by blog posts and news items. */
export function Article({ post, section }: { post: Post; section: ArticleSection }) {
  const { meta, content } = post;
  const path = `${section.path}/${meta.slug}`;
  const toc = extractToc(content);
  const internal = meta.related.filter((link) => !link.href.startsWith("http"));
  const sources = meta.related.filter((link) => link.href.startsWith("http"));
  const faq = faqJsonLd(meta.faqs);

  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: section.label, path: section.path },
            { name: meta.title, path },
          ]),
          articleJsonLd(meta, section),
          ...(faq ? [faq] : []),
        ]}
      />

      <section className="border-b px-6 py-16 text-center lg:px-8 lg:py-20">
        <div className="mx-auto max-w-3xl">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: section.label, href: section.path },
              { label: meta.title },
            ]}
          />

          <span className="inline-flex rounded-full bg-badge px-2.5 py-1 text-[10px] font-semibold tracking-wider text-badge-foreground uppercase">
            {meta.category}
          </span>
          <h1 className="mt-5 text-2xl font-medium tracking-tight md:text-4xl">{meta.title}</h1>
          <p className="mx-auto mt-4 max-w-2xl font-medium text-muted-foreground">
            {meta.description}
          </p>
          <p className="mt-5 text-xs text-muted-foreground">
            By {meta.author} ·{" "}
            {section.dateLine === "published" ? (
              <>
                Published <time dateTime={meta.date}>{formatDate(meta.date)}</time>
                {meta.updated !== meta.date && (
                  <>
                    {" "}
                    · Updated <time dateTime={meta.updated}>{formatDate(meta.updated)}</time>
                  </>
                )}
              </>
            ) : (
              <>
                Updated <time dateTime={meta.updated}>{formatDate(meta.updated)}</time>
              </>
            )}{" "}
            · {meta.readingTime} min read
          </p>
        </div>
      </section>

      <section className="px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-5xl lg:grid lg:grid-cols-[minmax(0,1fr)_13rem] lg:items-start lg:gap-12">
          <article className="mx-auto w-full max-w-[720px] min-w-0 lg:mx-0">
            <TableOfContents items={toc} variant="mobile" />

            <div className="blog-prose prose max-w-none">
              {/* rehype-raw lets posts embed HTML (figures, video, iframes);
                  rehype-slug gives headings the ids the table of contents uses. */}
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeRaw, rehypeSlug]}
                components={{ img: PostImage }}
              >
                {content}
              </ReactMarkdown>
            </div>

            {(internal.length > 0 || sources.length > 0) && (
              <div className="mt-16 grid gap-8 border-t pt-10 sm:grid-cols-2">
                {internal.length > 0 && (
                  <div>
                    <h2 className="text-sm font-bold tracking-tight">Related reading</h2>
                    <ul className="mt-4 space-y-2.5">
                      {internal.map((link) => (
                        <li key={link.href}>
                          <Link
                            href={link.href}
                            className="inline-flex items-center gap-1 text-sm font-medium underline-offset-4 hover:underline"
                          >
                            {link.label}
                            <ArrowUpRight className="size-3.5" aria-hidden />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {sources.length > 0 && (
                  <div>
                    <h2 className="text-sm font-bold tracking-tight">Sources</h2>
                    <ul className="mt-4 space-y-2.5">
                      {sources.map((link) => (
                        <li key={link.href}>
                          <a
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-muted-foreground underline underline-offset-4 transition-colors hover:text-foreground"
                          >
                            {link.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}

            <div className="mt-14 flex flex-wrap items-center justify-center gap-3">
              <Link
                href={section.path}
                className="flex h-9 items-center justify-center gap-1.5 rounded-full border px-5 text-xs font-medium transition-colors hover:bg-muted"
              >
                <ArrowLeft className="size-3.5" aria-hidden />
                {section.backLabel}
              </Link>
              <Link
                href={section.next.href}
                className="flex h-9 items-center justify-center rounded-full bg-primary px-5 text-xs font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                {section.next.label}
              </Link>
            </div>
          </article>

          <aside className="sticky top-28 hidden self-start lg:block">
            <TableOfContents items={toc} variant="sidebar" />
          </aside>
        </div>
      </section>

      {meta.faqs.length > 0 && (
        <section className="border-t px-6 py-16 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-center text-2xl font-medium tracking-tight md:text-3xl">
              Frequently asked questions
            </h2>

            {/* A plain list, not an accordion: every answer stays in the page
                HTML, where search engines read it next to the FAQ schema. */}
            <dl className="mt-10 divide-y border-y">
              {meta.faqs.map((item) => (
                <div key={item.question} className="py-5">
                  <dt className="text-sm font-bold tracking-tight">{item.question}</dt>
                  <dd className="mt-2 text-sm leading-6 text-muted-foreground">{item.answer}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>
      )}
    </>
  );
}
