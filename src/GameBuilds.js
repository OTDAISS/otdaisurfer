import React from 'react';
import { Terminal, Cpu, Gamepad2 } from 'lucide-react';

const GameBuilds = () => {
  const builds = [
    { name: "Logic Engine", tech: "C++ / Python", desc: "Real-time AI decision trees." },
    { name: "State Manager", tech: "FastAPI / Redis", desc: "Low-latency multiplayer synchronization." }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white p-12">
      <h1 className="text-4xl font-black italic uppercase mb-12">System Build Portfolio</h1>
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
        {builds.map((b, i) => (
          <div key={i} className="bg-slate-900 p-10 rounded-[3rem] border border-slate-800 relative group overflow-hidden">
            <Gamepad2 className="text-emerald-500 mb-6 group-hover:rotate-12 transition-transform" />
            <h2 className="text-2xl font-bold italic mb-2">{b.name}</h2>
            <p className="text-slate-500 font-mono text-xs mb-6 tracking-tighter">{b.tech}</p>
            <p className="text-slate-400 text-sm leading-relaxed">{b.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GameBuilds;
