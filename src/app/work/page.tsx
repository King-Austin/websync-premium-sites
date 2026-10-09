import { Metadata } from 'next';
import Script from 'next/script';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Our Work — Client Results & Portfolio | WebSync Digital Nigeria",
  description: "See real results from WebSync Digital's Nigerian SME clients. Portfolio of premium websites, performance metrics, and case studies from Nigeria's #1 web design agency.",
  alternates: {
    canonical: "https://www.websyncdigital.com.ng/work",
  },
  openGraph: {
    title: "Our Work — WebSync Digital Portfolio & Client Results",
    description: "Browse real client projects and performance metrics from WebSync Digital — Nigeria's leading premium web design agency.",
    url: "https://www.websyncdigital.com.ng/work",
    siteName: "WebSync Digital",
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WebSync Digital — Real Client Results & Portfolio",
    description: "Premium websites. Measurable growth. Nigerian SME success stories.",
    creator: "@websyncdigital",
  },
  keywords: [
    "web design agency Nigeria portfolio", "WebSync Digital work", "Nigerian SME website results",
    "web design case studies Nigeria", "best web design portfolio Nigeria", "business website Nigeria results",
    "web agency Lagos portfolio", "WebSync Digital clients", "Nigeria top web developer portfolio"
  ],
};

const workPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://www.websyncdigital.com.ng/work#webpage",
  "name": "Our Work — WebSync Digital Client Results & Portfolio",
  "description": "Portfolio and performance metrics from WebSync Digital's Nigerian SME client projects.",
  "url": "https://www.websyncdigital.com.ng/work",
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.websyncdigital.com.ng" },
      { "@type": "ListItem", "position": 2, "name": "Our Work", "item": "https://www.websyncdigital.com.ng/work" }
    ]
  },
  "publisher": {
    "@type": "Organization",
    "name": "WebSync Digital",
    "url": "https://www.websyncdigital.com.ng"
  }
};

const metrics = [
  { id: "metric-clients", value: "50+", label: "SMEs Launched", icon: "🏢" },
  { id: "metric-speed", value: "7 Days", label: "Average Launch Time", icon: "⚡" },
  { id: "metric-uptime", value: "99.9%", label: "Site Uptime Guaranteed", icon: "🔒" },
  { id: "metric-nps", value: "100%", label: "Client Satisfaction Rate", icon: "⭐" },
];

const capabilities = [
  {
    id: "cap-web",
    icon: "🌐",
    title: "Elite Web Applications",
    description: "Built on Next.js and React — the same stack powering Vercel, Netflix, and Airbnb. Your website performs at enterprise scale.",
  },
  {
    id: "cap-seo",
    icon: "📈",
    title: "Technical SEO Architecture",
    description: "Full structured data implementation, Core Web Vitals optimization, and search-first content strategy. Rank higher, get found faster.",
  },
  {
    id: "cap-geo",
    icon: "🤖",
    title: "Generative Engine Optimization",
    description: "GEO — the future of SEO. We engineer your brand's presence across AI search engines like ChatGPT, Perplexity, and Google AI Overviews.",
  },
  {
    id: "cap-brand",
    icon: "💎",
    title: "Premium Brand Design",
    description: "From logo to full design system — we build digital identities that command authority and trust in the Nigerian market.",
  },
];

export default function WorkPage() {
  return (
    <>
      <Script
        id="schema-work-page"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(workPageSchema) }}
      />

      <main className="min-h-screen bg-background text-foreground">
        {/* Hero */}
        <section className="section-padding pt-24 md:pt-32 text-center">
          <div className="container-custom max-w-3xl">
            <Link href="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8">
              <span>←</span> Back to Home
            </Link>
            <span className="block text-sm font-body font-medium tracking-widest uppercase text-primary mb-4">
              Our Work
            </span>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-medium text-foreground leading-tight">
              See How Nigerian SMEs<br />
              <span className="text-primary italic font-light">Are Growing Online.</span>
            </h1>
            <p className="mt-6 font-body text-base md:text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
              We don&apos;t just build websites; we build digital growth engines. See how we&apos;ve helped business owners across Nigeria establish trust and double their sales.
            </p>
          </div>
        </section>

        {/* Metrics Grid */}
        <section className="section-padding bg-secondary" aria-label="Performance metrics">
          <div className="container-custom">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {metrics.map((m) => (
                <div
                  key={m.id}
                  id={m.id}
                  className="rounded-2xl border border-border bg-background p-6 text-center flex flex-col items-center gap-3"
                >
                  <span className="text-3xl">{m.icon}</span>
                  <span className="font-display text-3xl md:text-4xl font-semibold text-primary">{m.value}</span>
                  <span className="font-body text-sm text-muted-foreground">{m.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Capabilities */}
        <section className="section-padding" aria-label="What we do">
          <div className="container-custom max-w-5xl">
            <div className="text-center mb-12">
              <span className="text-sm font-body font-medium tracking-widest uppercase text-primary">
                What We Build
              </span>
              <h2 className="mt-3 font-display text-3xl sm:text-4xl md:text-5xl font-medium text-foreground">
                Core Capabilities
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {capabilities.map((cap) => (
                <article
                  key={cap.id}
                  id={cap.id}
                  className="rounded-2xl border border-border bg-secondary p-8 flex flex-col gap-4"
                >
                  <span className="text-4xl">{cap.icon}</span>
                  <h3 className="font-display text-xl font-medium text-foreground">{cap.title}</h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">{cap.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Partnership Trust Signal */}
        <section className="section-padding bg-secondary" aria-label="Partners and trust">
          <div className="container-custom max-w-3xl text-center">
            <span className="text-sm font-body font-medium tracking-widest uppercase text-primary">
              Powered By
            </span>
            <h2 className="mt-3 font-display text-3xl font-medium text-foreground">
              Trusted Infrastructure
            </h2>
            <p className="mt-4 font-body text-muted-foreground">
              WebSync Digital integrates with <strong>Paystack</strong> — Nigeria's most trusted payment processor — ensuring every client transaction is PCI DSS Level 1 secured, giving your business the institutional trust it deserves.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding" aria-label="Start your project">
          <div className="container-custom max-w-2xl text-center">
            <h2 className="font-display text-3xl sm:text-4xl font-medium text-foreground">
              Ready to be our next success story?
            </h2>
            <p className="mt-4 font-body text-muted-foreground">
              Start your premium website today for ₦9,999/month — zero setup fees, 7-day launch.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                id="work-cta-whatsapp"
                href="https://wa.me/2349111719701?text=I%20want%20to%20start%20a%20project%20with%20WebSync%20Digital"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-primary text-primary-foreground rounded-xl font-body font-semibold text-sm hover:opacity-90 transition-all"
              >
                Start Your Project
              </a>
              <Link
                id="work-cta-pricing"
                href="/pricing"
                className="px-8 py-4 border border-border rounded-xl font-body font-semibold text-sm text-foreground hover:bg-muted transition-all"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
