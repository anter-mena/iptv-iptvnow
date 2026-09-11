import { ImageResponse } from "next/og";

import { BASE_URL, SITE_NAME } from "@/lib/seo";

// lucide "Zap" — the same mark as the header logo.
const ZAP_PATH =
  "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z";

/** Social share card for blog posts and news items, in the IPTV NOW palette. */
export function articleOgImage({
  title,
  eyebrow,
  path,
  size,
}: {
  title: string;
  eyebrow: string;
  path: string;
  size: { width: number; height: number };
}) {
  const footer = `${new URL(BASE_URL).host}${path}`;

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "#0a0a0a",
          color: "white",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 10,
            display: "flex",
            background: "linear-gradient(90deg, #1D4ED8, #3B72F5)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: -140,
            right: -140,
            width: 520,
            height: 520,
            display: "flex",
            borderRadius: 9999,
            background: "radial-gradient(circle, rgba(59,114,245,0.35) 0%, transparent 70%)",
          }}
        />

        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 48,
              height: 48,
              borderRadius: 12,
              background: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg
              width="26"
              height="26"
              viewBox="0 0 24 24"
              fill="none"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d={ZAP_PATH} />
            </svg>
          </div>
          <span style={{ fontSize: 34, fontWeight: 700, letterSpacing: -1 }}>{SITE_NAME}</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <span style={{ fontSize: 22, fontWeight: 700, letterSpacing: 5, color: "#8fb0ff" }}>
            {eyebrow.toUpperCase()}
          </span>
          <span
            style={{
              fontSize: 60,
              fontWeight: 700,
              lineHeight: 1.08,
              maxWidth: 1000,
              letterSpacing: -1.5,
            }}
          >
            {title}
          </span>
        </div>

        <span style={{ fontSize: 24, color: "rgba(255,255,255,0.5)" }}>{footer}</span>
      </div>
    ),
    { ...size },
  );
}
