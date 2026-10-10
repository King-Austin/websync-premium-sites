import Link from "next/link";
const questions = [
  [
    "What is included in the monthly plan?",
    "The website subscription covers responsive design, managed hosting, initial SEO setup and ongoing text, image and minor layout updates. We confirm the page scope and requirements with you before starting.",
  ],
  [
    "How long does a website take?",
    "The existing service terms specify 7–14 business days after you supply the required content. Custom software, integrations and larger websites need a separately agreed timeline.",
  ],
  [
    "Is there a minimum commitment?",
    "Yes. The existing subscription terms specify a 36-month commitment, followed by an open-ended monthly cycle with 14 days’ notice for termination. Read the full terms before subscribing.",
  ],
  [
    "Who owns a subscription website?",
    "The existing terms retain technical asset ownership with WebSync. They describe an optional ₦399,000 buyout for ownership transfer. For an outright or custom build, ownership is agreed in the written proposal.",
  ],
  [
    "Can you build an online store or custom software?",
    "Yes. We build commerce, booking and business software projects. Features, integrations, price and delivery milestones are agreed separately rather than assumed to be part of the basic subscription.",
  ],
  [
    "What do you need from me to start?",
    "Your business goals, brand assets, service or product information, contact details and any existing website. We use these to agree the scope and next steps.",
  ],
];
export default function FAQ() {
  return (
    <div className="ws-faq">
      {questions.map(([q, a]) => (
        <details key={q}>
          <summary>
            {q}
            <span aria-hidden="true">+</span>
          </summary>
          <p>
            {a}{" "}
            {q.includes("commitment") || q.includes("owns") ? (
              <Link href="/terms">Read terms →</Link>
            ) : null}
          </p>
        </details>
      ))}
    </div>
  );
}
