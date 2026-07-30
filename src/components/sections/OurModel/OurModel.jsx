import React from "react";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap, FlaskConical } from "lucide-react";
import PathCard from "../../cards/PathCard.jsx";

const PATHS = [
  {
    icon: Briefcase,
    title: "VibeSet Agency",
    description:
      "Custom AI automation designed for your business. We handle discovery, architecture, deployment, and ongoing optimization.",
    ideal: "Enterprises, institutions, and growing teams with complex workflows.",
    to: "/services/agency",
  },
  {
    icon: GraduationCap,
    title: "VibeSet Consulting",
    description:
      "Program-ready AI advisory for institutions and SMEs. Compliance-forward guidance from assessment to implementation.",
    ideal: "Organizations seeking structured AI adoption with audit-ready documentation.",
    to: "/services/consulting",
    highlight: true,
  },
  {
    icon: FlaskConical,
    title: "VibeSet Labs",
    description:
      "Pre-built AI products designed for immediate use. Scalable tools for businesses and consumers—from operational automation to intelligent, user-facing AI products.",
    ideal: "Teams and individuals who want fast, reliable AI solutions without custom development.",
    to: "/labs",
  },
];

export default function OurModel() {
  return (
    <section className="relative overflow-hidden bg-ink-950 py-28">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[520px] bg-[radial-gradient(ellipse_at_top,rgba(120,90,50,0.35),transparent_65%)]" />
      <div className="container-page relative z-10">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="inline-block rounded-pill border border-white/15 px-4 py-1.5 text-[12px] font-bold tracking-wide text-white/70"
        >
          OUR MODEL
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, delay: 0.05 }}
          className="mt-5 font-display-fallback text-[38px] leading-tight sm:text-[46px]"
        >
          One Vision. <span className="text-sand-300/80">Three Paths.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="mt-5 max-w-2xl text-[17px] leading-relaxed text-white/60"
        >
          Whether you need hands-on AI consulting or ready-to-deploy automation
          products, we have you covered.
        </motion.p>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {PATHS.map((path, i) => (
            <motion.div
              key={path.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <PathCard {...path} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
