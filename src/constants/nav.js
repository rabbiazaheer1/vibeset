export const SERVICES_MENU = [
  {
    id: "agency",
    title: "VibeSet Agency",
    description: "Custom AI automation designed for your business.",
    to: "/services/agency",
  },
  {
    id: "consulting",
    title: "VibeSet Consulting",
    description: "Program-ready AI advisory for institutions and SMEs.",
    to: "/services/consulting",
  },
  {
    id: "ai-consulting",
    title: "AI Consulting",
    description: "Strategy-to-implementation guidance for AI adoption.",
    to: "/ai-consulting",
  },
];

export const LABS_MENU = [
  {
    id: "continuum",
    title: "Continuum",
    description: "Intelligent customer support that never sleeps.",
    to: "/labs/continuum",
  },
  {
    id: "lynxup",
    title: "LynxUp",
    description: "Marketing automation that drives qualified leads.",
    to: "/labs/lynxup",
  },
  {
    id: "dealjin",
    title: "DealJin",
    description: "AI-powered negotiation and deal optimization.",
    to: "/labs/dealjin",
  },
  {
    id: "autodeal",
    title: "AutoDeal",
    description: "Automated deal sourcing and qualification.",
    to: "/labs/autodeal",
  },
  {
    id: "leadhunt",
    title: "LeadHunt",
    description: "Intelligent lead generation and prospecting.",
    to: "/labs/leadhunt",
  },
];

export const NAV_LINKS = [
  { id: "home", label: "Home", to: "/" },
  { id: "services", label: "Services", to: "/services", menu: SERVICES_MENU },
  { id: "labs", label: "Labs", to: "/labs", menu: LABS_MENU },
  { id: "ai-consulting", label: "AI Consulting", to: "/ai-consulting" },
  { id: "about", label: "About", to: "/about" },
  { id: "contact", label: "Contact", to: "/contact" },
];
