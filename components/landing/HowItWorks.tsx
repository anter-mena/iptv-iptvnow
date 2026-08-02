import { CreditCard, Download, MailCheck, Play } from "lucide-react"

const STEPS = [
  {
    title: "Choose Your Plan",
    description:
      "Select the perfect IPTV package that fits your needs and budget from our flexible pricing options.",
    icon: CreditCard,
  },
  {
    title: "Receive Your Account",
    description:
      "Your account details arrive by email minutes after checkout. Nothing to register, nothing to set up.",
    icon: MailCheck,
  },
  {
    title: "Download App",
    description:
      "Install our app on your preferred device. Compatible with Smart TV, mobile, tablet, and more.",
    icon: Download,
  },
  {
    title: "Start Streaming",
    description:
      "Enter the details we sent you in the app and enjoy unlimited access to 25,000+ channels and 120,000+ VOD titles.",
    icon: Play,
  },
]

// Same icon-tile treatment as the feature cards. Duplicated rather than shared,
// matching how HATCH is handled across the section files.
const TILE_DOTS = [
  "top-1.5 left-1.5",
  "top-1.5 right-1.5",
  "bottom-1.5 left-1.5",
  "bottom-1.5 right-1.5",
]

const DOT_SHADOW =
  "shadow-[inset_0_1px_1px_0_rgb(0_0_0/0.35),0_1px_0_0_rgb(255_255_255/0.7)]"

export function HowItWorks() {
  return (
    <section id="how-it-works" className="border-b px-6 py-20 text-center lg:px-8">
      {/* w-fit sizes the wrapper to the label, so the rule above it matches the
          text width exactly rather than needing a hardcoded length. */}
      <div className="mx-auto w-fit">
        <span className="block h-px w-full bg-foreground" aria-hidden />
        <span className="text-[0.6rem] font-medium tracking-[0.25em] uppercase">
          Simple Process
        </span>
      </div>

      <h2 className="mt-6 text-2xl font-medium tracking-tight md:text-3xl">
        HOW IT <span className="text-primary">WORKS</span>
      </h2>

      {/* Blocks from md so the sentence break lands after "steps." rather than
          wherever the measure happens to run out. Inline below that, where the
          column is too narrow for a forced break to help. */}
      <p className="mx-auto mt-4 max-w-2xl font-medium text-muted-foreground">
        <span className="md:block">
          Get started with premium IPTV streaming in just 4 simple steps.
        </span>{" "}
        <span className="md:block">
          From choosing your plan to watching your favorite content.
        </span>
      </p>

      <div className="relative mt-32">
        {/* One rule threaded through every step, replacing the arrows. It is
            inset to 12.5% — the centre of the first and last of four equal
            columns — so it starts and stops under those tiles rather than
            running out to the section edges. top-6 is half the 48px tile, which
            puts it on their centre line. Only from lg, where the steps sit in a
            row; stacked, it would cut across them. */}
        <div
          aria-hidden
          className="absolute top-6 right-[12.5%] left-[12.5%] hidden h-px bg-border lg:block"
        />

        <div className="grid items-start gap-x-4 gap-y-12 lg:grid-cols-4">
          {STEPS.map((step, index) => (
            <div key={step.title} className="flex flex-col items-center">
              <div className="relative">
                {/* bg-muted is opaque, which matters here beyond styling — the
                    connector runs behind the tiles, and a translucent fill
                    would show it striking through each icon. */}
                <div className="relative flex size-12 items-center justify-center rounded-xl bg-muted shadow-[0_1px_2px_0_rgb(0_0_0/0.08),inset_0_1px_3px_0_rgb(0_0_0/0.10)]">
                  <step.icon className="size-5 text-primary" aria-hidden />

                  {TILE_DOTS.map((position) => (
                    <span
                      key={position}
                      aria-hidden
                      className={`absolute size-1 rounded-full bg-border ${position} ${DOT_SHADOW}`}
                    />
                  ))}
                </div>
                <span className="absolute -top-1.5 -right-1.5 flex size-5 items-center justify-center rounded-full bg-primary text-[0.6rem] font-bold text-primary-foreground">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <h3 className="mt-4 text-sm font-bold tracking-tight">
                {step.title}
              </h3>
              <p className="mt-2 max-w-xs text-xs leading-6 text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
