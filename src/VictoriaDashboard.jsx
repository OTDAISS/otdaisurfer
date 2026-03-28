{isFirstVisit && (
  <div className="fixed inset-0 bg-black/90 backdrop-blur-xl z-50 flex items-center justify-center p-6">
    <div className="max-w-2xl bg-slate-900 border border-emerald-500/30 p-12 rounded-[4rem] shadow-[0_0_100px_rgba(16,185,129,0.1)]">
      <h2 className="text-4xl font-black italic uppercase mb-6 text-emerald-400">The Briefing</h2>
      <p className="text-slate-300 leading-relaxed italic mb-8">"Welcome to the Tide. We are building the architecture that runs entire businesses..."</p>
      <button 
        onClick={() => setFirstVisit(false)}
        className="w-full bg-emerald-500 py-4 rounded-2xl font-black uppercase text-black hover:bg-white transition-colors"
      >
        Acknowledge & Initialize
      </button>
    </div>
  </div>
)}
