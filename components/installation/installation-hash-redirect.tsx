"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

import { deviceGuideHref, getDeviceGuide } from "@/lib/installation-guides"

/** Sends old links like /installation-guides#roku to the guide's own page. */
export function InstallationHashRedirect() {
  const router = useRouter()

  useEffect(() => {
    const guide = getDeviceGuide(window.location.hash.slice(1))
    if (guide) router.replace(deviceGuideHref(guide.slug))
  }, [router])

  return null
}
