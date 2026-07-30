import React from "react";
import PageHeader from "../../components/ui/PageHeader.jsx";
import PathCard from "../../components/cards/PathCard.jsx";
import CTA from "../../components/sections/CTA/CTA.jsx";
import { Briefcase, GraduationCap, Sparkles } from "lucide-react";

const SERVICES = [
  {
    icon: Briefcase,
    title: "VibeSet Agency",
    description:
      "Custom AI automation designed for your business. We handle discovery, architecture, deployment, and ongoing optimization.",
    ideal: "Enterprises, institutions, and growing teams with complex workflows.",
    to: "/services/agency",
  },
  {
    icon: GraduationCap,
    title: "VibeSet Consulting",
    description:
      "Program-ready AI advisory for institutions and SMEs. Compliance-forward guidance from assessment to implementation.",
    ideal: "Organizations seeking structured AI adoption with audit-ready documentation.",
    to: "/services/consulting",
    highlight: true,
  },
  {
    icon: Sparkles,
    title: "AI Consulting",
    description:
      "Strategic guidance on AI adoption, from opportunity mapping to implementation roadmaps.",
    ideal: "Leadership teams evaluating where AI fits their roadmap.",
    to: "/ai-consulting",
  },
];

export default function Services() {
  return (
    <>
      <PageHeader
        eyebrow="SERVICES"
        title="Services Built Around"
        highlight="Your Workflow"
        description="Choose the engagement model that matches how your team works today—and where you want it to go."
      />
      <section className="bg-ink-950 pb-28">
        <div className="container-page grid grid-cols-1 gap-6 md:grid-cols-3">
          {SERVICES.map((service) => (
            <PathCard key={service.title} {...service} />
          ))}
        </div>
      </section>
      <CTA />
    </>
  );
}
