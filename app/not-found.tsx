import Link from "next/link"

// App Router convention: this file is the 404 for anything unmatched. It is
// rendered inside the root layout, so it keeps the header and footer.
export default function NotFound() {
  return (
    <section className="px-6 py-32 text-center lg:px-8">
      <p className="font-tall text-[6rem] leading-none text-muted-foreground">
        404
      </p>

      <h1 className="mt-6 text-2xl font-medium tracking-tight md:text-3xl">
        Page Not Found
      </h1>

      <p className="mx-auto mt-4 max-w-md font-medium text-muted-foreground">
        That page has moved or never existed. Everything else is still where you
        left it.
      </p>

      <Link
        href="/"
        className="mt-8 inline-flex h-9 items-center justify-center rounded-full bg-primary px-5 text-xs font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
      >
        Back to home
      </Link>
    </section>
  )
}
