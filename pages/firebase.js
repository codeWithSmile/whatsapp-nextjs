
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getDatabase } from 'firebase/database';
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyDjzgEvopG1QQhW8oaAGu1dqefAa471tWw",
    authDomain: "whatsapp-nextjs-b7ac0.firebaseapp.com",
    projectId: "whatsapp-nextjs-b7ac0",
    storageBucket: "whatsapp-nextjs-b7ac0.appspot.com",
    messagingSenderId: "342274974916",
    appId: "1:342274974916:web:71464bd4db14cb065f9591",
    measurementId: "G-RE6QS6HG9Q"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);
const firestore = getFirestore(app);

export { auth, database, firestore };   