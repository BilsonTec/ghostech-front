import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../../assets/gg.jpg";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white/90 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-[#D2F5F2]">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo avec effet hover */}
          <div className="flex-shrink-0">
            <Link 
              to="/" 
              className="flex items-center space-x-3 group"
            >
              <img 
                src={logo} 
                alt="GHOSTECH Logo" 
                className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105" 
              />
              <span className="text-xl font-bold text-[#173740] hidden sm:block">
                GHOSTECH
              </span>
            </Link>
          </div>

          {/* Menu centré - Desktop */}
          <div className="hidden md:flex flex-1 justify-center">
            <ul className="flex space-x-8 font-semibold text-[#2E636A]">
              <li>
                <Link 
                  to="/" 
                  className="relative py-2 px-3 rounded-lg hover:text-[#43959A] transition-all duration-300 hover:bg-[#D2F5F2] group"
                >
                  Accueil
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#43959A] transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link 
                  to="/programme" 
                  className="relative py-2 px-3 rounded-lg hover:text-[#43959A] transition-all duration-300 hover:bg-[#D2F5F2] group"
                >
                  Programme
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#43959A] transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className="relative py-2 px-3 rounded-lg hover:text-[#43959A] transition-all duration-300 hover:bg-[#D2F5F2] group"
                >
                  Contact
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#43959A] transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Bouton S'inscrire - Desktop */}
          <div className="hidden md:flex">
            <Link
              to="/inscrire"
              className="bg-gradient-to-r from-[#43959A] to-[#2E636A] text-white px-6 py-2.5 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 hover:from-[#3a8489] hover:to-[#25545a]"
            >
              S'inscrire
            </Link>
          </div>

          {/* Menu mobile - Burger amélioré */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-[#2E636A] hover:bg-[#D2F5F2] hover:text-[#43959A] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#43959A] focus:ring-opacity-50"
              aria-label="Menu mobile"
            >
              <div className="w-6 h-6 relative">
                <span className={`absolute left-0 w-6 h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'top-3 rotate-45' : 'top-2'}`}></span>
                <span className={`absolute left-0 w-6 h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'top-3 -rotate-45' : 'top-3'}`}></span>
                <span className={`absolute left-0 w-6 h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'top-3 opacity-0' : 'top-4'}`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Menu mobile déroulant */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${isMobileMenuOpen ? 'max-h-64 opacity-100 py-4' : 'max-h-0 opacity-0'}`}>
          <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-xl border border-[#D2F5F2] p-4 space-y-3">
            <Link 
              to="/" 
              className="block py-3 px-4 text-[#173740] font-semibold rounded-lg hover:bg-[#D2F5F2] hover:text-[#43959A] transition-all duration-300 transform hover:translate-x-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Accueil
            </Link>
            <Link 
              to="/programme" 
              className="block py-3 px-4 text-[#173740] font-semibold rounded-lg hover:bg-[#D2F5F2] hover:text-[#43959A] transition-all duration-300 transform hover:translate-x-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Programme
            </Link>
            <Link 
              to="/contact" 
              className="block py-3 px-4 text-[#173740] font-semibold rounded-lg hover:bg-[#D2F5F2] hover:text-[#43959A] transition-all duration-300 transform hover:translate-x-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="pt-2 border-t border-[#D2F5F2]">
              <Link
                to="/inscrire"
                className="block w-full bg-gradient-to-r from-[#43959A] to-[#2E636A] text-white py-3 px-4 rounded-lg font-semibold text-center hover:shadow-lg transition-all duration-300 transform hover:scale-105 hover:from-[#3a8489] hover:to-[#25545a]"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                S'inscrire
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay pour mobile */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
      )}
    </nav>
  );
}