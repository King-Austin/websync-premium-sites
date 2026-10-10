import type { Metadata } from "next";
import { Providers } from "@/components/providers";
import SchemaOrg from "@/components/SchemaOrg";
import { Analytics } from "@vercel/analytics/next";

import "../index.css";
import "../revamp.css";


export const metadata: Metadata = {
  title: "WebSync Digital | Websites & software for your business",
  description: "Business websites, online stores and custom software from WebSync Digital. Explore our work, subscription scope and service terms.",
  keywords: [
    "websyncdigital", "WebSync Nigeria", "Best Web Design Agency Nigeria", 
    "₦9,999 Website Nigeria", "Affordable Web Design Lagos", "West CEO WebSync", 
    "King Austin COO WebSync", "Nwora Ebuka", "SME Digital Marketing Nigeria",
    "Elite Web Development Lagos", "Paystack Secured Payments Nigeria", "Fast Launch Website",
    "Top Web Developers in Nigeria", "Software Engineering Agency Lagos", "SaaS Builders Nigeria",
    "Web Designers in Anambra", "Tech Companies in Awka", "Digital Agency Port Harcourt",
    "Website Creator Nigeria", "Web Development Subscription Nigeria", "Monthly Website Plan Nigeria",
    "Secure Payment Gateway Integration Nigeria", "React JS Developers Nigeria", "Next JS Developers Lagos",
    "Custom Web Applications Nigeria", "websyncdigital Reviews", "Hire Nigerian Web Developer",
    "Web Design Packages for Startups", "Best IT Firm in Nigeria", "E-commerce Experts Lagos",
    "Web Design Services Nigeria", "Website Management Nigeria", "Digital Presence Nigerian Business",
    "Web App Development Nigeria", "Website Security Services Nigeria", "Google Ranking Agency Lagos",
    "Corporate Website Design Nigeria", "Best Website Builders in Africa", "Tech Startups in Nigeria",
    "Web Agency for Nigerian SMEs", "Fast Loading Website Nigeria", "websyncdigital Tech",
    "Nigerian Founders Web Solutions", "Custom Software Development Nigeria", "Website Maintenance Services Lagos",
    "Domain and Hosting Nigeria", "Web Design Consultancy Nigeria", "B2B Web Design Nigeria",
    "Creative Web Agency Nigeria", "Web Developers in Onitsha", "Web Solutions for African Businesses",
    "Websyncdigital Technology Ltd", "websyncdigital technology limited", "websyncdigital tech nigeria"
  ],
  authors: [{ name: "websyncdigital Team", url: "https://www.websyncdigital.com.ng" }],
  publisher: "Websyncdigital Technology Ltd",
  metadataBase: new URL("https://www.websyncdigital.com.ng"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/icon.png",
  },
  openGraph: {
    title: "websyncdigital | Elite Web Design for Nigerian SMEs",
    description: "Transform your business with a premium digital presence for only ₦9,999 monthly. Website design, software and ongoing support.",
    url: "https://www.websyncdigital.com.ng",
    siteName: "websyncdigital",
    locale: "en_NG",
    type: "website",
    images: [
      {
        url: "/icon.png",
        width: 1200,
        height: 630,
        alt: "websyncdigital - Elite Web Design for Nigerian SMEs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "WebSync Digital | Websites & software for Nigerian businesses",
    description: "Explore our work and the scope and terms of our website subscription.",
    images: ["/icon.png"],
    creator: "@websyncdigital",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  // Invisible meta tags for Google entity bridging
  other: {
    "organization": "Websyncdigital Technology Ltd",
    "legal-name": "Websyncdigital Technology Ltd",
    "brand-name": "websyncdigital",
    "business-registration": "RC 9470161",
    "business-type": "Technology Company",
    "geo.region": "NG-AN",
    "geo.placename": "Awka, Anambra, Nigeria",
    "ICBM": "6.2088, 7.0741",
    "DC.title": "WebSync Digital — Websites & software for businesses",
    "DC.creator": "Websyncdigital Technology Ltd",
    "DC.publisher": "Websyncdigital Technology Ltd",
    "DC.rights": "Copyright 2024 Websyncdigital Technology Ltd. All rights reserved.",
    "DC.language": "en-NG",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SchemaOrg />
        {/* Hidden entity bridge for Google Knowledge Graph — not visible to users */}
        <span
          aria-hidden="true"
          style={{ display: 'none' }}
          itemScope
          itemType="https://schema.org/Organization"
        >
          <span itemProp="name">websyncdigital</span>
          <span itemProp="legalName">Websyncdigital Technology Ltd</span>
          <span itemProp="url">https://www.websyncdigital.com.ng</span>
          <span itemProp="taxID">9470161</span>
          <span itemProp="telephone">+2349111719701</span>
        </span>
        <Providers>{children}</Providers>
        <Analytics />

      </body>
    </html>
  );
}
