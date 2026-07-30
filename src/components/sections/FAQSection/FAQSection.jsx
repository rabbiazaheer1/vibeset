import React from "react";
import { motion } from "framer-motion";
import AccordionItem from "../../ui/AccordionItem.jsx";

const FAQS = [
  {
    question: "Do you build solutions or only advise?",
    answer:
      "Both. Engagements can be advisory-only, build + handoff, or full implementation. We scope the engagement based on your needs and timeline.",
  },
  {
    question: "Can you work with sensitive data?",
    answer:
      "Yes. We follow privacy-first principles \u2014 data minimization, no third-party sharing, and compliance with PIPEDA and relevant provincial regulations.",
  },
  {
    question: "Do you support university labs and funded programs?",
    answer:
      "Yes. We act as a delivery partner for eligible institutions and funded programs, with structured documentation for program closeout and audit requirements.",
  },
  {
    question: "Do you assess governance, ethics, and bias?",
    answer:
      "Governance, ethics, privacy, and bias are assessed in Step 2 of every engagement \u2014 before any architecture or implementation work begins.",
  },
  {
    question: "Can you work with existing IT systems?",
    answer:
      "Yes. We assess your current stack in the intake phase and design solutions that integrate with \u2014 not replace \u2014 your existing infrastructure.",
  },
  {
    question: "What do we receive at the end?",
    answer:
      "Every engagement delivers: an action plan, use-case framing, data readiness assessment, governance notes, and recommended next steps. Funded engagements also include a closeout report.",
  },
  {
    question: "Do you provide sample deliverables before we start?",
    answer:
      "Yes. We can share anonymized samples of past engagement outputs during our initial consultation.",
  },
];

export default function FAQSection() {
  return (
    <section className="bg-ink-950 py-28">
      <div className="container-page">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
          className="text-center font-display-fallback text-[36px] leading-tight sm:text-[42px]"
        >
          FAQs
        </motion.h2>

        <div className="mx-auto mt-14 flex max-w-3xl flex-col gap-5">
          {FAQS.map((faq) => (
            <AccordionItem key={faq.question} title={faq.question} defaultOpen>
              {faq.answer}
            </AccordionItem>
          ))}
        </div>
      </div>
    </section>
  );
}
