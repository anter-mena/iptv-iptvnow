import { Hero } from "@/components/landing/Hero"
import { TrustedBy } from "@/components/landing/TrustedBy"
import { HowItWorks } from "@/components/landing/HowItWorks"
import { TopTen } from "@/components/landing/TopTen"
import { FeaturesGrid } from "@/components/landing/FeaturesGrid"
import { Pricing } from "@/components/landing/Pricing"
import { Testimonials } from "@/components/landing/Testimonials"
import { FAQ } from "@/components/landing/FAQ"

export default function Home() {
  return (
    <>
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
