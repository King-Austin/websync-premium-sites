import type { Metadata } from "next";
import { Providers } from "@/components/providers";
import SchemaOrg from "@/components/SchemaOrg";
import { Analytics } from "@vercel/analytics/next";
import "../index.css";


export const metadata: Metadata = {
  title: "WebSync Digital | Best Web Design Agency in Nigeria | ₦9,999/Month",
  description: "WebSync Digital is Nigeria's top tech agency for SMEs. Get a premium, bespoke website for just ₦9,999/month with zero setup fees. Fast 7-day launch by CEO West & COO King Austin.",
  keywords: [
    "WebSync Digital", "WebSync Nigeria", "Best Web Design Agency Nigeria", 
    "₦9,999 Website Nigeria", "Affordable Web Design Lagos", "West CEO WebSync", 
    "King Austin COO WebSync", "Nwora Ebuka", "SME Digital Marketing Nigeria",
    "Elite Web Development Lagos", "Paystack Secured Payments Nigeria", "Fast Launch Website",
    "Top Web Developers in Nigeria", "Software Engineering Agency Lagos", "SaaS Builders Nigeria",
    "Web Designers in Anambra", "Tech Companies in Awka", "Digital Agency Port Harcourt",
    "Website Creator Nigeria", "Web Development Subscription Nigeria", "Monthly Website Plan Nigeria",
    "Secure Payment Gateway Integration Nigeria", "React JS Developers Nigeria", "Next JS Developers Lagos",
    "Custom Web Applications Nigeria", "WebSync Digital Reviews", "Hire Nigerian Web Developer",
    "Web Design Packages for Startups", "Best IT Firm in Nigeria", "E-commerce Experts Lagos",
    "Web Design Services Nigeria", "Website Management Nigeria", "Digital Presence Nigerian Business",
    "Web App Development Nigeria", "Website Security Services Nigeria", "Google Ranking Agency Lagos",
    "Corporate Website Design Nigeria", "Best Website Builders in Africa", "Tech Startups in Nigeria",
    "Web Agency for Nigerian SMEs", "Fast Loading Website Nigeria", "WebSync Tech",
    "Nigerian Founders Web Solutions", "Custom Software Development Nigeria", "Website Maintenance Services Lagos",
    "Domain and Hosting Nigeria", "Web Design Consultancy Nigeria", "B2B Web Design Nigeria",
    "Creative Web Agency Nigeria", "Web Developers in Onitsha", "Web Solutions for African Businesses"
  ],
  authors: [{ name: "WebSync Digital Team", url: "https://www.websyncdigital.com.ng" }],
  metadataBase: new URL("https://www.websyncdigital.com.ng"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/icon.png",
  },
  openGraph: {
    title: "WebSync Digital | Elite Web Design for Nigerian SMEs",
    description: "Transform your business with a premium digital presence for only ₦9,999 monthly. No setup fees. Powered by West & King Austin.",
    url: "https://www.websyncdigital.com.ng",
    siteName: "WebSync Digital",
    locale: "en_NG",
    type: "website",
    images: [
      {
        url: "/icon.png",
        width: 1200,
        height: 630,
        alt: "WebSync Digital - Elite Web Design for Nigerian SMEs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "WebSync Digital | #1 Tech Agency for Nigerian Businesses",
    description: "Get an elite website for ₦9,999/month. Zero setup fees. 100% Secure via Paystack.",
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
        <Providers>{children}</Providers>
        <Analytics />

      </body>
    </html>
  );
}
