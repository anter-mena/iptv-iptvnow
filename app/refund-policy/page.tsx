import { PageHero } from "@/components/ui/page-hero"
import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"
import Link from "next/link"
import { AlertTriangle, Clock, Lightbulb } from "lucide-react"

export const metadata: Metadata = buildMetadata({
  title: "Refund Policy",
  description:
    "Read our detailed Refund Policy to understand the conditions under which refunds are issued for IPTV NOW streaming services and subscriptions.",
  path: "/refund-policy",
})

export default function RefundPolicyPage() {
  return (
    <div className="flex-1 bg-background">
      <PageHero
        title="Refund Policy"
        description="IPTV Streaming Service — Transparent, Fair & Clearly Defined"
        className="border-b"
      />

      <section className="bg-background py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 border-b border-border pb-8 text-center md:text-left">
            <p className="text-[10px] font-bold uppercase tracking-widest text-primary">
              Last Updated: May 30, 2026 &nbsp;|&nbsp; Effective Date: May 30, 2026
            </p>
          </div>

          <div className="space-y-12">
            {/* Intro */}
            <div>
              <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                This Refund Policy outlines the conditions under which our IPTV streaming service issues refunds, the circumstances that do not qualify for a refund, and the process for submitting a refund request. We are committed to being transparent and fair with every subscriber.
              </p>
              <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                By purchasing a subscription to our IPTV service, you acknowledge that you have read and agree to this Refund Policy, which forms part of our <Link href="/terms-of-use" className="font-bold text-primary hover:underline">Terms of Use</Link>. We strongly encourage all users to take advantage of our free trial before committing to a paid subscription.
              </p>
            </div>

            {/* Section 1 */}
            <div>
              <div className="mb-4 flex flex-col md:flex-row md:items-center space-y-3 md:space-y-0 md:space-x-4">
                <span className="liquid-glass flex h-8 min-w-[78px] items-center justify-center rounded-full px-3 text-[10px] font-semibold tracking-widest whitespace-nowrap text-white">
                  POINT 01
                </span>
                <h2 className="text-sm font-bold uppercase tracking-tight text-foreground">
                  Free Trial — Try Before You Subscribe
                </h2>
              </div>
              <p className="mb-4 text-sm font-bold leading-relaxed text-foreground uppercase tracking-wide">
                We offer a free trial so you can fully evaluate our IPTV service at zero risk.
              </p>
              <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                Before purchasing any paid subscription plan, we strongly recommend that all new users activate our free trial. Our free trial gives you full access to the platform so you can:
              </p>
              <ul className="mb-8 space-y-3 pl-2">
                {[
                  "Test streaming quality and channel availability in your region",
                  "Verify compatibility with your specific device, operating system, and media player",
                  "Evaluate your internet connection's performance for smooth HD and 4K streaming",
                  "Explore our channel lineup, VOD library, and platform features"
                ].map((item, i) => (
                  <li key={i} className="flex items-start space-x-3">
                    <div className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <span className="text-sm leading-relaxed text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>

              <div>
                <p className="text-xs leading-5 font-medium text-foreground/80">
                  <AlertTriangle className="mr-1 inline size-3.5 align-[-2px] text-primary" aria-hidden />
                  <strong className="font-bold text-primary">Important Notice:</strong>{" "}
                  By activating a paid subscription after a free trial, you confirm that the service is compatible with your device and meets your streaming requirements. Refund requests citing device incompatibility or connection issues after a trial period will not be eligible.
                </p>
              </div>
            </div>

            {/* Section 2 */}
            <div>
              <div className="mb-4 flex flex-col md:flex-row md:items-center space-y-3 md:space-y-0 md:space-x-4">
                <span className="liquid-glass flex h-8 min-w-[78px] items-center justify-center rounded-full px-3 text-[10px] font-semibold tracking-widest whitespace-nowrap text-white">
                  POINT 02
                </span>
                <h2 className="text-sm font-bold uppercase tracking-tight text-foreground">
                  General Refund Policy
                </h2>
              </div>
              <p className="mb-4 text-sm font-bold leading-relaxed text-foreground uppercase tracking-wide">
                All sales are final once your subscription is activated and account credentials have been delivered.
              </p>
              <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                Our IPTV service is a digital product that is delivered instantly upon payment confirmation. Due to the nature of digital services, all subscription purchases are non-refundable once activated, except in the specific circumstances outlined in Section 3 below.
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground">
                This policy is consistent with standard digital goods and streaming service practices, and is fully compliant with applicable consumer protection regulations.
              </p>
            </div>

            {/* Section 3 */}
            <div>
              <div className="mb-4 flex flex-col md:flex-row md:items-center space-y-3 md:space-y-0 md:space-x-4">
                <span className="liquid-glass flex h-8 min-w-[78px] items-center justify-center rounded-full px-3 text-[10px] font-semibold tracking-widest whitespace-nowrap text-white">
                  POINT 03
                </span>
                <h2 className="text-sm font-bold uppercase tracking-tight text-foreground">
                  Eligible Refund Circumstances
                </h2>
              </div>
              <p className="mb-4 text-sm font-bold leading-relaxed text-foreground uppercase tracking-wide">
                Refunds are issued only when the fault lies on our side — not due to your device, network, or external factors.
              </p>
              <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                A refund will be considered and processed in the following situations:
              </p>
              <ul className="mb-8 space-y-3 pl-2">
                {[
                  "Account not delivered — your subscription was paid for but login credentials or activation details were never received within 24 hours of payment",
                  "Service completely non-functional at activation — the service fails to start or connect on any device from the moment of purchase, and our technical support team is unable to resolve the issue within a reasonable timeframe",
                  "Duplicate charge — you were charged more than once for the same subscription due to a payment processing error",
                  "Unauthorized transaction — a verified fraudulent charge was made on your payment method without your authorization (subject to identity verification)"
                ].map((item, i) => (
                  <li key={i} className="flex items-start space-x-3">
                    <div className="mt-1 flex h-3 w-3 shrink-0 items-center justify-center rounded-full bg-primary/20 text-[8px] font-bold text-primary">✓</div>
                    <span className="text-sm leading-relaxed text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>

              <div>
                <p className="text-xs leading-5 font-medium text-amber-200">
                  <Clock className="mr-1 inline size-3.5 align-[-2px] text-amber-300" aria-hidden />
                  <strong className="font-bold text-amber-300">Time Limit:</strong>{" "}
                  Refund requests must be submitted within 7 days of the original purchase date. Requests submitted after this window will not be eligible for consideration.
                </p>
              </div>
            </div>

            {/* Section 4 */}
            <div>
              <div className="mb-4 flex flex-col md:flex-row md:items-center space-y-3 md:space-y-0 md:space-x-4">
                <span className="liquid-glass flex h-8 min-w-[78px] items-center justify-center rounded-full px-3 text-[10px] font-semibold tracking-widest whitespace-nowrap text-white">
                  POINT 04
                </span>
                <h2 className="text-sm font-bold uppercase tracking-tight text-foreground">
                  Non-Refundable Circumstances
                </h2>
              </div>
              <p className="mb-4 text-sm font-bold leading-relaxed text-foreground uppercase tracking-wide">
                The following situations do not qualify for a refund under any circumstances.
              </p>
              <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                We are transparent about the limitations of our service. The following are beyond our direct control and therefore do not constitute grounds for a refund:
              </p>
              <ul className="mb-8 space-y-3 pl-2">
                {[
                  "Internet connection issues — slow speeds, instability, or data caps imposed by your internet service provider",
                  "Device incompatibility — your device, smart TV, set-top box, or media player is not compatible with our service after a free trial was available",
                  "Player or app incompatibility — third-party IPTV players or applications that do not support our streaming format",
                  "Channel changes or removal — individual channels may be added, removed, or temporarily unavailable due to licensing changes, which are outside our control",
                  "Subscription sharing violations — accounts suspended due to breaching our single-user or single-device policy",
                  "Change of mind — you simply decided you no longer want the service after activation",
                  "Partial use — you did not use the service during your subscription period",
                  "Geographic or legal restrictions — inability to access certain content due to your location or local regulations",
                  "Force majeure events — service disruptions caused by events beyond our reasonable control (e.g., internet infrastructure failures, government-imposed restrictions)"
                ].map((item, i) => (
                  <li key={i} className="flex items-start space-x-3">
                    <div className="mt-1 flex h-3 w-3 shrink-0 items-center justify-center rounded-full bg-primary/15 text-[8px] font-bold text-primary">X</div>
                    <span className="text-sm leading-relaxed text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>

              <div>
                <p className="text-xs leading-5 font-medium text-foreground/80">
                  <Lightbulb className="mr-1 inline size-3.5 align-[-2px] text-foreground" aria-hidden />
                  <strong className="font-bold text-foreground">Support Tip:</strong>{" "}
                  If you are experiencing channel or quality issues, please contact our support team before requesting a refund. Many issues can be resolved quickly through troubleshooting.
                </p>
              </div>
            </div>

            {/* Section 5 */}
            <div>
              <div className="mb-4 flex flex-col md:flex-row md:items-center space-y-3 md:space-y-0 md:space-x-4">
                <span className="liquid-glass flex h-8 min-w-[78px] items-center justify-center rounded-full px-3 text-[10px] font-semibold tracking-widest whitespace-nowrap text-white">
                  POINT 05
                </span>
                <h2 className="text-sm font-bold uppercase tracking-tight text-foreground">
                  How to Request a Refund
                </h2>
              </div>
              <p className="mb-4 text-sm font-bold leading-relaxed text-foreground uppercase tracking-wide">
                Our refund process is straightforward. Follow the steps below to submit your request.
              </p>
              <p className="mb-8 text-sm leading-relaxed text-muted-foreground">
                If you believe your situation qualifies for a refund under Section 3 of this policy, please follow these steps:
              </p>

              <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-muted">
                {[
                  "Contact our support team at support@iptvnow.ca within 7 days of your purchase date.",
                  "Include your full name, registered email address, order/transaction ID, and a clear description of the issue.",
                  "Where applicable, attach screenshots or error messages that support your claim.",
                  "Our team will review your request and respond within 2 business days with a decision or a request for further information.",
                  "If approved, refunds are processed within 5-10 business days to your original payment method."
                ].map((step, i) => (
                  <div key={i} className="flex items-center space-x-4 bg-background p-5">
                    <span className="flex h-6 px-2 shrink-0 items-center justify-center rounded bg-primary/10 text-[10px] font-black text-primary uppercase tracking-widest">
                      STEP {i + 1}
                    </span>
                    <p className="text-sm text-muted-foreground font-medium">{step}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Section 6 */}
            <div>
              <div className="mb-4 flex flex-col md:flex-row md:items-center space-y-3 md:space-y-0 md:space-x-4">
                <span className="liquid-glass flex h-8 min-w-[78px] items-center justify-center rounded-full px-3 text-[10px] font-semibold tracking-widest whitespace-nowrap text-white">
                  POINT 06
                </span>
                <h2 className="text-sm font-bold uppercase tracking-tight text-foreground">
                  Chargebacks & Dispute Policy
                </h2>
              </div>
              <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                We ask that you contact our support team before initiating a chargeback with your bank or payment provider. Filing a chargeback without first attempting resolution through our support team may result in permanent account suspension and may be reported to our payment processor.
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground">
                We take fraudulent chargeback claims seriously. Any abuse of the chargeback process may result in legal action to recover costs and damages. We maintain detailed transaction records to respond to all payment disputes.
              </p>
            </div>

            {/* Section 7 */}
            <div>
              <div className="mb-4 flex flex-col md:flex-row md:items-center space-y-3 md:space-y-0 md:space-x-4">
                <span className="liquid-glass flex h-8 min-w-[78px] items-center justify-center rounded-full px-3 text-[10px] font-semibold tracking-widest whitespace-nowrap text-white">
                  POINT 07
                </span>
                <h2 className="text-sm font-bold uppercase tracking-tight text-foreground">
                  Subscription Cancellation
                </h2>
              </div>
              <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                You may cancel your subscription at any time through your account dashboard or by contacting our support team. Cancellation will prevent future billing at the next renewal date, but does not entitle you to a refund for the current active subscription period.
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Your access to the Service will continue until the end of your current paid billing cycle. After cancellation, your account data will be retained in accordance with our <Link href="/privacy-policy" className="font-bold text-primary hover:underline">Privacy Policy</Link>.
              </p>
            </div>

            {/* Section 8 */}
            <div>
              <div className="mb-4 flex flex-col md:flex-row md:items-center space-y-3 md:space-y-0 md:space-x-4">
                <span className="liquid-glass flex h-8 min-w-[78px] items-center justify-center rounded-full px-3 text-[10px] font-semibold tracking-widest whitespace-nowrap text-white">
                  POINT 08
                </span>
                <h2 className="text-sm font-bold uppercase tracking-tight text-foreground">
                  Consumer Rights
                </h2>
              </div>
              <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                Nothing in this Refund Policy is intended to limit or exclude your statutory rights under applicable consumer protection law. Depending on your jurisdiction, you may have additional rights beyond those described in this policy.
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground">
                If you are a consumer in the European Union, you may have a statutory 14-day right of withdrawal for digital services, provided the service has not yet been performed. By activating your subscription and accessing the Service, you expressly request immediate access and acknowledge that your right of withdrawal may thereby be forfeited, as permitted under EU consumer law.
              </p>
            </div>

            {/* Section 9 */}
            <div>
              <div className="mb-4 flex flex-col md:flex-row md:items-center space-y-3 md:space-y-0 md:space-x-4">
                <span className="liquid-glass flex h-8 min-w-[78px] items-center justify-center rounded-full px-3 text-[10px] font-semibold tracking-widest whitespace-nowrap text-white">
                  POINT 09
                </span>
                <h2 className="text-sm font-bold uppercase tracking-tight text-foreground">
                  Updates to This Refund Policy
                </h2>
              </div>
              <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                We may update this Refund Policy from time to time to reflect changes in our practices or applicable law. When changes are made, we will update the effective date at the top of this page and notify registered users via email at least 14 days before the changes take effect.
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Your continued use of our IPTV service after any changes to this policy constitutes your acceptance of the updated terms.
              </p>
            </div>

            {/* Section 10 */}
            <div>
              <div className="mb-6 flex flex-col md:flex-row md:items-center space-y-3 md:space-y-0 md:space-x-4">
                <span className="liquid-glass flex h-8 min-w-[78px] items-center justify-center rounded-full px-3 text-[10px] font-semibold tracking-widest whitespace-nowrap text-white">
                  POINT 10
                </span>
                <h2 className="text-sm font-bold uppercase tracking-tight text-foreground">
                  Contact Us
                </h2>
              </div>
              <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
                For any questions about this Refund Policy or to submit a refund request, please contact us:
              </p>

              <div className="liquid-glass mx-auto w-fit max-w-full space-y-4 rounded-lg p-5">
                <div className="flex flex-col sm:flex-row sm:items-center">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-foreground sm:w-56">Support & Refund Requests:</span>
                  <a href="mailto:support@iptvnow.ca" className="text-sm font-bold text-primary hover:underline">support@iptvnow.ca</a>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-foreground sm:w-56">Billing Queries:</span>
                  <a href="mailto:support@iptvnow.ca" className="text-sm font-bold text-primary hover:underline">support@iptvnow.ca</a>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-foreground sm:w-56">Website:</span>
                  <Link href="/" className="text-sm font-bold text-primary hover:underline">iptvnow.ca</Link>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-foreground sm:w-56">Response Time:</span>
                  <span className="text-sm text-muted-foreground">Within 2 business days</span>
                </div>
              </div>

              <p className="mt-10 text-[10px] font-bold uppercase tracking-widest text-muted-foreground text-center pb-8">
                This Refund Policy was last reviewed and updated on May 30, 2026. <br className="hidden sm:block" />
                We are committed to fair, transparent, and honest billing practices.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
