import React from 'react';
import { Gamepad2, Monitor, Cpu, ArrowLeft, Trophy } from 'lucide-react';
import { Link } from 'react-router-dom';

const GameBuilds = () => {
  const games = [
    { 
      title: "Brand Mini-Games", 
      desc: "Custom-coded browser games designed to explode engagement and capture high-intent leads.", 
      price: "$3,500+" 
    },
    { 
      title: "AI Training Sims", 
      desc: "Immersive environments for employee onboarding or high-stakes sales simulation.", 
      price: "$7,000+" 
    },
    { 
      title: "Arcade Marketing", 
      desc: "Fast-paced, high-velocity 2D web games optimized for mobile social campaigns.", 
      price: "$2,500+" 
    },
    { 
      title: "3D Product Visuals", 
      desc: "Interactive WebGL models that let customers 'play' with your product before buying.", 
      price: "$1,500+" 
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white p-6 md:p-12 font-sans">
      <div className="max-w-5xl mx-auto">
        <Link to="/" className="flex items-center gap-2 text-orange-400 mb-12 hover:text-white transition-colors no-underline font-bold uppercase tracking-widest text-xs">
          <ArrowLeft size={16} /> Back to Hub
        </Link>

        <div className="mb-16">
          <h1 className="text-5xl md:text-7xl font-black italic tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500 uppercase leading-none">
            Game & Sim Builds
          </h1>
          <p className="text-slate-400 mt-6 text-lg md:text-xl max-w-2xl font-medium">
            We turn users into players. Gamified experiences that drive 5x more retention than static pages.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {games.map((g, i) => (
            <div key={i} className="bg-slate-900/40 border border-orange-500/10 p-10 rounded-[2.5rem] hover:bg-slate-900/60 transition-all group border-b-4 border-b-orange-600/30">
              <Gamepad2 className="text-orange-400 mb-4 group-hover:rotate-12 transition-transform" size={32} />
              <h3 className="text-2xl font-black mb-4 uppercase italic tracking-tight">{g.title}</h3>
              <p className="text-slate-400 text-sm mb-8 leading-relaxed font-medium">{g.desc}</p>
              <div className="text-2xl font-black text-orange-400 italic tracking-tighter">{g.price}</div>
            </div>
          ))}
        </div>

        <div className="mt-20 p-10 bg-orange-600/5 border border-orange-500/20 rounded-[3rem] flex items-center gap-6">
          <Trophy className="text-orange-400 hidden md:block" size={48} />
          <p className="text-slate-300 italic text-lg leading-relaxed">
            "Gamification is the ultimate lead magnet. We build experiences that people actually want to spend time with."
          </p>
        </div>
      </div>
    </div>
  );
};

export default GameBuilds;
