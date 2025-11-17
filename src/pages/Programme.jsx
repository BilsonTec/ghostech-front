// pages/Programme.jsx
import { Link } from "react-router-dom";
import { useState } from "react";
import { 
  FaCheck, 
  FaLaptopCode, 
  FaMobile, 
  FaNetworkWired, 
  FaCloud, 
  FaArrowRight, 
  FaUsers, 
  FaLightbulb, 
  FaRocket,
  FaClock,
  FaChalkboardTeacher,
  FaCertificate,
  FaStar
} from "react-icons/fa";

export default function Programme() {
  const [activeProgram, setActiveProgram] = useState("web");

  const programmes = {
    web: {
      titre: "Développement Web Full Stack",
      description: "Maîtrisez les technologies modernes du développement web front-end et back-end pour créer des applications web performantes et évolutives.",
      duree: "12 semaines",
      niveau: "Débutant à Avancé",
      technologies: ["HTML5/CSS3", "JavaScript ES6+", "React.js", "Node.js", "Express", "MongoDB", "Git/GitHub"],
      projets: [
        "Site e-commerce complet",
        "Application de gestion de tâches",
        "API RESTful",
        "Plateforme de blogging"
      ],
      competences: [
        "Développement front-end moderne",
        "Architecture back-end robuste",
        "Base de données NoSQL",
        "Déploiement et hébergement"
      ],
      image: "/src/assets/coder.gif",
      couleur: "from-[#43959A] to-[#2E636A]"
    },
    mobile: {
      titre: "Développement Mobile",
      description: "Créez des applications mobiles natives et cross-platform pour iOS et Android avec les frameworks les plus populaires.",
      duree: "10 semaines",
      niveau: "Intermédiaire",
      technologies: ["React Native", "Flutter", "Firebase", "Redux", "API Integration", "App Store Deployment"],
      projets: [
        "Application de messagerie",
        "App de fitness et santé",
        "Marketplace mobile",
        "Réseau social"
      ],
      competences: [
        "Développement cross-platform",
        "UI/UX mobile",
        "Intégration d'APIs",
        "Publication sur les stores"
      ],
      image: "/src/assets/robo.gif",
      couleur: "from-[#3a8489] to-[#25545a]"
    },
    iot: {
      titre: "Internet des Objets",
      description: "Explorez le monde connecté avec l'IoT et créez des dispositifs intelligents qui interagissent avec leur environnement.",
      duree: "14 semaines",
      niveau: "Débutant à Intermédiaire",
      technologies: ["Arduino", "Raspberry Pi", "Capteurs", "Actuateurs", "MQTT", "Python", "C++"],
      projets: [
        "Station météo connectée",
        "Système de domotique",
        "Jardin intelligent",
        "Système de surveillance"
      ],
      competences: [
        "Programmation embarquée",
        "Conception de circuits",
        "Communication sans fil",
        "Traitement de données capteurs"
      ],
      image: "/src/assets/giphy.gif",
      couleur: "from-[#2E636A] to-[#173740]"
    },
    reseaux: {
      titre: "Réseaux & Sécurité",
      description: "Maîtrisez l'infrastructure réseau et les principes de sécurité pour protéger les systèmes et données.",
      duree: "16 semaines",
      niveau: "Intermédiaire à Avancé",
      technologies: ["TCP/IP", "DNS", "Firewall", "VPN", "Cryptographie", "Ethical Hacking", "Cloud Security"],
      projets: [
        "Configuration réseau d'entreprise",
        "Audit de sécurité",
        "Système de détection d'intrusion",
        "Infrastructure cloud sécurisée"
      ],
      competences: [
        "Architecture réseau",
        "Sécurisation des systèmes",
        "Tests de pénétration",
        "Gestion des incidents"
      ],
      image: "/src/assets/200.webp",
      couleur: "from-[#173740] to-[#1f4852]"
    }
  };

  const butsAteliers = [
    {
      id: 1,
      titre: "Développer des bases solides",
      description: "Développer des bases solides en Web, Mobile, Réseau et IoT.",
      icon: FaCheck,
      couleur: "#43959A"
    },
    {
      id: 2,
      titre: "Compétences Techniques",
      description: "Introduire les débutants au monde du numérique.",
      icon: FaUsers,
      couleur: "#2E636A"
    },
    {
      id: 3,
      titre: "Projet Pratique",
      description: "Accompagner les participants dans la réalisation d'un mini-projet.",
      icon: FaRocket,
      couleur: "#173740"
    },
    {
      id: 4,
      titre: "Esprit Innovant",
      description: "Stimuler la créativité et l'envie d'apprendre.",
      icon: FaLightbulb,
      couleur: "#3a8489"
    }
  ];

  const programmeActuel = programmes[activeProgram];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      {/* Header Navigation */}
 

      {/* Hero Section Revisité */}
      <section className="bg-gradient-to-br from-[#173740] to-[#2E636A] text-white py-20 relative overflow-hidden">
        {/* Éléments décoratifs */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-20 h-20 bg-[#43959A] rounded-full"></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-[#D2F5F2] rounded-full"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-[#43959A] rounded-full"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Nos <span className="text-[#D2F5F2]">Programmes</span> de Formation
          </h1>
          <p className="text-xl md:text-2xl text-[#D2F5F2] mb-8 max-w-3xl mx-auto">
            Des formations intensives et pratiques pour maîtriser les technologies les plus demandées
          </p>
          <p className="text-lg text-[#D2F5F2] max-w-4xl mx-auto mb-8">
            Découvrez des programmes complets conçus pour transformer votre passion en expertise professionnelle
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <div className="flex items-center bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
              <FaClock className="mr-2 text-[#D2F5F2]" />
              <span>10-16 semaines intensives</span>
            </div>
            <div className="flex items-center bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
              <FaChalkboardTeacher className="mr-2 text-[#D2F5F2]" />
              <span>Mentors experts du secteur</span>
            </div>
            <div className="flex items-center bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
              <FaCertificate className="mr-2 text-[#D2F5F2]" />
              <span>Certification reconnue</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
            <Link 
              to="/inscrire" 
              className="bg-[#43959A] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#3a8489] transition-all transform hover:scale-105 duration-300"
            >
              S'inscrire maintenant
            </Link>
            <a 
              href="#programmes" 
              className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-[#173740] transition-all transform hover:scale-105 duration-300"
            >
              Découvrir les programmes
            </a>
          </div>
        </div>
      </section>

      {/* Navigation des Programmes */}
      <section className="py-12 bg-white/50 backdrop-blur-sm sticky top-20 z-40 border-b border-[#D2F5F2]">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {Object.entries(programmes).map(([key, programme]) => (
              <button
                key={key}
                onClick={() => setActiveProgram(key)}
                className={`flex items-center px-6 py-3 rounded-full font-semibold transition-all ${
                  activeProgram === key 
                  ? `bg-gradient-to-r ${programme.couleur} text-white shadow-lg` 
                  : "bg-white text-[#2E636A] hover:bg-[#D2F5F2] border border-[#D2F5F2]"
                }`}
              >
                {key === 'web' && <FaLaptopCode className="mr-2" />}
                {key === 'mobile' && <FaMobile className="mr-2" />}
                {key === 'iot' && <FaCloud className="mr-2" />}
                {key === 'reseaux' && <FaNetworkWired className="mr-2" />}
                {programme.titre.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Section Buts des Ateliers */}
      <section className="py-20 bg-white/30 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#173740] mb-6">
              Objectifs des <span className="text-[#43959A]">Programmes</span>
            </h2>
            <p className="text-xl text-[#2E636A] max-w-3xl mx-auto">
              Notre mission : vous accompagner dans l'acquisition de compétences concrètes 
              et pratiques dans les domaines du numérique les plus porteurs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {butsAteliers.map((but) => {
              const IconComponent = but.icon;
              
              return (
                <div 
                  key={but.id}
                  className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border border-[#D2F5F2] text-center transform hover:-translate-y-2"
                >
                  <div 
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6"
                    style={{ backgroundColor: `${but.couleur}20` }}
                  >
                    <IconComponent className="text-2xl" style={{ color: but.couleur }} />
                  </div>
                  <h3 className="text-xl font-bold text-[#173740] mb-4">{but.titre}</h3>
                  <p className="text-[#2E636A] leading-relaxed">{but.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section Programme Actuel Détaillé */}
      <section id="programmes" className="py-20 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Colonne de gauche - Image et infos rapides */}
            <div className="space-y-8">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={programmeActuel.image} 
                  alt={programmeActuel.titre}
                  className="w-full h-64 object-cover"
                />
              </div>

              {/* Infos rapides */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-[#D2F5F2]">
                <h3 className="text-xl font-bold text-[#173740] mb-4">Informations du programme</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-2 border-b border-[#D2F5F2]">
                    <span className="text-[#2E636A] font-semibold">Durée</span>
                    <span className="flex items-center text-[#173740] font-bold">
                      <FaClock className="mr-2 text-[#43959A]" />
                      {programmeActuel.duree}
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-[#D2F5F2]">
                    <span className="text-[#2E636A] font-semibold">Niveau</span>
                    <span className="flex items-center text-[#173740] font-bold">
                      <FaStar className="mr-2 text-[#43959A]" />
                      {programmeActuel.niveau}
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-[#D2F5F2]">
                    <span className="text-[#2E636A] font-semibold">Format</span>
                    <span className="flex items-center text-[#173740] font-bold">
                      <FaUsers className="mr-2 text-[#43959A]" />
                      En présentiel
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-[#2E636A] font-semibold">Certification</span>
                    <span className="flex items-center text-[#173740] font-bold">
                      <FaCertificate className="mr-2 text-[#43959A]" />
                      Incluse
                    </span>
                  </div>
                </div>

                <Link 
                  to="/inscrire" 
                  className={`w-full mt-6 bg-gradient-to-r ${programmeActuel.couleur} text-white py-4 rounded-xl font-bold text-lg text-center block hover:shadow-xl transition-all transform hover:scale-105 duration-300`}
                >
                  S'inscrire à ce programme
                </Link>
              </div>
            </div>

            {/* Colonne de droite - Détails du programme */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold text-[#173740] mb-4">
                  {programmeActuel.titre}
                </h2>
                <p className="text-xl text-[#2E636A] mb-6">
                  {programmeActuel.description}
                </p>
              </div>

              {/* Technologies */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-[#D2F5F2]">
                <h3 className="text-2xl font-bold text-[#173740] mb-4 flex items-center">
                  <FaLaptopCode className="mr-3 text-[#43959A]" />
                  Technologies maîtrisées
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {programmeActuel.technologies.map((tech, index) => (
                    <div key={index} className="flex items-center">
                      <FaCheck className="text-[#43959A] mr-3 flex-shrink-0" />
                      <span className="text-[#2E636A]">{tech}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Projets */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-[#D2F5F2]">
                <h3 className="text-2xl font-bold text-[#173740] mb-4 flex items-center">
                  <FaRocket className="mr-3 text-[#43959A]" />
                  Projets réalisés
                </h3>
                <ul className="space-y-3">
                  {programmeActuel.projets.map((projet, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-6 h-6 bg-[#D2F5F2] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <FaCheck className="text-[#43959A] text-xs" />
                      </div>
                      <span className="ml-3 text-[#2E636A]">{projet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Compétences acquises */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-[#D2F5F2]">
                <h3 className="text-2xl font-bold text-[#173740] mb-4 flex items-center">
                  <FaCertificate className="mr-3 text-[#43959A]" />
                  Compétences professionnelles
                </h3>
                <div className="grid grid-cols-1 gap-3">
                  {programmeActuel.competences.map((competence, index) => (
                    <div key={index} className="bg-[#D2F5F2] p-4 rounded-xl">
                      <span className="text-[#173740] font-semibold">{competence}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Avantages */}
      <section className="py-20 bg-gradient-to-r from-[#43959A] to-[#173740] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-32 h-32 bg-[#D2F5F2] rounded-full"></div>
          <div className="absolute bottom-20 left-20 w-24 h-24 bg-[#43959A] rounded-full"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Pourquoi choisir nos <span className="text-[#D2F5F2]">programmes</span> ?
              </h2>
              <p className="text-xl text-[#D2F5F2] mb-8">
                Une approche pédagogique centrée sur la pratique et l'excellence
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start transform hover:translate-x-2 transition-transform duration-300">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <FaCheck className="text-[#43959A] text-sm" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-bold mb-1">Encadrement personnalisé</h3>
                    <p className="text-[#D2F5F2]">Des formateurs expérimentés pour vous accompagner pas à pas</p>
                  </div>
                </div>

                <div className="flex items-start transform hover:translate-x-2 transition-transform duration-300">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <FaCheck className="text-[#43959A] text-sm" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-bold mb-1">Matériel high-tech</h3>
                    <p className="text-[#D2F5F2]">Tout le matériel nécessaire est mis à disposition</p>
                  </div>
                </div>

                <div className="flex items-start transform hover:translate-x-2 transition-transform duration-300">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <FaCheck className="text-[#43959A] text-sm" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-bold mb-1">Approche pratique</h3>
                    <p className="text-[#D2F5F2]">Apprentissage par la pratique avec des cas concrets</p>
                  </div>
                </div>

                <div className="flex items-start transform hover:translate-x-2 transition-transform duration-300">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <FaCheck className="text-[#43959A] text-sm" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-bold mb-1">Communauté active</h3>
                    <p className="text-[#D2F5F2]">Intégrez une communauté de passionnés du numérique</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/10 rounded-2xl p-8 text-white backdrop-blur-sm">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4">Prochaine Session</h3>
                <div className="text-4xl font-bold mb-2">29 Novembre 2025</div>
                <p className="text-[#D2F5F2] mb-6">IUA, Corniche</p>
                
                <div className="bg-white/10 rounded-xl p-4 mb-6">
                  <h4 className="font-bold mb-2">Au programme :</h4>
                  <ul className="text-left space-y-2 text-[#D2F5F2]">
                    <li className="flex items-center">
                      <FaCheck className="text-[#D2F5F2] mr-2" />
                      Session d'initiation aux 4 domaines
                    </li>
                    <li className="flex items-center">
                      <FaCheck className="text-[#D2F5F2] mr-2" />
                      Travaux pratiques guidés
                    </li>
                    <li className="flex items-center">
                      <FaCheck className="text-[#D2F5F2] mr-2" />
                      Réalisation de projets complets
                    </li>
                    <li className="flex items-center">
                      <FaCheck className="text-[#D2F5F2] mr-2" />
                      Support individualisé expert
                    </li>
                  </ul>
                </div>

                <Link 
                  to="/inscrire" 
                  className="inline-block bg-white text-[#43959A] px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors transform hover:scale-105 duration-300"
                >
                  Réserver ma place
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-r from-[#173740] to-[#2E636A] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-1/4 w-16 h-16 bg-[#43959A] rounded-full"></div>
          <div className="absolute bottom-10 left-1/3 w-20 h-20 bg-[#D2F5F2] rounded-full"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Prêt à transformer votre carrière ?
          </h2>
          <p className="text-xl text-[#D2F5F2] mb-8 max-w-2xl mx-auto">
            Rejoignez nos programmes d'excellence et démarrez votre avenir dans la tech
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
    </div>
  );
}