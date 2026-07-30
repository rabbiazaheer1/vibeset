import React from "react";
import { motion } from "framer-motion";
import { FileText, BarChart3, Calculator } from "lucide-react";
import SectionIntro from "../../ui/SectionIntro.jsx";
import IconCard from "../../cards/IconCard.jsx";

const ITEMS = [
  {
    icon: FileText,
    title: "Engagement Summary Pack",
    description:
      "Meeting notes, decisions, assumptions, and a final action plan that stakeholders can approve.",
  },
  {
    icon: BarChart3,
    title: "Monthly Progress Reporting",
    description:
      "Activity summaries, milestones, and outcomes formatted for partner institutions and program needs.",
  },
  {
    icon: Calculator,
    title: "Cost & Effort Breakdown",
    description:
      "Clear cost components and resource categories to support planning and grant/program templates.",
  },
];

export default function ReportingDocumentation() {
  return (
    <section className="bg-ink-950 py-28">
      <div className="container-page">
        <SectionIntro
          title="Reporting & Documentation"
          description="Built for program reporting, stakeholder updates, and audit-friendly documentation."
        />
        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {ITEMS.map((item, i) => (
            <IconCard key={item.title} {...item} index={i} />
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto mt-10 max-w-2xl text-center text-[15px] leading-relaxed text-white/50"
        >
          <p>
            Post-engagement assessment and stakeholder feedback can be
            included as part of program closeout.
          </p>
          <p className="mt-2">
            Project information may be subject to institutional and
            government transparency requirements.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
