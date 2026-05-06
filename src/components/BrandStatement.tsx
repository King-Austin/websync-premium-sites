"use client";

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

// Real Nigerian SME business types — the actual target audience
const smeTypes = [
  { icon: "🏪", label: "Retail & Boutique" },
  { icon: "🍽️", label: "Restaurant & Food" },
  { icon: "🏥", label: "Clinics & Pharmacy" },
  { icon: "🏠", label: "Real Estate" },
  { icon: "🚚", label: "Logistics & Dispatch" },
  { icon: "💇", label: "Hair & Beauty Salon" },
  { icon: "📱", label: "Tech & Gadgets" },
  { icon: "🎓", label: "Schools & Coaching" },
  { icon: "⚖️", label: "Legal & Consulting" },
  { icon: "🛠️", label: "Construction & Trades" },
];

const BrandStatement = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="section-padding bg-background" aria-label="Who we serve">
      <div className="container-custom">
        <div ref={ref} className="max-w-5xl mx-auto">

          {/* Accent line */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="accent-line mx-auto mb-10 md:mb-12"
          />

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-4"
          >
            <span className="text-sm font-body font-medium tracking-widest uppercase text-primary">
              Built For Nigerian SMEs
            </span>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-tight text-foreground text-balance">
              If your customers can&apos;t find you online,{' '}
              <span className="text-primary">they&apos;re going to your competitor.</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-6 md:mt-8 text-base md:text-lg text-muted-foreground font-body font-light max-w-2xl mx-auto text-center leading-relaxed"
          >
            You don&apos;t need a ₦500,000 budget or a tech background. You just need a website that looks elite, loads fast, and turns visitors into paying customers — from Day 1.
          </motion.p>

          {/* CTA Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-10 flex justify-center"
          >
            <a 
              href="https://wa.me/2349111719701?text=Hi%20websyncdigital%2C%20I%20want%20to%20get%20started."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-hero text-sm px-10 py-4"
            >
              Get Started — ₦9,999/month
            </a>
          </motion.div>

          {/* SME Types Pill Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12 flex flex-wrap justify-center gap-3"
            aria-label="Business types we serve"
          >
            {smeTypes.map((sme, i) => (
              <motion.span
                key={sme.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.7 + i * 0.05 }}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-border bg-secondary hover:border-primary/40 hover:bg-primary/5 transition-all duration-300 text-sm font-body font-medium text-foreground cursor-default"
              >
                <span>{sme.icon}</span>
                {sme.label}
              </motion.span>
            ))}
          </motion.div>

          {/* Social Proof line */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 1.3 }}
            className="mt-10 text-center text-sm font-body text-muted-foreground"
          >
            Trusted by <strong className="text-foreground">100+ Nigerian businesses</strong> across{' '}
            <strong className="text-foreground">Lagos, Abuja, Anambra, Port Harcourt</strong> and beyond.
          </motion.p>

        </div>
      </div>
    </section>
  );
};

export default BrandStatement;
