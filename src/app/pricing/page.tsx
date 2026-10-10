import Reveal from "@/components/revamp/Reveal";
import type { Metadata } from "next";
import Header from "@/components/revamp/Header";
import Footer from "@/components/revamp/Footer";
import Pricing from "@/components/revamp/Pricing";
import FAQ from "@/components/revamp/FAQ";
export const metadata: Metadata = {
  title: "Website subscription & custom projects | WebSync Digital",
  description:
    "Explore the ₦9,999/month website subscription with its scope, commitment and ownership terms, or request a custom project quote.",
  alternates: { canonical: "/pricing" },
};
export default function PricingPage() {
  return (
    <div className="ws-site">
      <Header />
      <Reveal />
      <main id="main-content">
        <section className="ws-section ws-container ws-page-intro">
          <span className="ws-eyebrow">PRICING & SCOPE</span>
          <h1>
            A clear plan.
            <br />
            <em>A confident next step.</em>
          </h1>
          <p>
            Understand what is included, what is quoted separately and the terms
            that apply before you start.
          </p>
        </section>
        <section className="ws-section ws-container ws-work-collection">
          <Pricing />
        </section>
        <section className="ws-section ws-container ws-faq-section">
          <div>
            <span className="ws-eyebrow">THE DETAILS</span>
            <h2>
              Know what
              <br />
              <em>you’re signing up for.</em>
            </h2>
          </div>
          <FAQ />
        </section>
      </main>
      <Footer />
    </div>
  );
}
