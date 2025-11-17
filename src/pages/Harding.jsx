// @ts-nocheck
// pages/Harding.jsx
import { Link } from "react-router-dom";
import { FaLinkedin, FaWhatsapp, FaEnvelope, FaArrowLeft } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export default function Harding() {
  return (
    <div className="min-h-screen py-16 bg-gray-50">
      <div className="container px-4 mx-auto">
        {/* Navigation */}
        <div className="mb-12">
          <Link 
            to="/" 
            className="inline-flex items-center text-xl text-gray-600 transition-colors duration-200 hover:text-gray-900"
          >
            <FaArrowLeft className="mr-4 text-2xl" />
            Retour à l'accueil
          </Link>
        </div>

        {/* Card Container */}
        <div className="max-w-6xl mx-auto">
          {/* Profile Card - Layout horizontal amélioré */}
          <div className="p-12 bg-white border border-gray-200">
            <div className="flex flex-col items-center gap-16 lg:flex-row lg:items-start">
              
              {/* Photo Container - À gauche */}
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center overflow-hidden bg-gray-100 w-96 h-96">
                  <img 
                    src="/src/assets/harding.png" 
                    alt="Jérémie Harding" 
                    className="object-cover w-full h-full"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'block';
                    }}
                  />
                  <div className="hidden text-lg text-gray-400">
                    Photo non disponible
                  </div>
                </div>
              </div>

              {/* Information Container - À droite */}
              <div className="flex-1 text-center lg:text-left">
                {/* Name & Title */}
                <h1 className="mb-6 text-5xl font-light text-gray-900">
                  Jérémie Harding
                </h1>
                <p className="mb-16 text-3xl text-gray-600">
                  Développeur React.js / Firebase
                </p>

                {/* Contact Links */}
                <div className="space-y-8">

                   <a 
                    href="https://github.com/Harding10" 
                    className="flex items-center justify-center w-full py-6 text-2xl text-gray-700 transition-colors duration-200 bg-gray-100 lg:justify-start hover:bg-gray-200"
                  >
                    <FaGithub className="mr-6 text-3xl" />
                    Github
                  </a>

                  <a 
                    href="https://www.linkedin.com/in/jeremie-harding/" 
                    className="flex items-center justify-center w-full py-6 text-2xl text-gray-700 transition-colors duration-200 bg-gray-100 lg:justify-start hover:bg-gray-200"
                  >
                    <FaLinkedin className="mr-6 text-3xl" />
                    LinkedIn
                  </a>
                  
                  <a 
                    href="tel:+2250142003284" 
                    className="flex items-center justify-center w-full py-6 text-2xl text-gray-700 transition-colors duration-200 bg-gray-100 lg:justify-start hover:bg-gray-200"
                  >
                    <FaWhatsapp className="mr-6 text-3xl" />
                    WhatsApp
                  </a>
                  
                  <a 
                    href="mailto:behdehryjeremieharding@gmail.com"
                    className="flex items-center justify-center w-full py-6 text-2xl text-gray-700 transition-colors duration-200 bg-gray-100 lg:justify-start hover:bg-gray-200"
                  >
                    <FaEnvelope className="mr-6 text-3xl" />
                    Email
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}