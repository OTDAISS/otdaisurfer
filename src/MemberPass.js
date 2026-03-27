import React, { useState } from 'react';
import { Lock, Unlock, Zap, Download, ArrowLeft, BookOpen, terminal, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

const MemberPass = () => {
  const [accessCode, setAccessCode] = useState('');
  const [isUnlocked, setIsUnlocked] = useState(false);

  const handleVerify = () => {
    if (accessCode.toUpperCase() === 'SURF2024') {
      setIsUnlocked(true);
    } else {
      alert('Access Denied: Invalid Sequence');
    }
  };

  if (!isUnlocked) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4 text-white font-sans">
        <div className="max-w-md w-full bg-slate-900/50 border border-emerald-500/20 p-12 rounded-[3rem] text-center backdrop-blur-xl shadow-2xl">
          <Lock className="w-16 h-16 text-emerald-500 mx-auto mb-6 opacity-50" />
          <h2 className="text-3xl font-black mb-2 uppercase italic tracking-tighter">Vault Access</h2>
          <p className="text-slate-500 text-[10px] font-black tracking-[0.3em] uppercase mb-8">Authorized Personnel Only</p>
          <input 
            type="password" 
            value={accessCode} 
            onChange={(e) => setAccessCode(e.target.value)} 
            className="w-full bg-slate-950 border border-slate-800 rounded-2xl p-4 mb-4 outline-none text-white text-center font-mono tracking-widest focus:border-emerald-500/50 transition-colors" 
            placeholder="••••••••" 
          />
          <button onClick={handleVerify} className="w-full bg-emerald-600 hover:bg-emerald-500 py-4 rounded-2xl font-black transition-all shadow-lg shadow-emerald-500/20">INITIALIZE AUTH</button>
          <Link to="/" className="inline-block mt-8 text-slate-500 hover:text-white text-[10px] font-black uppercase tracking-widest no-underline">Return to Hub</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white p-6 md:p-12 font-sans">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <Link to="/" className="flex items-center gap-2 text-emerald-400 hover:text-white transition-colors no-underline font-black uppercase tracking-widest text-[10px]">
            <ArrowLeft size={14} /> Back to Hub
          </Link>
          <div className="flex items-center gap-2 bg-emerald-500/10 px-4 py-2 rounded-full border border-emerald-500/20">
            <Unlock size={14} className="text-emerald-400" />
            <span className="text-[10px] font-black uppercase tracking-widest text-emerald-400">Clearance: Level 1</span>
          </div>
        </div>

        <header className="mb-16 text-center md:text-left">
          <h1 className="text-5xl md:text-7xl font-black italic tracking-tighter text-white uppercase leading-none">The Member Vault</h1>
          <p className="text-slate-400 mt-4 text-lg font-medium">Proprietary assets for high-velocity builders.</p>
        </header>

        {/* Featured Tool */}
        <div className="bg-gradient-to-br from-emerald-600/20 to-slate-900 border border-emerald-500/30 p-8 md:p-12 rounded-[3rem] mb-12 relative overflow-hidden group">
          <Zap className="absolute -right-8 -top-8 text-emerald-500/10 w-64 h-64 group-hover:scale-110 transition-transform duration-700" />
          <div className="relative z-10 max-w-xl">
            <span className="bg-emerald-500 text-slate-950 text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-tighter mb-6 inline-block">Primary Asset</span>
            <h2 className="text-4xl font-black italic uppercase mb-4 tracking-tighter">Lead Scout Engine V1.0</h2>
            <p className="text-slate-300 mb-8 leading-relaxed">Our custom-built scraper for extracting high-intent leads from LinkedIn and niche directories. No API costs. Just pure data.</p>
            <button className="flex items-center gap-3 bg-white text-slate-950 px-8 py-4 rounded-2xl font-black hover:bg-emerald-400 transition-all shadow-xl uppercase italic tracking-tighter">
              <Download size={20} /> Download Engine
            </button>
          </div>
        </div>

        {/* Resource Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-slate-900/40 border border-slate-800 p-8 rounded-[2.5rem] hover:border-emerald-500/30 transition-all">
            <BookOpen className="text-emerald-400 mb-4" size={28} />
            <h3 className="font-black italic uppercase mb-2">The AI Blueprint</h3>
            <p className="text-slate-400 text-xs leading-relaxed mb-6">A step-by-step guide to setting up your first autonomous agent.</p>
            <button className="text-[10px] font-black uppercase text-emerald-400 tracking-widest border-b border-emerald-400/20 pb-1">View Guide</button>
          </div>

          <div className="bg-slate-900/40 border border-slate-800 p-8 rounded-[2.5rem] hover:border-emerald-500/30 transition-all">
            <FileText className="text-emerald-400 mb-4" size={28} />
            <h3 className="font-black italic uppercase mb-2">Sales Scripts</h3>
            <p className="text-slate-400 text-xs leading-relaxed mb-6">High-converting outreach templates for LinkedIn and Cold Email.</p>
            <button className="text-[10px] font-black uppercase text-emerald-400 tracking-widest border-b border-emerald-400/20 pb-1">Access Files</button>
          </div>

          <div className="bg-slate-900/40 border border-slate-800 p-8 rounded-[2.5rem] hover:border-emerald-500/30 transition-all">
            <Zap className="text-emerald-400 mb-4" size={28} />
            <h3 className="font-black italic uppercase mb-2">Zapier Templates</h3>
            <p className="text-slate-400 text-xs leading-relaxed mb-6">One-click automation flows for CRM and lead management.</p>
            <button className="text-[10px] font-black uppercase text-emerald-400 tracking-widest border-b border-emerald-400/20 pb-1">Import Flows</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberPass;
