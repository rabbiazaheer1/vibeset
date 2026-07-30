import React from "react";
import { Link } from "react-router-dom";

export default function Logo({ dark = true }) {
  return (
    <Link to="/" className="flex items-center gap-2.5 shrink-0" aria-label="VibeSet home">
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="1" y="1" width="26" height="26" rx="6" stroke="#0a0e17" strokeWidth="1.5" />
        <path d="M6 7L14 21L22 7" stroke="#0a0e17" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6 21L14 7L22 21" stroke="#0a0e17" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" opacity="0.35" />
      </svg>
      <span className="font-display-fallback text-[19px] tracking-tight text-ink-950">
        VibeSet
      </span>
    </Link>
  );
}
