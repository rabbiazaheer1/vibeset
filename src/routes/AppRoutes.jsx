import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home.jsx";
import Services from "../pages/Services/Services.jsx";
import ServiceDetails from "../pages/ServiceDetails/ServiceDetails.jsx";
import AIVoiceReceptionist from "../pages/AIVoiceReceptionist/AIVoiceReceptionist.jsx";
import Labs from "../pages/Labs/Labs.jsx";
import LabDetails from "../pages/LabDetails/LabDetails.jsx";
import DealJin from "../pages/DealJin/DealJin.jsx";
import AIConsulting from "../pages/AIConsulting/AIConsulting.jsx";
import About from "../pages/About/About.jsx";
import Contact from "../pages/Contact/Contact.jsx";
import NotFound from "../pages/NotFound/NotFound.jsx";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/services/ai-voice-receptionist" element={<AIVoiceReceptionist />} />
      <Route path="/services/:slug" element={<ServiceDetails />} />
      <Route path="/labs" element={<Labs />} />
      <Route path="/labs/dealjin" element={<DealJin />} />
      <Route path="/labs/:slug" element={<LabDetails />} />
      <Route path="/ai-consulting" element={<AIConsulting />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/404" element={<NotFound />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
