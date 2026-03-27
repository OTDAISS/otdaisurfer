import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import MemberPass from './MemberPass';
import Automations from './Automations';

function Home() {
  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4 font-sans text-white">
      <div className="max-w-4xl w-full bg-slate-900/50 border border-blue-500/20 p-12 rounded-3xl text-center backdrop-blur-md">
        <h1 className="text-7xl font-black italic tracking-tighter mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
          OTD AI SURFER
        </h1>
        <p className="text-blue-400/60 font-bold tracking-[0.2em] uppercase mb-12 text-sm">Digital Ecosystem</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-lg mx-auto">
          <Link to="/automations" className="bg-blue-600 hover:bg-blue-500 p-4 rounded-xl font-black transition-all transform hover:scale-105 no-underline text-white">
            AI AUTOMATIONS
          </Link>
          <Link to="/vault" className="bg-slate-800 hover:bg-slate-700 p-4 rounded-xl font-black transition-all transform hover:scale-105 no-underline text-white">
            MEMBER VAULT
          </Link>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/automations" element={<Automations />} />
        <Route path="/vault" element={<MemberPass />} />
      </Routes>
    </Router>
  );
}

export default App;