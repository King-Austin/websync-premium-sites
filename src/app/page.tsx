import Script from 'next/script';
import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Registration from '@/components/Registration';
import PaystackSection from '@/components/PaystackSection';
import VideoSection from '@/components/VideoSection';
import Pricing from '@/components/Pricing';
import Metrics from '@/components/Metrics';
import Visionary from '@/components/Visionary';
import Testimonial from '@/components/Testimonial';
import FAQ from '@/components/FAQ';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: "WebSync Digital | #1 Web Design for Nigerian SMEs",
  description: "Get a premium website in 7 days for just ₦9,999/month. Zero setup fees, unlimited updates, and bank-grade security for your Nigerian business.",
  keywords: [
    "Affordable web design Nigeria", "Website for Nigerian SMEs", "₦9,999 website Lagos",
    "Professional web design Abuja", "Cheap website design Nigeria", "Web design agencies Lagos",
    "Ecommerce website builder Nigeria", "Small business website Nigeria", "Best SEO company Lagos",
    "Shopify alternatives Nigeria", "Wix alternatives Nigeria", "Hire web designers in Lagos fast",
    "₦10000 website creation", "Small dropshipping store Nigeria", "WordPress experts Lagos",
    "How to get a website in Nigeria", "Best cheap web hosting Nigeria", "Website management monthly",
    "SME loans and branding Nigeria", "WebSync Digital Pro Plan", "Online store setup Nigeria",
    "Paystack integrated websites", "Flutterwave checkout ecommerce", "Paystack secure payments web design",
    "Fast website creation 7 days", "Digital transformation Nigeria", "Web design firm Lekki",
    "Buy a website in Naira", "Local SEO services Lagos", "E-commerce store developer Nigeria",
    "Website subscription plan Lagos", "Top 10 web designers in Nigeria", "Best portfolio website builder",
    "Create business website Nigeria", "Web design promotion Lagos", "Website developers near me",
    "Affordable SEO optimized websites", "Web design quotes Nigeria", "Digital sales tools for SMEs",
    "Responsive web design Nigeria", "Graphic and web design agency", "Verve and Mastercard web pages",
    "Create an online presence Nigeria", "Fast secure web app development", "Nigerian digital infrastructure",
    "Premium frontend developers Lagos", "Real estate website developers Nigeria", "Law firm web design Nigeria",
    "NGO website design Nigeria", "Restaurant website builder Lagos", "Professional UI/UX Nigeria"
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "WebSync Pro Plan",
  "provider": {
    "@type": "Organization",
    "name": "WebSync Digital",
    "taxID": "9470161"
  },
  "description": "Premium 7-day website launch for Nigerian SMEs with zero setup fees and ₦9,999 monthly subscription.",
  "offers": {
    "@type": "Offer",
    "price": "9999",
    "priceCurrency": "NGN",
    "description": "Monthly subscription for elite web design and maintenance."
  },
  "areaServed": "NG"
};

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Script
        id="service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Navbar />
      <Hero />
      <Registration />
      <PaystackSection />
      <VideoSection />
      <Pricing />
      <Metrics />
      <Visionary />
      <Testimonial />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
