"use client";

import Image from 'next/image';
import logo from '../../public/assets/logo.png';
import { motion } from 'framer-motion';
import Link from 'next/link';

const solutionLinks = [
  { name: 'Bespoke Premium Design',  href: '/pricing' },
  { name: 'Unlimited Free Updates',  href: '/pricing' },
  { name: 'Enterprise-Grade SEO',    href: '/work' },
  { name: 'Monthly Maintenance',     href: '/pricing' },
];

const companyLinks = [
  { name: 'Pricing — ₦9,999/Month', href: '/pricing' },
  { name: 'Our Work & Results',      href: '/work' },
  { name: 'About Us',                href: '/about' },
  { name: 'Contact Us',              href: '/contact' },
  { name: 'Our Blog',                href: '/blog' },
  { name: 'Meet the Founder',        href: '/west' },
  { name: 'Privacy Policy',          href: '/privacy' },
  { name: 'Terms of Service',        href: '/terms' },
];

const Footer = () => {
  return (
    <footer className="pt-20 pb-10 bg-[#050505] text-white overflow-hidden border-t border-white/5" aria-label="Site footer">
      <div className="container-custom">



        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-20">

          {/* Brand Info */}
          <div className="space-y-6">
            <Link href="/#hero" id="footer-logo" className="inline-block transition-transform hover:scale-105">
              <Image
                src={logo}
                alt="websyncdigital — Nigeria's No.1 Web Agency"
                width={120}
                height={30}
                className="h-7 w-auto object-contain brightness-0 invert"
              />
            </Link>
            <p className="text-sm text-white/50 font-body leading-relaxed max-w-[240px]">
              Nigeria&apos;s No.1 premium web agency. We transform bold ideas into exceptional brands and sales-driven digital platforms. Only ₦9,999 monthly. No setup fees.
            </p>
            <p className="text-[10px] text-white/20 font-body italic leading-tight max-w-[200px]">
              websyncdigital is the trading name of WebSync Digital Technology Ltd.
            </p>
          </div>

          {/* Solutions */}
          <div className="space-y-6">
            <h4 className="text-sm font-display font-bold uppercase tracking-[0.2em] text-primary">WebSync Solutions</h4>
            <ul className="space-y-4">
              {solutionLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    id={`footer-solution-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                    href={item.href}
                    className="text-sm text-white/40 hover:text-white transition-colors duration-300 font-body"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links — ALL real URLs now */}
          <div className="space-y-6">
            <h4 className="text-sm font-display font-bold uppercase tracking-[0.2em] text-primary">Company</h4>
            <ul className="space-y-4">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    id={`footer-company-${link.name.toLowerCase().replace(/[\s₦\/,]+/g, '-')}`}
                    href={link.href}
                    className="text-sm text-white/40 hover:text-white transition-colors duration-300 font-body"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-sm font-display font-bold uppercase tracking-[0.2em] text-primary">Get in Touch</h4>
            <ul className="space-y-4">
              <li>
                <a
                  id="footer-contact-email"
                  href="mailto:digitalwebsync@gmail.com"
                  className="text-sm text-white/40 hover:text-white transition-colors duration-300 font-body block"
                >
                  digitalwebsync@gmail.com
                </a>
              </li>
              <li>
                <a
                  id="footer-contact-whatsapp"
                  href="https://wa.me/2349111719701"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-bold text-primary hover:text-white transition-colors duration-300 font-body block"
                >
                  WhatsApp: Chat with our Team →
                </a>
              </li>
              <li>
                <Link
                  id="footer-contact-page"
                  href="/contact"
                  className="text-sm text-white/40 hover:text-white transition-colors duration-300 font-body block"
                >
                  All Contact Methods →
                </Link>
              </li>
            </ul>
            <div className="pt-4">
              <span className="text-[10px] text-white/20 uppercase tracking-[0.4em] font-medium">Headquarters: Nigeria 🇳🇬</span>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <p className="text-[11px] text-white/30 font-body tracking-widest uppercase">
              © {new Date().getFullYear()} websyncdigital. All rights reserved. · Nigeria&apos;s No.1 Web Agency.
            </p>
            <div className="flex items-center gap-4 border-l border-white/10 pl-6 hidden md:flex">
              <Link href="/privacy" id="footer-bottom-privacy" className="text-[10px] text-white/20 hover:text-white uppercase tracking-widest transition-colors font-medium">Privacy Policy</Link>
              <Link href="/terms" id="footer-bottom-terms" className="text-[10px] text-white/20 hover:text-white uppercase tracking-widest transition-colors font-medium">Terms of Service</Link>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <span className="text-[11px] text-white/20 font-body tracking-[0.2em] uppercase italic">
              Empowering Nigerian SMEs with World-Class Digital Assets.
            </span>
          </div>
          {/* Mobile Legal Links */}
          <div className="flex items-center gap-6 md:hidden">
            <Link href="/privacy" className="text-[10px] text-white/20 uppercase tracking-widest font-medium">Privacy Policy</Link>
            <Link href="/terms" className="text-[10px] text-white/20 uppercase tracking-widest font-medium">Terms of Service</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
