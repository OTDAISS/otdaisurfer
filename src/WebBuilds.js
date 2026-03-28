import React from 'react';
import { Globe, Code2, Cpu, ExternalLink } from 'lucide-react';

const projects = [
  { name: "AI Surfer Dashboard", tech: "React / Vite / Tailwind", desc: "Real-time AI monitoring with pink & blue ocean aesthetics." },
  { name: "Ocean Tide API", tech: "FastAPI / PostgreSQL", desc: "Secure backend handling automated lead distribution." }
];

export default function WebBuilds() {
  return (
    <div className="min-h-screen bg-slate-950 text-white p-12">
      <h1 className="text-5xl font-black italic uppercase mb-4">Web Architecture</h1>
      <p className="text-cyan-500 font-mono text-xs mb-12 tracking-[0.3em]">// FULL-STACK BUILD PORTFOLIO</p>
      
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl">
        {projects.map((p, i) => (
          <div key={i} className="group bg-slate-900 border border-white/5 p-8 rounded-[2rem] hover:border-cyan-500/30 transition-all">
            <div className="flex justify-between items-start mb-6">
              <Code2 className="text-cyan-500" size={32} />
              <ExternalLink size={18} className="text-slate-600 group-hover:text-white transition-colors" />
            </div>
            <h2 className="text-2xl font-bold mb-2 uppercase italic">{p.name}</h2>
            <p className="text-slate-500 font-mono text-[10px] mb-4 uppercase">{p.tech}</p>
            <p className="text-slate-400 leading-relaxed text-sm">{p.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
