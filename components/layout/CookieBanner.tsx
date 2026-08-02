"use client"

import { useSyncExternalStore } from "react"
import Link from "next/link"
import { Cookie } from "lucide-react"

const STORAGE_KEY = "iptvnow.cookie-consent"

/**
 * Consent is read through useSyncExternalStore rather than pulled into state
 * from an effect. localStorage is not available while prerendering, and syncing
 * it in with setState both trips react-hooks/set-state-in-effect and paints one
 * frame before the value is known.
 */
const listeners = new Set<() => void>()

// Fallback for private mode and blocked storage, where writes throw. The choice
// then holds for the session instead of not sticking at all.
let memory: string | null = null

function subscribe(onChange: () => void) {
  listeners.add(onChange)
  return () => {
    listeners.delete(onChange)
  }
}

function getSnapshot() {
  try {
    return window.localStorage.getItem(STORAGE_KEY) ?? memory
  } catch {
    return memory
  }
}

// Nothing is knowable on the server. A non-null sentinel keeps the banner out
// of the prerendered HTML, so it cannot flash for someone who already dismissed
// it — it appears only once the client confirms no choice is stored.
function getServerSnapshot() {
  return "unknown"
}

function record(choice: "accepted" | "declined") {
  memory = choice

  try {
    window.localStorage.setItem(STORAGE_KEY, choice)
  } catch {
    // Held in memory above for the rest of the session.
  }

  listeners.forEach((listener) => listener())
}

export function CookieBanner() {
  const consent = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot
  )

  if (consent !== null) return null

  return (
    <div
      role="dialog"
      aria-label="Cookie notice"
      // Above the floating button, below the header's dropdowns.
      className="fixed inset-x-4 bottom-4 z-40 mx-auto max-w-2xl rounded-xl border bg-card/85 p-4 shadow-lg backdrop-blur-md backdrop-saturate-150 sm:inset-x-6"
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-muted">
          <Cookie className="size-4" aria-hidden />
        </span>

        <p className="flex-1 text-xs leading-5 text-muted-foreground">
          We use cookies to keep the site running and to understand how it is
          used. See our{" "}
          <Link
            href="/privacy-policy"
            className="font-medium text-foreground underline-offset-4 hover:underline"
          >
            Privacy Policy
          </Link>
          .
        </p>

        <div className="flex shrink-0 items-center gap-2">
          <button
            type="button"
            onClick={() => record("declined")}
            className="flex h-8 items-center justify-center rounded-full border px-4 text-xs font-medium transition-colors hover:bg-muted"
          >
            Decline
          </button>
          <button
            type="button"
            onClick={() => record("accepted")}
            className="flex h-8 items-center justify-center rounded-full bg-primary px-4 text-xs font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  )
}
