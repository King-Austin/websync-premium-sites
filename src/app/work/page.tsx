import Shell from "@/components/revamp/Shell";
import type { Metadata } from "next";
import Header from "@/components/revamp/Header";
import Footer from "@/components/revamp/Footer";
import Portfolio from "@/components/revamp/Portfolio";
export const metadata: Metadata = {
  title: "Our work | 19 client websites | WebSync Digital",
  description:
    "Explore WebSync Digital client websites across commerce, business services, hospitality, community and software.",
  alternates: { canonical: "/work" },
};
export default function Work() {
  return (
    <Shell>
      <section className="ws-section ws-container ws-page-intro">
        <span className="ws-eyebrow">OUR WORK</span>
        <h1>
          Different businesses.
          <br />
          <em>One thoughtful approach.</em>
        </h1>
        <p>
          19 websites built around what each business needs to communicate.
          Filter the collection and visit the live projects.
        </p>
      </section>
      <section
        className="ws-container ws-section ws-work-collection"
        aria-label="Client project collection"
      >
        <Portfolio />
      </section>
    </Shell>
  );
}
