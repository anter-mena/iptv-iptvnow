import type { ComponentProps } from "react";

/**
 * Images inside an article body. A plain <img> on purpose: post images can come
 * from any host, which next/image would reject unless every domain were listed
 * in next.config.ts. Sizing and rounding come from .blog-prose in globals.css.
 */
export function PostImage({ src, alt }: ComponentProps<"img">) {
  if (typeof src !== "string" || !src) return null;

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt={typeof alt === "string" ? alt : ""} loading="lazy" decoding="async" />
  );
}
