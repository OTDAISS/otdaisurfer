import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Users2, Download, Star, ShieldCheck, Cpu, LayoutGrid, Lock, Home as HomeIcon, Activity, CheckSquare } from 'lucide-react';

// --- 1. THE TYPEWRITER ENGINE ---
const useTypewriter = (text, speed = 50) => {
  const [displayedText, setDisplayedText] = useState("");
  useEffect(() => {
    let i = 0;
    setDisplayedText("");
    const timer = setInterval(() => {
      if (i < text.length) {
        setDisplayedText((prev) => prev + text.charAt(i));
        i++;
      } else { clearInterval(timer); }
    }, speed);
    return () => clearInterval(timer);
  }, [text, speed]);
  return displayedText;
};

// --- 2. AUTOMATION SCORECARD COMPONENT ---
const AutomationScorecard = () => {
  const [selected, setSelected] = useState([]);
  const tasks = [
    { id: 1, label: "Manual Lead Data Entry", weight: 15 },
    { id: 2, label: "Daily Social Media Scheduling", weight: 10 },
    { id: 3, label: "Customer Support Ticket Sorting", weight: 25 },
    { id: 4, label: "Invoice Generation & Emailing", weight: 20 },
    { id: 5, label: "CRM Contact Enrichment", weight: 30 }
  ];

  const toggleTask = (id) => {
    setSelected(prev => prev.includes(id) ? prev.filter(t => t !== id) : [...prev, id]);
  };

  const humanOverhead = selected.reduce((acc, id) => {
    const task = tasks.find(t => t.id === id);
    return acc + (task ? task.weight : 0);
  }, 0);

  return (
    <div className="p-10 max-w-2xl mx-auto animate-in fade-in duration-700">
      <div className="flex items-center gap-3 mb-8 border-b border-emerald-500/20 pb-4">
        <Activity className="text-emerald-400" />
        <h2 className="text-2xl font-black uppercase italic text-white">System Diagnostic</h2>
      </div>

      <div className="space-y-3 mb-10">
        {tasks.map(task => (
          <div 
            key={task.id} 
            onClick={() => toggleTask(task.id)}
            className={`p-4 rounded-xl border transition-all cursor-pointer flex justify-between items-center ${
              selected.includes(task.id) 
              ? 'bg-emerald-500/10 border-emerald-500 text-white' 
              : 'bg-slate-900/40 border-slate-800 text-slate-500 hover:border-slate-700'
            }`}
          >
            <span className="font-mono text-[10px] uppercase tracking-widest">{task.label}</span>
            {selected.includes(task.id) ? <CheckSquare size={16} className="text-emerald-400" /> : <div className="w-4 h-4 border border-slate-700 rounded" />}
          </div>
        ))}
      </div>

      <div className="bg-black/60 p-8 rounded-3xl border border-slate-800 flex flex-col items-center text-center backdrop-blur-md">
        <div className="text-[10px] font-mono text-slate-500 uppercase tracking-[0.3em] mb-2">Human Overhead Score</div>
        <div className={`text-7xl font-black italic transition-colors duration-500 ${humanOverhead > 50 ? 'text-red-500' : 'text-emerald-500'}`}>
          {humanOverhead}%
        </div>
        <p className="text-slate-400 text-[10px] mt-4 font-mono leading-relaxed uppercase max-w-xs">
          {humanOverhead > 0 
            ? "Your ecosystem is leaking capital through manual logic. Deploy agents to recover." 
            : "Select manual tasks to begin infrastructure diagnosis."}
        </p>
      </div>
    </div>
  );
};

// --- 3. MARKETPLACE COMPONENT ---
const AgentMarketplace = () => {
  const agents = [
    { id: 'ag_01', name: "The Cold Closer", role: "Sales", desc: "B2B objection handling specialist.", tech: "GPT-4o" },
    { id: 'ag_02', name: "The Social Architect", role: "Content", desc: "Expert in 'Voice Mimicry' logic.", tech: "Claude 3.5" },
    { id: 'ag_03', name: "The System Auditor", role: "Ops", desc: "Scans workflows for leakage.", tech: "Custom RAG" }
  ];

  return (
    <div className="p-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 animate-in fade-in duration-700">
      {agents.map((agent) => (
        <div key={agent.id} className="bg-slate-900/40 border border-slate-800 p-6 rounded-3xl hover:border-emerald-500/40 transition-all">
          <Cpu size={20} className="text-emerald-500 mb-4" />
          <h3 className="text-xl font-bold italic text-white">{agent.name}</h3>
          <p className="text-slate-400 text-xs my-4">{agent.desc}</p>
          <div className="flex justify-between items-center pt-4 border-t border-slate-800/50">
            <span className="text-[9px] font-mono text-slate-600 uppercase">{agent.tech}</span>
            <button className="bg-emerald-600 text-black px-4 py-2 rounded-lg text-[10px] font-black uppercase">Deploy</button>
          </div>
        </div>
      ))}
    </div>
  );
};

// --- 4. HOME PAGE ---
const Home = () => {
  const text = useTypewriter("OTD_AI_SURFER // PROTOCOL_V2", 60);
  return <div className="p-20 font-mono text-cyan-400"><h1 className="text-5xl font-black italic">{text}</h1></div>;
};

// --- 5. SYSTEM DOCK ---
const SystemDock = () => {
  const location = useLocation();
  const navItems = [
    { path: '/', icon: <HomeIcon size={20} /> },
    { path: '/scorecard', icon: <Activity size={20} /> },
    { path: '/marketplace', icon: <LayoutGrid size={20} /> },
  ];

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
      <nav className="flex gap-2 bg-black/80 backdrop-blur-xl p-2 rounded-2xl border border-white/10 shadow-2xl">
        {navItems.map((item) => (
          <Link key={item.path} to={item.path} className={`p-4 rounded-xl transition-all ${location.pathname === item.path ? 'bg-emerald-500/20 text-emerald-400 scale-110' : 'text-slate-500 hover:text-white'}`}>
            {item.icon}
          </Link>
        ))}
      </nav>
    </div>
  );
};

// --- 6. MAIN APP ---
export default function App() {
  return (
    <Router>
      <div className="relative min-h-screen bg-[#020202] text-slate-200 overflow-hidden font-sans">
        <SystemDock />
        <main className="relative z-10 pt-10 pb-32">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/scorecard" element={<AutomationScorecard />} />
            <Route path="/marketplace" element={<AgentMarketplace />} />
          </Routes>
        </main>
        {/* CRT Scanline Effect */}
        <div className="pointer-events-none fixed inset-0 z-50 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.02),rgba(0,255,0,0.01),rgba(0,0,255,0.02))] bg-[length:100%_3px,3px_100%] opacity-40" />
      </div>
    </Router>
  );
}
