import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Button from "../../buttons/Button.jsx";
import LynxUpMockup from "./LynxUpMockup.jsx";

const FEATURES = [
  "Automated lead capture and qualification",
  "AI-generated email and content sequences",
  "Real-time campaign analytics and optimization",
];

export default function FlagshipProduct() {
  return (
    <section className="bg-ink-950 py-28">
      <div className="container-page grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="inline-block rounded-pill border border-clay/40 px-4 py-1.5 text-[12px] font-bold tracking-wide text-clay"
          >
            OUR FLAGSHIP PRODUCT
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, delay: 0.05 }}
            className="mt-5 font-display-fallback text-[34px] leading-[1.15] sm:text-[42px]"
          >
            The Marketing Engine Your Team Has Been Waiting For
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="mt-6 max-w-xl text-[17px] leading-relaxed text-white/65"
          >
            LynxUp automates your entire marketing workflow — from lead
            capture to nurture sequences to conversion. Built for growing
            teams that can&apos;t afford to slow down.
          </motion.p>

          <ul className="mt-8 flex flex-col gap-4">
            {FEATURES.map((feature, i) => (
              <motion.li
                key={feature}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="flex items-center gap-3 text-[16px] text-white/85"
              >
                <CheckCircle2 size={20} className="shrink-0 text-clay" />
                {feature}
              </motion.li>
            ))}
          </ul>

          <div className="mt-10">
            <Button as="link" to="/labs/lynxup" variant="primary" icon={ArrowRight} iconPosition="right">
              Explore LynxUp
            </Button>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <LynxUpMockup />
        </motion.div>
      </div>
    </section>
  );
}
