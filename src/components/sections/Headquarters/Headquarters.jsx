import React from "react";
import { motion } from "framer-motion";
import { Building2 } from "lucide-react";

export default function Headquarters() {
  return (
    <section className="bg-ink-950 py-28">
      <div className="container-page">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
          className="font-display-fallback text-[30px] leading-tight sm:text-[36px]"
        >
          Strategically Located in the Heart of Downtown
        </motion.h2>

        <div className="mt-14 grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="flex aspect-[4/3] items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-ink-700 via-ink-800 to-ink-950"
          >
            <img
              src="/src/assets/images/vibeset-hq.jpg"
              alt="VibeSet headquarters building in downtown Kamloops, BC"
              className="h-full w-full object-cover"
              onError={(e) => {
                e.currentTarget.style.display = "none";
                e.currentTarget.nextSibling.style.display = "flex";
              }}
            />
            <div className="hidden h-full w-full flex-col items-center justify-center gap-3 text-white/30">
              <Building2 size={44} />
              <span className="text-[13px] font-medium">
                VibeSet HQ \u2014 100-388 1st Ave, Kamloops
              </span>
            </div>
          </motion.div>

          <div>
            <motion.h3
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5 }}
              className="text-[22px] font-bold text-white"
            >
              VibeSet Headquarters
            </motion.h3>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: 0.06 }}
              className="mt-5 text-[17px] leading-relaxed text-white/65"
            >
              <p>100-388 1st Avenue</p>
              <p>Downtown Kamloops, BC V2C 1G1</p>
              <p>Canada</p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: 0.12 }}
              className="mt-6 text-[17px] leading-relaxed text-white/65"
            >
              Our office is located in the heart of downtown, providing easy
              access for clients and partners. The central location reflects
              our commitment to being embedded in the business communities we
              serve.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: 0.18 }}
              className="mt-6 text-[17px] leading-relaxed text-white/65"
            >
              Whether you&apos;re local or visiting, we&apos;re always happy
              to connect in person to discuss how AI automation can transform
              your operations.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}
