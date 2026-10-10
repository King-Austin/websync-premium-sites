"use client";
import { useId, useState } from "react";
import Link from "next/link";
import { Search, ArrowUpRight, Check } from "lucide-react";
const answers = [
  {
    q: "How much does a website cost?",
    category: "Pricing",
    a: "Our business website subscription starts at ₦9,999 per month with no setup fee. Online stores, custom software and larger builds receive a separate written quote based on their scope.",
    link: "/pricing",
    label: "See pricing and scope",
  },
  {
    q: "Is there a minimum commitment?",
    category: "Pricing",
    a: "The existing subscription terms specify a 36-month commitment. After that, the service continues monthly with 14 days’ notice for termination. Read the terms before subscribing.",
    link: "/terms",
    label: "Read the full terms",
  },
  {
    q: "How long does a website take?",
    category: "Timeline",
    a: "The existing subscription terms specify 7–14 business days after the required content is supplied. Custom projects receive their own timeline and milestones.",
    link: "/contact",
    label: "Discuss your timeline",
  },
  {
    q: "Will I own my website?",
    category: "Ownership",
    a: "WebSync retains the technical assets during the subscription. The existing terms describe an optional ₦399,000 buyout. Ownership for an outright or custom project is agreed in the written proposal.",
    link: "/terms",
    label: "Read ownership terms",
  },
  {
    q: "What happens after launch?",
    category: "Support",
    a: "The subscription includes managed hosting and technical care, text changes, image swaps and minor layout updates. Larger features are separately scoped.",
    link: "/services/website-care",
    label: "Explore website care",
  },
  {
    q: "Can you build a store or a business portal?",
    category: "Services",
    a: "Yes. Our work includes commerce, bookings and business software. Features, integrations, ownership and price are agreed in a separate proposal.",
    link: "/work",
    label: "Explore our projects",
  },
  {
    q: "What do you need from me?",
    category: "Services",
    a: "Your goals, brand assets, service or product information, contact details and any existing website. We use these to agree the scope and next steps.",
    link: "/contact",
    label: "Start a conversation",
  },
  {
    q: "Can you connect payment and other tools?",
    category: "Services",
    a: "Payment providers, WhatsApp journeys, analytics and APIs can be part of an agreed project. We confirm provider requirements and feature scope before development.",
    link: "/services/integrations",
    label: "Explore integrations",
  },
];
export default function FAQ() {
  const id = useId();
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [selected, setSelected] = useState(0);
  const filtered = answers
    .map((a, i) => ({ ...a, i }))
    .filter(
      (a) =>
        (category === "All" || a.category === category) &&
        a.q.toLowerCase().includes(search.toLowerCase()),
    );
  const active = filtered.find((a) => a.i === selected) || filtered[0];
  return (
    <div className="ha-faq">
      <label className="ha-search">
        <Search size={18} />
        <input
          type="search"
          aria-label="Search questions"
          placeholder="What would you like to know?"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </label>
      <div className="ws-filters" aria-label="Filter questions">
        {["All", "Pricing", "Timeline", "Ownership", "Support", "Services"].map(
          (c) => (
            <button
              key={c}
              aria-pressed={category === c}
              onClick={() => setCategory(c)}
            >
              {c}
            </button>
          ),
        )}
      </div>
      <div className="ha-faq-grid">
        <div className="ha-questions">
          {filtered.map((a) => (
            <button
              key={a.q}
              aria-expanded={active?.i === a.i}
              aria-controls={`${id}-answer`}
              onClick={() => setSelected(a.i)}
            >
              <span>{String(a.i + 1).padStart(2, "0")}</span>
              {a.q}
              <ArrowUpRight size={16} />
            </button>
          ))}
          {filtered.length === 0 && (
            <p role="status">
              No questions match. Try another search or contact us.
            </p>
          )}
        </div>
        <div
          className="ha-answer"
          id={`${id}-answer`}
          role="region"
          aria-label="Answer"
        >
          {active ? (
            <>
              <div className="ha-answer-top">
                <b>WebSync Digital</b>
                <span>{active.category}</span>
                <small>
                  <Check size={12} /> Answered
                </small>
              </div>
              <h3>{active.q}</h3>
              <p>{active.a}</p>
              <Link href={active.link} className="ws-text-link">
                {active.label}
                <ArrowUpRight size={16} />
              </Link>
              <div className="ha-followups">
                <small>You might also ask</small>
                {filtered
                  .filter((a) => a.i !== active.i)
                  .slice(0, 2)
                  .map((a) => (
                    <button key={a.q} onClick={() => setSelected(a.i)}>
                      {a.q} →
                    </button>
                  ))}
              </div>
            </>
          ) : (
            <p>We’re a message away if you need an answer.</p>
          )}
        </div>
      </div>
    </div>
  );
}
