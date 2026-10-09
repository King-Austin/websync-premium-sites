"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Hide scrollbar while preloading
    document.body.style.overflow = "hidden";

    // Set a timeout to remove the preloader
    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.style.overflow = "";
    }, 2800); // slightly longer to appreciate the cool animation

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#030305]/95 backdrop-blur-2xl"
        >
          {/* Main Visual Container */}
          <div className="relative flex h-56 w-56 items-center justify-center">
            
            {/* Ambient intense glow */}
            <motion.div 
              animate={{ opacity: [0.5, 0.8, 0.5], scale: [1, 1.2, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 rounded-full bg-primary/30 blur-[60px]" 
            />
            
            {/* Outer thin structural ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full border-[1px] border-primary/20"
            />
            
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              className="absolute inset-2 rounded-full border-[2px] border-transparent border-l-primary/40"
            />

            {/* Main thick spinning ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="absolute inset-6 rounded-full border-[3px] border-primary/10 border-t-primary border-r-primary drop-shadow-[0_0_15px_rgba(var(--primary),0.8)]"
            />
            
            {/* Reverse spinning dashed ring */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="absolute inset-10 rounded-full border-[2px] border-dashed border-primary/50"
            />

            {/* Inner dynamic core */}
            <motion.div
              animate={{ rotate: 360, scale: [0.8, 1, 0.8] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-14 rounded-full border-[4px] border-primary/20 border-b-primary shadow-[inset_0_0_20px_rgba(var(--primary),0.4)]"
            />

            {/* The absolute center glowing orb */}
            <motion.div
              animate={{ scale: [0.5, 1.5, 0.5], opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute h-3 w-3 rounded-full bg-white shadow-[0_0_20px_#fff,0_0_40px_rgba(var(--primary),1)]"
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-16 flex flex-col items-center gap-3"
          >

            <div className="flex items-center gap-3">
              <motion.div 
                animate={{ width: ["0%", "100%", "0%"], opacity: [0, 1, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="h-[1px] w-8 bg-gradient-to-r from-transparent via-primary to-transparent"
              />
              <span className="text-xs font-semibold tracking-[0.3em] text-primary/80 uppercase">
                Initializing
              </span>
              <motion.div 
                animate={{ width: ["0%", "100%", "0%"], opacity: [0, 1, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="h-[1px] w-8 bg-gradient-to-r from-transparent via-primary to-transparent"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
