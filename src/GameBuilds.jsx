import React from 'react';
import { Terminal, Cpu, Gamepad2, ChevronRight } from 'lucide-react';

const builds = [
  { 
    name: "Logic Engine V4", 
    tech: "C++ / Python", 
    desc: "Real-time AI decision trees for non-linear agent behavior." 
  },
  { 
    name: "State Sync Manager", 
    tech: "FastAPI / Redis", 
    desc: "Low-latency synchronization for multi-agent environments." 
  }
];

export default function GameBuilds() {
  return (
    <div className="min-h-screen bg-slate-950 text-white p-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-black italic uppercase mb-2">System Build Portfolio</h1>
        <p className="text-emerald-500 font-mono text-[10px] uppercase mb-12 tracking-[0.3em]">// High-Performance Engines</p>
        
        <div className="grid md:grid-cols-2 gap-8">
          {builds.map((b, i) => (
            <div key={i} className="bg-slate-900 p-10 rounded-[3rem] border border-slate-800 relative group overflow-hidden transition-all hover:border-emerald-500/30">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-100 transition-opacity">
                <ChevronRight className="text-emerald-500" />
              </div>
              <Gamepad2 className="text-emerald-500 mb-6 group-hover:rotate-12 transition-transform" size={32} />
              <h2 className="text-2xl font-bold italic mb-2 uppercase">{b.name}</h2>
              <p className="text-slate-500 font-mono text-[10px] mb-6 tracking-tighter uppercase">{b.tech}</p>
              <p className="text-slate-400 text-sm leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
