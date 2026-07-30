import React from "react";
import { motion } from "framer-motion";
import { CalendarDays, Mic, CheckCircle2, Calendar, Phone, Building2, Stethoscope, Users } from "lucide-react";
import FlowingWaves from "../../components/ui/FlowingWaves.jsx";
import Button from "../../components/buttons/Button.jsx";
import SectionIntro from "../../components/ui/SectionIntro.jsx";
import CTA from "../../components/sections/CTA/CTA.jsx";

const STATS = [
  { value: "62%", label: "of callers won\u2019t leave a voicemail" },
  { value: "85%", label: "of customers won\u2019t call back after a missed call" },
  { value: "3x", label: "more leads converted with immediate response" },
];

const CAPABILITIES = [
  {
    icon: Mic,
    title: "Answers Every Call",
    description:
      "Picks up instantly with a natural, professional voice. No hold music. No voicemail. Every caller gets a real response.",
  },
  {
    icon: CheckCircle2,
    title: "Qualifies Inquiries",
    description:
      "Asks the right questions to understand caller intent, urgency, and fit \u2014 then acts accordingly.",
  },
  {
    icon: Calendar,
    title: "Books Appointments",
    description:
      "Integrates with your calendar to schedule, reschedule, and confirm bookings without any human involvement.",
  },
  {
    icon: Phone,
    title: "Routes & Escalates",
    description:
      "Sends urgent calls to the right person immediately. Logs every interaction with a full summary.",
  },
];

const INDUSTRIES = [
  {
    icon: Building2,
    title: "Professional Services",
    description:
      "Law firms, accounting offices, consultants \u2014 handle intake and scheduling without interrupting billable work.",
  },
  {
    icon: Stethoscope,
    title: "Healthcare & Clinics",
    description:
      "Medical offices, dental clinics, wellness centres \u2014 HIPAA-aware call handling and appointment booking.",
  },
  {
    icon: Users,
    title: "SMBs & Local Business",
    description:
      "Any business that relies on inbound calls to drive revenue \u2014 from trades to real estate to retail.",
  },
];

const PROCESS = [
  {
    number: "01",
    title: "We Configure",
    description:
      "We set up your AI receptionist with your business info, FAQs, calendar access, and routing rules.",
  },
  {
    number: "02",
    title: "You Review",
    description:
      "Test it yourself. We refine the voice, tone, and responses until it sounds exactly like your brand.",
  },
  {
    number: "03",
    title: "Go Live",
    description:
      "Flip the switch. Your AI receptionist starts answering calls immediately \u2014 fully monitored and adjustable.",
  },
];

export default function AIVoiceReceptionist() {
  return (
    <>
      <section className="relative flex min-h-[760px] items-center overflow-hidden bg-ink-950 pb-24 pt-40">
        <FlowingWaves tone="cool" />
        <div className="container-page relative z-10">
          <div className="mx-auto max-w-4xl text-center">
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block rounded-pill border border-clay/40 px-4 py-1.5 text-[12px] font-bold tracking-wide text-clay"
            >
              VIBESET AGENCY
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.05 }}
              className="mt-6 font-display-fallback text-[42px] leading-[1.15] sm:text-[54px]"
            >
              Your Front Desk.{" "}
              <span className="text-sand-300/80">Always On.</span> Never
              <br />
              Overwhelmed.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="mx-auto mt-8 max-w-2xl text-[18px] leading-relaxed text-white/70"
            >
              An AI voice receptionist that answers every call, qualifies
              every inquiry, books appointments, and routes urgent matters
              — 24 hours a day, 7 days a week.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.15 }}
              className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
            >
              <Button as="link" to="/contact" variant="primary" icon={CalendarDays}>
                Book a Free Consultation
              </Button>
              <Button as="link" to="#how-it-works" variant="outline">
                See How It Works
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-sand-100 py-24 text-ink-950">
        <div className="container-page grid grid-cols-1 items-start gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55 }}
          >
            <h2 className="font-display-fallback text-[32px] leading-tight sm:text-[38px]">
              Missed calls are missed revenue.
            </h2>
            <p className="mt-6 text-[17px] leading-relaxed text-ink-950/65">
              Every unanswered call is a potential client who just called
              your competitor. Receptionists take breaks, get sick, and go
              home. Your business doesn&apos;t.
            </p>
            <p className="mt-5 text-[17px] leading-relaxed text-ink-950/65">
              Small businesses lose thousands monthly to missed calls alone
              — not counting the hours spent on repetitive inquiries
              that an AI could handle in seconds.
            </p>
          </motion.div>

          <div className="flex flex-col gap-6">
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.value}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="rounded-2xl bg-white p-8 shadow-[0_4px_24px_rgba(0,0,0,0.06)]"
              >
                <p className="font-display-fallback text-[42px] leading-none text-clay">
                  {stat.value}
                </p>
                <p className="mt-3 text-[15px] text-ink-950/60">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink-950 py-28">
        <div className="container-page">
          <div className="text-center">
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5 }}
              className="inline-block text-[13px] font-bold tracking-wide text-clay"
            >
              CAPABILITIES
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: 0.06 }}
              className="mt-4 font-display-fallback text-[32px] leading-tight sm:text-[38px]"
            >
              What Your AI Receptionist Does
            </motion.h2>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
            {CAPABILITIES.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="rounded-2xl border border-white/10 p-8"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-clay/15">
                  <item.icon size={20} className="text-clay" />
                </div>
                <h3 className="mt-6 text-[19px] font-bold text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-white/55">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-sand-100 py-24 text-ink-950">
        <div className="container-page">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55 }}
            className="text-center font-display-fallback text-[32px] leading-tight sm:text-[38px]"
          >
            Built for businesses that run on calls.
          </motion.h2>

          <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
            {INDUSTRIES.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="rounded-2xl bg-white p-8 shadow-[0_4px_24px_rgba(0,0,0,0.06)]"
              >
                <item.icon size={30} className="text-clay" strokeWidth={1.6} />
                <h3 className="mt-6 text-[18px] font-bold">{item.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-ink-950/60">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="how-it-works" className="bg-ink-950 py-28">
        <div className="container-page">
          <div className="text-center">
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5 }}
              className="inline-block text-[13px] font-bold tracking-wide text-clay"
            >
              THE PROCESS
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: 0.06 }}
              className="mt-4 font-display-fallback text-[32px] leading-tight sm:text-[38px]"
            >
              Live in 48 hours.
            </motion.h2>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-14 sm:grid-cols-3">
            {PROCESS.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center"
              >
                <span className="font-display-fallback text-[52px] leading-none text-white/10">
                  {step.number}
                </span>
                <h3 className="mt-3 text-[20px] font-bold text-white">
                  {step.title}
                </h3>
                <p className="mx-auto mt-3 max-w-xs text-[15px] leading-relaxed text-white/55">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTA
        title="Ready to never miss another"
        highlight="call?"
        description="Book a free 30-minute consultation. We'll show you exactly how it works for your business."
        buttonLabel="Book a Free Consultation"
        buttonTo="/contact"
        buttonIcon={CalendarDays}
        footnote=""
      />
    </>
  );
}
