// @ts-nocheck
import { useState, useEffect } from 'react';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase';

const DashboardInscrits = () => {
  const [inscrits, setInscrits] = useState([]);
  const [loading, setLoading] = useState(true);
  const [accesAutorise, setAccesAutorise] = useState(false);
  const [motDePasse, setMotDePasse] = useState('');

  const verifierMotDePasse = () => {
    if (motDePasse === 'GHOSTECH2024') {
      setAccesAutorise(true);
      localStorage.setItem('adminAcces', 'true');
    } else {
      alert('Mot de passe incorrect');
    }
  };

  useEffect(() => {
    const accesStocke = localStorage.getItem('adminAcces');
    if (accesStocke === 'true') {
      setAccesAutorise(true);
    }
  }, []);

  useEffect(() => {
    if (!accesAutorise) return;

    const unsubscribe = onSnapshot(collection(db, 'inscriptions'), (snapshot) => {
      const inscritsData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setInscrits(inscritsData);
      setLoading(false);
    });

    return () => unsubscribe();
  }, [accesAutorise]);

  // Page de connexion
  if (!accesAutorise) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: '#191D27' }}>
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full mx-4">
          <h2 className="text-2xl font-light mb-6 text-center" style={{ color: '#173740' }}>
            Accès Administrateur
          </h2>
          <div className="space-y-4">
            <input
              type="password"
              value={motDePasse}
              onChange={(e) => setMotDePasse(e.target.value)}
              placeholder="Entrez le mot de passe"
              className="w-full p-3 border-2 rounded focus:outline-none"
              style={{ borderColor: '#D2F5F2', color: '#173740' }}
              onKeyPress={(e) => e.key === 'Enter' && verifierMotDePasse()}
            />
            <button
              onClick={verifierMotDePasse}
              className="w-full py-3 text-white font-medium rounded transition-all"
              style={{ backgroundColor: '#43959A' }}
            >
              Accéder au Dashboard
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: '#191D27' }}>
        <div className="text-xl" style={{ color: '#38F4F3' }}>Chargement des inscrits...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-6" style={{ backgroundColor: '#191D27' }}>
      {/* Header avec bouton de déconnexion - Style moderne */}
      <div className="flex justify-between items-center mb-12">
        <div>
          <h1 className="text-4xl font-light mb-3 tracking-tight" style={{ color: '#D2F5F2' }}>
            Liste des Inscrits
          </h1>
          <div className="w-20 h-1 rounded-full" style={{ backgroundColor: '#38F4F3' }}></div>
          <p className="mt-2 text-lg" style={{ color: '#2E636A' }}>
            {inscrits.length} inscrit(s) au total
          </p>
        </div>
        <button
          onClick={() => {
            setAccesAutorise(false);
            localStorage.removeItem('adminAcces');
          }}
          className="btn btn-soft btn-primary px-6 py-2.5  text-white font-medium "
          style={{ backgroundColor: '#43959A' }}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = '#40B8BC';
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = '#43959A';
          }}
        >
          Déconnexion
        </button>
      </div>

      {/* Tableau - Design minimaliste moderne */}
      <div 
        className="rounded-1xl backdrop-blur-sm border overflow-hidden"
        style={{ 
          backgroundColor: 'rgba(23, 55, 64, 0.4)',
          borderColor: 'rgba(210, 245, 242, 0.1)'
        }}
      >
        <div className="p-6 border-b" style={{ borderColor: 'rgba(210, 245, 242, 0.1)' }}>
          <h2 className="text-xl font-light" style={{ color: '#D2F5F2' }}>
            Détails des inscrits
          </h2>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr style={{ backgroundColor: 'rgba(23, 55, 64, 0.8)' }}>
                <th className="text-left p-4 font-normal text-sm uppercase tracking-wider" style={{ color: '#D2F5F2' }}>
                  Matricule
                </th>
                <th className="text-left p-4 font-normal text-sm uppercase tracking-wider" style={{ color: '#D2F5F2' }}>
                  Nom
                </th>
                <th className="text-left p-4 font-normal text-sm uppercase tracking-wider" style={{ color: '#D2F5F2' }}>
                  Prénom
                </th>
                <th className="text-left p-4 font-normal text-sm uppercase tracking-wider" style={{ color: '#D2F5F2' }}>
                  Email
                </th>
                <th className="text-left p-4 font-normal text-sm uppercase tracking-wider" style={{ color: '#D2F5F2' }}>
                  Date d'inscription
                </th>
              </tr>
            </thead>
            <tbody>
              {inscrits.map((inscrit, index) => (
                <tr 
                  key={inscrit.id}
                  className="transition-all duration-200 hover:bg-opacity-20"
                  style={{ 
                    backgroundColor: index % 2 === 0 ? 'transparent' : 'rgba(23, 55, 64, 0.2)'
                  }}
                >
                  <td className="p-4 font-mono text-sm" style={{ color: '#38F4F3' }}>
                    {inscrit.matricule}
                  </td>
                  <td className="p-4 font-medium" style={{ color: '#D2F5F2' }}>
                    {inscrit.nom}
                  </td>
                  <td className="p-4" style={{ color: '#D2F5F2' }}>
                    {inscrit.prenom}
                  </td>
                  <td className="p-4" style={{ color: '#D2F5F2' }}>
                    {inscrit.email}
                  </td>

                  <td className="p-4 text-sm" style={{ color: '#2E636A' }}>
                    {inscrit.dateInscription 
                      ? new Date(inscrit.dateInscription).toLocaleDateString('fr-FR')
                      : 'N/A'
                    }
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer du tableau */}
        <div className="p-4 border-t" style={{ borderColor: 'rgba(210, 245, 242, 0.1)' }}>
          <div className="flex justify-between items-center">
            <div className="text-sm" style={{ color: '#2E636A' }}>
              {inscrits.length} inscrit(s)
            </div>
            <div className="text-xs" style={{ color: '#43959A' }}>
              Dernière mise à jour: {new Date().toLocaleTimeString('fr-FR')}
            </div>
          </div>
        </div>
      </div>

      {/* Footer global */}
      <div className="mt-12 text-center">
        <p className="text-sm" style={{ color: '#2E636A' }}>
          {new Date().getFullYear()} • Dashboard Inscriptions -- GHOSTECH Fait par : <p className='link link-primary inline'>Emmanuel Bilson</p> & <p  className='link link-primary inline'>Jeremie Harding</p>
        </p>
      </div>
    </div>
  );
};

export default DashboardInscrits;