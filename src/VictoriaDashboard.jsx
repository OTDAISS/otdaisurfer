import React, { useState, useEffect } from 'react';
import { 
  Terminal, ShieldAlert, Zap, 
  Activity, Star, Cpu, Rocket 
} from 'lucide-react';

const VictoriaDashboard = () => {
  const [pulseColor, setPulseColor] = useState('border-neon-aqua');
  
  // Rotating Neon Border Effect
  useEffect(() => {
    const colors = ['border-neon-aqua', 'border-neon-pink', 'border-neon-purple', 'border-neon-green', 'border-neon-blue'];
    let i = 0;
    const interval = setInterval(() => {
      setPulseColor(colors[i % colors.length]);
      i++;
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const stats = [
    { label: "Neural Links", value: "Active", color: "text-neon-green", icon: <Cpu size={16}/> },
    { label: "System Load", value: "24%", color: "text-neon-aqua", icon: <Activity size={16}/> },
    { label: "Lead Sniper", value: "Locked", color: "text-neon-pink", icon: <Rocket size={16}/> },
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white relative overflow-hidden font-sans selection:bg-neon-pink/30">
      
      {/* --- THE NEON SPARKLE LAYER --- */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff22_1px,transparent_1px)] [background-size:20px_20px] animate-pulse"></div>
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-neon-purple/20 blur-[120px] animate-blob"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-neon-blue/10 blur-[150px] animate-blob animation-delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-12 pb-24">
        
        {/* --- HEADER SECTION --- */}
        <header className="mb-12 border-l-4 border-neon-pink pl-6 py-2">
          <h1 className="text-6xl font-black italic tracking-tighter uppercase italic">
            Welcome <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-aqua via-neon-pink to-neon-purple animate-shimmer bg-[length:200%_auto]">Home</span>,
          </h1>
          <p className="text-3xl font-bold text-neon-green tracking-widest uppercase mt-[-10px] drop-shadow-[0_0_10px_rgba(57,255,20,0.5)]">
            Victoria
          </p>
        </header>

        {/* --- SYSTEM STATUS GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {stats.map((stat, idx) => (
            <div key={idx} className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-3xl group hover:border-neon-aqua transition-all duration-500">
              <div className="flex justify-between items-center mb-4">
                <div className={`p-2 rounded-lg bg-white/5 ${stat.color}`}>{stat.icon}</div>
                <Star size={12} className="text-white/20 group-hover:text-neon-pink animate-spin-slow" />
              </div>
              <p className
