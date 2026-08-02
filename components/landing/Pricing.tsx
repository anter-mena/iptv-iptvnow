"use client"

import { useState } from "react"
import Link from "next/link"
import { Check } from "lucide-react"

import { cn } from "@/lib/utils"

const DEVICE_COUNTS = [1, 2, 3, 4]

const FEATURES = [
  "4K Ultra HD Streaming Quality",
  "25,000+ Live Channels Worldwide",
  "120,000+ Movies & TV Shows",
  "Premium PPV Events Included",
  "Instant VOD Access",
  "Smart EPG & Catch-Up TV",
  "24/7 Canadian Support",
  "Multi-Device Compatibility",
]

/** Prices in CAD, keyed by device count. */
const PLANS = [
  {
    duration: "1 Month",
    prices: { 1: 19, 2: 29, 3: 39, 4: 49 },
    cta: "Get Started",
    ctaClassName: "border bg-background text-foreground hover:bg-muted",
    featured: false,
  },
  {
    duration: "3 Months",
    prices: { 1: 29, 2: 49, 3: 69, 4: 89 },
    cta: "Get Started",
    ctaClassName: "border bg-background text-foreground hover:bg-muted",
    featured: false,
  },
  {
    duration: "6 Months",
    prices: { 1: 49, 2: 89, 3: 119, 4: 129 },
    cta: "Get Started",
    ctaClassName: "bg-primary text-primary-foreground hover:bg-primary/90",
    featured: true,
  },
  {
    duration: "12 Months",
    prices: { 1: 79, 2: 129, 3: 179, 4: 199 },
    cta: "Get Started",
    ctaClassName: "border bg-background text-foreground hover:bg-muted",
    featured: false,
  },
]

function deviceLabel(count: number) {
  return `${count} device${count > 1 ? "s" : ""}`
}

export function Pricing() {
  // 3 devices is the default tab — the mid tier most households land on.
  const [devices, setDevices] = useState(3)

  return (
    <section id="pricing" className="border-b px-6 py-24 lg:px-8">
      <h2 className="text-center text-2xl font-medium tracking-tight md:text-3xl">
        CHOOSE YOUR IPTV 4K SUBSCRIPTION
      </h2>
      <p className="mx-auto mt-4 max-w-2xl text-center font-medium text-muted-foreground">
        Choose from our flexible plans and enjoy premium streaming at an
        unbeatable price. All plans include free trial and money-back guarantee.
      </p>

      {/* The rule runs edge to edge and the toggle straddles it. */}
      <div className="relative -mx-6 mt-12 flex justify-center lg:-mx-8">
        <div className="absolute inset-x-0 top-1/2 border-t" />
        <div className="relative inline-flex items-center gap-0.5 rounded-full bg-muted p-0.5">
          {DEVICE_COUNTS.map((count) => (
            <button
              key={count}
              type="button"
              onClick={() => setDevices(count)}
              className={cn(
                "rounded-full px-3 py-1 text-xs font-medium whitespace-nowrap transition-colors",
                count === devices
                  ? "bg-background text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {deviceLabel(count)}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-12 grid items-start gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {PLANS.map((plan) => (
          <div
            key={plan.duration}
            className={cn(
              "flex flex-col rounded-xl border",
              // The featured card gains 24px of padding at each end, then -mt-6
              // lifts it by half that, so the extra height reads as an equal
              // overhang above and below its neighbours rather than a card that
              // just hangs lower. Only from lg, where the cards sit in one row.
              plan.featured
                ? "bg-card shadow-lg lg:-mt-6 lg:py-6"
                : "bg-muted"
            )}
          >
            <div className="p-6">
              {/* justify-between parks the badge on the card's right edge; with
                  no badge the lone heading is unaffected. */}
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-sm">{plan.duration}</h3>
                {plan.featured && (
                  <span className="rounded-full bg-primary px-2.5 py-0.5 text-xs font-medium text-primary-foreground">
                    Popular
                  </span>
                )}
              </div>

              <p className="mt-6 flex items-baseline gap-2">
                {/* Keying on `devices` remounts the figure on every tab
                    change, which restarts the enter animation. */}
                <span
                  key={devices}
                  className="animate-in fade-in slide-in-from-bottom-2 text-5xl font-bold tracking-tight duration-300 motion-reduce:animate-none"
                >
                  {plan.prices[devices as keyof typeof plan.prices]}
                </span>
                <span className="text-sm text-muted-foreground">$CA</span>
              </p>

              {/* Reserves two lines so every CTA lands on the same baseline. */}
              <p className="mt-6 min-h-10 text-sm text-muted-foreground">
                Stream on {deviceLabel(devices)} at the same time.
              </p>

              <Link
                href="/#pricing"
                className={cn(
                  "mt-8 flex h-9 items-center justify-center rounded-full text-xs font-semibold shadow-sm transition-colors",
                  plan.ctaClassName
                )}
              >
                {plan.cta}
              </Link>
            </div>

            <div className="border-t p-6">
              <ul className="space-y-3">
                {FEATURES.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-xs">
                    <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-foreground/10">
                      <Check className="size-3" />
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
