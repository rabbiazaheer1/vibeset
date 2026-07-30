import React from "react";
import FlowingWaves from "../../ui/FlowingWaves.jsx";

export default function WhyExistsDiagram() {
  return (
    <div className="relative aspect-[4/3.4] w-full overflow-hidden rounded-2xl border border-white/10 bg-ink-900">
      <FlowingWaves tone="cool" className="opacity-40" />

      <svg
        viewBox="0 0 600 500"
        className="absolute inset-0 h-full w-full"
        preserveAspectRatio="xMidYMid meet"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="diagram-line" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#e9e3d4" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#c9a876" stopOpacity="0.5" />
          </linearGradient>
        </defs>
        <path
          d="M300 150 C300 230, 300 250, 300 300 C300 330, 210 340, 175 400"
          fill="none"
          stroke="url(#diagram-line)"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M300 150 C300 230, 300 260, 300 400"
          fill="none"
          stroke="url(#diagram-line)"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M300 150 C300 230, 300 250, 300 300 C300 330, 390 340, 425 400"
          fill="none"
          stroke="url(#diagram-line)"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>

      <div className="absolute left-1/2 top-[22%] -translate-x-1/2">
        <span className="inline-block rounded-pill border border-clay/50 bg-ink-900/70 px-8 py-4 text-[22px] font-bold text-sand-100 shadow-[0_0_30px_rgba(201,168,118,0.25)]">
          VibeSet
        </span>
      </div>

      <div className="absolute inset-x-0 bottom-[10%] flex items-center justify-center gap-4 px-6">
        <span className="rounded-pill border border-white/25 bg-ink-900/70 px-5 py-3 text-[15px] font-semibold text-white/90">
          Agency
        </span>
        <span className="rounded-pill border border-white/25 bg-ink-900/70 px-5 py-3 text-[15px] font-semibold text-white/90">
          Consulting
        </span>
        <span className="rounded-pill border border-white/25 bg-ink-900/70 px-5 py-3 text-[15px] font-semibold text-white/90">
          Labs
        </span>
      </div>
    </div>
  );
}
