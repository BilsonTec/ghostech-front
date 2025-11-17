// firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyD_EGphkQaXuIWRIotqauwfC0HpgJcDN4M",
  authDomain: "bootcapm-ghostech.firebaseapp.com",
  projectId: "bootcapm-ghostech",
  storageBucket: "bootcapm-ghostech.firebasestorage.app",
  messagingSenderId: "114451529240",
  appId: "1:114451529240:web:59e65c849a7fe010860d6d"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);