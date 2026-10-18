import Link from "next/link"

interface InstallationHeroProps {
  eyebrow?: string
  title: string
  description: string
  ctaLabel?: string
}

export function InstallationHero({
  eyebrow = "Setup Assistance",
  title,
  description,
  ctaLabel = "Choose Your Device",
}: InstallationHeroProps) {
  return (
    <section className="page-header-rails border-b px-6 py-24 text-center lg:px-8">
      <div className="animate-fade-up">
        <p className="page-eyebrow">{eyebrow}</p>
        <h1 className="text-2xl font-medium tracking-tight md:text-3xl">{title}</h1>
        <p className="mx-auto mt-4 max-w-2xl font-medium text-muted-foreground">{description}</p>
        <div className="mt-8 flex justify-center">
          <Link
            href="#devices"
            className="liquid-glass flex h-11 items-center justify-center rounded-full px-7 text-sm font-semibold text-white"
          >
            {ctaLabel}
          </Link>
        </div>
      </div>
    </section>
  )
}
