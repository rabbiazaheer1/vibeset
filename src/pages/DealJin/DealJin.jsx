import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Building2,
  ShoppingBag,
  Wrench,
  RotateCcw,
  ClipboardList,
  Target,
  PhoneCall,
  Hotel,
  DollarSign,
  Car,
  ShoppingCart,
  Sparkles,
} from "lucide-react";
import Button from "../../components/buttons/Button.jsx";

const NEGOTIATE_ITEMS = [
  {
    icon: Building2,
    title: "Hotels & travel bookings",
  },
  {
    icon: ShoppingBag,
    title: "Marketplace items (Kijiji/FB Marketplace style deals)",
  },
  {
    icon: Wrench,
    title: "Local services (internet, gym, contractors)",
  },
  {
    icon: RotateCcw,
    title: "Renewals & subscriptions",
  },
];

const STEPS = [
  {
    icon: ClipboardList,
    title: "Tell DealJin what you want",
    accent: "bg-clay/70",
  },
  {
    icon: Target,
    title: "Set your goal",
    accent: "bg-slate-400/70",
  },
  {
    icon: PhoneCall,
    title: "DealJin calls + reports back",
    accent: "bg-clay/70",
  },
];

const NEGOTIATION_CATEGORIES = [
  { icon: Hotel, label: "Hotels", note: "Avg $40+ off", bg: "bg-amber-200" },
  { icon: DollarSign, label: "Bills", note: "Lower monthly rates", bg: "bg-emerald-200" },
  { icon: Car, label: "Cars", note: "Big ticket savings", bg: "bg-orange-200" },
  { icon: ShoppingCart, label: "Marketplace", note: "Skip the haggle", bg: "bg-violet-200" },
];

export default function DealJin() {
  return (
    <>
      <section className="relative overflow-hidden bg-white pt-32 text-ink-950">
        <div className="pointer-events-none absolute -left-40 top-0 h-[600px] w-[600px] rounded-full bg-gradient-to-br from-rose-100 to-emerald-50 opacity-60 blur-3xl" />
        <div className="container-page relative z-10 grid grid-cols-1 items-center gap-12 pb-0 lg:grid-cols-2">
          <div className="pb-24">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              className="font-display-fallback text-[42px] leading-[1.1] sm:text-[52px]"
            >
              Your AI negotiator.
              <br />
              On the phone.
              <br />
              For you.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="mt-8 max-w-md text-[17px] leading-relaxed text-ink-950/65"
            >
              DealJin makes real calls to negotiate prices for hotels,
              marketplace items, services, and more — then sends you
              the outcome + call summary.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.18 }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <a
                href="https://dealjin.vibeset.ca"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-pill bg-ink-950 px-6 py-4 text-[15px] font-bold text-white transition-colors hover:bg-ink-800"
              >
                Go to DealJin
                <ArrowRight size={18} />
              </a>
              <a
                href="#negotiators"
                className="inline-flex items-center gap-2 rounded-pill border border-ink-950/25 px-6 py-4 text-[15px] font-bold text-ink-950 transition-colors hover:bg-ink-950/5"
              >
                Meet the negotiators
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative flex items-end justify-center overflow-hidden rounded-t-3xl bg-gradient-to-br from-[#1a1440] via-[#2a1f5e] to-[#c96a3a] px-8 pt-16 lg:h-[560px]"
          >
            <div className="flex h-full w-full items-end justify-center gap-6">
              <div className="mb-0 flex h-64 w-40 shrink-0 items-center justify-center rounded-full bg-white/10">
                <Sparkles size={64} className="text-white/70" />
              </div>

              <div className="w-full max-w-[280px] rounded-t-3xl border border-white/15 bg-ink-950/70 p-5 pb-8 backdrop-blur">
                <h3 className="text-center text-[19px] font-extrabold leading-tight text-white">
                  What We Negotiate
                </h3>
                <p className="mt-1 text-center text-[12px] text-white/50">
                  Hotels, bills, refunds, cars, services, and more.
                </p>
                <div className="mt-5 grid grid-cols-2 gap-3">
                  {NEGOTIATION_CATEGORIES.map((cat) => (
                    <div
                      key={cat.label}
                      className={`${cat.bg} rounded-xl px-3 py-3 text-ink-950`}
                    >
                      <cat.icon size={18} />
                      <p className="mt-2 text-[13px] font-bold">{cat.label}</p>
                      <p className="text-[10px] text-ink-950/60">{cat.note}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-sand-100 py-24 text-ink-950">
        <div className="container-page">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55 }}
            className="font-display-fallback text-[32px] leading-tight sm:text-[38px]"
          >
            What you can negotiate
          </motion.h2>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {NEGOTIATE_ITEMS.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="rounded-2xl border-2 border-ink-950 bg-white p-6"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-sand-200">
                  <item.icon size={22} className="text-ink-950" />
                </div>
                <h3 className="mt-5 text-[17px] font-bold leading-snug">
                  {item.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-sand-100 pb-28 text-ink-950">
        <div className="container-page">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55 }}
            className="font-display-fallback text-[32px] leading-tight sm:text-[38px]"
          >
            How it works
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, delay: 0.06 }}
            className="mt-3 text-[19px] font-bold text-ink-950/80"
          >
            Three steps. One outcome: better terms.
          </motion.p>

          <div className="relative mt-14 flex flex-col items-center gap-6 sm:flex-row sm:justify-center sm:gap-4">
            {STEPS.map((step, i) => (
              <React.Fragment key={step.title}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex w-full max-w-[280px] overflow-hidden rounded-2xl border-2 border-ink-950 bg-white"
                >
                  <div className={`${step.accent} flex w-20 shrink-0 items-center justify-center`}>
                    <step.icon size={30} className="text-ink-950" strokeWidth={1.8} />
                  </div>
                  <div className="flex items-center px-5 py-6">
                    <p className="text-[18px] font-extrabold leading-tight">
                      {step.title}
                    </p>
                  </div>
                </motion.div>
                {i < STEPS.length - 1 && (
                  <ArrowRight size={28} className="hidden shrink-0 text-ink-950/70 sm:block" />
                )}
              </React.Fragment>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, rotate: -6, scale: 0.9 }}
            whileInView={{ opacity: 1, rotate: -6, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mx-auto mt-14 w-fit rounded-lg border-2 border-ink-950 bg-sand-200 px-6 py-3 sm:ml-auto sm:mr-0"
          >
            <p className="font-display-fallback text-[15px] tracking-wide text-ink-950">
              CALL SUMMARY INCLUDED
            </p>
          </motion.div>
        </div>
      </section>

      <section id="negotiators" className="bg-sand-100 pb-0 text-ink-950">
        <div className="container-page pb-16 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55 }}
            className="font-display-fallback text-[32px] leading-tight sm:text-[38px]"
          >
            Meet your negotiators
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, delay: 0.06 }}
            className="mt-3 text-[17px] text-ink-950/60"
          >
            Choose a style — calm, confident, friendly, or firm.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="flex h-[420px] items-end justify-center gap-10 overflow-hidden bg-gradient-to-b from-[#2a2657] via-[#7a4a52] to-[#e0a558] px-6"
        >
          {["Calm", "Confident", "Friendly", "Firm"].map((style) => (
            <div key={style} className="flex flex-col items-center gap-3 pb-10">
              <div className="flex h-28 w-28 items-center justify-center rounded-full border-4 border-white/30 bg-white/10 backdrop-blur">
                <span className="text-[13px] font-bold text-white">{style}</span>
              </div>
            </div>
          ))}
        </motion.div>
      </section>

      <section className="bg-sand-100 py-24">
        <div className="container-page">
          <div className="relative overflow-hidden rounded-3xl bg-ink-800 px-8 py-14 sm:px-14">
            <span className="absolute right-6 top-6 -rotate-2 rounded-md bg-sand-100 px-4 py-1.5 text-[11px] font-bold tracking-wide text-ink-950">
              TOOL BY VIBESET
            </span>

            <h2 className="max-w-lg font-display-fallback text-[32px] leading-tight text-white sm:text-[38px]">
              Stop overpaying — let DealJin make the call.
            </h2>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="https://dealjin.vibeset.ca"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-pill bg-white px-6 py-4 text-[15px] font-bold text-ink-950 transition-colors hover:bg-sand-200"
              >
                Go to DealJin
                <ArrowRight size={18} />
              </a>
              <Button as="link" to="/contact" variant="outline">
                Book a call with VibeSet
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
