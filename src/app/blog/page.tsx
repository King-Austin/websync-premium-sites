import { Metadata } from 'next';
import Script from 'next/script';
import BlogListing from '@/components/BlogListing';

export const metadata: Metadata = {
  title: "Blog — Digital Growth Insights for Nigerian SMEs | WebSync Digital",
  description: "Read WebSync Digital's expert guides on web design, Technical SEO, GEO, and digital strategy to help Nigerian businesses grow and rank higher online.",
  alternates: {
    canonical: "https://www.websyncdigital.com.ng/blog",
  },
  openGraph: {
    title: "Blog — WebSync Digital Intelligence Hub",
    description: "Premium articles on web design, SEO strategy, Generative Engine Optimization, and digital growth playbooks for Nigerian SMEs.",
    url: "https://www.websyncdigital.com.ng/blog",
    siteName: "WebSync Digital",
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WebSync Digital Blog — Web Design & SEO Insights Nigeria",
    description: "Expert guides on web design, SEO, GEO, and digital growth for Nigerian businesses.",
    creator: "@websyncdigital",
  },
  keywords: [
    "web design tips Nigeria", "SEO strategies Nigeria", "GEO generative engine optimization",
    "digital growth Nigeria blog", "WebSync Digital blog", "SME digital marketing Nigeria",
    "website design guide Nigeria", "how to rank higher Google Nigeria", "web design articles Nigeria",
    "Next.js blog Nigeria", "tech articles Nigeria", "business website tips Nigeria"
  ],
};

const blogPageSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "@id": "https://www.websyncdigital.com.ng/blog#blog",
  "name": "WebSync Digital Intelligence Hub",
  "description": "Premium insights on web design, Technical SEO, Generative Engine Optimization (GEO), and digital growth strategies for Nigerian SMEs.",
  "url": "https://www.websyncdigital.com.ng/blog",
  "inLanguage": "en-NG",
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.websyncdigital.com.ng" },
      { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.websyncdigital.com.ng/blog" }
    ]
  },
  "publisher": {
    "@type": "Organization",
    "name": "WebSync Digital",
    "url": "https://www.websyncdigital.com.ng",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.websyncdigital.com.ng/icon.png"
    }
  },
  "author": {
    "@type": "Organization",
    "name": "WebSync Digital"
  }
};

export default function BlogPage() {
  return (
    <>
      <Script
        id="schema-blog-page"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPageSchema) }}
      />
      <BlogListing />
    </>
  );
}
