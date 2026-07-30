# VibeSet — Production React + Vite + Tailwind Site

## Stack
React 19, Vite, Tailwind CSS, React Router DOM v7, Framer Motion, Lucide React.

## Setup
```bash
npm install
npm run dev
```
Build: `npm run build` — Preview build: `npm run preview`

## Structure
- `src/components/layout` — Navbar (with mega menu + mobile menu), Footer
- `src/components/sections` — Hero, LogoMarquee, OurModel, FlagshipProduct, WhyUs,
  HowWeCreateValue, WhatWeBuild, CTA, LabsHero, LabsList
- `src/components/cards`, `src/components/buttons`, `src/components/ui` — shared UI
- `src/pages` — one folder per route (Home, Services, ServiceDetails, Labs,
  LabDetails, AIConsulting, About, Contact, NotFound)
- `src/routes/AppRoutes.jsx` — all route definitions
- `src/constants` — nav links, labs products, client logos (single source of truth)

## Routes
`/`, `/services`, `/services/:slug` (agency, consulting), `/labs`, `/labs/:slug`
(continuum, lynxup, dealjin, autodeal, leadhunt), `/ai-consulting`, `/about`,
`/contact`, `*` → 404.



Company client logos (Columbia Property Management, Phone Depot, Muskoka
Group, Sparkling, Majestic Perfumes, Jaff Technologies) are rendered as
styled text marks in `src/constants/clients.js` — drop real logo files into
`src/assets/images` and swap `alt` for `src` in that array to use the actual
artwork.
