import React from "react";
import { Users, ShieldCheck, ArrowUpRight } from "lucide-react";

export default function PartnerLogosCard() {
  return (
    <div className="rounded-3xl border border-white/10 bg-transparent p-2">
      <div className="rounded-2xl bg-sand-100 px-10 py-12 text-ink-950">
        <div className="flex flex-col items-center gap-10">
          <div className="flex items-center gap-2 text-[32px] font-extrabold text-[#0b5cd8]">
            <Users size={30} className="text-[#0b5cd8]" strokeWidth={2.4} />
            mitacs
          </div>

          <div className="flex items-center gap-1 text-[36px] font-black leading-none">
            <span className="text-ink-950">L</span>
            <span className="text-[#2fb6c4]">2</span>
            <span className="text-ink-950">M</span>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded bg-[#e0672a] text-white">
              <ShieldCheck size={18} />
            </div>
            <div className="leading-tight">
              <p className="text-[17px] font-extrabold text-[#e0672a]">TRU</p>
              <p className="text-[17px] font-extrabold text-[#1c3a4a]">GENERATOR</p>
            </div>
          </div>

          <div className="flex items-center gap-3 text-center">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#0e2f3f] text-sand-100">
              <ShieldCheck size={18} />
            </div>
            <p className="text-left text-[14px] font-bold leading-snug text-[#0e2f3f]">
              Bob Gaglardi
              <br />
              School of Business{" "}
              <span className="text-[13px] font-semibold text-ink-950/50">|</span> THOMPSON
              <br />
              &amp; Economics RIVERS UNIVERSITY
            </p>
          </div>

          <div className="flex items-center gap-2 text-[26px] font-extrabold text-[#0b2b52]">
            <ArrowUpRight size={26} className="text-[#1b7de0]" strokeWidth={2.8} />
            innovation UBC
          </div>

          <div className="flex items-center gap-3">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#d21f4b] text-center text-[11px] font-bold leading-tight text-white">
              SFU
              <br />
              Venture
              <br />
              Labs
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
