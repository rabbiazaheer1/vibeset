import React from "react";
import { motion } from "framer-motion";
import WhyExistsDiagram from "./WhyExistsDiagram.jsx";

const PARAGRAPHS = [
  "VibeSet was founded to address a growing problem in automation: systems that look impressive in demos but fail in real-world operations.",
  "Too many organizations invest in automation tools that promise efficiency but introduce fragility. Workflows that don't scale, systems that break under pressure, and AI solutions that create more work than they save. The issue isn't the technology. It's the approach.",
  "We believe automation should be built for operations, not presentations. It should reduce complexity, scale reliably, and improve over time \u2014 not require constant oversight or maintenance.",
];

export default function WhyExists() {
  return (
    <section className="bg-ink-950 py-28">
      <div className="container-page grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <WhyExistsDiagram />
        </motion.div>

        <div>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55 }}
            className="font-display-fallback text-[34px] leading-tight sm:text-[40px]"
          >
            Why VibeSet Exists
          </motion.h2>
          <div className="mt-4 h-px w-16 bg-white/20" />

          <div className="mt-8 flex flex-col gap-6">
            {PARAGRAPHS.map((paragraph, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="text-[17px] leading-relaxed text-white/65"
              >
                {paragraph}
              </motion.p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
