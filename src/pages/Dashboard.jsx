// @ts-nocheck
import React from 'react';
import dashboardCss from "../css/dashboard.css"

const DashboardInscrits = () => {
  // Données d'exemple (à remplacer par les données Firebase)
  const inscrits = [
    {
      id: 1,
      nom: 'Dupont',
      prenom: 'Jean',
      email: 'jean.dupont@email.com',
      dateInscription: '2024-01-15',
      statut: 'Actif'
    },
    {
      id: 2,
      nom: 'Martin',
      prenom: 'Marie',
      email: 'marie.martin@email.com',
      dateInscription: '2024-01-14',
      statut: 'Actif'
    },
    {
      id: 3,
      nom: 'Bernard',
      prenom: 'Pierre',
      email: 'pierre.bernard@email.com',
      dateInscription: '2024-01-13',
      statut: 'Inactif'
    },
    {
      id: 4,
      nom: 'Moreau',
      prenom: 'Sophie',
      email: 'sophie.moreau@email.com',
      dateInscription: '2024-01-12',
      statut: 'Actif'
    },
    {
      id: 5,
      nom: 'Laurent',
      prenom: 'Thomas',
      email: 'thomas.laurent@email.com',
      dateInscription: '2024-01-11',
      statut: 'Actif'
    }
  ];

  const stats = {
    total: inscrits.length,
    actifs: inscrits.filter(inscrit => inscrit.statut === 'Actif').length,
    inactifs: inscrits.filter(inscrit => inscrit.statut === 'Inactif').length
  };

  return (
    <div className="min-h-screen p-6" style={{ backgroundColor: '#191D27' }}>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2" style={{ color: '#D2F5F2' }}>
          Dashboard Inscrits
        </h1>
        <p className="text-lg" style={{ color: '#2E636A' }}>
          Gestion des utilisateurs inscrits
        </p>
      </div>

      {/* Cartes de statistiques */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title" style={{ color: '#173740' }}>
              Total Inscrits
            </h2>
            <p className="text-4xl font-bold" style={{ color: '#38F4F3' }}>
              {stats.total}
            </p>
          </div>
        </div>

        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title" style={{ color: '#173740' }}>
              Utilisateurs Actifs
            </h2>
            <p className="text-4xl font-bold" style={{ color: '#40B8BC' }}>
              {stats.actifs}
            </p>
          </div>
        </div>

        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title" style={{ color: '#173740' }}>
              Utilisateurs Inactifs
            </h2>
            <p className="text-4xl font-bold" style={{ color: '#43959A' }}>
              {stats.inactifs}
            </p>
          </div>
        </div>
      </div>

      {/* Tableau des inscrits */}
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title mb-6" style={{ color: '#173740' }}>
            Liste des Inscrits
          </h2>
          
          <div className="overflow-x-auto">
            <table className="table table-zebra w-full">
              {/* En-tête du tableau */}
              <thead>
                <tr style={{ backgroundColor: '#173740' }}>
                  <th style={{ color: '#D2F5F2' }}>Nom</th>
                  <th style={{ color: '#D2F5F2' }}>Prénom</th>
                  <th style={{ color: '#D2F5F2' }}>Email</th>
                  <th style={{ color: '#D2F5F2' }}>Date d'inscription</th>
                  <th style={{ color: '#D2F5F2' }}>Statut</th>
                </tr>
              </thead>
              <tbody>
                {inscrits.map((inscrit) => (
                  <tr key={inscrit.id} className="hover">
                    <td style={{ color: '#2E636A' }}>{inscrit.nom}</td>
                    <td style={{ color: '#2E636A' }}>{inscrit.prenom}</td>
                    <td style={{ color: '#2E636A' }}>{inscrit.email}</td>
                    <td style={{ color: '#2E636A' }}>
                      {new Date(inscrit.dateInscription).toLocaleDateString('fr-FR')}
                    </td>
                    <td>
                      <span 
                        className={`badge ${inscrit.statut === 'Actif' ? 'badge-success' : 'badge-error'} text-white`}
                        style={{ 
                          backgroundColor: inscrit.statut === 'Actif' ? '#40B8BC' : '#43959A' 
                        }}
                      >
                        {inscrit.statut}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination (optionnelle) */}
          <div className="flex justify-between items-center mt-6">
            <div style={{ color: '#2E636A' }}>
              Affichage de {inscrits.length} inscrits
            </div>
            <div className="join">
              <button className="join-item btn btn-sm" style={{ backgroundColor: '#43959A', color: '#D2F5F2' }}>
                1
              </button>
              <button className="join-item btn btn-sm btn-ghost" style={{ color: '#2E636A' }}>
                2
              </button>
              <button className="join-item btn btn-sm btn-ghost" style={{ color: '#2E636A' }}>
                3
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-8 text-center" style={{ color: '#2E636A' }}>
        <p>Dashboard Inscrits • {new Date().getFullYear()}</p>
      </div>
    </div>
  );
};

export default DashboardInscrits;
