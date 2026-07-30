import React from "react";
import { motion } from "framer-motion";
import { Cpu, Building2, Zap } from "lucide-react";

const REASONS = [
  {
    icon: Cpu,
    title: "Built With Modern AI Stacks",
    description:
      "Leveraging the latest in LLMs, vector databases, and agent frameworks for reliable, production-grade systems.",
  },
  {
    icon: Building2,
    title: "Designed for Real Businesses",
    description:
      "Solutions grounded in actual operational needs—not theoretical use cases or proof-of-concept demos.",
  },
  {
    icon: Zap,
    title: "Enterprise Thinking, Startup Speed",
    description:
      "Robust architecture delivered with the urgency and pragmatism your business demands.",
  },
];

export default function WhyUs() {
  return (
    <section className="bg-ink-950 py-28">
      <div className="container-page">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="inline-block rounded-pill border border-white/15 px-4 py-1.5 text-[12px] font-bold tracking-wide text-white/70"
        >
          WHY VIBESET
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, delay: 0.05 }}
          className="mt-5 font-display-fallback text-[38px] leading-tight sm:text-[46px]"
        >
          Why Teams <span className="text-sand-300/80">Trust Us</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="mt-5 max-w-2xl text-[17px] leading-relaxed text-white/60"
        >
          We combine deep technical expertise with practical business
          understanding.
        </motion.p>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {REASONS.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl border border-white/10 p-8"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white/5">
                <reason.icon size={24} className="text-white/85" />
              </div>
              <h3 className="mt-6 text-[19px] font-bold text-white">
                {reason.title}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-white/55">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
