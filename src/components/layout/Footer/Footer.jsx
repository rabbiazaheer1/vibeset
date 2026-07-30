import React from "react";
import { Link } from "react-router-dom";
import { Linkedin, Twitter, MapPin, Phone, Mail } from "lucide-react";
import Button from "../../buttons/Button.jsx";

const COMPANY_LINKS = [
  { id: "about", label: "About", to: "/about" },
  { id: "careers", label: "Careers", to: "/careers" },
  { id: "blog", label: "Blog", to: "/blog" },
  { id: "contact", label: "Contact", to: "/contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink-950">
      <div className="container-page py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.3fr_1fr_1.3fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/20">
                <svg width="18" height="18" viewBox="0 0 28 28" fill="none">
                  <path d="M6 7L14 21L22 7" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M6 21L14 7L22 21" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" opacity="0.4" />
                </svg>
              </div>
              <span className="font-display-fallback text-[19px]">VibeSet</span>
            </div>
            <p className="mt-5 max-w-xs text-[15px] leading-relaxed text-white/50">
              AI-powered automation for modern businesses. Design, deploy, and
              scale intelligent workflows.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-white/70 transition-colors hover:bg-white/10 hover:text-white"
              >
                <Linkedin size={17} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-white/70 transition-colors hover:bg-white/10 hover:text-white"
              >
                <Twitter size={17} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-[16px] font-bold text-white">Company</h3>
            <ul className="mt-5 flex flex-col gap-4">
              {COMPANY_LINKS.map((link) => (
                <li key={link.id}>
                  <Link
                    to={link.to}
                    className="text-[15px] text-white/55 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[16px] font-bold text-white">Get in Touch</h3>
            <ul className="mt-5 flex flex-col gap-4 text-[15px] text-white/55">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 shrink-0" />
                <span>100-388 1st Ave, Kamloops, BC V2C 1G1</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="shrink-0" />
                <a href="tel:+12269900188" className="hover:text-white">
                  +1 (226) 990-0188
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="shrink-0" />
                <a href="mailto:info@vibeset.ca" className="hover:text-white">
                  info@vibeset.ca
                </a>
              </li>
            </ul>
            <div className="mt-6">
              <Button as="link" to="/contact" variant="primary">
                Book a Call
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-[14px] text-white/40">
            © {new Date().getFullYear()} VibeSet. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/privacy-policy" className="text-[14px] text-white/40 hover:text-white/70">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="text-[14px] text-white/40 hover:text-white/70">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
