"use client";

import Script from 'next/script';

const SchemaOrg = () => {
  // 1. Organization — brand authority anchor
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://www.websyncdigital.com.ng/#organization",
    "name": "websyncdigital",
    "legalName": "WebSync Digital Technology Ltd",
    "alternateName": ["WebSync Digital Technology Ltd", "WebSync Nigeria", "WebSync Digital Agency"],
    "url": "https://www.websyncdigital.com.ng",
    "taxID": "9470161",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.websyncdigital.com.ng/icon.png",
      "width": 512,
      "height": 512
    },
    "image": "https://www.websyncdigital.com.ng/icon.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+2349111719701",
      "contactType": "customer service",
      "areaServed": "NG",
      "availableLanguage": "en"
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "NG",
      "addressRegion": "Anambra"
    },
    "founder": [
      {
        "@type": "Person",
        "name": "West Taylor",
        "jobTitle": "CEO & Founder"
      },
      {
        "@type": "Person",
        "name": "Nwora Ebuka",
        "alternateName": "King Austin",
        "jobTitle": "COO & Co-Founder"
      }
    ],
    "sameAs": [
      "https://wa.me/2349111719701",
      "https://instagram.com/websyncdigital",
      "https://linkedin.com/company/websyncdigital"
    ],
    "description": "websyncdigital is Nigeria's #1 elite digital asset agency — delivering premium, bespoke web design and branding for SMEs at ₦9,999/month with zero setup fees.",
    "priceRange": "₦9,999/month",
    "currenciesAccepted": "NGN",
    "paymentAccepted": "Paystack, Card, Bank Transfer",
    "areaServed": {
      "@type": "Country",
      "name": "Nigeria"
    }
  };

  // 2. WebSite + SearchAction — the PRIMARY sitelinks trigger
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://www.websyncdigital.com.ng/#website",
    "name": "websyncdigital",
    "url": "https://www.websyncdigital.com.ng",
    "publisher": {
      "@id": "https://www.websyncdigital.com.ng/#organization"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://www.websyncdigital.com.ng/?s={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };

  // 3. LocalBusiness — triggers Knowledge Panel on the right of SERP
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ProfessionalService"],
    "@id": "https://www.websyncdigital.com.ng/#localbusiness",
    "name": "websyncdigital",
    "legalName": "WebSync Digital Technology Ltd",
    "alternateName": ["WebSync Digital Technology Ltd", "WebSync Nigeria", "WebSync Digital Agency"],
    "image": "https://www.websyncdigital.com.ng/icon.png",
    "url": "https://www.websyncdigital.com.ng",
    "telephone": "+2349111719701",
    "priceRange": "₦₦",
    "description": "Nigeria's #1 premium web design agency for SMEs — delivering enterprise-grade websites at ₦9,999/month. Zero setup fees. 7-day launch guarantee.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Awka",
      "addressRegion": "Anambra",
      "addressCountry": "NG"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 6.2088,
      "longitude": 7.0741
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
      "opens": "08:00",
      "closes": "20:00"
    },
    "sameAs": [
      "https://wa.me/2349111719701",
      "https://instagram.com/websyncdigital",
      "https://linkedin.com/company/websyncdigital"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "websyncdigital Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "name": "Monthly Website Subscription",
          "description": "Premium bespoke website with hosting, design, and unlimited updates — ₦9,999/month. Zero setup fee.",
          "price": "9999",
          "priceCurrency": "NGN",
          "priceSpecification": {
            "@type": "UnitPriceSpecification",
            "price": "9999",
            "priceCurrency": "NGN",
            "billingDuration": "P1M",
            "unitCode": "MON"
          },
          "url": "https://www.websyncdigital.com.ng/pricing"
        },
        {
          "@type": "Offer",
          "name": "One-Time Website Build",
          "description": "Enterprise-grade website built once — ₦480,000 upfront with ₦10,000/month maintenance.",
          "price": "480000",
          "priceCurrency": "NGN",
          "url": "https://www.websyncdigital.com.ng/pricing"
        }
      ]
    }
  };

  // 4. SiteNavigationElement — real URL paths for sitelinks
  const navigationSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": [
      {
        "@type": "SiteNavigationElement",
        "position": 1,
        "name": "Pricing — ₦9,999/Month Plans",
        "description": "See our all-inclusive monthly and one-time website pricing for Nigerian SMEs.",
        "url": "https://www.websyncdigital.com.ng/pricing"
      },
      {
        "@type": "SiteNavigationElement",
        "position": 2,
        "name": "Our Work — Client Results",
        "description": "Browse real projects and performance metrics from our portfolio of Nigerian SME clients.",
        "url": "https://www.websyncdigital.com.ng/work"
      },
      {
        "@type": "SiteNavigationElement",
        "position": 3,
        "name": "Contact Us — WhatsApp & Phone",
        "description": "Reach WebSync Digital instantly via WhatsApp or call our team directly.",
        "url": "https://www.websyncdigital.com.ng/contact"
      },
      {
        "@type": "SiteNavigationElement",
        "position": 4,
        "name": "Blog — Digital Growth Insights",
        "description": "Premium articles on web design, SEO strategy, and digital growth for Nigerian businesses.",
        "url": "https://www.websyncdigital.com.ng/blog"
      },
      {
        "@type": "SiteNavigationElement",
        "position": 5,
        "name": "Meet the Founder — West Taylor",
        "description": "The story of West Taylor, CEO & Founder of WebSync Digital — Nigeria's elite web architect.",
        "url": "https://www.websyncdigital.com.ng/west"
      }
    ]
  };

  // 5. BreadcrumbList — shows path hierarchy in SERP below title
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.websyncdigital.com.ng"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Pricing & Plans",
        "item": "https://www.websyncdigital.com.ng/pricing"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Our Work",
        "item": "https://www.websyncdigital.com.ng/work"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Contact",
        "item": "https://www.websyncdigital.com.ng/contact"
      },
      {
        "@type": "ListItem",
        "position": 5,
        "name": "Blog",
        "item": "https://www.websyncdigital.com.ng/blog"
      },
      {
        "@type": "ListItem",
        "position": 6,
        "name": "Meet the Founder",
        "item": "https://www.websyncdigital.com.ng/west"
      }
    ]
  };

  // 6. FAQ — expanded to 7 Qs (more real estate in SERP), bug fixed
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much does a website cost with WebSync Digital?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "WebSync Digital offers a premium ₦9,999 monthly subscription with absolutely zero setup fees. This flat-rate plan covers design, hosting, unlimited updates, and full technical support. You can also opt for a one-time ₦480,000 payment, though this still carries a ₦10,000/month maintenance fee — making the monthly plan the better value."
        }
      },
      {
        "@type": "Question",
        "name": "How long does it take WebSync Digital to launch a website?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our elite technical team guarantees a professional launch within 7 to 14 business days for most premium digital assets. We have built a specialized infrastructure that allows us to deliver world-class quality at unmatched speeds."
        }
      },
      {
        "@type": "Question",
        "name": "Is my payment safe on WebSync Digital?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. All payments are processed exclusively through Paystack, a PCI DSS Level 1 certified payment processor — the highest global security standard. WebSync Digital never views or stores your card information."
        }
      },
      {
        "@type": "Question",
        "name": "Who are the founders of WebSync Digital?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "WebSync Digital was founded by West Taylor (CEO & Founder), a recognized digital authority and expert web architect, and King Austin — Nwora Ebuka — (COO & Co-Founder), who drives operations and technical scalability for the agency."
        }
      },
      {
        "@type": "Question",
        "name": "What services does WebSync Digital offer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "WebSync Digital provides: (1) Elite bespoke web application development using React and Next.js, (2) Comprehensive Technical SEO and high-performance search architecture, (3) Generative Engine Optimization (GEO) for AI search placements, and (4) Digital Entity & Knowledge Graph verification services for brand authority."
        }
      },
      {
        "@type": "Question",
        "name": "Can I cancel my WebSync Digital subscription at any time?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. There are zero long-term contracts or exit penalties. If you feel we are not delivering full value for your brand, you may cancel your subscription at any time with no hidden fees."
        }
      },
      {
        "@type": "Question",
        "name": "Does WebSync Digital serve businesses outside Lagos and Anambra?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. WebSync Digital serves SMEs across all of Nigeria — including Lagos, Abuja, Port Harcourt, Awka, Enugu, and beyond. Our services are fully remote-first, meaning your location never limits your access to elite-grade digital infrastructure."
        }
      }
    ]
  };

  // 7. Person schemas — E-E-A-T signals
  const personWestSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://www.websyncdigital.com.ng/west#person",
    "name": "West Taylor",
    "jobTitle": "CEO & Founder of websyncdigital",
    "worksFor": { "@id": "https://www.websyncdigital.com.ng/#organization" },
    "description": "West Taylor is the visionary CEO and Founder of websyncdigital — widely recognized as a premier technical architect and digital authority in Nigeria's SME ecosystem.",
    "url": "https://www.websyncdigital.com.ng/west",
    "mainEntityOfPage": "https://www.websyncdigital.com.ng/west",
    "image": "https://www.websyncdigital.com.ng/assets/west_profile_updated.jpg",
    "knowsAbout": ["Web Engineering", "Digital Transformation", "Nigerian SME Growth", "Knowledge Graph Optimization", "Next.js", "React"],
    "sameAs": ["https://www.websyncdigital.com.ng", "https://wa.me/2349111719701"]
  };

  const personKingSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://www.websyncdigital.com.ng/#king-austin",
    "name": "Nwora Ebuka",
    "alternateName": "King Austin",
    "jobTitle": "COO & Co-Founder of websyncdigital",
    "worksFor": { "@id": "https://www.websyncdigital.com.ng/#organization" },
    "description": "King Austin is the COO and Co-Founder of websyncdigital, responsible for operations, technical architecture, and scalable delivery of elite digital products for Nigerian SMEs.",
    "url": "https://www.websyncdigital.com.ng",
    "mainEntityOfPage": "https://www.websyncdigital.com.ng"
  };

  // 8. Blog CollectionPage
  const blogCollectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": "https://www.websyncdigital.com.ng/blog#collection",
    "name": "websyncdigital Intelligence Hub",
    "description": "Premium insights, web design guides, SEO strategies, and digital growth playbooks for the Nigerian SME market.",
    "url": "https://www.websyncdigital.com.ng/blog",
    "publisher": { "@id": "https://www.websyncdigital.com.ng/#organization" }
  };

  return (
    <>
      <Script id="schema-organization" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <Script id="schema-website" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      <Script id="schema-localbusiness" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <Script id="schema-nav" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(navigationSchema) }} />
      <Script id="schema-breadcrumb" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="schema-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="schema-west" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personWestSchema) }} />
      <Script id="schema-king" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personKingSchema) }} />
      <Script id="schema-blog-collection" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogCollectionSchema) }} />
    </>
  );
};

export default SchemaOrg;
