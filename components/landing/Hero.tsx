import Image from "next/image"
import Link from "next/link"
import { Layers } from "lucide-react"

export function Hero() {
  return (
    // -mt-23 cancels the header's own height (h-14 plus py-4.5 either side, so
    // 92px) which pulls the artwork up behind it, letting the header sit
    // transparent over the image. pt-23 puts the content back below it.
    <section className="relative -mt-23 flex min-h-svh flex-col items-center justify-center overflow-hidden px-6 pt-23 pb-20 text-center">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        {/* priority, because this is the largest paint above the fold — left to
            lazy-load it would arrive after the text and pop in. */}
        <Image
          src="/BG.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        {/* Dark scrim rather than a light one: the artwork is a dense collage,
            and only a dark wash gives white type a stable background across
            every poster behind it. */}
        <div className="absolute inset-0 bg-black/65" />

        {/* Deepens top and bottom, then resolves to the page background so the
            section hands off to the marquee instead of stopping on a hard edge. */}
        <div className="absolute inset-0 bg-linear-to-b from-black/50 via-transparent to-background" />
      </div>

      <Link
        href="/news"
        className="inline-flex h-7 items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 text-sm text-white shadow-sm backdrop-blur-md transition-colors hover:bg-white/20"
      >
        <Layers className="size-3.5" />
        Introducing custom automations
      </Link>

      <h1 className="mt-12 text-4xl font-semibold tracking-tight text-white md:text-[4rem] md:leading-none">
        <span className="block">Entertainment</span>
        <span className="block">that&rsquo;s More You</span>
      </h1>

      <p className="mx-auto mt-9 max-w-xl text-lg leading-relaxed text-white/75">
        Start streaming your series and movies now
      </p>

      <div className="mt-12 flex items-center justify-center">
        <Link
          href="/#pricing"
          className="liquid-glass flex h-11 items-center justify-center rounded-full px-7 text-sm font-semibold text-white"
        >
          Try for Free
        </Link>
      </div>
    </section>
  )
}
