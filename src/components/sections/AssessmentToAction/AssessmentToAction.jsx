import React from "react";
import { Search, Compass, Wrench } from "lucide-react";
import SectionIntro from "../../ui/SectionIntro.jsx";
import IconCard from "../../cards/IconCard.jsx";

const ITEMS = [
  {
    icon: Search,
    title: "AI Use-Case Framing & Feasibility",
    description:
      "Clarify the use case, constraints, success metrics, and the business/technical requirements to implement AI.",
  },
  {
    icon: Compass,
    title: "Workflow Design & Architecture",
    description:
      "Map out AI-ready workflows that integrate with existing systems and respect governance requirements.",
  },
  {
    icon: Wrench,
    title: "Build, Deploy & Handoff",
    description:
      "From prototype to production \u2014 we build, test, document, and hand off reliable AI systems.",
  },
];

export default function AssessmentToAction() {
  return (
    <section id="approach" className="bg-ink-950 py-28">
      <div className="container-page">
        <SectionIntro
          title="From Assessment to Action"
          description="A practical approach built for clarity, compliance, and execution \u2014 not just prototypes."
        />
        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {ITEMS.map((item, i) => (
            <IconCard key={item.title} {...item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
