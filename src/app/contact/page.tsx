import type { Metadata } from "next";
import Link from "next/link";
import { MessageCircle, Mail, Phone, ArrowUpRight } from "lucide-react";
import Shell from "@/components/revamp/Shell";
import { enquiryUrl } from "@/data/projects";
import ContactBrief from "@/components/revamp/ContactBrief";
export const metadata: Metadata = {
  title: "Contact | WebSync Digital",
  description:
    "Talk to WebSync Digital about a business website, online store or custom software project.",
  alternates: { canonical: "/contact" },
};
export default function Contact() {
  return (
    <Shell>
      <section className="ws-section ws-container ha-contact-hero">
        <div>
          <span className="ws-eyebrow">LET’S TALK</span>
          <h1>
            Tell us what
            <br />
            you’re <em>building.</em>
          </h1>
          <p>
            A new website, an online store or software for your team. Start with
            the problem you want to solve.
          </p>
          <span className="ha-handnote">A conversation is a good start ↘</span>
        </div>
        <div className="ha-contact-options">
          {[
            {
              Icon: MessageCircle,
              t: "WhatsApp",
              d: "+234 911 171 9701",
              h: enquiryUrl,
            },
            {
              Icon: Mail,
              t: "Email",
              d: "digitalwebsync@gmail.com",
              h: "mailto:digitalwebsync@gmail.com",
            },
            {
              Icon: Phone,
              t: "Call",
              d: "+234 911 171 9701",
              h: "tel:+2349111719701",
            },
          ].map(({ Icon, t, d, h }) => (
            <a key={String(t)} href={String(h)}>
              <span>
                <Icon size={22} />
              </span>
              <div>
                <h3>{String(t)}</h3>
                <p>{String(d)}</p>
              </div>
              <ArrowUpRight size={20} />
            </a>
          ))}
        </div>
      </section>
      <section className="ws-section ha-contact-book" id="book">
        <div className="ws-container ha-contact-layout">
          <div>
            <span className="ws-eyebrow">YOUR PROJECT BRIEF</span>
            <h2>
              A few details.
              <br />
              <em>A clearer first conversation.</em>
            </h2>
            <p>
              Complete this short brief to open WhatsApp with your project
              details. You review and send the message yourself.
            </p>
            <ul className="ha-simple-list">
              <li>What you’re building</li>
              <li>What your customers or team need</li>
              <li>Your timing and priorities</li>
            </ul>
          </div>
          <ContactBrief />
        </div>
      </section>
    </Shell>
  );
}
