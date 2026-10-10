"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { enquiryUrl } from "@/data/projects";
export default function Header() {
  const [open, setOpen] = useState(false);
  const links = [
    ["Services", "/#services"],
    ["Our work", "/work"],
    ["How it works", "/#process"],
    ["Pricing", "/pricing"],
  ];
  return (
    <header className="ws-header">
      <a href="#main-content" className="ws-skip">
        Skip to content
      </a>
      <div className="ws-container ws-nav">
        <Link href="/" aria-label="WebSync Digital home">
          <Image
            src="/assets/logo.png"
            alt="WebSync Digital"
            width={148}
            height={40}
            className="ws-logo"
            priority
          />
        </Link>
        <nav className="ws-desktop-nav" aria-label="Main navigation">
          {links.map(([label, href]) => (
            <Link key={label} href={href}>
              {label}
            </Link>
          ))}
        </nav>
        <a
          className="ws-button ws-nav-cta"
          href={enquiryUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Let’s talk <ArrowUpRight size={17} />
        </a>
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
            href={enquiryUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
          >
            Let’s talk ↗
          </a>
        </nav>
      )}
    </header>
  );
}
