import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function PathCard({ icon: Icon, title, description, ideal, to, highlight = false }) {
  return (
    <Link
      to={to}
      className={`group flex h-full flex-col rounded-2xl border p-7 backdrop-blur-md transition-colors ${
        highlight
          ? "border-white/15 bg-ink-800/60 hover:bg-ink-800/80"
          : "border-white/10 bg-ink-900/40 hover:bg-ink-900/60"
      }`}
    >
      <div className="flex items-start justify-between">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10">
          <Icon size={20} className="text-white" />
        </div>
        <ArrowRight
          size={18}
          className="mt-2 text-white/40 transition-transform group-hover:translate-x-1 group-hover:text-white/80"
        />
      </div>
      <h3 className="mt-5 text-[20px] font-bold text-white">{title}</h3>
      <p className="mt-3 text-[15px] leading-relaxed text-white/65">{description}</p>
      <div className="mt-6 border-t border-white/10 pt-4 text-[14px] leading-relaxed text-white/55">
        <span className="font-semibold text-white/80">Ideal for:</span> {ideal}
      </div>
    </Link>
  );
}
