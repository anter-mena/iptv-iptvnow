import Link from "next/link"

import { Ripple } from "@/components/ui/ripple"

export function CTA() {
  return (
    // The opaque wrapper masks the frame's vertical rules behind the card,
    // while border-y preserves the intended horizontal dividers.
    <section className="mx-0 border-y bg-background p-1 sm:-mx-6">
      <div className="relative z-20 h-[320px] overflow-hidden rounded-xl border shadow-xl">
        <Ripple mainCircleSize={160} mainCircleOpacity={0.28} numCircles={8} />

        <div className="absolute inset-0 -top-24 z-10 flex flex-col items-center justify-center md:-top-32">
          <h2 className="max-w-xs text-center font-display text-4xl font-normal tracking-tight text-white md:max-w-xl md:text-6xl">
            Your Entertainment. Your Way.
          </h2>

          <div className="absolute bottom-8 flex flex-col items-center justify-center gap-2">
            <Link
              href="/#pricing"
              className="flex h-10 w-fit items-center justify-center rounded-full bg-white px-4 text-sm font-semibold text-black shadow-md"
            >
              Start Your Free 24-Hour Trial
            </Link>
            <span className="text-sm text-white">
              No commitment. Setup takes only minutes.
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
