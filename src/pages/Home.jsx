import React from "react";
import { NavLink } from "react-router-dom";

const stats = [
  { value: "85%", label: "Reduction in phone handling costs" },
  { value: "40%", label: "Overhead cut via AI automation" },
  { value: "24/7", label: "Lead qualification, zero humans" },
];

const services = [
  {
    name: "AI Strategy Audit",
    price: "From $500",
    description: "We map your business, find the leaks, and hand you a prioritized automation roadmap.",
    cta: "Start Here",
  },
  {
    name: "AI Voice Agent Setup",
    price: "From $2,500",
    description: "A custom voice agent that qualifies leads and handles calls around the clock.",
    cta: "Get a Quote",
  },
  {
    name: "Reputation Guardian",
    price: "From $750/mo",
    description: "AI-powered review management and SEO audits that protect and grow your brand.",
    cta: "Learn More",
  },
  {
    name: "Content Flywheel",
    price: "From $1,000/mo",
    description: "One video becomes 30 pieces of content. We build the engine, you stay consistent.",
    cta: "Learn More",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">

      {/* Hero */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-950/30 to-black pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <p className="text-teal-500 font-mono text-sm uppercase tracking-widest mb-6">
            AI Automation Agency — Charlotte, NC
          </p>
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-8">
            Your Business,{" "}
            <span className="text-teal-400 drop-shadow-[0_0_30px_rgba(45,212,191,0.5)]">
              Running on AI
            </span>
          </h1>
          <p className="text-gray-400 text-xl leading-relaxed max-w-2xl mx-auto mb-12">
            We build AI systems that handle your calls, automate your workflows,
            manage your reputation, and generate your content — so you can focus
            on what only you can do.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <NavLink
              to="/contact"
              className="px-8 py-4 rounded-full bg-teal-400 text-black font-bold text-lg hover:bg-teal-300 transition-all duration-200"
            >
              Book a Free Strategy Call
            </NavLink>
            <NavLink
              to="/services"
              className="px-8 py-4 rounded-full border border-teal-400/50 text-teal-400 font-semibold text-lg hover:border-teal-400 hover:bg-teal-400/10 transition-all duration-200"
            >
              See Our Services
            </NavLink>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-teal-900/40 bg-black/60 py-16 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          {stats.map((s, i) => (
            <div key={i}>
              <p className="text-5xl font-bold text-teal-400 mb-2">{s.value}</p>
              <p className="text-gray-400 text-sm uppercase tracking-wide font-mono">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-teal-500 font-mono text-xs uppercase tracking-widest mb-3">
              What We Do
            </p>
            <h2 className="text-4xl font-bold text-white mb-4">
              Built to Generate Revenue
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Every service we offer is engineered to either save you money, make
              you money, or both.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((svc, i) => (
              <div
                key={i}
                className="p-8 rounded-2xl border border-teal-900/50 bg-gray-900/30 hover:border-teal-500/40 hover:bg-gray-900/50 transition-all duration-200 group"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-white">{svc.name}</h3>
                  <span className="text-teal-400 font-mono text-sm font-bold whitespace-nowrap ml-4">
                    {svc.price}
                  </span>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {svc.description}
                </p>
                <NavLink
                  to="/contact"
                  className="text-teal-400 text-sm font-semibold hover:text-teal-300 transition-colors"
                >
                  {svc.cta} →
                </NavLink>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <NavLink
              to="/services"
              className="inline-block px-8 py-3 rounded-full border border-teal-400 text-teal-400 font-semibold hover:bg-teal-400 hover:text-black transition-all duration-200"
            >
              View All Services & Pricing
            </NavLink>
          </div>
        </div>
      </section>

      {/* Entry Offer */}
      <section className="py-24 px-6 bg-teal-950/20 border-y border-teal-900/30">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-teal-500 font-mono text-xs uppercase tracking-widest mb-4">
            Low Risk. High Value.
          </p>
          <h2 className="text-4xl font-bold text-white mb-6">
            Start with a $500 AI Strategy Audit
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed mb-10">
            In 2 weeks we'll analyze your business, identify the 3–5 highest-impact
            automation opportunities, and hand you a clear ROI roadmap — whether you
            hire us or not.
          </p>
          <NavLink
            to="/contact"
            className="inline-block px-10 py-4 rounded-full bg-teal-400 text-black font-bold text-lg hover:bg-teal-300 transition-all duration-200"
          >
            Book Your Audit — $500
          </NavLink>
          <p className="text-gray-600 text-sm mt-4">
            Applied as a credit toward any implementation project.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to stop doing it manually?
          </h2>
          <p className="text-gray-400 text-lg mb-10">
            Book a free 30-minute call. We'll tell you exactly what we'd automate
            first and what it would cost.
          </p>
          <NavLink
            to="/contact"
            className="inline-block px-10 py-4 rounded-full border border-teal-400 text-teal-400 font-bold text-lg hover:bg-teal-400 hover:text-black transition-all duration-200"
          >
            Book a Free Call
          </NavLink>
        </div>
      </section>
    </div>
  );
}
