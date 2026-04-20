"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import westProfile from "../../public/assets/west_profile_updated.jpg";
import austinProfile from "../../public/assets/nworah-ebuka-augustus.jpg";

const Visionary = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="vision" className="py-24 md:py-32 lg:py-40 bg-background overflow-hidden">
      <div className="container-custom">
        <div ref={ref} className="max-w-4xl mx-auto text-center">
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="mb-10 md:mb-14"
          >
             <span className="px-5 py-2.5 bg-primary/5 border border-primary/10 text-primary text-[10px] uppercase tracking-[0.4em] font-bold rounded-full">
                Our Visionary Mission
             </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.1] text-balance"
          >
             We Democratized <span className="italic font-light text-primary">Elite Design</span> for the Nigerian Enterprise.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
            className="mt-10 md:mt-14 text-lg md:text-xl lg:text-2xl text-muted-foreground font-body font-light leading-relaxed max-w-2xl mx-auto"
          >
             WebSync Digital was born from a simple truth: your business deserves a world-class presence, 
             regardless of your setup budget. We removed the ₦500k barrier so you can focus on what matters—scaling your legacy.
          </motion.p>

          {/* Founders Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 1 }}
            className="mt-24 md:mt-32 pt-24 border-t border-border/50"
          >
             <div className="mb-16 md:mb-20">
                <span className="text-[10px] uppercase font-bold tracking-[0.4em] text-primary/60">
                   Meet The Visionaries
                </span>
                <h3 className="mt-4 font-display text-3xl md:text-4xl font-semibold tracking-tight">The Minds Behind WebSync Digital</h3>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 text-left max-w-4xl mx-auto">
                {/* West - CEO */}
                <div className="space-y-8 group" itemScope itemType="https://schema.org/Person">
                   <div className="relative aspect-square md:aspect-[4/5] overflow-hidden rounded-[2rem] bg-secondary border border-border/50 shadow-lg transition-all duration-700 group-hover:scale-[1.02] group-hover:shadow-2xl">
                      <Image 
                        src={westProfile} 
                        alt="West Taylor - Founder & CEO of WebSync Digital Nigeria" 
                        fill 
                        itemProp="image"
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-40" />
                   </div>
                   <div className="space-y-6">
                      <div>
                        <h4 className="font-display text-2xl md:text-3xl font-bold tracking-tight" itemProp="name">West Taylor</h4>
                        <p className="text-primary text-base font-body font-bold uppercase tracking-widest mt-1" itemProp="jobTitle">Founder & CEO</p>
                      </div>
                      <div className="flex flex-wrap gap-2 pt-1">
                         {['Strategy', 'Leadership', 'Business Development'].map(tag => (
                            <span key={tag} className="px-2.5 py-1 bg-primary/5 border border-primary/10 text-[10px] font-bold uppercase tracking-widest text-primary/80 rounded-full">
                               {tag}
                            </span>
                         ))}
                      </div>
                      <p className="pt-6 text-sm md:text-base font-body italic text-muted-foreground leading-relaxed border-t border-border/30 mt-6 md:mt-8" itemProp="description">
                         &quot;My goal is simple: to make &apos;Professional&apos; the new standard for every Nigerian business online. WebSync Digital provides the premium infrastructure you need to look elite, communicate effectively, and capture the market&apos;s trust—driving the exponential growth your hard work deserves.&quot;
                      </p>
                      <div className="pt-6">
                         <a 
                           href="/west" 
                           className="inline-flex items-center gap-2 group/link text-xs md:text-sm font-bold uppercase tracking-widest text-primary hover:gap-3 transition-all duration-300"
                           itemProp="url"
                         >
                            Learn more about West Taylor
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="transition-transform group-hover/link:translate-x-1">
                               <path d="M5 12h14M12 5l7 7-7 7"/>
                            </svg>
                         </a>
                      </div>
                   </div>
                </div>

                {/* King Austin - COO */}
                <div className="space-y-8 group" itemScope itemType="https://schema.org/Person">
                   <div className="relative aspect-square md:aspect-[4/5] overflow-hidden rounded-[2rem] bg-secondary border border-border/50 shadow-lg transition-all duration-700 group-hover:scale-[1.02] group-hover:shadow-2xl">
                      <Image 
                        src={austinProfile} 
                        alt="King Austin (Nwora Ebuka) - Co-Founder & COO of WebSync Digital" 
                        fill 
                        itemProp="image"
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-40" />
                   </div>
                   <div className="space-y-6">
                      <div>
                        <h4 className="font-display text-2xl md:text-3xl font-bold tracking-tight" itemProp="name">King Austin</h4>
                        <p className="text-primary text-base font-body font-bold uppercase tracking-widest mt-1" itemProp="jobTitle">Co-Founder & COO</p>
                        <meta itemProp="alternateName" content="Nwora Ebuka" />
                      </div>
                      <div className="flex flex-wrap gap-2 pt-1">
                         {['Technical Architecture', 'Operations', 'Scalability'].map(tag => (
                            <span key={tag} className="px-2.5 py-1 bg-primary/5 border border-primary/10 text-[10px] font-bold uppercase tracking-widest text-primary/80 rounded-full">
                               {tag}
                            </span>
                         ))}
                      </div>
                      <p className="pt-6 text-sm md:text-base font-body italic text-muted-foreground leading-relaxed border-t border-border/30 mt-6 md:mt-8" itemProp="description">
                         &quot;I believe that global-scale growth is built on flawless digital operations. My mission is to design seamless technical ecosystems where complexity is refined into simplicity—allowing our partners to scale their dreams on a foundation of absolute operational excellence.&quot;
                      </p>
                      <div className="pt-6">
                         <a 
                           href="https://www.nworahebuka.nworahsoft.codes/" 
                           target="_blank"
                           rel="noopener noreferrer"
                           className="inline-flex items-center gap-2 group/link text-xs md:text-sm font-bold uppercase tracking-widest text-primary hover:gap-3 transition-all duration-300"
                           itemProp="url"
                         >
                            Learn more about King Austin
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="transition-transform group-hover/link:translate-x-1">
                               <path d="M5 12h14M12 5l7 7-7 7"/>
                            </svg>
                         </a>
                      </div>
                   </div>
                </div>
             </div>


          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Visionary;
