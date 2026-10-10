import Reveal from "@/components/revamp/Reveal";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowUpRight,
  Check,
  Globe,
  ShoppingBag,
  Workflow,
  Wrench,
  ArrowRight,
} from "lucide-react";
import Header from "@/components/revamp/Header";
import Footer from "@/components/revamp/Footer";
import InterfaceStage from "@/components/revamp/InterfaceStage";
import Portfolio from "@/components/revamp/Portfolio";
import Pricing from "@/components/revamp/Pricing";
import FAQ from "@/components/revamp/FAQ";
import { enquiryUrl } from "@/data/projects";
export const metadata: Metadata = {
  title: "WebSync Digital | Websites that work for your business",
  description:
    "Business websites, online stores and custom software. Explore 19 client projects and our ₦9,999/month website subscription.",
  alternates: { canonical: "/" },
};
const services = [
  {
    icon: Globe,
    title: "Business websites",
    copy: "Give your business a clear, credible home online. Show what you do and make the next step easy.",
    label: "A place to be found",
    kind: "website",
  },
  {
    icon: ShoppingBag,
    title: "Online stores & booking",
    copy: "Help customers explore products, request orders or book services through a clear customer journey.",
    label: "From browsing to action",
    kind: "commerce",
  },
  {
    icon: Workflow,
    title: "Custom business software",
    copy: "Bring disconnected processes into one workspace, with the workflows and integrations your team needs.",
    label: "Built around your workflow",
    kind: "software",
  },
  {
    icon: Wrench,
    title: "Website care & support",
    copy: "Keep your website current with content updates, technical care and a team you can reach.",
    label: "A team that stays with you",
    kind: "care",
  },
];
export default function Home() {
  return (
    <div className="ws-site">
      <Header />
      <Reveal />
      <main id="main-content">
        <section className="ws-hero ws-container" id="hero">
          <div className="ws-hero-copy">
            <span className="ws-eyebrow">
              <span /> YOUR BUSINESS. BETTER ONLINE.
            </span>
            <h1>
              Good websites.
              <br />
              <em>Real possibilities.</em>
            </h1>
            <p>
              We build websites, online stores and business software that make
              your next step easier. Designed for your customers. Supported by
              our team.
            </p>
            <div className="ws-actions">
              <a
                className="ws-button"
                href={enquiryUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Let’s build your website <ArrowUpRight size={18} />
              </a>
              <Link href="#featured" className="ws-text-link">
                Explore our work <ArrowRight size={17} />
              </Link>
            </div>
            <div className="ws-hero-offer">
              <span className="ws-offer-mark">↗</span>
              <div>
                <strong>Website subscriptions from ₦9,999/month</strong>
                <small>
                  ₦0 setup fee · hosting & care included ·{" "}
                  <Link href="/pricing">view scope and terms</Link>
                </small>
              </div>
            </div>
          </div>
          <InterfaceStage />
        </section>
        <div className="ws-proof-strip">
          <div className="ws-container">
            <span>
              Real work.
              <br />
              <b>Different ambitions.</b>
            </span>
            {[
              "Dynamo Group",
              "De Angelika",
              "ICFM Africa",
              "MaryJane Fashion",
              "Trinitino Consult",
            ].map((name) => (
              <strong key={name}>{name}</strong>
            ))}
          </div>
        </div>
        <section className="ws-section ws-container" id="featured">
          <div className="ws-heading-row">
            <div>
              <span className="ws-eyebrow">SELECTED WORK</span>
              <h2>
                Built for businesses.
                <br />
                <em>Made to be used.</em>
              </h2>
            </div>
            <div>
              <p>
                Different industries. Different challenges.
                <br />A clear purpose behind every website.
              </p>
              <Link href="/work" className="ws-text-link">
                See all 19 projects <ArrowUpRight size={18} />
              </Link>
            </div>
          </div>
          <Portfolio featured />
        </section>
        <section className="ws-section ws-tint" id="services">
          <div className="ws-container">
            <div className="ws-heading-row">
              <div>
                <span className="ws-eyebrow">WHAT WE DO</span>
                <h2>
                  Your next chapter,
                  <br />
                  <em>built with care.</em>
                </h2>
              </div>
              <p>
                A first website, a new storefront or software
                <br />
                for your team. Let’s build what you need.
              </p>
            </div>
            <div className="ws-service-grid">
              {services.map((s) => (
                <article className="ws-service" key={s.title}>
                  <div
                    className={`ws-service-art ws-art-${s.kind}`}
                    aria-hidden="true"
                  >
                    <s.icon size={26} />
                    <div className="ws-art-lines">
                      <i />
                      <i />
                      <i />
                    </div>
                    <span>{s.label}</span>
                    <b>
                      <Check size={16} />
                    </b>
                  </div>
                  <h3>{s.title}</h3>
                  <p>{s.copy}</p>
                  <a
                    href={enquiryUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ws-text-link"
                  >
                    Talk about your project <ArrowUpRight size={16} />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section className="ws-section ws-container ws-included">
          <div>
            <span className="ws-eyebrow">MORE THAN A LAUNCH</span>
            <h2>
              A website.
              <br />
              And the people
              <br />
              <em>behind it.</em>
            </h2>
            <p>
              You don’t need to manage everything alone. Our website
              subscription brings design, hosting and ongoing care into one
              service.
            </p>
            <Link href="/pricing" className="ws-text-link">
              Explore the subscription <ArrowUpRight size={18} />
            </Link>
          </div>
          <div className="ws-included-grid">
            {[
              [
                "01",
                "Designed for your business",
                "A responsive website with an agreed page scope and a clear customer journey.",
              ],
              [
                "02",
                "Hosting, handled",
                "Managed hosting and technical care, with one team responsible for your website.",
              ],
              [
                "03",
                "Room for updates",
                "Text changes, image swaps and minor layout adjustments as your business evolves.",
              ],
              [
                "04",
                "Help within reach",
                "A direct WhatsApp support channel. Bigger features receive their own agreed scope.",
              ],
            ].map(([n, t, d]) => (
              <article key={n}>
                <span>{n}</span>
                <h3>{t}</h3>
                <p>{d}</p>
              </article>
            ))}
          </div>
        </section>
        <section className="ws-section ws-dark" id="process">
          <div className="ws-container">
            <div className="ws-heading-row">
              <div>
                <span className="ws-eyebrow">HOW IT WORKS</span>
                <h2>
                  From “we need a website”
                  <br />
                  to <em>“we’re live.”</em>
                </h2>
              </div>
              <p>
                Clear milestones. A shared direction.
                <br />
                You know what happens next.
              </p>
            </div>
            <div className="ws-process">
              {[
                [
                  "01",
                  "Tell us your story",
                  "We learn about your customers, goals and what you need the website to do.",
                ],
                [
                  "02",
                  "Agree the plan",
                  "We confirm the content, scope, timeline and commercial terms before starting.",
                ],
                [
                  "03",
                  "Build & refine",
                  "We design and develop, then work through your feedback before launch.",
                ],
                [
                  "04",
                  "Launch & look after it",
                  "We publish your website and support it according to your agreed service.",
                ],
              ].map(([n, t, d]) => (
                <article key={n}>
                  <span>{n}</span>
                  <h3>{t}</h3>
                  <p>{d}</p>
                </article>
              ))}
            </div>
            <p className="ws-process-note">
              Standard subscription timeline: 7–14 business days after required
              content is supplied. Custom projects have their own milestones.
            </p>
          </div>
        </section>
        <section className="ws-section ws-container ws-portal-section">
          <InterfaceStage portal />
          <div>
            <span className="ws-eyebrow">YOUR CLIENT WORKSPACE</span>
            <h2>
              Less chasing.
              <br />
              <em>More clarity.</em>
            </h2>
            <p>
              Stay connected to your project through WebSync’s client portal. A
              shared place for project communication, requests and billing.
            </p>
            <ul className="ws-checklist">
              <li>
                <Check size={17} />
                Project visibility
              </li>
              <li>
                <Check size={17} />
                Update requests and communication
              </li>
              <li>
                <Check size={17} />
                Centralised billing
              </li>
            </ul>
            <a
              className="ws-button ws-button-outline"
              href="https://app.websyncdigital.com.ng"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open client portal <ArrowUpRight size={18} />
            </a>
            <small>
              Illustration shows demo content. Sign in to access your workspace.
            </small>
          </div>
        </section>
        <section className="ws-section ws-tint" id="portfolio">
          <div className="ws-container">
            <div className="ws-heading-row">
              <div>
                <span className="ws-eyebrow">THE PROJECT COLLECTION</span>
                <h2>
                  19 websites.
                  <br />
                  <em>19 different stories.</em>
                </h2>
              </div>
              <p>
                Explore the websites we built for our clients.
                <br />
                Open any project to see it for yourself.
              </p>
            </div>
            <Portfolio />
          </div>
        </section>
        <section className="ws-section ws-container" id="pricing">
          <div className="ws-centered">
            <span className="ws-eyebrow">A CLEAR STARTING POINT</span>
            <h2>
              Built to fit your business.
              <br />
              <em>Priced with the details in view.</em>
            </h2>
            <p>
              Choose ongoing website care, or talk to us about a custom build.
            </p>
          </div>
          <Pricing />
        </section>
        <section className="ws-section ws-tint" id="vision">
          <div className="ws-container ws-team">
            <div>
              <span className="ws-eyebrow">THE PEOPLE BEHIND THE WORK</span>
              <h2>
                Small team.
                <br />
                <em>Shared ambition.</em>
              </h2>
              <p>
                We’re WebSync Digital, a Nigerian team building websites and
                software for businesses with somewhere to go. We bring design,
                development and ongoing support together.
              </p>
              <Link href="/contact" className="ws-text-link">
                Meet your next build partner <ArrowUpRight size={18} />
              </Link>
            </div>
            <div className="ws-people">
              {[
                [
                  "West Taylor",
                  "CEO & Founder",
                  "/assets/west_profile_updated.jpg",
                ],
                [
                  "King Austin",
                  "COO & Co-Founder",
                  "/assets/king-austin-new.jpg",
                ],
              ].map(([name, role, img]) => (
                <figure key={name}>
                  <Image src={img} alt={name} width={360} height={420} />
                  <figcaption>
                    <b>{name}</b>
                    <span>{role}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
        <section className="ws-section ws-container ws-feedback">
          <div>
            <span className="ws-eyebrow">CLIENT FEEDBACK</span>
            <h2>
              The work matters.
              <br />
              <em>So does the relationship.</em>
            </h2>
            <p>
              Existing client feedback from our real estate work. Explore the
              project alongside the original feedback.
            </p>
            <a
              className="ws-text-link"
              href="https://www.dynamogroup.com.ng"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Dynamo Group <ArrowUpRight size={18} />
            </a>
          </div>
          <a
            href="/assets/real-estate-testimonial.png"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Read original client feedback image in a new tab"
          >
            <Image
              src="/assets/real-estate-testimonial.png"
              alt="Existing real estate client feedback supplied by WebSync Digital"
              width={600}
              height={700}
              className="ws-feedback-image"
            />
          </a>
        </section>
        <section className="ws-section ws-container ws-faq-section" id="faq">
          <div>
            <span className="ws-eyebrow">BEFORE WE BEGIN</span>
            <h2>
              A few things
              <br />
              <em>you might ask.</em>
            </h2>
            <p>Still have a question? We’re a message away.</p>
            <a
              href={enquiryUrl}
              className="ws-text-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ask our team <ArrowUpRight size={18} />
            </a>
          </div>
          <FAQ />
        </section>
        <section className="ws-final">
          <div className="ws-container">
            <span className="ws-eyebrow">YOUR NEXT CHAPTER STARTS HERE</span>
            <h2>
              Let’s make something
              <br />
              <em>good for your business.</em>
            </h2>
            <p>
              Tell us what you’re building. We’ll help you find a clear next
              step.
            </p>
            <a
              href={enquiryUrl}
              className="ws-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              Start a conversation <ArrowUpRight size={19} />
            </a>
            <a
              href="mailto:digitalwebsync@gmail.com"
              className="ws-final-email"
            >
              Or email digitalwebsync@gmail.com
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
