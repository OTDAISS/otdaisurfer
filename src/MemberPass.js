import React from 'react';
import { Key, ShieldCheck } from 'lucide-react';

const MemberPass = () => {
  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-6">
      <div className="bg-slate-900 border border-emerald-500/30 p-12 rounded-[3.5rem] max-w-md w-full text-center shadow-2xl">
        <div className="bg-emerald-500/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8">
          <Key size={32} className="text-emerald-400" />
        </div>
        <h1 className="text-3xl font-black uppercase italic text-white mb-2">Member Access</h1>
        <p className="text-slate-500 text-sm mb-8">Enter your credentials to access your custom AI dashboard and project analytics.</p>
        <input type="password" placeholder="Access Code" className="w-full bg-slate-950 border border-slate-800 p-5 rounded-2xl mb-4 font-mono text-emerald-400" />
        <button className="w-full bg-emerald-600 hover:bg-emerald-400 py-5 rounded-2xl font-black uppercase tracking-widest transition-all">Authenticate</button>
        <div className="mt-8 flex items-center justify-center gap-2 text-slate-600">
          <ShieldCheck size={14} />
          <span className="text-[10px] font-black uppercase tracking-widest">Secure Entry Point</span>
        </div>
      </div>
    </div>
  );
};

export default MemberPass;
