import FounderCards from "@/components/revamp/FounderCards";
import type { Metadata } from "next";
import Link from "next/link";
import Shell from "@/components/revamp/Shell";
import { Heading, FinalCTA, Quality } from "@/components/revamp/Sections";
export const metadata: Metadata = {
  title: "About | WebSync Digital",
  description:
    "Meet the team behind WebSync Digital’s business websites and software.",
  alternates: { canonical: "/about" },
};
export default function About() {
  return (
    <Shell>
      <section className="ws-section ws-container ha-about-hero">
        <div>
          <span className="ws-eyebrow">ABOUT WEBSYNC</span>
          <h1>
            Good work.
            <br />
            Clear communication.
            <br />
            <em>A shared ambition.</em>
          </h1>
          <p>
            We’re a Nigerian team bringing website design, software development
            and ongoing support together for businesses.
          </p>
          <Link href="/work" className="ws-button ws-button-outline">
            Explore our work ↗
          </Link>
        </div>
        <div className="ha-story-card">
          <span>WebSync Digital</span>
          <b>
            Design.
            <br />
            Development.
            <br />
            <em>Support.</em>
          </b>
          <p>One team. From the first conversation to the next update.</p>
          <small>Based in Awka, Nigeria · RC 9470161</small>
        </div>
      </section>
      <section className="ws-section ws-container" id="vision">
        <Heading
          label="THE PEOPLE BEHIND THE WORK"
          title="A team you can work with."
          copy="Design, technical delivery and business operations, connected around the same project."
        />
        <FounderCards />
      </section>
      <Quality />
      <FinalCTA />
    </Shell>
  );
}
