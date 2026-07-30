import React from "react";
import { motion } from "framer-motion";

export default function IconCard({ icon: Icon, title, description, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="rounded-2xl border border-white/10 p-8"
    >
      {Icon && (
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/5">
          <Icon size={20} className="text-white/85" />
        </div>
      )}
      <h3 className={`font-bold text-white ${Icon ? "mt-6" : ""} text-[18px]`}>
        {title}
      </h3>
      <p className="mt-3 text-[15px] leading-relaxed text-white/55">
        {description}
      </p>
    </motion.div>
  );
}
