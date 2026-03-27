import React from 'react';
import { Zap, Activity, Repeat } from 'lucide-react';

const Workflows = () => {
  const flows = [
    { title: "Lead Ingestion", phase: "Pre-Purchase", status: "Active", logic: "AI Chat -> Qualification -> Calendly" },
    { title: "Ticket Resolution", phase: "Service", status: "Optimizing", logic: "Routing -> Agent Copilot -> FAQ" },
    { title: "Retention Loop", phase: "Post-Resolution", status: "Deploying", logic: "Survey -> Churn Detection -> Upsell" }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white p-12">
      <h1 className="text-4xl font-black italic uppercase mb-12 text-emerald-400">Active Workflows</h1>
      <div className="space-y-6 max-w-4xl">
        {flows.map((flow, i) => (
          <div key={i} className="bg-slate-900/60 border-l-4 border-emerald-500 p-8 rounded-r-3xl flex justify-between items-center">
            <div>
              <div className="text-[10px] font-black text-emerald-500 uppercase tracking-widest mb-1">{flow.phase}</div>
              <h2 className="text-2xl font-bold italic">{flow.title}</h2>
              <p className="text-slate-500 font-mono text-xs mt-2">{flow.logic}</p>
            </div>
            <div className="flex items-center gap-2 bg-emerald-500/10 px-4 py-2 rounded-full border border-emerald-500/20">
              <Activity size={14} className="text-emerald-400" />
              <span className="text-[10px] font-black uppercase tracking-tighter text-emerald-400">{flow.status}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Workflows;
