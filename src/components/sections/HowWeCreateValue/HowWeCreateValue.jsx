import React from "react";
import { motion } from "framer-motion";

const STEPS = [
  {
    number: "01",
    title: "Reduce Operational Drag",
    description:
      "We identify and eliminate the friction that slows your team down—automating tasks that consume hours but create little value.",
  },
  {
    number: "02",
    title: "Turn Workflows Into Systems",
    description:
      "Transform ad-hoc processes into reliable, repeatable systems that run without constant oversight or manual intervention.",
  },
  {
    number: "03",
    title: "Build Automation That Compounds",
    description:
      "Create infrastructure that gets smarter over time. Each automation amplifies the next, multiplying your returns.",
  },
];

export default function HowWeCreateValue() {
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
          OUR APPROACH
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, delay: 0.05 }}
          className="mt-5 font-display-fallback text-[38px] leading-tight sm:text-[46px]"
        >
          How We Create <span className="text-sand-300/80">Value</span>
        </motion.h2>

        <div className="mt-20 grid grid-cols-1 gap-14 md:grid-cols-3 md:gap-10">
          {STEPS.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <span className="font-display-fallback text-[64px] leading-none text-white/10">
                {step.number}
              </span>
              <h3 className="mt-4 text-[22px] font-bold text-white">
                {step.title}
              </h3>
              <p className="mt-4 text-[16px] leading-relaxed text-white/55">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
