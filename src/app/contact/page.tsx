import { Metadata } from 'next';
import Script from 'next/script';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Contact WebSync Digital — WhatsApp, Call & Email Nigeria",
  description: "Get in touch with WebSync Digital — Nigeria's #1 premium web design agency. Reach us on WhatsApp, phone, or email. We respond within 24 hours.",
  alternates: {
    canonical: "https://www.websyncdigital.com.ng/contact",
  },
  openGraph: {
    title: "Contact WebSync Digital — Reach Us on WhatsApp",
    description: "Start your ₦9,999/month website today. Message WebSync Digital on WhatsApp and get a response within hours.",
    url: "https://www.websyncdigital.com.ng/contact",
    siteName: "WebSync Digital",
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact WebSync Digital — Fast Response via WhatsApp",
    description: "Chat us on WhatsApp and launch your premium website within 7 days.",
    creator: "@websyncdigital",
  },
  keywords: [
    "contact WebSync Digital", "WebSync Digital WhatsApp", "web design agency contact Nigeria",
    "WebSync Digital phone number", "hire web developer Nigeria", "web design enquiry Nigeria",
    "WebSync Digital email", "WebSync Nigeria contact", "get website Nigeria"
  ],
};

const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": "https://www.websyncdigital.com.ng/contact#webpage",
  "name": "Contact WebSync Digital",
  "description": "Reach WebSync Digital via WhatsApp, phone, or email. Nigeria's #1 premium web design agency — fast response guaranteed.",
  "url": "https://www.websyncdigital.com.ng/contact",
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.websyncdigital.com.ng" },
      { "@type": "ListItem", "position": 2, "name": "Contact", "item": "https://www.websyncdigital.com.ng/contact" }
    ]
  },
  "mainEntity": {
    "@type": "Organization",
    "name": "WebSync Digital",
    "url": "https://www.websyncdigital.com.ng",
    "telephone": "+2349111719701",
    "email": "hello@websyncdigital.com.ng",
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "contactType": "customer service",
        "telephone": "+2349111719701",
        "areaServed": "NG",
        "availableLanguage": "en",
        "contactOption": ["TollFree"],
        "hoursAvailable": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
          "opens": "08:00",
          "closes": "20:00"
        }
      },
      {
        "@type": "ContactPoint",
        "contactType": "sales",
        "url": "https://wa.me/2349111719701",
        "contactOption": ["HearingImpairedSupported"],
        "availableLanguage": "en"
      }
    ]
  },
  "publisher": {
    "@type": "Organization",
    "name": "WebSync Digital",
    "url": "https://www.websyncdigital.com.ng"
  }
};

const channels = [
  {
    id: "channel-whatsapp",
    icon: "💬",
    title: "WhatsApp",
    label: "Chat Us — Instant Response",
    detail: "+234 911 171 9701",
    href: "https://wa.me/2349111719701?text=Hi%20WebSync%20Digital%2C%20I%27d%20like%20to%20get%20a%20premium%20website.",
    cta: "Open WhatsApp",
    primary: true,
  },
  {
    id: "channel-phone",
    icon: "📞",
    title: "Phone / Call",
    label: "Call Us Directly",
    detail: "+234 911 171 9701",
    href: "tel:+2349111719701",
    cta: "Call Now",
    primary: false,
  },
  {
    id: "channel-instagram",
    icon: "📸",
    title: "Instagram",
    label: "Follow & DM Us",
    detail: "@websyncdigital",
    href: "https://instagram.com/websyncdigital",
    cta: "Open Instagram",
    primary: false,
  },
  {
    id: "channel-linkedin",
    icon: "💼",
    title: "LinkedIn",
    label: "Connect Professionally",
    detail: "WebSync Digital",
    href: "https://linkedin.com/company/websyncdigital",
    cta: "View LinkedIn",
    primary: false,
  },
];

const faqs = [
  {
    q: "How fast will you respond?",
    a: "We respond to all WhatsApp and social media messages within 2–4 hours during business hours (Mon–Sat, 8am–8pm WAT).",
  },
  {
    q: "Can I meet the team in person?",
    a: "We operate remotely-first to serve clients across all of Nigeria, from Lagos to Abuja to Anambra. Video calls are always available on request.",
  },
  {
    q: "What information do you need to get started?",
    a: "Just tell us your business name, what you do, and your target audience. We handle everything else from there.",
  },
];

export default function ContactPage() {
  return (
    <>
      <Script
        id="schema-contact-page"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />

      <main className="min-h-screen bg-background text-foreground">
        {/* Hero */}
        <section className="section-padding pt-24 md:pt-32 text-center">
          <div className="container-custom max-w-3xl">
            <Link href="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8">
              <span>←</span> Back to Home
            </Link>
            <span className="block text-sm font-body font-medium tracking-widest uppercase text-primary mb-4">
              Get In Touch
            </span>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-medium text-foreground leading-tight">
              Start Your Business<br />
              <span className="text-primary italic font-light">Growth Today.</span>
            </h1>
            <p className="mt-6 font-body text-base md:text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
              Don&apos;t let your business stay hidden. No forms. No waiting. Just a direct conversation with our team to launch your premium site in 7 days.
            </p>
          </div>
        </section>

        {/* Contact Channels */}
        <section className="section-padding" aria-label="Contact channels">
          <div className="container-custom max-w-4xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {channels.map((ch) => (
                <a
                  key={ch.id}
                  id={ch.id}
                  href={ch.href}
                  target={ch.href.startsWith("http") ? "_blank" : undefined}
                  rel={ch.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className={`block rounded-2xl border p-8 transition-all hover:scale-[1.02] ${
                    ch.primary
                      ? "border-primary bg-primary/5 shadow-xl shadow-primary/10"
                      : "border-border bg-secondary hover:border-primary/50"
                  }`}
                >
                  <span className="text-4xl">{ch.icon}</span>
                  <h2 className="mt-4 font-display text-xl font-medium text-foreground">{ch.title}</h2>
                  <p className="font-body text-sm text-muted-foreground mt-1">{ch.label}</p>
                  <p className="font-body text-base font-semibold text-foreground mt-2">{ch.detail}</p>
                  <span className={`inline-block mt-6 text-sm font-body font-semibold px-5 py-2.5 rounded-lg transition-all ${
                    ch.primary
                      ? "bg-primary text-primary-foreground hover:opacity-90"
                      : "border border-border text-foreground hover:bg-muted"
                  }`}>
                    {ch.cta} →
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Hours */}
        <section className="section-padding bg-secondary" aria-label="Business hours">
          <div className="container-custom max-w-2xl text-center">
            <h2 className="font-display text-2xl font-medium text-foreground">Business Hours</h2>
            <p className="mt-4 font-body text-muted-foreground">
              <strong className="text-foreground">Monday – Saturday</strong>: 8:00 AM – 8:00 PM (WAT)<br />
              <strong className="text-foreground">Sunday</strong>: Closed (urgent WhatsApp messages monitored)
            </p>
            <p className="mt-4 font-body text-sm text-muted-foreground">
              📍 Awka, Anambra State, Nigeria — Serving all Nigerian states remotely.
            </p>
          </div>
        </section>

        {/* Mini FAQ */}
        <section className="section-padding" aria-label="Contact FAQ">
          <div className="container-custom max-w-3xl">
            <h2 className="font-display text-2xl font-medium text-foreground text-center mb-10">
              Common Questions
            </h2>
            <div className="flex flex-col gap-6">
              {faqs.map((faq, i) => (
                <div key={i} id={`contact-faq-${i}`} className="rounded-2xl border border-border bg-secondary p-6">
                  <h3 className="font-display text-base font-medium text-foreground">{faq.q}</h3>
                  <p className="mt-2 font-body text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="section-padding bg-secondary" aria-label="Start now">
          <div className="container-custom max-w-2xl text-center">
            <h2 className="font-display text-3xl sm:text-4xl font-medium text-foreground">
              Your business deserves a premium digital presence.
            </h2>
            <p className="mt-4 font-body text-muted-foreground">
              Start for ₦9,999/month — zero setup fees, 7-day launch.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                id="contact-final-wa"
                href="https://wa.me/2349111719701?text=Hi%20WebSync%20Digital%2C%20I%27d%20like%20to%20get%20started."
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-primary text-primary-foreground rounded-xl font-body font-semibold text-sm hover:opacity-90 transition-all"
              >
                Chat Us on WhatsApp
              </a>
              <Link
                id="contact-final-pricing"
                href="/pricing"
                className="px-8 py-4 border border-border rounded-xl font-body font-semibold text-sm text-foreground hover:bg-muted transition-all"
              >
                See Pricing
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
