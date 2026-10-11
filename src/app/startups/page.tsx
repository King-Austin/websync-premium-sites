import type { Metadata } from "next";
import Link from "next/link";
import Shell from "@/components/revamp/Shell";
import ServiceArt from "@/components/revamp/ServiceArt";
import { Heading, Process, FinalCTA } from "@/components/revamp/Sections";
export const metadata: Metadata = {
  title: "Product & software builds | WebSync Digital",
  description:
    "Scope a product, portal or business software project with WebSync Digital.",
  alternates: { canonical: "/startups" },
};
export default function Startups() {
  return (
    <Shell>
      <section className="ws-section ws-container ha-split-hero">
        <div>
          <span className="ws-eyebrow">FOR FOUNDERS & TEAMS</span>
          <h1>
            From a clear idea
            <br />
            to a <em>working product.</em>
          </h1>
          <p>
            Start with the workflow your users need. We’ll help you define a
            focused build, agree the milestones and develop the software.
          </p>
          <Link href="/contact#book" className="ws-button">
            Discuss your product ↗
          </Link>
        </div>
        <ServiceArt kind="web-app" />
      </section>
      <section className="ws-section ws-container">
        <Heading
          label="WAYS WE CAN HELP"
          title="Build around the need, then grow the scope."
        />
        <div className="ha-quality-grid">
          {[
            [
              "A first product",
              "Agree the smallest useful release around a real customer problem.",
            ],
            [
              "A business portal",
              "Connect roles, data and reporting around your operations.",
            ],
            [
              "The next iteration",
              "Audit an existing product and scope the improvements that matter.",
            ],
          ].map(([t, p]) => (
            <article key={t}>
              <h3>{t}</h3>
              <p>{p}</p>
            </article>
          ))}
        </div>
        <p className="ha-scope-note">
          Engagement terms, ownership, fees and support are agreed in the
          written proposal.
        </p>
      </section>
      <Process />
      <FinalCTA />
    </Shell>
  );
}
