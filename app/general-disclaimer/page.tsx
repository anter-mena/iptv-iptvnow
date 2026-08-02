import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "General Disclaimer",
}

export default function GeneralDisclaimerPage() {
  return (
    <section className="px-6 py-32 text-center lg:px-8">
      <h1 className="text-2xl font-medium tracking-tight md:text-3xl">
        General Disclaimer
      </h1>
    </section>
  )
}
