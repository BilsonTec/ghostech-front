import { Link } from "react-router-dom";
import logo from "../../assets/gg.jpg";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 px-4 py-3">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link to="/">
            <img src={logo} alt="Logo" className="h-10 w-auto object-contain" />
          </Link>
        </div>

        {/* Menu centré */}
        <div className="hidden md:flex flex-1 justify-center">
          <ul className="flex space-x-8 font-medium text-lg">
            <li><Link to="/" className="hover:text-blue-600 transition">Accueil</Link></li>
            <li><Link to="/programme" className="hover:text-blue-600 transition">Programme</Link></li>
            <li><Link to="/contact" className="hover:text-blue-600 transition">Contact</Link></li>
          </ul>
        </div>

        {/* Bouton S'inscrire */}
        <div className="hidden md:flex">
          <Link
            to="/inscrire"
            className="bg-slate-900 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition"
          >
            S'inscrire
          </Link>
        </div>

        {/* Menu mobile */}
        <div className="md:hidden">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white rounded-box w-52 font-medium">
              <li><Link to="/">Accueil</Link></li>
              <li><Link to="/programme">Programme</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li>
                <Link to="/inscrire" className="btn btn-primary text-white rounded-full mt-2">
                  S'inscrire
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
