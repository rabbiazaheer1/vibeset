import React from "react";
import { motion } from "framer-motion";
import { Clock, Zap, FileText, ShieldCheck } from "lucide-react";
import SectionIntro from "../../ui/SectionIntro.jsx";
import IconCard from "../../cards/IconCard.jsx";

const ITEMS = [
  {
    icon: Clock,
    title: "Time-Boxed Engagements",
    description:
      "Up to 20 hours of advisory support delivered through structured sessions and outputs.",
  },
  {
    icon: Zap,
    title: "Fast Response Standard",
    description:
      "We operationalize quick intake and scheduling to meet strict response timelines.",
  },
  {
    icon: FileText,
    title: "Defined Outputs",
    description:
      "Every engagement ends with an action plan, recommendations, and next steps.",
  },
  {
    icon: ShieldCheck,
    title: "Governance Built-In",
    description:
      "Privacy, ethics, and risk considerations are addressed early \u2014 not after deployment.",
  },
];

export default function ProgramReadyDelivery() {
  return (
    <section id="program-delivery" className="bg-ink-950 py-28">
      <div className="container-page">
        <SectionIntro
          title="Program-Ready Delivery"
          description="Designed to fit funded and institutional engagements with clear service standards."
        />
        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
          {ITEMS.map((item, i) => (
            <IconCard key={item.title} {...item} index={i} />
          ))}
        </div>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto mt-10 max-w-2xl text-center text-[15px] leading-relaxed text-white/50"
        >
          We can act as a delivery partner/subcontractor for eligible
          institutions and funded programs, with structured closeout
          documentation.
        </motion.p>
      </div>
    </section>
  );
}
