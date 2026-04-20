"use client";

import { motion, useInView } from 'framer-motion';
import heroImage from '../../public/assets/hero-image.jpg';
import Image from 'next/image';
import { useRef } from 'react';

const Hero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="hero" ref={ref} className="relative h-screen w-full overflow-hidden min-h-[600px]">
      {/* Background Image with Slow Zoom */}
      <motion.div
        initial={{ scale: 1 }}
        animate={{ scale: 1.1 }}
        transition={{ duration: 20, ease: 'easeOut' }}
        className="absolute inset-0"
      >
        <Image
          src={heroImage}
          alt="WebSync Digital - Modern architectural interior with dramatic minimalist lighting providing inspiration for digital design"
          fill
          className="object-cover"
          priority
        />
      </motion.div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-foreground/40" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container-custom">
          <div className="max-w-3xl">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold text-primary-foreground leading-tight text-shadow-hero text-balance text-left"
            >
              Powering Nigerian Businesses with World-Class Websites. Only ₦9,999 Monthly.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-4 md:mt-6 text-base md:text-lg lg:text-xl text-primary-foreground/90 font-body font-light max-w-2xl text-left"
            >
              Join 100+ Nigerian businesses scaling with WebSync Digital. The most affordable high-end web design agency in Lagos. Launched in 7 days. Guaranteed SME growth.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="mt-8 md:mt-10 flex flex-wrap gap-4"
            >
              <a 
                href="https://paystack.shop/pay/qgnem3g4a8" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-hero"
              >
                GET STARTED FOR ₦9,999/MONTH
              </a>
              <a
                href="https://wa.me/2349111719701"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-hero-outline"
              >
                CHAT ON WHATSAPP
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Smaller & Lower to avoid clashing with Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center group cursor-pointer z-20 scale-75 md:scale-90"
        onClick={() => {
          const nextSection = document.getElementById('hero')?.nextElementSibling;
          nextSection?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <motion.span 
          className="text-[8px] uppercase tracking-[0.5em] text-primary-foreground/60 mb-2 font-medium transition-colors duration-500 group-hover:text-primary-foreground drop-shadow-sm"
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          Explore
        </motion.span>
        
        <div className="relative h-12 w-6 flex justify-center">
          <div className="absolute top-0 w-[0.5px] h-full bg-gradient-to-b from-primary-foreground/0 via-primary-foreground/30 to-primary-foreground/0" />
          
          <motion.div
            animate={{ 
              y: [-15, 36],
              opacity: [0, 1, 1, 0],
              scaleY: [0.6, 1, 0.6]
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity, 
              ease: [0.45, 0, 0.55, 1] 
            }}
            className="w-[1px] h-6 bg-gradient-to-b from-transparent via-primary-foreground to-transparent origin-top blur-[0.3px]"
          />
          
          <motion.div 
            className="absolute bottom-0 text-primary-foreground/40 group-hover:text-primary-foreground transition-colors duration-500 drop-shadow-md"
            animate={{ y: [0, 2, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
             <svg width="12" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L7 7L13 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
             </svg>
          </motion.div>
        </div>
        
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-primary-foreground/5 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />
      </motion.div>
    </section>
  );
};

export default Hero;
