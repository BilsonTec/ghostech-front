// pages/Harding.jsx
import { Link } from "react-router-dom";
import { FaLinkedin, FaWhatsapp, FaEnvelope, FaArrowLeft } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export default function Bilson() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        {/* Navigation */}
        <div className="mb-12">
          <Link 
            to="/" 
            className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors duration-200 text-xl"
          >
            <FaArrowLeft className="mr-4 text-2xl" />
            Retour à l'accueil
          </Link>
        </div>

        {/* Card Container */}
        <div className="max-w-6xl mx-auto">
          {/* Profile Card - Layout horizontal amélioré */}
          <div className="bg-white border border-gray-200 p-12">
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-16">
              
              {/* Photo Container - À gauche */}
              <div className="flex-shrink-0">
                <div className="w-96 h-96 overflow-hidden bg-gray-100 flex items-center justify-center">
                  <img 
                    src="/src/assets/bilson.jpg" 
                    alt="Jérémie Harding" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'block';
                    }}
                  />
                  <div className="hidden text-gray-400 text-lg">
                    Photo non disponible
                  </div>
                </div>
              </div>

              {/* Information Container - À droite */}
              <div className="flex-1 text-center lg:text-left">
                {/* Name & Title */}
                <h1 className="text-5xl font-light text-gray-900 mb-6">
                  Emanuelle Bilson
                </h1>
                <p className="text-gray-600 text-3xl mb-16">
                  Développeur React.js / Firebase
                </p>

                {/* Contact Links */}
                <div className="space-y-8">

                   <a 
                    href="https://github.com/BilsonTec" 
                    className="flex items-center justify-center lg:justify-start w-full py-6 bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors duration-200 text-2xl"
                  >
                    <FaGithub className="mr-6 text-3xl" />
                    Github
                  </a>

                  <a 
                    href="https://www.linkedin.com/in/emmanuelbilson?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
                    className="flex items-center justify-center lg:justify-start w-full py-6 bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors duration-200 text-2xl"
                  >
                    <FaLinkedin className="mr-6 text-3xl" />
                    LinkedIn
                  </a>
                  
                  <a 
                    href="tel:+2250799637242" 
                    className="flex items-center justify-center lg:justify-start w-full py-6 bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors duration-200 text-2xl"
                  >
                    <FaWhatsapp className="mr-6 text-3xl" />
                    WhatsApp
                  </a>
                  
                  <a 
                    href="mailto:emmanuelbilson234@gmail.com"
                    className="flex items-center justify-center lg:justify-start w-full py-6 bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors duration-200 text-2xl"
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