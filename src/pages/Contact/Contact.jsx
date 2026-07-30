import React from "react";
import PageHeader from "../../components/ui/PageHeader.jsx";
import ContactSection from "../../components/sections/ContactSection/ContactSection.jsx";
import WhatToExpect from "../../components/sections/WhatToExpect/WhatToExpect.jsx";

export default function Contact() {
  return (
    <>
      <PageHeader
        title="Let\u2019s Talk"
        description="Tell us what you're trying to automate \u2014 we'll handle the rest."
      />
      <ContactSection />
      <WhatToExpect />
    </>
  );
}
