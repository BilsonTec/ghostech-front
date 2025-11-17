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
// importasion des images
import photo from "../assets/200.webp";
import photo from "../assets/AIESEC-New-Logo1.png";
import photo from "../assets/arduino_librairy.jpg";
import photo from "../assets/arduino.webp";
import photo from "../assets/coder.gif";
import photo from "../assets/developpeur-face-ia.webp";
import photo from "../assets/Developpeur-Web.jpg";
import photo from "../assets/ERANOVE-Academy-reacdre.jpg";
import photo from "../assets/femme1.png";
import photo from "../assets/giphy.gif";
import photo from "../assets/HELECTRO.jpg";


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
 },
 {
 image: "/src/assets/robo.gif",
 title: "Mobile Development",
 description: "Apps iOS & Android",
 },
 {
 image: "/src/assets/giphy.gif",
 title: "Internet des Objets",
 description: "Connectivité & Capteurs",
 },
 {
 image: "/src/assets/200.webp",
 title: "Réseaux & Sécurité",
 description: "Infrastructure & Protection",
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
 <section className="bg-gradient-to-br from-blue-50 to-green-50 text-gray-900 p-4 sm:p-8 md:p-12 lg:p-20 xl:p-24 border-b border-[#D2F5F2]">
 <div className="container px-2 mx-auto sm:px-4">
 <div className="flex flex-col items-center justify-between lg:flex-row">
 {/* Texte */}
 <div className="mb-8 text-center lg:w-1/2 lg:mb-0 lg:text-left">
 <h1 className="font-playfair text-2xl sm:text-3xl p-14 md:text-4xl lg:text-5xl text-[#193C44] font-black mb-4 lg:mb-6 leading-tight tracking-tight">
 Rejoignez l'Atelier
 de formation GHOSTECH !
 </h1>
 <p className="text-base sm:text-lg md:text-xl mb-4 lg:mb-6 text-[#969494] font-inter">
 Utilisez la plateforme pour vous inscription et découvrir le déroulement complet des ateliers Web, Mobile, IoT Et Réseaux.
 </p>

 <div className="flex flex-col justify-center gap-3 mb-6 sm:flex-row lg:gap-4 lg:mb-8 lg:justify-start">
 <button className="btn bg-[#43959A] hover:bg-[#3a8489] border-[#43959A] text-white text-sm sm:text-base lg:text-lg py-2 sm:py-3">
 <HiOutlineCalendarDateRange className="inline mr-2" />
 29 novembre 2025
 </button>
 <button className="py-2 text-sm text-white bg-gray-900 border-gray-900 btn hover:bg-black sm:text-base lg:text-lg sm:py-3">
 <HiLocationMarker className="inline mr-2" />
 IUA, Corniche
 </button>
 <Link
 to="/inscrire"
 className="btn bg-[#2E636A] hover:bg-[#25545a] border-[#2E636A] text-white text-sm sm:text-base lg:text-lg py-2 sm:py-3 text-center"
 >
 S'inscrire
 </Link>
 </div>
 </div>

 {/* Image avec effet parallaxe léger */}
 <div className="flex justify-center mt-6 lg:w-1/2 lg:mt-0">
 <div
 
 >
 <img
 src="/src/assets/femme1.png"
 alt="Étudiants en formation tech"
 className="object-contain w-full h-auto"
 />
 </div>
 </div>
 </div>
 </div>
 </section>

 {/* SECTION CAROUSEL AVEC TEXTE */}
 <section className="py-12 sm:py-16 lg:py-20 bg-white/80 backdrop-blur-sm">
 <div className="container px-2 mx-auto sm:px-4">
 <div className="grid items-center grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
 {/* Carousel */}
 <div className="relative order-2 lg:order-1">
 <div className="overflow-hidden border-2 shadow-lg rounded-xl lg:rounded-2xl lg:shadow-2xl border-gray-900/10">
 <div
 className="flex transition-transform duration-500 ease-in-out"
 style={{ transform: `translateX(-${currentSlide * 100}%)` }}
 >
 {slides.map((slide, index) => (
 <div key={index} className="flex-shrink-0 w-full">
 <div className="relative">
 <img
 src={slide.image}
 alt={slide.title}
 className="object-cover w-full h-48 sm:h-64 md:h-80 lg:h-96"
 />
 <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent lg:p-6">
 <h3 className="text-lg font-bold text-white sm:text-xl">{slide.title}</h3>
 <p className="text-sm text-gray-200 sm:text-base">{slide.description}</p>
 </div>
 </div>
 </div>
 ))}
 </div>
 </div>

 {/* Boutons de navigation */}
 <button
 onClick={prevSlide}
 className="absolute w-8 h-8 text-gray-900 transform -translate-y-1/2 border-none shadow-lg btn btn-circle left-2 lg:left-4 top-1/2 bg-white/90 hover:bg-white sm:w-10 sm:h-10"
 >
 <FaChevronLeft className="text-xs sm:text-sm" />
 </button>
 <button
 onClick={nextSlide}
 className="absolute w-8 h-8 text-gray-900 transform -translate-y-1/2 border-none shadow-lg btn btn-circle right-2 lg:right-4 top-1/2 bg-white/90 hover:bg-white sm:w-10 sm:h-10"
 >
 <FaChevronRight className="text-xs sm:text-sm" />
 </button>

 {/* Indicateurs */}
 <div className="flex justify-center mt-3 space-x-1 lg:mt-4 lg:space-x-2">
 {slides.map((_, index) => (
 <button
 key={index}
 onClick={() => setCurrentSlide(index)}
 className={`btn btn-xs btn-circle ${index === currentSlide ? 'bg-[#43959A] border-[#43959A]' : 'bg-gray-400 border-gray-400'
 } w-2 h-2 sm:w-3 sm:h-3`}
 />
 ))}
 </div>
 </div>

 {/* Texte à côté du carousel */}
 <div className="order-1 space-y-4 lg:space-y-6 lg:order-2">
 <div>
 <h2 className="mb-4 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl lg:text-5xl lg:mb-6">
 Découvrez notre <span className="text-[#43959A]">écosystème</span> d'apprentissage
 </h2>
 <p className="mb-4 text-base text-gray-700 sm:text-lg lg:text-xl lg:mb-6">
 Chez GHOSTECH, nous créons un environnement où l'innovation rencontre l'éducation.
 Nos espaces sont conçus pour favoriser la créativité et la collaboration.
 </p>
 </div>

 <div className="space-y-3 lg:space-y-4">
 <div className="flex items-start">
 <div className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 bg-[#D2F5F2] rounded-full flex items-center justify-center flex-shrink-0 mt-1 border border-[#43959A]">
 <FaCheck className="text-[#43959A] text-xs sm:text-sm" />
 </div>
 <div className="ml-3 lg:ml-4">
 <h3 className="mb-1 text-base font-bold text-gray-900 sm:text-lg lg:text-lg">Programme Dynamique</h3>
 <p className="text-sm text-gray-600 sm:text-base">
 Notre programme pédagogique est un système dynamique qui s'ajuste en temps réel au niveau de chaque apprenant. Imaginez un parcours personnalisé où la difficulté évolue avec vous.
 </p>
 </div>
 </div>

 <div className="flex items-start">
 <div className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 bg-[#D2F5F2] rounded-full flex items-center justify-center flex-shrink-0 mt-1 border border-[#43959A]">
 <FaCheck className="text-[#43959A] text-xs sm:text-sm" />
 </div>
 <div className="ml-3 lg:ml-4">
 <h3 className="mb-1 text-base font-bold text-gray-900 sm:text-lg lg:text-lg">Expertise Pratique</h3>
 <p className="text-sm text-gray-600 sm:text-base">
 Apprentissage par la pratique avec des projets concrets et des cas réels
 </p>
 </div>
 </div>

 <div className="flex items-start">
 <div className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 bg-[#D2F5F2] rounded-full flex items-center justify-center flex-shrink-0 mt-1 border border-[#43959A]">
 <FaCheck className="text-[#43959A] text-xs sm:text-sm" />
 </div>
 <div className="ml-3 lg:ml-4">
 <h3 className="mb-1 text-base font-bold text-gray-900 sm:text-lg lg:text-lg">Communauté Dynamique</h3>
 <p className="text-sm text-gray-600 sm:text-base">
 Échangez et collaborez avec une communauté de passionnés et d'experts
 </p>
 </div>
 </div>
 </div>

 <div className="bg-[#D2F5F2] p-4 lg:p-6 rounded-xl lg:rounded-2xl border-2 border-[#43959A] shadow-lg">
 <h4 className="mb-2 text-base font-bold text-gray-900 lg:text-lg">Prochaine Session</h4>
 <p className="mb-3 text-sm text-gray-700 lg:text-base">
 Rejoignez notre communauté ce 29 novembre pour monter en compétences
 </p>
 <div className="flex flex-col items-center justify-between gap-2 sm:flex-row">
 <span className="text-sm font-semibold text-gray-900 lg:text-base">29 Novembre 2025</span>
 <Link
 to="/inscrire"
 className="btn btn-sm bg-[#43959A] hover:bg-[#3a8489] border-[#43959A] text-white text-xs lg:text-sm"
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
 <section className="py-12 sm:py-16 bg-gray-50">
 <div className="container px-2 mx-auto sm:px-4">
 <div className="relative">
 <div className="overflow-hidden">
 <div className="flex gap-6 py-4 animate-scroll sm:gap-8 lg:gap-12">
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
 className="flex items-center justify-center flex-shrink-0 w-20 h-10 transition-opacity duration-300 sm:w-24 sm:h-12 lg:w-32 lg:h-16 opacity-80 hover:opacity-100"
 >
 <img
 src={logo}
 alt={`Partenaire ${index + 1}`}
 className="object-contain max-w-full max-h-full"
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
 className="flex items-center justify-center flex-shrink-0 w-20 h-10 transition-opacity duration-300 sm:w-24 sm:h-12 lg:w-32 lg:h-16 opacity-80 hover:opacity-100"
 >
 <img
 src={logo}
 alt={`Partenaire ${index + 1}`}
 className="object-contain max-w-full max-h-full"
 />
 </div>
 ))}
 </div>
 </div>

 {/* Overlay gradients pour un effet de fondu */}
 <div className="absolute top-0 bottom-0 left-0 z-10 w-8 sm:w-12 lg:w-20 bg-gradient-to-r from-gray-50 to-transparent"></div>
 <div className="absolute top-0 bottom-0 right-0 z-10 w-8 sm:w-12 lg:w-20 bg-gradient-to-l from-gray-50 to-transparent"></div>
 </div>
 </div>
 </section>

 {/* SECTION PROGRAMMES AVEC IMAGES STATIQUES */}
 <section className="py-12 sm:py-16 lg:py-20 bg-white/50 backdrop-blur-sm">
 <div className="container px-2 mx-auto sm:px-4">
 <div className="grid items-center grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
 {/* Texte descriptif à gauche */}
 <div className="order-2 space-y-6 lg:space-y-8 lg:order-1">
 <div>
 <h2 className="mb-4 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl lg:text-5xl lg:mb-6">
 Des programmes <span className="text-[#43959A]">innovants</span> pour votre avenir
 </h2>
 <p className="mb-4 text-base text-gray-700 sm:text-lg lg:text-xl lg:mb-6">
 Chez GHOSTECH, nous concevons des formations qui répondent aux besoins actuels du marché numérique.
 Nos programmes allient théorie et pratique pour une montée en compétences rapide et efficace.
 </p>
 <p className="text-sm text-gray-600 sm:text-base lg:text-lg">
 Chaque spécialisation est développée en collaboration avec des experts du secteur
 pour garantir une adéquation parfaite avec les attentes des employeurs.
 </p>
 </div>

 {/* Chronomètre avec le même style */}
 <div className="grid justify-center grid-flow-col gap-3 text-center sm:gap-4 lg:gap-5 auto-cols-max">
 <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
 <span className="font-mono text-2xl countdown sm:text-3xl lg:text-4xl xl:text-5xl">
 <span style={{ "--value": timeLeft.days }}></span>
 </span>
 <span className="text-xs sm:text-sm">days</span>
 </div>
 <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
 <span className="font-mono text-2xl countdown sm:text-3xl lg:text-4xl xl:text-5xl">
 <span style={{ "--value": timeLeft.hours }}></span>
 </span>
 <span className="text-xs sm:text-sm">hours</span>
 </div>
 <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
 <span className="font-mono text-2xl countdown sm:text-3xl lg:text-4xl xl:text-5xl">
 <span style={{ "--value": timeLeft.minutes }}></span>
 </span>
 <span className="text-xs sm:text-sm">min</span>
 </div>
 <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
 <span className="font-mono text-2xl countdown sm:text-3xl lg:text-4xl xl:text-5xl">
 <span style={{ "--value": timeLeft.seconds }}></span>
 </span>
 <span className="text-xs sm:text-sm">sec</span>
 </div>
 </div>

 <Link
 to="/programme"
 className="btn bg-[#43959A] hover:bg-[#3a8489] border-[#43959A] text-white gap-2 text-sm sm:text-base lg:text-lg w-full sm:w-auto justify-center"
 >
 Voir tous les programmes
 <FaArrowRight className="text-xs sm:text-sm" />
 </Link>
 </div>

 {/* 4 Images statiques à droite avec effet parallaxe */}
 <div className="grid order-1 grid-cols-2 gap-3 sm:gap-4 lg:gap-6 lg:order-2">
 {programmeImages.map((item, index) => (
 <div
 key={index}
 className="transition-transform duration-700 ease-out transform parallax-item"
 style={{ transitionDelay: `${index * 100}ms` }}
 >
 <Link
 to={item.link}
 className="relative block overflow-hidden transition-all duration-300 transform border-2 border-white rounded-lg shadow-lg group lg:rounded-2xl hover:shadow-2xl hover:-translate-y-1 lg:hover:-translate-y-2"
 >
 <div className="overflow-hidden aspect-square">
 <img
 src={item.image}
 alt={item.title}
 className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
 />
 </div>
 <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-t from-black/80 via-transparent to-transparent group-hover:opacity-100">
 <div className="absolute bottom-0 left-0 right-0 p-2 text-white lg:p-4">
 <h3 className="mb-1 text-sm font-bold sm:text-base lg:text-lg">{item.title}</h3>
 <p className="text-xs text-gray-200 sm:text-sm">{item.description}</p>
 </div>
 </div>
 </Link>
 </div>
 ))}
 </div>
 </div>

 {/* Bannière supplémentaire avec style soft */}
 <div className="mt-12 lg:mt-16 bg-gradient-to-r from-[#7fb9b9] to-[#95c8c8] p-4 lg:p-8 text-white relative overflow-hidden shadow-lg ">
 <div
 className="absolute inset-0 bg-center bg-cover opacity-5"
 style={{ backgroundImage: 'url(/src/assets/pattern.svg)' }}
 ></div>
 <div className="relative z-10">
 <div className="grid items-center grid-cols-1 gap-4 text-center md:grid-cols-3 lg:gap-8">
 <div className="text-center md:text-left">
 <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 text-[#2a5d5d]">Prêt à commencer ?</h3>
 <p className="text-[#4a7a7a] text-sm lg:text-base">Rejoignez notre atelier</p>
 </div>
 <div className="text-center">
 <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#2a5d5d]">29 Novembre 2025</div>
 <div className="text-[#4a7a7a] text-sm lg:text-base">Date</div>
 </div>
 <div className="text-center">
 <Link
 to="/inscrire"
 className="btn bg-white text-[#43959A] hover:bg-[#f8fafa] border-white hover:border-[#7fb9b9] hover:text-[#2a5d5d] transition-all duration-300 text-sm lg:text-base w-full sm:w-auto"
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
 <section className="relative py-12 overflow-hidden sm:py-16 lg:py-20 bg-white/80 backdrop-blur-sm">
 {/* Fond avec effet parallaxe */}
 <div
 className="absolute inset-0 bg-center bg-cover opacity-5"
 style={{
 backgroundImage: 'url(/src/assets/tech-pattern.jpg)',
 backgroundAttachment: 'fixed'
 }}
 ></div>

 <div className="container relative z-10 px-2 mx-auto sm:px-4">
 <div className="mb-8 text-center lg:mb-16">
 <h2 className="mb-4 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl lg:text-5xl lg:mb-6">
 Pourquoi choisir <span className="text-[#43959A]">GHOSTECH</span> ?
 </h2>
 </div>

 <div className="grid max-w-5xl grid-cols-1 gap-4 mx-auto md:grid-cols-3 sm:gap-6 lg:gap-8">
 <div className="p-4 text-center transition-all duration-300 transform bg-white border border-gray-200 shadow-lg sm:p-6 rounded-xl lg:rounded-2xl hover:shadow-xl hover:-translate-y-1 lg:hover:-translate-y-2">
 <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-[#D2F5F2] rounded-full flex items-center justify-center mx-auto mb-3 lg:mb-4 border border-[#43959A]">
 <FaClock className="text-[#43959A] text-lg sm:text-xl lg:text-2xl" />
 </div>
 <h3 className="mb-2 text-lg font-bold text-gray-900 sm:text-xl lg:mb-3">Apprentissage Accéléré</h3>
 <p className="text-sm text-gray-600 sm:text-base">
 Méthode intensive qui vous permet d'acquérir des compétences professionnelles en quelques semaines
 </p>
 </div>

 <div className="p-4 text-center transition-all duration-300 transform bg-white border border-gray-200 shadow-lg sm:p-6 rounded-xl lg:rounded-2xl hover:shadow-xl hover:-translate-y-1 lg:hover:-translate-y-2">
 <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-[#E8F7F7] rounded-full flex items-center justify-center mx-auto mb-3 lg:mb-4 border border-[#173740]">
 <FaLaptopCode className="text-lg text-gray-900 sm:text-xl lg:text-2xl" />
 </div>
 <h3 className="mb-2 text-lg font-bold text-gray-900 sm:text-xl lg:mb-3">100% Pratique</h3>
 <p className="text-sm text-gray-600 sm:text-base">
 Des projets concrets et des cas réels pour une montée en compétences rapide
 </p>
 </div>

 <div className="p-4 text-center transition-all duration-300 transform bg-white border border-gray-200 shadow-lg sm:p-6 rounded-xl lg:rounded-2xl hover:shadow-xl hover:-translate-y-1 lg:hover:-translate-y-2">
 <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-[#D2F5F2] rounded-full flex items-center justify-center mx-auto mb-3 lg:mb-4 border border-[#43959A]">
 <FaUsers className="text-[#43959A] text-lg sm:text-xl lg:text-2xl" />
 </div>
 <h3 className="mb-2 text-lg font-bold text-gray-900 sm:text-xl lg:mb-3">Communauté Active</h3>
 <p className="text-sm text-gray-600 sm:text-base">
 Rejoignez une communauté de passionnés et bénéficiez d'un réseau professionnel solide
 </p>
 </div>
 </div>
 </div>
 </section>

 {/* SECTION AVANTAGES AVEC EFFET PARALLAXE */}
 <section
 className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-gray-900 to-[#173740] text-white relative overflow-hidden"
 style={{
 backgroundImage: 'url(/src/assets/arduino.webp)',
 backgroundAttachment: 'fixed',
 backgroundSize: 'cover',
 backgroundPosition: 'center'
 }}
 >
 {/* Overlay pour améliorer la lisibilité */}
 <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-[#173740]/90"></div>

 <div className="container relative z-10 px-2 mx-auto sm:px-4">
 <div
 ref={advantagesRef}
 className="max-w-4xl mx-auto transition-all duration-700 transform translate-y-8 opacity-0"
 >
 <h2 className="mb-8 text-2xl font-bold text-center sm:text-3xl md:text-4xl lg:text-5xl lg:mb-12">
 Ce que vous allez acquérir
 </h2>

 <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
 <div className="space-y-4 lg:space-y-6">
 <div className="flex items-start transition-transform duration-300 transform hover:translate-x-1 lg:hover:translate-x-2">
 <div className="flex items-center justify-center flex-shrink-0 w-6 h-6 mt-1 bg-white border border-gray-300 rounded-full sm:w-7 sm:h-7 lg:w-8 lg:h-8">
 <FaCheck className="text-[#43959A] text-xs sm:text-sm" />
 </div>
 <div className="ml-3 lg:ml-4">
 <h3 className="mb-1 text-lg font-bold sm:text-xl lg:mb-2">Compétences Techniques</h3>
 <p className="text-[#D2F5F2] text-sm sm:text-base">Développer des bases solides en Web, Mobile, Réseau et IoT.</p>
 </div>
 </div>

 <div className="flex items-start transition-transform duration-300 transform hover:translate-x-1 lg:hover:translate-x-2">
 <div className="flex items-center justify-center flex-shrink-0 w-6 h-6 mt-1 bg-white border border-gray-300 rounded-full sm:w-7 sm:h-7 lg:w-8 lg:h-8">
 <FaCheck className="text-[#43959A] text-xs sm:text-sm" />
 </div>
 <div className="ml-3 lg:ml-4">
 <h3 className="mb-1 text-lg font-bold sm:text-xl lg:mb-2">Initiation Tech</h3>
 <p className="text-[#D2F5F2] text-sm sm:text-base">Introduire les débutants au monde du numérique.</p>
 </div>
 </div>
 </div>

 <div className="space-y-4 lg:space-y-6">
 <div className="flex items-start transition-transform duration-300 transform hover:translate-x-1 lg:hover:translate-x-2">
 <div className="flex items-center justify-center flex-shrink-0 w-6 h-6 mt-1 bg-white border border-gray-300 rounded-full sm:w-7 sm:h-7 lg:w-8 lg:h-8">
 <FaCheck className="text-[#43959A] text-xs sm:text-sm" />
 </div>
 <div className="ml-3 lg:ml-4">
 <h3 className="mb-1 text-lg font-bold sm:text-xl lg:mb-2">Projet Pratique</h3>
 <p className="text-[#D2F5F2] text-sm sm:text-base">Accompagner les participants dans la réalisation d'un mini-projet.</p>
 </div>
 </div>

 <div className="flex items-start transition-transform duration-300 transform hover:translate-x-1 lg:hover:translate-x-2">
 <div className="flex items-center justify-center flex-shrink-0 w-6 h-6 mt-1 bg-white border border-gray-300 rounded-full sm:w-7 sm:h-7 lg:w-8 lg:h-8">
 <FaCheck className="text-[#43959A] text-xs sm:text-sm" />
 </div>
 <div className="ml-3 lg:ml-4">
 <h3 className="mb-1 text-lg font-bold sm:text-xl lg:mb-2">Esprit Innovant</h3>
 <p className="text-[#D2F5F2] text-sm sm:text-base">Stimuler la créativité et l'envie d'apprendre</p>
 </div>
 </div>
 </div>
 </div>
 </div>
 </div>
 </section>

 {/* SECTION FAQ */}
 <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-white/80 backdrop-blur-sm">
 <div className="container px-2 mx-auto sm:px-4">
 <div className="mb-8 text-center lg:mb-16">
 <h2 className="mb-4 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl lg:text-5xl lg:mb-6">
 Questions <span className="text-[#43959A]">Fréquentes</span>
 </h2>
 </div>

 <div className="grid max-w-6xl grid-cols-1 gap-8 mx-auto lg:grid-cols-2 lg:gap-12">
 {/* Colonne FAQ */}
 <div className="space-y-3 lg:space-y-4">
 <div className="collapse collapse-plus bg-white border-2 border-[#D2F5F2] hover:shadow-lg transition-shadow duration-300">
 <input type="radio" name="my-accordion-3" defaultChecked />
 <div className="collapse-title text-base sm:text-lg lg:text-xl font-bold text-[#488388]">Qui peut participer à l'atelier ?</div>
 <div className="text-sm text-gray-600 collapse-content sm:text-base">
 L'atelier est ouvert à tous ! Quelque soit ton niveau.
 </div>
 </div>
 <div className="collapse collapse-plus bg-white border-2 border-[#D2F5F2] hover:shadow-lg transition-shadow duration-300">
 <input type="radio" name="my-accordion-3" />
 <div className="collapse-title text-base sm:text-lg lg:text-xl font-bold text-[#488388]">Quel est le coût de l'atelier ?</div>
 <div className="text-sm text-gray-600 collapse-content sm:text-base">
 Une participation de 1 000 F est demandée pour soutenir notre association.
 </div>
 </div>
 <div className="collapse collapse-plus bg-white border-2 border-[#D2F5F2] hover:shadow-lg transition-shadow duration-300">
 <input type="radio" name="my-accordion-3" />
 <div className="collapse-title text-base sm:text-lg lg:text-xl font-bold text-[#488388]">Que dois-je apporter pour l'atelier ?</div>
 <div className="text-sm text-gray-600 collapse-content sm:text-base">
 Veuillez apporter votre ordinateur portable, son chargeur et, si possible, un kit Arduino pour l'atelier.
 </div>
 </div>
 </div>

 {/* Colonne Contact */}
 <div className="bg-black from-[#43959A] to-[#2E636A] text-white p-4 sm:p-6 lg:p-8 rounded-xl lg:rounded-2xl shadow-lg">
 <h3 className="mb-4 text-xl font-bold text-center sm:text-2xl lg:text-3xl lg:mb-6">Contactez-nous</h3>
 
 <div className="space-y-4 lg:space-y-6">
 <div className="flex items-center">
 <IoLocationSharp className="mr-3 text-lg lg:mr-4 lg:text-xl" />
 <div>
 <h4 className="text-base font-bold lg:text-lg">Adresse</h4>
 <p className="text-[#D2F5F2] text-sm lg:text-base">IUA, Corniche</p>
 </div>
 </div>

 <div className="flex items-center">
 <FaPhone className="mr-3 text-base lg:mr-4 lg:text-lg" />
 <div>
 <h4 className="text-base font-bold lg:text-lg">Téléphone</h4>
 <p className="text-[#D2F5F2] text-sm lg:text-base">+222 05 56 13 02 45</p>
 </div>
 </div>

 <div className="flex items-center">
 <MdOutlineMailOutline className="mr-3 text-lg lg:mr-4 lg:text-xl" />
 <div>
 <h4 className="text-base font-bold lg:text-lg">Email</h4>
 <p className="text-[#D2F5F2] text-sm lg:text-base">ghostech92@gmail.com</p>
 </div>
 </div>
 </div>
 </div>
 </div>
 </div>
 </section>

 {/* CTA FINAL AVEC EFFET PARALLAXE */}
 <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-gray-900 to-[#2E636A] text-white relative overflow-hidden mb-10">
 <div
 className="absolute inset-0 bg-center bg-cover opacity-20"
 style={{
 backgroundImage: 'url(/src/assets/space-bg.jpg)',
 backgroundAttachment: 'fixed'
 }}
 ></div>

 <div className="container relative z-10 px-2 mx-auto text-center sm:px-4">
 <h2 className="mb-4 text-2xl font-bold sm:text-3xl md:text-4xl lg:text-5xl lg:mb-6">
 Prêt à développer vos competences ?
 </h2>
 <p className="text-base sm:text-lg lg:text-xl text-[#D2F5F2] mb-6 lg:mb-8 max-w-2xl mx-auto">
 Rejoignez nous et démarrez votre avenir dans la tech
 </p>

 <div className="flex flex-col items-center justify-center gap-3 sm:flex-row lg:gap-4">
 <Link
 to="/inscrire"
 className="btn bg-[#43959A] hover:bg-[#3a8489] border-[#43959A] text-white text-sm sm:text-base lg:text-lg px-4 sm:px-6 lg:px-8 py-2 sm:py-3 w-full sm:w-auto"
 >
 S'inscrire maintenant
 </Link>
 <Link
 to="/"
 className="w-full px-4 py-2 text-sm text-white border-white btn btn-outline hover:bg-white hover:text-gray-900 sm:text-base lg:text-lg sm:px-6 lg:px-8 sm:py-3 sm:w-auto"
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

 /* Animation pour le défilement des partenaires */
 @keyframes scroll {
 0% {
 transform: translateX(0);
 }
 100% {
 transform: translateX(-50%);
 }
 }

 .animate-scroll {
 animation: scroll 30s linear infinite;
 }

 /* Responsive adjustments */
 @media (max-width: 640px) {
 .animate-scroll {
 animation: scroll 20s linear infinite;
 }
 }
 `}</style>
 </div>
 );
}
