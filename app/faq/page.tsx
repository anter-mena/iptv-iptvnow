import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"

import { FaqAccordion } from "@/components/ui/faq-accordion"
import { PageHero } from "@/components/ui/page-hero"

const FAQS = [
  {
    question: "Can I use my subscription on multiple devices at once?",
    answer:
      "Yes — multi-device plans let you stream simultaneously on 2, 3, or 4 screens at the same time. Use the device toggle on the pricing table to select the right option for your household.",
  },
  {
    question: "How does the 7-day guarantee work exactly?",
    answer:
      "If our service fails to work correctly on your end within the first 7 days — technical issues, connection problems, or anything on our side — we'll fix it or refund you in full. Contact us via email or WhatsApp to open a request.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept Interac e-Transfer for Canadian customers, cryptocurrency, and other methods. Contact us on WhatsApp before purchasing to confirm your preferred payment option.",
  },
  {
    question: "Can I upgrade my plan after purchasing?",
    answer:
      "Absolutely. You can upgrade to a longer duration or add more devices at any time. Contact our support team and we'll adjust your subscription accordingly.",
  },
  {
    question: "Is there a free trial available before I buy?",
    answer:
      "Yes — we offer a free 24-hour trial so you can test the service on your devices before committing. Visit our pricing section or contact us on WhatsApp to get yours activated.",
  },
  {
    question: "Do plans include Canadian channels and sports?",
    answer:
      "Yes. Every plan includes all major Canadian channels (CBC, CTV, Sportsnet, TSN, RDS, and more), NHL, CFL, NBA, MLB, and international sports — fully covered with no extra cost.",
  },
]

export const metadata: Metadata = buildMetadata({
  title: "IPTV FAQ: Plans, Devices & Payments",
  description:
    "Answers to common questions about IPTV NOW plans, supported devices, payments, connections and Canadian channels.",
  path: "/faq",
})

export default function FaqPage() {
  return (
    <div className="flex-1 bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: FAQS.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          }),
        }}
      />

      <PageHero
        subtitle="Knowledge Base"
        title="FAQ"
        description="Frequently asked questions about our IPTV service."
        className="border-b"
      />

      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <FaqAccordion items={FAQS} />
        </div>
      </section>
    </div>
  )
}
