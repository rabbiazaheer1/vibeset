import React from "react";
import { motion } from "framer-motion";

export default function SectionIntro({ title, description, align = "center" }) {
  const alignClasses = align === "center" ? "mx-auto text-center" : "text-left";

  return (
    <div className={`max-w-2xl ${alignClasses}`}>
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.55 }}
        className="font-display-fallback text-[32px] leading-tight sm:text-[38px]"
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, delay: 0.08 }}
          className="mt-5 text-[17px] leading-relaxed text-white/60"
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
