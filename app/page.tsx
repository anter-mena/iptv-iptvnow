import type { Metadata } from "next"

import { Hero } from "@/components/landing/Hero"
import { TrustedBy } from "@/components/landing/TrustedBy"
import { HowItWorks } from "@/components/landing/HowItWorks"
import { TopTen } from "@/components/landing/TopTen"
import { FeaturesGrid } from "@/components/landing/FeaturesGrid"
import { Pricing } from "@/components/landing/Pricing"
import { Testimonials } from "@/components/landing/Testimonials"
import { FAQ } from "@/components/landing/FAQ"
import { JsonLd } from "@/components/seo/json-ld"
import { CURRENCIES, priceRange } from "@/lib/pricing"
import { BASE_URL, SITE_NAME, buildMetadata } from "@/lib/seo"

export const metadata: Metadata = buildMetadata({
  title: "Premium IPTV Streaming in Canada",
  description:
    "Stream 25,000+ live channels and 120,000+ movies and shows on Fire TV, Android, Smart TV, Apple and more. Canadian IPTV with 24/7 support.",
  path: "/",
})

// One price range per currency, matching the prices shown in the pricing section.
const productJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: `${SITE_NAME} Subscription`,
  description:
    "IPTV subscription with live TV channels, sports, movies and series in HD and 4K, for 1 to 4 devices.",
  brand: { "@type": "Brand", name: SITE_NAME },
  offers: CURRENCIES.map((currency) => {
    const { low, high, count } = priceRange(currency)
    return {
      "@type": "AggregateOffer",
      url: `${BASE_URL}/#pricing`,
      priceCurrency: currency,
      lowPrice: low,
      highPrice: high,
      offerCount: count,
      availability: "https://schema.org/InStock",
    }
  }),
}

export default function Home() {
  return (
    <>
      <JsonLd data={[productJsonLd]} />
      <Hero />
      <TrustedBy />
      <FeaturesGrid />
      <HowItWorks />
      <TopTen />
      <Pricing />
      <Testimonials />
      <FAQ />
    </>
  )
}
