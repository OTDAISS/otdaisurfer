import React from 'react';
import { Link } from 'react-router-dom';

const Automations = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white p-8 font-sans">
      <div className="max-w-4xl mx-auto">
        <Link to="/" className="text-blue-400 hover:text-white transition-colors mb-8 inline-block font-bold">← BACK TO HUB</Link>
        <h1 className="text-5xl md:text-7xl font-black italic mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-500">AI AUTOMATIONS</h1>
        <div className="bg-slate-900/50 border border-blue-500/20 p-8 rounded-3xl backdrop-blur-md">
          <p className="text-xl text-slate-300 leading-relaxed mb-6">
            Deploying autonomous agents and custom GPT architectures to handle high-volume operations. 
          </p>
          <ul className="space-y-4 text-blue-400 font-mono">
            <li>• Multi-Agent Orchestration</li>
            <li>• Cognitive Workflow Design</li>
            <li>• LLM Integration Stacks</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Automations;
