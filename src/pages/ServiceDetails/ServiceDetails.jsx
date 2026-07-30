import React from "react";
import { useParams, Navigate } from "react-router-dom";
import PageHeader from "../../components/ui/PageHeader.jsx";
import CTA from "../../components/sections/CTA/CTA.jsx";
import { CheckCircle2 } from "lucide-react";

const SERVICE_DATA = {
  agency: {
    title: "VibeSet Agency",
    description:
      "Custom AI automation designed for your business. We handle discovery, architecture, deployment, and ongoing optimization.",
    points: [
      "Discovery workshops mapping your highest-friction workflows",
      "Custom architecture designed around your existing stack",
      "Deployment, monitoring, and ongoing optimization",
    ],
  },
  consulting: {
    title: "VibeSet Consulting",
    description:
      "Program-ready AI advisory for institutions and SMEs. Compliance-forward guidance from assessment to implementation.",
    points: [
      "Structured AI-readiness assessments",
      "Audit-ready documentation and governance",
      "Implementation roadmaps built for your compliance needs",
    ],
  },
};

export default function ServiceDetails() {
  const { slug } = useParams();
  const service = SERVICE_DATA[slug];

  if (!service) return <Navigate to="/404" replace />;

  return (
    <>
      <PageHeader eyebrow="SERVICE" title={service.title} description={service.description} />
      <section className="bg-ink-950 pb-28">
        <div className="container-page mx-auto max-w-2xl">
          <ul className="flex flex-col gap-4">
            {service.points.map((point) => (
              <li key={point} className="flex items-center gap-3 text-[16px] text-white/85">
                <CheckCircle2 size={20} className="shrink-0 text-clay" />
                {point}
              </li>
            ))}
          </ul>
        </div>
      </section>
      <CTA />
    </>
  );
}
