import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "FAQ",
}

export default function FaqPage() {
  return (
    <section className="px-6 py-32 text-center lg:px-8">
      <h1 className="text-2xl font-medium tracking-tight md:text-3xl">FAQ</h1>
    </section>
  )
}
