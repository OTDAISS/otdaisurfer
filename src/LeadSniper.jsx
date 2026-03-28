import React, { useState } from 'react';
import { Target, ArrowLeft, Search, CheckCircle, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const LeadSniper = () => {
  const [isScanning, setIsScanning] = useState(false);
  const [results, setResults] = useState([]);
  const [query, setQuery] = useState('');

  const startScan = () => {
    if (!query) return alert("Please enter a target niche");
    setIsScanning(true);
    setResults([]);
    
    // Simulate the AI "Hunting" phase
    setTimeout(() => {
      setResults([
        { name: "James Holden", role: "CEO", company: "Rocinante Logistics", email: "j.holden@rocicorp.com" },
        { name: "Naomi Nagata", role: "CTO", company: "Belt Tech", email: "nagata@belt.io" },
        { name: "Chrisjen A.", role: "Founder", company: "Terraform Group", email: "ca@terraform.com" }
      ]);
      setIsScanning(false);
    }, 2500);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white p-6 md:p-12 font-sans">
      <div className="max-w-4xl mx-auto">
        {/* Navigation back to the Vault hub */}
        <Link to="/vault" className="flex items-center gap-2 text-emerald-400 mb-8 hover:text-white transition-colors no-underline font-black uppercase tracking-widest text-[10px]">
          <ArrowLeft size={14} /> Back to Vault
        </Link>

        <div className="bg-slate-900/40 border border-emerald-500/20 rounded-[3rem] p-8 md:p-12 shadow-2xl relative overflow-hidden">
          <header className="mb-12">
            <h1 className="text-4xl font-black italic uppercase tracking-tighter mb-2">Lead Sniper V1.0</h1>
            <p className="text-slate-500 font-mono text-[10px] uppercase tracking-[0.4em]">// OSINT EXTRACTION ENGINE</p>
          </header>

          {/* Search Interface */}
          <div className="flex flex-col md:flex-row gap-4 mb-12">
            <div className="relative flex-grow">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
              <input 
                type="text" 
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Enter Target Niche (e.g. 'Logistics CEOs')..." 
                className="w-full bg-slate-950 border border-slate-800 p-5 pl-14 rounded-2xl outline-none focus:border-emerald-500/50 transition-all font-mono text-sm text-white"
              />
            </div>
            <button 
              onClick={startScan} 
              disabled={isScanning}
              className="bg-emerald-600 hover:bg-emerald-400 px-10 py-5 rounded-2xl font-black uppercase tracking-widest transition-all disabled:opacity-50 disabled:cursor-not-allowed text-black"
            >
              {isScanning ? "Scanning..." : "Start Sniper"}
            </button>
          </div>

          {/* Results Display */}
          <div className="space-y-4">
            {isScanning && (
              <div className="flex items-center justify-center p-20">
                <div className="w-12 h-12 border-4 border-emerald-500/20 border-t-emerald-500 rounded-full animate-spin" />
              </div>
            )}

            {results.length > 0 && !isScanning && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
                <div className="text-[10px] text-emerald-500 font-black uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
                  <CheckCircle size={12} /> Extraction Complete: 3 Targets Found
                </div>
                {results.map((lead, i) => (
                  <div key={i} className="bg-slate-950/50 p-6 rounded-2xl border border-slate-800 mb-3 flex justify-between items-center group hover:border-emerald-500/30 transition-all">
                    <div>
                      <div className="font-bold text-xl italic tracking-tight text-white group-hover:text-emerald-400 transition-colors">{lead.name}</div>
                      <div className="text-[10px] text-slate-500 uppercase font-black tracking-widest mt-1">{lead.role} // {lead.company}</div>
                    </div>
                    <div className="text-emerald-500 font-mono text-xs bg-emerald-500/5 px-4 py-2 rounded-lg border border-emerald-500/10">
                      {lead.email}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {!isScanning && results.length === 0 && (
            <div className="border border-dashed border-slate-800 rounded-3xl p-20 text-center">
              <Shield className="mx-auto text-slate-800 mb-4" size={48} />
              <p className="text-slate-600 font-mono text-xs uppercase tracking-widest text-balance">System Idle. Awaiting Target Parameters.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LeadSniper;
