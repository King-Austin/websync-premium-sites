"use client";
import { useEffect } from "react";
/** Progressive motion: content stays visible before JavaScript and with reduced motion. */
export default function Reveal() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("ws-revealed");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.08 },
    );
    document
      .querySelectorAll(".ws-site .ws-section")
      .forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);
  return null;
}
