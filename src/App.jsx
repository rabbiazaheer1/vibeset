import React from "react";
import Navbar from "./components/layout/Navbar/Navbar.jsx";
import Footer from "./components/layout/Footer/Footer.jsx";
import AppRoutes from "./routes/AppRoutes.jsx";
import useScrollToTop from "./hooks/useScrollToTop.js";

export default function App() {
  useScrollToTop();

  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden bg-ink-950">
      <Navbar />
      <main className="flex-1">
        <AppRoutes />
      </main>
      <Footer />
    </div>
  );
}
