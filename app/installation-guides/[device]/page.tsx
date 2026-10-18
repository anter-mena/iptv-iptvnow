import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { InstallationContent } from "@/components/installation/installation-content"
import { InstallationDeviceSelection } from "@/components/installation/installation-device-selection"
import { InstallationHero } from "@/components/installation/installation-hero"
import { JsonLd } from "@/components/seo/json-ld"
import { DEVICE_GUIDES, GUIDES_PATH, deviceGuideHref, getDeviceGuide } from "@/lib/installation-guides"
import { breadcrumbJsonLd, buildMetadata } from "@/lib/seo"

type Props = { params: Promise<{ device: string }> }

export const dynamicParams = false

export function generateStaticParams() {
  return DEVICE_GUIDES.map((guide) => ({ device: guide.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { device } = await params
  const guide = getDeviceGuide(device)
  if (!guide) return {}

  return buildMetadata({
    title: guide.title,
    description: guide.description,
    path: deviceGuideHref(guide.slug),
  })
}

export default async function DeviceGuidePage({ params }: Props) {
  const { device } = await params
  const guide = getDeviceGuide(device)
  if (!guide) notFound()

  return (
    <div className="animate-fade-up">
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Installation Guides", path: GUIDES_PATH },
            { name: guide.name, path: deviceGuideHref(guide.slug) },
          ]),
        ]}
      />
      <InstallationHero
        eyebrow={`${guide.name} Guide`}
        title={guide.heading}
        description={guide.description}
        ctaLabel="Other Devices"
      />
      <InstallationContent slug={guide.slug} />
      <InstallationDeviceSelection selectedId={guide.slug} />
    </div>
  )
}
