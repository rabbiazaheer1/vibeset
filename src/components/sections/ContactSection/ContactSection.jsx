import React from "react";
import ContactForm from "./ContactForm.jsx";
import ContactMethods from "./ContactMethods.jsx";

export default function ContactSection() {
  return (
    <section className="bg-ink-950 pb-28">
      <div className="container-page grid grid-cols-1 items-start gap-8 lg:grid-cols-2">
        <ContactForm />
        <ContactMethods />
      </div>
    </section>
  );
}
