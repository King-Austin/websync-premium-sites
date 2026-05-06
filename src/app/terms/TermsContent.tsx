"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <section className="pt-32 md:pt-40 lg:pt-48 pb-24">
        <div className="container-custom max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <a 
              href="/" 
              className="inline-flex items-center gap-2 text-sm font-bold tracking-widest uppercase text-primary hover:text-foreground transition-colors mb-12 group"
            >
              <span className="inline-block transition-transform group-hover:-translate-x-1">←</span>
              Back to Homepage
            </a>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold mb-12">Terms of Service</h1>
            
            <div className="space-y-16 font-body text-muted-foreground leading-relaxed text-[13px] md:text-sm">
              <section className="space-y-6">
                <h2 className="text-xl font-display font-medium text-foreground uppercase tracking-widest border-b border-border pb-4">1. Definitions and Interpretation</h2>
                <div className="space-y-4">
                  <p>In this Agreement, the following terms shall have the respective meanings assigned to them:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>&quot;ClientContent&quot;</strong> signifies all text, files, images, photos, video, sounds, works of authorship, and other materials provided by the Client for incorporation into the Digital Assets.</li>
                    <li><strong>&quot;Digital Assets&quot;</strong> constitutes the final webpage, branding elements, code snippets, and hosting infrastructure provided by the Company.</li>
                    <li><strong>&quot;SLA&quot;</strong> represents the Service Level Agreement governing uptime and implementation timelines.</li>
                    <li><strong>&quot;Subscription Cycle&quot;</strong> refers to the recurring 30-day period during which the Client is authorized to use the services.</li>
                    <li><strong>&quot;Strategic Tenure&quot;</strong> denotes the foundational 36-month commitment period required for service stability.</li>
                  </ul>
                </div>
              </section>

              <section className="space-y-6">
                <h2 className="text-xl font-display font-medium text-foreground uppercase tracking-widest border-b border-border pb-4">2. Acceptance and Digital Partnership</h2>
                <p>By engaging WebSync Digital (&quot;Company&quot;), a limited liability entity registered in the Federal Republic of Nigeria (RC 9470161), you acknowledge that you have read, understood, and agreed to be bound by these Terms of Service. This agreement governs the entirety of our digital partnership and supersedes any prior oral or written communications.</p>
              </section>

              <section className="space-y-6">
                <h2 className="text-xl font-display font-medium text-foreground uppercase tracking-widest border-b border-border pb-4">3. Subscription, Recurring Billing & Paystack Integration</h2>
                <p>The WebSync Pro plan operates on a high-fidelity automated recurring billing cycle managed via Paystack Payments Limited. By providing your payment credentials, you grant an irrevocable mandate for the Company to debit the sum of ₦9,999 (subject to applicable taxes and standard indexing) on a monthly basis.</p>
                <div className="p-6 bg-secondary/20 rounded-2xl border border-white/5 space-y-4">
                  <h3 className="text-foreground font-bold text-xs uppercase">A. Authorization</h3>
                  <p>The Client represents and warrants that they are the authorized holder of the card or bank account used for the subscription and that sufficient funds are available for each Transaction.</p>
                  <h3 className="text-foreground font-bold text-xs uppercase">B. Indexing & Pricing Adjustments</h3>
                  <p>While we strive to maintain the ₦9,999 rate, the Company reserves the right to adjust pricing to reflect changes in server hosting costs, currency fluctuations, or significant inflation, with a 30-day notice period provided to the Client.</p>
                </div>
              </section>

              <section className="space-y-6">
                <h2 className="text-xl font-display font-medium text-foreground uppercase tracking-widest border-b border-border pb-4">4. Strategic Implementation Tenure (Foundational Commitment)</h2>
                <div className="p-8 border border-primary/20 bg-primary/5 rounded-[2.5rem] space-y-4">
                  <p>WebSync Digital utilizes a capital-intensive &quot;Zero Setup Fee&quot; model to eliminate financial barriers for Nigerian businesses. To preserve the economic viability of this high-end infrastructure, all WebSync Pro subscriptions are bound by a **36-month Strategic Implementation Tenure**.</p>
                  <p>This tenure constitutes the essential development lifecycle of your digital architecture. During this 3-year term, the Client is prioritized for all security hardening and performance optimizations. Upon the conclusion of the 36-month tenure, the subscription automatically converts to an open-ended monthly cycle, whereby the Client may terminate the service at their discretion with 14 days&apos; notice prior to the next billing date.</p>
                </div>
              </section>

              <section className="space-y-6">
                <h2 className="text-xl font-display font-medium text-foreground uppercase tracking-widest border-b border-border pb-4">5. Domain Custodianship & Administrative Release</h2>
                <p>The Company assumes 100% of the cost for annual domain renewals (.com.ng, .com, etc.) for the duration of an active subscription. For security purposes and to maintain the integrity of our hosting environment, the Company remains the Administrative and Technical contact for all managed domains.</p>
                <p><strong>Withdrawal of Management:</strong> In the event that a Client wishes to migrate their domain to an external registrar or assume full technical control, a standard **Administrative Divestment Fee of ₦15,000** is required to facilitate the final data export, EPP code generation, and technical separation procedures.</p>
              </section>

              <section className="space-y-6">
                <h2 className="text-xl font-display font-medium text-foreground uppercase tracking-widest border-b border-border pb-4">6. Asset Ownership & Permanent Buy-Out</h2>
                <p>The WebSync Pro model is a service-based architecture where technical infrastructure remains the property of the Company. However, we provide a clear pathway for permanent asset ownership for businesses that wish to move from a subscription model to a traditional ownership model.</p>
                <div className="p-6 bg-secondary/30 rounded-2xl border border-white/5 space-y-4">
                  <p><strong>Permanent Buy-Out (Fixed Cost):</strong> Clients may request a full ownership transfer of their digital assets (including source code files and design templates) for a designated one-time fixed fee of **₦399,000**.</p>
                  <p className="text-xs italic opacity-70">Note: This buy-out fee is separate from the Strategic Implementation Tenure and, once paid, discharges the Client from further monthly ₦9,999 maintenance obligations, after which hosting and technical security become the sole responsibility of the Client.</p>
                </div>
              </section>

              <section className="space-y-6">
                <h2 className="text-xl font-display font-medium text-foreground uppercase tracking-widest border-b border-border pb-4">7. Implementation SLA & Unlimited Updates</h2>
                <p>The Company commits to an initial deployment timeline of 7 to 14 business days, contingent upon the timely delivery of ClientContent. Subscribed Clients are entitled to unlimited monthly maintenance updates, which include text modifications, image swaps, and minor layout adjustments. Major architectural rebuilds or full feature refactoring may incur additional engineering fees.</p>
              </section>

              <section className="space-y-6">
                <h2 className="text-xl font-display font-medium text-foreground uppercase tracking-widest border-b border-border pb-4">7. Prohibited Uses & Content Integrity</h2>
                <p>The Client shall not use the Company&apos;s infrastructure for any of the following:</p>
                <ul className="list-disc pl-6 space-y-2 italic">
                  <li>Dissemination of fraudulent or misleading business information.</li>
                  <li>Hosting of content that violates the laws of the Federal Republic of Nigeria.</li>
                  <li>Unauthorized scraping, reverse engineering, or penetration testing of the WebSync framework.</li>
                  <li>Any activity that jeopardizes the server reputation or IP health of the Company&apos;s network.</li>
                </ul>
              </section>

              <section className="space-y-6">
                <h2 className="text-xl font-display font-medium text-foreground uppercase tracking-widest border-b border-border pb-4">8. Limitation of Liability & Force Majeure</h2>
                <p>To the maximum extent permitted by Nigerian law, WebSync Digital Technology Ltd. shall not be liable for any indirect, incidental, or consequential damages arising from service interruptions, internet outages, or fluctuations in third-party search engine rankings.</p>
                <p><strong>Force Majeure:</strong> The Company shall not be held responsible for delays or failures caused by events beyond its reasonable control, including but not limited to nationwide fiber cuts, grid-scale power outages, civil unrest, or global acts of God.</p>
              </section>

              <section className="space-y-6">
                <h2 className="text-xl font-display font-medium text-foreground uppercase tracking-widest border-b border-border pb-4">9. Confidentiality and Non-Disclosure</h2>
                <p>Both parties agree to treat all business strategies, pricing structures (where custom), and technical methodologies shared during the term of the partnership as highly confidential. This non-disclosure obligation survives the termination of the subscription for a period of five (5) years.</p>
              </section>

              <section className="space-y-6 border-t border-border pt-12">
                <h2 className="text-xl font-display font-medium text-foreground uppercase tracking-widest">10. Governance and Statutory Compliance</h2>
                <p>WebSync Digital is fully registered with the Corporate Affairs Commission (CAC) under RC 9470161. These terms are governed by the laws of Nigeria. Disputes that cannot be resolved through mutual mediation shall be referred to arbitration in Lagos, Nigeria.</p>
                <div className="pt-8 space-y-2 text-[10px] opacity-40 uppercase tracking-widest">
                  <p>Document ID: WS-TOS-2026-V1.4</p>
                  <p>Legal Entity: WebSync Digital Technology Ltd.</p>
                  <p>Status: Active / Legally Enforced</p>
                </div>
              </section>
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
