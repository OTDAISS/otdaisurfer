// src/router.jsx
import { createBrowserRouter } from "react-router-dom";

// Core app shell
import App from "./App.jsx";

// Membership system
import MemberPass from "./components/MemberPass.jsx";
import MemberPortal from "./components/MemberPortal.jsx";
import MemberServices from "./components/MemberServices.jsx";

// Other pages (add/remove as needed)
import Home from "./pages/Home.jsx";
import Services from "./pages/Services.jsx";
import Contact from "./pages/Contact.jsx";
import Interaction from "./pages/Interaction.jsx";
import WebBuild from "./pages/WebBuild.jsx"; // if this exists
import GameBuild from "./pages/GameBuild.jsx"; // if this exists

// -------------------------------
// ROUTER DEFINITION
// -------------------------------
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },

      // Core pages
      { path: "services", element: <Services /> },
      { path: "contact", element: <Contact /> },
      { path: "interaction", element: <Interaction /> },

      // Build pages (if you have them)
      { path: "webbuild", element: <WebBuild /> },
      { path: "gamebuild", element: <GameBuild /> },

      // Membership system
      { path: "memberportal", element: <MemberPortal /> },

      {
        path: "memberservices",
        element: (
          <MemberPass>
            <MemberServices />
          </MemberPass>
        ),
      },
    ],
  },
]);

export default router;
