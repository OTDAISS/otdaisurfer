import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";

// Pages
import Home from "./pages/Home";
import Services from "./pages/Services";
import Realm from "./pages/Realm";
import Contact from "./pages/Contact";
import MemberPortal from "./MemberPortal";
import MemberServices from "./MemberServices";
import MemberPass from "./MemberPass";

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
          <Route path="memberportal" element={<MemberPortal />} />
          <Route
            path="memberservices"
            element={
              <MemberPass>
                <MemberServices />
              </MemberPass>
            }
          />
        </Route>

      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
