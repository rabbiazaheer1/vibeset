import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import LabRow from "../../cards/LabRow.jsx";
import { LABS_PRODUCTS } from "../../../constants/labs.js";

export default function WhatWeBuild() {
  return (
    <section className="bg-ink-950 py-28">
      <div className="container-page">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5 }}
              className="inline-block rounded-pill border border-white/15 px-4 py-1.5 text-[12px] font-bold tracking-wide text-white/70"
            >
              SOLUTIONS
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: 0.05 }}
              className="mt-5 font-display-fallback text-[38px] leading-tight sm:text-[46px]"
            >
              What We <span className="text-sand-300/80">Build</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="mt-4 max-w-xl text-[17px] leading-relaxed text-white/60"
            >
              Purpose-built AI solutions for specific business challenges.
            </motion.p>
          </div>

          <Link
            to="/labs"
            className="group flex items-center gap-2 text-[16px] font-bold text-white"
          >
            View all labs
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="mt-14 flex flex-col gap-5">
          {LABS_PRODUCTS.map((product, i) => (
            <LabRow
              key={product.id}
              icon={product.icon}
              title={product.title}
              description={product.description}
              to={`/labs/${product.slug}`}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
