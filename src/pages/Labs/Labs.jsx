import React from "react";
import LabsHero from "../../components/sections/LabsHero/LabsHero.jsx";
import LabsList from "../../components/sections/LabsList/LabsList.jsx";
import CTA from "../../components/sections/CTA/CTA.jsx";

export default function Labs() {
  return (
    <>
      <LabsHero />
      <LabsList />
      <CTA />
    </>
  );
}
