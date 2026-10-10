import Link from "next/link";
import Image from "next/image";
import { enquiryUrl } from "@/data/projects";
export default function Footer() {
  return (
    <footer className="ws-footer">
      <div className="ws-container">
        <div className="ws-footer-top">
          <div>
            <Image
              src="/assets/logo.png"
              alt="WebSync Digital"
              width={150}
              height={40}
            />
            <p>
              Websites that work.
              <br />A team that stays with you.
            </p>
          </div>
          <div>
            <span>Explore</span>
            <Link href="/work">Our work</Link>
            <Link href="/pricing">Pricing</Link>
            <Link href="/#services">Services</Link>
            <Link href="/blog">Journal</Link>
          </div>
          <div>
            <span>Say hello</span>
            <a href={enquiryUrl} target="_blank" rel="noopener noreferrer">
              Chat on WhatsApp ↗
            </a>
            <a href="mailto:digitalwebsync@gmail.com">
              digitalwebsync@gmail.com
            </a>
            <Link href="/contact">Contact us</Link>
          </div>
        </div>
        <div className="ws-footer-bottom">
          <p>© {new Date().getFullYear()} WebSync Digital. RC 9470161.</p>
          <div>
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms of service</Link>
          </div>
          <span>Built for businesses. Made in Nigeria.</span>
        </div>
      </div>
    </footer>
  );
}
