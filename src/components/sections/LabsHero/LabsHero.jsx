import React from "react";
import { motion } from "framer-motion";
import { Zap, ShieldCheck, FlaskConical, ArrowRight } from "lucide-react";
import Button from "../../buttons/Button.jsx";

const BADGES = [
  { icon: Zap, label: "Deploy in days, not months" },
  { icon: ShieldCheck, label: "Enterprise-grade security" },
  { icon: FlaskConical, label: "Continuously improved" },
];

export default function LabsHero() {
  return (
    <section className="bg-ink-950 pb-20 pt-44">
      <div className="container-page">
        <div className="mx-auto max-w-3xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block rounded-pill border border-white/15 px-4 py-1.5 text-[12px] font-bold tracking-wide text-white/70"
          >
            VIBESET LABS
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.05 }}
            className="mt-6 font-display-fallback text-[40px] leading-tight sm:text-[50px]"
          >
            Products Built for <span className="text-sand-300/80">Scale</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="mx-auto mt-6 max-w-2xl text-[17px] leading-relaxed text-white/60"
          >
            Our Labs division builds focused, opinionated AI products that
            solve specific problems exceptionally well. No bloat, no
            complexity—just tools that work.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.15 }}
            className="mt-9 flex flex-wrap items-center justify-center gap-3"
          >
            {BADGES.map((badge) => (
              <span
                key={badge.label}
                className="flex items-center gap-2 rounded-pill border border-white/15 px-4 py-2.5 text-[14px] font-medium text-white/75"
              >
                <badge.icon size={15} />
                {badge.label}
              </span>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="mt-10 flex justify-center"
          >
            <Button variant="outline" icon={ArrowRight} iconPosition="right">
              Explore Labs Products
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
