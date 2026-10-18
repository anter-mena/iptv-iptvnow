"use client"

import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { ArrowLeft, Home } from "lucide-react"

export default function NotFound() {
  const router = useRouter()

  return (
    <div className="fixed inset-0 z-[99999] flex flex-col items-center justify-center overflow-hidden bg-background p-6 text-center">
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/2 left-1/2 size-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[120px]"
      />

      <div className="relative z-10">
        <div className="relative mb-4 flex flex-col items-center justify-center">
          <span
            aria-hidden
            className="absolute -top-24 left-1/2 -translate-x-1/2 select-none text-[180px] leading-none font-black tracking-tighter text-foreground opacity-5 md:text-[240px]"
            style={{ fontFamily: '"Segoe UI Black", "Segoe UI", sans-serif' }}
          >
            404
          </span>
          <span
            className="not-found-glitch relative text-8xl leading-none font-black tracking-tighter text-primary md:text-9xl"
            data-text="404"
            style={{ fontFamily: '"Segoe UI Black", "Segoe UI", sans-serif' }}
          >
            404
          </span>
        </div>

        <p className="page-eyebrow">Lost in the Stream</p>
        <h1 className="font-anton mb-4 text-2xl tracking-tight text-foreground uppercase md:text-3xl">
          Channel <span className="text-primary">Not Found</span>
        </h1>

        <p className="mx-auto mb-10 max-w-sm text-[10px] font-bold tracking-[0.2em] text-muted-foreground uppercase">
          The frequency you are looking for is currently unavailable or has moved.
        </p>

        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <button
            type="button"
            onClick={() => router.back()}
            className="flex items-center justify-center rounded-full bg-primary px-6 py-2.5 text-sm font-bold text-primary-foreground shadow-xl ring-4 ring-primary/20 transition-transform hover:scale-105 active:scale-95"
          >
            <ArrowLeft className="mr-2 size-3.5" aria-hidden />
            Go Back
          </button>
          <Link
            href="/"
            className="liquid-glass flex items-center justify-center rounded-full px-6 py-2.5 text-sm font-bold text-white transition-transform hover:scale-105 active:scale-95"
          >
            <Home className="mr-2 size-3.5" aria-hidden />
            Back to Home
          </Link>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 opacity-25">
        <Image
          src="/logo-footer.svg"
          alt="IPTV NOW"
          width={176}
          height={88}
          className="h-10 w-auto grayscale"
        />
      </div>
    </div>
  )
}
