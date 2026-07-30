import React, { useState } from "react";
import { Clock, Video, ChevronLeft, ChevronRight } from "lucide-react";

const WEEKDAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const WEEKS = [
  [null, null, 1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10, 11, 12],
  [13, 14, 15, 16, 17, 18, 19],
  [20, 21, 22, 23, 24, 25, 26],
  [27, 28, 29, 30, 31, null, null],
];

const AVAILABLE_DAYS = new Set([1, 2, 3, 4, 8, 9, 10, 11, 15, 16, 17, 18, 24, 25, 26]);

export default function CalendlyMock() {
  const [selected, setSelected] = useState(24);

  return (
    <div className="relative overflow-hidden rounded-2xl border border-black/5 bg-sand-100 text-ink-950 shadow-2xl">
      <span className="absolute right-0 top-0 origin-top-right translate-x-[28%] translate-y-[55%] rotate-45 bg-ink-950/80 px-8 py-1 text-[10px] font-bold tracking-wide text-white/80">
        POWERED BY Calendly
      </span>

      <div className="flex flex-col items-center gap-3 px-8 pb-6 pt-10 text-center">
        <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-ink-950/15">
          <svg width="20" height="20" viewBox="0 0 28 28" fill="none">
            <path d="M6 7L14 21L22 7" stroke="#0a0e17" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M6 21L14 7L22 21" stroke="#0a0e17" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" opacity="0.4" />
          </svg>
        </div>
        <p className="text-[13px] font-semibold text-ink-950/50">VibeSet</p>
        <h3 className="text-[22px] font-extrabold leading-tight">
          VibeSet Free Consultation
        </h3>

        <div className="mt-2 flex w-full flex-col items-start gap-3 px-2 text-left">
          <div className="flex items-center gap-2 text-[15px] font-medium text-ink-950/80">
            <Clock size={16} />
            45 min
          </div>
          <div className="flex items-start gap-2 text-[14px] font-semibold text-ink-950/80">
            <Video size={16} className="mt-0.5 shrink-0" />
            Web conferencing details provided upon confirmation.
          </div>
        </div>
      </div>

      <div className="border-t border-ink-950/10 px-8 py-8">
        <h4 className="text-center text-[18px] font-extrabold">Select a Day</h4>

        <div className="mt-5 flex items-center justify-between">
          <button
            type="button"
            aria-label="Previous month"
            className="flex h-8 w-8 items-center justify-center rounded-full text-ink-950/50 hover:bg-ink-950/5"
          >
            <ChevronLeft size={18} />
          </button>
          <p className="text-[15px] font-bold">July 2026</p>
          <button
            type="button"
            aria-label="Next month"
            className="flex h-8 w-8 items-center justify-center rounded-full text-ink-950/50 hover:bg-ink-950/5"
          >
            <ChevronRight size={18} />
          </button>
        </div>

        <div className="mt-5 grid grid-cols-7 gap-y-3 text-center">
          {WEEKDAYS.map((day) => (
            <span key={day} className="text-[12px] font-semibold text-ink-950/40">
              {day}
            </span>
          ))}

          {WEEKS.flat().map((day, i) => {
            if (!day) return <span key={`empty-${i}`} />;
            const isAvailable = AVAILABLE_DAYS.has(day);
            const isSelected = day === selected;
            return (
              <button
                type="button"
                key={day}
                disabled={!isAvailable}
                onClick={() => setSelected(day)}
                className={`relative mx-auto flex h-9 w-9 items-center justify-center rounded-full text-[14px] font-semibold transition-colors ${
                  isSelected
                    ? "bg-[#0b5cd8] text-white"
                    : isAvailable
                    ? "text-[#0b5cd8] hover:bg-[#0b5cd8]/10"
                    : "text-ink-950/25"
                }`}
              >
                {day}
                {isSelected && (
                  <span className="absolute -bottom-1 h-1 w-1 rounded-full bg-[#0b5cd8]" />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
