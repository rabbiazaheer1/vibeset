import React from "react";
import { motion } from "framer-motion";
import { CalendarDays } from "lucide-react";
import FlowingWaves from "../../ui/FlowingWaves.jsx";
import Button from "../../buttons/Button.jsx";

export default function CTA({
  title = "Let\u2019s Identify Your",
  highlight = "Highest-ROI Automation",
  description = "Start with a free consultation. We\u2019ll map your workflows and show you exactly where AI can create the most value.",
  buttonLabel = "Book a Discovery Call",
  buttonTo = "/contact",
  buttonIcon = CalendarDays,
  footnote = "No commitment required. 30-minute discovery call.",
}) {
  const ButtonIcon = buttonIcon;

  return (
    <section className="relative overflow-hidden bg-ink-950 py-32">
      <FlowingWaves tone="warm" />
      <div className="container-page relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="font-display-fallback text-[36px] leading-tight sm:text-[46px]"
          >
            {title}{" "}
            {highlight && <span className="text-sand-300/80">{highlight}</span>}
          </motion.h2>

          {description && (
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="mx-auto mt-6 max-w-2xl text-[17px] leading-relaxed text-white/70"
            >
              {description}
            </motion.p>
          )}

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="mt-10 flex justify-center"
          >
            <Button as="link" to={buttonTo} variant="primary" icon={ButtonIcon}>
              {buttonLabel}
            </Button>
          </motion.div>

          {footnote && (
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-6 text-[14px] text-white/50"
            >
              {footnote}
            </motion.p>
          )}
        </div>
      </div>
    </section>
  );
}
