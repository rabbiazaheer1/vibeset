import React from "react";
import { Home, LayoutGrid, Megaphone, FileText, BrainCircuit, BarChart3, Radio, Inbox, Users, Waypoints, Search } from "lucide-react";

const NAV_GROUPS = [
  { label: "BRAND", items: [{ icon: LayoutGrid, label: "Overview" }] },
  { label: "CAMPAIGNS", items: [{ icon: Megaphone, label: "AI Campaigns", badge: "19" }] },
  {
    label: "CONTENT",
    items: [
      { icon: FileText, label: "Content" },
      { icon: BrainCircuit, label: "Intelligence" },
      { icon: BarChart3, label: "Analytics" },
    ],
  },
  {
    label: "CHANNELS & REACH",
    items: [
      { icon: Radio, label: "Channels" },
      { icon: Inbox, label: "Inbox" },
      { icon: Users, label: "Leads", active: true },
      { icon: Waypoints, label: "Outreach" },
    ],
  },
];

const CANDIDATES = [
  {
    title: "The Enterprise Operations Leader",
    body:
      "COOs and VP-level executives at telecom or real estate firms. They are motivated by cost reduction and efficiency. They fear falling behind on AI but are risk-averse regarding data compliance and system integration.",
  },
  {
    title: "The Sales & Support Scaler",
    body:
      "Heads of Customer Experience or Sales. They need to handle thousands of concurrent calls and recover debts or close deals at scale. They want automation that doesn\u2019t sound robotic.",
  },
];

const STATS = [
  { label: "TOTAL", value: 6 },
  { label: "NEW", value: 2 },
  { label: "CONTACTED", value: 2 },
  { label: "QUALIFIED", value: 2 },
  { label: "CONVERTED", value: 0 },
];

export default function LynxUpMockup() {
  return (
    <div className="w-full overflow-hidden rounded-2xl border border-black/5 bg-sand-100 text-ink-950 shadow-2xl">
      <div className="flex items-center justify-between border-b border-black/5 px-4 py-2.5">
        <div className="flex items-center gap-2">
          <div className="flex h-6 w-6 items-center justify-center rounded-md bg-orange-600 text-[10px] font-bold text-white">
            L
          </div>
          <span className="text-[13px] font-bold">LynxUp</span>
        </div>
        <div className="flex items-center gap-3 text-[11px] text-ink-950/50">
          <Home size={14} />
          <span>Dashboard</span>
          <span>/</span>
          <span className="font-semibold text-ink-950/80">Leads</span>
        </div>
        <span className="rounded-full bg-ink-950/5 px-2.5 py-1 text-[11px] font-semibold">
          Pro Plan
        </span>
      </div>

      <div className="grid grid-cols-[168px_1fr]">
        <aside className="hidden flex-col gap-4 border-r border-black/5 px-3 py-4 sm:flex">
          <div className="flex items-center gap-2 rounded-lg bg-black/5 px-2 py-1.5 text-[11px] font-semibold">
            Endeavour Technolo...
          </div>
          {NAV_GROUPS.map((group) => (
            <div key={group.label}>
              <p className="px-2 text-[10px] font-bold tracking-wide text-ink-950/35">
                {group.label}
              </p>
              <div className="mt-1 flex flex-col gap-0.5">
                {group.items.map((item) => (
                  <div
                    key={item.label}
                    className={`flex items-center justify-between rounded-md px-2 py-1.5 text-[12px] ${
                      item.active
                        ? "bg-orange-600 text-white font-semibold"
                        : "text-ink-950/65"
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <item.icon size={13} />
                      {item.label}
                    </span>
                    {item.badge && (
                      <span className="text-[10px] text-ink-950/40">{item.badge}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </aside>

        <div className="px-5 py-5">
          <div className="mb-3 flex items-center gap-2 text-[10px] font-bold tracking-wide text-orange-600">
            <span className="h-1.5 w-1.5 rounded-full bg-orange-600" />
            LEAD ENGINE — ACTIVE
          </div>
          <div className="flex items-start justify-between gap-4">
            <div>
              <h4 className="text-[20px] font-extrabold leading-tight">
                Find your next customers
              </h4>
              <p className="mt-1 max-w-md text-[12px] leading-snug text-ink-950/55">
                AI matches your Brand DNA to verified prospects, or run a
                custom search by segment and location.
              </p>
            </div>
            <div className="flex shrink-0 items-center gap-2">
              <span className="flex items-center gap-1 rounded-full bg-orange-600 px-3 py-1.5 text-[11px] font-bold text-white">
                Auto-Find
              </span>
              <span className="flex items-center gap-1 rounded-full border border-ink-950/15 px-3 py-1.5 text-[11px] font-semibold text-ink-950/60">
                <Search size={11} /> Custom
              </span>
            </div>
          </div>

          <div className="mt-4 rounded-xl border border-ink-950/10 bg-white/60 p-3">
            <p className="text-[10px] font-bold tracking-wide text-orange-600">
              IDENTIFIED FROM BRAND DNA
            </p>
            <p className="mt-1 text-[11px] leading-snug text-ink-950/60">
              Brand: Endeavour Technologies &nbsp;|&nbsp; Audience: Enterprise
              decision-makers, COOs, and technical le... &nbsp;|&nbsp; Tone:
              Confident, Serious, And Pragmatic.
            </p>
            <p className="mt-1 text-[11px] text-ink-950/50">
              Focus: Expertise, Knowledge, Excellence, Entrepreneurship,
              Compassion
            </p>
          </div>

          <p className="mt-3 text-[11px] font-semibold text-ink-950/50">
            Targeting United States — 2 CDPs identified from your brand analysis
          </p>

          <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {CANDIDATES.map((c) => (
              <div
                key={c.title}
                className="rounded-xl border border-ink-950/10 bg-white/70 p-3"
              >
                <div className="flex items-center justify-between">
                  <p className="text-[12.5px] font-bold">{c.title}</p>
                  <span className="rounded-full bg-orange-100 px-2 py-0.5 text-[9px] font-bold text-orange-700">
                    AI MATCHED
                  </span>
                </div>
                <p className="mt-1.5 text-[11px] leading-snug text-ink-950/55">
                  {c.body}
                </p>
                <p className="mt-2 text-[10px] font-bold text-ink-950/40">
                  TARGET QUANTITY
                </p>
                <div className="mt-1 flex gap-1.5">
                  {[10, 25, 50].map((n) => (
                    <span
                      key={n}
                      className={`rounded-md px-2 py-0.5 text-[10px] font-semibold ${
                        n === 25
                          ? "bg-orange-600 text-white"
                          : "bg-ink-950/5 text-ink-950/50"
                      }`}
                    >
                      {n}
                    </span>
                  ))}
                </div>
                <button className="mt-2 w-full rounded-lg bg-orange-600 py-1.5 text-[11px] font-bold text-white">
                  Find 25 leads →
                </button>
              </div>
            ))}
          </div>

          <div className="mt-4 grid grid-cols-5 gap-2 rounded-xl border border-ink-950/10 bg-white/50 p-3 text-center">
            {STATS.map((s) => (
              <div key={s.label}>
                <p className="text-[9px] font-bold tracking-wide text-ink-950/35">
                  {s.label}
                </p>
                <p className="text-[15px] font-extrabold">{s.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
