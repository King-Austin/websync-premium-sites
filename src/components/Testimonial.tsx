"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const Testimonial = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 md:py-24 bg-secondary/30 overflow-hidden">
      <div className="container-custom">
        <div ref={ref} className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
            
            {/* Image section */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: -30 }}
              animate={isInView ? { opacity: 1, scale: 1, x: 0 } : {}}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative aspect-square md:aspect-[4/5] flex items-center justify-center lg:justify-end"
            >
              <div className="relative w-full h-full max-w-[450px] max-h-[550px]">
                <Image
                  src="/assets/real-estate-testimonial.png"
                  alt="Testimonial from the biggest real estate company in Anambra"
                  fill
                  className="object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.1)] drop-shadow-[0_30px_60px_hsl(var(--primary)/0.1)] transition-transform duration-1000 hover:scale-105"
                  priority
                />
              </div>
            </motion.div>

            {/* Text section */}
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8 }}
                className="flex flex-col gap-2 relative"
              >
                <div className="flex items-center gap-4 mb-2">
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} className="w-5 h-5 text-[#FFD700]" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm font-bold text-foreground/60 tracking-wider">4.8/5 Rating</span>
                </div>
                <h4 className="font-display text-xl md:text-2xl lg:text-3xl font-black tracking-tight text-foreground uppercase leading-tight">
                  from One of the Biggest Real Estate Companies in Anambra
                </h4>
                <p className="text-sm md:text-base font-body text-primary font-bold uppercase tracking-[0.3em] flex items-center gap-2">
                   <span className="w-2 h-2 rounded-full bg-primary" />
                   Verified Nigerian SME
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: 0.2 }}
                className="relative pt-8 border-t border-border/50"
              >
                {/* Large decorative quote marks */}
                <span className="absolute -left-12 -top-4 font-display text-[12rem] text-primary/10 leading-none pointer-events-none select-none">
                  &ldquo;
                </span>
                
                <blockquote className="relative font-display text-xl sm:text-2xl md:text-3xl font-medium leading-[1.4] text-foreground tracking-tight">
                  <span className="text-primary font-bold">West</span> and the WebSync Digital team are the best in the business. They were so good with us and our website, delivering top-tier quality and helping with every detail. We fully recommend WebSync Digital for your business growth.
                </blockquote>
              </motion.div>
            </div>
          </div>


        </div>
      </div>
    </section>
  );
};

export default Testimonial;
