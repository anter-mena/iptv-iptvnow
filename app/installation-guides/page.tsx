import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { InstallationDeviceSelection } from "@/components/installation/installation-device-selection"
import { InstallationHashRedirect } from "@/components/installation/installation-hash-redirect"
import { InstallationHero } from "@/components/installation/installation-hero"
import { JsonLd } from "@/components/seo/json-ld"
import { DEVICE_GUIDES, GUIDES_PATH, deviceGuideHref } from "@/lib/installation-guides"
import { BASE_URL, breadcrumbJsonLd, buildMetadata } from "@/lib/seo"

export const metadata: Metadata = buildMetadata({
  title: "IPTV Installation Guides for Every Device",
  description:
    "Step-by-step guides to set up IPTV NOW on Fire TV Stick, Android TV, Smart TV, Roku, Apple devices, computers and IPTV boxes.",
  path: GUIDES_PATH,
})

const guidesListJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: DEVICE_GUIDES.map((guide, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: guide.heading,
    url: `${BASE_URL}${deviceGuideHref(guide.slug)}`,
  })),
}

export default function InstallationGuidesPage() {
  return (
    <div className="animate-fade-up">
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Installation Guides", path: GUIDES_PATH },
          ]),
          guidesListJsonLd,
        ]}
      />
      <InstallationHashRedirect />
      <InstallationHero
        title="IPTV Installation Guides"
        description="Easy step-by-step installation instructions for all your devices. Get up and streaming in minutes with our comprehensive setup guides."
      />
      <InstallationDeviceSelection />

      <section aria-labelledby="all-guides" className="border-t px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 id="all-guides" className="text-2xl font-medium tracking-tight md:text-3xl">
            All setup guides
          </h2>
          <p className="mt-3 text-muted-foreground">
            Not sure which one you need? Pick the device you watch TV on most. Every guide uses the
            same IPTV NOW login, so you can set up more devices later.
          </p>
          <ul className="mt-8 divide-y divide-border border-y">
            {DEVICE_GUIDES.map((guide) => (
              <li key={guide.slug}>
                <Link
                  href={deviceGuideHref(guide.slug)}
                  className="group flex items-start justify-between gap-6 py-5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
                >
                  <span>
                    <span className="font-medium text-foreground group-hover:text-primary">
                      {guide.heading}
                    </span>
                    <span className="mt-1 block text-sm text-muted-foreground">{guide.description}</span>
                  </span>
                  <ArrowRight
                    className="mt-1 size-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary motion-reduce:transition-none"
                    aria-hidden
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  )
}
