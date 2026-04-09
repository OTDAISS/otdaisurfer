import React, { useState } from "react";
import { Calculator, ArrowRight, Percent } from "lucide-react";

export default function ROICalculator() {
  const [investment, setInvestment] = useState("");
  const [revenue, setRevenue] = useState("");
  const [roi, setRoi] = useState(null);

  const calculateROI = () => {
    const inv = parseFloat(investment);
    const rev = parseFloat(revenue);

    if (!inv || !rev || inv <= 0) {
      setRoi("Invalid input");
      return;
    }

    const result = ((rev - inv) / inv) * 100;
    setRoi(result.toFixed(2));
  };

  return (
    <div className="min-h-screen w-full bg-black text-white px-6 py-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-cyan-300 drop-shadow-lg">
          ROI Calculator
        </h1>

        <p className="text-gray-300 mb-10">
          Estimate your return on investment for automation systems, AI
          services, and blueprint deployments inside the Ocean Tide Drop
          ecosystem.
        </p>

        <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-xl shadow-lg">
          <div className="flex flex-col gap-6">
            <div>
              <label className="block text-gray-300 mb-2">Investment Cost ($)</label>
              <input
                type="number"
                value={investment}
                onChange={(e) => setInvestment(e.target.value)}
                className="w-full px-4 py-2 rounded-lg bg-black/40 border border-white/20 text-white focus:border-cyan-400 outline-none"
              />
            </div>

            <div>
              <label className="block text-gray-300 mb-2">Revenue Generated ($)</label>
              <input
                type="number"
                value={revenue}
                onChange={(e) => setRevenue(e.target.value)}
                className="w-full px-4 py-2 rounded-lg bg-black/40 border border-white/20 text-white focus:border-cyan-400 outline-none"
              />
            </div>

            <button
              onClick={calculateROI}
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-cyan-500/20 border border-cyan-400 text-cyan-300 hover:bg-cyan-500/30 transition-all"
            >
              <Calculator className="w-5 h-5" />
              Calculate ROI
            </button>

            {roi !== null && (
              <div className="mt-6 text-center">
                <div className="text-3xl font-bold text-cyan-300 flex items-center justify-center gap-2">
                  <Percent className="w-6 h-6" />
                  {roi === "Invalid input" ? roi : `${roi}% ROI`}
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="mt-10 flex items-center gap-2 text-cyan-300">
          <ArrowRight className="w-5 h-5" />
          <span className="text-sm opacity-80">
            Ocean Tide Drop — Performance Projection Module
          </span>
        </div>
      </div>
    </div>
  );
}
