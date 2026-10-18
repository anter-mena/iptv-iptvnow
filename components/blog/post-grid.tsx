import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowUpRight, Newspaper } from "lucide-react";

import { formatDate, type ArticleSection, type PostMeta } from "@/lib/content";

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
    <section className="px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
      <ul className="mx-auto grid max-w-6xl gap-2 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link
              href={`${section.path}/${post.slug}`}
              className="group flex h-full flex-col overflow-hidden rounded-sm border bg-card transition-colors hover:border-primary/60 focus-visible:border-primary focus-visible:outline-none"
            >
              <div className="relative aspect-16/9 overflow-hidden border-b bg-muted">
                {post.image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={post.image}
                    alt=""
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 size-full object-cover transition-opacity duration-300 group-hover:opacity-85 motion-reduce:transition-none"
                  />
                ) : (
                  <div className="absolute inset-0 bg-linear-to-br from-brand-red/25 to-brand-dark/5" />
                )}
                <span className="absolute top-2 left-2 rounded-xs bg-badge px-1.5 py-0.5 text-[10px] font-semibold tracking-wider text-badge-foreground uppercase">
                  {post.category}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-4">
                <h2 className="text-[15px] leading-snug font-semibold tracking-tight group-hover:text-primary">{post.title}</h2>
                <p className="mt-1.5 line-clamp-2 flex-1 text-[13px] leading-5 text-muted-foreground">
                  {post.description}
                </p>

                <div className="mt-3 flex items-center gap-2 border-t pt-3 text-[11px] text-muted-foreground">
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
