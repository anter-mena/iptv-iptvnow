import type { CSSProperties } from "react"
import Link from "next/link"
import { ArrowUpRight, Zap } from "lucide-react"

import { FlickeringGrid } from "@/components/ui/flickering-grid"
import {
  ApplePayIcon,
  GooglePayIcon,
  MastercardIcon,
  PayPalIcon,
  VisaIcon,
} from "./paymentIcons"

// Heights are optical, not uniform — each viewBox is cropped to its glyph, so
// `height` is real ink. Visa is the reference at 13px because it is pure caps
// with no descender. Mastercard's discs read heavier than caps, so they sit
// slightly under it. The three marks carrying a "y" descender need more total
// ink to land on the same cap height. Scale the set by nudging all five
// together — the ratios between them are what keep the row balanced.
const PAYMENT_METHODS = [
  { label: "Visa", Icon: VisaIcon, className: "h-[11px]" },
  { label: "Mastercard", Icon: MastercardIcon, className: "h-3" },
  { label: "PayPal", Icon: PayPalIcon, className: "h-[14px]" },
  { label: "Apple Pay", Icon: ApplePayIcon, className: "h-4" },
  { label: "Google Pay", Icon: GooglePayIcon, className: "h-[15px]" },
]

const LEGAL_LINKS = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Use", href: "/terms-of-use" },
]

// "#" marks a destination that has no route or section yet.
// `external` opens the whole column in a new tab.
const FOOTER_COLUMNS = [
  {
    title: "Quick Links",
    links: [
      { label: "Home", href: "/" },
      // Leading slash matters: the footer is in the root layout, so a bare
      // "#pricing" would look for that anchor on whatever page you are already
      // on rather than returning to the home page's pricing section.
      { label: "Pricing Plans", href: "/#pricing" },
      { label: "Free Trial", href: "/#pricing" },
      { label: "Blog", href: "/blog" },
      { label: "News", href: "/news" },
      { label: "About Us", href: "/about-us" },
      { label: "Contact Support", href: "/contact" },
    ],
  },
  {
    title: "Support & Help",
    links: [
      { label: "Installation Guides", href: "/installation-guides" },
      { label: "FAQ", href: "/faq" },
      { label: "Refund Policy", href: "/refund-policy" },
      { label: "General Disclaimer", href: "/general-disclaimer" },
    ],
  },
  {
    title: "Follow Us",
    external: true,
    links: [
      { label: "Facebook", href: "#" },
      { label: "Instagram", href: "#" },
      { label: "TikTok", href: "#" },
    ],
  },
]

const WORDMARK = "Streamline your workflow"

// Shared geometry only — both layers must use the same pitch so the clipped
// wordmark stays in register with the ambient field behind it.
const GRID_PROPS = {
  squareSize: 2,
  gridGap: 2,
  flickerChance: 0.2,
}

// Fades the whole effect in from the top, densest along the bottom edge.
const FADE = "linear-gradient(to bottom, transparent, black)"

const FADE_STYLE: CSSProperties = {
  maskImage: FADE,
  WebkitMaskImage: FADE,
}

// Photoshop-style clipping mask: the wordmark clips the flickering layer, so
// the grid paints only inside the letterforms. A data-URI SVG is an isolated
// document and cannot reach Geist, so the glyphs fall back to the system sans.
const WORDMARK_MASK = `url("data:image/svg+xml,${encodeURIComponent(
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 150">` +
    `<text x="600" y="106" text-anchor="middle" fill="white" ` +
    `font-family="system-ui,sans-serif" font-size="90" font-weight="600">` +
    `${WORDMARK}</text></svg>`
)}")`

const CLIP_STYLE: CSSProperties = {
  maskImage: WORDMARK_MASK,
  WebkitMaskImage: WORDMARK_MASK,
  maskSize: "contain",
  WebkitMaskSize: "contain",
  maskPosition: "center",
  WebkitMaskPosition: "center",
  maskRepeat: "no-repeat",
  WebkitMaskRepeat: "no-repeat",
}

export function Footer() {
  return (
    // No border-t here — the CTA section's bottom rule is the separator, and
    // it spans the full outer frame rather than stopping at the inner one.
    <footer className="relative overflow-hidden">
      <div className="grid gap-12 px-6 pt-12 lg:grid-cols-[1fr_auto_auto_auto] lg:gap-x-16">
        <div>
          <Link href="/" className="flex items-center gap-2.5">
            <span className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <Zap className="size-4" />
            </span>
            <span className="text-lg font-bold tracking-tight">IPTV NOW</span>
          </Link>

          <p className="mt-6 max-w-80 text-sm leading-7 text-muted-foreground">
            Premium streaming with thousands of live channels, movies and
            shows — your entertainment, everywhere, on every device
          </p>

          <ul
            aria-label="Accepted payment methods"
            className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-3"
          >
            {PAYMENT_METHODS.map(({ label, Icon, className }) => (
              <li
                key={label}
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                <Icon className={`${className} w-auto`} />
                <span className="sr-only">{label}</span>
              </li>
            ))}
          </ul>

          <div className="mt-6 space-y-2 text-xs text-muted-foreground">
            {/* Evaluated when the page is rendered, so a rebuild rolls the
                year over rather than leaving a stale literal in the source. */}
            <p>&copy; {new Date().getFullYear()} IPTV NOW. All rights reserved.</p>

            <ul className="flex flex-wrap items-center gap-x-4 gap-y-1">
              {LEGAL_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="underline-offset-4 transition-colors hover:text-foreground hover:underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {FOOTER_COLUMNS.map((column) => (
          <nav key={column.title}>
            <h2 className="text-sm font-semibold">{column.title}</h2>
            <ul className="mt-5 space-y-3">
              {column.links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    {...(column.external && {
                      target: "_blank",
                      rel: "noreferrer",
                    })}
                    className="group inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {/* Underline sits on the label alone — on the anchor it
                        would run under the arrow too. */}
                    <span className="underline-offset-4 group-hover:underline">
                      {link.label}
                    </span>
                    {/* Always in flow, so revealing it never reflows the row. */}
                    <ArrowUpRight className="size-3.5 -translate-x-1 opacity-0 transition duration-200 group-hover:translate-x-0 group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>

      <div className="relative mt-32 h-56" aria-hidden style={FADE_STYLE}>
        <FlickeringGrid
          {...GRID_PROPS}
          color="rgb(120, 120, 120)"
          maxOpacity={0.35}
          className="absolute inset-0"
        />
        <div className="absolute inset-0" style={CLIP_STYLE}>
          <FlickeringGrid
            {...GRID_PROPS}
            color="rgb(0, 0, 0)"
            minOpacity={0.55}
            maxOpacity={1}
            className="absolute inset-0"
          />
        </div>
      </div>
    </footer>
  )
}
