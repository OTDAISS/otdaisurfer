import React, { useState } from 'react';
import { Lock, Unlock, Zap, Download } from 'lucide-react';

const MemberPass = () => {
  const [accessCode, setAccessCode] = useState('');
  const [isUnlocked, setIsUnlocked] = useState(false);

  const handleVerify = () => {
    if (accessCode === 'SURF2024') {
      setIsUnlocked(true);
    } else {
      alert('Invalid Access Code');
    }
  };

  if (!isUnlocked) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4 font-sans">
        <div className="max-w-md w-full bg-slate-800 border border-blue-500/30 p-8 rounded-xl text-center">
          <Lock className="w-12 h-12 text-blue-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-white mb-2">Member Pass Required</h2>
          <p className="text-slate-400 mb-6">Enter your access code to unlock the Lead Scout AI tools.</p>
          <input 
            type="password"
            value={accessCode}
            onChange={(e) => setAccessCode(e.target.value)}
            className="w-full bg-slate-900 border border-slate-700 rounded p-3 text-white mb-4 focus:border-blue-500 outline-none"
            placeholder="Enter Code..."
          />
          <button 
            onClick={handleVerify}
            className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 rounded transition-all"
          >
            Unlock Vault
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white p-8 font-sans">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <Unlock className="text-green-400" />
          <h1 className="text-3xl font-black uppercase tracking-tighter text-blue-400 italic">The Member Pass Vault</h1>
        </div>
        
        <div className="bg-slate-800 border border-blue-500/20 p-6 rounded-lg">
          <h3 className="text-xl font-bold flex items-center gap-2 mb-2">
            <Zap className="text-yellow-400" /> Lead Scout v1.0
          </h3>
          <p className="text-slate-400 mb-6">Your automated lead extraction tool is ready for download.</p>
          
          <a 
            href="#" 
            className="inline-flex items-center gap-2 bg-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-blue-500 transition-all text-white no-underline"
          >
            <Download size={20} /> Download Lead Scout
          </a>
        </div>
      </div>
    </div>
  );
};

export default MemberPass;