import React from "react";
import { Outlet } from "react-router-dom";
import "./App.css";

// Global UI Components
import GlobalHeader from "./components/GlobalHeader.js";
import SystemDock from "./components/SystemDock.js";

function App() {
  return (
    <div className="app-shell">
      {/* Global Header */}
      <GlobalHeader />

      {/* Main Content Area */}
      <div className="app-content">
        {/* Routed pages appear here */}
        <Outlet />
      </div>

      {/* Global Dock */}
      <SystemDock />
    </div>
  );
}

export default App;
