import { cn } from "@/lib/utils"

interface PageHeroProps {
  title: string
  description?: string
  subtitle?: string
  className?: string
}

const DEFAULT_EYEBROWS: Record<string, string> = {
  "Privacy Policy": "Your Privacy",
  "Terms of Use": "Legal Information",
  "General Disclaimer": "Important Information",
  "Refund Policy": "Customer Care",
}

export function PageHero({ title, description, subtitle, className }: PageHeroProps) {
  const eyebrow = subtitle ?? DEFAULT_EYEBROWS[title]

  return (
    <section
      className={cn(
        "page-header-rails px-6 py-24 text-center md:py-32 lg:px-8",
        className
      )}
    >
      {eyebrow ? <p className="page-eyebrow">{eyebrow}</p> : null}
      <h1 className="font-anton text-3xl tracking-tight text-foreground uppercase md:text-4xl">
        {title}
      </h1>
      {description ? (
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-muted-foreground md:text-base">
          {description}
        </p>
      ) : null}
    </section>
  )
}
