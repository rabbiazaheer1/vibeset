import React from "react";
import { motion } from "framer-motion";
import SectionIntro from "../../ui/SectionIntro.jsx";
import IconCard from "../../cards/IconCard.jsx";

const ITEMS = [
  {
    title: "Advisory & Strategy",
    description:
      "AI readiness assessments, use-case framing, and strategic roadmaps for teams exploring AI.",
  },
  {
    title: "Build & Deploy",
    description:
      "End-to-end delivery of AI automation systems \u2014 from architecture to production handoff.",
  },
  {
    title: "Program Delivery",
    description:
      "Structured engagements for universities and funded programs with full reporting and compliance.",
  },
  {
    title: "Retainer & Optimization",
    description:
      "Ongoing support, monitoring, and iteration for deployed AI systems.",
  },
];

export default function EngagementOptions() {
  return (
    <section className="bg-ink-950 py-28">
      <div className="container-page">
        <SectionIntro
          title="Engagement Options"
          description="Flexible models designed to meet you where you are."
        />
        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
          {ITEMS.map((item, i) => (
            <IconCard key={item.title} {...item} index={i} />
          ))}
        </div>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto mt-10 max-w-2xl text-center text-[15px] leading-relaxed text-white/50"
        >
          Engagements can be advisory-only, build + handoff, or delivered
          through institutional and SME-focused programs.
        </motion.p>
      </div>
    </section>
  );
}
