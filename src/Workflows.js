import React from 'react';
import { Link } from 'react-router-dom';
import { GitBranch, Terminal, ShieldAlert } from 'lucide-react';

const Workflows = () => {
  return (
    <div className="min-h-screen bg-[#050505] text-white p-8">
      <div className="max-w-5xl mx-auto">
        <Link to="/" className="text-slate-500 hover:text-emerald-400 transition-colors uppercase tracking-widest text-xs font-bold">← Back to Hub</Link>
        
        <div className="mt-16 flex flex-col md:flex-row gap-12 items-start">
          <div className="flex-1">
            <h1 className="text-5xl md:text-7xl font-black italic tracking-tighter uppercase mb-8 leading-none">Strategic<br/><span className="text-emerald-500">Workflows</span></h1>
            <p className="text-slate-500 mb-8 border-l-2 border-emerald-500/30 pl-6 italic">Mapping the trajectory of AI-integrated systems for Ocean Tide Drop AI Solutions.</p>
            
            <div className="space-y-4">
              {['Data Synthesis', 'Neural Logic Mapping', 'Edge Deployment'].map((item, i) => (
                <div key={i} className="flex items-center gap-4 p-4 bg-white/5 rounded-lg border border-white/5">
                  <Terminal size={16} className="text-emerald-500" />
                  <span className="text-xs font-mono uppercase tracking-widest">{item}</span>
                  <div className="ml-auto h-[1px] flex-1 bg-emerald-500/20 mx-4" />
                  <span className="text-[10px] text-emerald-500 font-bold">ACTIVE</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Workflows;
