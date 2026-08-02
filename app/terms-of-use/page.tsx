import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Use",
}

export default function TermsOfUsePage() {
  return (
    <section className="px-6 py-32 text-center lg:px-8">
      <h1 className="text-2xl font-medium tracking-tight md:text-3xl">
        Terms of Use
      </h1>
    </section>
  )
}
