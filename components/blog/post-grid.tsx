import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowUpRight, Newspaper } from "lucide-react";

import { formatDate, type ArticleSection, type PostMeta } from "@/lib/content";

const CARD_SHADOW =
  "shadow-[0_1px_2px_0_rgb(0_0_0/0.04),0_4px_12px_-2px_rgb(0_0_0/0.10)]";

/** Card grid for the blog and news listing pages, with an empty state. */
export function PostGrid({
  posts,
  section,
  empty,
}: {
  posts: PostMeta[];
  section: ArticleSection;
  empty: { title: ReactNode; text: string; link: { label: string; href: string } };
}) {
  if (posts.length === 0) {
    return (
      <section className="px-6 py-24 text-center lg:px-8">
        <span className="mx-auto flex size-11 items-center justify-center rounded-lg bg-muted shadow-[0_1px_2px_0_rgb(0_0_0/0.08),inset_0_1px_3px_0_rgb(0_0_0/0.10)]">
          <Newspaper className="size-5" aria-hidden />
        </span>

        <h2 className="mt-5 text-lg font-medium tracking-tight">{empty.title}</h2>
        <p className="mx-auto mt-2 max-w-md text-sm text-muted-foreground">{empty.text}</p>

        <div className="mt-8 flex items-center justify-center gap-3">
          <Link
            href={empty.link.href}
            className="flex h-9 items-center justify-center rounded-full bg-primary px-5 text-xs font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            {empty.link.label}
          </Link>
          <Link
            href="/contact"
            className="flex h-9 items-center justify-center rounded-full border px-5 text-xs font-medium transition-colors hover:bg-muted"
          >
            Contact us
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="px-6 py-16 lg:px-8">
      <ul className="mx-auto grid max-w-5xl gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link
              href={`${section.path}/${post.slug}`}
              className={`group flex h-full flex-col overflow-hidden rounded-xl border bg-card ${CARD_SHADOW}`}
            >
              <div className="relative aspect-16/10 overflow-hidden bg-muted">
                {post.image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={post.image}
                    alt=""
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 size-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                ) : (
                  <div className="absolute inset-0 bg-linear-to-br from-[#1D4ED8]/25 to-[#3B72F5]/5" />
                )}
                <span className="absolute top-3 left-3 rounded-full bg-badge px-2.5 py-1 text-[10px] font-semibold tracking-wider text-badge-foreground uppercase">
                  {post.category}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h2 className="text-sm font-bold tracking-tight">{post.title}</h2>
                <p className="mt-2 flex-1 text-xs leading-5 text-muted-foreground">
                  {post.description}
                </p>

                <div className="mt-5 flex items-center gap-2 text-[11px] text-muted-foreground">
                  <time dateTime={post.date}>{formatDate(post.date)}</time>
                  <span aria-hidden>·</span>
                  <span>{post.readingTime} min read</span>
                  <ArrowUpRight className="ml-auto size-3.5 -translate-x-1 opacity-0 transition duration-200 group-hover:translate-x-0 group-hover:opacity-100" />
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
