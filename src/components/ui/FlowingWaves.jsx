import React from "react";

/**
 * FlowingWaves
 * GPU-friendly ambient background: layered blurred gradient "ribbons"
 * animated with CSS transforms (translate + scale), looping smoothly.
 * tone: "cool" (blue/gold, Hero) | "warm" (amber/brown, CTA)
 */
export default function FlowingWaves({ tone = "cool", className = "" }) {
  const palette =
    tone === "cool"
      ? {
          a: "rgba(64,110,168,0.55)",
          b: "rgba(201,168,118,0.4)",
          c: "rgba(20,40,70,0.6)",
        }
      : {
          a: "rgba(160,120,72,0.55)",
          b: "rgba(201,168,118,0.5)",
          c: "rgba(60,42,26,0.6)",
        };

  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      aria-hidden="true"
    >
      <div
        className="absolute -left-1/4 top-[-20%] h-[140%] w-[80%] animate-flow-slow rounded-full blur-3xl"
        style={{ background: palette.a }}
      />
      <div
        className="absolute right-[-20%] top-[10%] h-[120%] w-[70%] animate-flow-slower rounded-full blur-3xl"
        style={{ background: palette.b }}
      />
      <div
        className="absolute left-[10%] bottom-[-30%] h-[100%] w-[60%] animate-flow-slow rounded-full blur-3xl"
        style={{ background: palette.c, animationDelay: "-8s" }}
      />
      <svg
        className="absolute inset-0 h-full w-full opacity-40 mix-blend-screen"
        viewBox="0 0 1512 800"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id={`wave-grad-${tone}`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={palette.a} />
            <stop offset="100%" stopColor={palette.b} />
          </linearGradient>
        </defs>
        {[0, 1, 2].map((i) => (
          <path
            key={i}
            d={`M -100 ${200 + i * 140} C 300 ${100 + i * 140}, 600 ${320 + i * 140}, 900 ${160 + i * 140} S 1500 ${260 + i * 140}, 1700 ${140 + i * 140}`}
            fill="none"
            stroke={`url(#wave-grad-${tone})`}
            strokeWidth={i === 1 ? 2.5 : 1.5}
            strokeLinecap="round"
            className={i % 2 === 0 ? "animate-flow-slow" : "animate-flow-slower"}
          />
        ))}
      </svg>
      <div className="absolute inset-0 bg-gradient-to-b from-ink-950/10 via-transparent to-ink-950" />
    </div>
  );
}
