import React from "react";
import { ArrowRight } from "lucide-react";
import PageHeader from "../../components/ui/PageHeader.jsx";
import Button from "../../components/buttons/Button.jsx";
import AssessmentToAction from "../../components/sections/AssessmentToAction/AssessmentToAction.jsx";
import WhoWeWorkWith from "../../components/sections/WhoWeWorkWith/WhoWeWorkWith.jsx";
import HowWeWork from "../../components/sections/HowWeWork/HowWeWork.jsx";
import WhyVibeSetConsulting from "../../components/sections/WhyVibeSetConsulting/WhyVibeSetConsulting.jsx";
import ProgramReadyDelivery from "../../components/sections/ProgramReadyDelivery/ProgramReadyDelivery.jsx";
import ComplianceTrust from "../../components/sections/ComplianceTrust/ComplianceTrust.jsx";
import ReportingDocumentation from "../../components/sections/ReportingDocumentation/ReportingDocumentation.jsx";
import EngagementOptions from "../../components/sections/EngagementOptions/EngagementOptions.jsx";
import FAQSection from "../../components/sections/FAQSection/FAQSection.jsx";
import CTA from "../../components/sections/CTA/CTA.jsx";

export default function AIConsulting() {
  return (
    <>
      <PageHeader
        eyebrow="VIBESET CONSULTING"
        title="AI Strategy &"
        highlight="Automation Consulting"
        description="We help organizations identify where AI creates real value \u2014 and deliver reliable systems with clear governance, timelines, and measurable outcomes."
      >
        <div className="flex flex-col items-center gap-6">
          <div className="flex flex-col items-center gap-4 sm:flex-row">
            <Button as="link" to="/contact" variant="primary" icon={ArrowRight} iconPosition="right">
              Book a Consultation
            </Button>
            <Button as="link" to="#approach" variant="outline">
              Explore Our Approach
            </Button>
          </div>
          <p className="text-[15px] text-white/50">
            Program-ready delivery for universities, SMEs, and operations teams.
          </p>
        </div>
      </PageHeader>

      <AssessmentToAction />
      <WhoWeWorkWith />
      <HowWeWork />
      <WhyVibeSetConsulting />
      <ProgramReadyDelivery />
      <ComplianceTrust />
      <ReportingDocumentation />
      <EngagementOptions />
      <FAQSection />

      <CTA
        title="Let\u2019s Talk"
        highlight=""
        description="Ready to explore how AI can create real value for your organization? Let's start with a conversation."
        buttonLabel="Book a Consultation"
        buttonTo="/contact"
        buttonIcon={ArrowRight}
        footnote="Not sure where to start? We'll help you figure it out."
      />
    </>
  );
}
