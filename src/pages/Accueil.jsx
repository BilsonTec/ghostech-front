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
    <div className="w-full overflow-x-hidden bg-gradient-to-br from-blue-50 to-green-50">

      {/* HERO SECTION */}
      <section className="bg-gradient-to-br from-blue-50 to-green-50 text-[#173740] py-16 border-b border-[#D2F5F2]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            {/* Texte */}
            <div className="lg:w-1/2 mb-10 lg:mb-0">
              <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                Rejoignez l'Atelier <span className="text-[#43959A]">GHOSTECH</span>
              </h1>
              <p className="text-xl mb-6 text-[#2E636A]">
                Apprenez les compétences numériques et d'IA qui façonnent demain.
              </p>

              {/* Animation texte rotatif */}
              <div className="mb-8">
                <div className="rotating-text-container text-2xl md:text-3xl font-bold text-[#43959A]">
                  <div className="rotating-text">
                    <span>⌨️ DEVELOP</span>
                    <span>🌎 DEPLOY</span>
                    <span>🌱 SCALE</span>
                    <span>🔧 MAINTAIN</span>
                    <span>♻️ REPEAT</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <div className="bg-[#43959A] text-[#D2F5F2] px-6 py-3 font-bold text-lg text-center rounded-lg hover:bg-[#3a8489] transition-colors">
                  29 novembre 2025
                </div>
                <div className="bg-[#173740] text-white px-6 py-3 font-bold text-lg text-center rounded-lg hover:bg-[#1f4852] transition-colors">
                  IUA, Corniche
                </div>
                <Link 
                  to="/inscrire" 
                  className="bg-[#2E636A] text-white px-6 py-3 rounded-lg font-bold text-lg hover:bg-[#25545a] transition-all text-center"
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
      <section className="py-20 bg-white/50 backdrop-blur-sm">
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
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-[#173740] w-10 h-10 rounded-full flex items-center justify-center transition-all"
              >
                <FaChevronLeft />
              </button>
              <button 
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-[#173740] w-10 h-10 rounded-full flex items-center justify-center transition-all"
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
                      index === currentSlide ? 'bg-[#43959A]' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Texte à côté du carousel */}
            <div className="space-y-6">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-[#173740] mb-6">
                  Découvrez notre <span className="text-[#43959A]">écosystème</span> d'apprentissage
                </h2>
                <p className="text-xl text-[#2E636A] mb-6">
                  Chez GHOSTECH, nous créons un environnement où l'innovation rencontre l'éducation. 
                  Nos espaces sont conçus pour favoriser la créativité et la collaboration.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-[#D2F5F2] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <FaCheck className="text-[#43959A] text-sm" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-bold text-[#173740] mb-1">Infrastructures Modernes</h3>
                    <p className="text-[#2E636A]">
                      Des laboratoires équipés des dernières technologies pour un apprentissage optimal
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-[#D2F5F2] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <FaCheck className="text-[#43959A] text-sm" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-bold text-[#173740] mb-1">Expertise Pratique</h3>
                    <p className="text-[#2E636A]">
                      Apprentissage par la pratique avec des projets concrets et des cas réels
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-[#D2F5F2] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <FaCheck className="text-[#43959A] text-sm" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-bold text-[#173740] mb-1">Communauté Dynamique</h3>
                    <p className="text-[#2E636A]">
                      Échangez et collaborez avec une communauté de passionnés et d'experts
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-[#D2F5F2] p-6 rounded-2xl border border-[#43959A]">
                <h4 className="font-bold text-[#173740] text-lg mb-2">Prochaine Session</h4>
                <p className="text-[#2E636A] mb-3">
                  Rejoignez notre communauté de plus de 500 apprenants qui ont transformé leur carrière
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-[#173740] font-semibold">29 Novembre 2025</span>
                  <Link 
                    to="/inscrire" 
                    className="bg-[#43959A] text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-[#3a8489] transition-colors"
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
      <section className="py-20 bg-white/30 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Texte descriptif à gauche */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-[#173740] mb-6">
                  Des programmes <span className="text-[#43959A]">innovants</span> pour votre avenir
                </h2>
                <p className="text-xl text-[#2E636A] mb-6">
                  Chez GHOSTECH, nous concevons des formations qui répondent aux besoins actuels du marché numérique. 
                  Nos programmes allient théorie et pratique pour une montée en compétences rapide et efficace.
                </p>
                <p className="text-lg text-[#2E636A]">
                  Chaque spécialisation est développée en collaboration avec des experts du secteur 
                  pour garantir une adéquation parfaite avec les attentes des employeurs.
                </p>
              </div>

              {/* Stats avec animation au scroll */}
              <div 
                ref={statsRef}
                className="grid grid-cols-2 gap-6 mt-8 opacity-0 transform translate-y-8 transition-all duration-700"
              >
                <div className="text-center p-4 bg-[#D2F5F2] rounded-xl hover:scale-105 transition-transform duration-300">
                  <div className="text-2xl font-bold text-[#43959A]">95%</div>
                  <div className="text-sm text-[#2E636A]">Taux d'emploi</div>
                </div>
                <div className="text-center p-4 bg-[#E8F7F7] rounded-xl hover:scale-105 transition-transform duration-300">
                  <div className="text-2xl font-bold text-[#173740]">12</div>
                  <div className="text-sm text-[#2E636A]">Semaines intensives</div>
                </div>
                <div className="text-center p-4 bg-[#D2F5F2] rounded-xl hover:scale-105 transition-transform duration-300">
                  <div className="text-2xl font-bold text-[#43959A]">50+</div>
                  <div className="text-sm text-[#2E636A]">Projets réalisés</div>
                </div>
                <div className="text-center p-4 bg-[#E8F7F7] rounded-xl hover:scale-105 transition-transform duration-300">
                  <div className="text-2xl font-bold text-[#173740]">24/7</div>
                  <div className="text-sm text-[#2E636A]">Support mentor</div>
                </div>
              </div>

              <Link 
                to="/programmes" 
                className="inline-flex items-center gap-2 bg-[#43959A] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#3a8489] transition-colors mt-6 transform hover:scale-105 duration-300"
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
                      <span className="bg-[#43959A] text-white px-2 py-1 rounded-full text-xs font-semibold">
                        Nouveau
                      </span>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Bannière supplémentaire avec effet parallaxe */}
          <div className="mt-16 bg-gradient-to-r from-[#43959A] to-[#173740] rounded-2xl p-8 text-white relative overflow-hidden">
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-10"
              style={{ backgroundImage: 'url(/src/assets/pattern.svg)' }}
            ></div>
            <div className="relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                <div className="text-center md:text-left">
                  <h3 className="text-2xl font-bold mb-2">Prêt à commencer ?</h3>
                  <p className="text-[#D2F5F2]">Rejoignez notre prochaine session</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">29 Novembre 2025</div>
                  <div className="text-[#D2F5F2]">Date de début</div>
                </div>
                <div className="text-center">
                  <Link 
                    to="/inscrire" 
                    className="inline-block bg-white text-[#43959A] px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors transform hover:scale-105 duration-300"
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
      <section className="py-20 bg-white/50 backdrop-blur-sm relative overflow-hidden">
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
            <h2 className="text-4xl md:text-5xl font-bold text-[#173740] mb-6">
              Pourquoi choisir <span className="text-[#43959A]">GHOSTECH</span> ?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-20 h-20 bg-[#D2F5F2] rounded-full flex items-center justify-center mx-auto mb-4">
                <FaClock className="text-[#43959A] text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-[#173740] mb-3">Apprentissage Accéléré</h3>
              <p className="text-[#2E636A]">
                Méthode intensive qui vous permet d'acquérir des compétences professionnelles en quelques semaines
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-20 h-20 bg-[#E8F7F7] rounded-full flex items-center justify-center mx-auto mb-4">
                <FaLaptopCode className="text-[#173740] text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-[#173740] mb-3">100% Pratique</h3>
              <p className="text-[#2E636A]">
                Des projets concrets et des cas réels pour une montée en compétences rapide
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-20 h-20 bg-[#D2F5F2] rounded-full flex items-center justify-center mx-auto mb-4">
                <FaUsers className="text-[#43959A] text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-[#173740] mb-3">Communauté Active</h3>
              <p className="text-[#2E636A]">
                Rejoignez une communauté de passionnés et bénéficiez d'un réseau professionnel solide
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION AVANTAGES AVEC EFFET PARALLAXE */}
      <section 
        className="py-20 bg-gradient-to-r from-[#43959A] to-[#173740] text-white relative overflow-hidden"
        style={{
          backgroundImage: 'url(/src/assets/parallax-bg.jpg)',
          backgroundAttachment: 'fixed',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        {/* Overlay pour améliorer la lisibilité */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#43959A]/90 to-[#173740]/90"></div>
        
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
                    <FaCheck className="text-[#43959A] text-sm" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold mb-2">Compétences Techniques Solides</h3>
                    <p className="text-[#D2F5F2]">Maîtrisez les technologies les plus demandées sur le marché</p>
                  </div>
                </div>

                <div className="flex items-start transform hover:translate-x-2 transition-transform duration-300">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <FaCheck className="text-[#43959A] text-sm" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold mb-2">Portfolio de Projets</h3>
                    <p className="text-[#D2F5F2]">Construisez un portfolio impressionnant avec des projets réels</p>
                  </div>
                </div>

                <div className="flex items-start transform hover:translate-x-2 transition-transform duration-300">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <FaCheck className="text-[#43959A] text-sm" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold mb-2">Mentorat Personnalisé</h3>
                    <p className="text-[#D2F5F2]">Accompagnement individuel par des experts du secteur</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start transform hover:translate-x-2 transition-transform duration-300">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <FaCheck className="text-[#43959A] text-sm" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold mb-2">Certification Reconnue</h3>
                    <p className="text-[#D2F5F2]">Obtenez une certification valorisant vos compétences</p>
                  </div>
                </div>

                <div className="flex items-start transform hover:translate-x-2 transition-transform duration-300">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <FaCheck className="text-[#43959A] text-sm" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold mb-2">Préparation à l'Emploi</h3>
                    <p className="text-[#D2F5F2]">Ateliers CV, simulations d'entretiens, networking</p>
                  </div>
                </div>

                <div className="flex items-start transform hover:translate-x-2 transition-transform duration-300">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <FaCheck className="text-[#43959A] text-sm" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold mb-2">Accès à Vie</h3>
                    <p className="text-[#D2F5F2]">Accédez aux mises à jour du contenu même après la formation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION FAQ */}
      <section className="py-20 bg-white/30 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#173740] mb-6">
              Questions <span className="text-[#43959A]">Fréquentes</span>
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            <div className="collapse collapse-plus bg-white border border-[#D2F5F2] hover:shadow-lg transition-shadow duration-300">
              <input type="radio" name="my-accordion-3" defaultChecked />
              <div className="collapse-title font-semibold text-[#173740]">Comment créer un compte ?</div>
              <div className="collapse-content text-sm text-[#2E636A]">Cliquez sur le bouton "S'inscrire" en haut à droite et suivez le processus d'inscription.</div>
            </div>
            <div className="collapse collapse-plus bg-white border border-[#D2F5F2] hover:shadow-lg transition-shadow duration-300">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title font-semibold text-[#173740]">J'ai oublié mon mot de passe. Que faire ?</div>
              <div className="collapse-content text-sm text-[#2E636A]">Cliquez sur "Mot de passe oublié" sur la page de connexion et suivez les instructions envoyées par email.</div>
            </div>
            <div className="collapse collapse-plus bg-white border border-[#D2F5F2] hover:shadow-lg transition-shadow duration-300">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title font-semibold text-[#173740]">Comment mettre à jour mes informations de profil ?</div>
              <div className="collapse-content text-sm text-[#2E636A]">Allez dans les paramètres "Mon Compte" et sélectionnez "Modifier le profil" pour apporter des modifications.</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL AVEC EFFET PARALLAXE */}
      <section className="py-20 bg-gradient-to-r from-[#173740] to-[#2E636A] text-white relative overflow-hidden">
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
          <p className="text-xl text-[#D2F5F2] mb-8 max-w-2xl mx-auto">
            Rejoignez la prochaine promotion et démarrez votre avenir dans la tech
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              to="/inscrire" 
              className="bg-[#43959A] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#3a8489] transition-all transform hover:scale-105 duration-300"
            >
              S'inscrire maintenant
            </Link>
            <Link 
              to="/contact" 
              className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-[#173740] transition-all transform hover:scale-105 duration-300"
            >
              Nous contacter
            </Link>
          </div>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center transform hover:scale-110 transition-transform duration-300">
              <div className="text-2xl font-bold text-[#D2F5F2]">🚀</div>
              <div className="text-[#D2F5F2] mt-2">Lancement rapide</div>
            </div>
            <div className="text-center transform hover:scale-110 transition-transform duration-300">
              <div className="text-2xl font-bold text-[#D2F5F2]">💼</div>
              <div className="text-[#D2F5F2] mt-2">Projets concrets</div>
            </div>
            <div className="text-center transform hover:scale-110 transition-transform duration-300">
              <div className="text-2xl font-bold text-[#D2F5F2]">👨‍🏫</div>
              <div className="text-[#D2F5F2] mt-2">Experts mentors</div>
            </div>
            <div className="text-center transform hover:scale-110 transition-transform duration-300">
              <div className="text-2xl font-bold text-[#D2F5F2]">🎯</div>
              <div className="text-[#D2F5F2] mt-2">Objectif emploi</div>
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