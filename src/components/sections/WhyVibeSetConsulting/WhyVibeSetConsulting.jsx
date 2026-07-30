import React from "react";
import { motion } from "framer-motion";

const REASONS = [
  "Built for real operations \u2014 not demos",
  "Clear documentation & governance from day one",
  "Program-ready delivery for institutions",
  "No vendor lock-in or black-box solutions",
  "Canadian-based, compliance-aware team",
  "End-to-end: strategy through deployment",
];

export default function WhyVibeSetConsulting() {
  return (
    <section className="bg-ink-900 py-28">
      <div className="container-page">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
          className="text-center font-display-fallback text-[32px] leading-tight sm:text-[38px]"
        >
          Why VibeSet
        </motion.h2>

        <div className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-5 sm:grid-cols-2">
          {REASONS.map((reason, i) => (
            <motion.div
              key={reason}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="flex items-center gap-3 rounded-xl border border-white/10 px-6 py-6"
            >
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-white/60" />
              <span className="text-[16px] font-medium text-white/90">
                {reason}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
