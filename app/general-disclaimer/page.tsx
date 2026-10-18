import { PageHero } from "@/components/ui/page-hero"
import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"
import Link from "next/link"
import { AlertTriangle, Info, Lightbulb, Scale } from "lucide-react"

export const metadata: Metadata = buildMetadata({
  title: "General Disclaimer",
  description:
    "Read our General Disclaimer regarding the use of IPTV NOW services, content availability, and limitations of liability for our streaming platform.",
  path: "/general-disclaimer",
})

export default function GeneralDisclaimerPage() {
  return (
    <div className="flex-1 bg-background">
      <PageHero
        title="General Disclaimer"
        description="Important legal information regarding the use of our platform."
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
                This General Disclaimer governs the terms under which our IPTV NOW service operates and the limits of our legal responsibility. By accessing our website or using our service, you acknowledge that you have read, understood, and agreed to the statements set out below.
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground">
                This disclaimer should be read in conjunction with our <Link href="/privacy-policy" className="font-bold text-primary hover:underline">Privacy Policy</Link>, <Link href="/terms-of-use" className="font-bold text-primary hover:underline">Terms of Use</Link>, and <Link href="/refund-policy" className="font-bold text-primary hover:underline">Refund Policy</Link>, all of which collectively form the complete legal framework governing your use of our platform.
              </p>
            </div>

            {/* Section 1 */}
            <div>
              <div className="mb-4 flex flex-col md:flex-row md:items-center space-y-3 md:space-y-0 md:space-x-4">
                <span className="liquid-glass flex h-8 min-w-[78px] items-center justify-center rounded-full px-3 text-[10px] font-semibold tracking-widest whitespace-nowrap text-white">
                  POINT 01
                </span>
                <h2 className="text-sm font-bold uppercase tracking-tight text-foreground">
                  General Disclaimer — Nature of Our Service
                </h2>
              </div>
              <p className="mb-4 text-sm font-bold leading-relaxed text-foreground uppercase tracking-wide">
                We are committed to operating lawfully and transparently within the IPTV industry.
              </p>
              <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                IPTV NOW is committed to providing access to legal IPTV services in full compliance with applicable laws. IPTV (Internet Protocol Television) is a lawful and widely adopted technology used to deliver television content over IP networks, in the same manner as mainstream streaming services such as Netflix, Amazon Prime Video, and Disney+.
              </p>
              <p className="mb-8 text-sm leading-relaxed text-muted-foreground">
                We operate as a reseller and access facilitator — we do not host, stream, encode, rebroadcast, or store any television channels, movies, or on-demand content on our own servers. We provide access credentials that connect users to content made available by third-party IPTV service providers, over which we have no direct editorial or technical control.
              </p>

              <div>
                <p className="text-xs leading-5 font-medium text-foreground/80">
                  <AlertTriangle className="mr-1 inline size-3.5 align-[-2px] text-primary" aria-hidden />
                  <strong className="font-bold text-primary">Important Notice:</strong>{" "}
                  Use of any IPTV service must always comply with the laws and regulations applicable in the user's own country or region. It is the user's responsibility to verify the legality of IPTV usage in their jurisdiction before subscribing or accessing any content.
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
                  Intellectual Property Rights
                </h2>
              </div>
              <p className="mb-4 text-sm font-bold leading-relaxed text-foreground uppercase tracking-wide">
                All trademarks, logos, and brand names displayed on this website belong to their respective owners.
              </p>
              <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                All trademarks, logos, service marks, brand names, product names, and other identifying marks displayed on this website are the exclusive property of their respective owners. IPTV NOW makes no claim of ownership over any third-party intellectual property referenced, displayed, or mentioned on this website.
              </p>
              <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                Any references to third-party marks, channel names, broadcaster logos, or content provider names are made strictly for the purposes of identification, compatibility description, and consumer information only. Such references do not imply, suggest, or constitute any affiliation, endorsement, sponsorship, licensing agreement, or partnership between those rights holders and IPTV NOW.
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground">
                All original content on this website — including our own text, graphics, user interface design, and documentation — is the intellectual property of IPTV NOW and is protected under applicable copyright law. Unauthorized reproduction or commercial use of our original content is prohibited.
              </p>
            </div>

            {/* Section 3 */}
            <div>
              <div className="mb-4 flex flex-col md:flex-row md:items-center space-y-3 md:space-y-0 md:space-x-4">
                <span className="liquid-glass flex h-8 min-w-[78px] items-center justify-center rounded-full px-3 text-[10px] font-semibold tracking-widest whitespace-nowrap text-white">
                  POINT 03
                </span>
                <h2 className="text-sm font-bold uppercase tracking-tight text-foreground">
                  User Responsibility & Legal Compliance
                </h2>
              </div>
              <p className="mb-4 text-sm font-bold leading-relaxed text-foreground uppercase tracking-wide">
                Each user is solely responsible for ensuring their IPTV usage complies with the laws of their jurisdiction.
              </p>
              <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                The legality of accessing specific IPTV content varies significantly by country, region, and applicable licensing agreements. IPTV NOW operates in accordance with applicable Canadian law, but we cannot monitor, regulate, or guarantee compliance on behalf of users in all global jurisdictions.
              </p>
              <p className="mb-4 text-sm font-bold text-foreground uppercase tracking-tight">
                Each user is solely and exclusively responsible for:
              </p>
              <ul className="mb-8 space-y-3 pl-2">
                {[
                  "Verifying whether accessing IPTV services is permitted under the laws and regulations of their local country, province, state, or municipality",
                  "Ensuring that any content they access through our platform is lawfully available in their geographic region",
                  "Using the service in full compliance with all applicable copyright, broadcasting, licensing, and intellectual property laws",
                  "Ensuring their use does not infringe upon any third-party rights, including the rights of content creators, broadcasters, and distributors",
                  "Keeping their account credentials secure and ensuring their account is not used for unauthorized purposes"
                ].map((item, i) => (
                  <li key={i} className="flex items-start space-x-3">
                    <div className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <span className="text-sm leading-relaxed text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>

              <div>
                <p className="text-xs leading-5 font-medium text-foreground">
                  <Info className="mr-1 inline size-3.5 align-[-2px] text-primary" aria-hidden />
                  <strong className="font-bold text-primary">Notice:</strong>{" "}
                  IPTV NOW is not responsible for any misuse of our services, unauthorized access to content, or any legal violations committed by end users. Users who engage in unlawful activity bear full legal responsibility for their actions.
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
                  Copyright Concerns & DMCA Policy
                </h2>
              </div>
              <p className="mb-4 text-sm font-bold leading-relaxed text-foreground uppercase tracking-wide">
                We respect intellectual property rights and respond promptly to all legitimate copyright concerns.
              </p>
              <p className="mb-8 text-sm leading-relaxed text-muted-foreground">
                IPTV NOW respects the intellectual property rights of content creators, broadcasters, studios, and all other rights holders. We are committed to cooperating fully with rights holders to address legitimate copyright concerns involving content accessible through third-party IPTV providers on our platform.
              </p>

              <h3 className="mb-3 text-[11px] font-bold uppercase tracking-widest text-foreground">
                4.1 Reporting Infringing Content
              </h3>
              <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                If you are a rights holder or authorized representative and believe that any material accessible through third-party IPTV providers linked to our platform infringes your copyright, please submit a formal DMCA takedown notice through our official DMCA Report Page at <Link href="/contact" className="font-bold text-primary hover:underline">iptvnow.ca/contact</Link>.
              </p>
              <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                To ensure your report is processed as quickly as possible, please include the following information:
              </p>
              <ul className="mb-8 space-y-3 pl-2">
                {[
                  "Your full name and contact information (email address and phone number)",
                  "A description of the copyrighted work you believe has been infringed",
                  "A specific description of the allegedly infringing material and its location or access point",
                  "A statement that you have a good faith belief that the use of the material is not authorized by the copyright owner, its agent, or the law",
                  "A statement, made under penalty of perjury, that the information in your notice is accurate and that you are the rights holder or authorized to act on their behalf",
                  "Your physical or electronic signature"
                ].map((item, i) => (
                  <li key={i} className="flex items-start space-x-3">
                    <div className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <span className="text-sm leading-relaxed text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>

              <h3 className="mb-3 text-[11px] font-bold uppercase tracking-widest text-foreground">
                4.2 Our Response to DMCA Notices
              </h3>
              <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                We review all DMCA notices promptly and in good faith. Upon receiving a valid notice, we will:
              </p>
              <ul className="mb-8 space-y-3 pl-2">
                {[
                  "Acknowledge receipt of the notice within 2 business days",
                  "Review the claim to determine its validity and scope",
                  "Cooperate with the rights holder and relevant third-party providers to address the concern",
                  "Respond to repeat infringement patterns in accordance with our repeat infringer policy"
                ].map((item, i) => (
                  <li key={i} className="flex items-start space-x-3">
                    <div className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <span className="text-sm leading-relaxed text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>

              <div>
                <p className="text-xs leading-5 font-medium text-foreground/80">
                  <Lightbulb className="mr-1 inline size-3.5 align-[-2px] text-foreground" aria-hidden />
                  <strong className="font-bold text-foreground">DMCA Tip:</strong>{" "}
                  Notices that lack complete identifying information may experience delays in processing. Providing clear, detailed information about the infringing material will significantly speed up the review process.
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
                  Third-Party Content & Service Providers
                </h2>
              </div>
              <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                Our platform may reference, integrate with, or provide access to third-party IPTV service providers, content platforms, and external websites. These third-party services operate independently under their own terms of service, privacy policies, and legal frameworks.
              </p>
              <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                IPTV NOW does not control, endorse, or assume responsibility for the content, accuracy, availability, or practices of any third-party service or website. We are not liable for any damage, loss, or legal consequence arising from your access to or use of third-party content or services.
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground">
                We strongly encourage users to review the terms and privacy policies of any third-party providers they access through our platform before submitting any personal or payment information.
              </p>
            </div>

            {/* Section 6 */}
            <div>
              <div className="mb-4 flex flex-col md:flex-row md:items-center space-y-3 md:space-y-0 md:space-x-4">
                <span className="liquid-glass flex h-8 min-w-[78px] items-center justify-center rounded-full px-3 text-[10px] font-semibold tracking-widest whitespace-nowrap text-white">
                  POINT 06
                </span>
                <h2 className="text-sm font-bold uppercase tracking-tight text-foreground">
                  No Legal Advice
                </h2>
              </div>
              <p className="mb-4 text-sm font-bold leading-relaxed text-foreground uppercase tracking-wide">
                Nothing on this website constitutes legal advice. Consult a qualified legal professional for guidance specific to your situation.
              </p>
              <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                All information provided on this website, including but not limited to this disclaimer, our Terms of Use, Privacy Policy, Refund Policy, and any blog or informational content, is provided for general informational purposes only.
              </p>
              <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                Nothing on this website constitutes, or should be interpreted as, legal advice, legal opinion, a legal assessment, or legal representation of any kind. The information provided does not create any attorney-client or professional advisory relationship between IPTV NOW and any user.
              </p>
              <p className="mb-8 text-sm leading-relaxed text-muted-foreground">
                Laws regarding IPTV, streaming, copyright, and digital content vary widely across jurisdictions and may change over time. For any legal concerns or questions regarding copyright compliance, broadcasting regulations, licensing requirements, or the lawfulness of IPTV use in your specific jurisdiction, you should consult a qualified and licensed legal professional.
              </p>

              <div>
                <p className="text-xs leading-5 font-medium text-amber-200">
                  <Scale className="mr-1 inline size-3.5 align-[-2px] text-amber-300" aria-hidden />
                  <strong className="font-bold text-amber-300">Legal Disclaimer:</strong>{" "}
                  IPTV NOW expressly disclaims all liability for any actions taken or not taken based on the informational content of this website. Users act on information provided here entirely at their own risk.
                </p>
              </div>
            </div>

            {/* Section 7 */}
            <div>
              <div className="mb-4 flex flex-col md:flex-row md:items-center space-y-3 md:space-y-0 md:space-x-4">
                <span className="liquid-glass flex h-8 min-w-[78px] items-center justify-center rounded-full px-3 text-[10px] font-semibold tracking-widest whitespace-nowrap text-white">
                  POINT 07
                </span>
                <h2 className="text-sm font-bold uppercase tracking-tight text-foreground">
                  Limitation of Liability
                </h2>
              </div>
              <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                To the maximum extent permitted by applicable law, IPTV NOW, its directors, employees, affiliates, agents, and service providers shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages arising from:
              </p>
              <ul className="mb-4 space-y-3 pl-2">
                {[
                  "Your use of or inability to access our website or the IPTV services we facilitate",
                  "Any content accessed or viewed through third-party IPTV providers",
                  "Any legal consequences resulting from your use of IPTV services in jurisdictions where such use may be restricted",
                  "Any unauthorized access to your account or personal data resulting from your failure to maintain account security",
                  "Any reliance on information provided on this website for legal, financial, or other professional decisions"
                ].map((item, i) => (
                  <li key={i} className="flex items-start space-x-3">
                    <div className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <span className="text-sm leading-relaxed text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm leading-relaxed text-muted-foreground">
                This limitation applies regardless of the legal theory under which a claim is brought — whether in contract, tort, negligence, strict liability, or otherwise — even if we have been advised of the possibility of such damages.
              </p>
            </div>

            {/* Section 8 */}
            <div>
              <div className="mb-4 flex flex-col md:flex-row md:items-center space-y-3 md:space-y-0 md:space-x-4">
                <span className="liquid-glass flex h-8 min-w-[78px] items-center justify-center rounded-full px-3 text-[10px] font-semibold tracking-widest whitespace-nowrap text-white">
                  POINT 08
                </span>
                <h2 className="text-sm font-bold uppercase tracking-tight text-foreground">
                  Accuracy of Information
                </h2>
              </div>
              <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                We make reasonable efforts to ensure that all information published on our website is accurate, current, and complete at the time of publication. However, we do not warrant or guarantee the accuracy, reliability, completeness, or timeliness of any content on our website.
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground">
                IPTV availability, channel lineups, pricing, supported devices, and technical specifications are subject to change without notice. We recommend contacting our support team directly for the most current and accurate service information before making any purchasing decisions.
              </p>
            </div>

            {/* Section 9 */}
            <div>
              <div className="mb-4 flex flex-col md:flex-row md:items-center space-y-3 md:space-y-0 md:space-x-4">
                <span className="liquid-glass flex h-8 min-w-[78px] items-center justify-center rounded-full px-3 text-[10px] font-semibold tracking-widest whitespace-nowrap text-white">
                  POINT 09
                </span>
                <h2 className="text-sm font-bold uppercase tracking-tight text-foreground">
                  Updates to This Disclaimer
                </h2>
              </div>
              <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                We may update this General Disclaimer from time to time to reflect changes in our services, applicable law, or business practices. When material changes are made, we will update the effective date at the top of this page and notify registered users via email where appropriate.
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Your continued use of our website or services following any updates to this disclaimer constitutes your acceptance of the revised terms.
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
                For questions about this disclaimer, DMCA notices, or general legal enquiries, please contact us:
              </p>

              <div className="liquid-glass mx-auto w-fit max-w-full space-y-4 rounded-lg p-5">
                <div className="flex flex-col sm:flex-row sm:items-center">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-foreground sm:w-48">General Enquiries:</span>
                  <a href="mailto:support@iptvnow.ca" className="text-sm font-bold text-primary hover:underline">support@iptvnow.ca</a>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-foreground sm:w-48">Legal & DMCA:</span>
                  <a href="mailto:support@iptvnow.ca" className="text-sm font-bold text-primary hover:underline">support@iptvnow.ca</a>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-foreground sm:w-48">DMCA Report Page:</span>
                  <Link href="/contact" className="text-sm font-bold text-primary hover:underline">iptvnow.ca/contact</Link>
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
                This General Disclaimer was last reviewed and updated on May 30, 2026. <br className="hidden sm:block" />
                We are committed to operating lawfully, transparently, and responsibly.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
