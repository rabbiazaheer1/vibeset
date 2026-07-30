import React from "react";
import { Home } from "lucide-react";
import Button from "../../components/buttons/Button.jsx";
import FlowingWaves from "../../components/ui/FlowingWaves.jsx";

export default function NotFound() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-ink-950 px-6 text-center">
      <FlowingWaves tone="cool" className="opacity-50" />
      <div className="relative z-10">
        <p className="font-display-fallback text-[96px] leading-none text-white/10">404</p>
        <h1 className="mt-4 font-display-fallback text-[32px] sm:text-[40px]">
          This page went missing
        </h1>
        <p className="mx-auto mt-4 max-w-md text-[16px] leading-relaxed text-white/60">
          The page you are looking for does not exist or has moved.
        </p>
        <div className="mt-9 flex justify-center">
          <Button as="link" to="/" variant="primary" icon={Home}>
            Back to Home
          </Button>
        </div>
      </div>
    </section>
  );
}
