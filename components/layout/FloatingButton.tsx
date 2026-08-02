"use client"

import * as React from "react"
import { MessageCircle, X } from "lucide-react"

import { cn } from "@/lib/utils"

// Neither mark exists in lucide-react v1 — it dropped brand glyphs — so both
// are inlined, the same approach the footer's payment marks use.
const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    fill="currentColor"
    aria-hidden
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.82 9.82 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
  </svg>
)

const TelegramIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    fill="currentColor"
    aria-hidden
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M20.665 3.717l-17.73 6.837c-1.21.486-1.203 1.161-.222 1.462l4.552 1.42 10.532-6.645c.498-.303.953-.14.579.192l-8.533 7.701h-.002l.002.001-.314 4.692c.46 0 .663-.211.921-.46l2.211-2.15 4.599 3.397c.848.467 1.457.227 1.668-.785l3.019-14.228c.309-1.239-.473-1.8-1.282-1.434z" />
  </svg>
)

// Brand hues stay literal — WhatsApp green and Telegram blue are recognition
// cues, so theming them away would cost more than it gains. Everything else
// runs on the project's tokens.
const CHANNELS = [
  {
    name: "WhatsApp",
    tagline: "Fastest response",
    href: "https://wa.me/16728962606",
    color: "#25D366",
    Icon: WhatsAppIcon,
    nudge: "",
  },
  {
    name: "Telegram",
    tagline: "Chat with our team",
    href: "https://t.me/+16728962606",
    color: "#229ED9",
    Icon: TelegramIcon,
    // The glyph sits optically right of centre in its own viewBox.
    nudge: "relative -left-[2px]",
  },
]

export function FloatingButton() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [isVisible, setIsVisible] = React.useState(false)

  React.useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 1500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div
      className={cn(
        "pointer-events-none fixed right-6 bottom-6 z-50 flex flex-col items-end gap-4 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]",
        isVisible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
      )}
    >
      <div
        role="dialog"
        aria-label="Support options"
        className={cn(
          "mb-2 w-[250px] origin-bottom-right rounded-2xl border bg-card/90 p-4 shadow-[0_20px_40px_-15px_rgb(0_0_0/0.3)] backdrop-blur-2xl backdrop-saturate-150 transition-all duration-500",
          isOpen
            ? "pointer-events-auto translate-y-0 scale-100 opacity-100"
            : "pointer-events-none translate-y-8 scale-90 opacity-0"
        )}
      >
        <div className="mb-3.5 px-1">
          <p className="mb-1 text-[8.5px] font-black tracking-[0.2em] text-muted-foreground uppercase">
            Support Options
          </p>
          <h3 className="text-[12px] leading-snug font-bold">
            How would you like to connect with our team?
          </h3>
        </div>

        <div className="flex flex-col gap-2">
          {CHANNELS.map((channel) => (
            <a
              key={channel.name}
              href={channel.href}
              target="_blank"
              rel="noopener noreferrer"
              // Brand tints are per-channel, so they are set inline rather than
              // as classes — Tailwind cannot generate a class from a runtime
              // value.
              style={
                {
                  "--brand": channel.color,
                } as React.CSSProperties
              }
              className="group relative flex w-full items-center justify-between overflow-hidden rounded-xl border border-border/40 bg-background/50 p-2.5 transition-all duration-300 hover:scale-[1.02] hover:border-(--brand)/30 hover:bg-background hover:shadow-lg"
            >
              <div className="relative flex items-center gap-2.5">
                <div className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-(--brand)/10 shadow-sm transition-all duration-300 group-hover:bg-(--brand)">
                  <channel.Icon
                    className={cn(
                      "size-[18px] text-(--brand) transition-colors duration-300 group-hover:text-white",
                      channel.nudge
                    )}
                  />
                </div>

                <div className="flex flex-col items-start">
                  <span className="text-[13px] font-bold">{channel.name}</span>
                  <span className="text-[10px] font-medium tracking-tight text-muted-foreground/80">
                    {channel.tagline}
                  </span>
                </div>
              </div>

              <div className="relative flex size-6 translate-x-2 items-center justify-center rounded-md bg-(--brand)/10 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-(--brand)"
                  aria-hidden
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            </a>
          ))}
        </div>
      </div>

      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        aria-expanded={isOpen}
        aria-label="Toggle support options"
        className={cn(
          "group pointer-events-auto relative flex size-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-[0_8px_30px_rgb(0_0_0/0.2)] transition-all duration-500 hover:scale-105 active:scale-95",
          isOpen && "rotate-90"
        )}
      >
        {/* Attention pulse, suppressed once the panel is open — it has done its
            job by then and would only compete with the content. */}
        {!isOpen && (
          <span
            aria-hidden
            className="absolute inset-0 animate-ping rounded-full bg-primary opacity-20 duration-1000 motion-reduce:animate-none"
          />
        )}

        {isOpen ? (
          <X className="relative size-5 drop-shadow-md" aria-hidden />
        ) : (
          <MessageCircle
            className="relative size-5 drop-shadow-md transition-transform duration-500 group-hover:scale-110"
            aria-hidden
          />
        )}
      </button>
    </div>
  )
}
