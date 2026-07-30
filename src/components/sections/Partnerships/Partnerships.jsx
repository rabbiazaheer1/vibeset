import React from "react";
import { motion } from "framer-motion";
import { CalendarDays } from "lucide-react";
import Button from "../../buttons/Button.jsx";
import PartnerLogosCard from "../../cards/PartnerLogosCard.jsx";

export default function Partnerships() {
  return (
    <section className="bg-ink-950 py-28">
      <div className="container-page">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
          className="text-center font-display-fallback text-[34px] leading-tight sm:text-[40px]"
        >
          Partnerships
        </motion.h2>

        <div className="mt-16 grid grid-cols-1 items-start gap-14 lg:grid-cols-2">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5 }}
              className="text-[17px] leading-relaxed text-white/65"
            >
              VibeSet has been fortunate to collaborate with leading academic
              and innovation organizations across Canada.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: 0.06 }}
              className="mt-6 text-[17px] leading-relaxed text-white/65"
            >
              Through <span className="font-bold text-white">Mitacs</span>{" "}
              support and our participation in the{" "}
              <span className="font-bold text-white">
                Lab2Market (L2M) Validate
              </span>{" "}
              cohort, we are building applied AI systems grounded in real
              operational needs.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: 0.12 }}
              className="mt-6 text-[17px] leading-relaxed text-white/65"
            >
              Our early growth has been supported by the{" "}
              <span className="font-bold text-white">TRU Generator</span>{" "}
              incubator, and we continue to work closely with faculty at{" "}
              <span className="font-bold text-white">
                Thompson Rivers University
              </span>
              , including collaboration with the{" "}
              <span className="font-bold text-white">
                Bob Gaglardi School of Business and Economics
              </span>
              .
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: 0.18 }}
              className="mt-6 text-[17px] leading-relaxed text-white/65"
            >
              These partnerships strengthen our ability to bridge research,
              automation, and deployment \u2014 delivering AI that performs
              beyond demos and into real-world operations.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: 0.24 }}
              className="mt-6 text-[17px] font-bold leading-relaxed text-white"
            >
              We&apos;re proud to build alongside Canada&apos;s innovation
              ecosystem as we bring practical AI into modern organizations.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-9"
            >
              <Button as="link" to="/contact" variant="primary" icon={CalendarDays}>
                Book a Consultation
              </Button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <PartnerLogosCard />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
