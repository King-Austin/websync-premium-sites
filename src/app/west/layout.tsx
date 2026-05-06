import { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: "Meet West Taylor | CEO & Founder of WebSync Digital Nigeria",
  description: "West Taylor is Nigeria's elite web architect and the visionary behind WebSync Digital. Learn about his mission to scale SME growth through institutional-grade tech.",
  alternates: {
    canonical: "https://www.websyncdigital.com.ng/west",
  },
  openGraph: {
    title: "West Taylor — Elite Web Architect & CEO",
    description: "The digital authority driving WebSync Digital's mission for Nigerian SMEs. Explore West's story and vision.",
    url: "https://www.websyncdigital.com.ng/west",
    siteName: "WebSync Digital",
    locale: "en_NG",
    type: "profile",
    firstName: "West",
    lastName: "Taylor",
    username: "west_taylor_",
    images: [
      {
        url: "https://www.websyncdigital.com.ng/assets/west_profile_updated.jpg",
        width: 800,
        height: 800,
        alt: "West Taylor CEO WebSync Digital",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "West Taylor | Expert Digital Architect",
    description: "CEO of WebSync Digital, specializing in AI architecture and SME growth.",
    images: ["https://websyncdigital.com.ng/assets/west-portrait.png"],
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "West Taylor",
  "jobTitle": "Founder and CEO",
  "worksFor": {
    "@type": "Organization",
    "@id": "https://www.websyncdigital.com.ng/#organization",
    "name": "WebSync Digital",
    "url": "https://www.websyncdigital.com.ng"
  },
  "url": "https://www.websyncdigital.com.ng/west",
  "image": "https://www.websyncdigital.com.ng/assets/west_profile_updated.jpg",
  "sameAs": [
    "https://www.instagram.com/west_taylor_?igsh=Y2J1b3BvdDlnODAy",
    "https://www.websyncdigital.com.ng"
  ],
  "description": "West Taylor is a visionary entrepreneur and software engineer, architecting the future of accessible high-level technology and AI infrastructure. He is the founder and CEO of WebSync Digital.",
  "knowsAbout": ["Mixture of Experts Architecture", "Software Engineering", "Web Development", "Artificial Intelligence Infrastructure"]
};

export default function WestLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Script
        id="west-person-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      {children}
    </>
  );
}
