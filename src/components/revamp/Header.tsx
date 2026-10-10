"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, CalendarDays } from "lucide-react";
const links = [
  ["Home", "/"],
  ["Services", "/#services"],
  ["Our work", "/work"],
  ["Pricing", "/pricing"],
  ["Startups", "/startups"],
  ["About", "/about"],
  ["Contact", "/contact"],
  ["Blog", "/blog"],
];
export default function Header() {
  const [open, setOpen] = useState(false);
  const path = usePathname();
  return (
    <header className="ws-header">
      <a href="#main-content" className="ws-skip">
        Skip to content
      </a>
      <div className="ws-container ws-nav">
        <Link className="ha-brand" href="/" aria-label="WebSync Digital home">
          <Image
            src="/assets/logo.png"
            alt="WebSync Digital"
            width={148}
            height={40}
            className="ws-logo"
            priority
          />
          <span>HUB</span>
        </Link>
        <nav className="ws-desktop-nav" aria-label="Main navigation">
          {links.map(([label, href]) => (
            <Link
              key={label}
              href={href}
              aria-current={href === path ? "page" : undefined}
            >
              {label}
            </Link>
          ))}
        </nav>
        <div className="ha-header-actions">
          <a
            className="ha-signin"
            href="https://app.websyncdigital.com.ng"
            target="_blank"
            rel="noopener noreferrer"
          >
            Client portal ↗
          </a>
          <Link className="ws-button ws-nav-cta" href="/contact#book">
            <CalendarDays size={15} /> Let’s talk
          </Link>
          <button
            className="ws-menu-button"
            aria-label={open ? "Close navigation" : "Open navigation"}
            aria-expanded={open}
            aria-controls="ws-mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      {open && (
        <nav
          id="ws-mobile-nav"
          className="ws-mobile-nav"
          aria-label="Mobile navigation"
          onKeyDown={(e) => {
            if (e.key === "Escape") setOpen(false);
          }}
        >
          {links.map(([label, href]) => (
            <Link key={label} href={href} onClick={() => setOpen(false)}>
              {label}
            </Link>
          ))}
          <a
            href="https://app.websyncdigital.com.ng"
            target="_blank"
            rel="noopener noreferrer"
          >
            Client portal ↗
          </a>
        </nav>
      )}
    </header>
  );
}
