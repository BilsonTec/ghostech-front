export default function inscrire() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          
          {/* Texte à gauche */}
          <div className="flex flex-col justify-center space-y-8">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#173740' }}>
                Rejoignez l'Atelier <span style={{ color: '#43959A' }}>GHOSTECH</span>
              </h1>
              <p className="text-xl mb-6" style={{ color: '#2E636A' }}>
                Transformez votre passion pour la technologie en compétences concrètes 
                avec nos formations intensives et pratiques.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span style={{ color: '#43959A' }}>✓</span>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-bold mb-1" style={{ color: '#173740' }}>Formation Pratique</h3>
                  <p style={{ color: '#2E636A' }}>Apprentissage hands-on avec des projets réels et du matériel professionnel</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span style={{ color: '#43959A' }}>✓</span>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-bold mb-1" style={{ color: '#173740' }}>Expertise Confirmée</h3>
                  <p style={{ color: '#2E636A' }}>Encadrement par des professionnels du secteur avec années d'expérience</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span style={{ color: '#43959A' }}>✓</span>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-bold mb-1" style={{ color: '#173740' }}>Certification</h3>
                  <p style={{ color: '#2E636A' }}>Obtenez une certification reconnue valorisant vos nouvelles compétences</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span style={{ color: '#43959A' }}>✓</span>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-bold mb-1" style={{ color: '#173740' }}>Communauté</h3>
                  <p style={{ color: '#2E636A' }}>Intégrez un réseau de passionnés et bénéficiez d'un accompagnement continu</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg border border-blue-100 mt-auto">
              <h4 className="font-bold text-lg mb-2" style={{ color: '#173740' }}>Prochaine Session</h4>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-2xl font-bold" style={{ color: '#43959A' }}>29 Novembre 2025</p>
                  <p className="text-sm" style={{ color: '#2E636A' }}>IUA, Corniche</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-semibold" style={{ color: '#173740' }}>Places limitées</p>
                  <p className="text-xs" style={{ color: '#2E636A' }}>Inscription obligatoire</p>
                </div>
              </div>
            </div>
          </div>

          {/* Formulaire à droite - Fond blanc sur toute la hauteur */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col h-full">
            <div className="p-8 flex-1 flex flex-col">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-2" style={{ color: '#173740' }}>
                  Inscription
                </h2>
                <p className="text-sm" style={{ color: '#2E636A' }}>
                  Rejoignez l'Atelier GHOSTECH
                </p>
              </div>

              <form className="space-y-6 flex-1 flex flex-col">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: '#173740' }}>
                      Nom
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full p-4 border-b-2 focus:outline-none focus:border-blue-500 transition-colors"
                      style={{ 
                        borderColor: '#D2F5F2',
                        color: '#173740',
                        backgroundColor: 'transparent'
                      }}
                      placeholder="Votre nom"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: '#173740' }}>
                      Prénom
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full p-4 border-b-2 focus:outline-none focus:border-blue-500 transition-colors"
                      style={{ 
                        borderColor: '#D2F5F2',
                        color: '#173740',
                        backgroundColor: 'transparent'
                      }}
                      placeholder="Votre prénom"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: '#173740' }}>
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full p-4 border-b-2 focus:outline-none focus:border-blue-500 transition-colors"
                    style={{ 
                      borderColor: '#D2F5F2',
                      color: '#173740',
                      backgroundColor: 'transparent'
                    }}
                    placeholder="votre@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: '#173740' }}>
                    Matricule
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full p-4 border-b-2 focus:outline-none focus:border-blue-500 transition-colors"
                    style={{ 
                      borderColor: '#D2F5F2',
                      color: '#173740',
                      backgroundColor: 'transparent'
                    }}
                    placeholder="Votre matricule"
                  />
                </div>

                <div className="mt-auto">
                  <button
                    type="submit"
                    className="w-full py-4 text-white font-medium text-lg transition-all duration-300 hover:opacity-90"
                    style={{ 
                      backgroundColor: '#43959A',
                      color: '#D2F5F2'
                    }}
                  >
                    Payer avec Wave
                  </button>

                  <div className="text-center mt-4">
                    <p className="text-xs" style={{ color: '#2E636A' }}>
                      Redirection vers Wave Business après validation
                    </p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}