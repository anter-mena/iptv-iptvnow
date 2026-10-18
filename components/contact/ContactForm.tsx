"use client"

/* Contact form.

   Submission logic is UNIFIED across the network: same lib/contact.ts helper,
   same fields (name, email, optional phone, subject, message, honeypot).
   Only the look is site-specific. Site-specific email config lives in
   app/api/contact/route.ts.                                               */

import { useState } from "react"
import { CheckCircle2, Loader2 } from "lucide-react"

import { submitContactForm, type ContactStatus } from "@/lib/contact"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { cn } from "@/lib/utils"

const TOPICS = [
  "Technical support",
  "Billing question",
  "Installation help",
  "Before I subscribe",
  "Something else",
]

/* ── Site styling — the only part that differs between sites ───────────── */
const STYLES = {
  card: "rounded-xl border bg-card p-6 shadow-[0_1px_2px_0_rgb(0_0_0/0.04),0_4px_12px_-2px_rgb(0_0_0/0.10)] sm:p-8",
  label: "text-xs font-bold tracking-tight",
  field:
    "h-10 w-full rounded-lg border bg-background px-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/70 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:opacity-60",
  button:
    "inline-flex h-9 items-center justify-center gap-2 rounded-full bg-primary px-5 text-xs font-semibold text-primary-foreground transition-colors hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-60",
}
/* ─────────────────────────────────────────────────────────────────────── */

export function ContactForm() {
  const [status, setStatus] = useState<ContactStatus>("idle")
  const [subject, setSubject] = useState("")
  const [error, setError] = useState("")

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (status === "submitting") return

    setStatus("submitting")
    setError("")

    const result = await submitContactForm(e.currentTarget)
    if (!result.ok) {
      setError(result.error)
      setStatus("error")
      return
    }

    setStatus("success")
  }

  if (status === "success") {
    return (
      <div className={cn(STYLES.card, "flex min-h-80 flex-col items-center justify-center text-center")}>
        <span className="flex size-11 items-center justify-center rounded-lg bg-muted shadow-[0_1px_2px_0_rgb(0_0_0/0.08),inset_0_1px_3px_0_rgb(0_0_0/0.10)]">
          <CheckCircle2 className="size-5" aria-hidden />
        </span>
        <h3 className="mt-5 text-sm font-bold tracking-tight">Message sent</h3>
        <p className="mt-2 max-w-xs text-xs leading-5 text-muted-foreground">
          Thanks for reaching out. We usually answer within a few hours, any day of the week.
        </p>
        <button
          type="button"
          onClick={() => {
            setSubject("")
            setStatus("idle")
          }}
          className="mt-5 text-xs font-semibold underline-offset-4 hover:underline"
        >
          Send another message
        </button>
      </div>
    )
  }

  const submitting = status === "submitting"

  return (
    <form onSubmit={handleSubmit} className={cn(STYLES.card, "flex flex-col gap-5")}>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="firstName" className={STYLES.label}>First name</label>
          <input id="firstName" name="firstName" autoComplete="given-name" placeholder="Jane" required disabled={submitting} className={STYLES.field} />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="lastName" className={STYLES.label}>Last name</label>
          <input id="lastName" name="lastName" autoComplete="family-name" placeholder="Doe" required disabled={submitting} className={STYLES.field} />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="email" className={STYLES.label}>Email</label>
        <input id="email" name="email" type="email" autoComplete="email" placeholder="you@example.com" required disabled={submitting} className={STYLES.field} />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="phone" className={STYLES.label}>
          Phone <span className="font-medium text-muted-foreground">(optional)</span>
        </label>
        <input id="phone" name="phone" type="tel" autoComplete="tel" placeholder="(555) 000-0000" disabled={submitting} className={STYLES.field} />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="subject" className={STYLES.label}>What&apos;s it about?</label>
        <Select
          id="subject"
          name="subject"
          value={subject || null}
          onValueChange={(value) => setSubject(value ?? "")}
          required
          disabled={submitting}
        >
          <SelectTrigger className={cn(STYLES.field, "data-[size=default]:h-10")}>
            <SelectValue placeholder="Select a topic" />
          </SelectTrigger>
          <SelectContent align="start">
            {TOPICS.map((topic) => (
              <SelectItem key={topic} value={topic}>
                {topic}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className={STYLES.label}>Message</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="How can we help?"
          required
          disabled={submitting}
          className={cn(STYLES.field, "h-auto resize-none py-2.5")}
        />
      </div>

      {/* Honeypot — hidden from people, frequently auto-filled by bots. */}
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="pointer-events-none absolute -left-[9999px] h-px w-px opacity-0"
      />

      {status === "error" && (
        <p role="alert" className="text-xs leading-5 text-destructive">
          {error}
        </p>
      )}

      <button type="submit" disabled={submitting} className={cn(STYLES.button, "self-end")}>
        {submitting ? <Loader2 className="size-3.5 animate-spin" aria-hidden /> : null}
        {submitting ? "Sending..." : "Send message"}
      </button>
    </form>
  )
}
