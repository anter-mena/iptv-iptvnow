import Link from "next/link"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

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
      "Yes — we offer a free 24-hour trial so you can test the service on your devices before committing. Visit our Free Trial page or contact us on WhatsApp to get yours activated instantly.",
  },
  {
    question: "Do plans include Canadian channels and sports?",
    answer:
      "Yes. Every plan includes all major Canadian channels (CBC, CTV, Sportsnet, TSN, RDS, and more), NHL, CFL, NBA, MLB, and international sports — fully covered with no extra cost.",
  },
]

export function FAQ() {
  return (
    <section id="faq">
      <div className="px-6 py-16 text-center lg:px-8">
        <h2 className="text-2xl font-medium tracking-tight md:text-3xl">
          Frequently Asked Questions
        </h2>
        <p className="mx-auto mt-4 max-w-xl font-medium text-muted-foreground">
          Get answers to the most common questions about our IPTV service.
          Cannot find what you are looking for? Contact our 24/7 support team.
        </p>
      </div>

      <div className="border-t px-6 py-20 lg:px-8">
        <Accordion className="mx-auto max-w-3xl">
          {FAQS.map((faq) => (
            <AccordionItem key={faq.question}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-16 text-center">
          <p className="text-sm font-semibold">Still have questions?</p>
          {/* Liquid glass: highlight + illumination insets over a blurred,
              saturated backdrop, with an outer shadow for separation. */}
          <Link
            href="/contact"
            className="mt-4 inline-flex h-9 items-center justify-center rounded-full border border-white/40 bg-white/15 px-5 text-[0.8rem] font-semibold shadow-[inset_0_1px_0_rgba(255,255,255,0.75),inset_0_-1px_0_rgba(255,255,255,0.2),0_8px_24px_rgba(0,0,0,0.10)] backdrop-blur-md backdrop-saturate-150 transition-colors hover:bg-white/25"
          >
            Contact Support
          </Link>
        </div>
      </div>
    </section>
  )
}
