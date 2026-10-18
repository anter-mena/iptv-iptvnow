import type { Metadata, Viewport } from "next";
import { Anton, Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import Script from "next/script";
import { BASE_URL, LOGO_URL, SITE_NAME } from "@/lib/seo";
import { JsonLd } from "@/components/seo/json-ld";
import { Header } from "@/components/layout/Header";
import { CTA } from "@/components/layout/CTA";
import { Footer } from "@/components/layout/Footer";
import { CookieBanner } from "@/components/layout/CookieBanner";
import { FloatingButton } from "@/components/layout/FloatingButton";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const anton = Anton({
  variable: "--font-anton",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

// Right Grotesk Tall, on the Top 10 rank numerals. Self-hosted from app/fonts
// rather than public/, so the file is fingerprinted and preloaded by the font
// pipeline instead of being served as a raw public asset.
//
// LICENCE: Pangram Pangram's free pack is personal-use only. A commercial
// licence is required before this ships publicly.
//
// The free pack has no Tall Black, so the numerals settle between its extremes:
// TallFine is hairline at display size, CompactBlack is too heavy. TightMedium
// is the middle — condensed width, medium weight.
//
// Every cut in the pack shares identical vertical metrics (unitsPerEm 2048,
// capHeight 1400, baseline 0.0708em above the line box bottom), so swapping the
// src to any sibling file needs no repositioning in TopTen.
//
// Declared 400 because each file is a single weight — asking for a heavier one
// only makes the browser synthesise a faux bold.
const rightGrotesk = localFont({
  src: "./fonts/RightGrotesk-TightMedium.otf",
  variable: "--font-right-grotesk",
  weight: "400",
  style: "normal",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: `${SITE_NAME} | Premium IPTV Streaming in Canada`,
    // Pages set a short title ("About Us") and the brand is appended.
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Stream 25,000+ live channels and 120,000+ movies and shows on any device. Canadian IPTV with 24/7 support and a free trial.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/icon.png", sizes: "512x512", type: "image/png" }],
  },
  openGraph: {
    siteName: SITE_NAME,
    locale: "en_CA",
    type: "website",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} — Premium IPTV Streaming in Canada`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/opengraph-image.png"],
  },
};

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#010101",
};

// Site-wide identity for search engines: who publishes the site and its name.
const siteJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${BASE_URL}/#organization`,
      name: SITE_NAME,
      url: BASE_URL,
      logo: LOGO_URL,
      description:
        "Canadian IPTV service streaming live TV, sports, movies and series on Fire TV, Android, Smart TV, Apple devices and more.",
    },
    {
      "@type": "WebSite",
      "@id": `${BASE_URL}/#website`,
      name: SITE_NAME,
      url: BASE_URL,
      inLanguage: "en-CA",
      publisher: { "@id": `${BASE_URL}/#organization` },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${anton.variable} ${rightGrotesk.variable} dark h-full antialiased`}
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <JsonLd data={[siteJsonLd]} />
        <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col px-0 sm:border-x sm:px-6">
          <div className="flex flex-1 flex-col border-x">
            <Header />
            <main className="flex-1">{children}</main>
            <CTA />
            <Footer />
          </div>
        </div>

        <FloatingButton />
        <CookieBanner />

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-P066N3XSSX"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-P066N3XSSX');
          `}
        </Script>

        {/* Microsoft Clarity */}
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "yg5zq3fl63");
          `}
        </Script>
      </body>
    </html>
  );
}
