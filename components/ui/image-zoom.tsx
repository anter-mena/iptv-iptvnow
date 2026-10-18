"use client"

import * as React from "react"
import Image from "next/image"
import { X, ZoomIn } from "lucide-react"
import { createPortal } from "react-dom"

import { cn } from "@/lib/utils"

interface ImageZoomProps {
  src: string
  alt: string
  className?: string
  aspectRatio?: "video" | "square" | "auto"
  trigger?: React.ReactNode
}

export function ImageZoom({
  src,
  alt,
  className,
  aspectRatio = "video",
  trigger,
}: ImageZoomProps) {
  const [open, setOpen] = React.useState(false)

  React.useEffect(() => {
    if (!open) return

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false)
    }

    window.addEventListener("keydown", closeOnEscape)

    return () => {
      window.removeEventListener("keydown", closeOnEscape)
    }
  }, [open])

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={`Enlarge ${alt}`}
        className={cn(
          "group relative block cursor-zoom-in overflow-hidden rounded-sm bg-muted",
          aspectRatio === "video" && "aspect-video",
          aspectRatio === "square" && "aspect-square",
          className
        )}
      >
        {trigger ?? (
          <>
            <Image
              src={src}
              alt={alt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 448px"
            />
            <span className="absolute inset-0 flex items-center justify-center bg-black/25 opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
              <span className="rounded-full border border-white/20 bg-black/45 p-2 backdrop-blur-md">
                <ZoomIn className="size-5 text-white" aria-hidden />
              </span>
            </span>
          </>
        )}
      </button>

      {open && typeof document !== "undefined"
        ? createPortal(
            <div
              role="dialog"
              aria-modal="true"
              aria-label={alt}
              onClick={(event) => {
                if (event.currentTarget === event.target) setOpen(false)
              }}
              className="fixed inset-0 z-[99999] flex items-center justify-center overflow-y-auto overscroll-contain bg-black/90 p-4 backdrop-blur-sm"
            >
              <div className="relative h-[85vh] w-[min(95vw,80rem)]">
                <Image
                  src={src}
                  alt={alt}
                  fill
                  priority
                  className="object-contain"
                  sizes="95vw"
                />
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close image"
                autoFocus
                className="absolute top-4 right-4 rounded-full border border-white/15 bg-black/55 p-2.5 text-white backdrop-blur-md transition-colors hover:bg-primary"
              >
                <X className="size-5" aria-hidden />
              </button>
            </div>,
            document.body
          )
        : null}
    </>
  )
}
