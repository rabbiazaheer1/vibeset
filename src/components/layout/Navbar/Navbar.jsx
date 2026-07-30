import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import Logo from "./Logo.jsx";
import MegaMenu from "./MegaMenu.jsx";
import Button from "../../buttons/Button.jsx";
import { NAV_LINKS } from "../../../constants/nav.js";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeTimer = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") {
        setOpenMenu(null);
        setMobileOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const handleEnter = (id) => {
    clearTimeout(closeTimer.current);
    setOpenMenu(id);
  };

  const handleLeave = () => {
    closeTimer.current = setTimeout(() => setOpenMenu(null), 120);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="container-page">
        <nav
          className={`mt-4 flex items-center justify-between gap-6 rounded-pill bg-sand-100 px-4 py-3 pl-6 transition-shadow duration-300 sm:pl-7 ${
            scrolled ? "shadow-[0_10px_40px_rgba(0,0,0,0.35)]" : "shadow-[0_6px_24px_rgba(0,0,0,0.18)]"
          }`}
        >
          <Logo />

          <ul className="hidden items-center gap-1 lg:flex">
            {NAV_LINKS.map((link) => (
              <li
                key={link.id}
                className="relative"
                onMouseEnter={() => link.menu && handleEnter(link.id)}
                onMouseLeave={() => link.menu && handleLeave()}
              >
                {link.menu ? (
                  <button
                    className="flex items-center gap-1 rounded-full px-4 py-2.5 text-[15px] font-medium text-ink-800/80 transition-colors hover:text-ink-950"
                    aria-haspopup="true"
                    aria-expanded={openMenu === link.id}
                    onFocus={() => handleEnter(link.id)}
                    onClick={() =>
                      setOpenMenu(openMenu === link.id ? null : link.id)
                    }
                  >
                    {link.label}
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-200 ${
                        openMenu === link.id ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                ) : (
                  <NavLink
                    to={link.to}
                    end={link.to === "/"}
                    className={({ isActive }) =>
                      `block rounded-full px-4 py-2.5 text-[15px] font-medium transition-colors ${
                        isActive
                          ? "text-ink-950"
                          : "text-ink-800/80 hover:text-ink-950"
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                )}
                {link.menu && (
                  <MegaMenu
                    items={link.menu}
                    isOpen={openMenu === link.id}
                    onItemClick={() => setOpenMenu(null)}
                  />
                )}
              </li>
            ))}
          </ul>

          <div className="hidden lg:block">
            <Button as="link" to="/contact" variant="primary" className="px-5 py-3 text-[14px]">
              Book a Call
            </Button>
          </div>

          <button
            className="flex h-10 w-10 items-center justify-center rounded-full text-ink-950 lg:hidden"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>

        {mobileOpen && (
          <div className="mt-2 rounded-3xl bg-sand-100 p-4 shadow-2xl lg:hidden">
            <ul className="flex flex-col divide-y divide-ink-950/10">
              {NAV_LINKS.map((link) => (
                <li key={link.id} className="py-1">
                  <Link
                    to={link.to}
                    onClick={() => setMobileOpen(false)}
                    className="block px-3 py-3 text-[16px] font-semibold text-ink-950"
                  >
                    {link.label}
                  </Link>
                  {link.menu && (
                    <ul className="mb-2 flex flex-col gap-1 px-3">
                      {link.menu.map((item) => (
                        <li key={item.id}>
                          <Link
                            to={item.to}
                            onClick={() => setMobileOpen(false)}
                            className="block rounded-lg px-3 py-2 text-[14px] text-ink-800/70"
                          >
                            {item.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
            <div className="mt-3 px-3">
              <Button
                as="link"
                to="/contact"
                variant="primary"
                className="w-full"
                onClick={() => setMobileOpen(false)}
              >
                Book a Call
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
