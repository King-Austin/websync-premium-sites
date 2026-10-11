"use client";
import { useState } from "react";
import Link from "next/link";
import { Check, ArrowUpRight } from "lucide-react";
import { customPricing, formatNaira } from "@/data/custom-pricing";
export default function CustomPricing() {
  const [slug, setSlug] = useState<string>("business-website");
  const service = customPricing.find((p) => p.slug === slug)!;
  return (
    <div className="ha-custom-catalog">
      <div className="ha-custom-toolbar">
        <div>
          <label htmlFor="custom-service">Choose your custom service</label>
          <select
            id="custom-service"
            value={slug}
            onChange={(e) => setSlug(e.target.value)}
          >
            {customPricing.map((p) => (
              <option key={p.slug} value={p.slug}>
                {p.name}
              </option>
            ))}
          </select>
        </div>
        <p>
          {service.scope}. Prices below are for development; the written
          proposal confirms the exact scope.
        </p>
      </div>
      <div className="ha-custom-tiers">
        {["Starter", "Standard", "Premium"].map((tier, i) => (
          <article
            key={tier}
            className={i === 1 ? "ha-tier-standard" : undefined}
          >
            <span className="ws-tag">{tier}</span>
            <h3>{service.name}</h3>
            <small>{i === 2 ? "From" : "Development fee"}</small>
            <strong>{formatNaira(service.prices[i])}</strong>
            <p>{service.levels[i]}</p>
            <ul>
              {[
                "Written scope and milestones",
                "Ownership of agreed deliverables",
                "Deployment to your hosting account",
                "Technical handover",
              ].map((f) => (
                <li key={f}>
                  <Check size={16} />
                  {f}
                </li>
              ))}
            </ul>
            <Link
              href={`/contact#book`}
              className={`ws-button ${i !== 1 ? "ws-button-outline" : ""}`}
            >
              Discuss {tier.toLowerCase()} scope <ArrowUpRight size={16} />
            </Link>
          </article>
        ))}
      </div>
      <div className="ha-custom-costs">
        <h3>Your build. Your deployment.</h3>
        <p>
          Custom projects are separate from the ₦9,999 SME subscription. We hand
          over the agreed source code and deployment access after the agreed
          payment milestones. Domains, hosting, cloud usage, paid integrations
          and app-store accounts are paid separately at provider rates.
          Third-party licences remain subject to their own terms.
        </p>
        <p>
          App-store submission can be included in a mobile proposal or quoted
          separately. Approval is controlled by Apple and Google. Optional care
          for independently hosted websites starts at ₦35,000/month (Starter),
          ₦60,000/month (Standard) or ₦150,000/month (Premium), with support
          scope agreed in writing. This is not an extra fee on the SME
          subscription.
        </p>
      </div>
    </div>
  );
}
