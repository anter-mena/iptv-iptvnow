import { PageHero } from "@/components/ui/page-hero"
import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"
import Link from "next/link"
import { AlertTriangle, Info } from "lucide-react"

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy",
  description:
    "Read the IPTV NOW Privacy Policy to understand how we securely collect, use, and protect your personal data in compliance with GDPR and CCPA regulations.",
  path: "/privacy-policy",
})

export default function PrivacyPolicyPage() {
  return (
    <div className="flex-1 bg-background">
      <PageHero
        title="Privacy Policy"
        description="IPTV Streaming Service — Your Data, Your Rights"
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
                Welcome to our IPTV streaming service. This Privacy Policy explains how we collect, use, store, and protect your personal information when you access our live TV, VOD, and on-demand streaming services. We are committed to full compliance with the General Data Protection Regulation (GDPR), the California Consumer Privacy Act (CCPA), and all other applicable international data protection laws.
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground">
                By creating an account or using our IPTV platform, you acknowledge and agree to the practices described in this Privacy Policy. If you do not agree with any part of this policy, please discontinue use of our service immediately. For any questions, you can reach us at the contact details provided in Section 10.
              </p>
            </div>

            {/* Section 1 */}
            <div>
              <div className="mb-4 flex flex-col md:flex-row md:items-center space-y-3 md:space-y-0 md:space-x-4">
                <span className="liquid-glass flex h-8 min-w-[78px] items-center justify-center rounded-full px-3 text-[10px] font-semibold tracking-widest whitespace-nowrap text-white">
                  POINT 01
                </span>
                <h2 className="text-sm font-bold uppercase tracking-tight text-foreground">
                  What Personal Data We Collect
                </h2>
              </div>
              <p className="mb-8 text-sm font-bold leading-relaxed text-foreground uppercase tracking-wide">
                We collect only the data necessary to deliver a high-quality IPTV streaming experience. Below is a transparent breakdown of every data category we process.
              </p>

              <h3 className="mb-3 text-[11px] font-bold uppercase tracking-widest text-foreground">
                1.1 Personal Identification Data
              </h3>
              <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                When you register or contact our support team, you may provide:
              </p>
              <ul className="mb-8 space-y-3 pl-2">
                {[
                  "Full name — used for account verification and personalization",
                  "Email address — used for account management, billing notifications, and customer support",
                  "Phone number — used solely for expedited customer support when requested",
                  "Billing information — processed securely through our PCI-DSS-compliant payment processor; we never store full card numbers"
                ].map((item, i) => (
                  <li key={i} className="flex items-start space-x-3">
                    <div className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <span className="text-sm leading-relaxed text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>

              <h3 className="mb-3 text-[11px] font-bold uppercase tracking-widest text-foreground">
                1.2 Technical & Usage Data
              </h3>
              <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                To optimize streaming quality and service performance, we automatically collect:
              </p>
              <ul className="mb-8 space-y-3 pl-2">
                {[
                  "IP address and approximate geographic location (country/region level)",
                  "Device type, operating system, and browser or app version",
                  "Streaming session data — buffer rates, playback quality, and connection speeds",
                  "Feature interaction data — which channels, categories, or VOD content you access",
                  "Time and duration of streaming sessions"
                ].map((item, i) => (
                  <li key={i} className="flex items-start space-x-3">
                    <div className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <span className="text-sm leading-relaxed text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>

              <h3 className="mb-3 text-[11px] font-bold uppercase tracking-widest text-foreground">
                1.3 Cookies & Tracking Technologies
              </h3>
              <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                Our platform uses first-party cookies and similar technologies to:
              </p>
              <ul className="mb-6 space-y-3 pl-2">
                {[
                  "Maintain your login session and preferences across visits",
                  "Optimize adaptive bitrate streaming for your connection",
                  "Detect and prevent fraudulent account access",
                  "Measure platform performance using anonymized analytics"
                ].map((item, i) => (
                  <li key={i} className="flex items-start space-x-3">
                    <div className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <span className="text-sm leading-relaxed text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm leading-relaxed text-muted-foreground font-medium">
                You can manage or disable cookies at any time through your browser settings. Please note that disabling certain cookies may affect login persistence and streaming performance. For instructions on managing cookies, visit aboutcookies.org.
              </p>
            </div>

            {/* Section 2 */}
            <div>
              <div className="mb-4 flex flex-col md:flex-row md:items-center space-y-3 md:space-y-0 md:space-x-4">
                <span className="liquid-glass flex h-8 min-w-[78px] items-center justify-center rounded-full px-3 text-[10px] font-semibold tracking-widest whitespace-nowrap text-white">
                  POINT 02
                </span>
                <h2 className="text-sm font-bold uppercase tracking-tight text-foreground">
                  Why We Collect Your Data (Legal Basis & Purpose)
                </h2>
              </div>
              <p className="mb-4 text-sm font-bold leading-relaxed text-foreground uppercase tracking-wide">
                We process your personal data only where we have a lawful basis to do so under GDPR Article 6. We never sell your data to third-party advertisers.
              </p>
              <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                Your data is used exclusively for the following purposes:
              </p>
              <ul className="mb-8 space-y-3 pl-2">
                {[
                  "Contract performance — to provision your IPTV subscription, process payments, and deliver the service you purchased",
                  "Legitimate interests — to improve platform stability, diagnose technical issues, and protect against cybersecurity threats",
                  "Legal compliance — to fulfill obligations under applicable law, including responding to valid law enforcement requests",
                  "Consent — to send optional marketing communications (you may opt out at any time)",
                  "Customer support — to resolve billing disputes, technical issues, and account queries efficiently"
                ].map((item, i) => (
                  <li key={i} className="flex items-start space-x-3">
                    <div className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <span className="text-sm leading-relaxed text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Section 3 */}
            <div>
              <div className="mb-4 flex flex-col md:flex-row md:items-center space-y-3 md:space-y-0 md:space-x-4">
                <span className="liquid-glass flex h-8 min-w-[78px] items-center justify-center rounded-full px-3 text-[10px] font-semibold tracking-widest whitespace-nowrap text-white">
                  POINT 03
                </span>
                <h2 className="text-sm font-bold uppercase tracking-tight text-foreground">
                  How We Store & Secure Your Data
                </h2>
              </div>
              <p className="mb-8 text-sm font-bold leading-relaxed text-foreground uppercase tracking-wide">
                Your personal information is protected by enterprise-grade security infrastructure. We apply the principle of data minimization — retaining only what is necessary for as long as required.
              </p>

              <h3 className="mb-3 text-[11px] font-bold uppercase tracking-widest text-foreground">
                3.1 Storage & International Transfers
              </h3>
              <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                Your data is stored on encrypted servers protected by AES-256 encryption at rest and TLS 1.3 encryption in transit. Our servers may be located in the United Kingdom, the European Union, or other jurisdictions that provide an adequate level of data protection as determined by the European Commission.
              </p>
              <p className="mb-8 text-sm leading-relaxed text-muted-foreground">
                Where data is transferred outside the EEA, we rely on Standard Contractual Clauses (SCCs) or equivalent mechanisms to ensure your rights are protected. For more details on GDPR-compliant transfers, visit GDPR.eu.
              </p>

              <h3 className="mb-3 text-[11px] font-bold uppercase tracking-widest text-foreground">
                3.2 Security Measures
              </h3>
              <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                We implement the following technical and organizational security controls:
              </p>
              <ul className="mb-6 space-y-3 pl-2">
                {[
                  "AES-256 encryption for all stored personal data",
                  "TLS 1.3 encrypted connections for all data in transit",
                  "Multi-factor authentication (MFA) available for all accounts",
                  "24/7 automated intrusion detection and DDoS protection",
                  "Regular third-party penetration testing and vulnerability assessments",
                  "Role-based access control — only authorized staff can access personal data"
                ].map((item, i) => (
                  <li key={i} className="flex items-start space-x-3">
                    <div className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <span className="text-sm leading-relaxed text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mb-8">
                <p className="text-xs leading-5 font-medium text-amber-200">
                  <AlertTriangle className="mr-1 inline size-3.5 align-[-2px] text-amber-300" aria-hidden />
                  <strong className="font-bold text-amber-300">Security Disclaimer:</strong>{" "}
                  While we implement industry-leading safeguards, no digital transmission method can guarantee absolute security. We strongly recommend that you use a strong, unique password and enable two-factor authentication on your account. Avoid accessing your IPTV account over unsecured public Wi-Fi networks.
                </p>
              </div>

              <h3 className="mb-3 text-[11px] font-bold uppercase tracking-widest text-foreground">
                3.3 Data Retention
              </h3>
              <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                We retain your personal data only as long as necessary:
              </p>
              <ul className="space-y-3 pl-2">
                {[
                  "Active account data — retained for the duration of your subscription plus 30 days",
                  "Payment records — retained for 7 years to comply with financial regulations",
                  "Support tickets and communications — retained for 2 years",
                  "Technical/usage logs — anonymized and aggregated after 90 days"
                ].map((item, i) => (
                  <li key={i} className="flex items-start space-x-3">
                    <div className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <span className="text-sm leading-relaxed text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Section 4 */}
            <div>
              <div className="mb-4 flex flex-col md:flex-row md:items-center space-y-3 md:space-y-0 md:space-x-4">
                <span className="liquid-glass flex h-8 min-w-[78px] items-center justify-center rounded-full px-3 text-[10px] font-semibold tracking-widest whitespace-nowrap text-white">
                  POINT 04
                </span>
                <h2 className="text-sm font-bold uppercase tracking-tight text-foreground">
                  Data Sharing & Third-Party Disclosure
                </h2>
              </div>
              <p className="mb-4 text-sm font-bold leading-relaxed text-foreground uppercase tracking-wide">
                We do not sell, rent, or trade your personal data. Disclosure to third parties is strictly limited to the situations outlined below.
              </p>
              <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                Your data may be shared only in the following circumstances:
              </p>
              <ul className="mb-6 space-y-3 pl-2">
                {[
                  "Payment processors — to complete secure billing transactions (e.g., Stripe, PayPal). These processors are PCI-DSS certified and contractually prohibited from using your data for any other purpose.",
                  "Cloud infrastructure providers — to host and deliver our streaming service under strict data processing agreements",
                  "Legal obligations — when required by a valid court order, subpoena, or applicable law",
                  "Fraud prevention — to investigate and prevent account abuse, chargebacks, or security breaches",
                  "Business transfers — in the event of a merger or acquisition, your data will remain subject to this Privacy Policy"
                ].map((item, i) => (
                  <li key={i} className="flex items-start space-x-3">
                    <div className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <span className="text-sm leading-relaxed text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm leading-relaxed text-muted-foreground font-medium">
                We never share personally identifiable information with advertising networks, data brokers, or marketing platforms.
              </p>
            </div>

            {/* Section 5 */}
            <div>
              <div className="mb-4 flex flex-col md:flex-row md:items-center space-y-3 md:space-y-0 md:space-x-4">
                <span className="liquid-glass flex h-8 min-w-[78px] items-center justify-center rounded-full px-3 text-[10px] font-semibold tracking-widest whitespace-nowrap text-white">
                  POINT 05
                </span>
                <h2 className="text-sm font-bold uppercase tracking-tight text-foreground">
                  Your Privacy Rights
                </h2>
              </div>
              <p className="mb-8 text-sm font-bold leading-relaxed text-foreground uppercase tracking-wide">
                Depending on your location, you have significant rights over your personal data. We are committed to honoring these rights promptly and without undue barriers.
              </p>

              <h3 className="mb-3 text-[11px] font-bold uppercase tracking-widest text-foreground">
                5.1 Rights Under GDPR (EEA & UK Users)
              </h3>
              <ul className="mb-8 space-y-3 pl-2">
                {[
                  "Right of Access — request a copy of all personal data we hold about you",
                  "Right to Rectification — correct any inaccurate or incomplete data",
                  "Right to Erasure (Right to be Forgotten) — request deletion of your data where no legal obligation requires retention",
                  "Right to Restriction — limit how we process your data in certain circumstances",
                  "Right to Data Portability — receive your data in a structured, machine-readable format",
                  "Right to Object — object to processing based on legitimate interests or for direct marketing",
                  "Rights related to automated decision-making — we do not make solely automated decisions with legal effects"
                ].map((item, i) => (
                  <li key={i} className="flex items-start space-x-3">
                    <div className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <span className="text-sm leading-relaxed text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>

              <h3 className="mb-3 text-[11px] font-bold uppercase tracking-widest text-foreground">
                5.2 Rights Under CCPA (California Residents)
              </h3>
              <ul className="mb-6 space-y-3 pl-2">
                {[
                  "Right to Know — the categories and specific pieces of personal information we collect about you",
                  "Right to Delete — request deletion of your personal information",
                  "Right to Opt-Out — we do not sell personal information, so this right is inherently honored",
                  "Right to Non-Discrimination — you will receive equal service and pricing regardless of exercising privacy rights"
                ].map((item, i) => (
                  <li key={i} className="flex items-start space-x-3">
                    <div className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <span className="text-sm leading-relaxed text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>

              <div>
                <p className="text-xs leading-5 font-medium text-foreground/80">
                  <Info className="mr-1 inline size-3.5 align-[-2px] text-foreground" aria-hidden />
                  <strong className="font-bold text-foreground">Exercising Your Rights:</strong>{" "}
                  To exercise any of these rights, please contact our Privacy Team at <a href="mailto:support@iptvnow.ca" className="text-primary hover:underline">support@iptvnow.ca</a>. We will respond within 30 days (GDPR) or 45 days (CCPA). We may need to verify your identity before processing your request.
                </p>
              </div>
            </div>

            {/* Section 6 */}
            <div>
              <div className="mb-4 flex flex-col md:flex-row md:items-center space-y-3 md:space-y-0 md:space-x-4">
                <span className="liquid-glass flex h-8 min-w-[78px] items-center justify-center rounded-full px-3 text-[10px] font-semibold tracking-widest whitespace-nowrap text-white">
                  POINT 06
                </span>
                <h2 className="text-sm font-bold uppercase tracking-tight text-foreground">
                  Cookies Policy
                </h2>
              </div>
              <p className="mb-8 text-sm font-bold leading-relaxed text-foreground uppercase tracking-wide">
                This section provides a detailed breakdown of the cookies we use, in compliance with the EU ePrivacy Directive and GDPR.
              </p>

              <h3 className="mb-3 text-[11px] font-bold uppercase tracking-widest text-foreground">
                6.1 Cookie Categories
              </h3>
              <ul className="mb-8 space-y-3 pl-2">
                {[
                  "Strictly Necessary Cookies — essential for login sessions, security, and core streaming functionality. These cannot be disabled.",
                  "Performance & Analytics Cookies — help us understand usage patterns using anonymized data (e.g., page load times, buffering events). Requires consent.",
                  "Functional Cookies — remember your preferences such as language, video quality, and content filters. Requires consent.",
                  "Marketing Cookies — we do not use third-party advertising cookies."
                ].map((item, i) => (
                  <li key={i} className="flex items-start space-x-3">
                    <div className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <span className="text-sm leading-relaxed text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>

              <h3 className="mb-3 text-[11px] font-bold uppercase tracking-widest text-foreground">
                6.2 Managing Your Cookie Preferences
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                You can update your cookie preferences at any time via the Cookie Settings panel available in your account dashboard, or by adjusting your browser settings. Withdrawing consent will not affect the lawfulness of processing carried out before withdrawal.
              </p>
            </div>

            {/* Section 7 */}
            <div>
              <div className="mb-4 flex flex-col md:flex-row md:items-center space-y-3 md:space-y-0 md:space-x-4">
                <span className="liquid-glass flex h-8 min-w-[78px] items-center justify-center rounded-full px-3 text-[10px] font-semibold tracking-widest whitespace-nowrap text-white">
                  POINT 07
                </span>
                <h2 className="text-sm font-bold uppercase tracking-tight text-foreground">
                  Third-Party Links & Embedded Services
                </h2>
              </div>
              <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                Our IPTV platform may contain links to third-party websites or integrate third-party payment and analytics services. These third parties operate under their own privacy policies, which we encourage you to review before submitting any personal data to them.
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground">
                We are not responsible for the privacy practices, content, or security of any external websites or services. The inclusion of a link on our platform does not constitute an endorsement of that third party's privacy practices.
              </p>
            </div>

            {/* Section 8 */}
            <div>
              <div className="mb-4 flex flex-col md:flex-row md:items-center space-y-3 md:space-y-0 md:space-x-4">
                <span className="liquid-glass flex h-8 min-w-[78px] items-center justify-center rounded-full px-3 text-[10px] font-semibold tracking-widest whitespace-nowrap text-white">
                  POINT 08
                </span>
                <h2 className="text-sm font-bold uppercase tracking-tight text-foreground">
                  Children's Privacy Protection
                </h2>
              </div>
              <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                Our IPTV streaming service is intended exclusively for individuals aged 18 and over. We do not knowingly collect, process, or store personal data from children under the age of 18. If you are a parent or guardian and believe your child has provided us with personal information without your consent, please contact us immediately at the address below.
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Upon receiving a verified report, we will promptly delete all associated data from our systems within 72 hours.
              </p>
            </div>

            {/* Section 9 */}
            <div>
              <div className="mb-4 flex flex-col md:flex-row md:items-center space-y-3 md:space-y-0 md:space-x-4">
                <span className="liquid-glass flex h-8 min-w-[78px] items-center justify-center rounded-full px-3 text-[10px] font-semibold tracking-widest whitespace-nowrap text-white">
                  POINT 09
                </span>
                <h2 className="text-sm font-bold uppercase tracking-tight text-foreground">
                  Updates to This Privacy Policy
                </h2>
              </div>
              <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                We may update this Privacy Policy periodically to reflect changes in our data practices, legal requirements, or service features. When we make material changes, we will:
              </p>
              <ul className="mb-6 space-y-3 pl-2">
                {[
                  "Publish the revised policy on this page with an updated effective date",
                  "Send an email notification to all registered users at least 14 days before changes take effect",
                  "Display a prominent banner on our website and app"
                ].map((item, i) => (
                  <li key={i} className="flex items-start space-x-3">
                    <div className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <span className="text-sm leading-relaxed text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm leading-relaxed text-muted-foreground">
                We encourage you to review this page regularly. Continued use of our IPTV service after the effective date of any changes constitutes your acceptance of the updated Privacy Policy.
              </p>
            </div>

            {/* Section 10 */}
            <div>
              <div className="mb-6 flex flex-col md:flex-row md:items-center space-y-3 md:space-y-0 md:space-x-4">
                <span className="liquid-glass flex h-8 min-w-[78px] items-center justify-center rounded-full px-3 text-[10px] font-semibold tracking-widest whitespace-nowrap text-white">
                  POINT 10
                </span>
                <h2 className="text-sm font-bold uppercase tracking-tight text-foreground">
                  Contact Our Privacy Team
                </h2>
              </div>
              <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
                If you have any questions, concerns, or requests regarding this Privacy Policy or the way we handle your personal data, please contact us:
              </p>

              <div className="liquid-glass mx-auto w-fit max-w-full space-y-4 rounded-lg p-5">
                <div className="flex flex-col sm:flex-row sm:items-center">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-foreground sm:w-48">Privacy Team:</span>
                  <a href="mailto:support@iptvnow.ca" className="text-sm font-bold text-primary hover:underline">support@iptvnow.ca</a>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-foreground sm:w-48">General Support:</span>
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
                This Privacy Policy was last reviewed and updated on May 30, 2026. <br className="hidden sm:block" />
                We are committed to transparency, data minimization, and your right to privacy.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
