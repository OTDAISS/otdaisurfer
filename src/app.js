import React, { useState } from 'react';
import MemberPass from './MemberPass'; // Import your new file

function App() {
  const [view, setView] = useState('home');

  if (view === 'members') {
    return <MemberPass />;
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white flex flex-center items-center justify-center">
      <div className="text-center">
        <h1 className="text-5xl font-black mb-6">OTD AI SURFER</h1>
        <button 
          onClick={() => setView('members')}
          className="bg-blue-600 px-8 py-3 rounded-full font-bold hover:bg-blue-500 transition-all"
        >
          ENTER MEMBER PASS
        </button>
      </div>
    </div>
  );
}

export default App;
