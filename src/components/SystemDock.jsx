import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const links = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact" },
];

const linkClass = ({ isActive }) =>
  `text-base transition-all duration-200 ${
    isActive
      ? "text-teal-400 drop-shadow-[0_0_8px_rgba(45,212,191,0.8)]"
      : "text-gray-400 hover:text-teal-300"
  }`;

export default function SystemDock() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-black/60 backdrop-blur-xl border-b border-teal-900/40 fixed top-0 left-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-3">
          <img
            src="/logo.png"
            alt="Ocean Tide Drop Logo"
            className="w-10 h-10 drop-shadow-[0_0_10px_rgba(45,212,191,0.6)]"
          />
          <span className="text-teal-400 font-bold text-xl tracking-wide">
            Ocean Tide Drop
          </span>
        </NavLink>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map(({ to, label }) => (
            <NavLink key={to} to={to} className={linkClass} end={to === "/"}>
              {label}
            </NavLink>
          ))}
          <NavLink
            to="/contact"
            className="ml-4 px-5 py-2 rounded-full border border-teal-400 text-teal-400 text-sm font-semibold tracking-wide hover:bg-teal-400 hover:text-black transition-all duration-200"
          >
            Enter the Realm
          </NavLink>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-teal-400 transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-teal-400 transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-teal-400 transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-xl border-t border-teal-900/40 px-6 py-6 flex flex-col gap-5">
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={linkClass}
              end={to === "/"}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </NavLink>
          ))}
          <NavLink
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className="mt-2 px-5 py-2 rounded-full border border-teal-400 text-teal-400 text-sm font-semibold text-center hover:bg-teal-400 hover:text-black transition-all duration-200"
          >
            Enter the Realm
          </NavLink>
        </div>
      )}
    </nav>
  );
}
