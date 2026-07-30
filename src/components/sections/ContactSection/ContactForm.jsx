import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import Button from "../../buttons/Button.jsx";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const fieldClasses =
    "w-full rounded-xl border border-white/20 bg-transparent px-4 py-3.5 text-[15px] text-white placeholder:text-white/35 outline-none transition-colors focus:border-clay";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55 }}
      className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent p-8 sm:p-10"
    >
      <h2 className="text-[26px] font-extrabold text-white">Send Us a Message</h2>
      <p className="mt-2 text-[15px] text-white/55">
        We typically respond within a few hours
      </p>

      {submitted ? (
        <p className="mt-8 text-[17px] font-semibold text-white">
          Thanks \u2014 we will be in touch shortly.
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-6">
          <label className="flex flex-col gap-2 text-[14px] font-semibold text-white">
            Name *
            <input
              required
              name="name"
              placeholder="John Doe"
              value={form.name}
              onChange={handleChange}
              className={fieldClasses}
            />
          </label>

          <label className="flex flex-col gap-2 text-[14px] font-semibold text-white">
            Email *
            <input
              required
              type="email"
              name="email"
              placeholder="john@company.com"
              value={form.email}
              onChange={handleChange}
              className={fieldClasses}
            />
          </label>

          <label className="flex flex-col gap-2 text-[14px] font-semibold text-white">
            Company
            <input
              name="company"
              placeholder="Acme Inc"
              value={form.company}
              onChange={handleChange}
              className={fieldClasses}
            />
          </label>

          <label className="flex flex-col gap-2 text-[14px] font-semibold text-white">
            Message
            <textarea
              rows={5}
              name="message"
              placeholder="Tell us about your goals and how we can help..."
              value={form.message}
              onChange={handleChange}
              className={`${fieldClasses} resize-none`}
            />
          </label>

          <Button type="submit" variant="primary" icon={Send} iconPosition="right" className="w-full">
            Send Message
          </Button>
        </form>
      )}
    </motion.div>
  );
}
