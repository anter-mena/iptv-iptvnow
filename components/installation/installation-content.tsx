import type { ComponentType } from "react"

import { InstallationAndroid } from "./installation-android"
import { InstallationAndroidTv } from "./installation-android-tv"
import { InstallationApple } from "./installation-apple"
import { InstallationBuzzTv } from "./installation-buzztv"
import { InstallationFirestick } from "./installation-firestick"
import { InstallationFormuler } from "./installation-formuler"
import { InstallationMag } from "./installation-mag"
import { InstallationPc } from "./installation-pc"
import { InstallationRoku } from "./installation-roku"
import { InstallationSmartTv } from "./installation-smart-tv"

// Keyed by the slugs in lib/installation-guides.ts.
const GUIDE_COMPONENTS: Record<string, ComponentType> = {
  "fire-tv": InstallationFirestick,
  "android-tv": InstallationAndroidTv,
  formuler: InstallationFormuler,
  "smart-tv": InstallationSmartTv,
  roku: InstallationRoku,
  apple: InstallationApple,
  windows: InstallationPc,
  "android-phone": InstallationAndroid,
  buzztv: InstallationBuzzTv,
  mag: InstallationMag,
}

export function InstallationContent({ slug }: { slug: string }) {
  const Guide = GUIDE_COMPONENTS[slug]
  if (!Guide) return null

  return (
    <section className="bg-background py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Guide />
      </div>
    </section>
  )
}
