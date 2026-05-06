"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check, Zap, Rocket, ArrowRight } from "lucide-react";

const pricingPlans = [
  {
    name: "WebSync Pro",
    price: "₦9,999",
    originalPrice: "₦498,000",
    period: "/month",
    description: "Ideal for growing teams and businesses ready to scale.",
    icon: <Zap className="w-6 h-6" />,
    label: "Popular",
    features: [
      { title: "Bespoke Premium Design", desc: "Custom-built, high-conversion visual identity" },
      { title: "Unlimited Free Updates", desc: "Scale your content without limits or extra costs" },
      { title: "7–14 Day Fast Launch", desc: "Get your business live this week, not next month" },
      { title: "Priority WhatsApp Support", desc: "24/7 priority chat and deployment support" },
      { title: "Professional Domain", desc: "www.yourbrand.com.ng is fully covered at no extra cost" },
      { title: "Enterprise-Grade Hosting", desc: "We fully cover all monthly hosting and server costs" },
      { title: "Enterprise-Grade SEO", desc: "Dominate local search results and attract more customers" },
      { title: "Monthly Maintenance", desc: "We handle all security updates and technical health checks 24/7" },
    ],
    cta: "Subscribe",
    primary: true,
  },
  {
    name: "Traditional Agency",
    price: "₦498,000",
    period: "Upfront",
    description: "plus ₦10,000 / month maintenance fee",
    icon: <Rocket className="w-6 h-6" />,
    label: "Traditional",
    features: [
      { title: "Bespoke Premium Design", desc: "₦400,000 (Standard One-Time Cost)" },
      { title: "Website Updates", desc: "₦15,000 per individual update" },
      { title: "7–14 Day Fast Launch", desc: "Get your business live this week, not next month" },
      { title: "Priority WhatsApp Support", desc: "24/7 priority chat and deployment support" },
      { title: "Professional Domain", desc: "₦12,000 / year subscription (.com.ng)" },
      { title: "Enterprise-Grade Hosting", desc: "₦56,000 / year server costs" },
      { title: "Enterprise-Grade SEO", desc: "₦30,000 per local campaign" },
      { title: "Monthly Maintenance", desc: "₦10,000 / month technical health checks" },
    ],
    cta: "Subscribe",
    primary: false,
  },
];

const Pricing = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="pricing" className="py-16 md:py-24 bg-background text-foreground">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight"
          >
             Select Your Plan
          </motion.h2>
           <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-6 text-muted-foreground font-body text-base lg:text-lg max-w-xl mx-auto"
          >
             The most affordable high-end digital presence for Nigerian businesses. 
             Zero setup fee, zero hidden costs. Lagos&apos;s #1 SME web solution.
          </motion.p>
        </div>

        {/* Pricing Grid - Maintaining the compact 4xl width */}
        <div 
          ref={ref} 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto text-white"
        >
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`relative flex flex-col p-8 md:p-10 rounded-[2.5rem] border ${
                plan.primary 
                  ? "bg-[#141414] border-white/10 shadow-2xl ring-1 ring-white/5" 
                  : "bg-[#0c0c0c] border-white/5"
              }`}
            >
              {/* Floating Pill Badge for Most Popular Plan */}
              {plan.primary && (
                <div className="absolute -top-4 left-10 px-6 py-2 bg-white text-black text-[12px] font-bold rounded-full shadow-lg">
                  Most Popular
                </div>
              )}

              {/* Card Header: Icon & Top-Right Name */}
              <div className="flex justify-between items-start mb-8">
                <div className="p-3 bg-white/5 rounded-2xl border border-white/10 text-primary">
                  {plan.icon}
                </div>
                <span className="text-sm font-body font-bold tracking-widest uppercase opacity-40">
                  {plan.label}
                </span>
              </div>

              {/* Pricing Section */}
              <div className="mb-6">
                <div className="flex flex-col">
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl md:text-6xl font-display font-medium text-white tracking-tight">
                      {plan.price}
                    </span>
                    <span className="text-lg opacity-40 font-body">{plan.period}</span>
                  </div>
                  {plan.originalPrice && (
                    <span className="text-lg md:text-xl font-display line-through text-white font-medium italic mt-1 tracking-tight">
                      {plan.originalPrice}
                    </span>
                  )}
                </div>
                <p className="mt-4 text-white/60 font-body text-base leading-relaxed max-w-[280px]">
                  {plan.description}
                </p>
              </div>

              {/* Features List */}
              <div className="flex-grow space-y-6 mt-8">
                {plan.features.map((feature) => (
                  <div key={feature.title} className="flex gap-4">
                    <div className="mt-1 text-green-500">
                      <Check size={18} strokeWidth={3} />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white tracking-wide">
                        {feature.title}
                      </h4>
                      <p className="text-xs text-white mt-1 leading-relaxed">
                        {feature.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Action Button */}
              <div className="mt-12">
                <a
                  href="https://paystack.shop/pay/qgnem3g4a8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-5 rounded-2xl text-sm font-bold tracking-widest uppercase flex items-center justify-center gap-2 transition-all duration-500 border-2 ${
                    plan.primary 
                      ? "bg-white text-black hover:bg-white/90 hover:scale-[1.02]" 
                      : "bg-transparent border-white/10 text-white hover:bg-white/5 hover:border-white/20"
                  } group`}
                >
                  {plan.cta}
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Scarcity Notice */}
        <motion.div
           initial={{ opacity: 0 }}
           animate={isInView ? { opacity: 1 } : {}}
           transition={{ duration: 1, delay: 1 }}
           className="text-center mt-16"
        >
           <span className="px-6 py-3 bg-red-500/10 border border-red-500/20 text-red-500 text-[10px] uppercase tracking-[0.3em] font-bold rounded-full">
              Limited slots available
           </span>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
