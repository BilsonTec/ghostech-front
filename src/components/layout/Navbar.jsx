// @ts-nocheck
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import logo from "../../assets/gg.jpg";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Empêche le scroll quand le menu est ouvert
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "auto";
  }, [isMobileMenuOpen]);

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <nav className="flex items-center justify-between px-5 py-3">

        {/* LOGO (visible seulement en desktop) */}
        <Link to="/" className="hidden md:block">
          <img src={logo} alt="Logo" className="h-12 w-auto" />
        </Link>

        {/* TITRE (ou logo simplifié quand mobile) */}
        <Link to="/" className="text-xl font-semibold md:hidden">
          GHOSTECH
        </Link>

        {/* MENU BURGER */}
        <button
          className="relative md:hidden z-[60]"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {!isMobileMenuOpen ? (
            <div className="space-y-1.5">
              <span className="block w-7 h-0.5 bg-black"></span>
              <span className="block w-7 h-0.5 bg-black"></span>
              <span className="block w-7 h-0.5 bg-black"></span>
            </div>
          ) : (
            <span className="text-3xl font-bold">×</span>
          )}
        </button>

        {/* MENU DESKTOP */}
        <div className="hidden md:flex items-center w-full">
          {/* Liens centrés */}
          <ul className="flex flex-1 justify-center gap-8 font-[500]">
            <li><Link to="/" className="hover:text-blue-600">Accueil</Link></li>
            <li><Link to="/Programme" className="hover:text-blue-600">Événements</Link></li>
            <li><a id="footer" className="hover:text-blue-600 cursor-pointer">Contact</a></li>
          </ul>

          {/* Bouton "S'inscrire" tout à droite */}
          <div className="">
            <Link
              to="/inscrire"
              className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              S'inscrire
            </Link>
          </div>
        </div>
      </nav>

      {/* MENU MOBILE */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center gap-10 text-xl font-semibold animate-fadeIn">
          <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>Accueil</Link>
          <Link to="/events" onClick={() => setIsMobileMenuOpen(false)}>Événements</Link>
          <Link to="/#contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
          <Link
            to="/inscrire"
            onClick={() => setIsMobileMenuOpen(false)}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            S'inscrire
          </Link>
        </div>
      )}
    </header>
  );
}
