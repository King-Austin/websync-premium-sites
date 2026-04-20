"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const faqItems = [
  {
    question: "Is there really zero setup fee for my website?",
    answer: "Yes. Unlike traditional agencies that charge ₦500k+ upfront, we charge ₦0 to start. You only pay your monthly subscription of ₦9,999 to get a world-class, premium digital asset."
  },
  {
    question: "How can you launch a high-end website in just 7 days?",
    answer: "We’ve spent months building a specialized design and development infrastructure designed for high-conversion performance. This depth of focus allows us to deliver elite assets at unmatched speeds without sacrificing quality."
  },
  {
    question: "Is my payment information safe with the Paystack integration?",
    answer: "100%. Paystack is a PCI DSS Level 1 certified processor—the highest security level in the global payments industry. WebSync Digital never sees or stores your card details. All transactions are handled exclusively by Paystack’s institutional-grade encrypted infrastructure."
  },
  {
    question: "Why is WebSync Digital so much more affordable than traditional agencies?",
    answer: "Traditional models rely on high upfront commissions just to cover their overhead. We believe in recurring partnerships. Our low cost reflects our commitment to growth: we succeed only when your business succeeds."
  },
  {
    question: "Can I cancel my subscription at any time?",
    answer: "Absolutely. We prioritize your freedom over restrictive, long-term contracts. If you ever feel we aren’t delivering the value your brand deserves, you can cancel with zero penalties or hidden exit fees."
  },
  {
    question: "Who are the founders of WebSync Digital?",
    answer: "WebSync Digital was founded by West Taylor (CEO & Founder) — a recognized digital authority and expert web architect — and King Austin, Nwora Ebuka (COO & Co-Founder), who drives operations and technical scalability for Nigeria’s #1 web agency."
  },
  {
    question: "What services does WebSync Digital offer?",
    answer: "WebSync Digital provides: elite bespoke web application development (React, Next.js), comprehensive Technical SEO and high-performance search architecture, Generative Engine Optimization (GEO) for AI search placements, and Digital Entity & Knowledge Graph verification to build lasting brand authority."
  }
];

const FAQ = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="faq" className="section-padding bg-secondary">
      <div className="container-custom max-w-3xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-16"
        >

          <span className="block text-sm font-body font-medium tracking-widest uppercase text-primary">
            Information
          </span>
          <h2 className="mt-3 md:mt-4 font-display text-3xl sm:text-4xl md:text-5xl font-medium text-foreground">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 font-body text-sm text-muted-foreground max-w-lg mx-auto">
            Everything you need to know about working with Nigeria&apos;s most trusted premium web agency.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-display text-base md:text-lg">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="font-body text-sm md:text-base text-muted-foreground leading-relaxed">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
        

      </div>
    </section>
  );
};

export default FAQ;
