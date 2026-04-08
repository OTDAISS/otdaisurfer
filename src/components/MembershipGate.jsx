import React, { useState } from "react";
import { useLocation } from "react-router-dom";

export default function MembershipGate() {
  const location = useLocation();
  const [isMember, setIsMember] = useState(false);

  // Routes that require membership
  const protectedRoutes = ["/realm", "/membership", "/memberservices", "/memberportal"];

  const isProtected = protectedRoutes.includes(location.pathname);

  // If not a protected route OR user already unlocked, show nothing
  if (!isProtected || isMember) return null;

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/80 backdrop-blur-xl text-teal-200">
      <div className="text-center px-8 py-10 bg-black/40 border border-teal-500/30 rounded-2xl shadow-[0_0_25px_rgba(45,212,191,0.5)] max-w-md">

        <h1 className="text-3xl font-bold mb-4 drop-shadow-[0_0_10px_rgba(45,212,191,0.8)]">
          Membership Required
        </h1>

        <p className="text-gray-300 mb-6 leading-relaxed">
          The tides part only for those who walk the realm.  
          Sign in or join to continue your journey.
        </p>

        <button
          onClick={() => setIsMember(true)}
          className="w-full py-3 rounded-lg bg-teal-600 hover:bg-teal-500 transition-all text-black font-semibold shadow-[0_0_12px_rgba(45,212,191,0.8)]"
        >
          Enter as Member
        </button>

        <p className="mt-4 text-sm text-gray-400">
          (Temporary local gate — full auth connects later)
        </p>
      </div>
    </div>
  );
}
