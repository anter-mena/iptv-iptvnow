"use client";

import { useEffect, useState } from "react";
import { List } from "lucide-react";

import type { TocItem } from "@/lib/toc";
import { cn } from "@/lib/utils";

/**
 * "On this page" links built from the article's h2/h3 headings.
 * - variant="mobile": collapsible block above the article on small screens
 * - variant="sidebar": rail beside the article on lg+ (the parent makes it sticky)
 * Highlights the section in view, and hides itself below three headings.
 */
export function TableOfContents({
  items,
  variant = "sidebar",
}: {
  items: TocItem[];
  variant?: "sidebar" | "mobile";
}) {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const headings = items
      .map((item) => document.getElementById(item.id))
      .filter((heading): heading is HTMLElement => heading !== null);
    if (headings.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting);
        if (visible.length === 0) return;

        const topmost = visible.reduce((a, b) =>
          a.boundingClientRect.top < b.boundingClientRect.top ? a : b,
        );
        setActiveId(topmost.target.id);
      },
      // A heading becomes current once it passes under the sticky header.
      { rootMargin: "-96px 0px -70% 0px" },
    );

    headings.forEach((heading) => observer.observe(heading));
    return () => observer.disconnect();
  }, [items]);

  if (items.length < 3) return null;

  const list = (
    <ul className="flex flex-col gap-2 text-[13px]">
      {items.map((item) => (
        <li key={item.id} className={item.depth === 3 ? "pl-3" : undefined}>
          <a
            href={`#${item.id}`}
            className={cn(
              "-ml-px block border-l-2 pl-3 leading-snug transition-colors",
              activeId === item.id
                ? "border-foreground font-medium text-foreground"
                : "border-transparent text-muted-foreground hover:text-foreground",
            )}
          >
            {item.text}
          </a>
        </li>
      ))}
    </ul>
  );

  if (variant === "mobile") {
    return (
      <details className="mb-8 rounded-xl border bg-card p-4 lg:hidden">
        <summary className="flex cursor-pointer list-none items-center gap-2 text-xs font-semibold text-muted-foreground">
          <List className="size-3.5" aria-hidden />
          On this page
        </summary>
        <div className="mt-4 border-l">{list}</div>
      </details>
    );
  }

  return (
    <nav aria-label="Table of contents" className="border-l">
      <p className="mb-3 flex items-center gap-2 pl-3 text-xs font-semibold text-muted-foreground">
        <List className="size-3.5" aria-hidden />
        On this page
      </p>
      {list}
    </nav>
  );
}
