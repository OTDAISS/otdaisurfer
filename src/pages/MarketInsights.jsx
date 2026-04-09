import React from "react";
import {
  TrendingUp,
  DollarSign,
  Rocket,
  ArrowRight,
  Zap,
} from "lucide-react";

export default function MarketInsights() {
  const insights = [
    {
      icon: <TrendingUp className="w-8 h-8 text-cyan-400" />,
      title: "High‑Demand AI Services",
      desc: "Identify the most profitable AI services members can deploy immediately.",
    },
    {
      icon: <DollarSign className="w-8 h-8 text-green-400" />,
      title: "Revenue Models",
      desc: "Explore monetization frameworks that scale with minimal overhead.",
    },
    {
      icon: <Rocket className="w-8 h-8 text-purple-400" />,
      title: "Launch‑Ready Playbooks",
      desc: "Step‑by‑step execution plans for rapid deployment and client acquisition.",
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-400" />,
      title: "Automation Wins",
      desc: "Leverage automation to reduce workload and increase recurring income.",
    },
  ];

  return (
    <div className="min-h-screen w-full bg-black text-white px-6 py-16">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-cyan-300 drop-shadow-lg">
          Market Insights
        </h1>
        <p className="text-lg text-gray-300 mb-12 max-w-3xl">
          A monetization directory for members to identify and implement
          high‑profit AI services. Updated continuously as the realm expands.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {insights.map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-cyan-400/40 transition-all duration-300 shadow-lg hover:shadow-cyan-400/20"
            >
              <div className="mb-4">{item.icon}</div>
              <h2 className="text-2xl font-semibold mb-2">{item.title}</h2>
              <p className="text-gray-300">{item.desc}</p>
              <div className="mt-4 flex items-center text-cyan-300 hover:text-cyan-200 transition">
                <ArrowRight className="w-5 h-5 mr-1" />
                <span className="text-sm">Explore</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
