import React, { useState } from "react";

export default function PromptForge() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([]);

  const forgePrompt = () => {
    if (!input.trim()) return;
    const newEntry = {
      text: input,
      timestamp: new Date().toLocaleTimeString(),
    };
    setHistory([newEntry, ...history]);
    setInput("");
  };

  return (
    <div className="min-h-screen w-full px-6 py-16 bg-gradient-to-b from-black via-[#020617] to-[#00111f] text-white">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-5xl font-extrabold tracking-tight drop-shadow-[0_0_25px_rgba(0,200,255,0.6)]">
          Prompt Forge
        </h1>
        <p className="mt-4 text-lg text-white/70">
          Shape language like molten metal. Craft prompts that bend reality inside the realm.
        </p>
      </div>

      {/* Forge Container */}
      <div className="max-w-3xl mx-auto backdrop-blur-xl bg-white/5 border border-cyan-400/20 rounded-2xl p-8 shadow-[0_0_35px_rgba(0,200,255,0.25)]">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Describe the spell you want to cast…"
          className="
            w-full h-40 p-4 rounded-xl bg-black/40 border border-white/10 
            focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-500/40 
            outline-none transition-all duration-300
          "
        />

        <button
          onClick={forgePrompt}
          className="
            mt-6 w-full py-3 rounded-xl font-semibold 
            bg-gradient-to-r from-cyan-500 to-blue-600 
            hover:from-cyan-400 hover:to-blue-500
            shadow-[0_0_20px_rgba(0,200,255,0.5)]
            hover:shadow-[0_0_35px_rgba(0,200,255,0.8)]
            transition-all duration-300
          "
        >
          Forge Prompt
        </button>
      </div>

      {/* History */}
      <div className="max-w-3xl mx-auto mt-16">
        <h2 className="text-3xl font-bold mb-6 drop-shadow-[0_0_15px_rgba(0,200,255,0.4)]">
          Forged Artifacts
        </h2>

        <div className="space-y-6">
          {history.length === 0 && (
            <p className="text-white/50">No prompts forged yet. The anvil waits.</p>
          )}

          {history.map((entry, index) => (
            <div
              key={index}
              className="
                p-6 rounded-xl bg-white/5 border border-white/10 
                shadow-[0_0_20px_rgba(0,200,255,0.15)]
              "
            >
              <div className="text-white/80 mb-2 text-sm">{entry.timestamp}</div>
              <div className="text-lg">{entry.text}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
