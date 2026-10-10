import Shell from "@/components/revamp/Shell";
import PriceGauge from "@/components/revamp/PriceGauge";
import ServiceTabs from "@/components/revamp/ServiceTabs";
import { Heading, FinalCTA } from "@/components/revamp/Sections";
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
    <Shell>
      <section className="ws-section ws-container ha-price-hero">
        <div>
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
        </div>
        <PriceGauge />
      </section>
      <section className="ws-section ws-container ha-pricing-explained">
        <Heading
          label="HOW PRICING WORKS"
          title="Understand the plan before you start."
        />
        <div className="ha-price-steps">
          {[
            [
              "01",
              "Share your goals",
              "Tell us what your website or software needs to do.",
            ],
            [
              "02",
              "Agree the scope",
              "Review the features, timeline and commercial terms.",
            ],
            [
              "03",
              "Choose the service",
              "Use the subscription or agree a custom project proposal.",
            ],
            [
              "04",
              "Build & support",
              "We deliver and support according to your agreement.",
            ],
          ].map(([n, t, p]) => (
            <article key={n}>
              <span>{n}</span>
              <h3>{t}</h3>
              <p>{p}</p>
            </article>
          ))}
        </div>
      </section>
      <section
        id="plans"
        className="ws-section ws-container ws-work-collection"
      >
        <Pricing />
      </section>
      <section className="ws-section ws-container">
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
      <section className="ws-section ws-container">
        <Heading
          label="FIND YOUR SERVICE"
          title="Choose what fits your next step."
        />
        <ServiceTabs />
      </section>
      <FinalCTA />
    </Shell>
  );
}
