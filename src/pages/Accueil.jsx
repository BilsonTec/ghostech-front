// pages/Accueil.jsx
import { Link } from "react-router-dom";
import { FaCheck, FaClock, FaUsers, FaLaptopCode, FaMobile, FaNetworkWired, FaCloud, FaArrowRight, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useState, useEffect, useRef } from "react";

export default function Accueil() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const parallaxRef = useRef(null);
  const statsRef = useRef(null);
  const advantagesRef = useRef(null);

  const slides = [
    {
      image: "/src/assets/Developpeur-Web.jpg",
      title: "Ateliers Pratiques",
      description: "Apprentissage hands-on avec des équipements modernes"
    },
    {
      image: "/src/assets/projet_arduino.avif",
      title: "Laboratoires High-Tech",
      description: "Environnements de développement professionnels"
    },
    {
      image: "/src/assets/developpeur-face-ia.webp",
      title: "Travail d'Équipe",
      description: "Collaboration sur des projets innovants"
    },
    {
      image: "/src/assets/arduino_librairy.jpg",
      title: "Cérémonies de Fin",
      description: "Célébration des réussites et certifications"
    }
  ];

  const programmeImages = [
    {
      image: "/src/assets/coder.gif",
      title: "Développement Web",
      description: "Full Stack Modern",
      link: "/programme/web"
    },
    {
      image: "/src/assets/robo.gif",
      title: "Mobile Development",
      description: "Apps iOS & Android",
      link: "/programme/mobile"
    },
    {
      image: "/src/assets/giphy.gif",
      title: "Internet des Objets",
      description: "Connectivité & Capteurs",
      link: "/programme/iot"
    },
    {
      image: "/src/assets/200.webp",
      title: "Réseaux & Sécurité",
      description: "Infrastructure & Protection",
      link: "/programme/reseaux"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  // Effet parallaxe
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const rate = scrolled * -0.5;
      
      if (parallaxRef.current) {
        parallaxRef.current.style.transform = `translateY(${rate}px)`;
      }

      // Animation des statistiques
      if (statsRef.current) {
        const statsPosition = statsRef.current.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (statsPosition < screenPosition) {
          statsRef.current.classList.add('animate-fade-in-up');
        }
      }

      // Animation des avantages
      if (advantagesRef.current) {
        const advantagesPosition = advantagesRef.current.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (advantagesPosition < screenPosition) {
          advantagesRef.current.classList.add('animate-fade-in-up');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="w-full overflow-x-hidden">

      {/* HERO SECTION AVEC FOND BLANC ET TEXTE NOIR */}
      <section className="bg-white text-gray-900 py-16 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            {/* Texte */}
            <div className="lg:w-1/2 mb-10 lg:mb-0">
              <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                Rejoignez l'Atelier GHOSTECH
              </h1>
              <p className="text-xl mb-6 text-gray-700">
                Apprenez les compétences numériques et d'IA qui façonnent demain.
              </p>

              {/* Animation texte rotatif */}
              <div className="mb-8">
                <div className="rotating-text-container text-2xl md:text-3xl font-bold text-blue-600">
                  <div className="rotating-text">
                    <span>📐 DESIGN</span>
                    <span>⌨️ DEVELOP</span>
                    <span>🌎 DEPLOY</span>
                    <span>🌱 SCALE</span>
                    <span>🔧 MAINTAIN</span>
                    <span>♻️ REPEAT</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <div className="bg-green-800 text-white px-6 py-3 font-bold text-lg text-center rounded-lg hover:bg-green-900 transition-colors">
                  29 novembre 2025
                </div>
                <div className="bg-blue-600 text-white px-6 py-3 font-bold text-lg text-center rounded-lg hover:bg-blue-700 transition-colors">
                  IUA, Corniche
                </div>
                <Link 
                  to="/inscrire" 
                  className="bg-slate-900 text-white px-6 py-3 rounded-lg font-bold text-lg hover:bg-gray-800 transition-all text-center"
                >
                  S'inscrire
                </Link>
              </div>
            </div>

            {/* Image avec effet parallaxe léger */}
            <div className="lg:w-1/2 flex justify-center">
              <div 
                ref={parallaxRef}
                className="transform transition-transform duration-1000 ease-out"
              >
                <img 
                  src="/src/assets/gost-removebg-preview.png"
                  alt="Étudiants en formation tech"
                  className="w-full max-w-md rounded-2xl shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION CAROUSEL AVEC TEXTE */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Carousel */}
            <div className="relative">
              <div className="overflow-hidden rounded-2xl shadow-2xl">
                <div 
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {slides.map((slide, index) => (
                    <div key={index} className="w-full flex-shrink-0">
                      <div className="relative">
                        <img 
                          src={slide.image} 
                          alt={slide.title}
                          className="w-full h-96 object-cover"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                          <h3 className="text-white text-xl font-bold">{slide.title}</h3>
                          <p className="text-gray-200">{slide.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Boutons de navigation */}
              <button 
                onClick={prevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 w-10 h-10 rounded-full flex items-center justify-center transition-all"
              >
                <FaChevronLeft />
              </button>
              <button 
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 w-10 h-10 rounded-full flex items-center justify-center transition-all"
              >
                <FaChevronRight />
              </button>

              {/* Indicateurs */}
              <div className="flex justify-center mt-4 space-x-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === currentSlide ? 'bg-green-800' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Texte à côté du carousel */}
            <div className="space-y-6">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Découvrez notre <span className="text-green-800">écosystème</span> d'apprentissage
                </h2>
                <p className="text-xl text-gray-600 mb-6">
                  Chez GHOSTECH, nous créons un environnement où l'innovation rencontre l'éducation. 
                  Nos espaces sont conçus pour favoriser la créativité et la collaboration.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <FaCheck className="text-green-800 text-sm" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">Infrastructures Modernes</h3>
                    <p className="text-gray-600">
                      Des laboratoires équipés des dernières technologies pour un apprentissage optimal
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <FaCheck className="text-green-800 text-sm" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">Expertise Pratique</h3>
                    <p className="text-gray-600">
                      Apprentissage par la pratique avec des projets concrets et des cas réels
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <FaCheck className="text-green-800 text-sm" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">Communauté Dynamique</h3>
                    <p className="text-gray-600">
                      Échangez et collaborez avec une communauté de passionnés et d'experts
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-2xl border border-blue-200">
                <h4 className="font-bold text-blue-800 text-lg mb-2">Prochaine Session</h4>
                <p className="text-blue-700 mb-3">
                  Rejoignez notre communauté de plus de 500 apprenants qui ont transformé leur carrière
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-blue-800 font-semibold">29 Novembre 2025</span>
                  <Link 
                    to="/inscrire" 
                    className="bg-blue-800 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-900 transition-colors"
                  >
                    Réserver ma place
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION PROGRAMMES AVEC IMAGES STATIQUES */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Texte descriptif à gauche */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Des programmes <span className="text-green-800">innovants</span> pour votre avenir
                </h2>
                <p className="text-xl text-gray-600 mb-6">
                  Chez GHOSTECH, nous concevons des formations qui répondent aux besoins actuels du marché numérique. 
                  Nos programmes allient théorie et pratique pour une montée en compétences rapide et efficace.
                </p>
                <p className="text-lg text-gray-500">
                  Chaque spécialisation est développée en collaboration avec des experts du secteur 
                  pour garantir une adéquation parfaite avec les attentes des employeurs.
                </p>
              </div>

              {/* Stats avec animation au scroll */}
              <div 
                ref={statsRef}
                className="grid grid-cols-2 gap-6 mt-8 opacity-0 transform translate-y-8 transition-all duration-700"
              >
                <div className="text-center p-4 bg-green-50 rounded-xl hover:scale-105 transition-transform duration-300">
                  <div className="text-2xl font-bold text-green-800">95%</div>
                  <div className="text-sm text-gray-600">Taux d'emploi</div>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-xl hover:scale-105 transition-transform duration-300">
                  <div className="text-2xl font-bold text-blue-800">12</div>
                  <div className="text-sm text-gray-600">Semaines intensives</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-xl hover:scale-105 transition-transform duration-300">
                  <div className="text-2xl font-bold text-green-800">50+</div>
                  <div className="text-sm text-gray-600">Projets réalisés</div>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-xl hover:scale-105 transition-transform duration-300">
                  <div className="text-2xl font-bold text-blue-800">24/7</div>
                  <div className="text-sm text-gray-600">Support mentor</div>
                </div>
              </div>

              <Link 
                to="/programmes" 
                className="inline-flex items-center gap-2 bg-green-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-900 transition-colors mt-6 transform hover:scale-105 duration-300"
              >
                Voir tous les programmes
                <FaArrowRight className="text-sm" />
              </Link>
            </div>

            {/* 4 Images statiques à droite avec effet parallaxe */}
            <div className="grid grid-cols-2 gap-6">
              {programmeImages.map((item, index) => (
                <div 
                  key={index}
                  className="parallax-item transform transition-transform duration-700 ease-out"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <Link 
                    to={item.link}
                    className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 block"
                  >
                    <div className="aspect-square overflow-hidden">
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                        <h3 className="text-lg font-bold mb-1">{item.title}</h3>
                        <p className="text-sm text-gray-200">{item.description}</p>
                      </div>
                    </div>
                    <div className="absolute top-3 right-3">
                      <span className="bg-green-800 text-white px-2 py-1 rounded-full text-xs font-semibold">
                        Nouveau
                      </span>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Bannière supplémentaire avec effet parallaxe */}
          <div className="mt-16 bg-gradient-to-r from-green-800 to-blue-800 rounded-2xl p-8 text-white relative overflow-hidden">
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-10"
              style={{ backgroundImage: 'url(/src/assets/pattern.svg)' }}
            ></div>
            <div className="relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                <div className="text-center md:text-left">
                  <h3 className="text-2xl font-bold mb-2">Prêt à commencer ?</h3>
                  <p className="text-green-100">Rejoignez notre prochaine session</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">29 Novembre 2025</div>
                  <div className="text-green-100">Date de début</div>
                </div>
                <div className="text-center">
                  <Link 
                    to="/inscrire" 
                    className="inline-block bg-white text-green-800 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors transform hover:scale-105 duration-300"
                  >
                    S'inscrire maintenant
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* POURQUOI NOUS CHOISIR */}
      <section className="py-20 bg-gray-50 relative overflow-hidden">
        {/* Fond avec effet parallaxe */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-5"
          style={{ 
            backgroundImage: 'url(/src/assets/tech-pattern.jpg)',
            backgroundAttachment: 'fixed'
          }}
        ></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Pourquoi choisir <span className="text-green-800">GHOSTECH</span> ?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaClock className="text-green-800 text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Apprentissage Accéléré</h3>
              <p className="text-gray-600">
                Méthode intensive qui vous permet d'acquérir des compétences professionnelles en quelques semaines
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaLaptopCode className="text-blue-800 text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">100% Pratique</h3>
              <p className="text-gray-600">
                Des projets concrets et des cas réels pour une montée en compétences rapide
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaUsers className="text-green-800 text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Communauté Active</h3>
              <p className="text-gray-600">
                Rejoignez une communauté de passionnés et bénéficiez d'un réseau professionnel solide
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION AVANTAGES AVEC EFFET PARALLAXE */}
      <section 
        className="py-20 bg-gradient-to-r from-green-800 to-blue-800 text-white relative overflow-hidden"
        style={{
          backgroundImage: 'url(/src/assets/parallax-bg.jpg)',
          backgroundAttachment: 'fixed',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        {/* Overlay pour améliorer la lisibilité */}
        <div className="absolute inset-0 bg-gradient-to-r from-green-800/90 to-blue-800/90"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div 
            ref={advantagesRef}
            className="max-w-4xl mx-auto opacity-0 transform translate-y-8 transition-all duration-700"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
              Ce que vous allez acquérir
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start transform hover:translate-x-2 transition-transform duration-300">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <FaCheck className="text-green-800 text-sm" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold mb-2">Compétences Techniques Solides</h3>
                    <p className="text-green-100">Maîtrisez les technologies les plus demandées sur le marché</p>
                  </div>
                </div>

                <div className="flex items-start transform hover:translate-x-2 transition-transform duration-300">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <FaCheck className="text-green-800 text-sm" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold mb-2">Portfolio de Projets</h3>
                    <p className="text-green-100">Construisez un portfolio impressionnant avec des projets réels</p>
                  </div>
                </div>

                <div className="flex items-start transform hover:translate-x-2 transition-transform duration-300">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <FaCheck className="text-green-800 text-sm" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold mb-2">Mentorat Personnalisé</h3>
                    <p className="text-green-100">Accompagnement individuel par des experts du secteur</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start transform hover:translate-x-2 transition-transform duration-300">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <FaCheck className="text-green-800 text-sm" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold mb-2">Certification Reconnue</h3>
                    <p className="text-green-100">Obtenez une certification valorisant vos compétences</p>
                  </div>
                </div>

                <div className="flex items-start transform hover:translate-x-2 transition-transform duration-300">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <FaCheck className="text-green-800 text-sm" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold mb-2">Préparation à l'Emploi</h3>
                    <p className="text-green-100">Ateliers CV, simulations d'entretiens, networking</p>
                  </div>
                </div>

                <div className="flex items-start transform hover:translate-x-2 transition-transform duration-300">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <FaCheck className="text-green-800 text-sm" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold mb-2">Accès à Vie</h3>
                    <p className="text-green-100">Accédez aux mises à jour du contenu même après la formation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION FAQ */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Questions <span className="text-green-800">Fréquentes</span>
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            <div className="collapse collapse-plus bg-white border border-gray-300 hover:shadow-lg transition-shadow duration-300">
              <input type="radio" name="my-accordion-3" defaultChecked />
              <div className="collapse-title font-semibold">Comment créer un compte ?</div>
              <div className="collapse-content text-sm">Cliquez sur le bouton "S'inscrire" en haut à droite et suivez le processus d'inscription.</div>
            </div>
            <div className="collapse collapse-plus bg-white border border-gray-300 hover:shadow-lg transition-shadow duration-300">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title font-semibold">J'ai oublié mon mot de passe. Que faire ?</div>
              <div className="collapse-content text-sm">Cliquez sur "Mot de passe oublié" sur la page de connexion et suivez les instructions envoyées par email.</div>
            </div>
            <div className="collapse collapse-plus bg-white border border-gray-300 hover:shadow-lg transition-shadow duration-300">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title font-semibold">Comment mettre à jour mes informations de profil ?</div>
              <div className="collapse-content text-sm">Allez dans les paramètres "Mon Compte" et sélectionnez "Modifier le profil" pour apporter des modifications.</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL AVEC EFFET PARALLAXE */}
      <section className="py-20 bg-gray-900 text-white relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: 'url(/src/assets/space-bg.jpg)',
            backgroundAttachment: 'fixed'
          }}
        ></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Prêt à transformer votre carrière ?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Rejoignez la prochaine promotion et démarrez votre avenir dans la tech
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              to="/inscrire" 
              className="bg-green-800 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-green-900 transition-all transform hover:scale-105 duration-300"
            >
              S'inscrire maintenant
            </Link>
            <Link 
              to="/contact" 
              className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-gray-900 transition-all transform hover:scale-105 duration-300"
            >
              Nous contacter
            </Link>
          </div>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center transform hover:scale-110 transition-transform duration-300">
              <div className="text-2xl font-bold text-green-400">🚀</div>
              <div className="text-gray-300 mt-2">Lancement rapide</div>
            </div>
            <div className="text-center transform hover:scale-110 transition-transform duration-300">
              <div className="text-2xl font-bold text-green-400">💼</div>
              <div className="text-gray-300 mt-2">Projets concrets</div>
            </div>
            <div className="text-center transform hover:scale-110 transition-transform duration-300">
              <div className="text-2xl font-bold text-green-400">👨‍🏫</div>
              <div className="text-gray-300 mt-2">Experts mentors</div>
            </div>
            <div className="text-center transform hover:scale-110 transition-transform duration-300">
              <div className="text-2xl font-bold text-green-400">🎯</div>
              <div className="text-gray-300 mt-2">Objectif emploi</div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .rotating-text-container {
          height: 60px;
          overflow: hidden;
          position: relative;
        }

        .rotating-text {
          position: relative;
        }

        .rotating-text span {
          display: block;
          position: absolute;
          opacity: 0;
          top: 0;
          left: 0;
          animation: text-rotate 12s linear infinite;
        }

        .rotating-text span:nth-child(1) { animation-delay: 0s; }
        .rotating-text span:nth-child(2) { animation-delay: 2s; }
        .rotating-text span:nth-child(3) { animation-delay: 4s; }
        .rotating-text span:nth-child(4) { animation-delay: 6s; }
        .rotating-text span:nth-child(5) { animation-delay: 8s; }
        .rotating-text span:nth-child(6) { animation-delay: 10s; }

        @keyframes text-rotate {
          0% {
            opacity: 0;
            transform: translateY(100%);
          }
          5% {
            opacity: 1;
            transform: translateY(0%);
          }
          15% {
            opacity: 1;
            transform: translateY(0%);
          }
          20% {
            opacity: 0;
            transform: translateY(-100%);
          }
          100% {
            opacity: 0;
            transform: translateY(-100%);
          }
        }

        .animate-fade-in-up {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }

        /* Effet parallaxe pour les images des programmes */
        .parallax-item {
          transition: transform 0.3s ease-out;
        }

        @media (min-width: 1024px) {
          .parallax-item:hover {
            transform: translateY(-10px);
          }
        }
      `}</style>

    </div>
  );
}