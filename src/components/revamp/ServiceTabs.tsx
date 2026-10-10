"use client";
import { useRef, useState } from "react";
import Link from "next/link";
import { Check, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { services } from "@/data/services";
import ServiceArt from "./ServiceArt";
function scrollBehavior(): ScrollBehavior {
  return typeof window.matchMedia === "function" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ? "auto"
    : "smooth";
}
export default function ServiceTabs() {
  const [active, setActive] = useState(0);
  const list = useRef<HTMLDivElement>(null);
  const s = services[active];
  function select(index: number, focus = false) {
    setActive(index);
    const button =
      list.current?.querySelectorAll<HTMLButtonElement>('[role="tab"]')[index];
    button?.scrollIntoView({
      block: "nearest",
      inline: "nearest",
      behavior: scrollBehavior(),
    });
    if (focus) button?.focus();
  }
  return (
    <div className="ha-services">
      <div className="ha-tab-controls">
        <button
          aria-label="Scroll services left"
          onClick={() =>
            list.current?.scrollBy({ left: -300, behavior: scrollBehavior() })
          }
        >
          <ChevronLeft size={18} />
        </button>
        <div
          className="ha-tabs"
          role="tablist"
          aria-label="Services"
          ref={list}
        >
          {services.map((item, i) => (
            <button
              key={item.slug}
              id={`service-tab-${item.slug}`}
              role="tab"
              aria-selected={active === i}
              aria-controls="service-panel"
              tabIndex={active === i ? 0 : -1}
              onClick={() => select(i)}
              onKeyDown={(e) => {
                let next = i;
                if (e.key === "ArrowRight") next = (i + 1) % services.length;
                else if (e.key === "ArrowLeft")
                  next = (i - 1 + services.length) % services.length;
                else if (e.key === "Home") next = 0;
                else if (e.key === "End") next = services.length - 1;
                else return;
                e.preventDefault();
                select(next, true);
              }}
            >
              <span aria-hidden="true">↗</span>
              {item.name}
            </button>
          ))}
        </div>
        <button
          aria-label="Scroll services right"
          onClick={() =>
            list.current?.scrollBy({ left: 300, behavior: scrollBehavior() })
          }
        >
          <ChevronRight size={18} />
        </button>
      </div>
      <div
        className="ha-service-panel"
        role="tabpanel"
        id="service-panel"
        aria-labelledby={`service-tab-${s.slug}`}
      >
        <div>
          <span className="ws-eyebrow">{s.group}</span>
          <h3>{s.name}</h3>
          <p>{s.intro}</p>
          <div className="ha-feature-cta">
            <ul className="ws-checklist">
              {s.features.map((f) => (
                <li key={f}>
                  <Check size={16} />
                  {f}
                </li>
              ))}
            </ul>
            <div>
              <span className="ha-handnote">Let’s build your next step ↘</span>
              <Link
                className="ws-button ws-button-outline"
                href="/contact#book"
              >
                Discuss your project <ArrowRight size={16} />
              </Link>
            </div>
          </div>
          <div className="ha-service-facts">
            <div>
              <small>Pricing</small>
              <b>
                {s.slug === "business-website"
                  ? "From ₦9,999 / month"
                  : "Quoted for your scope"}
              </b>
            </div>
            <div>
              <small>Delivery</small>
              <b>
                {s.slug === "business-website"
                  ? "7–14 business days*"
                  : "Agreed before we start"}
              </b>
            </div>
          </div>
          <small className="ha-service-note">
            *Subscription timeline starts after required content is supplied.
            Subscription terms apply; custom work receives a separate proposal.
          </small>
          <div className="ws-actions">
            <Link href="/contact#book" className="ws-button">
              Let’s talk <ArrowRight size={16} />
            </Link>
            <Link href={`/services/${s.slug}`} className="ws-text-link">
              View details <ArrowRight size={16} />
            </Link>
          </div>
        </div>
        <ServiceArt kind={s.slug} />
      </div>
      <div className="ha-tab-bottom">
        <Link href="/pricing">Compare scope and pricing →</Link>
        <span>
          Not sure where to start?{" "}
          <Link href="/contact">Talk to our team.</Link>
        </span>
      </div>
    </div>
  );
}
