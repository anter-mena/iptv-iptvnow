"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

// Screenshots live in public/assets/reviews as 1.png through 10.png, all
// 473x1024 (phone capture), so one shared aspect ratio covers every card.
const REVIEWS = Array.from({ length: 10 }, (_, i) => `${i + 1}.png`)

const COUNT = REVIEWS.length
/** True edge-to-edge gap between neighbouring cards, in px. */
const GAP = 12
/** Cards further out than this are parked invisible on either side. */
const VISIBLE = 2
/** Matches the CSS transition, so one gesture cannot outrun one step. */
const STEP_MS = 450

const DEPTH = [
  { scale: 1, opacity: 1, saturate: 1, brightness: 1 },
  { scale: 0.9, opacity: 0.8, saturate: 0.7, brightness: 1 },
  { scale: 0.78, opacity: 0.5, saturate: 0.35, brightness: 1 },
]

// On phones the side cards are clipped by the screen edge and compete with the
// centre one for attention, so they fade much further back. Scales match DEPTH
// so the spacing from centreAt stays the same.
const DEPTH_MOBILE = [
  { scale: 1, opacity: 1, saturate: 1, brightness: 1 },
  { scale: 0.9, opacity: 0.35, saturate: 0.2, brightness: 0.6 },
  { scale: 0.78, opacity: 0.15, saturate: 0, brightness: 0.5 },
]

/** Below Tailwind's `sm` breakpoint, matching the card width switch. */
const MOBILE_QUERY = "(max-width: 639px)"

const depthAt = (k: number, table = DEPTH) => table[Math.min(k, table.length - 1)]

/**
 * Centre position of the card `k` steps out, in px.
 *
 * A fixed step per card would leave uneven gaps, because a card scaled to 0.78
 * covers less width than one at full size and the leftover shows up as extra
 * air beside it. Walking outwards and adding each neighbouring pair's half
 * widths plus GAP keeps the visible gap identical between every card.
 */
function centreAt(k: number, width: number) {
  let x = 0

  for (let i = 1; i <= k; i++) {
    x += (width * (depthAt(i - 1).scale + depthAt(i).scale)) / 2 + GAP
  }

  return x
}

export function Testimonials() {
  const frameRef = useRef<HTMLDivElement>(null)
  const sizerRef = useRef<HTMLDivElement>(null)
  const lockRef = useRef(false)

  const [index, setIndex] = useState(0)
  const [width, setWidth] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  // Every card keeps its own DOM node and is placed by its signed distance from
  // the centre, so advancing the index slides the whole set by one. A card that
  // wraps jumps at ±COUNT/2, which is well outside VISIBLE and therefore never
  // seen — that is what makes this endless without duplicating the reel.
  const offsetOf = useCallback(
    (i: number) => {
      const raw = (((i - index) % COUNT) + COUNT) % COUNT
      return raw > COUNT / 2 ? raw - COUNT : raw
    },
    [index]
  )

  const go = useCallback((direction: number) => {
    if (lockRef.current) return
    lockRef.current = true
    setIndex((current) => current + direction)
    window.setTimeout(() => {
      lockRef.current = false
    }, STEP_MS)
  }, [])

  useEffect(() => {
    const measure = () => {
      if (sizerRef.current) setWidth(sizerRef.current.offsetWidth)
      setIsMobile(window.matchMedia(MOBILE_QUERY).matches)
    }

    measure()
    window.addEventListener("resize", measure)
    return () => window.removeEventListener("resize", measure)
  }, [])

  useEffect(() => {
    const frame = frameRef.current
    if (!frame) return

    // Wheel stepping was removed in favour of the arrows — it meant intercepting
    // the page's own scrolling, and the buttons make the control explicit.
    // Touch swipe stays, since arrows alone are awkward on a phone.
    let startX = 0
    const onTouchStart = (event: TouchEvent) => {
      startX = event.touches[0].clientX
    }
    const onTouchEnd = (event: TouchEvent) => {
      const dx = event.changedTouches[0].clientX - startX
      if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1)
    }

    frame.addEventListener("touchstart", onTouchStart, { passive: true })
    frame.addEventListener("touchend", onTouchEnd, { passive: true })

    return () => {
      frame.removeEventListener("touchstart", onTouchStart)
      frame.removeEventListener("touchend", onTouchEnd)
    }
  }, [go])

  return (
    <section className="grid grid-cols-[1.5rem_1fr_1.5rem] border-b lg:grid-cols-[3.5rem_1fr_3.5rem]">
      <div className="hatch-rail border-r" aria-hidden />

      <div className="min-w-0">
        <div className="px-6 py-16 text-center">
          <h2 className="text-2xl font-medium tracking-tight md:text-3xl">
            REAL REVIEWS FROM REAL CUSTOMERS
          </h2>
          <p className="mx-auto mt-4 max-w-2xl font-medium text-muted-foreground">
            Unedited conversations with subscribers who reached out to our
            support team.
          </p>
        </div>

        <div
          ref={frameRef}
          className="relative overflow-hidden border-t py-10"
          role="group"
          aria-roledescription="carousel"
          aria-label="Customer reviews"
        >
          {/* Sets the height and the centre line; the cards sit on top of it. */}
          <div
            ref={sizerRef}
            className="relative mx-auto aspect-[473/1024] w-44 sm:w-52"
          >
            {REVIEWS.map((file, i) => {
              const offset = offsetOf(i)
              const distance = Math.abs(offset)
              const depth = depthAt(distance, isMobile ? DEPTH_MOBILE : DEPTH)
              const hidden = distance > VISIBLE
              const x = Math.sign(offset) * centreAt(distance, width)

              return (
                <div
                  key={file}
                  className="absolute inset-0 transition-all duration-500 ease-out motion-reduce:transition-none"
                  style={{
                    transform: `translateX(${x}px) scale(${depth.scale})`,
                    opacity: hidden ? 0 : depth.opacity,
                    filter: `saturate(${depth.saturate}) brightness(${depth.brightness})`,
                    zIndex: COUNT - distance,
                    pointerEvents: hidden ? "none" : undefined,
                  }}
                  aria-hidden={hidden}
                >
                  <div className="relative h-full w-full overflow-hidden rounded-xl border bg-muted">
                    <Image
                      src={`/assets/reviews/${file}`}
                      alt={`Customer conversation screenshot ${i + 1} of ${COUNT}`}
                      fill
                      sizes="(min-width: 640px) 208px, 176px"
                      className="object-cover"
                    />
                  </div>
                </div>
              )
            })}
          </div>

          <button
            type="button"
            onClick={() => go(-1)}
            aria-label="Previous review"
            className="absolute top-1/2 left-4 z-20 flex size-10 -translate-y-1/2 items-center justify-center rounded-full border bg-background text-muted-foreground shadow-sm transition-colors hover:text-foreground"
          >
            <ChevronLeft className="size-5" />
          </button>

          <button
            type="button"
            onClick={() => go(1)}
            aria-label="Next review"
            className="absolute top-1/2 right-4 z-20 flex size-10 -translate-y-1/2 items-center justify-center rounded-full border bg-background text-muted-foreground shadow-sm transition-colors hover:text-foreground"
          >
            <ChevronRight className="size-5" />
          </button>
        </div>
      </div>

      <div className="hatch-rail border-l" aria-hidden />
    </section>
  )
}
