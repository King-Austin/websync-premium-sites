"use client";
import { useState } from "react";
import { Check, Pause, Play } from "lucide-react";
export default function BuilderBand() {
  const [paused, setPaused] = useState(false);
  return (
    <div className="ha-builder-wrap">
      <div className="ha-builder-band" aria-label="Engineering areas">
        <div style={{ animationPlayState: paused ? "paused" : undefined }}>
          {[0, 1].map((copy) => (
            <ul key={copy} aria-hidden={copy === 1 ? true : undefined}>
              {[
                "Backend systems",
                "Business software",
                "APIs & integrations",
                "Product delivery",
                "Founder mindset",
              ].map((label) => (
                <li key={label}>
                  <Check size={16} />
                  {label}
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
      <button
        className="ha-motion-control"
        onClick={() => setPaused(!paused)}
        aria-pressed={paused}
      >
        {paused ? <Play size={14} /> : <Pause size={14} />}{" "}
        {paused ? "Play animation" : "Pause animation"}
      </button>
    </div>
  );
}
