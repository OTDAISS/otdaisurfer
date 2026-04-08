import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";

// Pages
import Home from "./pages/Home";
import Services from "./pages/Services";
import Realm from "./pages/Realm";
import Contact from "./pages/Contact";
import Membership from "./pages/Membership";

// Global Styles
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>

        {/* App Shell */}
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="realm" element={<Realm />} />
          <Route path="contact" element={<Contact />} />
          <Route path="membership" element={<Membership />} />
        </Route>

      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
