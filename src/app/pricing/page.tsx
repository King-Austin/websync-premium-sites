import { Metadata } from 'next';
import Script from 'next/script';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Pricing — ₦9,999/Month Website | WebSync Digital Nigeria",
  description: "Get a premium, enterprise-grade website for just ₦9,999/month with zero setup fees. Compare WebSync Digital's monthly vs one-time pricing plans. Launch in 7 days.",
  alternates: {
    canonical: "https://www.websyncdigital.com.ng/pricing",
  },
  openGraph: {
    title: "WebSync Digital Pricing — ₦9,999/Month Premium Website",
    description: "Zero setup fees. Zero long-term contracts. Nigeria's most affordable premium web design subscription plan for SMEs.",
    url: "https://www.websyncdigital.com.ng/pricing",
    siteName: "WebSync Digital",
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WebSync Digital — ₦9,999/Month Website Plan",
    description: "Premium bespoke website. Zero setup. 7-day launch. Cancel anytime.",
    creator: "@websyncdigital",
  },
  keywords: [
    "website design price Nigeria", "affordable web design Nigeria", "monthly website plan Nigeria",
    "₦9999 website Nigeria", "cheap web design Lagos", "website subscription Nigeria",
    "web design packages Nigeria", "SME website Nigeria", "budget web design agency",
    "WebSync Digital pricing", "web design cost Nigeria 2025"
  ],
};

const pricingSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://www.websyncdigital.com.ng/pricing#webpage",
  "name": "WebSync Digital Pricing — ₦9,999/Month Website",
  "description": "Compare WebSync Digital pricing plans — monthly subscription at ₦9,999/month or one-time build at ₦480,000. Zero setup fees guaranteed.",
  "url": "https://www.websyncdigital.com.ng/pricing",
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.websyncdigital.com.ng" },
      { "@type": "ListItem", "position": 2, "name": "Pricing", "item": "https://www.websyncdigital.com.ng/pricing" }
    ]
  },
  "mainEntity": {
    "@type": "ItemList",
    "name": "WebSync Digital Pricing Plans",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "item": {
          "@type": "Product",
          "name": "Monthly Website Subscription",
          "description": "Enterprise-grade bespoke website. Covers design, hosting, unlimited updates, and full support. Zero setup fee.",
          "offers": {
            "@type": "Offer",
            "price": "9999",
            "priceCurrency": "NGN",
            "availability": "https://schema.org/InStock",
            "seller": { "@type": "Organization", "name": "WebSync Digital" },
            "priceSpecification": {
              "@type": "UnitPriceSpecification",
              "price": "9999",
              "priceCurrency": "NGN",
              "billingDuration": "P1M",
              "unitCode": "MON"
            }
          }
        }
      },
      {
        "@type": "ListItem",
        "position": 2,
        "item": {
          "@type": "Product",
          "name": "One-Time Website Build",
          "description": "Enterprise-grade website built once, with ₦10,000/month maintenance.",
          "offers": {
            "@type": "Offer",
            "price": "480000",
            "priceCurrency": "NGN",
            "availability": "https://schema.org/InStock",
            "seller": { "@type": "Organization", "name": "WebSync Digital" }
          }
        }
      }
    ]
  },
  "publisher": {
    "@type": "Organization",
    "name": "WebSync Digital",
    "url": "https://www.websyncdigital.com.ng"
  }
};

const plans = [
  {
    id: "monthly",
    badge: "⭐ Best Value",
    name: "Monthly Subscription",
    price: "₦9,999",
    period: "/month",
    highlight: true,
    setupFee: "₦0 setup fee",
    features: [
      "Bespoke Premium Design (No Templates)",
      "High-Speed Hosting — 99.9% Uptime",
      "Unlimited Free Design Updates",
      "Priority WhatsApp Technical Support",
      "7-Day Launch Guarantee",
      "Paystack Secure Payment Integration",
      "Google Search (SEO) Setup Included",
      "Full Mobile & Tablet Responsive",
    ],
    cta: "Get Started Now",
    ctaLink: "https://wa.me/2349111719701?text=I%20want%20to%20start%20the%20%E2%82%A69%2C999%2Fmonth%20plan",
  },
  {
    id: "onetime",
    badge: "One-Time Build",
    name: "Outright Purchase",
    price: "₦480,000",
    period: "one-time",
    highlight: false,
    setupFee: "+ ₦10,000/month maintenance",
    features: [
      "Same elite quality design",
      "Full ownership of codebase",
      "One-time payment",
      "Paystack payment integration",
      "Mobile-responsive & SEO-ready",
      "7-day launch guarantee",
      "Ongoing ₦10,000/month maintenance required",
    ],
    cta: "Enquire Now",
    ctaLink: "https://wa.me/2349111719701?text=I%27m%20interested%20in%20the%20one-time%20build",
  },
];

export default function PricingPage() {
  return (
    <>
      <Script
        id="schema-pricing-page"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingSchema) }}
      />

      <main className="min-h-screen bg-background text-foreground">
        {/* Hero */}
        <section className="section-padding pt-24 md:pt-32 text-center">
          <div className="container-custom max-w-3xl">
            <Link href="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8">
              <span>←</span> Back to Home
            </Link>
            <span className="block text-sm font-body font-medium tracking-widest uppercase text-primary mb-4">
              Transparent Pricing
            </span>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-medium text-foreground leading-tight">
              Premium Web Design.<br />
              <span className="text-primary italic font-light">SME Prices.</span>
            </h1>
            <p className="mt-6 font-body text-base md:text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
              Stop paying ₦500k upfront for a website. Get the same quality, speed, and SEO for a fixed monthly price. <strong>Zero setup fees. Zero hidden costs.</strong>
            </p>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="section-padding" aria-label="Pricing plans">
          <div className="container-custom max-w-5xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              {plans.map((plan) => (
                <article
                  key={plan.id}
                  id={`plan-${plan.id}`}
                  className={`rounded-2xl border p-8 flex flex-col gap-6 transition-all ${
                    plan.highlight
                      ? "border-primary bg-primary/5 shadow-xl shadow-primary/10"
                      : "border-border bg-secondary"
                  }`}
                >
                  <div>
                    <span className={`inline-block text-xs font-body font-semibold tracking-widest uppercase px-3 py-1 rounded-full mb-4 ${plan.highlight ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}>
                      {plan.badge}
                    </span>
                    <h2 className="font-display text-2xl font-medium text-foreground">{plan.name}</h2>
                    <div className="mt-4 flex items-end gap-1">
                      <span className="font-display text-5xl font-semibold text-foreground">{plan.price}</span>
                      <span className="font-body text-muted-foreground mb-2">{plan.period}</span>
                    </div>
                    <p className="font-body text-sm text-muted-foreground mt-1">{plan.setupFee}</p>
                  </div>
                  <ul className="flex flex-col gap-3" aria-label={`${plan.name} features`}>
                    {plan.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-3 font-body text-sm text-foreground">
                        <span className="text-primary mt-0.5">✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a
                    id={`cta-${plan.id}`}
                    href={plan.ctaLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`mt-auto text-center rounded-xl px-6 py-4 font-body font-semibold text-sm transition-all ${
                      plan.highlight
                        ? "bg-primary text-primary-foreground hover:opacity-90"
                        : "border border-border text-foreground hover:bg-muted"
                    }`}
                  >
                    {plan.cta}
                  </a>
                </article>
              ))}
            </div>

            {/* Value badge */}
            <div className="mt-16 text-center">
              <p className="font-body text-sm text-muted-foreground">
                🔒 All payments secured by <strong>Paystack</strong> — PCI DSS Level 1 certified. Questions?{" "}
                <a
                  id="pricing-whatsapp-cta"
                  href="https://wa.me/2349111719701"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline hover:no-underline"
                >
                  Chat us on WhatsApp
                </a>
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-secondary" aria-label="Get started">
          <div className="container-custom max-w-2xl text-center">
            <h2 className="font-display text-3xl sm:text-4xl font-medium text-foreground">
              Ready to launch your premium website?
            </h2>
            <p className="mt-4 font-body text-muted-foreground">
              Join Nigerian businesses already scaling with WebSync Digital. Start today — no setup fees, no contracts.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                id="pricing-cta-wa"
                href="https://wa.me/2349111719701?text=I%20want%20to%20get%20started%20with%20WebSync%20Digital"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-primary text-primary-foreground rounded-xl font-body font-semibold text-sm hover:opacity-90 transition-all"
              >
                Start on WhatsApp
              </a>
              <Link
                id="pricing-cta-home"
                href="/"
                className="px-8 py-4 border border-border rounded-xl font-body font-semibold text-sm text-foreground hover:bg-muted transition-all"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
