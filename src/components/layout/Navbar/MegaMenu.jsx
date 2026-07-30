import React from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function MegaMenu({ items, isOpen, onItemClick }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 8, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 8, scale: 0.98 }}
          transition={{ duration: 0.18, ease: "easeOut" }}
          className="absolute left-1/2 top-full z-40 mt-3 w-[420px] -translate-x-1/2 rounded-2xl border border-white/10 bg-ink-800/95 p-3 shadow-2xl backdrop-blur-xl"
          role="menu"
        >
          {items.map((item) => (
            <Link
              key={item.id}
              to={item.to}
              onClick={onItemClick}
              role="menuitem"
              className="group flex items-start justify-between gap-4 rounded-xl px-4 py-3 transition-colors hover:bg-white/[0.06] focus-visible:bg-white/[0.06] focus-visible:outline-none"
            >
              <div>
                <p className="text-[15px] font-bold text-white">{item.title}</p>
                <p className="mt-0.5 text-[13px] leading-snug text-white/55">
                  {item.description}
                </p>
              </div>
              <ArrowRight
                size={16}
                className="mt-1 shrink-0 text-white/30 transition-transform group-hover:translate-x-0.5 group-hover:text-white/70"
              />
            </Link>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
