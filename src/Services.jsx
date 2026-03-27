import React from 'react';

const services = [
  {
    phase: "Phase 1: Pre-Purchase Flow",
    headline: "Attract & Qualify Leads",
    description: "Convert website visitors into qualified leads with 24/7 automation[cite: 24, 26].",
    features: [
      "AI-Powered Lead Capture [cite: 25]",
      "Automated Scheduling (Lindy.ai/Calendly) [cite: 27]",
      "Persona Analysis & Targeted Outreach [cite: 29, 30]"
    ]
  },
  {
    phase: "Phase 2: Resolution Flow",
    headline: "Service Delivery & Speed",
    description: "Manage client needs with AI-driven accuracy and consistency[cite: 31].",
    features: [
      "Intelligent Ticket Routing [cite: 32]",
      "AI-Assisted Agent Copilots [cite: 34]",
      "AI-Enhanced Knowledge Base [cite: 38]"
    ]
  },
  {
    phase: "Phase 3: Post-Resolution Flow",
    headline: "Retention & Upsell",
    description: "Turn resolved interactions into lasting revenue opportunities[cite: 39].",
    features: [
      "Automated Follow-Ups & Surveys [cite: 40]",
      "Proactive Issue Detection [cite: 42]",
      "AI-Driven Upsell & Cross-Sell [cite: 44]"
    ]
  }
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-black text-white py-20 px-6">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h1 className="text-5xl font-extrabold text-teal-400 drop-shadow-[0_0_15px_rgba(45,212,191,0.6)] mb-6">
          Our Service Phases
        </h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          End-to-end AI automation designed for modern customer journeys[cite: 2].
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {services.map((s, i) => (
          <div key={i} className="bg-gray-900/40 border border-teal-900/50 p-8 rounded-2xl hover:border-teal-400 transition-all group">
            <span className="text-teal-500 font-mono text-sm uppercase tracking-widest">{s.phase}</span>
            <h2 className="text-2xl font-bold mt-2 mb-4 group-hover:text-teal-300 transition-colors">{s.headline}</h2>
            <p className="text-gray-400 mb-6">{s.description}</p>
            <ul className="space-y-3">
              {s.features.map((f, j) => (
                <li key={j} className="flex items-center text-sm text-gray-300">
                  <span className="text-teal-400 mr-2">✦</span> {f}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
