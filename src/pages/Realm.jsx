import React from "react";

export default function Realm() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-black via-slate-900 to-black text-white px-6 py-20">
      <div className="max-w-4xl mx-auto text-center">

        <h1 className="text-5xl font-extrabold text-teal-300 drop-shadow-[0_0_25px_rgba(45,212,191,0.9)] tracking-wide">
          The Realm
        </h1>

        <p className="mt-6 text-lg text-teal-200/80 leading-relaxed">
          You’ve stepped into the mythic core of Ocean Tide Drop —  
          a place where story, code, and ceremony merge into a living world.
        </p>

        <p className="mt-4 text-teal-200/70">
          This is the foundation layer of your universe.  
          Every sector, every ritual, every tool begins here.
        </p>

        <div className="mt-12 p-8 bg-slate-900/60 border border-teal-500/20 rounded-xl shadow-xl shadow-teal-500/20 backdrop-blur-sm">
          <h2 className="text-2xl font-bold text-teal-300 mb-4">
            What Lives Inside the Realm
          </h2>

          <ul className="space-y-3 text-teal-200/80 text-left max-w-xl mx-auto">
            <li>• Cinematic transitions and ocean‑coded motion</li>
            <li>• Lore engine foundations and village canon</li>
            <li>• Sector gateways and progression paths</li>
            <li>• Rituals, achievements, and founder‑level identity</li>
            <li>• The mythic architecture behind your membership system</li>
          </ul>
        </div>

        <p className="mt-12 text-teal-300/80 italic">
          This page will evolve as your Realm expands —  
          new sectors, new lore, new ceremonies.
        </p>

      </div>
    </div>
  );
}
