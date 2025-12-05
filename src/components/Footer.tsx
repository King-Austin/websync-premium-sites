import { MessageCircle, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export const Footer = () => {
  const scrollToForm = () => {
    document.getElementById("onboarding-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-secondary/20 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-primary mb-4">Websync</h3>
            <p className="text-muted-foreground">
              Premium Websites. One Small Monthly Fee. Built and managed by Vibe Coders.
            </p>
            <div className="flex gap-4 pt-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <nav className="flex flex-col space-y-3">
              <button
                onClick={() => document.querySelector("#how-it-works")?.scrollIntoView({ behavior: "smooth" })}
                className="text-muted-foreground hover:text-primary transition-colors text-left"
              >
                How It Works
              </button>
              <button
                onClick={() => document.querySelector("#comparison")?.scrollIntoView({ behavior: "smooth" })}
                className="text-muted-foreground hover:text-primary transition-colors text-left"
              >
                Comparison
              </button>
              <button
                onClick={() => document.querySelector("#pricing")?.scrollIntoView({ behavior: "smooth" })}
                className="text-muted-foreground hover:text-primary transition-colors text-left"
              >
                Pricing
              </button>
              <button
                onClick={scrollToForm}
                className="text-muted-foreground hover:text-primary transition-colors text-left"
              >
                Get Started
              </button>
            </nav>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <nav className="flex flex-col space-y-3">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Refund Policy
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Cookie Policy
              </a>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-4">
              <a
                href="mailto:hello@websync.com"
                className="flex items-start gap-3 text-muted-foreground hover:text-primary transition-colors group"
              >
                <Mail className="w-5 h-5 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <span>websyncwebsite@gmail.com</span>
              </a>
              <a
                href="tel:+2347043576814"
                className="flex items-start gap-3 text-muted-foreground hover:text-primary transition-colors group"
              >
                <Phone className="w-5 h-5 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <span>+2347043576814</span>
              </a>
              <a
                href="https://wa.me/2347043576814"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-primary hover:text-primary-hover transition-colors font-medium group"
              >
                <MessageCircle className="w-5 h-5 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <span>WhatsApp Support</span>
              </a>
              <div className="flex items-start gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>Lagos, Nigeria</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              © 2025 Websync. All rights reserved. Built with care by Vibe Coders.
            </p>
            <p className="text-sm text-muted-foreground">
              Proudly serving businesses across Nigeria 🇳🇬
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
