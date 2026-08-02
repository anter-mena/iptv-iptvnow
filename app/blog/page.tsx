import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Blog",
}

export default function BlogPage() {
  return (
    <section className="px-6 py-32 text-center lg:px-8">
      <h1 className="text-2xl font-medium tracking-tight md:text-3xl">Blog</h1>
    </section>
  )
}
