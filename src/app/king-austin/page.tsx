import BuilderBand from "@/components/revamp/BuilderBand";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Linkedin,
  Globe,
  Layers3,
  Code2,
  Workflow,
  Check,
} from "lucide-react";
import Shell from "@/components/revamp/Shell";
import { Heading, FinalCTA } from "@/components/revamp/Sections";
export const metadata: Metadata = {
  title: "King Austin | Co-Founder & COO, WebSync Digital",
  description:
    "Meet King Austin (Nworah Ebuka), WebSync Digital co-founder and COO. Explore his focus on backend systems, business software and practical product delivery.",
  alternates: { canonical: "/king-austin" },
};
const projects = [
  {
    name: "RMIS",
    kind: "Business operations",
    text: "Property records, customer information, payments and commissions brought into one operational system.",
    href: "https://rmis.com.ng/",
    icon: Workflow,
  },
  {
    name: "Smart Classroom Attendance",
    kind: "Software meets the physical world",
    text: "An attendance project exploring identity, location and proximity checks, with a mobile experience and a faculty dashboard.",
    href: "https://github.com/King-Austin/Smart_Classroom_Attendance",
    icon: Layers3,
  },
  {
    name: "Backend & transaction systems",
    kind: "Engineering focus",
    text: "APIs, data models and transaction middleware, with attention to access control and sensitive-data handling.",
    href: "https://www.linkedin.com/in/amkingaustin/",
    icon: Code2,
  },
];
export default function KingAustin() {
  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Nworah Ebuka",
    alternateName: "King Austin",
    jobTitle: "Co-Founder & COO",
    url: "https://www.websyncdigital.com.ng/king-austin",
    image: "https://www.websyncdigital.com.ng/assets/king-austin-new.jpg",
    sameAs: [
      "https://nworahebuka.com.ng/",
      "https://www.linkedin.com/in/amkingaustin/",
    ],
    worksFor: { "@type": "Organization", name: "WebSync Digital" },
  };
  return (
    <Shell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(person).replace(/</g, "\\u003c"),
        }}
      />
      <section className="ws-section ws-container ha-king-hero">
        <div>
          <span className="ws-eyebrow">THE BUILDER BEHIND THE BUSINESS</span>
          <h1>
            King Austin.
            <br />
            <em>Ideas into systems.</em>
          </h1>
          <p className="ha-king-role">
            Nworah Ebuka · Co-Founder & COO, WebSync Digital
          </p>
          <p>
            A backend-focused builder connecting software engineering with the
            everyday needs of a business. His focus spans APIs, operational
            tools and products that people can use.
          </p>
          <div className="ws-actions">
            <a
              href="https://nworahebuka.com.ng/"
              className="ws-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Globe size={17} /> Personal portfolio
            </a>
            <a
              href="https://www.linkedin.com/in/amkingaustin/"
              className="ws-button ws-button-outline"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={17} /> Connect on LinkedIn
            </a>
          </div>
        </div>
        <div className="ha-king-portrait">
          <Image
            src="/assets/king-austin-new.jpg"
            alt="King Austin, WebSync Digital co-founder and COO"
            width={560}
            height={580}
            priority
            sizes="(max-width: 767px) 90vw, 40vw"
          />
          <div className="ha-king-build-label">
            <Code2 size={18} />
            <span>Engineering + operations</span>
          </div>
        </div>
      </section>
      <BuilderBand />
      <section className="ws-section ws-container">
        <Heading
          label="PROOF THROUGH THE WORK"
          title="Systems built around real problems."
          copy="Selected work and technical interests from his public professional profile. Explore the project or connect to discuss the engineering behind it."
        />
        <div className="ha-king-projects">
          {projects.map((p) => (
            <article key={p.name}>
              <p.icon size={28} />
              <span>{p.kind}</span>
              <h3>{p.name}</h3>
              <p>{p.text}</p>
              <a href={p.href} target="_blank" rel="noopener noreferrer">
                Explore the work <ArrowUpRight size={16} />
              </a>
            </article>
          ))}
        </div>
      </section>
      <section className="ws-section ws-container ha-builder-journey">
        <Heading
          label="THE BUILDING JOURNEY"
          title="Engineering roots. A founder’s direction."
          copy="A foundation in engineering, followed by applied software and business building."
        />
        <ol className="ha-king-timeline">
          {[
            [
              "01",
              "Engineering foundation",
              "Nnamdi Azikiwe University",
              "Electronics and computer engineering inform an interest in software, embedded systems and automation.",
            ],
            [
              "02",
              "Applied software",
              "Tools for real workflows",
              "Attendance and business operations projects bring data, user access and reporting together.",
            ],
            [
              "03",
              "Business systems",
              "RMIS · 2026",
              "Real estate management work connects property, customer and payment workflows.",
            ],
            [
              "04",
              "Company building",
              "WebSync Digital",
              "As co-founder and COO, King Austin brings a builder’s perspective to delivery and business operations.",
            ],
          ].map(([number, title, label, text]) => (
            <li key={number}>
              <span>{number}</span>
              <div>
                <small>{label}</small>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>
      <section className="ws-section ws-container ha-king-founder-note">
        <div>
          <span className="ws-eyebrow">FOR CLIENTS, PARTNERS & INVESTORS</span>
          <h2>
            Start with the work.
            <br />
            <em>Then talk about what’s next.</em>
          </h2>
        </div>
        <div>
          <p>
            For a new product or an operational system, start with the problem,
            the people using it and a clear scope. Review WebSync’s live
            projects and registration, then discuss the next step with the team.
          </p>
          <div className="ws-actions">
            <Link href="/work" className="ws-button ws-button-outline">
              Explore WebSync projects <ArrowUpRight size={16} />
            </Link>
            <Link href="/contact#book" className="ws-text-link">
              Discuss a build or partnership ↗
            </Link>
          </div>
          <small>
            Project context:{" "}
            <a
              href="https://www.linkedin.com/in/amkingaustin/"
              target="_blank"
              rel="noopener noreferrer"
            >
              King Austin’s public LinkedIn profile
            </a>
            .
          </small>
        </div>
      </section>
      <FinalCTA />
    </Shell>
  );
}
