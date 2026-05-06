"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const VideoSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="demo" className="section-padding bg-background">
      <div className="container-custom">
        <div ref={ref} className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-10 md:mb-16"
          >
            <span className="text-xs font-body font-bold tracking-[0.3em] uppercase text-primary mb-3 block">
              Our Vision in Action
            </span>
            <h2 className="mt-3 md:mt-4 font-display text-3xl sm:text-4xl md:text-5xl font-medium text-foreground leading-tight">
              See How websyncdigital Transforms Your Business
            </h2>
            <p className="mt-6 text-base md:text-lg text-muted-foreground font-body font-light leading-relaxed max-w-2xl mx-auto">
              We explain our world-class ₦9,999/month offer, our 7-day launch process, and why there are zero hidden fees—ever.
            </p>
          </motion.div>

          {/* YouTube Video Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl ring-1 ring-border/50 bg-[#0a0a0a]"
          >
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/k9E0YteooHY"
              title="See How WebSync Digital Transforms Your Business"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
