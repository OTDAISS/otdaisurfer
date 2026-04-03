import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App.jsx";

// Pages / Realms
import CommandCenter from "./pages/CommandCenter.jsx";
import VictoriaPortal from "./pages/VictoriaPortal.jsx";
import GameBuilds from "./pages/GameBuilds.jsx";
import Island from "./pages/Island.jsx";
import Arena from "./pages/Arena.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Campfire from "./pages/Campfire.jsx";
import Founders from "./pages/Founders.jsx";
import MembershipWall from "./pages/MemberPass.jsx";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>

        {/* Main Hub */}
        <Route path="/" element={<CommandCenter />} />

        {/* Portals */}
        <Route path="/victoria" element={<VictoriaPortal />} />

        {/* Realms */}
        <Route path="/game-builds" element={<GameBuilds />} />
        <Route path="/island" element={<Island />} />
        <Route path="/arena" element={<Arena />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/campfire" element={<Campfire />} />
        <Route path="/founders" element={<Founders />} />

        {/* Membership Gate */}
        <Route path="/members" element={<MembershipWall />} />

      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
