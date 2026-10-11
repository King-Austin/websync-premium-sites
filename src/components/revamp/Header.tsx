"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
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
  const [activeSection, setActiveSection] = useState("Home");
  const path = usePathname();
  const menuButton = useRef<HTMLButtonElement>(null);
  const mobileNav = useRef<HTMLElement>(null);
  const homeSections: Record<string, string> = {
    "Our work": "#featured",
    Pricing: "#pricing",
    About: "#founders",
  };
  const navLinks = links.map(([label, href]) => [
    label,
    path === "/" ? (homeSections[label] ?? href) : href,
  ]);
  useEffect(() => {
    setOpen(false);
  }, [path]);
  useEffect(() => {
    if (open) mobileNav.current?.querySelector<HTMLAnchorElement>("a")?.focus();
  }, [open]);
  useEffect(() => {
    if (path !== "/") return;
    let frame = 0;
    const sections = [
      ["Services", "services"],
      ["Our work", "featured"],
      ["Pricing", "pricing"],
      ["About", "founders"],
    ];
    const update = () => {
      frame = 0;
      const threshold =
        (document.querySelector(".ws-header")?.getBoundingClientRect().height ??
          80) + 40;
      let current = "Home";
      for (const [label, id] of sections) {
        const section = document.getElementById(id);
        if (section && section.getBoundingClientRect().top <= threshold)
          current = label;
      }
      setActiveSection(current);
    };
    const schedule = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    document.addEventListener("animationend", schedule);
    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      document.removeEventListener("animationend", schedule);
      window.cancelAnimationFrame(frame);
    };
  }, [path]);
  function currentLink(
    label: string,
    href: string,
  ): "page" | "location" | undefined {
    if (path === "/") return label === activeSection ? "location" : undefined;
    return href === path ? "page" : undefined;
  }
  function closeMenu(returnFocus = false) {
    setOpen(false);
    if (returnFocus) menuButton.current?.focus();
  }
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
        </Link>
        <nav className="ws-desktop-nav" aria-label="Main navigation">
          {navLinks.map(([label, href]) => (
            <Link
              key={label}
              href={href}
              aria-current={currentLink(label, href)}
            >
              {label}
            </Link>
          ))}
        </nav>
        <div className="ha-header-actions">
          <a className="ha-signin" href="https://app.websyncdigital.com.ng" target="_blank" rel="noopener noreferrer">Client portal ↗</a>
          <Link className="ws-button ws-nav-cta" href="/contact#book">
            <CalendarDays size={15} /> Let’s talk
          </Link>
          <button
            ref={menuButton}
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
          ref={mobileNav}
          id="ws-mobile-nav"
          className="ws-mobile-nav"
          aria-label="Mobile navigation"
          onKeyDown={(e) => {
            if (e.key === "Escape") closeMenu(true);
          }}
        >
          <span className="ha-menu-label">Explore WebSync</span>
          {navLinks.map(([label, href]) => (
            <Link
              key={label}
              href={href}
              aria-current={currentLink(label, href)}
              onClick={() => closeMenu()}
            >
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
