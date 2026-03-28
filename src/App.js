import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';

// --- THE TYPEWRITER ENGINE (The logic that makes text type) ---
const useTypewriter = (text, speed = 50) => {
  const [displayedText, setDisplayedText] = useState("");
  useEffect(() => {
    let i = 0;
    setDisplayedText("");
    const timer = setInterval(() => {
      if (i < text.length) {
        setDisplayedText((prev) => prev + text.charAt(i));
        i++;
      } else { clearInterval(timer); }
    }, speed);
    return () => clearInterval(timer);
  }, [text, speed]);
  return displayedText;
};

// --- THE PAGES ---
const Home = () => {
  const title = useTypewriter("WELCOME TO OTD_OS", 80);
  return (
    <div className="p-20 font-mono text-cyan-500">
      <h1 className="text-4xl font-black">{title}<span className="animate-pulse">_</span></h1>
      <p className="mt-4 opacity-50">System status: Online. No threats detected.</p>
    </div>
  );
};

const Vault = () => {
  const status = useTypewriter("DECRYPTING SECURE SECTOR...", 50);
  return (
    <div className="p-20 font-mono text-red-500">
      <h1 className="text-2xl">{status}</h1>
      <div className="mt-8 p-4 border border-red-500/20 bg-red-500/5 rounded">
        ERROR: Access Denied. Authorization Required.
      </div>
    </div>
  );
};

// --- THE NAVIGATION DOCK ---
const SystemDock = () => {
  const location = useLocation();
  const navItems = [
    { name: 'Home', path: '/', icon: '⌂' },
    { name: 'Vault', path: '/vault', icon: '🔒' },
  ];

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
      <nav className="flex gap-4 bg-black/50 backdrop-blur-md p-2 rounded-2xl border border-white/10 shadow-2xl">
        {navItems.map((item) => (
          <Link 
            key={item.path} 
            to={item.path} 
            className={`p-4 rounded-xl transition-all ${location.pathname === item.path ? 'bg-cyan-500/20 text-cyan-400' : 'text-gray-500'}`}
          >
            {item.icon}
          </Link>
        ))}
      </nav>
    </div>
  );
};

// --- THE MAIN APP ASSEMBLY ---
export default function App() {
  return (
    <Router>
      <div className="relative min-h-screen bg-black text-white selection:bg-cyan-500/30">
        <SystemDock />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/vault" element={<Vault />} />
          </Routes>
        </main>

        {/* CRT Overlay Effect */}
        <div className="pointer-events-none fixed inset-0 z-[60] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.03),rgba(0,255,0,0.01),rgba(0,0,255,0.03))] bg-[length:100%_3px,3px_100%] opacity-50" />
      </div>
    </Router>
  );
}
