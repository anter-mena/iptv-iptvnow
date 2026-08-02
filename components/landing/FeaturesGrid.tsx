import type { CSSProperties } from "react"

// Heroicons solid (MIT), served from public/assets/icons. Solid glyphs rather
// than Lucide's thin strokes — at tile size a 2px outline reads weak and washed
// out, which is the difference against the reference.
//
// "|" in a title is the line break. Every card wraps to exactly two lines, and
// choosing the break here rather than letting the measure decide keeps the
// split sensible ("25,000+ Live / Channels", not "25,000+ Live Channels" on one
// line while its neighbour takes two).
const FEATURES = [
  {
    title: "25,000+ Live|Channels",
    description:
      "Sports, news and entertainment from every major network, streaming live.",
    icon: "tv.svg",
  },
  {
    title: "4K Ultra HD|Quality",
    description:
      "Every channel delivered in crisp 4K where the broadcast supports it.",
    icon: "sparkles.svg",
  },
  {
    title: "120,000+ Movies|& Shows",
    description:
      "A full on-demand library, topped up every week with new releases.",
    icon: "film.svg",
  },
  {
    title: "Works on|Every Device",
    description:
      "Smart TV, phone, tablet, Firestick or laptop. Set up once, watch anywhere.",
    icon: "device-phone-mobile.svg",
  },
  {
    title: "Instant|Activation",
    description:
      "Your line goes live minutes after checkout. No waiting, no engineer visit.",
    icon: "bolt.svg",
  },
  {
    title: "24/7 Canadian|Support",
    description:
      "Real people on live chat around the clock, wherever you are in Canada.",
    icon: "chat-bubble-left-right.svg",
  },
  {
    title: "No Contract,|Cancel Anytime",
    description:
      "Month to month with no lock-in. Stop whenever you like, no questions asked.",
    icon: "calendar-days.svg",
  },
  {
    title: "99.9% Uptime|Guarantee",
    description:
      "Redundant servers keep the stream steady straight through peak hours.",
    icon: "shield-check.svg",
  },
]

// Screw-head dots. They sit on the icon tile at rest and on the card itself
// once it flips to the description, matching the reference's two states.
const TILE_DOTS = [
  "top-1.5 left-1.5",
  "top-1.5 right-1.5",
  "bottom-1.5 left-1.5",
  "bottom-1.5 right-1.5",
]

// Each dot starts nudged toward the card's middle and settles outward into its
// corner on hover. The offsets mirror per corner so all four travel outwards,
// and the delays fire them clockwise from the top left rather than at once.
const CARD_DOTS = [
  { at: "top-3 left-3", from: "translate-x-1.5 translate-y-1.5", delay: "" },
  {
    at: "top-3 right-3",
    from: "-translate-x-1.5 translate-y-1.5",
    delay: "delay-75",
  },
  {
    at: "bottom-3 right-3",
    from: "-translate-x-1.5 -translate-y-1.5",
    delay: "delay-150",
  },
  {
    at: "bottom-3 left-3",
    from: "translate-x-1.5 -translate-y-1.5",
    delay: "delay-200",
  },
]

// Each dot reads as a recess: a dark inset shadow sinks it into the surface,
// and a hairline light shadow beneath lifts the rim back out.
const DOT_SHADOW =
  "shadow-[inset_0_1px_1px_0_rgb(0_0_0/0.35),0_1px_0_0_rgb(255_255_255/0.7)]"

const HATCH: CSSProperties = {
  backgroundImage:
    "repeating-linear-gradient(45deg, var(--border) 0, var(--border) 1px, transparent 1px, transparent 8px)",
}

// Drawn as a mask rather than an <img> so the glyph takes currentColor and can
// be themed, the same way the footer's payment marks work.
function maskStyle(icon: string): CSSProperties {
  const url = `url(/assets/icons/${icon})`

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

function TitleLines({ title }: { title: string }) {
  return (
    <>
      {title.split("|").map((line) => (
        <span key={line} className="block">
          {line}
        </span>
      ))}
    </>
  )
}

export function FeaturesGrid() {
  return (
    // Inherits #features from the deleted Features section so the header nav
    // link still resolves.
    <section
      id="features"
      className="grid grid-cols-[1.5rem_1fr_1.5rem] border-b lg:grid-cols-[3.5rem_1fr_3.5rem]"
    >
      <div className="border-r" style={HATCH} aria-hidden />

      <div>
        <div className="px-6 py-16 text-center">
          <h2 className="text-2xl font-medium tracking-tight md:text-3xl">
            Everything You Need to Move Faster
          </h2>
          <p className="mx-auto mt-4 max-w-2xl font-medium text-muted-foreground">
            A complete toolkit for automating the work that slows your team
            down.
          </p>
        </div>

        {/* The border-t has to span the full column, so any width cap sits on
            an inner wrapper rather than on the rule itself. */}
        <div className="border-t px-6 py-10">
          <ul className="mx-auto grid max-w-2xl gap-2.5 sm:grid-cols-2 lg:grid-cols-4">
            {FEATURES.map((feature) => (
              // Square, per the reference — which is also what lets the two
              // states be absolutely positioned and cross-fade without the card
              // resizing between them.
              <li
                key={feature.title}
                className="group relative flex aspect-square items-center justify-center rounded-xl border bg-card p-4 text-center shadow-[0_1px_2px_0_rgb(0_0_0/0.04),0_4px_12px_-2px_rgb(0_0_0/0.10)]"
              >
                {CARD_DOTS.map((dot) => (
                  <span
                    key={dot.at}
                    aria-hidden
                    className={`absolute size-1 scale-50 rounded-full bg-border opacity-0 transition-all duration-300 ease-out group-hover:translate-x-0 group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100 motion-reduce:transition-none ${dot.at} ${dot.from} ${dot.delay} ${DOT_SHADOW}`}
                  />
                ))}

                {/* Resting state — icon tile above the title. */}
                <div className="flex flex-col items-center transition-all duration-300 ease-out group-hover:scale-95 group-hover:opacity-0 motion-reduce:transition-none">
                  {/* Drop shadow plus an inset highlight, so the tile sits
                      slightly proud of the card while its face reads pressed. */}
                  <span className="relative flex size-11 items-center justify-center rounded-lg bg-muted shadow-[0_1px_2px_0_rgb(0_0_0/0.08),inset_0_1px_3px_0_rgb(0_0_0/0.10)]">
                    <span
                      aria-hidden
                      style={maskStyle(feature.icon)}
                      className="size-5 bg-foreground"
                    />

                    {TILE_DOTS.map((position) => (
                      <span
                        key={position}
                        aria-hidden
                        className={`absolute size-1 rounded-full bg-border ${position} ${DOT_SHADOW}`}
                      />
                    ))}
                  </span>

                  <h3 className="mt-3 text-[0.7rem] leading-4 font-bold tracking-tight">
                    <TitleLines title={feature.title} />
                  </h3>
                </div>

                {/* Hover state — title moves up and the description appears. */}
                <div className="absolute inset-0 flex flex-col items-center justify-center px-3 opacity-0 transition-all duration-300 ease-out group-hover:opacity-100 motion-reduce:transition-none">
                  {/* aria-hidden because the resting copy already announces it,
                      and both layers stay in the DOM. */}
                  <p
                    aria-hidden
                    className="text-[0.7rem] leading-4 font-bold tracking-tight"
                  >
                    <TitleLines title={feature.title} />
                  </p>
                  <p className="mt-1.5 text-[0.65rem] leading-3.5 text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-l" style={HATCH} aria-hidden />
    </section>
  )
}
