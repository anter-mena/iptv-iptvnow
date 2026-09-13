"use client"

import { useState, useSyncExternalStore } from "react"
import Link from "next/link"
import { Check } from "lucide-react"

import { CurrencyFlag } from "@/components/landing/CurrencyFlag"
import {
  CURRENCIES,
  DEFAULT_CURRENCY,
  DEVICE_COUNTS,
  PLAN_DURATIONS,
  POPULAR_DURATION,
  PRICES,
  isCurrency,
  priceParts,
  type Currency,
  type DeviceCount,
} from "@/lib/pricing"
import { cn } from "@/lib/utils"

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

// The visitor's currency choice, remembered in localStorage. Held in memory too,
// so the switch still works when storage is blocked (private mode, disabled cookies).
const CURRENCY_STORAGE_KEY = "iptvnow-currency"
const currencyListeners = new Set<() => void>()
let selectedCurrency: Currency | null = null

function getCurrency(): Currency {
  if (selectedCurrency === null) {
    let stored: string | null = null
    try {
      stored = window.localStorage.getItem(CURRENCY_STORAGE_KEY)
    } catch {}
    selectedCurrency = isCurrency(stored) ? stored : DEFAULT_CURRENCY
  }
  return selectedCurrency
}

function setCurrency(currency: Currency) {
  selectedCurrency = currency
  try {
    window.localStorage.setItem(CURRENCY_STORAGE_KEY, currency)
  } catch {}
  currencyListeners.forEach((listener) => listener())
}

function subscribeToCurrency(listener: () => void) {
  currencyListeners.add(listener)
  return () => {
    currencyListeners.delete(listener)
  }
}

function deviceLabel(count: number) {
  return `${count} device${count > 1 ? "s" : ""}`
}

export function Pricing() {
  // 3 devices is the default tab — the mid tier most households land on.
  const [devices, setDevices] = useState<DeviceCount>(3)
  // Server render and hydration use CAD; a saved choice applies right after.
  const currency = useSyncExternalStore(subscribeToCurrency, getCurrency, () => DEFAULT_CURRENCY)

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
                "rounded-full px-2.5 py-0.5 text-[11px] font-medium whitespace-nowrap transition-colors",
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

      <div className="mt-3 flex justify-center">
        <div
          role="group"
          aria-label="Currency"
          className="inline-flex items-center gap-0.5 rounded-full bg-muted p-0.5"
        >
          {CURRENCIES.map((code) => (
            <button
              key={code}
              type="button"
              aria-label={`Show prices in ${code}`}
              aria-pressed={code === currency}
              onClick={() => setCurrency(code)}
              className={cn(
                "flex items-center gap-1 rounded-full px-2.5 py-0.5 text-[11px] font-medium whitespace-nowrap transition-colors",
                code === currency
                  ? "bg-background text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              <CurrencyFlag currency={code} className="h-2.5" />
              {code}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-12 grid items-start gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {PLAN_DURATIONS.map((duration, index) => {
          const featured = duration === POPULAR_DURATION
          const { amount, symbol } = priceParts(PRICES[currency][devices][index], currency)

          return (
            <div
              key={duration}
              className={cn(
                "flex flex-col rounded-xl border",
                // The featured card gains 24px of padding at each end, then -mt-6
                // lifts it by half that, so the extra height reads as an equal
                // overhang above and below its neighbours rather than a card that
                // just hangs lower. Only from lg, where the cards sit in one row.
                featured
                  ? "bg-card shadow-lg lg:-mt-6 lg:py-6"
                  : "bg-muted"
              )}
            >
              <div className="p-6">
                {/* justify-between parks the badge on the card's right edge; with
                    no badge the lone heading is unaffected. */}
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-sm">{duration}</h3>
                  {featured && (
                    <span className="rounded-full bg-primary px-2.5 py-0.5 text-xs font-medium text-primary-foreground">
                      Popular
                    </span>
                  )}
                </div>

                <p className="mt-6 flex items-baseline gap-2">
                  {/* Keying on devices and currency remounts the figure on every
                      change, which restarts the enter animation. Smaller at lg,
                      where four narrow cards can't fit "144.99 $US" at 5xl. */}
                  <span
                    key={`${devices}-${currency}`}
                    className="animate-in fade-in slide-in-from-bottom-2 text-5xl font-bold tracking-tight duration-300 motion-reduce:animate-none lg:text-3xl xl:text-5xl"
                  >
                    {amount}
                  </span>
                  <span className="text-sm text-muted-foreground">{symbol}</span>
                </p>

                {/* Reserves two lines so every CTA lands on the same baseline. */}
                <p className="mt-6 min-h-10 text-sm text-muted-foreground">
                  Stream on {deviceLabel(devices)} at the same time.
                </p>

                <Link
                  href="/#pricing"
                  className={cn(
                    "mt-8 flex h-9 items-center justify-center rounded-full text-xs font-semibold shadow-sm transition-colors",
                    featured
                      ? "bg-primary text-primary-foreground hover:bg-primary/90"
                      : "border bg-background text-foreground hover:bg-muted"
                  )}
                >
                  Get Started
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
          )
        })}
      </div>
    </section>
  )
}
