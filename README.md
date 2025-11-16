# 🚀 Ghostech – Site Officiel de l’Atelier

Site web développé pour présenter et gérer les inscriptions à l’atelier **Ghostech**, un événement destiné à introduire les participants aux bases du Web, du Mobile, et de l’IoT.

---

## 🎯 Objectif du projet

Le site a pour but de :

- présenter clairement le programme de l’atelier Ghostech  
- permettre aux participants de s’inscrire en ligne  
- afficher les informations importantes (date, lieu, prix)  
- intégrer un système de paiement via **Wave Business**  
- fournir une interface claire, moderne et responsive  

---

## 🧰 Technologies utilisées

- ⚡ **Vite** (React)
- 🎨 **Tailwind CSS**
- 🌸 **DaisyUI**
- 🔥 **Firebase** (Auth + Firestore + Hosting)
- 🧭 **React Router**
- 💳 **Wave Business** (paiement mobile)
- 📱 Responsive mobile-first design

---

## 🖼️ Fonctionnalités du site

- 🏠 **Page d’accueil** avec présentation de l’atelier  
- 📆 **Programme détaillé**  
- 📝 **Inscription en ligne**  
- 🔥 **Enregistrement des participants dans Firestore**  
- 💳 **Paiement via QR Wave Business**  
- 📧 **Confirmation d’inscription par email (option)**  
- 📊 **Dashboard admin** (optionnel)  

---

## 📁 Structure du projet

```bash
src/
  ├── assets/             # images, logos, illustrations
  ├── components/         # navbar, footer, cards, sections
  ├── pages/              # Home, Programme, Inscription, Success, Admin
  ├── firebase/           # config firebase + services
  ├── App.jsx             # routes
  └── main.jsx            # point d'entrée
