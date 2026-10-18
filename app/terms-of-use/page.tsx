import { PageHero } from "@/components/ui/page-hero"
import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"
import Link from "next/link"
import { AlertTriangle } from "lucide-react"

export const metadata: Metadata = buildMetadata({
  title: "Terms of Use",
  description:
    "Review the IPTV NOW Terms of Use. Discover the rules, usage guidelines, and legal agreements for accessing our premium live TV streaming platform.",
  path: "/terms-of-use",
})

export default function TermsPage() {
  return (
    <div className="flex-1 bg-background">
      <PageHero
        title="Terms of Use"
        description="IPTV Streaming Service — Rules, Rights & Responsibilities"
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
                Welcome to our IPTV streaming service (referred to as "the Service" or "the Platform"). These Terms of Use ("Terms") constitute a legally binding agreement between you ("User," "you," or "your") and our company ("we," "us," or "our") governing your access to and use of our live TV, video-on-demand (VOD), and on-demand IPTV streaming services.
              </p>
              <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                By creating an account, subscribing, or using any part of our Service, you acknowledge that you have read, understood, and agree to be bound by these Terms and our <Link href="/privacy-policy" className="font-bold text-primary hover:underline">Privacy Policy</Link>. If you do not agree, you must immediately discontinue use of the Platform.
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground">
                We reserve the right to update these Terms at any time. Changes take effect immediately upon posting. Continued use of the Service after any update constitutes your acceptance of the revised Terms.
              </p>
            </div>

            {/* Section 1 */}
            <div>
              <div className="mb-4 flex flex-col md:flex-row md:items-center space-y-3 md:space-y-0 md:space-x-4">
                <span className="liquid-glass flex h-8 min-w-[78px] items-center justify-center rounded-full px-3 text-[10px] font-semibold tracking-widest whitespace-nowrap text-white">
                  POINT 01
                </span>
                <h2 className="text-sm font-bold uppercase tracking-tight text-foreground">
                  Eligibility & Age Requirement
                </h2>
              </div>
              <p className="mb-4 text-sm font-bold leading-relaxed text-foreground uppercase tracking-wide">
                You must meet these minimum requirements to access our IPTV platform.
              </p>
              <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                Our IPTV streaming service is intended exclusively for adults. You must be at least 18 years of age to register, subscribe, or use the Service in any capacity. By creating an account, you represent and warrant that:
              </p>
              <ul className="mb-6 space-y-3 pl-2">
                {[
                  "You are 18 years of age or older",
                  "You have the legal capacity to enter into a binding agreement",
                  "Your use of the Service will comply with all applicable local, national, and international laws and regulations",
                  "All registration information you provide is accurate, complete, and current"
                ].map((item, i) => (
                  <li key={i} className="flex items-start space-x-3">
                    <div className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <span className="text-sm leading-relaxed text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm leading-relaxed text-muted-foreground font-medium">
                We reserve the right to terminate any account where we have reason to believe the eligibility requirements have not been met, without notice or refund.
              </p>
            </div>

            {/* Section 2 */}
            <div>
              <div className="mb-4 flex flex-col md:flex-row md:items-center space-y-3 md:space-y-0 md:space-x-4">
                <span className="liquid-glass flex h-8 min-w-[78px] items-center justify-center rounded-full px-3 text-[10px] font-semibold tracking-widest whitespace-nowrap text-white">
                  POINT 02
                </span>
                <h2 className="text-sm font-bold uppercase tracking-tight text-foreground">
                  Permitted Use & General Conduct
                </h2>
              </div>
              <p className="mb-4 text-sm font-bold leading-relaxed text-foreground uppercase tracking-wide">
                Our IPTV service is provided for personal, non-commercial, lawful use only.
              </p>
              <p className="mb-8 text-sm leading-relaxed text-muted-foreground">
                You agree to use the Platform solely for your own personal, non-commercial enjoyment of licensed streaming content. You must use our Service responsibly and in compliance with all applicable laws.
              </p>

              <h3 className="mb-3 text-[11px] font-bold uppercase tracking-widest text-foreground">
                2.1 Acceptable Use
              </h3>
              <ul className="mb-8 space-y-3 pl-2">
                {[
                  "Streaming content for personal viewing on your authorized device(s)",
                  "Using the Platform's features as intended and described in our Help Center",
                  "Keeping your account credentials confidential and secure",
                  "Reporting any unauthorized access or security vulnerabilities to our support team promptly"
                ].map((item, i) => (
                  <li key={i} className="flex items-start space-x-3">
                    <div className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <span className="text-sm leading-relaxed text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>

              <h3 className="mb-3 text-[11px] font-bold uppercase tracking-widest text-primary">
                2.2 Prohibited Activities
              </h3>
              <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                The following actions are strictly forbidden and will result in immediate account suspension or termination:
              </p>
              <ul className="mb-6 space-y-3 pl-2">
                {[
                  "Re-streaming, redistributing, broadcasting, or retransmitting any content from our platform without express written authorization",
                  "Using bots, scrapers, scripts, crawlers, or any automated tools to access, interact with, or extract data from the Platform",
                  "Circumventing, disabling, or tampering with any security, geo-restriction, or digital rights management (DRM) systems",
                  "Sharing your subscription credentials with any other person or using a single account on multiple simultaneous streams beyond your plan's limit",
                  "Uploading, transmitting, or distributing any malicious software, viruses, or harmful code",
                  "Attempting to gain unauthorized access to our servers, databases, or network infrastructure",
                  "Engaging in any activity that disrupts, degrades, or overburdens the Platform's performance",
                  "Using the Service to harass, defame, threaten, or harm any individual or organization",
                  "Reproducing, copying, or scraping content from the Platform for commercial or unauthorized purposes"
                ].map((item, i) => (
                  <li key={i} className="flex items-start space-x-3">
                    <div className="mt-1 flex h-3 w-3 shrink-0 items-center justify-center rounded-full bg-primary/15 text-[8px] font-bold text-primary">X</div>
                    <span className="text-sm leading-relaxed text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm leading-relaxed text-foreground font-medium">
                Violations of these prohibitions may result in legal action in addition to account suspension or termination.
              </p>
            </div>

            {/* Section 3 */}
            <div>
              <div className="mb-4 flex flex-col md:flex-row md:items-center space-y-3 md:space-y-0 md:space-x-4">
                <span className="liquid-glass flex h-8 min-w-[78px] items-center justify-center rounded-full px-3 text-[10px] font-semibold tracking-widest whitespace-nowrap text-white">
                  POINT 03
                </span>
                <h2 className="text-sm font-bold uppercase tracking-tight text-foreground">
                  Subscription, Payments & Refund Policy
                </h2>
              </div>
              <p className="mb-8 text-sm font-bold leading-relaxed text-foreground uppercase tracking-wide">
                All fees are clearly displayed before purchase. Please review your subscription before confirming payment.
              </p>

              <h3 className="mb-3 text-[11px] font-bold uppercase tracking-widest text-foreground">
                3.1 Subscription Plans
              </h3>
              <p className="mb-8 text-sm leading-relaxed text-muted-foreground">
                Access to our IPTV Service requires an active paid subscription. Subscription plans, pricing, and included features are described on our website and may be updated from time to time. Pricing changes will be communicated at least 14 days in advance for existing subscribers.
              </p>

              <h3 className="mb-3 text-[11px] font-bold uppercase tracking-widest text-foreground">
                3.2 Payment Terms
              </h3>
              <ul className="mb-8 space-y-3 pl-2">
                {[
                  "All subscription fees are billed in advance on a recurring basis (monthly or annually, depending on your plan)",
                  "Payments are processed securely through our PCI-DSS-compliant payment partners",
                  "You authorize us to charge your selected payment method at each billing cycle",
                  "If a payment fails, your access may be suspended until the outstanding balance is resolved",
                  "Prices are displayed inclusive of any applicable taxes unless stated otherwise"
                ].map((item, i) => (
                  <li key={i} className="flex items-start space-x-3">
                    <div className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <span className="text-sm leading-relaxed text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>

              <h3 className="mb-3 text-[11px] font-bold uppercase tracking-widest text-foreground">
                3.3 Refund Policy
              </h3>
              <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                All subscription payments and used credits are final and non-refundable, except where required by applicable consumer protection law. Once a subscription period has commenced, no partial refunds will be issued for unused time. We strongly encourage you to review your plan details and take advantage of any free trial periods before committing to a paid subscription.
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground">
                If you believe a charge was made in error, please contact our billing team within 7 days of the charge at <a href="mailto:support@iptvnow.ca" className="font-bold text-primary hover:underline">support@iptvnow.ca</a>.
              </p>
            </div>

            {/* Section 4 */}
            <div>
              <div className="mb-4 flex flex-col md:flex-row md:items-center space-y-3 md:space-y-0 md:space-x-4">
                <span className="liquid-glass flex h-8 min-w-[78px] items-center justify-center rounded-full px-3 text-[10px] font-semibold tracking-widest whitespace-nowrap text-white">
                  POINT 04
                </span>
                <h2 className="text-sm font-bold uppercase tracking-tight text-foreground">
                  Subscription Sharing & Multi-Device Policy
                </h2>
              </div>
              <p className="mb-4 text-sm font-bold leading-relaxed text-foreground uppercase tracking-wide">
                Each subscription is issued to a single user. Sharing is not permitted.
              </p>
              <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                Your subscription is for your personal use only and is non-transferable. The following rules apply to all subscribers:
              </p>
              <ul className="mb-6 space-y-3 pl-2">
                {[
                  "Each subscription permits streaming on the number of simultaneous devices specified in your plan (typically one device at a time on standard plans)",
                  "Sharing your login credentials or streaming simultaneously on unauthorized devices is a material breach of these Terms",
                  "If you wish to stream on multiple devices simultaneously, you must purchase the appropriate multi-device plan",
                  "We employ technical monitoring to detect account sharing and simultaneous unauthorized streams"
                ].map((item, i) => (
                  <li key={i} className="flex items-start space-x-3">
                    <div className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <span className="text-sm leading-relaxed text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <div>
                <p className="text-xs leading-5 font-medium text-foreground">
                  <AlertTriangle className="mr-1 inline size-3.5 align-[-2px] text-primary" aria-hidden />
                  <strong className="font-bold text-primary">Strict Policy:</strong>{" "}
                  Violation of this policy will result in account suspension without refund. Repeated violations may lead to permanent account termination and legal action.
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
                  Streaming Quality & Service Performance
                </h2>
              </div>
              <p className="mb-4 text-sm font-bold leading-relaxed text-foreground uppercase tracking-wide">
                We are committed to delivering high-quality streams, but performance depends on factors outside our direct control.
              </p>
              <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                We continuously invest in our server infrastructure to provide the best possible IPTV streaming experience. However, the following external factors may affect your streaming quality:
              </p>
              <ul className="mb-6 space-y-3 pl-2">
                {[
                  "Your internet connection speed and stability — a minimum of 10 Mbps is recommended for HD streaming; 25 Mbps for 4K",
                  "The hardware capabilities and age of your streaming device",
                  "Network congestion caused by multiple devices connected to the same router",
                  "Your geographic location and the distance to our nearest server node",
                  "Temporary server maintenance or scheduled upgrades (announced in advance wherever possible)"
                ].map((item, i) => (
                  <li key={i} className="flex items-start space-x-3">
                    <div className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <span className="text-sm leading-relaxed text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm leading-relaxed text-muted-foreground">
                We strive to maintain 99.5% uptime but do not guarantee uninterrupted, error-free service. Service interruptions caused by factors outside our control do not entitle users to refunds or compensation unless required by applicable law.
              </p>
            </div>

            {/* Section 6 */}
            <div>
              <div className="mb-4 flex flex-col md:flex-row md:items-center space-y-3 md:space-y-0 md:space-x-4">
                <span className="liquid-glass flex h-8 min-w-[78px] items-center justify-center rounded-full px-3 text-[10px] font-semibold tracking-widest whitespace-nowrap text-white">
                  POINT 06
                </span>
                <h2 className="text-sm font-bold uppercase tracking-tight text-foreground">
                  VPN & Proxy Usage
                </h2>
              </div>
              <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                The use of a Virtual Private Network (VPN) or proxy server to access our IPTV Service is permitted for privacy and security purposes. However, the following restrictions apply:
              </p>
              <ul className="space-y-3 pl-2">
                {[
                  "VPNs may not be used to circumvent geographic content restrictions or gain access to content not licensed for your region",
                  "VPN usage that violates these Terms, causes service disruption, or enables fraudulent activity may result in account suspension",
                  "We are not responsible for any degradation in streaming performance caused by VPN usage",
                  "If our systems flag your account due to suspicious VPN activity, you may be asked to verify your identity"
                ].map((item, i) => (
                  <li key={i} className="flex items-start space-x-3">
                    <div className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <span className="text-sm leading-relaxed text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Section 7 */}
            <div>
              <div className="mb-4 flex flex-col md:flex-row md:items-center space-y-3 md:space-y-0 md:space-x-4">
                <span className="liquid-glass flex h-8 min-w-[78px] items-center justify-center rounded-full px-3 text-[10px] font-semibold tracking-widest whitespace-nowrap text-white">
                  POINT 07
                </span>
                <h2 className="text-sm font-bold uppercase tracking-tight text-foreground">
                  Device Compatibility & System Requirements
                </h2>
              </div>
              <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                Our IPTV Service is designed to work across a wide range of devices including Smart TVs, Android/iOS devices, Amazon Firestick, MAG boxes, and web browsers. Before subscribing, please verify that your device meets our minimum system requirements by consulting our Help Center.
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground">
                We do not guarantee full functionality on all devices, operating systems, or browser versions. Device compatibility may change as we update the Platform. We are not liable for any service limitations arising from unsupported or outdated devices.
              </p>
            </div>

            {/* Section 8 */}
            <div>
              <div className="mb-4 flex flex-col md:flex-row md:items-center space-y-3 md:space-y-0 md:space-x-4">
                <span className="liquid-glass flex h-8 min-w-[78px] items-center justify-center rounded-full px-3 text-[10px] font-semibold tracking-widest whitespace-nowrap text-white">
                  POINT 08
                </span>
                <h2 className="text-sm font-bold uppercase tracking-tight text-foreground">
                  Account Security & Accuracy of Information
                </h2>
              </div>
              <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                You are solely responsible for maintaining the confidentiality of your account credentials and for all activity that occurs under your account. To protect your account:
              </p>
              <ul className="mb-6 space-y-3 pl-2">
                {[
                  "Use a strong, unique password and enable two-factor authentication (2FA) where available",
                  "Never share your username or password with any other person",
                  "Log out of shared or public devices after each session",
                  "Notify us immediately at support@iptvnow.ca if you suspect unauthorized access"
                ].map((item, i) => (
                  <li key={i} className="flex items-start space-x-3">
                    <div className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <span className="text-sm leading-relaxed text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm leading-relaxed text-muted-foreground">
                All information you provide to us must be accurate, complete, and kept up to date. We will never contact you to request your password. Any unauthorized account activity is your responsibility unless you have notified us promptly.
              </p>
            </div>

            {/* Section 9 */}
            <div>
              <div className="mb-4 flex flex-col md:flex-row md:items-center space-y-3 md:space-y-0 md:space-x-4">
                <span className="liquid-glass flex h-8 min-w-[78px] items-center justify-center rounded-full px-3 text-[10px] font-semibold tracking-widest whitespace-nowrap text-white">
                  POINT 09
                </span>
                <h2 className="text-sm font-bold uppercase tracking-tight text-foreground">
                  Third-Party Services & External Links
                </h2>
              </div>
              <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                Our Platform may integrate with or display links to third-party services, payment processors, or websites. These third-party services are governed by their own terms and privacy policies, which we encourage you to review independently.
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Any transactions you complete through third-party vendors accessible via our Platform are solely between you and that vendor. We are not responsible for third-party content, products, pricing, or data practices. The inclusion of any third-party link does not constitute an endorsement by us.
              </p>
            </div>

            {/* Section 10 */}
            <div>
              <div className="mb-4 flex flex-col md:flex-row md:items-center space-y-3 md:space-y-0 md:space-x-4">
                <span className="liquid-glass flex h-8 min-w-[78px] items-center justify-center rounded-full px-3 text-[10px] font-semibold tracking-widest whitespace-nowrap text-white">
                  POINT 10
                </span>
                <h2 className="text-sm font-bold uppercase tracking-tight text-foreground">
                  Internet & Data Costs
                </h2>
              </div>
              <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                Streaming IPTV content consumes significant data. You are solely responsible for any internet, mobile data, or bandwidth charges incurred through your use of our Service. We recommend connecting via a Wi-Fi network to avoid unexpected data charges from your mobile carrier.
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground">
                We are not responsible for any fees, overage charges, or throttling imposed by your internet or mobile service provider as a result of using our Platform.
              </p>
            </div>

            {/* Section 11 */}
            <div>
              <div className="mb-4 flex flex-col md:flex-row md:items-center space-y-3 md:space-y-0 md:space-x-4">
                <span className="liquid-glass flex h-8 min-w-[78px] items-center justify-center rounded-full px-3 text-[10px] font-semibold tracking-widest whitespace-nowrap text-white">
                  POINT 11
                </span>
                <h2 className="text-sm font-bold uppercase tracking-tight text-foreground">
                  Service Downtime & Scheduled Maintenance
                </h2>
              </div>
              <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                We work hard to keep our IPTV platform available 24/7. However, the following situations may result in temporary service interruptions:
              </p>
              <ul className="mb-6 space-y-3 pl-2">
                {[
                  "Scheduled maintenance — we will endeavor to provide at least 24 hours' advance notice and schedule during low-traffic periods",
                  "Emergency server maintenance — required to protect platform integrity or security",
                  "Unexpected technical outages — caused by hardware failures, DDoS attacks, or upstream provider issues",
                  "Force majeure events — including natural disasters, governmental actions, or internet infrastructure failures beyond our control"
                ].map((item, i) => (
                  <li key={i} className="flex items-start space-x-3">
                    <div className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <span className="text-sm leading-relaxed text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm leading-relaxed text-muted-foreground">
                We will communicate planned downtime through our website, email notifications, and social media channels where possible. We are not liable for losses, inconveniences, or damages resulting from service interruptions.
              </p>
            </div>

            {/* Section 12 */}
            <div>
              <div className="mb-4 flex flex-col md:flex-row md:items-center space-y-3 md:space-y-0 md:space-x-4">
                <span className="liquid-glass flex h-8 min-w-[78px] items-center justify-center rounded-full px-3 text-[10px] font-semibold tracking-widest whitespace-nowrap text-white">
                  POINT 12
                </span>
                <h2 className="text-sm font-bold uppercase tracking-tight text-foreground">
                  Intellectual Property & Copyright
                </h2>
              </div>
              <p className="mb-4 text-sm font-bold leading-relaxed text-foreground uppercase tracking-wide">
                All content and branding on this Platform is protected by copyright and trademark law.
              </p>
              <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
                All content available through our IPTV Service — including but not limited to live channels, VOD content, graphics, logos, software, and documentation — is protected by applicable copyright, trademark, and intellectual property laws.
              </p>
              <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                The following actions are strictly prohibited without our prior written consent:
              </p>
              <ul className="mb-6 space-y-3 pl-2">
                {[
                  "Copying, downloading, recording, or screen-capturing any streamed content",
                  "Reproducing, modifying, or creating derivative works based on our Platform's content or design",
                  "Using our logos, trademarks, brand names, or visual assets for any commercial or public purpose",
                  "Reverse engineering, decompiling, or disassembling any software component of our Service"
                ].map((item, i) => (
                  <li key={i} className="flex items-start space-x-3">
                    <div className="mt-1 flex h-3 w-3 shrink-0 items-center justify-center rounded-full bg-primary/15 text-[8px] font-bold text-primary">X</div>
                    <span className="text-sm leading-relaxed text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Unauthorized use of our intellectual property may result in legal action including claims for damages and injunctive relief. We take copyright infringement seriously and will respond to all valid DMCA takedown notices.
              </p>
            </div>

            {/* Section 13 */}
            <div>
              <div className="mb-4 flex flex-col md:flex-row md:items-center space-y-3 md:space-y-0 md:space-x-4">
                <span className="liquid-glass flex h-8 min-w-[78px] items-center justify-center rounded-full px-3 text-[10px] font-semibold tracking-widest whitespace-nowrap text-white">
                  POINT 13
                </span>
                <h2 className="text-sm font-bold uppercase tracking-tight text-foreground">
                  Content & Legal Compliance
                </h2>
              </div>
              <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                Our IPTV Service provides access to licensed streaming content. We do not host, upload, or distribute copyright-protected content without the appropriate licensing agreements. Users are solely responsible for ensuring their use of the Platform complies with all applicable laws in their jurisdiction.
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground">
                We do not endorse, promote, or facilitate illegal streaming activity. If you are uncertain about the legality of accessing certain content in your region, we recommend consulting a qualified legal professional. We disclaim all liability for any legal consequences arising from a user's unlawful use of the Service.
              </p>
            </div>

            {/* Section 14 */}
            <div>
              <div className="mb-4 flex flex-col md:flex-row md:items-center space-y-3 md:space-y-0 md:space-x-4">
                <span className="liquid-glass flex h-8 min-w-[78px] items-center justify-center rounded-full px-3 text-[10px] font-semibold tracking-widest whitespace-nowrap text-white">
                  POINT 14
                </span>
                <h2 className="text-sm font-bold uppercase tracking-tight text-foreground">
                  Account Suspension & Termination
                </h2>
              </div>
              <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                We reserve the right to restrict, suspend, or permanently terminate your account and access to the Service, with or without prior notice, if:
              </p>
              <ul className="mb-6 space-y-3 pl-2">
                {[
                  "You breach any provision of these Terms of Use",
                  "You violate any applicable law, regulation, or third-party right",
                  "You engage in fraudulent activity, chargebacks, or payment disputes made in bad faith",
                  "You attempt unauthorized access to our systems or infrastructure",
                  "Your account sharing or unauthorized usage is confirmed by our monitoring systems",
                  "We are required to do so by law or regulatory authority"
                ].map((item, i) => (
                  <li key={i} className="flex items-start space-x-3">
                    <div className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <span className="text-sm leading-relaxed text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Account termination due to a breach of these Terms is not eligible for a refund. If you believe your account was suspended in error, please contact our support team within 14 days.
              </p>
            </div>

            {/* Section 15 */}
            <div>
              <div className="mb-4 flex flex-col md:flex-row md:items-center space-y-3 md:space-y-0 md:space-x-4">
                <span className="liquid-glass flex h-8 min-w-[78px] items-center justify-center rounded-full px-3 text-[10px] font-semibold tracking-widest whitespace-nowrap text-white">
                  POINT 15
                </span>
                <h2 className="text-sm font-bold uppercase tracking-tight text-foreground">
                  Limitation of Liability
                </h2>
              </div>
              <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                To the maximum extent permitted by applicable law, we and our affiliates, officers, employees, agents, and licensors shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of data, loss of profits, service interruptions, or damages resulting from:
              </p>
              <ul className="mb-6 space-y-3 pl-2">
                {[
                  "Your use of or inability to use the Service",
                  "Any unauthorized access to or alteration of your transmissions or data",
                  "Any content obtained through the Service",
                  "Any third-party conduct or content on the Platform"
                ].map((item, i) => (
                  <li key={i} className="flex items-start space-x-3">
                    <div className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <span className="text-sm leading-relaxed text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Our total aggregate liability to you for any claims arising from these Terms or the Service shall not exceed the total amount paid by you to us in the 3 months preceding the event giving rise to the claim. Some jurisdictions do not allow the exclusion of certain warranties or limitation of liability, so some of the above limitations may not apply to you.
              </p>
            </div>

            {/* Section 16 */}
            <div>
              <div className="mb-4 flex flex-col md:flex-row md:items-center space-y-3 md:space-y-0 md:space-x-4">
                <span className="liquid-glass flex h-8 min-w-[78px] items-center justify-center rounded-full px-3 text-[10px] font-semibold tracking-widest whitespace-nowrap text-white">
                  POINT 16
                </span>
                <h2 className="text-sm font-bold uppercase tracking-tight text-foreground">
                  Disclaimer of Warranties
                </h2>
              </div>
              <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                Our IPTV Service is provided on an "as is" and "as available" basis without warranties of any kind, either express or implied. We do not warrant that the Service will be uninterrupted, error-free, secure, or free from viruses or other harmful components.
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground">
                We make no warranties regarding the accuracy, reliability, or completeness of any content accessible through the Platform. Your use of the Service is entirely at your own risk.
              </p>
            </div>

            {/* Section 17 */}
            <div>
              <div className="mb-4 flex flex-col md:flex-row md:items-center space-y-3 md:space-y-0 md:space-x-4">
                <span className="liquid-glass flex h-8 min-w-[78px] items-center justify-center rounded-full px-3 text-[10px] font-semibold tracking-widest whitespace-nowrap text-white">
                  POINT 17
                </span>
                <h2 className="text-sm font-bold uppercase tracking-tight text-foreground">
                  Privacy Policy
                </h2>
              </div>
              <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                Your use of our IPTV Service is also governed by our Privacy Policy, which is incorporated into these Terms by reference. Our Privacy Policy explains how we collect, use, store, and protect your personal data in compliance with GDPR, CCPA, and other applicable data protection laws.
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground">
                By using the Service, you consent to our data practices as described in the Privacy Policy. We strongly encourage you to read the Privacy Policy before using the Platform.
              </p>
            </div>

            {/* Section 18 */}
            <div>
              <div className="mb-4 flex flex-col md:flex-row md:items-center space-y-3 md:space-y-0 md:space-x-4">
                <span className="liquid-glass flex h-8 min-w-[78px] items-center justify-center rounded-full px-3 text-[10px] font-semibold tracking-widest whitespace-nowrap text-white">
                  POINT 18
                </span>
                <h2 className="text-sm font-bold uppercase tracking-tight text-foreground">
                  Changes to These Terms
                </h2>
              </div>
              <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                We may update these Terms of Use at any time to reflect changes in our services, legal requirements, or business practices. When we make material changes, we will:
              </p>
              <ul className="mb-6 space-y-3 pl-2">
                {[
                  "Publish the updated Terms on this page with a revised effective date",
                  "Send an email notification to all registered users at least 14 days before changes take effect",
                  "Display a prominent notice on our website and app"
                ].map((item, i) => (
                  <li key={i} className="flex items-start space-x-3">
                    <div className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <span className="text-sm leading-relaxed text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Your continued use of the Service after the effective date of any changes constitutes your acceptance of the revised Terms. If you do not agree with the changes, you must discontinue use of the Service and may request account deletion.
              </p>
            </div>

            {/* Section 19 */}
            <div>
              <div className="mb-4 flex flex-col md:flex-row md:items-center space-y-3 md:space-y-0 md:space-x-4">
                <span className="liquid-glass flex h-8 min-w-[78px] items-center justify-center rounded-full px-3 text-[10px] font-semibold tracking-widest whitespace-nowrap text-white">
                  POINT 19
                </span>
                <h2 className="text-sm font-bold uppercase tracking-tight text-foreground">
                  Governing Law & Dispute Resolution
                </h2>
              </div>
              <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                These Terms of Use are governed by and construed in accordance with applicable laws. In the event of any dispute arising out of or in connection with these Terms or your use of the Service, we encourage you to first contact our support team to seek an amicable resolution.
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground">
                If a dispute cannot be resolved informally, it shall be submitted to binding arbitration or resolved in the courts of the applicable jurisdiction, as required by law. Nothing in this clause prevents either party from seeking urgent injunctive or equitable relief.
              </p>
            </div>

            {/* Section 20 */}
            <div>
              <div className="mb-6 flex flex-col md:flex-row md:items-center space-y-3 md:space-y-0 md:space-x-4">
                <span className="liquid-glass flex h-8 min-w-[78px] items-center justify-center rounded-full px-3 text-[10px] font-semibold tracking-widest whitespace-nowrap text-white">
                  POINT 20
                </span>
                <h2 className="text-sm font-bold uppercase tracking-tight text-foreground">
                  Contact Us
                </h2>
              </div>
              <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
                If you have any questions, concerns, or requests regarding these Terms of Use, please reach out to our team:
              </p>

              <div className="liquid-glass mx-auto w-fit max-w-full space-y-4 rounded-lg p-5">
                <div className="flex flex-col sm:flex-row sm:items-center">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-foreground sm:w-48">General Support:</span>
                  <a href="mailto:support@iptvnow.ca" className="text-sm font-bold text-primary hover:underline">support@iptvnow.ca</a>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-foreground sm:w-48">Billing Queries:</span>
                  <a href="mailto:support@iptvnow.ca" className="text-sm font-bold text-primary hover:underline">support@iptvnow.ca</a>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-foreground sm:w-48">Legal & Compliance:</span>
                  <a href="mailto:support@iptvnow.ca" className="text-sm font-bold text-primary hover:underline">support@iptvnow.ca</a>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-foreground sm:w-48">Website:</span>
                  <Link href="/" className="text-sm font-bold text-primary hover:underline">iptvnow.ca</Link>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-foreground sm:w-48">Response Time:</span>
                  <span className="text-sm text-muted-foreground">Within 2 business days</span>
                </div>
              </div>

              <p className="mt-10 text-[10px] font-bold uppercase tracking-widest text-muted-foreground text-center pb-8">
                These Terms of Use were last reviewed and updated on May 30, 2026. <br className="hidden sm:block" />
                By using our Service, you confirm your agreement to these Terms.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
