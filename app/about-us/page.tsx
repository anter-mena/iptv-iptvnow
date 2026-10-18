import type { Metadata } from "next"
import {
  BadgeCheck,
  CalendarClock,
  Clapperboard,
  Globe,
  Headphones,
  MonitorSmartphone,
  ShieldCheck,
  Trophy,
  Tv,
  Zap,
} from "lucide-react"

import { JsonLd } from "@/components/seo/json-ld"
import { BASE_URL, SITE_NAME, breadcrumbJsonLd, buildMetadata } from "@/lib/seo"

export const metadata: Metadata = buildMetadata({
  title: "About Us: Canadian IPTV Streaming",
  description:
    "Who we are, how IPTV NOW works and why Canadian households trust us for live TV, sports and on-demand streaming on every device.",
  path: "/about-us",
})

const STATS = [
  { value: "25,000+", label: "Live channels" },
  { value: "120,000+", label: "Movies & shows" },
  { value: "99.9%", label: "Uptime" },
  { value: "24/7", label: "Support" },
]

const INCLUDED = [
  {
    icon: Tv,
    title: "Live TV from Canada and beyond",
    description:
      "Canadian, American and international channels, with an electronic program guide so you can see what's on now and next.",
  },
  {
    icon: Trophy,
    title: "Sports, including the big nights",
    description:
      "Hockey, football, basketball, soccer and fight nights, with feeds chosen to hold up when everyone tunes in at once.",
  },
  {
    icon: Clapperboard,
    title: "A full on-demand library",
    description:
      "Movies and series ready to play whenever you are, added to regularly so there is always something new.",
  },
  {
    icon: MonitorSmartphone,
    title: "Every major device",
    description:
      "Fire TV, Android TV, Samsung and LG smart TVs, Roku, Apple devices, computers and dedicated IPTV boxes.",
  },
  {
    icon: Zap,
    title: "HD and 4K quality",
    description:
      "Sharp HD on every channel that offers it, and 4K where the source supports it, on a fast enough connection.",
  },
  {
    icon: CalendarClock,
    title: "Flexible plans",
    description:
      "Pay for 1, 3, 6 or 12 months and 1 to 4 screens, in CAD, USD or EUR. Every plan includes the same channels.",
  },
]

const VALUES = [
  {
    icon: ShieldCheck,
    title: "Reliability first",
    description:
      "A stream that freezes during the third period is worse than no stream at all. Stability comes before adding more channels.",
  },
  {
    icon: Headphones,
    title: "Support that answers",
    description:
      "Message us on WhatsApp or email and a person replies, whether it's a setup question or a channel that's acting up.",
  },
  {
    icon: BadgeCheck,
    title: "Straight answers",
    description:
      "Clear prices, the same channels on every plan and honest advice about which devices will and won't work well.",
  },
  {
    icon: Globe,
    title: "Built for Canadian viewers",
    description:
      "Canadian channels, Canadian dollar pricing and setup guides for the devices people across the country actually use.",
  },
]

const aboutJsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: `About ${SITE_NAME}`,
  url: `${BASE_URL}/about-us`,
  about: { "@id": `${BASE_URL}/#organization` },
}

/** Section frame with the hatched side rails used across the site. */
function Rails({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <section className={`grid grid-cols-[1rem_1fr_1rem] border-b sm:grid-cols-[1.5rem_1fr_1.5rem] lg:grid-cols-[3.5rem_1fr_3.5rem] ${className ?? ""}`}>
      <div className="hatch-rail border-r" aria-hidden />
      <div className="min-w-0">{children}</div>
      <div className="hatch-rail border-l" aria-hidden />
    </section>
  )
}

function SectionHeading({ eyebrow, title, intro }: { eyebrow: string; title: string; intro?: string }) {
  return (
    <div className="px-5 pt-10 pb-6 sm:px-8 lg:pt-12">
      <p className="page-eyebrow">{eyebrow}</p>
      <h2 className="text-xl font-semibold tracking-tight md:text-2xl">{title}</h2>
      {intro && <p className="mt-2 max-w-2xl text-sm text-muted-foreground md:text-base">{intro}</p>}
    </div>
  )
}

export default function AboutUsPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "About Us", path: "/about-us" },
          ]),
          aboutJsonLd,
        ]}
      />

      <section className="page-header-rails border-b px-6 py-12 text-center lg:px-8 lg:py-14">
        <p className="page-eyebrow">Who We Are</p>
        <h1 className="text-2xl font-medium tracking-tight md:text-3xl">About IPTV NOW</h1>
        <p className="mx-auto mt-3 max-w-2xl text-sm font-medium text-muted-foreground md:text-base">
          We are a Canadian streaming service built on a simple idea: everything worth watching
          should live behind one subscription, on whatever device you already own.
        </p>
      </section>

      {/* Stats */}
      <section className="border-b">
        <dl className="mx-auto grid max-w-5xl grid-cols-2 divide-x divide-y border-x lg:grid-cols-4 lg:divide-y-0">
          {STATS.map((stat) => (
            <div key={stat.label} className="px-4 py-6 text-center">
              <dt className="sr-only">{stat.label}</dt>
              <dd>
                <span className="block text-2xl font-semibold tracking-tight md:text-3xl">{stat.value}</span>
                <span className="mt-1 block text-xs text-muted-foreground">{stat.label}</span>
              </dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Mission */}
      <Rails>
        <div className="px-5 py-10 sm:px-8 lg:py-12">
          <div className="max-w-3xl">
            <p className="page-eyebrow">Our Mission</p>
            <h2 className="text-xl font-semibold tracking-tight md:text-2xl">
              Less juggling, more watching
            </h2>
            <div className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground md:text-base">
              <p>
                Watching TV in Canada has become complicated. The game is on one service, the show
                everyone is talking about is on another, and the cable bill keeps climbing. Most
                households end up paying for several subscriptions and still can&rsquo;t find what
                they want to watch.
              </p>
              <p>
                IPTV NOW brings live channels, sports and an on-demand library together in one
                place, delivered over the internet connection you already have. You pick a plan,
                install one app and everything is in the same guide, on every screen in the house.
              </p>
            </div>
          </div>

        </div>
      </Rails>

      {/* What's included */}
      <Rails>
        <SectionHeading
          eyebrow="What You Get"
          title="Included with every plan"
          intro="No premium tiers or add-on packs. Whichever plan you choose, you get the full service."
        />
        {/* Six items fill every row at 1, 2 and 3 columns, so the 1px gap over
            a border-coloured background draws clean hairlines between cells. */}
        <ul className="grid gap-px border-t bg-border sm:grid-cols-2 lg:grid-cols-3">
          {INCLUDED.map((item) => (
            <li key={item.title} className="bg-background p-5 sm:p-6">
              <item.icon className="size-5 text-primary" aria-hidden />
              <h3 className="mt-3 text-sm font-semibold tracking-tight">{item.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
            </li>
          ))}
        </ul>
      </Rails>

      {/* Values */}
      <Rails>
        <SectionHeading
          eyebrow="What We Stand For"
          title="How we run IPTV NOW"
          intro="A few principles behind every decision, from which channels we add to how we answer support messages."
        />
        <ul className="grid gap-2 px-5 pb-10 sm:grid-cols-2 sm:px-8 lg:grid-cols-4 lg:pb-12">
          {VALUES.map((value) => (
            <li key={value.title} className="rounded-sm border bg-card p-5">
              <span className="flex size-9 items-center justify-center rounded-sm bg-muted">
                <value.icon className="size-4.5 text-foreground" aria-hidden />
              </span>
              <h3 className="mt-4 text-sm font-semibold tracking-tight">{value.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{value.description}</p>
            </li>
          ))}
        </ul>
      </Rails>

    </>
  )
}
