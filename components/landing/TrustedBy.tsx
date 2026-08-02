import type { CSSProperties } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Marquee } from "@/components/ui/marquee"

/**
 * Logos come from Simple Icons where it still carries the mark, and from
 * Wikimedia Commons for the ones it has dropped on trademark request. Every
 * file is a solid shape on transparency, which is what lets the mask below
 * silhouette it — a logo drawn as white letters on a coloured plate would mask
 * to a featureless blob instead. Every viewBox is also cropped to its own ink,
 * so the box height below IS the rendered height.
 *
 * `h` is optical, not uniform. Equal heights make a wide wordmark (Max, aspect
 * 3.65) tower over a tall mark (NBA, 0.44) because width runs away with it, so
 * height is scaled down as the aspect widens — roughly 32px / aspect^0.35.
 * ABC and Netflix are hand-set against that curve: ABC's ring encloses a lot of
 * empty centre so it needs the extra height to read, and Netflix's ribbon is
 * dense enough that the formula's height made it heavier than its neighbours.
 *
 * NFL is absent on purpose: its shield paints the lettering white on top of a
 * blue plate, so a silhouette is a blank shield, and the white paths turn out
 * to be the stars rather than the letters. No freely licensed NFL mark
 * survives masking. Drop an SVG in public/assets/brands to add it back.
 *
 * NBA is the official Simple Icons mark. It works here because its player
 * silhouette is a knocked-out subpath rather than white paint on top, so the
 * mask keeps it — the same property that decided beIN Sports could not stay.
 */
const BRANDS = [
  { name: "Netflix", logo: "netflix.svg", h: "h-8" },
  { name: "Disney+", logo: "disneyplus.svg", h: "h-6" },
  { name: "Prime Video", logo: "primevideo.svg", h: "h-5" },
  { name: "Max", logo: "max.svg", h: "h-5" },
  { name: "Apple TV", logo: "appletv.svg", h: "h-6" },
  { name: "Hulu", logo: "hulu.svg", h: "h-5" },
  { name: "Crunchyroll", logo: "crunchyroll.svg", h: "h-8" },
  { name: "Sky", logo: "sky.svg", h: "h-7" },
  { name: "NBC", logo: "nbc.svg", h: "h-7" },
  { name: "ABC", logo: "abc.svg", h: "h-8" },
  { name: "BBC", logo: "bbc.svg", h: "h-5" },
  { name: "CBC News", logo: "cbc.svg", h: "h-8" },
  { name: "Paramount+", logo: "paramountplus.svg", h: "h-7" },
  { name: "NBA TV", logo: "nba.svg", h: "h-11" },
  { name: "DAZN", logo: "dazn.svg", h: "h-8" },
]

// Wide enough for the broadest render (Max at h-5 is ~73px) with headroom, so
// the mask is never width-limited and the heights above stay authoritative.
const LOGO_WIDTH = "w-24"

// Tints any SVG with currentColor by using it as a mask rather than an image,
// so every logo picks up the surrounding colour the way the footer's payment
// marks do.
function maskStyle(logo: string): CSSProperties {
  const url = `url(/assets/brands/${logo})`

  return {
    maskImage: url,
    WebkitMaskImage: url,
    maskSize: "contain",
    WebkitMaskSize: "contain",
    maskPosition: "center",
    WebkitMaskPosition: "center",
    maskRepeat: "no-repeat",
    WebkitMaskRepeat: "no-repeat",
  }
}

export function TrustedBy() {
  return (
    <section className="border-b px-6 py-8 lg:px-8">
      <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,17rem)_1fr] lg:gap-12">
        <p className="max-w-xs text-sm leading-6 text-muted-foreground">
          Every network you already watch, in one subscription — streaming to
          households across Canada
        </p>

        {/* min-w-0 stops the 1fr track stretching to the marquee's full content
            width, which would push the whole page sideways. */}
        <div className="relative min-w-0">
          <Marquee
            repeat={2}
            pauseOnHover
            className="p-0 [--duration:45s] [--gap:1.5rem]"
          >
            {BRANDS.map((brand) => (
              // Named group, because Marquee's own wrapper already claims the
              // unnamed `group` for its pause-on-hover. An unnamed group here
              // would make every logo react whenever the row is hovered.
              <Link
                key={brand.name}
                href="/#pricing"
                className={`group/logo relative flex h-16 shrink-0 flex-col items-center justify-center ${LOGO_WIDTH}`}
              >
                <span
                  role="img"
                  aria-label={brand.name}
                  style={maskStyle(brand.logo)}
                  className={`block bg-muted-foreground transition-all duration-300 ease-out group-hover/logo:-translate-y-2 group-hover/logo:bg-foreground motion-reduce:transition-none ${brand.h} ${LOGO_WIDTH}`}
                />

                <span className="absolute bottom-1.5 flex items-center gap-1 text-[0.7rem] font-medium whitespace-nowrap opacity-0 transition-opacity duration-300 group-hover/logo:opacity-100 motion-reduce:transition-none">
                  Try now
                  <ArrowRight className="size-3" />
                </span>
              </Link>
            ))}
          </Marquee>

          {/* Fades the row out at both ends so logos enter and leave rather than
              being clipped mid-glyph. */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-linear-to-r from-background to-transparent"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-linear-to-l from-background to-transparent"
          />
        </div>
      </div>
    </section>
  )
}
