import type { Metadata } from "next"
import Link from "next/link"
import { Clock, LifeBuoy, Mail, MessageCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Reach IPTV NOW support by email or live chat, 24/7, anywhere in Canada.",
}

const CHANNELS = [
  {
    title: "Live chat",
    detail: "Fastest route — usually answered in a couple of minutes",
    action: "Open the chat bubble",
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

export default function ContactPage() {
  return (
    <>
      <section className="border-b px-6 py-24 text-center lg:px-8">
        <h1 className="text-2xl font-medium tracking-tight md:text-3xl">
          Contact
        </h1>
        <p className="mx-auto mt-4 max-w-2xl font-medium text-muted-foreground">
          Questions before you subscribe, or something not playing the way it
          should? Someone is on hand around the clock.
        </p>
      </section>

      <section className="border-b px-6 py-16 lg:px-8">
        <ul className="mx-auto grid max-w-3xl gap-3 sm:grid-cols-2">
          {CHANNELS.map((channel) => (
            <li
              key={channel.title}
              className="rounded-xl border bg-card p-6 shadow-[0_1px_2px_0_rgb(0_0_0/0.04),0_4px_12px_-2px_rgb(0_0_0/0.10)]"
            >
              <span className="flex size-11 items-center justify-center rounded-lg bg-muted shadow-[0_1px_2px_0_rgb(0_0_0/0.08),inset_0_1px_3px_0_rgb(0_0_0/0.10)]">
                <channel.icon className="size-5" aria-hidden />
              </span>

              <h2 className="mt-5 text-sm font-bold tracking-tight">
                {channel.title}
              </h2>
              <p className="mt-2 text-xs leading-5 text-muted-foreground">
                {channel.detail}
              </p>

              {channel.action &&
                (channel.href ? (
                  <Link
                    href={channel.href}
                    className="mt-4 inline-block text-xs font-semibold underline-offset-4 hover:underline"
                  >
                    {channel.action}
                  </Link>
                ) : (
                  <p className="mt-4 text-xs font-semibold text-muted-foreground">
                    {channel.action}
                  </p>
                ))}
            </li>
          ))}
        </ul>
      </section>

      <section className="px-6 py-24 text-center lg:px-8">
        <h2 className="text-2xl font-medium tracking-tight md:text-3xl">
          Not subscribed yet?
        </h2>
        <p className="mx-auto mt-4 max-w-xl font-medium text-muted-foreground">
          Every plan is month to month, with no contract and no lock-in.
        </p>

        <Link
          href="/#pricing"
          className="mt-8 inline-flex h-9 items-center justify-center rounded-full bg-primary px-5 text-xs font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
        >
          View pricing
        </Link>
      </section>
    </>
  )
}
