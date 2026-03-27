import React from 'react';
import './index.css';

function App() {
  return (
    <div className="min-h-screen bg-[#020617] text-white flex flex-col items-center justify-center p-10">
      {/* LOGO TEST */}
      <div className="w-32 h-32 mb-8 border-2 border-cyan-400 rounded-2xl p-4 shadow-[0_0_20px_rgba(34,211,238,0.5)]">
        <img src="1000016457.png" alt="Logo" className="w-full h-full object-contain" />
      </div>

      {/* TEXT TEST */}
      <h1 className="text-5xl font-black italic tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-500">
        AI SURFER IS LIVE
      </h1>
      
      <p className="mt-4 text-slate-400 italic text-xl text-center">
        If you can see this, the connection is fixed, Florida doll.
      </p>

      {/* NEON BUTTON TEST */}
      <button className="mt-10 px-8 py-3 bg-pink-500 rounded-full font-bold shadow-[0_0_20px_rgba(236,72,153,0.6)] border border-white/20">
        System Operational
      </button>
    </div>
  );
}

export default App;
