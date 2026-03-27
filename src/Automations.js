import React from 'react';
import { Link } from 'react-router-dom';
import { Bot, FastForward, Repeat, Zap } from 'lucide-react';

const Automations = () => {
  const tasks = [
    { name: "Lead Generation", status: "Automated", speed: "High" },
    { name: "Client Onboarding", status: "Standardized", speed: "Instant" },
    { name: "Data Syncing", status: "Real-time", speed: "Varies" }
  ];

  return (
    <div className="min-h-screen bg-black text-white p-8 font-sans">
      <div className="max-w-5xl mx-auto">
        <Link to="/" className="text-slate-600 hover:text-orange-400 transition-colors uppercase tracking-[0.3em] text-[10px] font-black">← Hub Access</Link>
        
        <header className="mt-20 mb-16">
          <h1 className="text-6xl md:text-8xl font-black italic tracking-tighter uppercase mb-2 text-white">
            AI <span className="text-orange-500">Automations</span>
          </h1>
          <p className="text-slate-500 text-lg font-light tracking-wide italic">Eliminating friction from the digital lifecycle.</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-20">
          {tasks.map((task, i) => (
            <div key={i} className="p-8 bg-[#080808] border border-white/5 rounded-xl hover:border-orange-500/20 transition-all group">
              <Bot className="text-orange-500/40 group-hover:text-orange-500 mb-6 transition-colors" />
              <h3 className="text-sm font-bold uppercase tracking-widest mb-4">{task.name}</h3>
              <div className="flex justify-between items-center text-[10px] font-mono">
                <span className="text-slate-600 uppercase">Status</span>
                <span className="text-orange-500">{task.status}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="p-10 bg-orange-500/5 border-dashed border border-orange-500/20 rounded-3xl flex flex-col md:flex-row items-center gap-8">
          <div className="p-4 bg-orange-500/10 rounded-full animate-pulse">
            <Zap className="text-orange-500" size={32} />
          </div>
          <div>
            <h4 className="text-xl font-bold uppercase italic italic">Drop Service Logic</h4>
            <p className="text-slate-500 text-sm max-w-md">Our internal protocols are built to handle high-volume service delivery with 0% manual intervention.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Automations;
