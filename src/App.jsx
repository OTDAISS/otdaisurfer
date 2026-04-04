import React from "react";
import "./App.css";

// Global UI Components
import GlobalHeader from "./components/GlobalHeader.jsx";
import SystemDock from "./components/SystemDock.js";

// Router
import { RouterProvider } from "react-router-dom";
import { router } from "./router";

function App() {
  return (
    <div className="app-shell">
      {/* Global Header */}
      <GlobalHeader />

      {/* Routed Pages */}
      <div className="app-content">
        <RouterProvider router={router} />
      </div>

      {/* Global Dock */}
      <SystemDock />
    </div>
  );
}

export default App;
