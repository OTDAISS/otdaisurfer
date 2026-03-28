import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { 
  Users2, Download, Star, ShieldCheck, Cpu, LayoutGrid, Lock, 
  Home as HomeIcon, Activity, CheckSquare, Wand2, Copy, 
  CheckCircle, Terminal, Calendar, Clock, ChevronRight, Zap 
} from 'lucide-react';

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

// --- 2. THE BOOKING FORM (NEW) ---
const BookingForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', service: 'Strategy Audit', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center p-6 animate-in zoom-in duration-500">
        <div className="bg-slate-900 border border-emerald-500/30 p-12 rounded-[3.5rem] max-w-md w-full text-center shadow-[0_0_50px_rgba(16,185,129,0.1)]">
          <div className="bg-emerald-500/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8 animate-pulse">
            <CheckCircle size={40} className="text-emerald-400" />
          </div>
          <h1 className="text-3xl font-black uppercase italic text-white mb-4">Request Logged</h1>
          <p className="text-slate-400 text-sm mb-8 font-mono">
            DEPLOYMENT FOR <span className="text-emerald-400 underline">{formData.service}</span> INITIALIZED.
          </p>
          <button onClick={() => setSubmitted(false)} className="w-full bg-slate-800 hover:bg-slate-700 text-white py-4 rounded-2xl font-black uppercase tracking-widest transition-all">
            Return to Dashboard
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="p-8 md:p-16 flex items-center justify-center animate-in fade-in duration-700">
      <div className="max-w-4xl w-full grid md:grid-cols-5 bg-slate-900/40 border border-slate-800 rounded-[3.5rem] overflow-hidden shadow-2xl backdrop-blur-md">
        <div className="md:col-span-2 bg-emerald-600 p-12 flex flex-col justify-between">
          <div>
            <Zap size={40} className="text-black mb-8" />
            <h2 className="text-4xl font-black uppercase italic leading-none text-black mb-6">Secure <br /> Your <br /> Slot</h2>
            <p className="text-emerald-950 text-sm font-bold opacity-80">Enter the development pipeline. Our team handles the heavy lifting of AI integration.</p>
          </div>
          <div className="flex items-center gap-3 text-emerald-950">
            <ShieldCheck size={18} />
            <span className="text-[10px] font-black uppercase tracking-widest">Priority Access</span>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="md:col-span-3 p-12 space-y-6">
          <div className="space-y-4">
            <input required type="text" placeholder="FULL NAME" className="w-full bg-slate-950 border border-slate-800 p-5 rounded-2xl focus:border-emerald-500 outline-none font-mono text-sm text-emerald-400" onChange={(e) => setFormData({...formData, name: e.target.value})}/>
            <input required type="email" placeholder="EMAIL@HQ.COM" className="w-full bg-slate-950 border border-slate-800 p-5 rounded-2xl focus:border-emerald-500 outline-none font-mono text-sm text-emerald-400" onChange={(e) => setFormData({...formData, email: e.target.value})}/>
            <select className="w-full bg-slate-950 border border-slate-800 p-5 rounded-2xl focus:border-emerald-500 outline-none font-mono text-sm text-emerald-400 appearance-none" onChange={(e) => setFormData({...formData, service: e.target.value})}>
              <option>Strategy Audit</option>
              <option>Voice Agent Deployment</option>
              <option>Workflow Automation</option>
            </select>
          </div>
          <button type="submit" className="group w-full bg-emerald-500 hover:bg-emerald-400 text-black py-6 rounded-2xl font-black uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-3">
            Initialize <ChevronRight size={18} />
          </button>
        </form>
      </div>
    </div>
  );
};

// --- 3. PAGE COMPONENTS ---
const Home = () => {
  const text = useTypewriter("OTD_SYSTEMS_LIVE // SELECT_PROTOCOL", 60);
  return <div className="p-20 font-mono text-cyan-400"><h1 className="text-5xl font-black italic">{text}</h1></div>;
};

// (Include PromptForge, AutomationScorecard, and AgentMarketplace here...)

// --- 4. SYSTEM DOCK ---
const SystemDock = () => {
  const location = useLocation();
  const navItems = [
    { path: '/', icon: <HomeIcon size={20} /> },
    { path: '/book', icon: <Calendar size={20} /> },
    { path: '/marketplace', icon: <LayoutGrid size={20} /> },
    { path: '/forge', icon: <Wand2 size={20} /> },
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

// --- 5. MAIN ASSEMBLY ---
export default function App() {
  return (
    <Router>
      <div className="relative min-h-screen bg-[#020202] text-slate-200 overflow-hidden font-sans">
        <SystemDock />
        <main className="relative z-10 pt-10 pb-32">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/book" element={<BookingForm />} />
            {/* Add other routes here */}
          </Routes>
        </main>
        <div className="pointer-events-none fixed inset-0 z-50 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.02),rgba(0,255,0,0.01),rgba(0,0,255,0.02))] bg-[length:100%_3px,3px_100%] opacity-40" />
      </div>
    </Router>
  );
}
