"use client"

import * as React from "react"
import { Maximize2, Play, X } from "lucide-react"

import { cn } from "@/lib/utils"

interface VideoZoomProps {
  sources: { src: string; type: string }[]
  poster?: string
  className?: string
}

export function VideoZoom({ sources, poster, className }: VideoZoomProps) {
  const [open, setOpen] = React.useState(false)

  React.useEffect(() => {
    if (!open) return

    const previousOverflow = document.body.style.overflow
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false)
    }

    document.body.style.overflow = "hidden"
    window.addEventListener("keydown", closeOnEscape)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener("keydown", closeOnEscape)
    }
  }, [open])

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Play installation video"
        className={cn(
          "group relative block aspect-video w-full overflow-hidden rounded-2xl bg-black",
          className
        )}
      >
        <video
          className="size-full object-cover opacity-75 transition-opacity group-hover:opacity-100"
          poster={poster}
          muted
          playsInline
          preload="metadata"
        >
          {sources.map((source) => (
            <source key={source.src} src={source.src} type={source.type} />
          ))}
        </video>
        <span className="absolute inset-0 flex items-center justify-center bg-black/20 transition-colors group-hover:bg-black/40">
          <span className="flex size-16 items-center justify-center rounded-full border border-white/30 bg-white/15 backdrop-blur-md transition-transform group-hover:scale-110">
            <Play className="size-6 fill-white text-white" aria-hidden />
          </span>
        </span>
        <span className="absolute right-4 bottom-4 rounded-lg bg-black/45 p-2 text-white/75 backdrop-blur-sm">
          <Maximize2 className="size-4" aria-hidden />
        </span>
      </button>

      {open ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Installation video"
          onMouseDown={(event) => {
            if (event.currentTarget === event.target) setOpen(false)
          }}
          className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
        >
          <video
            controls
            autoPlay
            poster={poster}
            className="aspect-video w-full max-w-5xl rounded-2xl border border-white/10 bg-black object-contain shadow-2xl"
          >
            {sources.map((source) => (
              <source key={source.src} src={source.src} type={source.type} />
            ))}
          </video>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close video"
            className="absolute top-4 right-4 rounded-full border border-white/15 bg-black/55 p-2.5 text-white backdrop-blur-md transition-colors hover:bg-primary"
          >
            <X className="size-5" aria-hidden />
          </button>
        </div>
      ) : null}
    </>
  )
}
