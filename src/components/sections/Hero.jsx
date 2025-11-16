// components/sections/Hero.jsx
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="hero min-h-screen bg-gradient-to-br from-primary to-secondary relative">
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content relative z-10">
        <div className="max-w-4xl">
          <div className="animate-fade-down">
            <h1 className="mb-5 text-5xl md:text-7xl font-bold bg-gradient-to-r from-accent to-white bg-clip-text text-transparent">
              GHOSTECH
            </h1>
            <p className="mb-5 text-2xl font-light">
              Atelier de Formation Technologique
            </p>
          </div>
          
          <div className="stats shadow-lg bg-base-100/20 backdrop-blur-md text-base-content my-8 animate-fade-up">
            <div className="stat">
              <div className="stat-title text-primary-content">Date</div>
              <div className="stat-value text-lg text-white">29 Nov 2025</div>
            </div>
            
            <div className="stat">
              <div className="stat-title text-primary-content">Lieu</div>
              <div className="stat-value text-lg text-white">IUA, Corniche</div>
            </div>
            
            <div className="stat">
              <div className="stat-title text-primary-content">Participants</div>
              <div className="stat-value text-lg text-white">Tous</div>
            </div>
          </div>

          <p className="mb-8 text-xl max-w-2xl mx-auto leading-relaxed">
            Plongez dans l'univers du développement avec nos ateliers pratiques 
            <span className="text-accent font-semibold"> Web, Mobile, IoT et Réseaux</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-up">
            <Link to="/inscrire" className="btn btn-accent btn-lg rounded-full px-8 gap-2 transform hover:scale-105 transition-all duration-300">
              <span>🚀</span>
              S'inscrire Maintenant
            </Link>
            <Link to="/programme" className="btn btn-outline btn-lg rounded-full text-white border-white hover:bg-white hover:text-primary">
              Explorer les Ateliers
            </Link>
          </div>
        </div>
      </div>
      
      {/* ÉLÉMENTS DÉCORATIFS */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
}