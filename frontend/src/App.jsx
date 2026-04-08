import { Outlet, Link } from "react-router-dom";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header / Navigation */}
      <header className="w-full py-6 border-b border-gray-200">
        <nav className="max-w-6xl mx-auto flex items-center justify-between px-4">
          <div className="text-2xl font-bold">Ocean Tide Drop</div>

          <div className="flex gap-6 text-lg">
            <Link to="/" className="hover:text-blue-600 transition">
              Home
            </Link>
            <Link to="/services" className="hover:text-blue-600 transition">
              Services
            </Link>
            <Link to="/contact" className="hover:text-blue-600 transition">
              Contact
            </Link>
          </div>
        </nav>
      </header>

      {/* Routed Page Content */}
      <main className="max-w-6xl mx-auto px-4 py-10">
        <Outlet />
      </main>
    </div>
  );
}
