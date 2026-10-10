import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Check } from "lucide-react";
import { services } from "@/data/services";
import Shell from "@/components/revamp/Shell";
import ServiceArt from "@/components/revamp/ServiceArt";
import { Heading, Process, FinalCTA } from "@/components/revamp/Sections";
import FAQ from "@/components/revamp/FAQ";
export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const s = services.find((s) => s.slug === slug);
  return {
    title: `${s?.name || "Service"} | WebSync Digital`,
    description: s?.intro,
    alternates: { canonical: `/services/${slug}` },
  };
}
export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const s = services.find((s) => s.slug === slug);
  if (!s) notFound();
  return (
    <Shell>
      <section className="ws-section ws-container ha-split-hero">
        <div>
          <div className="ha-breadcrumb">
            <Link href="/">Home</Link>
            <span> / </span>
            <Link href="/#services">Services</Link>
            <span> / {s.name}</span>
          </div>
          <span className="ws-eyebrow">{s.group}</span>
          <h1>
            {s.name}.<br />
            <em>Built around your needs.</em>
          </h1>
          <p>{s.intro}</p>
          <div className="ws-actions">
            <Link href="/contact#book" className="ws-button">
              Discuss your project ↗
            </Link>
            <Link href="/pricing" className="ws-button ws-button-outline">
              Explore pricing
            </Link>
          </div>
        </div>
        <ServiceArt kind={s.slug} />
      </section>
      <section className="ws-section ha-service-inclusions">
        <div className="ws-container ha-contact-layout">
          <div>
            <span className="ws-eyebrow">IS THIS THE RIGHT FIT?</span>
            <h2>
              A clear purpose.
              <br />
              <em>A practical scope.</em>
            </h2>
            <p>{s.audience}.</p>
            <p>
              We confirm the features, content, integrations and delivery
              milestones before development begins.
            </p>
          </div>
          <div className="ha-inclusion-card">
            <h3>What we can scope together</h3>
            <ul className="ws-checklist">
              {s.features.map((f) => (
                <li key={f}>
                  <Check size={18} />
                  {f}
                </li>
              ))}
            </ul>
            <p>
              Business website subscriptions start at ₦9,999/month under the
              existing terms. Custom services are quoted separately.
            </p>
            <Link href="/terms" className="ws-text-link">
              Read service terms →
            </Link>
          </div>
        </div>
      </section>
      <Process />
      <section className="ws-section ws-container">
        <Heading
          label="QUESTIONS & ANSWERS"
          title="The details, before you begin."
        />
        <FAQ />
      </section>
      <FinalCTA />
    </Shell>
  );
}
