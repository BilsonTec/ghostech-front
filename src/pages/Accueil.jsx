
// pages/Accueil.jsx
import { Link } from "react-router-dom";
import { FaCheck, FaClock, FaUsers, FaLaptopCode, FaMobile, FaNetworkWired, FaCloud } from "react-icons/fa";

export default function Accueil() {
  return (
    <div className="w-full overflow-x-hidden">

      {/* HERO SECTION AVEC IMAGE ET TEXTE CÔTE À CÔTE */}
      <div className="header relative">
        {/* Content before waves */}
        <div className="inner-header flex justify-between items-center min-h-[65vh] container mx-auto px-4">
          {/* Texte */}
          <div className="text-content text-white max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Rejoignez l’Atelier 

 <span className="text-yellow-400">de</span> formation GHOSTECH ! 
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              Utilisez la plateforme pour vous inscription et découvrir le déroulement complet des ateliers Web, Mobile, IoT Et Réseaux.
            </p>


            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/inscrire" 
                className="bg-yellow-400 text-blue-900 px-8 py-4  font-bold text-lg hover:bg-yellow-300 transition-all transform hover:scale-105 text-center"
              >
                29  novembre 2025
              </Link>

              <Link 
                to="/inscrire" 
                className="bg-yellow-400 text-blue-900 px-8 py-4  font-bold text-lg hover:bg-yellow-300 transition-all transform hover:scale-105 text-center"
              >
                IUA, Corniche
              </Link>


                            <Link 
                to="/inscrire" 
                className="bg-yellow-400 text-blue-900 px-8 py-4  font-bold text-lg hover:bg-yellow-300 transition-all transform hover:scale-105 text-center"
              >
                29  novembre 2025
              </Link>





              <Link 
                to="/programme" 
                className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-blue-900 transition-all text-center"
              >
               s'inscrire
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="image-content hidden lg:block">
            <img 
              src="src/assets/cost.png"
              alt="Étudiants en formation tech"
              className="w-[500px] h-[400px] object-cover rounded-2xl shadow-2xl"
            />
          </div>
        </div>

        {/* Waves Container */}
        <div className="waves-container">
          <svg 
            className="waves" 
            xmlns="http://www.w3.org/2000/svg" 
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 24 150 28" 
            preserveAspectRatio="none" 
            shapeRendering="auto"
          >
            <defs>
              <path 
                id="gentle-wave" 
                d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" 
              />
            </defs>
            <g className="parallax">
              <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7)" />
              <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
              <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
              <use xlinkHref="#gentle-wave" x="48" y="7" fill="#ffffff" />
            </g>
          </svg>
        </div>
      </div>

      {/* Styles pour les waves */}
      <style jsx>{`
        .header {
          position: relative;
          background: linear-gradient(60deg, rgba(19, 26, 61, 1) 0%, rgba(0,172,193,1) 100%);
          color: white;
        }

        .inner-header {
          height: 65vh;
          width: 100%;
          margin: 0;
          padding: 0;
        }

        .waves {
          position: relative;
          width: 100%;
          height: 15vh;
          margin-bottom: -7px;
          min-height: 100px;
          max-height: 150px;
        }

        /* Animation */
        .parallax > use {
          animation: move-forever 25s cubic-bezier(.55,.5,.45,.5) infinite;
        }
        .parallax > use:nth-child(1) {
          animation-delay: -2s;
          animation-duration: 7s;
        }
        .parallax > use:nth-child(2) {
          animation-delay: -3s;
          animation-duration: 10s;
        }
        .parallax > use:nth-child(3) {
          animation-delay: -4s;
          animation-duration: 13s;
        }
        .parallax > use:nth-child(4) {
          animation-delay: -5s;
          animation-duration: 20s;
        }

        @keyframes move-forever {
          0% {
            transform: translate3d(-90px,0,0);
          }
          100% { 
            transform: translate3d(85px,0,0);
          }
        }

        /* Responsive */
        @media (max-width: 768px) {
          .waves {
            height: 40px;
            min-height: 40px;
          }
          .inner-header {
            height: 50vh;
          }
        }
      `}</style>

      {/* SECTION PROGRAMMES */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Nos <span className="text-blue-600">Programmes</span> de Formation
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choisissez la spécialisation qui correspond à vos ambitions professionnelles
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Web Development */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="h-2 bg-gradient-to-r from-blue-500 to-purple-600"></div>
              <div className="p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                  <FaLaptopCode className="text-blue-600 text-xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Développement Web</h3>
                <p className="text-gray-600 mb-4">
                  Maîtrisez les technologies modernes du web frontend et backend
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm text-gray-600">
                    <FaCheck className="text-green-500 mr-2" />
                    HTML5, CSS3, JavaScript
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <FaCheck className="text-green-500 mr-2" />
                    React, Node.js
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <FaCheck className="text-green-500 mr-2" />
                    Bases de données
                  </li>
                </ul>
                <Link to="/programme" className="block text-center bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Découvrir
                </Link>
              </div>
            </div>

            {/* Mobile Development */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="h-2 bg-gradient-to-r from-green-500 to-teal-600"></div>
              <div className="p-6">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                  <FaMobile className="text-green-600 text-xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Développement Mobile</h3>
                <p className="text-gray-600 mb-4">
                  Créez des applications iOS et Android avec les frameworks modernes
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm text-gray-600">
                    <FaCheck className="text-green-500 mr-2" />
                    React Native
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <FaCheck className="text-green-500 mr-2" />
                    Flutter
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <FaCheck className="text-green-500 mr-2" />
                    UI/UX Design
                  </li>
                </ul>
                <Link to="/programme" className="block text-center bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                  Découvrir
                </Link>
              </div>
            </div>

            {/* IoT */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="h-2 bg-gradient-to-r from-orange-500 to-red-600"></div>
              <div className="p-6">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
                  <FaCloud className="text-orange-600 text-xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Internet des Objets</h3>
                <p className="text-gray-600 mb-4">
                  Connectez le monde physique au numérique avec l'IoT
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm text-gray-600">
                    <FaCheck className="text-green-500 mr-2" />
                    Arduino & Capteurs
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <FaCheck className="text-green-500 mr-2" />
                    Cloud Computing
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <FaCheck className="text-green-500 mr-2" />
                    Traitement de données
                  </li>
                </ul>
                <Link to="/programme" className="block text-center bg-orange-600 text-white py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors">
                  Découvrir
                </Link>
              </div>
            </div>

            {/* Réseaux */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="h-2 bg-gradient-to-r from-purple-500 to-pink-600"></div>
              <div className="p-6">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                  <FaNetworkWired className="text-purple-600 text-xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Réseaux & Sécurité</h3>
                <p className="text-gray-600 mb-4">
                  Maîtrisez l'infrastructure réseau et la cybersécurité
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm text-gray-600">
                    <FaCheck className="text-green-500 mr-2" />
                    TCP/IP & Routage
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <FaCheck className="text-green-500 mr-2" />
                    Cisco Packet Tracer
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <FaCheck className="text-green-500 mr-2" />
                    Sécurité réseau
                  </li>
                </ul>
                <Link to="/programme" className="block text-center bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
                  Découvrir
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* POURQUOI NOUS CHOISIR */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Pourquoi choisir <span className="text-blue-600">GHOSTECH</span> ?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center p-6">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaClock className="text-blue-600 text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Apprentissage Accéléré</h3>
              <p className="text-gray-600">
                Méthode intensive qui vous permet d'acquérir des compétences professionnelles en quelques semaines
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaLaptopCode className="text-green-600 text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">100% Pratique</h3>
              <p className="text-gray-600">
                Des projets concrets et des cas réels pour une montée en compétences rapide
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaUsers className="text-purple-600 text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Communauté Active</h3>
              <p className="text-gray-600">
                Rejoignez une communauté de passionnés et bénéficiez d'un réseau professionnel solide
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION AVANTAGES */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
              Ce que vous allez acquérir
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <FaCheck className="text-blue-900 text-sm" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold mb-2">Compétences Techniques Solides</h3>
                    <p className="text-blue-100">Maîtrisez les technologies les plus demandées sur le marché</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <FaCheck className="text-blue-900 text-sm" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold mb-2">Portfolio de Projets</h3>
                    <p className="text-blue-100">Construisez un portfolio impressionnant avec des projets réels</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <FaCheck className="text-blue-900 text-sm" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold mb-2">Mentorat Personnalisé</h3>
                    <p className="text-blue-100">Accompagnement individuel par des experts du secteur</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <FaCheck className="text-blue-900 text-sm" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold mb-2">Certification Reconue</h3>
                    <p className="text-blue-100">Obtenez une certification valorisant vos compétences</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <FaCheck className="text-blue-900 text-sm" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold mb-2">Préparation à l'Emploi</h3>
                    <p className="text-blue-100">Ateliers CV, simulations d'entretiens, networking</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <FaCheck className="text-blue-900 text-sm" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold mb-2">Accès à Vie</h3>
                    <p className="text-blue-100">Accédez aux mises à jour du contenu même après la formation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Prêt à transformer votre carrière ?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Rejoignez la prochaine promotion et démarrez votre avenir dans la tech
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              to="/inscrire" 
              className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-300 transition-all transform hover:scale-105"
            >
              S'inscrire maintenant
            </Link>
            <Link 
              to="/contact" 
              className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-gray-900 transition-all"
            >
              Nous contacter
            </Link>
          </div>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold text-yellow-400">🚀</div>
              <div className="text-gray-300 mt-2">Lancement rapide</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-yellow-400">💼</div>
              <div className="text-gray-300 mt-2">Projets concrets</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-yellow-400">👨‍🏫</div>
              <div className="text-gray-300 mt-2">Experts mentors</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-yellow-400">🎯</div>
              <div className="text-gray-300 mt-2">Objectif emploi</div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

