"use client";

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import ctaImage from '../../public/assets/final-cta-image.png';

const FinalCTA = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="contact" className="py-24 md:py-32 lg:py-40 bg-background overflow-hidden">
      <div className="container-custom">
        <div ref={ref} className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Image Side - Left on Desktop */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="w-full lg:w-1/2 flex justify-center lg:justify-start"
          >
             <div className="relative w-full max-w-2xl aspect-video overflow-hidden rounded-[2.5rem] shadow-xl ring-1 ring-border/10 group bg-secondary/30">
                <Image 
                  src={ctaImage} 
                  alt="WebSync Digital Nigeria - Elite Web Design Strategy and Executive Consulting"
                  fill
                  className="object-contain p-4 rounded-[2rem] transition-transform duration-700 group-hover:scale-105"
                />
             </div>
          </motion.div>

          {/* Text Content Side - Right on Desktop */}
          <div className="w-full lg:w-1/2 text-center lg:text-left space-y-8 md:space-y-10">
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
              transition={{ duration: 0.6 }}
              className="accent-line mx-auto lg:mx-0"
            />

            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-display text-4xl sm:text-5xl md:text-6xl font-medium text-foreground tracking-tight leading-tight text-balance"
            >
              Contact us today
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl text-muted-foreground font-body font-light leading-relaxed max-w-xl mx-auto lg:mx-0"
            >
              Get a premium, enterprise-grade website for your business today. 
              <strong> ₦9,999/month. Zero setup fees.</strong> No technical skills needed. 
              We handle the tech, you handle the growth.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex justify-center lg:justify-start"
            >
              <a 
                href="https://wa.me/2349111719701" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-hero"
              >
                Chat on WhatsApp — Get Started
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
