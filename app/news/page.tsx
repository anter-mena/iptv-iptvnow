import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "News",
}

export default function NewsPage() {
  return (
    <section className="px-6 py-32 text-center lg:px-8">
      <h1 className="text-2xl font-medium tracking-tight md:text-3xl">News</h1>
    </section>
  )
}
