import Link from "next/link"

export function CTA() {
  return (
    // -mx-6 cancels the outer container's px-6, so the divider rules run the
    // full width of the outer frame and the card still clears the inner rule.
    // The bottom rule doubles as the footer's separator — Footer deliberately
    // has no border-t of its own, or the two would stack into a 2px line.
    <section className="-mx-6 border-y">
      <div className="relative z-20 h-[320px] overflow-hidden rounded-xl border bg-linear-to-br from-[#1D4ED8] to-[#3B72F5] shadow-xl">
        {/* public/pattern.svg — 1200x400 artwork with transparent gaps, so the
            gradient above still shows through. */}
        <div
          className="absolute inset-0 bg-[url('/pattern.svg')] bg-cover bg-center bg-no-repeat opacity-30"
          aria-hidden
        />

        <div className="absolute inset-0 -top-24 flex flex-col items-center justify-center md:-top-32">
          <h2 className="max-w-xs text-center text-4xl font-medium tracking-tighter text-white md:max-w-xl md:text-6xl">
            Automate. Simplify. Thrive
          </h2>

          <div className="absolute bottom-8 flex flex-col items-center justify-center gap-2">
            <Link
              href="/#pricing"
              className="flex h-10 w-fit items-center justify-center rounded-full bg-white px-4 text-sm font-semibold text-black shadow-md"
            >
              Start Your 30-Day Free Trial Today
            </Link>
            <span className="text-sm text-white">
              Cancel anytime, no questions asked
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
