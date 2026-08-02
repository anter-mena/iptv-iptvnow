import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // TMDB poster CDN, used by the Top 10 section. `domains` is deprecated in
    // this version — `remotePatterns` is the supported form.
    remotePatterns: [
      { protocol: "https", hostname: "image.tmdb.org", pathname: "/t/p/**" },
    ],
  },
};

export default nextConfig;
