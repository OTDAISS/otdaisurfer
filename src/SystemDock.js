import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const navItems = [
  { name: 'Home', path: '/', icon: '⌂' },
  { name: 'Web', path: '/web', icon: '🌐' },
  { name: 'Games', path: '/games', icon: '🎮' },
  { name: 'Flows', path: '/flows', icon: '⚡' },
  { name: 'Vault', path: '/vault', icon: '🔒' },
];

const SystemDock = () => {
  const location = useLocation();

  return (
    <div className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2">
      <nav className="flex items-center gap-2 rounded-2xl border border-white/10 bg-black/50 p-2 backdrop-blur-md">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`relative flex h-12 w-12 items-center justify-center rounded-xl transition-all duration-300 hover:bg-white/10 ${
                isActive ? 'bg-white/20 text-white' : 'text-gray-400'
              }`}
            >
              <span className="text-xl">{item.icon}</span>
              
              {/* Active Indicator Dot */}
              {isActive && (
                <span className="absolute -bottom-1 h-1 w-1 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee]" />
              )}
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export default SystemDock;
