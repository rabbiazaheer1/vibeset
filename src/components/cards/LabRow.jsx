import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function LabRow({ icon: Icon, title, description, to, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45, delay: index * 0.06 }}
    >
      <Link
        to={to}
        className="group flex items-center justify-between gap-6 rounded-2xl border border-white/10 px-7 py-7 transition-colors hover:bg-white/[0.04]"
      >
        <div className="flex items-center gap-5">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-white/5">
            <Icon size={22} className="text-white/85" />
          </div>
          <div>
            <h3 className="text-[19px] font-bold text-white">{title}</h3>
            <p className="mt-1 text-[15px] text-white/55">{description}</p>
          </div>
        </div>
        <ArrowRight
          size={20}
          className="shrink-0 text-white/40 transition-transform group-hover:translate-x-1 group-hover:text-white/80"
        />
      </Link>
    </motion.div>
  );
}
