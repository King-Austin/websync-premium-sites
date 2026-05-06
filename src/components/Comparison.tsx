"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check, X, Shield, Zap, TrendingUp, Infinity } from "lucide-react";

const comparisonData = [
  {
    feature: "Upfront Setup Fee",
    websync: "₦0 (Zero Risk)",
    traditional: "₦400,000 - ₦1,500,000",
    websyncIcon: <Shield className="text-green-500" size={18} />,
    traditionalIcon: <X className="text-red-500" size={18} />,
  },
  {
    feature: "Launch Speed",
    websync: "7 - 14 Days",
    traditional: "2 - 4 Months",
    websyncIcon: <Zap className="text-amber-500" size={18} />,
    traditionalIcon: <X className="text-red-500" size={18} />,
  },
  {
    feature: "Ongoing Updates",
    websync: "Unlimited Free Updates",
    traditional: "Pay-per-minute or ₦15k/update",
    websyncIcon: <Infinity className="text-blue-500" size={18} />,
    traditionalIcon: <X className="text-red-500" size={18} />,
  },
  {
    feature: "Domain & Hosting",
    websync: "Fully Included (.com.ng)",
    traditional: "Hidden Yearly Renewals",
    websyncIcon: <Check className="text-green-500" size={18} />,
    traditionalIcon: <X className="text-red-500" size={18} />,
  },
  {
    feature: "Security Framework",
    websync: "PCI DSS (Paystack Secured)",
    traditional: "Basic SSL / High Vulnerability",
    websyncIcon: <Shield className="text-green-500" size={18} />,
    traditionalIcon: <X className="text-red-500" size={18} />,
  },
  {
    feature: "Strategic Growth",
    websync: "Dedicated Partnership",
    traditional: "Transaction-Based (Finished on launch)",
    websyncIcon: <TrendingUp className="text-primary" size={18} />,
    traditionalIcon: <X className="text-red-500" size={18} />,
  },
];

const Comparison = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="comparison" className="py-24 md:py-32 bg-white text-black overflow-hidden border-t border-border/50">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20 md:mb-28">
             <motion.span 
               initial={{ opacity: 0 }}
               animate={isInView ? { opacity: 1 } : {}}
               className="text-[10px] uppercase font-bold tracking-[0.4em] text-primary/40 mb-6 block"
             >
                Why Smart SMEs Choose websyncdigital
             </motion.span>
             <motion.h2 
               initial={{ opacity: 0, y: 30 }}
               animate={isInView ? { opacity: 1, y: 0 } : {}}
               transition={{ duration: 0.6 }}
               className="font-display text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight"
             >
                What You Used to Pay vs.{' '}<span className="italic font-light text-primary">What You Pay with websyncdigital</span>
             </motion.h2>
             <p className="mt-6 font-body text-base text-muted-foreground max-w-xl mx-auto">
               Traditional agencies charge you ₦400k–₦1.5M <em>before</em> building a single page.
               websyncdigital charges <strong>₦0 upfront</strong> and launches your business in 7 days.
             </p>
          </div>

          {/* Table Container */}
          <div ref={ref} className="relative rounded-[2.5rem] overflow-hidden border border-border shadow-2xl bg-white">
            
            {/* Table Header Row */}
            <div className="grid grid-cols-2 md:grid-cols-3 bg-[#0a0a0a] text-white py-8 px-6 md:px-10 border-b border-white/10">
               <div className="hidden md:block font-display text-xs uppercase tracking-widest font-bold opacity-30">Feature</div>
               <div className="font-display text-xs md:text-sm uppercase tracking-[0.2em] font-black text-primary text-center md:text-left">websyncdigital</div>
               <div className="font-display text-xs md:text-sm uppercase tracking-[0.2em] font-bold opacity-30 text-center md:text-left">Traditional Agency</div>
            </div>

            {/* Comparison Rows */}
            <div className="divide-y divide-border/50">
               {comparisonData.map((item, index) => (
                 <motion.div 
                   key={item.feature}
                   initial={{ opacity: 0, x: -20 }}
                   animate={isInView ? { opacity: 1, x: 0 } : {}}
                   transition={{ duration: 0.5, delay: index * 0.1 }}
                   className="grid grid-cols-2 md:grid-cols-3 py-8 px-6 md:px-10 hover:bg-secondary/50 transition-colors group"
                 >
                    {/* Feature Label (Mobile Hidden Column, but visible in layout) */}
                    <div className="col-span-2 md:col-span-1 mb-4 md:mb-0">
                       <span className="text-xs uppercase font-bold tracking-widest text-muted-foreground block md:hidden mb-2">Benefit</span>
                       <span className="text-sm font-display font-bold text-foreground">{item.feature}</span>
                    </div>

                    {/* WebSync Column */}
                    <div className="flex items-center gap-3 pr-4 border-r border-border md:border-none">
                       <div className="p-1 rounded-full bg-primary/5 transition-transform group-hover:scale-110">
                          {item.websyncIcon}
                       </div>
                       <span className="text-sm md:text-base font-body font-bold text-foreground">{item.websync}</span>
                    </div>

                    {/* Traditional Column */}
                    <div className="flex items-center gap-3 pl-4 md:pl-0">
                       <div className="p-1 rounded-full bg-red-500/5 transition-transform group-hover:scale-110">
                          {item.traditionalIcon}
                       </div>
                       <span className="text-sm md:text-base font-body font-medium text-muted-foreground opacity-60 italic">{item.traditional}</span>
                    </div>
                 </motion.div>
               ))}
            </div>
          </div>

          {/* Bottom Proof Bar & CTA */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-12 flex flex-col items-center gap-8"
          >
            <div className="w-full relative rounded-[2.5rem] overflow-hidden border border-border shadow-2xl bg-white">
              {/* Previous Table Content remains same, adding CTA below */}
              
              {/* Bottom Proof Bar */}
              <div className="bg-[#0a0a0a] py-6 px-10 flex flex-col md:flex-row justify-between items-center gap-4">
                 <span className="text-[10px] uppercase font-bold tracking-widest text-primary/60">Verified Comparison Model 2026</span>
                 <a href="https://wa.me/2349111719701?text=I%20want%20to%20switch%20to%20WebSync%20Digital." className="text-xs font-black uppercase tracking-widest text-white hover:text-primary transition-colors">
                    Switch to WebSync Now — Chat on WhatsApp →
                 </a>
              </div>
            </div>

            <p className="text-sm font-body text-muted-foreground font-light leading-relaxed max-w-xl text-center italic">
               &quot;While your competitor&apos;s site was still <strong>being built</strong>, your WebSync site already had <strong>customers calling</strong>. That&apos;s the 7-day difference.&quot;
            </p>

            <a 
              href="https://wa.me/2349111719701?text=Hi%20websyncdigital%2C%20I%20want%20to%20get%20started."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-hero"
            >
              Get Started for ₦9,999/month
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
