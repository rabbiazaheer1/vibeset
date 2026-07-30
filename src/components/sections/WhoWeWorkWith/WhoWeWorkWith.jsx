import React from "react";
import { Monitor, Radar, Users, Megaphone } from "lucide-react";
import SectionIntro from "../../ui/SectionIntro.jsx";
import IconCard from "../../cards/IconCard.jsx";

const ITEMS = [
  {
    icon: Monitor,
    title: "Universities & Colleges",
    description:
      "Programs requiring structured AI adoption with compliance, documentation, and reporting.",
  },
  {
    icon: Radar,
    title: "SMEs & Growth Companies",
    description:
      "Organizations ready to operationalize AI across sales, marketing, or support.",
  },
  {
    icon: Users,
    title: "Operations & IT Teams",
    description:
      "Internal teams needing practical AI integration without vendor lock-in.",
  },
  {
    icon: Megaphone,
    title: "Agencies & Consultancies",
    description:
      "Service firms looking to embed AI into client delivery or internal workflows.",
  },
];

export default function WhoWeWorkWith() {
  return (
    <section className="relative overflow-hidden bg-ink-900 py-28">
      <div className="container-page relative z-10">
        <SectionIntro
          title="Who We Work With"
          description="We partner with teams navigating complexity, compliance, and the need for reliable AI delivery."
        />
        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
          {ITEMS.map((item, i) => (
            <IconCard key={item.title} {...item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
