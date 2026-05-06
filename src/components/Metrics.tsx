"use client";

import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

const metrics = [
  { value: 100, suffix: '+', label: 'SME Businesses Launched Online', sublabel: 'From ₦0 setup fee' },
  { value: 98, suffix: '%', label: 'Business Owners Satisfied', sublabel: 'Strategic Service Tenure' },
  { value: 7, suffix: '-14', label: 'Days to Go Live', sublabel: 'Fastest in Nigeria' },
  { value: 24, suffix: '/7', label: 'Support — Always Here', sublabel: 'WhatsApp direct line' },
];

interface CounterProps {
  target: number;
  suffix: string;
  isInView: boolean;
}

const Counter = ({ target, suffix, isInView }: CounterProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
};

const Metrics = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="metrics" className="py-16 md:py-20 lg:py-28 bg-secondary">
      <div className="container-custom">
        <div ref={ref} className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-12">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-foreground">
                <Counter
                  target={metric.value}
                  suffix={metric.suffix}
                  isInView={isInView}
                />
              </div>
              <p className="mt-2 md:mt-3 text-xs sm:text-sm font-body font-medium tracking-wide uppercase text-muted-foreground">
                {metric.label}
              </p>
              <p className="mt-1 text-[11px] font-body text-primary/60 tracking-widest uppercase">
                {metric.sublabel}
              </p>
            </motion.div>
          ))}
        </div>



        {/* SME Reality Check */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center font-body text-sm text-muted-foreground max-w-xl mx-auto"
        >
          Whether you run a <strong className="text-foreground">salon, restaurant, pharmacy, logistics company</strong>, or any Nigerian SME — your business deserves to be found online. We make that happen in <strong className="text-foreground">7 days</strong>, for <strong className="text-foreground">₦9,999/month</strong>.
        </motion.p>
      </div>
    </section>
  );
};

export default Metrics;
