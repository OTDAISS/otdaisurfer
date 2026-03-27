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
        <Link to="/vault" className="flex items-center gap-2 text-emerald-400 mb-8 hover:text-white transition-colors no-underline font-black uppercase tracking-widest text-[10px]">
          <ArrowLeft size={14} /> Back to Vault
        </Link>
        <div className="bg-slate-900/40 border border-emerald-500/20 rounded-[3rem] p-8 md:p-12 shadow-2xl relative overflow-hidden">
          <h1 className="text-4xl font-black italic uppercase tracking-tighter mb-2 text-center md:text-left">Lead Sniper V1.0</h1>
          <div className="flex flex-col md:flex-row gap-4 mb-12 mt-8">
            <input 
              type="text" 
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Target Niche..." 
              className="flex-grow bg-slate-950 border border-slate-800 p-5 rounded-2xl outline-none focus:border-emerald-500/50 transition-all font-mono text-sm"
            />
            <button onClick={startScan} disabled={isScanning} className="bg-emerald-600 hover:bg-emerald-400 px-8 py-5 rounded-2xl font-black uppercase tracking-widest transition-all disabled:opacity-50">
              {isScanning ? "Scanning..." : "Start Sniper"}
            </button>
          </div>
          {results.length > 0 && (
            <div className="space-y-3">
              {results.map((lead, i) => (
                <div key={i} className="bg-slate-950/50 p-5 rounded-2xl border border-slate-800 flex justify-between items-center group hover:border-emerald-500/30 transition-colors">
                  <div>
                    <div className="font-bold text-lg italic tracking-tight">{lead.name}</div>
                    <div className="text-[10px] text-slate-500 uppercase font-black tracking-widest">{lead.role} // {lead.company}</div>
                  </div>
                  <div className="text-emerald-400 font-mono text-xs">{lead.email}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LeadSniper;
