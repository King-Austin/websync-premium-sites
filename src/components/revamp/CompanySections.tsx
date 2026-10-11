import FounderCards from "@/components/revamp/FounderCards";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { Heading } from "./Sections";

export default function CompanySections() {
  return (
    <>
      <section className="ws-section ha-team-home" id="founders">
        <div className="ws-container">
          <Heading
            label="MEET THE FOUNDERS"
            title="The people behind your next project."
            copy="Meet the team leading WebSync Digital, from the first conversation to design, delivery and ongoing support."
          />
          <FounderCards />
          <div className="ha-section-link">
            <Link href="/about" className="ws-button ws-button-outline">
              More about WebSync <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>
      <section className="ws-section ws-container" id="registration">
        <div className="ha-registration">
          <div className="ha-registration-copy">
            <span className="ws-eyebrow">
              <ShieldCheck size={19} /> CAC REGISTERED
            </span>
            <h2>
              A registered company.
              <br />
              <em>A team you can know.</em>
            </h2>
            <p>
              WebSync Digital operates as WEBSYNCDIGITAL TECHNOLOGY LTD,
              registered with Nigeria’s Corporate Affairs Commission.
            </p>
            <strong>RC 9470161</strong>
            <p>
              View our certificate of incorporation, or search the company name
              and registration number on the CAC portal.
            </p>
            <a
              href="https://search.cac.gov.ng/"
              target="_blank"
              rel="noopener noreferrer"
              className="ws-button ws-button-outline"
            >
              Check the CAC register <ArrowRight size={17} />
            </a>
          </div>
          <div className="ha-certificate-card">
            <ShieldCheck size={36} aria-hidden="true" />
            <h3>Certificate of incorporation</h3>
            <p>WEBSYNCDIGITAL TECHNOLOGY LTD · RC 9470161</p>
            <details>
              <summary>
                View CAC document <span aria-hidden="true">↗</span>
              </summary>
              <Image
                src="/api/legal/cac"
                alt="Certificate of incorporation for WEBSYNCDIGITAL TECHNOLOGY LTD, company registration number 9470161"
                width={483}
                height={600}
                unoptimized
              />
            </details>
            <small>
              Certificate copy supplied for verification, with sensitive details
              redacted.
            </small>
          </div>
        </div>
      </section>
    </>
  );
}
