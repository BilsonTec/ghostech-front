// @ts-nocheck
// pages/Accueil.jsx
import { Link } from "react-router-dom";
import { FaCheck, FaClock, FaUsers, FaLaptopCode, FaMobile, FaNetworkWired, FaCloud, FaArrowRight, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useState, useEffect, useRef } from "react";
import { HiLocationMarker } from "react-icons/hi";
import { HiOutlineCalendarDateRange } from "react-icons/hi2";
import { FaPhone } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";

export default function Accueil() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
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

  // Compte à rebours dynamique
  useEffect(() => {
    const targetDate = new Date('2025-11-29T00:00:00').getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      // Créer la date cible pour le 29 novembre de l'année en cours
      const currentYear = new Date().getFullYear();
      const targetDate = new Date(currentYear, 10, 29).getTime(); // Novembre = mois 10 (0-indexé)
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        // Si la date est passée, on peut soit arrêter le compte à rebours, soit cibler l'année suivante
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

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
      <section className="bg-gradient-to-br from-blue-50 to-green-50 text-gray-900 p-36 border-b border-[#D2F5F2]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            {/* Texte */}
            <div className="lg:w-1/2 mb-10 lg:mb-0">
              <h1 className="font-playfair text-3xl md:text-5xl text-[#193C44] font-black mb-6 leading-tight tracking-tight">
                Rejoignez l'Atelier
                de formation GHOSTECH !
              </h1>
              <p className="text-xl mb-6 text-[#969494] font-inter">
                Utilisez la plateforme pour vous inscription et découvrir le déroulement complet des ateliers Web, Mobile, IoT Et Réseaux.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8 ">

                <button className="btn bg-[#43959A] hover:bg-[#3a8489] border-[#43959A] text-white text-lg">
                  <HiOutlineCalendarDateRange />
                  29 novembre 2025
                </button>
                <button className="btn bg-gray-900 hover:bg-black border-gray-900 text-white text-lg">
                  <HiLocationMarker />
                  IUA, Corniche
                </button>
                <Link
                  to="/inscrire"
                  className="btn bg-[#2E636A] hover:bg-[#25545a] border-[#2E636A] text-white text-lg"
                >
                  S'inscrire
                </Link>
              </div>
            </div>

            {/* Image avec effet parallaxe léger */}
            <div className="lg:w-1/2 flex justify-center">
              <div
                ref={parallaxRef}

              >
                <img
                  src="/src/assets/femme1.png"
                  alt="Étudiants en formation tech"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION CAROUSEL AVEC TEXTE */}
      <section className="py-20 bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Carousel */}
            <div className="relative">
              <div className="overflow-hidden rounded-2xl shadow-2xl border-2 border-gray-900/10">
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
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
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
                className="btn btn-circle absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-900 border-none shadow-lg"
              >
                <FaChevronLeft />
              </button>
              <button
                onClick={nextSlide}
                className="btn btn-circle absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-900 border-none shadow-lg"
              >
                <FaChevronRight />
              </button>

              {/* Indicateurs */}
              <div className="flex justify-center mt-4 space-x-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`btn btn-xs btn-circle ${index === currentSlide ? 'bg-[#43959A] border-[#43959A]' : 'bg-gray-400 border-gray-400'
                      }`}
                  />
                ))}
              </div>
            </div>

            {/* Texte à côté du carousel */}
            <div className="space-y-6">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Découvrez notre <span className="text-[#43959A]">écosystème</span> d'apprentissage
                </h2>
                <p className="text-xl text-gray-700 mb-6">
                  Chez GHOSTECH, nous créons un environnement où l'innovation rencontre l'éducation.
                  Nos espaces sont conçus pour favoriser la créativité et la collaboration.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-[#D2F5F2] rounded-full flex items-center justify-center flex-shrink-0 mt-1 border border-[#43959A]">
                    <FaCheck className="text-[#43959A] text-sm" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">Programme Dynamique</h3>
                    <p className="text-gray-600">
                      Notre programme pédagogique est un système dynamique qui s'ajuste en temps réel au niveau de chaque apprenant. Imaginez un parcours personnalisé où la difficulté évolue avec vous.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-[#D2F5F2] rounded-full flex items-center justify-center flex-shrink-0 mt-1 border border-[#43959A]">
                    <FaCheck className="text-[#43959A] text-sm" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">Expertise Pratique</h3>
                    <p className="text-gray-600">
                      Apprentissage par la pratique avec des projets concrets et des cas réels
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-[#D2F5F2] rounded-full flex items-center justify-center flex-shrink-0 mt-1 border border-[#43959A]">
                    <FaCheck className="text-[#43959A] text-sm" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">Communauté Dynamique</h3>
                    <p className="text-gray-600">
                      Échangez et collaborez avec une communauté de passionnés et d'experts
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-[#D2F5F2] p-6 rounded-2xl border-2 border-[#43959A] shadow-lg">
                <h4 className="font-bold text-gray-900 text-lg mb-2">Prochaine Session</h4>
                <p className="text-gray-700 mb-3">
                  Rejoignez notre communauté ce 29 novembre pour monter en compétences
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-gray-900 font-semibold">29 Novembre 2025</span>
                  <Link
                    to="/inscrire"
                    className="btn btn-sm bg-[#43959A] hover:bg-[#3a8489] border-[#43959A] text-white"
                  >
                    Réserver ma place
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>









      {/* SECTION PARTENAIRES SIMPLE */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="relative">
            <div className="overflow-hidden">
              <div className="flex animate-scroll gap-12 py-4">
                {/* Logos des partenaires - première série */}
                {[
                  "/src/assets/HELECTRO.jpg",
                  "/src/assets/AIESEC-New-Logo1.png",
                  "/src/assets/ERANOVE-Academy-reacdre.jpg",
                  "/src/assets/HELECTRO.jpg",
                  "/src/assets/AIESEC-New-Logo1.png",
                  "/src/assets/ERANOVE-Academy-reacdre.jpg",
                ].map((logo, index) => (
                  <div
                    key={`first-${index}`}
                    className="flex-shrink-0 w-32 h-16 flex items-center justify-center opacity-80 hover:opacity-100 transition-opacity duration-300"
                  >
                    <img
                      src={logo}
                      alt={`Partenaire ${index + 1}`}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                ))}

                {/* Duplication pour l'effet de boucle continu */}
                {[
                  "/src/assets/HELECTRO.jpg",
                  "/src/assets/AIESEC-New-Logo1.png",
                  "/src/assets/ERANOVE-Academy-reacdre.jpg",
                  "/src/assets/HELECTRO.jpg",
                  "/src/assets/AIESEC-New-Logo1.png",
                  "/src/assets/ERANOVE-Academy-reacdre.jpg",

                ].map((logo, index) => (
                  <div
                    key={`second-${index}`}
                    className="flex-shrink-0 w-32 h-16 flex items-center justify-center opacity-80 hover:opacity-100 transition-opacity duration-300"
                  >
                    <img
                      src={logo}
                      alt={`Partenaire ${index + 1}`}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Overlay gradients pour un effet de fondu */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-50 to-transparent z-10"></div>
          </div>
        </div>
      </section>





      {/* SECTION PROGRAMMES AVEC IMAGES STATIQUES */}
      <section className="py-20 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Texte descriptif à gauche */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Des programmes <span className="text-[#43959A]">innovants</span> pour votre avenir
                </h2>
                <p className="text-xl text-gray-700 mb-6">
                  Chez GHOSTECH, nous concevons des formations qui répondent aux besoins actuels du marché numérique.
                  Nos programmes allient théorie et pratique pour une montée en compétences rapide et efficace.
                </p>
                <p className="text-lg text-gray-600">
                  Chaque spécialisation est développée en collaboration avec des experts du secteur
                  pour garantir une adéquation parfaite avec les attentes des employeurs.
                </p>
              </div>

              {/* Chronomètre avec le même style */}
              <div className="grid grid-flow-col gap-5 text-center auto-cols-max justify-center">
                <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                  <span className="countdown font-mono text-5xl">
                    <span style={{ "--value": timeLeft.days }}></span>
                  </span>
                  days
                </div>
                <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                  <span className="countdown font-mono text-5xl">
                    <span style={{ "--value": timeLeft.hours }}></span>
                  </span>
                  hours
                </div>
                <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                  <span className="countdown font-mono text-5xl">
                    <span style={{ "--value": timeLeft.minutes }}></span>
                  </span>
                  min
                </div>
                <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                  <span className="countdown font-mono text-5xl">
                    <span style={{ "--value": timeLeft.seconds }}></span>
                  </span>
                  sec
                </div>
              </div>

              <Link
                to="/programme"
                className="btn bg-[#43959A] hover:bg-[#3a8489] border-[#43959A] text-white gap-2"
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
                    className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 block border-2 border-white"
                  >
                    <div className="aspect-square overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                        <h3 className="text-lg font-bold mb-1">{item.title}</h3>
                        <p className="text-sm text-gray-200">{item.description}</p>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Bannière supplémentaire avec style soft */}
          <div className="mt-16 bg-gradient-to-r from-[#7fb9b9] to-[#95c8c8]  p-8 text-white relative overflow-hidden shadow-lg">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-5"
              style={{ backgroundImage: 'url(/src/assets/pattern.svg)' }}
            ></div>
            <div className="relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                <div className="text-center md:text-left">
                  <h3 className="text-2xl font-bold mb-2 text-[#2a5d5d]">Prêt à commencer ?</h3>
                  <p className="text-[#4a7a7a]">Rejoignez notre atelier</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#2a5d5d]">29 Novembre 2025</div>
                  <div className="text-[#4a7a7a]">Date</div>
                </div>
                <div className="text-center">
                  <Link
                    to="/inscrire"
                    className="btn bg-white text-[#43959A] hover:bg-[#f8fafa] border-white hover:border-[#7fb9b9] hover:text-[#2a5d5d] transition-all duration-300"
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
      <section className="py-20 bg-white/80 backdrop-blur-sm relative overflow-hidden">
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
              Pourquoi choisir <span className="text-[#43959A]">GHOSTECH</span> ?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200">
              <div className="w-20 h-20 bg-[#D2F5F2] rounded-full flex items-center justify-center mx-auto mb-4 border border-[#43959A]">
                <FaClock className="text-[#43959A] text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Apprentissage Accéléré</h3>
              <p className="text-gray-600">
                Méthode intensive qui vous permet d'acquérir des compétences professionnelles en quelques semaines
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200">
              <div className="w-20 h-20 bg-[#E8F7F7] rounded-full flex items-center justify-center mx-auto mb-4 border border-[#173740]">
                <FaLaptopCode className="text-gray-900 text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">100% Pratique</h3>
              <p className="text-gray-600">
                Des projets concrets et des cas réels pour une montée en compétences rapide
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200">
              <div className="w-20 h-20 bg-[#D2F5F2] rounded-full flex items-center justify-center mx-auto mb-4 border border-[#43959A]">
                <FaUsers className="text-[#43959A] text-2xl" />
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
  className="py-20 bg-gradient-to-r from-gray-900 to-[#173740] text-white relative overflow-hidden "
  style={{
    backgroundImage: 'url(/src/assets/arduino.webp)',
    backgroundAttachment: 'fixed',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }}
>
  {/* Overlay pour améliorer la lisibilité */}
  <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-[#173740]/90 "></div>

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
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-1 border border-gray-300">
              <FaCheck className="text-[#43959A] text-sm" />
            </div>
            <div className="ml-4">
              <h3 className="text-xl font-bold mb-2">Compétences Techniques</h3>
              <p className="text-[#D2F5F2]">Développer des bases solides en Web, Mobile, Réseau et IoT.</p>
            </div>
          </div>

          <div className="flex items-start transform hover:translate-x-2 transition-transform duration-300">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-1 border border-gray-300">
              <FaCheck className="text-[#43959A] text-sm" />
            </div>
            <div className="ml-4">
              <h3 className="text-xl font-bold mb-2">Initiation Tech</h3>
              <p className="text-[#D2F5F2]">Introduire les débutants au monde du numérique.</p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="flex items-start transform hover:translate-x-2 transition-transform duration-300">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-1 border border-gray-300">
              <FaCheck className="text-[#43959A] text-sm" />
            </div>
            <div className="ml-4">
              <h3 className="text-xl font-bold mb-2">Projet Pratique</h3>
              <p className="text-[#D2F5F2]">Accompagner les participants dans la réalisation d'un mini-projet.</p>
            </div>
          </div>

          <div className="flex items-start transform hover:translate-x-2 transition-transform duration-300">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-1 border border-gray-300">
              <FaCheck className="text-[#43959A] text-sm" />
            </div>
            <div className="ml-4">
              <h3 className="text-xl font-bold mb-2">Esprit Innovant</h3>
              <p className="text-[#D2F5F2]">Stimuler la créativité et l'envie d'apprendre</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

{/* SECTION FAQ */}
<section id="contact" className="py-20 bg-white/80 backdrop-blur-sm">
  <div className="container mx-auto px-4">
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
        Questions <span className="text-[#43959A]">Fréquentes</span>
      </h2>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
      {/* Colonne FAQ */}
      <div className="space-y-4">
        <div className="collapse collapse-plus bg-white border-2 border-[#D2F5F2] hover:shadow-lg transition-shadow duration-300">
          <input type="radio" name="my-accordion-3" defaultChecked />
          <div className="collapse-title text-xl font-bold text-[#488388]">Qui peut participer à l'atelier ?</div>
          <div className="collapse-content text-gray-600">
            L'atelier est ouvert à tous ! Quelque soit ton niveau.
          </div>
        </div>
        <div className="collapse collapse-plus bg-white border-2 border-[#D2F5F2] hover:shadow-lg transition-shadow duration-300">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-bold text-[#488388]">Quel est le coût de l'atelier ?</div>
          <div className="collapse-content text-gray-600">
            Une participation de 1 000 F est demandée pour soutenir notre association.
          </div>
        </div>
        <div className="collapse collapse-plus bg-white border-2 border-[#D2F5F2] hover:shadow-lg transition-shadow duration-300">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-bold text-[#488388]">Que dois-je apporter pour l'atelier ?</div>
          <div className="collapse-content text-gray-600">
            Veuillez apporter votre ordinateur portable, son chargeur et, si possible, un kit Arduino pour l'atelier.
          </div>
        </div>
      </div>

      {/* Colonne Contact */}
      <div  className="bg-black from-[#43959A] to-[#2E636A] text-white p-8 rounded-2xl shadow-lg" >
        <h3 className="text-3xl font-bold mb-6 text-center">Contactez-nous</h3>
        
        <div className="space-y-6">
          <div className="flex items-center">
            <IoLocationSharp className="mr-4 text-xl" />
            <div>
              <h4 className="font-bold text-lg">Adresse</h4>
              <p className="text-[#D2F5F2]">IUA, Corniche</p>
            </div>
          </div>

          <div className="flex items-center">
            <FaPhone className="mr-4 text-lg" />
            <div>
              <h4 className="font-bold text-lg">Téléphone</h4>
              <p className="text-[#D2F5F2]">+222 05 56 13 02 45</p>
            </div>
          </div>

          <div className="flex items-center">
            <MdOutlineMailOutline className="mr-4 text-xl" />
            <div>
              <h4 className="font-bold text-lg">Email</h4>
              <p className="text-[#D2F5F2]">ghostech92@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
      {/* CTA FINAL AVEC EFFET PARALLAXE */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-[#2E636A] text-white relative overflow-hidden mb-15">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: 'url(/src/assets/space-bg.jpg)',
            backgroundAttachment: 'fixed'
          }}
        ></div>

        <div className="container mx-auto px-4 text-center relative z-10 ">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Prêt à développer vos competences ?
          </h2>
          <p className="text-xl text-[#D2F5F2] mb-8 max-w-2xl mx-auto">
            Rejoignez nous et démarrez votre avenir dans la tech
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/inscrire"
              className="btn bg-[#43959A] hover:bg-[#3a8489] border-[#43959A] text-white text-lg px-8"
            >
              S'inscrire maintenant
            </Link>
            <Link
              to="/contact"
              className="btn btn-outline text-white border-white hover:bg-white hover:text-gray-900 text-lg px-8"
            >
              Nous contacter
            </Link>
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