import React from "react";
import { motion } from "framer-motion";
import SectionIntro from "../../ui/SectionIntro.jsx";

const STEPS = [
  {
    step: "Step 01",
    title: "Discovery",
    description: "Understand goals, constraints, current stack, and readiness.",
  },
  {
    step: "Step 02",
    title: "Design",
    description:
      "Map workflows, define data requirements, and set governance guardrails.",
  },
  {
    step: "Step 03",
    title: "Build",
    description:
      "Develop, test, and iterate on AI systems in controlled environments.",
  },
  {
    step: "Step 04",
    title: "Deploy & Support",
    description:
      "Launch with documentation, training, and ongoing optimization.",
  },
];

export default function HowWeWork() {
  return (
    <section className="bg-ink-950 py-28">
      <div className="container-page">
        <SectionIntro
          title="How We Work"
          description="A repeatable process designed for fast assessment, clear governance, and reliable execution."
        />
        <div className="mt-20 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((item, i) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="border-t-2 border-clay/60 pt-5"
            >
              <p className="text-[13px] font-bold tracking-wide text-clay">
                {item.step}
              </p>
              <h3 className="mt-2 text-[19px] font-bold text-white">
                {item.title}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-white/55">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
