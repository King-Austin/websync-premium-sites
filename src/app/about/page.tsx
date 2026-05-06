import { Metadata } from 'next';
import Script from 'next/script';
import Link from 'next/link';
import Image from 'next/image';
import westProfile from '../../../public/assets/west_profile_updated.jpg';
import austinProfile from '../../../public/assets/nworah-ebuka-augustus.jpg';

export const metadata: Metadata = {
  title: "About WebSync Digital | Institutional Web Design for Nigeria",
  description: "Learn about WebSync Digital's mission to empower Nigerian SMEs. Founded by West Taylor & King Austin to provide world-class tech for ₦9,999/month.",
  alternates: {
    canonical: "https://www.websyncdigital.com.ng/about",
  },
  openGraph: {
    title: "About WebSync Digital — The SME Growth Agency",
    description: "Discover the elite team behind Nigeria's most trusted premium web agency. We build assets, not just websites.",
    url: "https://www.websyncdigital.com.ng/about",
    siteName: "WebSync Digital",
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About WebSync Digital Nigeria",
    description: "Empowering Nigerian businesses with elite digital infrastructure.",
    creator: "@websyncdigital",
  },
  keywords: [
    "about WebSync Digital", "WebSync Digital founders", "West Taylor CEO Nigeria",
    "King Austin COO WebSync", "Nwora Ebuka web developer", "Nigerian web agency about",
    "best web design agency Nigeria story", "who is WebSync Digital", "WebSync Digital team",
    "CAC registered web agency Nigeria", "trusted web agency Nigeria", "web designers Nigeria founders"
  ],
};

const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "@id": "https://www.websyncdigital.com.ng/about#webpage",
  "name": "About WebSync Digital — Nigeria's No.1 Premium Web Agency",
  "description": "The mission, founders, and values behind WebSync Digital — Nigeria's most trusted premium web design agency for SMEs.",
  "url": "https://www.websyncdigital.com.ng/about",
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.websyncdigital.com.ng" },
      { "@type": "ListItem", "position": 2, "name": "About", "item": "https://www.websyncdigital.com.ng/about" }
    ]
  },
  "mainEntity": {
    "@type": "Organization",
    "name": "WebSync Digital",
    "url": "https://www.websyncdigital.com.ng",
    "foundingDate": "2024",
    "foundingLocation": { "@type": "Place", "name": "Awka, Anambra, Nigeria" },
    "numberOfEmployees": { "@type": "QuantitativeValue", "minValue": 2 },
    "description": "WebSync Digital is Nigeria's No.1 premium web design agency — delivering enterprise-grade websites for SMEs at ₦9,999/month with zero setup fees.",
    "member": [
      {
        "@type": "Person",
        "name": "West Taylor",
        "jobTitle": "CEO & Founder",
        "url": "https://www.websyncdigital.com.ng/west",
        "image": "https://www.websyncdigital.com.ng/assets/west_profile_updated.jpg",
        "knowsAbout": ["Web Engineering", "Digital Strategy", "Nigerian SME Growth", "Next.js", "React"]
      },
      {
        "@type": "Person",
        "name": "Nwora Ebuka",
        "alternateName": "King Austin",
        "jobTitle": "COO & Co-Founder",
        "url": "https://www.websyncdigital.com.ng",
        "knowsAbout": ["Technical Architecture", "Operations", "Scalability", "Digital Infrastructure"]
      }
    ]
  },
  "publisher": {
    "@type": "Organization",
    "name": "WebSync Digital",
    "url": "https://www.websyncdigital.com.ng"
  }
};

const values = [
  { id: "value-affordability", icon: "💎", title: "Democratized Excellence", body: "We removed the ₦500k barrier so every Nigerian SME can access enterprise-grade web design — not just corporations." },
  { id: "value-speed", icon: "⚡", title: "Speed Without Compromise", body: "7-day launches. Built on Next.js — the same stack powering Vercel, Netflix, and Airbnb. Fast is non-negotiable." },
  { id: "value-trust", icon: "🔒", title: "Institutional Trust", body: "CAC registered (RC 9470161). Payments secured by Paystack. We operate with the transparency your business deserves." },
  { id: "value-growth", icon: "📈", title: "Built for Growth", body: "Every site ships with Technical SEO, Core Web Vitals optimization, and structured data baked in from day one." },
];

const milestones = [
  { year: "2024", event: "WebSync Digital founded in Awka, Anambra, Nigeria" },
  { year: "2024", event: "CAC Business Registration — RC 9470161" },
  { year: "2024", event: "Paystack payment integration certified" },
  { year: "2025", event: "50+ Nigerian SMEs launched on the platform" },
  { year: "2025", event: "GEO (Generative Engine Optimization) services launched" },
  { year: "2025", event: "100+ active clients. No.1 web agency position established" },
];

export default function AboutPage() {
  return (
    <>
      <Script
        id="schema-about-page"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />

      <main className="min-h-screen bg-background text-foreground">

        {/* Hero */}
        <section className="section-padding pt-24 md:pt-32 text-center" aria-label="About Us">
          <div className="container-custom max-w-4xl">
            <Link href="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8">
              <span>←</span> Back to Home
            </Link>



            <span className="block text-sm font-body font-medium tracking-widest uppercase text-primary mb-4">
              Our Story
            </span>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-medium text-foreground leading-tight text-balance">
              We Democratized Elite Design<br />
              <span className="text-primary italic font-light">for the Nigerian Enterprise.</span>
            </h1>
            <p className="mt-6 font-body text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              WebSync Digital was born from a simple truth: your business deserves a world-class digital presence, regardless of your budget. We removed the ₦500k barrier — so you can focus on what matters. Scaling your legacy.
            </p>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="section-padding bg-secondary" aria-label="Mission">
          <div className="container-custom max-w-3xl text-center">
            <span className="text-sm font-body font-medium tracking-widest uppercase text-primary">Our Mission</span>
            <blockquote className="mt-6 font-display text-2xl sm:text-3xl md:text-4xl font-medium text-foreground leading-snug italic">
              &ldquo;Make &lsquo;Professional&rsquo; the new standard for every Nigerian business online.&rdquo;
            </blockquote>
            <p className="mt-4 font-body text-sm text-muted-foreground">— West Taylor, CEO & Founder</p>
          </div>
        </section>

        {/* Core Values */}
        <section className="section-padding" aria-label="Our values">
          <div className="container-custom max-w-5xl">
            <div className="text-center mb-12">
              <span className="text-sm font-body font-medium tracking-widest uppercase text-primary">What We Stand For</span>
              <h2 className="mt-3 font-display text-3xl sm:text-4xl font-medium text-foreground">Our Core Values</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {values.map((v) => (
                <div key={v.id} id={v.id} className="rounded-2xl border border-border bg-secondary p-8 flex flex-col gap-4">
                  <span className="text-4xl">{v.icon}</span>
                  <h3 className="font-display text-xl font-medium text-foreground">{v.title}</h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">{v.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Founders */}
        <section className="section-padding bg-secondary" id="founders" aria-label="Meet the founders">
          <div className="container-custom max-w-5xl">
            <div className="text-center mb-16">
              <span className="text-sm font-body font-medium tracking-widest uppercase text-primary">The Team</span>
              <h2 className="mt-3 font-display text-3xl sm:text-4xl md:text-5xl font-medium text-foreground">
                The Minds Behind WebSync Digital
              </h2>
              <p className="mt-4 font-body text-muted-foreground max-w-xl mx-auto">
                Two Nigerians on a mission to give every SME the digital presence it deserves.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20">
              {/* West Taylor */}
              <article id="founder-west" className="space-y-8 group" itemScope itemType="https://schema.org/Person">
                <meta itemProp="name" content="West Taylor" />
                <meta itemProp="jobTitle" content="CEO & Founder of WebSync Digital" />
                <meta itemProp="url" content="https://www.websyncdigital.com.ng/west" />
                <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-secondary border border-border shadow-lg transition-all duration-700 group-hover:scale-[1.02] group-hover:shadow-2xl">
                  <Image
                    src={westProfile}
                    alt="West Taylor — CEO & Founder of WebSync Digital, Nigeria's No.1 Web Agency"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-40" />
                </div>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-display text-2xl md:text-3xl font-bold tracking-tight">West Taylor</h3>
                    <p className="text-primary text-sm font-body font-bold uppercase tracking-widest mt-1">Founder & CEO</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {['Strategy', 'Leadership', 'Business Development', 'Web Architecture'].map(tag => (
                      <span key={tag} className="px-2.5 py-1 bg-primary/5 border border-primary/10 text-[10px] font-bold uppercase tracking-widest text-primary/80 rounded-full">{tag}</span>
                    ))}
                  </div>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed italic border-t border-border pt-4">
                    &ldquo;My goal is simple: to make &apos;Professional&apos; the new standard for every Nigerian business online. WebSync Digital provides the premium infrastructure you need to look elite, communicate effectively, and capture the market&apos;s trust.&rdquo;
                  </p>
                  <Link
                    id="about-west-profile-link"
                    href="/west"
                    className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-primary hover:gap-4 transition-all duration-300"
                  >
                    Full Profile — West Taylor →
                  </Link>
                </div>
              </article>

              {/* King Austin */}
              <article id="founder-king" className="space-y-8 group" itemScope itemType="https://schema.org/Person">
                <meta itemProp="name" content="Nwora Ebuka" />
                <meta itemProp="alternateName" content="King Austin" />
                <meta itemProp="jobTitle" content="COO & Co-Founder of WebSync Digital" />
                <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-secondary border border-border shadow-lg transition-all duration-700 group-hover:scale-[1.02] group-hover:shadow-2xl">
                  <Image
                    src={austinProfile}
                    alt="King Austin (Nwora Ebuka) — COO & Co-Founder of WebSync Digital Nigeria"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-40" />
                </div>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-display text-2xl md:text-3xl font-bold tracking-tight">King Austin</h3>
                    <p className="text-primary text-sm font-body font-bold uppercase tracking-widest mt-1">Co-Founder & COO</p>
                    <p className="text-muted-foreground text-xs font-body mt-0.5">Nwora Ebuka Augustus</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {['Technical Architecture', 'Operations', 'Scalability', 'Digital Infrastructure'].map(tag => (
                      <span key={tag} className="px-2.5 py-1 bg-primary/5 border border-primary/10 text-[10px] font-bold uppercase tracking-widest text-primary/80 rounded-full">{tag}</span>
                    ))}
                  </div>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed italic border-t border-border pt-4">
                    &ldquo;I believe that global-scale growth is built on flawless digital operations. My mission is to design seamless technical ecosystems where complexity is refined into simplicity — allowing our partners to scale their dreams on a foundation of absolute operational excellence.&rdquo;
                  </p>
                  <a
                    id="about-king-profile-link"
                    href="https://www.nworahebuka.nworahsoft.codes/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-primary hover:gap-4 transition-all duration-300"
                  >
                    Full Profile — King Austin →
                  </a>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="section-padding" aria-label="Company milestones">
          <div className="container-custom max-w-3xl">
            <div className="text-center mb-12">
              <span className="text-sm font-body font-medium tracking-widest uppercase text-primary">Our Journey</span>
              <h2 className="mt-3 font-display text-3xl font-medium text-foreground">Key Milestones</h2>
            </div>
            <ol className="relative border-l border-border ml-4 flex flex-col gap-8">
              {milestones.map((m, i) => (
                <li key={i} id={`milestone-${i}`} className="ml-8">
                  <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-primary ring-4 ring-background">
                    <span className="w-2 h-2 rounded-full bg-primary-foreground" />
                  </span>
                  <span className="font-body text-xs font-bold uppercase tracking-widest text-primary">{m.year}</span>
                  <p className="font-body text-sm text-foreground mt-1">{m.event}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Trust Strip */}
        <section className="section-padding bg-secondary" aria-label="Trust signals">
          <div className="container-custom max-w-4xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                { id: "trust-clients", value: "100+", label: "SMEs Launched" },
                { id: "trust-launch", value: "7 Days", label: "Avg Launch Time" },
                { id: "trust-uptime", value: "99.9%", label: "Uptime Guaranteed" },
                { id: "trust-satisfaction", value: "100%", label: "Satisfaction Rate" },
              ].map((t) => (
                <div key={t.id} id={t.id} className="flex flex-col gap-2">
                  <span className="font-display text-3xl font-semibold text-primary">{t.value}</span>
                  <span className="font-body text-xs text-muted-foreground uppercase tracking-widest">{t.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding" aria-label="Get started">
          <div className="container-custom max-w-2xl text-center">
            <h2 className="font-display text-3xl sm:text-4xl font-medium text-foreground">
              Ready to work with Nigeria&apos;s No.1?
            </h2>
            <p className="mt-4 font-body text-muted-foreground">
              ₦9,999/month. Zero setup fees. 7-day launch. No long-term contracts.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                id="about-cta-whatsapp"
                href="https://wa.me/2349111719701?text=Hi%20WebSync%20Digital%2C%20I%20want%20to%20get%20started."
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-primary text-primary-foreground rounded-xl font-body font-semibold text-sm hover:opacity-90 transition-all"
              >
                Start on WhatsApp
              </a>
              <Link id="about-cta-pricing" href="/pricing" className="px-8 py-4 border border-border rounded-xl font-body font-semibold text-sm text-foreground hover:bg-muted transition-all">
                View Pricing
              </Link>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}
