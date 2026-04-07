import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../assets/logo.png";

export default function SystemDock() {
  const [toolsOpen, setToolsOpen] = useState(false);
  const [memberOpen, setMemberOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const linkBase =
    "block py-2 px-3 transition hover:text-teal-400 link-glow";

  const activeLink =
    "text-teal-400 font-semibold drop-shadow-[0_0_8px_rgba(45,212,191,0.8)]";

  return (
    <nav className="w-full bg-black/40 backdrop-blur-md border-b border-teal-500/20 px-6 py-4 fixed top-0 left-0 z-50 shadow-lg">

      {/* Top Row: Logo + Hamburger */}
      <div className="flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="Ocean Tide Drop Logo"
            className="h-10 drop-shadow-[0_0_12px_rgba(45,212,191,0.8)]"
          />
          <span className="text-teal-400 font-bold text-xl tracking-wide">
            Ocean Tide Drop
          </span>
        </Link>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-teal-300 text-3xl"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          ☰
        </button>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-8 mt-4 text-lg">

        <NavLink
          to="/about"
          className={({ isActive }) =>
            `${linkBase} ${isActive ? activeLink : ""}`
          }
        >
          About
        </NavLink>

        <NavLink
          to="/services"
          className={({ isActive }) =>
            `${linkBase} ${isActive ? activeLink : ""}`
          }
        >
          Services
        </NavLink>

        <NavLink
          to="/pricing"
          className={({ isActive }) =>
            `${linkBase} ${isActive ? activeLink : ""}`
          }
        >
          Pricing
        </NavLink>

        <NavLink
          to="/strategy"
          className={({ isActive }) =>
            `${linkBase} ${isActive ? activeLink : ""}`
          }
        >
          Strategy
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `${linkBase} ${isActive ? activeLink : ""}`
          }
        >
          Contact
        </NavLink>

        {/* Member Dropdown */}
        <div className="relative">
          <button
            onClick={() => setMemberOpen(!memberOpen)}
            className="hover:text-teal-400 transition link-glow"
          >
            Member ▾
          </button>

          <div
            className={`absolute right-0 mt-2 bg-black/80 border border-teal-500/20 rounded-lg shadow-xl p-3 w-48 transition-all duration-300 origin-top ${
              memberOpen ? "scale-100 opacity-100" : "scale-95 opacity-0 pointer-events-none"
            }`}
          >
            <NavLink
              to="/member/pass"
              className={({ isActive }) =>
                `${linkBase} ${isActive ? activeLink : ""}`
              }
            >
              Member Pass
            </NavLink>

            <NavLink
              to="/member/portal"
              className={({ isActive }) =>
                `${linkBase} ${isActive ? activeLink : ""}`
              }
            >
              Member Portal
            </NavLink>

            <NavLink
              to="/member/services"
              className={({ isActive }) =>
                `${linkBase} ${isActive ? activeLink : ""}`
              }
            >
              Member Services
            </NavLink>
          </div>
        </div>

        {/* Tools Dropdown */}
        <div className="relative">
          <button
            onClick={() => setToolsOpen(!toolsOpen)}
            className="hover:text-teal-400 transition link-glow"
          >
            Tools ▾
          </button>

          <div
            className={`absolute right-0 mt-2 bg-black/80 border border-teal-500/20 rounded-lg shadow-xl p-3 w-64 max-h-96 overflow-y-auto transition-all duration-300 origin-top ${
              toolsOpen ? "scale-100 opacity-100" : "scale-95 opacity-0 pointer-events-none"
            }`}
          >
            <NavLink to="/tools/agent-marketplace" className={linkBase}>Agent Marketplace</NavLink>
            <NavLink to="/tools/automation-scorecard" className={linkBase}>Automation Scorecard</NavLink>
            <NavLink to="/tools/automations" className={linkBase}>Automations</NavLink>
            <NavLink to="/tools/blueprint-library" className={linkBase}>Blueprint Library</NavLink>
            <NavLink to="/tools/booking-form" className={linkBase}>Booking Form</NavLink>
            <NavLink to="/tools/compliance-sentinel" className={linkBase}>Compliance Sentinel</NavLink>
            <NavLink to="/tools/game-builds" className={linkBase}>Game Builds</NavLink>
            <NavLink to="/tools/lead-sniper" className={linkBase}>Lead Sniper</NavLink>
            <NavLink to="/tools/market-insights" className={linkBase}>Market Insights</NavLink>
            <NavLink to="/tools/production-sync" className={linkBase}>Production Sync</NavLink>
            <NavLink to="/tools/roi-calculator" className={linkBase}>ROI Calculator</NavLink>
            <NavLink to="/tools/secure-cta" className={linkBase}>Secure CTA</NavLink>
            <NavLink to="/tools/token-arbitrage" className={linkBase}>Token Arbitrage</NavLink>
            <NavLink to="/tools/vault" className={linkBase}>Vault</NavLink>
            <NavLink to="/tools/victoria-dashboard" className={linkBase}>Victoria Dashboard</NavLink>
            <NavLink to="/tools/violent-interface" className={linkBase}>Violent Interface</NavLink>
            <NavLink to="/tools/web-builds" className={linkBase}>Web Builds</NavLink>
            <NavLink to="/tools/workflows" className={linkBase}>Workflows</NavLink>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden mt-4 bg-black/60 border border-teal-500/20 rounded-lg p-4 space-y-3">

          <NavLink to="/about" className={linkBase}>About</NavLink>
          <NavLink to="/services" className={linkBase}>Services</NavLink>
          <NavLink to="/pricing" className={linkBase}>Pricing</NavLink>
          <NavLink to="/strategy" className={linkBase}>Strategy</NavLink>
          <NavLink to="/contact" className={linkBase}>Contact</NavLink>

          <hr className="border-teal-500/20" />

          <div>
            <p className="text-teal-300 font-semibold mb-2">Member</p>
            <NavLink to="/member/pass" className={linkBase}>Member Pass</NavLink>
            <NavLink to="/member/portal" className={linkBase}>Member Portal</NavLink>
            <NavLink to="/member/services" className={linkBase}>Member Services</NavLink>
          </div>

          <hr className="border-teal-500/20" />

          <div>
            <p className="text-teal-300 font-semibold mb-2">Tools</p>
            <NavLink to="/tools/agent-marketplace" className={linkBase}>Agent Marketplace</NavLink>
            <NavLink to="/tools/automation-scorecard" className={linkBase}>Automation Scorecard</NavLink>
            <NavLink to="/tools/automations" className={linkBase}>Automations</NavLink>
            <NavLink to="/tools/blueprint-library" className={linkBase}>Blueprint Library</NavLink>
            <NavLink to="/tools/booking-form" className={linkBase}>Booking Form</NavLink>
            <NavLink to="/tools/compliance-sentinel" className={linkBase}>Compliance Sentinel</NavLink>
            <NavLink to="/tools/game-builds" className={linkBase}>Game Builds</NavLink>
            <NavLink to="/tools/lead-sniper" className={linkBase}>Lead Sniper</NavLink>
            <NavLink to="/tools/market-insights" className={linkBase}>Market Insights</NavLink>
            <NavLink to="/tools/production-sync" className={linkBase}>Production Sync</NavLink>
            <NavLink to="/tools/roi-calculator" className={linkBase}>ROI Calculator</NavLink>
            <NavLink to="/tools/secure-cta" className={linkBase}>Secure CTA</NavLink>
            <NavLink to="/tools/token-arbitrage" className={linkBase}>Token Arbitrage</NavLink>
            <NavLink to="/tools/vault" className={linkBase}>Vault</NavLink>
            <NavLink to="/tools/victoria-dashboard" className={linkBase}>Victoria Dashboard</NavLink>
            <NavLink to="/tools/violent-interface" className={linkBase}>Violent Interface</NavLink>
            <NavLink to="/tools/web-builds" className={linkBase}>Web Builds</NavLink>
            <NavLink to="/tools/workflows" className={linkBase}>Workflows</NavLink>
          </div>
        </div>
      )}
    </nav>
  );
}
