import type { CSSProperties } from "react"
import Image from "next/image"

// Named topTenData, not topTen: Windows resolves paths case-insensitively, so
// a topTen.ts sitting beside TopTen.tsx makes "./TopTen" ambiguous.
import { TOP_TEN } from "./topTenData"

const HATCH: CSSProperties = {
  backgroundImage:
    "repeating-linear-gradient(45deg, var(--border) 0, var(--border) 1px, transparent 1px, transparent 8px)",
}

export function TopTen() {
  return (
    <section className="grid grid-cols-[1.5rem_1fr_1.5rem] border-b lg:grid-cols-[3.5rem_1fr_3.5rem]">
      <div className="border-r" style={HATCH} aria-hidden />

      {/* min-w-0 is load-bearing: a 1fr track defaults to min-width:auto, so it
          would stretch to the rail's full scroll width and push the whole page
          sideways instead of letting the rail scroll inside it. */}
      <div className="min-w-0">
        <div className="px-6 py-16 text-center">
          <h2 className="text-2xl font-medium tracking-tight md:text-3xl">
            TOP 10 IN CANADA
          </h2>
          <p className="mx-auto mt-4 max-w-2xl font-medium text-muted-foreground">
            Binge-watch the latest trending series and movies of the week.
          </p>
        </div>

        {/* overflow-y-hidden is deliberate. Setting only overflow-x makes
            overflow-y compute from visible to auto, and the horizontal
            scrollbar then eats enough height to trigger a second, vertical
            scrollbar. Pinning y removes it. */}
        {/* The gap has to clear the rank numerals, which hang past each card's
            left edge — too tight and a numeral crowds the previous poster. */}
        {/* pl-12 clears the 14% (~25px) that each numeral hangs past its card,
            so rank 1 is not pressed against the rail's edge.
            scroll-pl-12 must match it: snap-start aligns a card to the
            snapport, which ignores padding unless scroll-padding is set, so
            without this the rail snaps straight past the left padding at rest
            and the space only appears mid-scroll. */}
        <ul className="scrollbar-none flex snap-x snap-mandatory scroll-pl-12 gap-6 overflow-x-auto overflow-y-hidden border-t py-10 pr-6 pl-12">
          {TOP_TEN.map((item, index) => (
            // `relative` is load-bearing: the sr-only label below is absolutely
            // positioned, and without a positioned ancestor inside the scroll
            // container its containing block resolves to the initial containing
            // block. It would then escape the rail's overflow clip and stretch
            // the document's scroll width by the rail's full length.
            <li key={item.title} className="group relative shrink-0 snap-start">
              {/* Wrapper carries the numeral's positioning so the title added
                  below cannot drag it down — the numeral anchors to the poster's
                  bottom edge, not the list item's. */}
              <div className="relative">
                <div className="relative aspect-2/3 w-36 overflow-hidden rounded-lg border bg-muted transition-transform duration-300 ease-out group-hover:scale-105 sm:w-44">
                  <Image
                    src={item.posterUrl}
                    alt=""
                    fill
                    sizes="(min-width: 640px) 176px, 144px"
                    className="object-cover"
                  />

                  {item.ongoing && (
                    <span className="absolute inset-x-0 bottom-0 bg-badge px-2 py-1 text-center text-[0.6rem] font-bold tracking-wide text-badge-foreground">
                      WEEKLY EPISODES
                    </span>
                  )}
                </div>

                {/* Sibling of the poster, not a child — the card clips its own
                    overflow, so a numeral inside could never hang past the left
                    edge. Sizes come from the reference: cap height is 55% of
                    card height, and this face's capHeight is 0.6836em, so
                    font-size = 0.55 / 0.6836 = 1.073x the card width. Its
                    baseline sits 0.0708em above the line box bottom, so 0.04em
                    of bottom offset lands the digit's foot just up from the
                    card edge. */}
                <span
                  aria-hidden
                  // Two shadows: the wide soft one lifts the digit off poster
                  // art, the tight one gives it an edge so rank 1 — which has
                  // no card behind it, only the white page — still reads.
                  className="pointer-events-none absolute bottom-[0.04em] left-[-14%] font-tall text-[9.7rem] leading-none tracking-tight text-white [text-shadow:0_2px_18px_rgb(0_0_0/0.55),0_0_2px_rgb(0_0_0/0.45)] sm:text-[11.8rem]"
                >
                  {index + 1}
                </span>
              </div>

              {/* Always occupies its line, so revealing it on hover never
                  reflows the rail. truncate keeps every title to one line, which
                  is what keeps that reserved height constant. Opacity leaves it
                  in the accessibility tree, so it still carries the name. */}
              <p className="mt-3 w-36 truncate text-center text-sm font-semibold text-foreground opacity-0 transition-opacity duration-300 group-hover:opacity-100 sm:w-44">
                {item.title}
              </p>

              {/* Rank only — the title above is already in the a11y tree, so
                  repeating it here would announce every card twice. */}
              <span className="sr-only">
                Number {index + 1}
                {item.ongoing ? ", new episodes weekly" : ""}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="border-l" style={HATCH} aria-hidden />
    </section>
  )
}
