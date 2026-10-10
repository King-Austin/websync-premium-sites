import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CalendarDays, ShieldCheck } from "lucide-react";
import Shell from "@/components/revamp/Shell";
import HeroStage from "@/components/revamp/HeroStage";
import ServiceTabs from "@/components/revamp/ServiceTabs";
import Portfolio from "@/components/revamp/Portfolio";
import FAQ from "@/components/revamp/FAQ";
import {
  Heading,
  ClientBands,
  Integrations,
  Process,
  Quality,
  JournalBand,
  FinalCTA,
} from "@/components/revamp/Sections";
export const metadata: Metadata = {
  title: "WebSync Digital | Websites & software for your business",
  description:
    "Business websites, online stores and custom software. Explore 19 client projects and our website subscription.",
  alternates: { canonical: "/" },
};
export default function Home() {
  return (
    <Shell>
      <section className="ha-hero">
        <div className="ws-container ha-hero-grid">
          <div className="ha-hero-copy">
            <div className="ha-availability">
              <span>
                <i /> Websites & business software
              </span>
              <small>
                <ShieldCheck size={15} /> Scope agreed before we build
              </small>
            </div>
            <h1>
              Get your business online
              <br />
              and turn interest into
              <br />
              <em>real enquiries.</em>
            </h1>
            <h2>
              We design and build business websites, online stores and software,
              with support that continues after launch.
            </h2>
            <p>
              A clear online presence for your customers. A connected workflow
              for your team. Built around what your business needs.
            </p>
            <div className="ws-actions">
              <Link className="ws-button" href="/contact#book">
                <CalendarDays size={17} /> Start a conversation
              </Link>
              <Link className="ws-button ws-button-outline" href="#services">
                Explore services <ArrowRight size={17} />
              </Link>
            </div>
          </div>
          <HeroStage />
        </div>
        <ClientBands />
      </section>
      <section className="ws-section ws-container" id="services">
        <Heading
          label="OUR SERVICES"
          title="Everything starts with what your business needs."
          copy="Choose the service that fits your next step. We’ll agree the scope, features and commercial terms with you."
        />
        <ServiceTabs />
      </section>
      <Integrations />
      <section className="ws-section ha-work-home" id="featured">
        <div className="ws-container">
          <Heading
            label="SELECTED WORK"
            title="Real websites. Real clients. Live projects."
            copy="Explore 19 client websites across commerce, energy, hospitality, business services and community."
          />
        </div>
        <Portfolio rail />
        <div className="ha-heading">
          <Link href="/work" className="ws-button ws-button-outline">
            Explore all 19 projects <ArrowRight size={17} />
          </Link>
        </div>
      </section>
      <section className="ha-conversion ws-container">
        <div>
          <h3>Your business could be our next project.</h3>
          <p>Tell us your goals and we’ll work out the right scope together.</p>
        </div>
        <div>
          <span className="ha-handnote">Let’s make your next move ↘</span>
          <Link href="/contact#book" className="ws-button">
            Start a conversation <ArrowRight size={16} />
          </Link>
        </div>
      </section>
      <section className="ws-section ha-startup-band">
        <div className="ws-container">
          <Heading
            label="FOR FOUNDERS & TEAMS"
            title="Building something beyond a website?"
            copy="From a first product to software for your operations, we help teams turn a defined need into a working build."
          />
          <Link href="/startups" className="ws-button ws-button-outline">
            Explore product builds <ArrowRight size={17} />
          </Link>
        </div>
      </section>
      <Process />
      <Quality />
      <JournalBand />
      <section className="ws-section ws-container" id="faq">
        <Heading
          label="QUESTIONS & ANSWERS"
          title="Still have questions? Let’s make it clear."
          copy="Straight answers on scope, pricing, timelines and support."
        />
        <FAQ />
        <div className="ha-faq-contact">
          <div>
            <h3>Didn’t find your answer?</h3>
            <p>Ask our team about your project and the service that fits.</p>
          </div>
          <Link href="/contact" className="ws-button">
            Ask us a question <ArrowRight size={17} />
          </Link>
        </div>
      </section>
      <FinalCTA />
    </Shell>
  );
}
