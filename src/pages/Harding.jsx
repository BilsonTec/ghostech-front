// @ts-nocheck
import { Link } from "react-router-dom";
import { FaLinkedin, FaWhatsapp, FaEnvelope, FaArrowLeft } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

import harding from "../assets/harding.png"

// @ts-nocheck
export default function Harding() {
  return (
    <div className="min-h-screen py-16 bg-gray-50">
      <div className="container px-4 mx-auto">

        {/* Navigation */}
        <div className="mb-12">
          <Link 
            to="/" 
            className="inline-flex items-center text-lg text-gray-600 transition-colors duration-200 hover:text-gray-900 sm:text-xl"
          >
            <FaArrowLeft className="mr-4 text-xl sm:text-2xl" />
            Retour à l'accueil
          </Link>
        </div>

        {/* Card Container */}
        <div className="max-w-6xl mx-auto">

          {/* Profile Card */}
          <div className="p-6 bg-white border border-gray-200 sm:p-10 lg:p-12">
            <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-start lg:gap-16">

              {/* Photo */}
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center overflow-hidden bg-gray-100 rounded-lg w-60 h-60 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
                  <img 
                    src={harding} 
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

              {/* Info */}
              <div className="flex-1 text-center lg:text-left">

                {/* Name */}
                <h1 className="mb-4 text-3xl font-light text-gray-900 sm:text-4xl lg:text-5xl sm:mb-6">
                  Jérémie Harding
                </h1>

                <p className="mb-10 text-xl text-gray-600 sm:text-2xl lg:text-3xl sm:mb-16">
                  Développeur React.js / Firebase
                </p>

                {/* Buttons */}
                <div className="space-y-4 sm:space-y-6">

                  <a 
                    href="https://github.com/Harding10" 
                    className="flex items-center justify-center w-full py-4 text-lg text-gray-700 transition-colors duration-200 bg-gray-100 rounded-lg lg:justify-start sm:py-6 hover:bg-gray-200 sm:text-2xl"
                  >
                    <FaGithub className="mr-4 text-2xl sm:mr-6 sm:text-3xl" />
                    Github
                  </a>

                  <a 
                    href="https://www.linkedin.com/in/jeremie-harding/" 
                    className="flex items-center justify-center w-full py-4 text-lg text-gray-700 transition-colors duration-200 bg-gray-100 rounded-lg lg:justify-start sm:py-6 hover:bg-gray-200 sm:text-2xl"
                  >
                    <FaLinkedin className="mr-4 text-2xl sm:mr-6 sm:text-3xl" />
                    LinkedIn
                  </a>
                  
                  <a 
                    href="tel:+2250142003284" 
                    className="flex items-center justify-center w-full py-4 text-lg text-gray-700 transition-colors duration-200 bg-gray-100 rounded-lg lg:justify-start sm:py-6 hover:bg-gray-200 sm:text-2xl"
                  >
                    <FaWhatsapp className="mr-4 text-2xl sm:mr-6 sm:text-3xl" />
                    WhatsApp
                  </a>
                  
                  <a 
                    href="mailto:behdehryjeremieharding@gmail.com"
                    className="flex items-center justify-center w-full py-4 text-lg text-gray-700 transition-colors duration-200 bg-gray-100 rounded-lg lg:justify-start sm:py-6 hover:bg-gray-200 sm:text-2xl"
                  >
                    <FaEnvelope className="mr-4 text-2xl sm:mr-6 sm:text-3xl" />
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
