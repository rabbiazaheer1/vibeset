import React from "react";
import { CLIENT_LOGOS } from "../../../constants/clients.js";

export default function LogoMarquee({ speed = 32 }) {
  const track = [...CLIENT_LOGOS, ...CLIENT_LOGOS];

  return (
    <section className="marquee-viewport border-y border-white/5 bg-ink-950 py-8">
      <div
        className="marquee-track"
        style={{ ["--marquee-speed"]: `${speed}s` }}
      >
        {track.map((logo, i) => (
          <div key={`${logo.id}-${i}`} className="marquee-item">
            <span className="marquee-text-logo">{logo.alt}</span>
          </div>
        ))}
      </div>

      <style>{`
        .marquee-viewport {
          overflow: hidden;
          -webkit-mask-image: linear-gradient(to right, transparent 0, #000 64px, #000 calc(100% - 64px), transparent 100%);
          mask-image: linear-gradient(to right, transparent 0, #000 64px, #000 calc(100% - 64px), transparent 100%);
        }
        .marquee-track {
          display: flex;
          align-items: center;
          width: max-content;
          will-change: transform;
          transform: translate3d(0,0,0);
          animation: marquee-scroll var(--marquee-speed, 32s) linear infinite;
        }
        .marquee-item {
          flex: 0 0 auto;
          display: flex;
          align-items: center;
          height: 40px;
          margin: 0 36px;
          opacity: 0.55;
          filter: grayscale(1);
          transition: opacity .25s ease, filter .25s ease;
        }
        .marquee-item:hover {
          opacity: 1;
          filter: grayscale(0);
        }
        .marquee-text-logo {
          display: flex;
          align-items: center;
          height: 100%;
          padding: 0 14px;
          border: 1px solid rgba(255,255,255,0.15);
          border-radius: 6px;
          font-weight: 800;
          font-size: 13px;
          letter-spacing: .02em;
          white-space: nowrap;
          color: rgba(255,255,255,0.8);
        }
        @keyframes marquee-scroll {
          from { transform: translate3d(0,0,0); }
          to { transform: translate3d(-50%,0,0); }
        }
        @media (max-width: 640px) {
          .marquee-item { height: 30px; margin: 0 20px; }
          .marquee-text-logo { font-size: 11px; padding: 0 10px; }
        }
        @media (prefers-reduced-motion: reduce) {
          .marquee-track { animation: none; }
        }
      `}</style>
    </section>
  );
}
