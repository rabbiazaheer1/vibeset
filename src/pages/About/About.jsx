import React from "react";
import { CalendarDays } from "lucide-react";
import PageHeader from "../../components/ui/PageHeader.jsx";
import Button from "../../components/buttons/Button.jsx";
import AboutIntro from "../../components/sections/AboutIntro/AboutIntro.jsx";
import WhyExists from "../../components/sections/WhyExists/WhyExists.jsx";
import Partnerships from "../../components/sections/Partnerships/Partnerships.jsx";
import Headquarters from "../../components/sections/Headquarters/Headquarters.jsx";
import CTA from "../../components/sections/CTA/CTA.jsx";

export default function About() {
  return (
    <>
      <PageHeader
        eyebrow="ABOUT VIBESET"
        title="Building AI That"
        highlight="Actually Works"
        description="VibeSet exists to make automation practical, ethical, and impactful."
      >
        <Button as="link" to="/contact" variant="primary" icon={CalendarDays}>
          Book a Free Consultation
        </Button>
      </PageHeader>

      <AboutIntro />
      <WhyExists />
      <Partnerships />
      <Headquarters />

      <CTA
        title="Want to Work With Us?"
        highlight=""
        description="Let\u2019s explore how we can help you build automation that lasts."
        buttonLabel="Contact Us"
        buttonTo="/contact"
        buttonIcon={null}
        footnote=""
      />
    </>
  );
}
