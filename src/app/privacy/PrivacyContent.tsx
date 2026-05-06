"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function PrivacyPage() {
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
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold mb-12">Privacy Policy</h1>
            
            <div className="space-y-16 font-body text-muted-foreground leading-relaxed text-sm md:text-base">
              <section className="space-y-6">
                <h2 className="text-xl font-display font-medium text-foreground uppercase tracking-widest border-b border-border pb-4">1. Introduction and Scope</h2>
                <p>WebSync Digital (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is committed to protecting the privacy and security of your personal data. This Privacy Policy outlines how we collect, process, store, and protect information pertaining to individuals who interact with our platform, official websites, and subscription services.</p>
                <p>As a fully registered legal entity in Nigeria (RC 9470161), we adhere to the Nigerian Data Protection Regulation (NDPR) and other applicable data protection laws. This policy applies to all users of our digital infrastructure, including prospective clients, active subscribers, and general visitors.</p>
              </section>

              <section className="space-y-6">
                <h2 className="text-xl font-display font-medium text-foreground uppercase tracking-widest border-b border-border pb-4">2. The Data We Collect</h2>
                <div className="space-y-4">
                  <p>In order to provide our premium digital services, we may collect and process various categories of personal data, which we have meticulously categorized as follows:</p>
                  <ul className="list-disc pl-6 space-y-3">
                    <li><strong>Identity Data:</strong> includes first name, maiden name, last name, username or similar identifier, marital status, title, date of birth, and gender.</li>
                    <li><strong>Contact Data:</strong> includes billing address, delivery address, email address, and telephone numbers.</li>
                    <li><strong>Financial Data:</strong> While we never store raw card details (which are processed exclusively via Paystack), we may collect transaction references and status information.</li>
                    <li><strong>Transactional Data:</strong> includes details about payments to and from you and other details of products and services you have purchased from us.</li>
                    <li><strong>Technical Data:</strong> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access this website.</li>
                    <li><strong>Profile Data:</strong> includes your username and password, purchases or orders made by you, your interests, preferences, feedback, and survey responses.</li>
                    <li><strong>Usage Data:</strong> includes information about how you use our website, products, and services.</li>
                    <li><strong>Marketing and Communications Data:</strong> includes your preferences in receiving marketing from us and our third parties and your communication preferences.</li>
                  </ul>
                </div>
              </section>

              <section className="space-y-6">
                <h2 className="text-xl font-display font-medium text-foreground uppercase tracking-widest border-b border-border pb-4">3. Payment & Infrastructure Security</h2>
                <div className="p-6 bg-secondary/30 rounded-2xl border border-border space-y-4">
                  <h3 className="text-foreground font-bold uppercase tracking-wider text-xs">A. Paystack Integration</h3>
                  <p>All ₦9,999/month automated subscriptions are processed via Paystack.com. We implement high-fidelity secure webhooks to manage subscription lifecycles without ever gaining direct access to your primary bank credentials or sensitive card CVV/PIN data.</p>
                  <h3 className="text-foreground font-bold uppercase tracking-wider text-xs">B. PCI DSS Compliance</h3>
                  <p>WebSync Digital utilizes payment infrastructure that is PCI DSS Level 1 certified. This is the highest security standard in the global payments industry, ensuring that all payment instructions are handled in a vault-like environment protected by multi-factor authentication and bank-grade encryption.</p>
                  <h3 className="text-foreground font-bold uppercase tracking-wider text-xs">C. Encryption Protocols</h3>
                  <p>All data transmitted between your browser and our servers is protected by modern Transport Layer Security (TLS 1.3) encryption, preventing intermediate interception of data packets.</p>
                </div>
              </section>

              <section className="space-y-6">
                <h2 className="text-xl font-display font-medium text-foreground uppercase tracking-widest border-b border-border pb-4">4. How We Use Your Data</h2>
                <p>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <h4 className="text-foreground font-bold text-sm">Performance of Contract:</h4>
                    <p className="text-xs">Processing data necessary for the initiation and maintenance of your digital footprint, domain registration, and hosting services.</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-foreground font-bold text-sm">Legitimate Interests:</h4>
                    <p className="text-xs">For our legitimate interests (or those of a third party) where your interests and fundamental rights do not override those interests.</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-foreground font-bold text-sm">Legal Obligation:</h4>
                    <p className="text-xs">Where we need to comply with a legal or regulatory obligation in the Federal Republic of Nigeria.</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-foreground font-bold text-sm">Fraud Prevention:</h4>
                    <p className="text-xs">To protect our platform and your digital assets from unauthorized access, automated scrapers, and malicious intrusion.</p>
                  </div>
                </div>
              </section>

              <section className="space-y-6">
                <h2 className="text-xl font-display font-medium text-foreground uppercase tracking-widest border-b border-border pb-4">5. Disclosures and Third Parties</h2>
                <p>We may share your personal data with the parties set out below for the purposes set out in Section 4 above:</p>
                <ul className="list-disc pl-6 space-y-4">
                  <li><strong>Service Providers:</strong> IT and system administration service providers in Nigeria, Europe, and North America (e.g., Cloudflare, Amazon Web Services).</li>
                  <li><strong>Professional Advisers:</strong> Auditors, lawyers, bankers, and insurers who provide consultancy, banking, legal, insurance, and accounting services.</li>
                  <li><strong>Regulators:</strong> Nigerian Corporate Affairs Commission (CAC) and other authorities who require reporting of processing activities in certain circumstances.</li>
                  <li><strong>Payment Processors:</strong> Paystack Payments Limited for the secure execution of automated recurring billing.</li>
                </ul>
              </section>

              <section className="space-y-6">
                <h2 className="text-xl font-display font-medium text-foreground uppercase tracking-widest border-b border-border pb-4">6. Data Retention and Deletion</h2>
                <p>We will only retain your personal data for as long as necessary to fulfil the purposes we collected it for, including for the purposes of satisfying any legal, accounting, or reporting requirements.</p>
                <p>To determine the appropriate retention period for personal data, we consider the amount, nature, and sensitivity of the personal data, the potential risk of harm from unauthorised use or disclosure of your personal data, the purposes for which we process your personal data and whether we can achieve those purposes through other means.</p>
                <p>By law we have to keep basic information about our customers (including Contact, Identity, Financial and Transaction Data) for six years after they cease being customers for tax and legal purposes.</p>
              </section>

              <section className="space-y-6">
                <h2 className="text-xl font-display font-medium text-foreground uppercase tracking-widest border-b border-border pb-4">7. Your Legal Rights under NDPR</h2>
                <p>Under the Nigerian Data Protection Regulation, you have the following irrevocable rights in relation to your personal data:</p>
                <div className="space-y-4 bg-secondary/20 p-8 rounded-3xl">
                  <div className="flex gap-4">
                    <span className="text-primary font-bold">01.</span>
                    <p><strong>Request access</strong> to your personal data (commonly known as a &quot;data subject access request&quot;). This enables you to receive a copy of the personal data we hold about you.</p>
                  </div>
                  <div className="flex gap-4 border-t border-border/50 pt-4">
                    <span className="text-primary font-bold">02.</span>
                    <p><strong>Request correction</strong> of the personal data that we hold about you. This enables you to have any incomplete or inaccurate data we hold about you corrected.</p>
                  </div>
                  <div className="flex gap-4 border-t border-border/50 pt-4">
                    <span className="text-primary font-bold">03.</span>
                    <p><strong>Request erasure</strong> of your personal data. This enables you to ask us to delete or remove personal data where there is no good reason for us continuing to process it.</p>
                  </div>
                  <div className="flex gap-4 border-t border-border/50 pt-4">
                    <span className="text-primary font-bold">04.</span>
                    <p><strong>Object to processing</strong> of your personal data where we are relying on a legitimate interest and there is something about your particular situation which makes you want to object.</p>
                  </div>
                </div>
              </section>

              <section className="space-y-6">
                <h2 className="text-xl font-display font-medium text-foreground uppercase tracking-widest border-b border-border pb-4">8. Cookies and Analytics</h2>
                <p>Our website utilizes cookies and similar tracking technologies to enhance your browsing experience and analyze our traffic. You can set your browser to refuse all or some browser cookies, or to alert you when websites set or access cookies. If you disable or refuse cookies, please note that some parts of this website may become inaccessible or not function properly.</p>
              </section>

              <section className="space-y-6 border-t border-border pt-12">
                <h2 className="text-xl font-display font-medium text-foreground uppercase tracking-widest">9. Contact and Statutory Information</h2>
                <p>If you have any questions about this privacy policy or our privacy practices, please contact our Data Protection Compliance Team:</p>
                <div className="space-y-1 font-bold text-foreground">
                  <p>Email: digitalwebsync@gmail.com</p>
                  <p>Phone: +2349111719701</p>
                  <p>Registration No: RC 9470161</p>
                  <p>WebSync Digital Technology Ltd.</p>
                </div>
                <p className="text-[10px] italic opacity-50 uppercase tracking-widest mt-8">Last Updated: April 2026</p>
              </section>
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
