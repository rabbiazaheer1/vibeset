import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Lock,
  Scale,
  MapPin,
  Users,
  ShieldCheck,
  FileCheck,
} from "lucide-react";
import SectionIntro from "../../ui/SectionIntro.jsx";
import AccordionItem from "../../ui/AccordionItem.jsx";

const ITEMS = [
  {
    icon: Lock,
    title: "Privacy-first delivery",
    answer:
      "Data minimization, no third-party sharing, and compliance with PIPEDA and relevant provincial regulations guide every engagement.",
  },
  {
    icon: Scale,
    title: "Governance & ethics",
    answer:
      "Governance, ethics, privacy, and bias are assessed in Step 2 of every engagement \u2014 before any architecture or implementation work begins.",
  },
  {
    icon: MapPin,
    title: "Canada-based execution",
    answer:
      "Our team and infrastructure are based in Canada, supporting data residency and jurisdictional requirements.",
  },
  {
    icon: Users,
    title: "Contractor-ready",
    answer:
      "We can operate under institutional vendor and contractor requirements, including procurement and onboarding processes.",
  },
  {
    icon: ShieldCheck,
    title: "Research security aware",
    answer:
      "We follow research security best practices when working with universities and funded research programs.",
  },
  {
    icon: FileCheck,
    title: "Insurance & risk management",
    answer:
      "Appropriate business insurance and risk documentation are available on request for institutional engagements.",
  },
];

export default function ComplianceTrust() {
  return (
    <section className="bg-ink-950 pt-8 pb-28">
      <div className="container-page">
        <div className="border-b border-white/10 pb-8 text-center">
          <a
            href="#program-delivery"
            className="group inline-flex items-center gap-2 text-[18px] font-bold text-clay"
          >
            Program Delivery (Universities &amp; Funded Engagements)
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </a>
          <p className="mt-2 text-[15px] text-white/55">
            Learn how we support eligible institutions as a delivery partner.
          </p>
        </div>

        <div className="pt-16">
          <SectionIntro
            title="Compliance & Trust"
            description="Reliability, privacy, and research security are part of the work \u2014 not an afterthought."
          />
        </div>

        <div className="mx-auto mt-14 flex max-w-3xl flex-col gap-4">
          {ITEMS.map((item) => (
            <AccordionItem key={item.title} icon={item.icon} title={item.title}>
              {item.answer}
            </AccordionItem>
          ))}
        </div>

        <div className="mx-auto mt-10 max-w-2xl text-center text-[14px] leading-relaxed text-white/45">
          <p>
            Engagements may be delivered through partner institutions and are
            not publicly marketed as government-funded services.
          </p>
          <p className="mt-2">
            VibeSet does not imply government endorsement of any product or
            service.
          </p>
        </div>
      </div>
    </section>
  );
}
