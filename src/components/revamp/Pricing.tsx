import Link from "next/link";
import { Check, ArrowUpRight } from "lucide-react";
import { enquiryUrl } from "@/data/projects";
export default function Pricing() {
  return (
    <div className="ws-pricing-grid">
      <article className="ws-price ws-price-primary">
        <span className="ws-tag">FOR SMEs · MANAGED SUBSCRIPTION</span>
        <h3>
          A great website.
          <br />A manageable monthly fee.
        </h3>
        <div className="ws-price-number">
          ₦9,999<span>/month</span>
        </div>
        <p>
          ₦0 setup fee. A cost-saving business website, hosted and cared for on
          WebSync’s infrastructure.
        </p>
        <ul>
          {[
            "Responsive business website",
            "Hosting on WebSync infrastructure",
            "Included technical care — no extra retainer",
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
          Hosting, included updates and technical care are covered by the
          monthly fee, with no separate maintenance retainer. No migration is
          needed while your site stays on our infrastructure. Existing terms
          specify a 36-month commitment. WebSync retains the technical assets
          during subscription; an optional ₦399,000 buyout is described in the
          terms. Launch: 7–14 business days after content is supplied.{" "}
          <Link href="/terms">Read the full terms →</Link>
        </p>
      </article>
      <article className="ws-price">
        <span className="ws-tag">CUSTOM BUILD · CLIENT OWNERSHIP</span>
        <h3>
          Your build.
          <br />
          Your infrastructure.
        </h3>
        <div className="ws-custom-art" aria-hidden="true">
          <span>Website</span>
          <i />
          <span>Your workflow</span>
          <i />
          <span>Custom software</span>
        </div>
        <p>
          Choose custom development when you need your own deployment, hosting
          account and ownership of the agreed deliverables. Websites, web
          applications and mobile apps have separate project pricing.
        </p>
        <ul>
          {[
            "Requirements and workflow discovery",
            "Your hosting account and deployment",
            "Source-code handover and agreed ownership",
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
        <Link href="/pricing#custom-plans" className="ws-text-link">
          Compare custom development prices →
        </Link>
        <small>
          Landing pages from ₦150,000; business websites from ₦400,000; web
          applications from ₦1,500,000. Hosting and third-party costs are
          separate.
        </small>
      </article>
    </div>
  );
}
