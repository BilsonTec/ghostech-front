export default function inscrire() {
  return (
    <div className="min-h-screen flex">
      {/* Partie gauche avec le dégradé */}
      <div className="hidden lg:flex lg:flex-1 bg-gradient-to-br from-blue-50 to-green-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-lg mx-auto w-full">
          <div className="flex flex-col justify-center space-y-8 h-full">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#173740' }}>
                Rejoignez l'Atelier <span style={{ color: '#43959A' }}>GHOSTECH</span>
              </h1>
              <p className="text-xl mb-6" style={{ color: '#2E636A' }}>
                Transformez votre passion pour la technologie en compétences concrètes 
                avec nos formations intensives et pratiques.
              </p>
            </div>

            {/* Les sections avec les ✓ ont été supprimées comme demandé */}
          </div>
        </div>
      </div>

      {/* Partie droite avec le formulaire - Fond blanc sur toute la page */}
      <div className="flex-1 bg-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md mx-auto w-full">
          <div className="bg-white rounded-2xl flex flex-col h-full">
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