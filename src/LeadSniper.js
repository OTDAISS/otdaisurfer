import React, { useState } from 'react';
import { Target, Download, Terminal, ArrowLeft, Search, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const LeadSniper = () => {
  const [isScanning, setIsScanning] = useState(false);
  const [results, setResults] = useState([]);
  const [query, setQuery] = useState('');

  const startScan = () => {
    if (!query) return alert("Please enter a target niche");
    setIsScanning(true);
    setResults([]);
    
    // Simulate high-velocity scraping logic
    setTimeout(() => {
      setResults([
        { name: "James Holden", role: "CEO", company: "Rocinante Logistics", email: "j.holden@rocicorp.com" },
        { name: "Naomi Nagata", role: "CTO", company: "Belt Tech", email: "nagata@belt.io" },
        { name: "Chrisjen A.", role: "Founder", company: "Terraform Group", email: "ca@terraform.com" },
        { name: "Amos Burton", role: "Ops Manager", company: "Baltimore Iron", email: "amos@b-iron.com" }
      ]);
      setIsScanning(false);
    }, 2500);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white p-6 md:p-12 font-sans">
      <div className="max-w-4xl mx-auto">
        <Link to="/vault" className="flex items-center gap-2 text-emerald-400 mb-8 hover:text-white transition-colors no-underline font-black uppercase tracking-widest text-[10px]">
          <ArrowLeft size={14} /> Back to Vault
        </Link>

        <div className="bg-slate-900/40 border border-emerald-500/20 rounded-[3rem] p-8 md:p-12 shadow-2xl relative overflow-hidden">
          <div className="relative z-10">
            <header className="mb-10">
              <h1 className="text-4xl md:text-5xl font-black italic uppercase tracking-tighter mb-2">Lead Sniper <span className="text-emerald-500">V1.0</span></h1>
              <p className="text-slate-400 font-medium italic">High-Velocity LinkedIn Enrichment Engine</p>
            </header>

            <div className="flex flex-col md:flex-row gap-4 mb-12">
              <div className="relative flex-grow">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
                <input 
                  type="text" 
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Target Niche (e.g. Solar Company Owners)" 
                  className="w-full bg-slate-950 border border-slate-800 p-5 pl-12 rounded-2xl outline-none focus:border-emerald-500/50 transition-all font-mono text-sm"
                />
              </div>
              <button 
                onClick={startScan}
                disabled={isScanning}
                className="bg-emerald-600 hover:bg-emerald-400 px-8 py-5 rounded-2xl font-black italic uppercase tracking-widest transition-all flex items-center justify-center gap-2 disabled:opacity-50 shadow-xl shadow-emerald-600/20"
              >
                {isScanning ? <Terminal className="animate-spin" /> : <Target size={20} />}
                {isScanning ? "Engaging..." : "Start Sniper"}
              </button>
            </div>

            {results.length > 0 && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="flex justify-between items-center mb-6 border-b border-slate-800 pb-4">
                  <h3 className="text-xs font-black text-emerald-400 uppercase tracking-widest flex items-center gap-2">
                    <CheckCircle size={14}/> Verified Extractions
                  </h3>
                  <button className="text-[10px] bg-slate-800 hover:bg-slate-700 px-4 py-2 rounded-xl flex items-center gap-2 transition-colors font-black uppercase tracking-widest">
                    <Download size={14} /> Export CSV
                  </button>
                </div>
                <div className="space-y-3">
                  {results.map((lead, i) => (
                    <div key={i} className="bg-slate-950/50 p-5 rounded-2xl border border-slate-800 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 group hover:border-emerald-500/30 transition-colors">
                      <div>
                        <div className="font-bold text-lg italic tracking-tight">{lead.name}</div>
                        <div className="text-[10px] text-slate-500 uppercase font-black tracking-widest">{lead.role} // {lead.company}</div>
                      </div>
                      <div className="text-emerald-400 font-mono text-sm bg-emerald-500/5 px-4 py-2 rounded-lg border border-emerald-500/10">
                        {lead.email}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadSniper;
