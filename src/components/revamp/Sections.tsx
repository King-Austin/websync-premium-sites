import Link from "next/link";
import { ArrowRight, Check, Globe, Workflow, ShieldCheck } from "lucide-react";
import { projects } from "@/data/projects";
export function Heading({
  label,
  title,
  copy,
}: {
  label: string;
  title: string;
  copy?: string;
}) {
  return (
    <div className="ha-heading">
      <span className="ws-eyebrow">{label}</span>
      <h2>{title}</h2>
      {copy && <p>{copy}</p>}
    </div>
  );
}
export function FinalCTA() {
  return (
    <section className="ha-final ws-section">
      <div className="ws-container ha-heading">
        <span className="ws-eyebrow">LET’S BUILD IT</span>
        <h2>
          A website that works
          <br />
          for <em>your business.</em>
        </h2>
        <p>
          Tell us your goals. We’ll help you agree a clear scope and the next
          step.
        </p>
        <span className="ha-handnote">Your next chapter starts here ↘</span>
        <div className="ws-actions">
          <Link href="/contact#book" className="ws-button">
            Start a conversation <ArrowRight size={17} />
          </Link>
          <Link href="/contact" className="ws-button ws-button-outline">
            Send us a message
          </Link>
        </div>
        <div className="ha-assurances">
          <span>Clear scope</span>
          <span>Responsive design</span>
          <span>Ongoing support</span>
        </div>
      </div>
    </section>
  );
}
export function ClientBands() {
  return (
    <div className="ha-client-bands">
      <div className="ha-marquee ha-benefits">
        <div>
          {[false, true].map((duplicate) => (
            <ul key={String(duplicate)} aria-hidden={duplicate || undefined}>
              {[
                "Mobile-first design",
                "SEO foundations",
                "Clear project scope",
                "Managed hosting",
                "Direct WhatsApp support",
                "Ongoing website care",
              ].map((s) => (
                <li key={s}>
                  <Check size={16} />
                  {s}
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
      <p>REAL WORK FOR BUSINESSES ACROSS NIGERIA</p>
      <div className="ha-marquee ha-clients">
        <div>
          {[false, true].map((duplicate) => (
            <ul key={String(duplicate)} aria-hidden={duplicate || undefined}>
              {projects
                .filter((p) =>
                  [
                    "dynamo-group",
                    "deangelika",
                    "icfm",
                    "maryjane",
                    "trinitino",
                  ].includes(p.slug),
                )
                .map((p) => (
                  <li key={p.slug}>
                    {duplicate ? (
                      <span>{p.name}</span>
                    ) : (
                      <a
                        href={`https://www.${p.domain}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {p.name}
                      </a>
                    )}
                  </li>
                ))}
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
}
export function Integrations() {
  const rows = [
    ["Paystack", "WhatsApp", "Flutterwave", "Google Analytics", "Email"],
    [
      "APIs",
      "Bookings",
      "Business dashboards",
      "Reporting",
      "Customer workflows",
    ],
  ];
  return (
    <section className="ws-section ha-integrations">
      <div className="ws-container">
        <Heading
          label="INTEGRATIONS"
          title="Bring your website and your tools together."
          copy="Payments, enquiries and business workflows can be connected as part of your agreed project."
        />
      </div>
      {rows.map((row, i) => (
        <div
          className={`ha-marquee ha-tool-row ${i ? "ha-reverse" : ""}`}
          key={i}
        >
          <div>
            {[false, true].map((duplicate) => (
              <ul key={String(duplicate)} aria-hidden={duplicate || undefined}>
                {row.map((s, j) => (
                  <li key={s}>
                    <span>{["↗", "◉", "⌁", "▥", "✉"][j]}</span>
                    {s}
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      ))}
      <div className="ha-heading">
        <p>We confirm each integration and its requirements before building.</p>
        <Link
          href="/services/integrations"
          className="ws-button ws-button-outline"
        >
          Explore integrations <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  );
}
export function Process() {
  return (
    <section className="ws-section ha-process" id="process">
      <div className="ws-container">
        <Heading
          label="HOW IT WORKS"
          title="Four clear steps. One shared direction."
          copy="Know the scope, the commercial terms and what comes next before the build begins."
        />
        <ol>
          {[
            [
              "Discovery",
              "Tell us what you need",
              "We learn about your customers, goals and the work your website needs to do.",
              "A shared understanding of your project.",
            ],
            [
              "Written scope",
              "Agree the plan",
              "We confirm the content, features, timeline and commercial terms.",
              "A proposal you can review before starting.",
            ],
            [
              "Preview & feedback",
              "Design, build and refine",
              "We build your website and work through feedback before launch.",
              "A preview of the actual website.",
            ],
            [
              "Launch & care",
              "Go live with support",
              "We publish and support your website according to the agreed service.",
              "A website and a clear support arrangement.",
            ],
          ].map(([label, t, p, d], i) => (
            <li key={t}>
              <span className="ha-step-number">0{i + 1}</span>
              <div>
                <small>{label}</small>
                <h3>{t}</h3>
                <p>{p}</p>
                <b>You get: {d}</b>
              </div>
            </li>
          ))}
        </ol>
        <div className="ha-heading">
          <span className="ha-handnote">Ready for step one? ↘</span>
          <Link href="/contact#book" className="ws-button">
            Let’s talk <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
export function Quality() {
  return (
    <section className="ws-section ha-quality">
      <div className="ws-container">
        <Heading
          label="BUILT WITH PURPOSE"
          title="The details make a better experience."
          copy="A visitor should understand your business, find what matters and know what to do next."
        />
        <div className="ha-quality-grid">
          {[
            {
              Icon: Globe,
              t: "Clear on every screen",
              p: "Responsive layouts make your content useful on a phone, tablet or desktop.",
            },
            {
              Icon: Workflow,
              t: "A purposeful journey",
              p: "Your services, products and calls to action work together around your customers.",
            },
            {
              Icon: ShieldCheck,
              t: "Support beyond launch",
              p: "Managed hosting and agreed website care keep your online presence current.",
            },
          ].map(({ Icon, t, p }) => (
            <article key={String(t)}>
              <div className="ha-quality-icon">
                <Icon size={30} />
              </div>
              <h3>{String(t)}</h3>
              <p>{String(p)}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
export function JournalBand() {
  return (
    <section className="ws-section ha-journal-band">
      <div className="ws-container">
        <div>
          <span className="ws-eyebrow">THE WEBSYNC JOURNAL</span>
          <h2>
            Ideas for your
            <br />
            <em>next digital move.</em>
          </h2>
          <p>
            Explore our existing guides on websites, design and business
            technology.
          </p>
        </div>
        <div>
          <Link href="/blog" className="ws-button">
            Read the journal <ArrowRight size={17} />
          </Link>
          <p>Have a question about your own website?</p>
          <Link href="/contact" className="ws-text-link">
            Ask our team →
          </Link>
        </div>
      </div>
    </section>
  );
}
