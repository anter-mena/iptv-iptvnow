import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"
import Link from "next/link"
import { Clock, LifeBuoy, Mail, MessageCircle } from "lucide-react"

import { ContactForm } from "@/components/contact/ContactForm"

export const metadata: Metadata = buildMetadata({
  title: "Contact IPTV Support",
  description:
    "Reach IPTV NOW support by email or WhatsApp for help with setup, billing and playback. Fast answers for viewers anywhere in Canada.",
  path: "/contact",
})

const CHANNELS = [
  {
    title: "Live chat",
    detail: "Live chat support will be available soon.",
    action: "Coming soon",
    href: null,
    icon: MessageCircle,
  },
  {
    title: "Email support",
    detail: "support@iptvnow.ca",
    action: "Send an email",
    href: "mailto:support@iptvnow.ca",
    icon: Mail,
  },
  {
    title: "Support hours",
    detail: "24 hours a day, 7 days a week, including holidays",
    action: null,
    href: null,
    icon: Clock,
  },
  {
    title: "Installation help",
    detail: "Step-by-step guides for every supported device",
    action: "Browse the guides",
    href: "/installation-guides",
    icon: LifeBuoy,
  },
]

const TILE_DOTS = [
  "top-1.5 left-1.5",
  "top-1.5 right-1.5",
  "bottom-1.5 left-1.5",
  "bottom-1.5 right-1.5",
]

const CARD_DOTS = [
  { at: "top-3 left-3", from: "translate-x-1.5 translate-y-1.5", delay: "" },
  {
    at: "top-3 right-3",
    from: "-translate-x-1.5 translate-y-1.5",
    delay: "group-hover:delay-75",
  },
  {
    at: "bottom-3 right-3",
    from: "-translate-x-1.5 -translate-y-1.5",
    delay: "group-hover:delay-150",
  },
  {
    at: "bottom-3 left-3",
    from: "translate-x-1.5 -translate-y-1.5",
    delay: "group-hover:delay-200",
  },
]

const DOT_SHADOW =
  "shadow-[inset_0_1px_1px_0_rgb(0_0_0/0.35),0_1px_0_0_rgb(255_255_255/0.7)]"

export default function ContactPage() {
  return (
    <>
      <section className="page-header-rails border-b px-6 py-24 text-center lg:px-8">
        <p className="page-eyebrow">Get in Touch</p>
        <h1 className="text-2xl font-medium tracking-tight md:text-3xl">
          Contact
        </h1>
        <p className="mx-auto mt-4 max-w-2xl font-medium text-muted-foreground">
          Questions before you subscribe, or something not playing the way it
          should? Someone is on hand around the clock.
        </p>
      </section>

      <section className="px-6 py-16 lg:px-8">
        <div className="relative mx-auto grid max-w-5xl gap-0 lg:grid-cols-[minmax(0,1fr)_minmax(0,3fr)] lg:items-start">
          <span
            aria-hidden
            className="absolute -top-16 -bottom-16 left-1/4 hidden w-px bg-border lg:block"
          />

          <div className="min-w-0 lg:col-start-2 lg:row-start-1 lg:pl-8">
            <h2 className="text-center text-2xl font-medium tracking-tight md:text-3xl lg:text-left">
              Send us a message
            </h2>
            <p className="mx-auto mt-4 mb-10 max-w-xl text-center font-medium text-muted-foreground lg:mx-0 lg:text-left">
              Prefer writing? Leave your details and we&apos;ll reply by email.
            </p>
            <ContactForm />
          </div>

          <div className="mt-12 border-t pt-12 lg:col-start-1 lg:row-start-1 lg:mt-0 lg:border-t-0 lg:pt-0 lg:pr-8">
            <ul className="mx-auto grid w-full max-w-[20.625rem] grid-cols-2 justify-items-center gap-2.5 lg:mx-0 lg:max-w-40 lg:grid-cols-1 lg:justify-items-start">
              {CHANNELS.map((channel) => (
                <li
                  key={channel.title}
                  className="group relative flex aspect-square w-full max-w-40 items-center justify-center rounded-xl border bg-card p-4 text-center shadow-[0_1px_2px_0_rgb(0_0_0/0.04),0_4px_12px_-2px_rgb(0_0_0/0.10)]"
                >
                  {CARD_DOTS.map((dot) => (
                    <span
                      key={dot.at}
                      aria-hidden
                      className={`absolute ${dot.at} size-1.5 rounded-full bg-muted-foreground/45 ${DOT_SHADOW} transition-transform duration-300 ease-out ${dot.delay} ${dot.from} group-hover:translate-x-0 group-hover:translate-y-0 motion-reduce:transition-none`}
                    />
                  ))}

                <div className="flex flex-col items-center transition-opacity duration-300 ease-out group-hover:opacity-0 group-focus-within:opacity-0 motion-reduce:transition-none">
                  <span className="relative flex size-11 items-center justify-center rounded-lg bg-muted shadow-[0_1px_2px_0_rgb(0_0_0/0.08),inset_0_1px_3px_0_rgb(0_0_0/0.10)]">
                    <channel.icon className="size-5 text-foreground" aria-hidden />
                    {TILE_DOTS.map((position) => (
                      <span
                        key={position}
                        aria-hidden
                        className={`absolute ${position} size-1 rounded-full bg-muted-foreground/50 ${DOT_SHADOW}`}
                      />
                    ))}
                  </span>

                  <h2 className="mt-3 text-[0.7rem] leading-4 font-bold tracking-tight">
                    {channel.title}
                  </h2>
                </div>

                <div className="absolute inset-0 flex flex-col items-center justify-center px-3 opacity-0 transition-all duration-300 ease-out group-hover:opacity-100 group-focus-within:opacity-100 motion-reduce:transition-none">
                  <p aria-hidden className="text-[0.7rem] leading-4 font-bold tracking-tight">
                    {channel.title}
                  </p>
                  <p className="mt-1.5 text-[0.65rem] leading-3.5 text-muted-foreground">
                    {channel.detail}
                  </p>

                  {channel.action &&
                    (channel.href ? (
                      <Link
                        href={channel.href}
                        className="mt-2 text-[0.65rem] font-semibold underline-offset-4 hover:text-primary hover:underline focus-visible:text-primary focus-visible:outline-none focus-visible:underline"
                      >
                        {channel.action}
                      </Link>
                    ) : (
                      <p className="mt-2 text-[0.65rem] font-semibold text-primary">
                        {channel.action}
                      </p>
                    ))}
                </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}
