import React from "react";
import Hero from "../../components/sections/Hero/Hero.jsx";
import LogoMarquee from "../../components/sections/LogoMarquee/LogoMarquee.jsx";
import OurModel from "../../components/sections/OurModel/OurModel.jsx";
import FlagshipProduct from "../../components/sections/FlagshipProduct/FlagshipProduct.jsx";
import WhyUs from "../../components/sections/WhyUs/WhyUs.jsx";
import HowWeCreateValue from "../../components/sections/HowWeCreateValue/HowWeCreateValue.jsx";
import WhatWeBuild from "../../components/sections/WhatWeBuild/WhatWeBuild.jsx";
import CTA from "../../components/sections/CTA/CTA.jsx";

export default function Home() {
  return (
    <>
      <Hero />
      <LogoMarquee />
      <OurModel />
      <FlagshipProduct />
      <WhyUs />
      <HowWeCreateValue />
      <WhatWeBuild />
      <CTA />
    </>
  );
}
