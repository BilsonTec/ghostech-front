import { Link } from "react-router-dom";
import { FaTwitter, FaYoutube, FaFacebook, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#173740] to-[#2E636A] text-white">
      {/* Section principale du footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Colonne 1: Logo et description */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-[#D2F5F2] mb-4">GHOSTECH</h3>
              <p className="text-[#D2F5F2] leading-relaxed mb-6">
                Formations intensives en développement web, mobile, IoT et réseaux. 
                Transformez votre passion en expertise professionnelle.
              </p>
            </div>
            
            {/* Informations de contact */}
            <div className="space-y-3">
              <div className="flex items-center text-[#D2F5F2]">
                <FaMapMarkerAlt className="text-[#43959A] mr-3 flex-shrink-0" />
                <span className="text-sm">IUA, Corniche</span>
              </div>
              <div className="flex items-center text-[#D2F5F2]">
                <FaPhone className="text-[#43959A] mr-3 flex-shrink-0" />
                <a href="#footer"><span className="text-sm">+222 05 56 13 02 45</span></a>
              </div>
              <div className="flex items-center text-[#D2F5F2]">
                <FaEnvelope className="text-[#43959A] mr-3 flex-shrink-0" />
                <span className="text-sm">ghostech92@gmail.com</span>
              </div>
              <div className="flex items-center text-[#D2F5F2]">
                <FaClock className="text-[#43959A] mr-3 flex-shrink-0" />
                <span className="text-sm">Lun - Ven: 8:00 - 18:00</span>
              </div>
            </div>
          </div>

          {/* Colonne 2: Programmes */}
          <div className="lg:col-span-1">
            <h4 className="text-lg font-bold text-[#D2F5F2] mb-6 border-b border-[#43959A] pb-2">
              Nos Programmes
            </h4>
            <ul className="space-y-3">
              <li>
                <Link 
                  to="/programme#web" 
                  className="text-[#D2F5F2] hover:text-white transition-colors duration-300 flex items-center group"
                >
                  <span className="w-2 h-2 bg-[#43959A] rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></span>
                  Développement Web
                </Link>
              </li>
              <li>
                <Link 
                  to="/programme#mobile" 
                  className="text-[#D2F5F2] hover:text-white transition-colors duration-300 flex items-center group"
                >
                  <span className="w-2 h-2 bg-[#43959A] rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></span>
                  Développement Mobile
                </Link>
              </li>
              <li>
                <Link 
                  to="/programme#iot" 
                  className="text-[#D2F5F2] hover:text-white transition-colors duration-300 flex items-center group"
                >
                  <span className="w-2 h-2 bg-[#43959A] rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></span>
                  Internet des Objets
                </Link>
              </li>
              <li>
                <Link 
                  to="/programme#reseaux" 
                  className="text-[#D2F5F2] hover:text-white transition-colors duration-300 flex items-center group"
                >
                  <span className="w-2 h-2 bg-[#43959A] rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></span>
                  Réseaux & Sécurité
                </Link>
              </li>
            </ul>
          </div>

          {/* Colonne 3: Liens rapides */}
          <div className="lg:col-span-1">
            <h4 className="text-lg font-bold text-[#D2F5F2] mb-6 border-b border-[#43959A] pb-2">
              Liens Rapides
            </h4>
            <ul className="space-y-3">
              <li>
                <Link 
                  to="/" 
                  className="text-[#D2F5F2] hover:text-white transition-colors duration-300 flex items-center group"
                >
                  <span className="w-2 h-2 bg-[#43959A] rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></span>
                  Accueil
                </Link>
              </li>
              <li>
                <Link 
                  to="/programme" 
                  className="text-[#D2F5F2] hover:text-white transition-colors duration-300 flex items-center group"
                >
                  <span className="w-2 h-2 bg-[#43959A] rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></span>
                  Programme
                </Link>
              </li>
              <li>
                <Link 
                  to="/inscrire" 
                  className="text-[#D2F5F2] hover:text-white transition-colors duration-300 flex items-center group"
                >
                  <span className="w-2 h-2 bg-[#43959A] rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></span>
                  Inscription
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className="text-[#D2F5F2] hover:text-white transition-colors duration-300 flex items-center group"
                >
                  <span className="w-2 h-2 bg-[#43959A] rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></span>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Colonne 4: Newsletter et réseaux sociaux */}
          <div className="lg:col-span-1">
            <h4 className="text-lg font-bold text-[#D2F5F2] mb-6 border-b border-[#43959A] pb-2">
              Restez Informé
            </h4>
            
            {/* Newsletter */}
            <div className="mb-6">
              <p className="text-[#D2F5F2] text-sm mb-4">
                Inscrivez-vous pour recevoir les dernières actualités et dates de formation.
              </p>
              <div className="flex flex-col space-y-3">
                <input 
                  type="email" 
                  placeholder="Votre email" 
                  className="px-4 py-2 rounded-lg bg-white/10 border border-[#43959A] text-white placeholder-[#D2F5F2] focus:outline-none focus:ring-2 focus:ring-[#43959A] focus:border-transparent"
                />
                <button className="bg-[#43959A] text-white px-4 py-2 rounded-lg font-semibold hover:bg-[#3a8489] transition-colors duration-300 transform hover:scale-105">
                  S'abonner
                </button>
              </div>
            </div>

            {/* Réseaux sociaux */}
            <div>
              <h5 className="text-[#D2F5F2] font-semibold mb-4">Suivez-nous</h5>
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-[#D2F5F2] hover:bg-[#43959A] hover:text-white transition-all duration-300 transform hover:scale-110"
                  aria-label="Twitter"
                >
                  <FaTwitter className="text-lg" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-[#D2F5F2] hover:bg-[#43959A] hover:text-white transition-all duration-300 transform hover:scale-110"
                  aria-label="Facebook"
                >
                  <FaFacebook className="text-lg" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-[#D2F5F2] hover:bg-[#43959A] hover:text-white transition-all duration-300 transform hover:scale-110"
                  aria-label="Instagram"
                >
                  <FaInstagram className="text-lg" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-[#D2F5F2] hover:bg-[#43959A] hover:text-white transition-all duration-300 transform hover:scale-110"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="text-lg" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-[#D2F5F2] hover:bg-[#43959A] hover:text-white transition-all duration-300 transform hover:scale-110"
                  aria-label="YouTube"
                >
                  <FaYoutube className="text-lg" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section de copyright */}
      <div className="border-t border-[#43959A]">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-[#D2F5F2] text-sm text-center md:text-left">
              <p>&copy; {new Date().getFullYear()} GHOSTECH. Tous droits réservés.</p>
            </div>
            <div className="flex flex-wrap justify-center space-x-6 text-sm">
                <h2>Crée par:</h2>

              <Link 
                to="/Harding" 
                className="t link link-primary text-[#D2F5F2] hover:text-white transition-colors duration-300"
              >
                Jeremie Harding
              </Link>
              <Link 
                to="/Bilson" 
                className=" link link-primary text-[#D2F5F2] hover:text-white transition-colors duration-300"
              >
               Emmanuel Bilson
              </Link>
              <Link 
                to="/cgu" 
                className="text-[#D2F5F2] hover:text-white transition-colors duration-300"
              >
                CGU
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bouton de retour en haut */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 right-6 w-12 h-12 bg-[#43959A] text-white rounded-full flex items-center justify-center shadow-lg hover:bg-[#3a8489] transition-all duration-300 transform hover:scale-110 z-50"
        aria-label="Retour en haut"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
        </svg>
      </button>
    </footer>
  );
}