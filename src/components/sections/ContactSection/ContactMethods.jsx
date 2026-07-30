import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";
import CalendlyMock from "../../ui/CalendlyMock.jsx";

const METHODS = [
  {
    icon: Mail,
    title: "Email Us",
    value: "info@vibeset.ca",
    note: "We respond instantly",
    href: "mailto:info@vibeset.ca",
  },
  {
    icon: Phone,
    title: "Call Us",
    value: "+1 (226) 990-0188",
    note: "Available Mon-Fri",
    href: "tel:+12269900188",
  },
];

export default function ContactMethods() {
  return (
    <div>
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.55 }}
        className="font-display-fallback text-[26px] leading-tight sm:text-[30px]"
      >
        Other Ways to Reach Us
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.55, delay: 0.06 }}
        className="mt-2 text-[16px] text-white/55"
      >
        Choose the method that works best for you
      </motion.p>

      <div className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {METHODS.map((method, i) => (
          <motion.a
            key={method.title}
            href={method.href}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="rounded-2xl border border-white/15 p-6 transition-colors hover:bg-white/[0.04]"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10">
              <method.icon size={19} className="text-white" />
            </div>
            <p className="mt-4 text-[17px] font-bold text-white">{method.title}</p>
            <p className="mt-1 text-[15px] font-semibold text-white/80">{method.value}</p>
            <p className="mt-1 text-[13px] text-white/45">{method.note}</p>
          </motion.a>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.55, delay: 0.15 }}
        className="mt-6"
      >
        <CalendlyMock />
      </motion.div>
    </div>
  );
}
