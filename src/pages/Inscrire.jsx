// @ts-nocheck
import { useState } from "react";
import { GoArrowLeft } from "react-icons/go";
import {Link} from "react-router-dom";
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase'; 

const inscrire = () => {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    matricule: "",
  });

    const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // 1. Sauvegarde dans Firebase
      const docRef = await addDoc(collection(db, 'inscriptions'), {
        ...formData,
        dateInscription: new Date().toISOString(),
        statut: 'en_attente_paiement',
        createdAt: serverTimestamp()
      });

      console.log("Document écrit avec ID: ", docRef.id);

      // 2. Redirection vers Wave Business
      const waveLink = "https://pay.wave.com/m/M_ci_AQyUB8gRe3c1/c/ci/?amount=1000"; 
      window.open(waveLink, '_blank');

      // 3. Redirection vers WhatsApp après un délai
      setTimeout(() => {
        redirectToWhatsApp();
      }, 2000);

      // 4. Reset du formulaire
      setFormData({ nom: "", prenom: "", email: "", matricule: "" });

    } catch (error) {
      console.error("Erreur lors de l'inscription: ", error);
      alert("Une erreur est survenue. Veuillez réessayer.");
    } finally {
      setLoading(false);
    }
  };

  const redirectToWhatsApp = () => {
    const whatsappUrl = "https://chat.whatsapp.com/Le6R6EvCKOR8I3kmQEd9XS"
    
    
    window.open(whatsappUrl, '_blank');
    
    alert("Inscription réussie ! Rejoignez le groupe WhatsApp pour les prochaines étapes.");
  };
  return (
    <div className="min-h-screen bg-white">
      {/* Version Desktop */}

      <div className="hidden lg:flex min-h-screen">
        {/* Section texte */}
        <div
          className="flex-1 flex items-center justify-center p-12"
          style={{ backgroundColor: "#D2F5F2" }}
        >
<Link 
  to="/"
  className="absolute top-10 left-5 text-3xl text-gh-dark 
             bg-gh-accent p-2 rounded-xl shadow-lg
             cursor-pointer hover:bg-gh-accent2 hover:scale-105
             transition-all duration-200"
>
  <GoArrowLeft />
</Link>


          <div className="max-w-md">
            <h1
              className="text-4xl font-light mb-6 leading-tight"
              style={{ color: "#173740" }}
            >
              Rejoignez l'Atelier de formation{" "}
              <span style={{ color: "#40B8BC" }}>GHOSTECH</span> !
            </h1>
            <p className="text-lg leading-relaxed" style={{ color: "#2E636A" }}>
              Utilisez la plateforme pour vous inscrire et découvrir le
              déroulement complet des ateliers
              <span style={{ color: "#43959A" }}>
                {" "}
                Web, Mobile, IoT et Réseaux
              </span>
              .
            </p>
            <div className="mt-8 flex space-x-4">
              <div
                className="w-3 h-12 rounded-sm"
                style={{ backgroundColor: "#38F4F3" }}
              ></div>
              <div
                className="w-3 h-12 rounded-sm"
                style={{ backgroundColor: "#40B8BC" }}
              ></div>
              <div
                className="w-3 h-12 rounded-sm"
                style={{ backgroundColor: "#43959A" }}
              ></div>
            </div>
          </div>
        </div>

        {/* Section formulaire */}
        <div className="flex-1 flex items-center justify-center p-12 bg-white">
          <div className="w-full max-w-md">
            <div className="text-center mb-8">
              <h2
                className="text-3xl font-light mb-2"
                style={{ color: "#173740" }}
              >
                Inscription
              </h2>
              <p style={{ color: "#2E636A" }}>Complétez vos informations</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label
                    className="block text-sm font-medium mb-2"
                    style={{ color: "#173740" }}
                  >
                    Nom
                  </label>
                  <input
                 type="text"
                    required
                    value={formData.nom}
                    onChange={(e) => setFormData({ ...formData, nom: e.target.value })}
                    className="w-full p-4 border-b-2 focus:outline-none transition-colors"
                    style={{
                      borderColor: "#D2F5F2",
                      color: "#173740",
                      backgroundColor: "transparent",
                    }}
                    placeholder="Votre nom"
                  />

                </div>
                <div>
                  <label
                    className="block text-sm font-medium mb-2"
                    style={{ color: "#173740" }}
                  >
                    Prénom
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.prenom}
                    onChange={(e) =>
                      setFormData({ ...formData, prenom: e.target.value })
                    }
                    className="w-full p-4 border-b-2 focus:outline-none focus:border-blue-500 transition-colors"
                    style={{
                      borderColor: "#D2F5F2",
                      color: "#173740",
                      backgroundColor: "transparent",
                    }}
                    placeholder="Votre prénom"
                  />
                </div>
              </div>

              <div>
                <label
                  className="block text-sm font-medium mb-2"
                  style={{ color: "#173740" }}
                >
                  Email
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full p-4 border-b-2 focus:outline-none focus:border-blue-500 transition-colors"
                  style={{
                    borderColor: "#D2F5F2",
                    color: "#173740",
                    backgroundColor: "transparent",
                  }}
                  placeholder="votre@email.com"
                />
              </div>

              <div>
                <label
                  className="block text-sm font-medium mb-2"
                  style={{ color: "#173740" }}
                >
                  Matricule
                </label>
                <input
                  type="text"
                  required
                  value={formData.matricule}
                  onChange={(e) =>
                    setFormData({ ...formData, matricule: e.target.value })
                  }
                  className="w-full p-4 border-b-2 focus:outline-none focus:border-blue-500 transition-colors"
                  style={{
                    borderColor: "#D2F5F2",
                    color: "#173740",
                    backgroundColor: "transparent",
                  }}
                  placeholder="Votre matricule"
                />
              </div>

               <button
                type="submit"
                disabled={loading}
                className="w-full py-4 text-white font-medium text-lg transition-all duration-300 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                style={{
                  backgroundColor: loading ? "#2E636A" : "#43959A",
                  color: "#D2F5F2",
                }}
              >
                {loading ? "Traitement..." : "Payer avec Wave Business 1 000 FCFA"}
              </button>

              <div className="text-center">
                <p className="text-sm" style={{ color: "#2E636A" }}>
                  Après validation, vous serez redirigé vers Wave Business pour
                  le paiement
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Version Mobile */}
      <div className="lg:hidden min-h-screen bg-white p-6">
        <Link 
  to="/"
  className="absolute top-2 left-3 text-3xl text-gh-dark 
             bg-gh-accent p-2 rounded-xl shadow-lg
             cursor-pointer hover:bg-gh-accent2 hover:scale-105
             transition-all duration-200"
>
  <GoArrowLeft />
</Link>
        {/* Header mobile */}
        <div className="text-center mb-20 pt-8">
          <h1 className="text-2xl font-light mb-4" style={{ color: "#173740" }}>
            Rejoignez l'Atelier{" "}
            <span style={{ color: "#40B8BC" }}>GHOSTECH</span>
          </h1>
          <p
            className="text-sm leading-relaxed mb-6"
            style={{ color: "#2E636A" }}
          >
            Inscrivez-vous pour découvrir les ateliers Web, Mobile, IoT et
            Réseaux
          </p>
          <div className="flex justify-center space-x-2 mb-8">
            <div
              className="w-2 h-8 rounded-sm"
              style={{ backgroundColor: "#38F4F3" }}
            ></div>
            <div
              className="w-2 h-8 rounded-sm"
              style={{ backgroundColor: "#40B8BC" }}
            ></div>
            <div
              className="w-2 h-8 rounded-sm"
              style={{ backgroundColor: "#43959A" }}
            ></div>
          </div>
        </div>

        {/* Formulaire mobile */}
        <div className="max-w-md mx-auto">
          <div className="text-center mb-6">
            <h2
              className="text-2xl font-light mb-2"
              style={{ color: "#173740" }}
            >
              Inscription
            </h2>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <div>
                <label
                  className="block text-sm font-medium mb-2"
                  style={{ color: "#173740" }}
                >
                  Nom
                </label>
                <input
                  type="text"
                  required
                  value={formData.nom}
                  onChange={(e) =>
                    setFormData({ ...formData, nom: e.target.value })
                  }
                  className="w-full p-4 border-b-2 focus:outline-none focus:border-blue-500 transition-colors"
                  style={{
                    borderColor: "#D2F5F2",
                    color: "#173740",
                    backgroundColor: "transparent",
                  }}
                  placeholder="Votre nom"
                />
              </div>
              <div>
                <label
                  className="block text-sm font-medium mb-2"
                  style={{ color: "#173740" }}
                >
                  Prénom
                </label>
                <input
                  type="text"
                  required
                  value={formData.prenom}
                  onChange={(e) =>
                    setFormData({ ...formData, prenom: e.target.value })
                  }
                  className="w-full p-4 border-b-2 focus:outline-none focus:border-blue-500 transition-colors"
                  style={{
                    borderColor: "#D2F5F2",
                    color: "#173740",
                    backgroundColor: "transparent",
                  }}
                  placeholder="Votre prénom"
                />
              </div>
            </div>

            <div>
              <label
                className="block text-sm font-medium mb-2"
                style={{ color: "#173740" }}
              >
                Email
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full p-4 border-b-2 focus:outline-none focus:border-blue-500 transition-colors"
                style={{
                  borderColor: "#D2F5F2",
                  color: "#173740",
                  backgroundColor: "transparent",
                }}
                placeholder="votre@email.com"
              />
            </div>

            <div>
              <label
                className="block text-sm font-medium mb-2"
                style={{ color: "#173740" }}
              >
                Matricule
              </label>
              <input
                type="text"
                required
                value={formData.matricule}
                onChange={(e) =>
                  setFormData({ ...formData, matricule: e.target.value })
                }
                className="w-full p-4 border-b-2 focus:outline-none focus:border-blue-500 transition-colors"
                style={{
                  borderColor: "#D2F5F2",
                  color: "#173740",
                  backgroundColor: "transparent",
                }}
                placeholder="Votre matricule"
              />
            </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-4 text-white font-medium text-lg transition-all duration-300 disabled:opacity-50"
          style={{
            backgroundColor: loading ? "#2E636A" : "#43959A",
            color: "#D2F5F2",
          }}
        >
          {loading ? "Traitement..." : "Payer avec Wave 1 000 FCFA"}
        </button>

            <div className="text-center">
              <p className="text-xs" style={{ color: "#2E636A" }}>
                Redirection vers Wave Business après validation
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default inscrire;
