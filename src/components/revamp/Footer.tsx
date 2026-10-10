"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ArrowUp, Copy, Check, MessageCircle } from "lucide-react";
import { services } from "@/data/services";
import { enquiryUrl } from "@/data/projects";
export default function Footer() {
  const [copied, setCopied] = useState(false);
  const [clock, setClock] = useState("");
  useEffect(() => {
    const update = () =>
      setClock(
        new Intl.DateTimeFormat("en-NG", {
          timeZone: "Africa/Lagos",
          hour: "numeric",
          minute: "2-digit",
        }).format(new Date()),
      );
    update();
    const timer = setInterval(update, 60000);
    return () => clearInterval(timer);
  }, []);
  async function copy() {
    try {
      await navigator.clipboard.writeText("digitalwebsync@gmail.com");
      setCopied(true);
    } catch {
      setCopied(false);
    }
  }
  return (
    <footer className="ws-footer ha-footer">
      <div className="ws-container">
        <div className="ha-footer-grid">
          <div className="ha-footer-intro">
            <Link href="/" aria-label="WebSync Digital home">
              <Image
                src="/assets/logo.png"
                alt="WebSync Digital"
                width={155}
                height={42}
              />
            </Link>
            <h2>
              Got a project
              <br />
              in mind?
            </h2>
            <p>
              Tell us what you need. We’ll help you find a clear plan and the
              next step.
            </p>
            <div className="ha-footer-email">
              <a href="mailto:digitalwebsync@gmail.com">
                digitalwebsync@gmail.com
              </a>
              <button onClick={copy} aria-label="Copy email address">
                {copied ? <Check size={16} /> : <Copy size={16} />}
              </button>
            </div>
            <span className="ha-copy-status" role="status">
              {copied ? "Email copied" : ""}
            </span>
            <a
              className="ha-footer-whatsapp"
              href={enquiryUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle size={16} /> +234 911 171 9701
            </a>
            <p className="ha-local-time">
              It’s <time>{clock || "local time"}</time> in Awka, Nigeria
            </p>
          </div>
          <nav aria-label="Footer services">
            <h3>Services</h3>
            {services.map((s) => (
              <Link key={s.slug} href={`/services/${s.slug}`}>
                {s.name}
              </Link>
            ))}
          </nav>
          <nav aria-label="Footer company">
            <h3>Company</h3>
            {[
              ["Our work", "/work"],
              ["Pricing", "/pricing"],
              ["Startups", "/startups"],
              ["About", "/about"],
              ["Contact", "/contact"],
              ["Journal", "/blog"],
            ].map(([t, h]) => (
              <Link key={t} href={h}>
                {t}
              </Link>
            ))}
          </nav>
          <div>
            <nav aria-label="Legal">
              <h3>Legal</h3>
              <Link href="/privacy">Privacy policy</Link>
              <Link href="/terms">Terms of service</Link>
            </nav>
            <div className="ha-footer-journal">
              <h3>The WebSync Journal</h3>
              <p>
                Practical guides on websites, design and business technology.
              </p>
              <Link href="/blog" className="ws-text-link">
                Explore the journal ↗
              </Link>
            </div>
          </div>
        </div>
        <div className="ha-footer-bottom">
          <p>© {new Date().getFullYear()} WebSync Digital. RC 9470161.</p>
          <span>Built for businesses. Made in Nigeria.</span>
          <a href="#main-content" aria-label="Back to top">
            <ArrowUp size={20} />
          </a>
        </div>
        <div className="ha-wordmark" aria-hidden="true">
          websync<span>↗</span>
        </div>
      </div>
    </footer>
  );
}
