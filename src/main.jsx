import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import MemberPortal from "./pages/MemberPortal";
import "./styles/global.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="contact" element={<Contact />} />
          <Route path="portal" element={<MemberPortal />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
