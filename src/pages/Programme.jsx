// pages/Programme.jsx
import { Link } from "react-router-dom";
import { 
  FaLaptopCode, 
  FaMobile, 
  FaNetworkWired, 
  FaCloud,
  FaCoffee,
  FaUtensils,
  FaRocket,
  FaUsers
} from "react-icons/fa";

export default function Programme() {
  const programme = [
    { 
      time: "08:00 - 08:30", 
      title: "Accueil & Café Networking", 
      description: "Arrivée des participants et session de networking autour d'un café",
      icon: FaCoffee,
      domain: "general"
    },
    { 
      time: "08:30 - 09:00", 
      title: "Opening Keynote", 
      description: "Présentation GHOSTECH et objectifs de la journée",
      icon: FaRocket,
      domain: "general"
    },
    { 
      time: "09:00 - 10:30", 
      title: "Web Dev Bootcamp", 
      description: "HTML5, CSS3, JavaScript moderne - Création site one-page",
      icon: FaLaptopCode,
      domain: "web"
    },
    { 
      time: "10:30 - 10:45", 
      title: "Pause Energétique", 
      description: "Break café et échanges techniques",
      icon: FaCoffee,
      domain: "break"
    },
    { 
      time: "10:45 - 12:15", 
      title: "Mobile First", 
      description: "React Native basics - Build your first mobile app",
      icon: FaMobile,
      domain: "mobile"
    },
    { 
      time: "12:15 - 13:15", 
      title: "Lunch & Learn", 
      description: "Déjeuner avec discussions sur les trends tech",
      icon: FaUtensils,
      domain: "break"
    },
    { 
      time: "13:15 - 14:30", 
      title: "IoT Workshop", 
      description: "Arduino basics - Station météo connectée",
      icon: FaCloud,
      domain: "iot"
    },
    { 
      time: "14:30 - 15:00", 
      title: "Networking & Clôture", 
      description: "Échanges, feedback et perspectives futures",
      icon: FaUsers,
      domain: "general"
    }
  ];

  const getDomainColor = (domain) => {
    const colors = {
      web: "text-[#43959A]",
      mobile: "text-[#3a8489]",
      iot: "text-[#2E636A]", 
      reseau: "text-[#173740]",
      general: "text-gray-600",
      break: "text-gray-500"
    };
    return colors[domain] || "text-gray-500";
  };

  const getDomainText = (domain) => {
    const texts = {
      web: "WEB",
      mobile: "MOBILE", 
      iot: "IOT",
      reseau: "RESEAU",
      general: "GENERAL",
      break: "PAUSE"
    };
    return texts[domain] || domain.toUpperCase();
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Minimaliste */}
      <section className="border-b border-gray-200 py-16">
        <div className="container mx-auto px-4 p-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-light text-gray-900 mb-4">
              Programme
            </h1>
            <p className="text-lg text-gray-600 mb-2">
              29 Novembre 2025 • 8h00 - 15h00
            </p>
            <p className="text-gray-500">
              IUA, Corniche
            </p>
          </div>
        </div>
      </section>

      {/* Programme Table - Version Ultra Pro */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Table Header */}
            <div className="border-b border-gray-300 pb-4 mb-8">
              <div className="grid grid-cols-12 gap-4 text-sm font-medium text-gray-600">
                <div className="col-span-3 md:col-span-2">HORAIRE</div>
                <div className="col-span-6 md:col-span-8">ACTIVITÉ</div>
                <div className="col-span-3 md:col-span-2 text-right">DOMAINE</div>
              </div>
            </div>

            {/* Table Body */}
            <div className="space-y-1">
              {programme.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div 
                    key={index}
                    className="grid grid-cols-12 gap-4 py-5 border-b border-gray-100 hover:bg-gray-50 transition-colors duration-150"
                  >
                    {/* Time Column */}
                    <div className="col-span-3 md:col-span-2">
                      <div className="flex items-center space-x-3">
                        <IconComponent className="text-gray-400 text-lg flex-shrink-0" />
                        <div>
                          <div className="font-medium text-gray-900 text-sm">
                            {item.time.split(' - ')[0]}
                          </div>
                          <div className="text-xs text-gray-500">
                            {item.time.split(' - ')[1]}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Activity Column */}
                    <div className="col-span-6 md:col-span-8">
                      <h3 className="font-medium text-gray-900 text-sm mb-1">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 text-xs leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    {/* Domain Column */}
                    <div className="col-span-3 md:col-span-2 text-right">
                      <span 
                        className={`inline-block px-2 py-1 text-xs font-medium ${getDomainColor(item.domain)} uppercase tracking-wide`}
                      >
                        {getDomainText(item.domain)}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Legend */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h3 className="text-sm font-medium text-gray-900 mb-4">Légende</h3>
              <div className="flex flex-wrap gap-4 text-xs">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-[#43959A]"></div>
                  <span className="text-gray-600">Web Development</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-[#3a8489]"></div>
                  <span className="text-gray-600">Mobile</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-[#2E636A]"></div>
                  <span className="text-gray-600">IoT</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-gray-600"></div>
                  <span className="text-gray-600">Général</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-gray-400"></div>
                  <span className="text-gray-600">Pause</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-8 h-8 bg-gray-200 flex items-center justify-center mx-auto mb-3">
                  <FaLaptopCode className="text-gray-600" />
                </div>
                <h3 className="font-medium text-gray-900 mb-1">4 Domaines</h3>
                <p className="text-sm text-gray-600">Web, Mobile, IoT, Réseaux</p>
              </div>

              <div className="text-center">
                <div className="w-8 h-8 bg-gray-200 flex items-center justify-center mx-auto mb-3">
                  <FaNetworkWired className="text-gray-600" />
                </div>
                <h3 className="font-medium text-gray-900 mb-1">Matériel Fourni</h3>
                <p className="text-sm text-gray-600">Tout l'équipement nécessaire</p>
              </div>

              <div className="text-center">
                <div className="w-8 h-8 bg-gray-200 flex items-center justify-center mx-auto mb-3">
                  <FaUsers className="text-gray-600" />
                </div>
                <h3 className="font-medium text-gray-900 mb-1">Experts</h3>
                <p className="text-sm text-gray-600">Encadrement professionnel</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 border-t border-gray-200">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-light text-gray-900 mb-4">Rejoindre la formation</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Inscrivez-vous pour réserver votre place dans cette journée intensive
          </p>
          
          <Link 
            to="/inscrire" 
            className="inline-block bg-gray-900 text-white px-8 py-3 font-medium hover:bg-gray-800 transition-colors duration-200 text-sm"
          >
            S'inscrire
          </Link>
        </div>
      </section>
    </div>
  );
}