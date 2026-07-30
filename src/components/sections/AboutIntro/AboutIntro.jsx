import React from "react";
import { motion } from "framer-motion";

export default function AboutIntro() {
  return (
    <section className="bg-ink-800 py-24">
      <div className="container-page">
        <div className="max-w-4xl">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="inline-block text-[13px] font-bold tracking-wide text-white/60"
          >
            ABOUT VIBESET
          </motion.span>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="mt-6 text-[19px] leading-relaxed text-white/65"
          >
            VibeSet is a Canadian AI automation agency headquartered in
            Kamloops, British Columbia. Founded to address the gap between
            automation demos and real-world operational performance, VibeSet
            operates across three service lines: Agency (custom AI workflow
            design and deployment), Consulting (AI strategy and governance
            advisory for SMEs and institutions), and Labs (pre-built AI
            products including Continuum, LynxUp, DealJin, AutoDeal, and
            LeadHunt). VibeSet has supported clients across property
            management, retail, technology, and building services sectors,
            and maintains academic partnerships with Thompson Rivers
            University, Mitacs, and the Lab2Market (L2M) program.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
