import React from "react";
import { motion } from "framer-motion";
import FlowingWaves from "./FlowingWaves.jsx";

export default function PageHeader({ eyebrow, title, highlight, description, tone = "cool", children }) {
  return (
    <section className="relative overflow-hidden bg-ink-950 pb-20 pt-44">
      <FlowingWaves tone={tone} className="opacity-60" />
      <div className="container-page relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          {eyebrow && (
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block rounded-pill border border-white/15 px-4 py-1.5 text-[12px] font-bold tracking-wide text-white/70"
            >
              {eyebrow}
            </motion.span>
          )}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.05 }}
            className="mt-6 font-display-fallback text-[38px] leading-tight sm:text-[48px]"
          >
            {title} {highlight && <span className="text-sand-300/80">{highlight}</span>}
          </motion.h1>
          {description && (
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="mx-auto mt-6 max-w-2xl text-[17px] leading-relaxed text-white/60"
            >
              {description}
            </motion.p>
          )}
          {children && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.15 }}
              className="mt-10 flex justify-center"
            >
              {children}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
