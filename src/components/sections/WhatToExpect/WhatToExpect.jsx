import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const ITEMS = [
  "Personalized demo of our AI solutions",
  "Custom automation roadmap for your business",
  "ROI projections and implementation timeline",
  "Answers to all your technical questions",
];

export default function WhatToExpect() {
  return (
    <section className="bg-ink-950 pb-28">
      <div className="container-page flex justify-end">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
          className="w-full max-w-md rounded-2xl border border-white/10 p-8"
        >
          <h3 className="text-[20px] font-bold text-white">What to Expect</h3>
          <ul className="mt-6 flex flex-col gap-4">
            {ITEMS.map((item) => (
              <li key={item} className="flex items-center gap-3 text-[15px] text-white/80">
                <CheckCircle2 size={20} className="shrink-0 text-white/70" />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
