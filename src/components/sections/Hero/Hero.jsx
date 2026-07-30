import React from "react";
import { motion } from "framer-motion";
import { CalendarDays, ArrowRight } from "lucide-react";
import FlowingWaves from "../../ui/FlowingWaves.jsx";
import Button from "../../buttons/Button.jsx";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: "easeOut" },
  }),
};

export default function Hero() {
  return (
    <section className="relative flex min-h-[860px] items-center overflow-hidden bg-ink-950 pt-40 pb-28">
      <FlowingWaves tone="cool" />
      <div className="container-page relative z-10">
        <div className="mx-auto max-w-5xl text-center">
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
            className="font-display-fallback text-[44px] leading-[1.08] tracking-tight sm:text-[56px] lg:text-[68px]"
          >
            We Build AI Systems
            <br />
            That Replace Manual Work
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
            className="mx-auto mt-8 max-w-3xl text-[19px] leading-relaxed text-white/70"
          >
            VibeSet helps businesses automate repetitive workflows with custom
            AI solutions and ready-to-deploy products. From strategy to
            implementation.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={2}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Button as="link" to="/contact" variant="primary" icon={CalendarDays}>
              Book a Free Consultation
            </Button>
            <Button
              as="link"
              to="/services"
              variant="outline"
              icon={ArrowRight}
              iconPosition="right"
            >
              Explore Solutions
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
