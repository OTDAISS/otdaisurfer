import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const services = [
  {
    phase: "01",
    name: "AI Strategy Audit",
    category: "Entry Point",
    price: "$500",
    priceNote: "One-time — credited toward any project",
    description:
      "We analyze your current operations, identify your top 3–5 automation opportunities, and deliver a prioritized roadmap with ROI projections for each. The fastest way to know exactly where AI will move the needle in your business.",
    deliverables: ["Full business process review", "Automation opportunity map", "ROI projections per opportunity", "Prioritized action plan"],
    timeline: "2 weeks",
    badge: "Best First Step",
  },
  {
    phase: "02",
    name: "AI Voice Agent Setup",
    category: "Implementation",
    price: "From $2,500",
    priceNote: "+ $500/month retainer",
    description:
      "A fully custom AI voice agent built on Vapi or Retell that qualifies leads, answers questions, books appointments, and handles calls 24/7. Integrated directly with your CRM and built to sound like your business.",
    deliverables: ["Custom agent build & configuration", "CRM integration", "Call flow scripting", "30-day optimization period"],
    timeline: "1–2 weeks to deploy",
    badge: "High Demand",
  },
  {
    phase: "03",
    name: "AI Workflow Automation",
    category: "Implementation",
    price: "From $1,500",
    priceNote: "Per workflow — retainers available",
    description:
      "We build the automations that eliminate your most repetitive, expensive manual tasks. Lead routing, follow-up sequences, reporting, onboarding — anything that runs on a trigger can be automated.",
    deliverables: ["Workflow design & build", "Zapier / Make.com setup", "Testing & QA", "Documentation & handoff"],
    timeline: "1–3 weeks",
    badge: "Fast ROI",
  },
  {
    phase: "04",
    name: "Reputation Guardian",
    category: "Monthly Retainer",
    price: "From $750/mo",
    priceNote: "Monthly retainer",
    description:
      "We monitor, manage, and respond to your Google and Yelp reviews using AI, run monthly SEO audits, and keep your online presence working for you — not against you. Essential for any local business.",
    deliverables: ["Review monitoring & AI responses", "Monthly SEO audit", "Competitor tracking", "Monthly report"],
    timeline: "Ongoing",
    badge: "Recurring Revenue",
  },
  {
    phase: "05",
    name: "Content Flywheel",
    category: "Monthly Retainer",
    price: "From $1,000/mo",
    priceNote: "Monthly retainer",
    description:
      "You record one raw video per week. We turn it into 20–30 pieces of platform-optimized content across LinkedIn, Instagram, TikTok, and more. Consistent presence without the constant grind.",
    deliverables: ["Weekly content repurposing", "5 platforms covered", "Captions, hooks & hashtags", "Scheduling & posting"],
    timeline: "Ongoing",
    badge: "Done For You",
  },
  {
    phase: "06",
    name: "Managed AI Employee",
    category: "Premium Retainer",
    price: "From $2,000/mo",
    priceNote: "Monthly retainer",
    description:
      "A fully managed AI agent — trained on your business, your voice, your workflows — that handles a defined function end to end. Lead qualification, customer support, internal ops. Your first AI hire.",
    deliverables: ["Custom agent training", "Knowledge base setup", "CRM & tool integrations", "Monthly updates & tuning"],
    timeline: "Ongoing",
    badge: "Premium",
  },
];

export default function Services() {
  const [active, setActive] = useState(null);

  return (
    <div className="min-h-screen bg-black text-white px-6 py-24">

      {/* Header */}
      <div className="max-w-3xl mx-auto text-center mb-20">
        <p className="text-teal-500 font-mono text-xs uppercase tracking-widest mb-4">
          Services & Pricing
        </p>
        <h1 className="text-5xl font-bold text-white mb-6 leading-tight">
          Real Work.{" "}
          <span className="text-teal-400 drop-shadow-[0_0_20px_rgba(45,212,191,0.5)]">
            Real Prices.
          </span>
        </h1>
        <p className="text-gray-400 text-lg leading-relaxed">
          No vague quotes. No surprise invoices. Every service below has a clear
          scope, a clear price, and a clear outcome.
        </p>
      </div>

      {/* Service Cards */}
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6 mb-24">
        {services.map((svc, index) => (
          <div
            key={index}
            onClick={() => setActive(active === index ? null : index)}
            className={`relative p-8 rounded-2xl border cursor-pointer transition-all duration-300 ${
              active === index
                ? "border-teal-400 bg-teal-950/20 shadow-[0_0_30px_rgba(45,212,191,0.1)]"
                : "border-teal-900/50 bg-gray-900/30 hover:border-teal-700/60"
            }`}
          >
            {/* Phase number watermark */}
            <span className="text-6xl font-bold text-teal-900/30 absolute top-4 right-6 select-none">
              {svc.phase}
            </span>

            <div className="flex items-start justify-between mb-1">
              <p className="text-teal-500 font-mono text-xs uppercase tracking-widest">
                {svc.category}
              </p>
              <span className="px-2 py-0.5 rounded-full text-xs font-mono bg-teal-500/10 text-teal-400 border border-teal-500/20">
                {svc.badge}
              </span>
            </div>

            <h3 className="text-xl font-bold text-white mb-1">{svc.name}</h3>
            <div className="flex items-baseline gap-2 mb-4">
              <span className="text-teal-400 font-bold text-lg">{svc.price}</span>
              <span className="text-gray-500 text-xs">{svc.priceNote}</span>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              {svc.description}
            </p>

            {/* Expandable deliverables */}
            <div
              className={`overflow-hidden transition-all duration-300 ${
                active === index ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="pt-4 border-t border-teal-900/40 mb-4">
                <p className="text-teal-500 font-mono text-xs uppercase tracking-widest mb-3">
                  What's included
                </p>
                <ul className="space-y-2">
                  {svc.deliverables.map((d, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-300 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-teal-400 flex-shrink-0" />
                      {d}
                    </li>
                  ))}
                </ul>
                <p className="text-gray-500 text-xs mt-4 font-mono">
                  Timeline: {svc.timeline}
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between mt-2">
              <NavLink
                to="/contact"
                onClick={(e) => e.stopPropagation()}
                className="text-teal-400 text-sm font-semibold hover:text-teal-300 transition-colors"
              >
                Get Started →
              </NavLink>
              <span className="text-teal-700 text-xs">
                {active === index ? "▲ Less" : "▼ What's included"}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="max-w-2xl mx-auto text-center">
        <div className="p-10 rounded-2xl border border-teal-900/50 bg-gray-900/30">
          <h3 className="text-2xl font-bold text-white mb-3">
            Not sure where to start?
          </h3>
          <p className="text-gray-400 mb-8">
            Book a free 30-minute call. We'll tell you which service will move
            the needle fastest for your specific business.
          </p>
          <NavLink
            to="/contact"
            className="inline-block px-8 py-3 rounded-full bg-teal-400 text-black font-bold hover:bg-teal-300 transition-all duration-200"
          >
            Book a Free Call
          </NavLink>
        </div>
      </div>
    </div>
  );
}
