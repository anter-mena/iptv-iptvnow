import type { Metadata } from "next"
import Link from "next/link"
import { Globe, Headphones, ShieldCheck, Zap } from "lucide-react"

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Who we are, how IPTV NOW works and why Canadian households stream with us.",
}

const VALUES = [
  {
    title: "Built for reliability",
    description:
      "Redundant servers across multiple regions keep your stream steady through peak hours and live events.",
    icon: ShieldCheck,
  },
  {
    title: "Set up in minutes",
    description:
      "No installer, no contract, no hardware to buy. Your details arrive by email and you are watching the same evening.",
    icon: Zap,
  },
  {
    title: "Support that answers",
    description:
      "Real people on live chat around the clock, wherever you are in Canada, in English and French.",
    icon: Headphones,
  },
  {
    title: "Everything in one place",
    description:
      "The networks you already watch, plus a full on-demand library, under a single subscription.",
    icon: Globe,
  },
]

const STATS = [
  { value: "25,000+", label: "Live channels" },
  { value: "120,000+", label: "Movies & shows" },
  { value: "99.9%", label: "Uptime" },
  { value: "24/7", label: "Canadian support" },
]

export default function AboutUsPage() {
  return (
    <>
      <section className="border-b px-6 py-24 text-center lg:px-8">
        <h1 className="text-2xl font-medium tracking-tight md:text-3xl">
          About IPTV NOW
        </h1>
        <p className="mx-auto mt-4 max-w-2xl font-medium text-muted-foreground">
          We are a Canadian streaming service built on a simple idea: everything
          worth watching should live behind one subscription, on whatever device
          you already own.
        </p>
      </section>

      <section className="border-b px-6 py-16 lg:px-8">
        <dl className="mx-auto grid max-w-3xl grid-cols-2 gap-8 text-center lg:grid-cols-4">
          {STATS.map((stat) => (
            <div key={stat.label}>
              <dt className="sr-only">{stat.label}</dt>
              <dd>
                <span className="block text-2xl font-semibold tracking-tight md:text-3xl">
                  {stat.value}
                </span>
                <span className="mt-1 block text-xs text-muted-foreground">
                  {stat.label}
                </span>
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="border-b px-6 py-16 lg:px-8">
        <ul className="mx-auto grid max-w-3xl gap-3 sm:grid-cols-2">
          {VALUES.map((value) => (
            <li
              key={value.title}
              className="rounded-xl border bg-card p-6 shadow-[0_1px_2px_0_rgb(0_0_0/0.04),0_4px_12px_-2px_rgb(0_0_0/0.10)]"
            >
              <span className="flex size-11 items-center justify-center rounded-lg bg-muted shadow-[0_1px_2px_0_rgb(0_0_0/0.08),inset_0_1px_3px_0_rgb(0_0_0/0.10)]">
                <value.icon className="size-5" aria-hidden />
              </span>

              <h2 className="mt-5 text-sm font-bold tracking-tight">
                {value.title}
              </h2>
              <p className="mt-2 text-xs leading-5 text-muted-foreground">
                {value.description}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section className="px-6 py-24 text-center lg:px-8">
        <h2 className="text-2xl font-medium tracking-tight md:text-3xl">
          Ready when you are
        </h2>
        <p className="mx-auto mt-4 max-w-xl font-medium text-muted-foreground">
          Pick a plan and start streaming tonight, or talk to us first.
        </p>

        <div className="mt-8 flex items-center justify-center gap-3">
          <Link
            href="/#pricing"
            className="flex h-9 items-center justify-center rounded-full bg-primary px-5 text-xs font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            View pricing
          </Link>
          <Link
            href="/contact"
            className="flex h-9 items-center justify-center rounded-full border px-5 text-xs font-medium transition-colors hover:bg-muted"
          >
            Contact us
          </Link>
        </div>
      </section>
    </>
  )
}
