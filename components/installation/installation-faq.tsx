import { FaqAccordion } from "@/components/ui/faq-accordion"

interface InstallationFaqProps {
  items: { q: string; a: string }[]
}

export function InstallationFaq({ items }: InstallationFaqProps) {
  return (
    <section className="mb-16">
      <div className="px-6 py-10 text-center">
        <h4 className="text-2xl font-medium tracking-tight md:text-3xl">
          Frequently Asked Questions
        </h4>
        <p className="mx-auto mt-4 max-w-xl font-medium text-muted-foreground">
          Quick answers for this device and installation method.
        </p>
      </div>

      <div className="border-t pt-10">
        <FaqAccordion
          items={items.map((item) => ({
            question: item.q,
            answer: item.a,
          }))}
          className="mx-auto max-w-3xl"
        />
      </div>
    </section>
  )
}
