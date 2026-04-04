import React, { useState } from "react";
import "./SystemDock.css";

const dockItems = [
  { name: "Home", icon: "🏄‍♂️" },
  { name: "Console", icon: "⚡" },
  { name: "Quests", icon: "📜" },
  { name: "Tribe", icon: "🌐" },
  { name: "Profile", icon: "🌊" },
];

export default function SystemDock() {
  const [active, setActive] = useState(null);

  return (
    <div className="dock-wrapper">
      <div className="dock">
        {dockItems.map((item, index) => (
          <div
            key={index}
            className={`dock-item ${active === index ? "active" : ""}`}
            onMouseEnter={() => setActive(index)}
            onMouseLeave={() => setActive(null)}
          >
            <div className="dock-icon">{item.icon}</div>
            <div className="dock-label">{item.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}