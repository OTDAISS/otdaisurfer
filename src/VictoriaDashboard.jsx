import React from 'react';
import { 
  UserCircle, Calendar, Rocket, 
  CheckSquare, Coffee, MessageSquare 
} from 'lucide-react';

const VictoriaDashboard = () => {
  const tasks = [
    { id: 1, task: "Review Phase 1 Lead Ingestion", priority: "High" },
    { id: 2, task: "Client Onboarding: Rocinante Logistics", priority: "Medium" },
    { id: 3, task: "System Health Audit (Automations Matrix)", priority: "Low" }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white p-8 md:p-16">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 text-emerald-400 mb-2">
              <Rocket size={20} />
              <span className="font-mono text-[10px] uppercase tracking-[0.4em]">Operational Status: Active</span>
            </div>
            <h1 className="text-6xl font-black italic uppercase tracking-tighter">Welcome, Victoria.</h1>
            <p className="text-slate-500 mt-2 uppercase tracking-widest text-xs font-bold">Co-Founder // Ocean Tide Drop AI</p>
          </div>
          <div className="bg-slate-900 border border-white/5 p-6 rounded-3xl flex items-center gap-4 shadow-2xl">
            <div className="text-right">
              <p className="text-[10px] text-slate-500 uppercase font-black">Arrival Date</p>
              <p className="text-emerald-400 font-mono font-bold">APRIL 14, 2026</p>
            </div>
            <Calendar className="text-slate-700" size={32} />
          </div>
        </header>

        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Action Items Column */}
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-2xl font-black italic uppercase flex items-center gap-3">
              <CheckSquare className="text-emerald-500" /> Immediate Objectives
            </h2>
            <div className="grid gap-4">
              {tasks.map((t) => (
                <div key={t.id} className="bg-slate-900/50 border border-slate-800 p-6 rounded-2xl flex justify-between items-center group hover:border-emerald-500/30 transition-all">
                  <div className="flex items-center gap-4">
                    <div className={`w-2 h-2 rounded-full ${t.priority === 'High' ? 'bg-red-500 animate-pulse' : 'bg-slate-700'}`} />
                    <span className="font-bold text-lg text-slate-200 group-hover:text-white">{t.task}</span>
                  </div>
                  <span className="text-[10px] font-mono text-slate-500 uppercase border border-slate-800 px-3 py-1 rounded-full italic">{t.priority}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Stats / Sidebar */}
          <div className="space-y-8">
            <div className="bg-emerald-600 p-8 rounded-[3rem] text-black shadow-[0_20px_50px_rgba(16,185,129,0.2)]">
              <Coffee className="mb-4" size={32} />
              <h3 className="text-2xl font-black italic uppercase leading-none mb-2">System Ready</h3>
              <p className="text-sm font-bold opacity-80 leading-relaxed uppercase italic">Your workstation is configured and the AI Surfer Survivor sectors are unlocked.</p>
            </div>

            <div className="bg-slate-900/80 border border-white/5 p-8 rounded-[2.5rem]">
              <h3 className="text-xs font-black uppercase tracking-widest text-slate-500 mb-6 italic">Direct Comms</h3>
              <div className="flex items-center gap-4 p-4 bg-slate-950 rounded-2xl border border-slate-800">
                <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center text-emerald-400 font-black italic">F</div>
                <div>
                  <p className="text-[10px] text-slate-500 uppercase font-black">Founder</p>
                  <p className="text-sm font-bold">Florida doll</p>
                </div>
                <MessageSquare size={16} className="ml-auto text-slate-700" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default VictoriaDashboard;
