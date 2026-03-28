import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Home, Zap, Shield, BarChart3, Settings, Menu, X } from 'lucide-react';

// Import your new Power Pages
import SOPBuilder from './pages/SOPBuilder';
import TokenArbitrage from './pages/TokenArbitrage';
import FuelGauge from './components/FuelGauge';

// Placeholder for your AI Surfer Dashboard (The Vault)
const Dashboard = () => (
  <div className="p-8 bg-slate-950 min-h-screen text-white">
    <h1 className="text-4xl font-black italic text-cyan-400 mb-8 uppercase tracking-tighter">
      AI Surfer // The Vault
    </h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="col-span-1 lg:col-span-1">
        <FuelGauge />
      </div>
      <div className="bg-slate-900 border border-slate-800 p-6 rounded-3xl flex flex-col justify-between">
        <div>
          <h2 className="text-xl font-bold text-pink-500 mb-2 uppercase italic">Operations</h2>
          <p className="text-slate-400 text-sm mb-4">Architect your system workflows and AI Agent protocols.</p>
        </div>
        <Link to="/sop-builder" className="bg-slate-800 hover:bg-slate-700 text-cyan-400 text-center py-3 rounded-xl font-bold uppercase text-xs tracking-widest transition-all">
          Open SOP Builder
        </Link>
      </div>
      <div className="bg-slate-900 border border-slate-800 p-6 rounded-3xl flex flex-col justify-between">
        <div>
          <h2 className="text-xl font-bold text-cyan-400 mb-2 uppercase italic">Market Intel</h2>
          <p className="text-slate-400 text-sm mb-4">Live arbitrage data for LLM token pricing and latency.</p>
        </div>
        <Link to="/arbitrage" className="bg-slate-800 hover:bg-slate-700 text-pink-500 text-center py-3 rounded-xl font-bold uppercase text-xs tracking-widest transition-all">
          Open Terminal 01
        </Link>
      </div>
    </div>
  </div>
);

function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-slate-950 font-sans">
        {/* Navigation Bar */}
        <nav className="border-b border-slate-800 bg-slate-950/80 backdrop-blur-md sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-pink-500 rounded-lg shadow-[0_0_15px_rgba(6,182,212,0.5)]" />
                <span className="text-white font-black italic tracking-tighter text-xl uppercase">Ocean Tide Drop</span>
              </div>
              
              {/* Desktop Menu */}
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <Link to="/" className="text-slate-300 hover:text-cyan-400 px-3 py-2 text-xs font-bold uppercase tracking-widest transition-all">Dashboard</Link>
                  <Link to="/sop-builder" className="text-slate-300 hover:text-pink-500 px-3 py-2 text-xs font-bold uppercase tracking-widest transition-all">SOPs</Link>
                  <Link to="/arbitrage" className="text-slate-300 hover:text-cyan-400 px-3 py-2 text-xs font-bold uppercase tracking-widest transition-all">Arbitrage</Link>
                </div>
              </div>

              {/* Mobile Menu Button */}
              <div className="md:hidden">
                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-400 hover:text-white">
                  {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Menu Drawer */}
          {isMenuOpen && (
            <div className="md:hidden bg-slate-900 border-b border-slate-800 p-4 space-y-2">
              <Link to="/" onClick={() => setIsMenuOpen(false)} className="block text-slate-300 px-3 py-2 text-sm font-bold uppercase italic">Dashboard</Link>
              <Link to="/sop-builder" onClick={() => setIsMenuOpen(false)} className="block text-slate-300 px-3 py-2 text-sm font-bold uppercase italic">SOP Builder</Link>
              <Link to="/arbitrage" onClick={() => setIsMenuOpen(false)} className="block text-slate-300 px-3 py-2 text-sm font-bold uppercase italic">Arbitrage</Link>
            </div>
          )}
        </nav>

        {/* Main Route Engine */}
        <main>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/sop-builder" element={<SOPBuilder />} />
            <Route path="/arbitrage" element={<TokenArbitrage />} />
          </Routes>
        </main>

        {/* Global Footer */}
        <footer className="py-10 border-t border-slate-900 bg-slate-950 text-center">
          <p className="text-[10px] text-slate-600 font-bold uppercase tracking-[0.5em]">
            © 2026 Ocean Tide Drop // AI Surfer Survivor // Systems by Florida Doll
          </p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
