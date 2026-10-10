import Link from "next/link";
import { Check, ArrowUpRight } from "lucide-react";
import { enquiryUrl } from "@/data/projects";
export default function Pricing() {
  return (
    <div className="ws-pricing-grid">
      <article className="ws-price ws-price-primary">
        <span className="ws-tag">THE WEBSITE SUBSCRIPTION</span>
        <h3>
          A great website.
          <br />A manageable monthly fee.
        </h3>
        <div className="ws-price-number">
          ₦9,999<span>/month</span>
        </div>
        <p>₦0 setup fee. Design, hosting and ongoing care in one service.</p>
        <ul>
          {[
            "Responsive business website",
            "Managed hosting",
            "Initial search engine setup",
            "Text, image and minor layout updates",
            "WhatsApp technical support",
          ].map((f) => (
            <li key={f}>
              <Check size={16} />
              {f}
            </li>
          ))}
        </ul>
        <a
          className="ws-button"
          href={enquiryUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Discuss the subscription <ArrowUpRight size={18} />
        </a>
        <p className="ws-price-terms">
          Existing terms specify a 36-month commitment. WebSync retains the
          technical assets during subscription; an optional ₦399,000 buyout is
          described in the terms. Launch: 7–14 business days after content is
          supplied. <Link href="/terms">Read the full terms →</Link>
        </p>
      </article>
      <article className="ws-price">
        <span className="ws-tag">CUSTOM PROJECTS</span>
        <h3>
          Something bigger
          <br />
          in mind?
        </h3>
        <div className="ws-custom-art" aria-hidden="true">
          <span>Website</span>
          <i />
          <span>Your workflow</span>
          <i />
          <span>Custom software</span>
        </div>
        <p>
          Online stores, booking platforms and business software deserve a scope
          built around what you need.
        </p>
        <ul>
          {[
            "Requirements and workflow discovery",
            "A tailored project proposal",
            "Clear scope, milestones and ownership",
            "Integrations agreed before development",
          ].map((f) => (
            <li key={f}>
              <Check size={16} />
              {f}
            </li>
          ))}
        </ul>
        <a
          className="ws-button ws-button-outline"
          href="https://wa.me/2349111719701?text=Hello%20WebSync%2C%20I%20would%20like%20a%20quote%20for%20a%20custom%20project."
          target="_blank"
          rel="noopener noreferrer"
        >
          Get a project quote <ArrowUpRight size={18} />
        </a>
        <small>
          Custom software and major rebuilds are quoted separately. Confirm the
          written scope and commercial terms before payment.
        </small>
      </article>
    </div>
  );
}
