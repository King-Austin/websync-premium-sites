"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../public/assets/logo.png';

const navLinks = [
  { name: 'Home',    href: '/#hero' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Work',    href: '/work' },
  { name: 'Blog',    href: '/blog' },
  { name: 'About',   href: '/about' },
  { name: 'Contact', href: '/contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-background/95 backdrop-blur-md shadow-sm py-4'
            : 'bg-transparent py-6'
        }`}
        aria-label="Main navigation"
      >
        <div className="container-custom flex items-center justify-between">

          {/* Logo + Authority Badge */}
          <Link
            href="/#hero"
            id="nav-logo"
            className="relative flex items-center gap-3 transition-transform duration-300 hover:scale-[1.02]"
          >
            <Image
              src={logo}
              alt="WebSync Digital — Nigeria's #1 Web Agency"
              width={130}
              height={32}
              className={`h-8 w-auto object-contain transition-all duration-300 ${
                !isScrolled ? 'brightness-0 invert' : ''
              }`}
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                id={`nav-link-${link.name.toLowerCase()}`}
                href={link.href}
                className={`nav-link text-sm font-medium transition-colors duration-200 ${
                  isScrolled ? 'text-foreground hover:text-primary' : 'text-primary-foreground hover:text-white/70'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 transition-colors duration-300 ${
              isScrolled ? 'text-foreground' : 'text-primary-foreground'
            }`}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-background pt-24"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation menu"
          >
            <div className="container-custom flex flex-col items-center gap-8 py-12">

              {navLinks.map((link, index) => (
                <Link
                  key={link.name}
                  href={link.href}
                  id={`mobile-nav-${link.name.toLowerCase()}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-display font-medium text-foreground hover:text-primary transition-colors"
                >
                  <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.07 }}
                    className="block"
                  >
                    {link.name}
                  </motion.span>
                </Link>
              ))}

              {/* Mobile CTA */}
              <motion.a
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.07 + 0.1 }}
                id="mobile-nav-whatsapp-cta"
                href="https://wa.me/2349111719701?text=Hi%20WebSync%20Digital%2C%20I%20want%20to%20get%20started."
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-4 px-8 py-4 bg-primary text-primary-foreground rounded-xl font-body font-semibold text-sm"
              >
                Get Started — ₦9,999/Month
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
