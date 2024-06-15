
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import 'firebase/firestore';
import { getMessaging, getToken } from "firebase/messaging";


const firebaseConfig = {
    apiKey: "AIzaSyDjzgEvopG1QQhW8oaAGu1dqefAa471tWw",
    authDomain: "whatsapp-nextjs-b7ac0.firebaseapp.com",
    projectId: "whatsapp-nextjs-b7ac0",
    storageBucket: "whatsapp-nextjs-b7ac0.appspot.com",
    messagingSenderId: "342274974916",
    appId: "1:342274974916:web:71464bd4db14cb065f9591",
    measurementId: "G-RE6QS6HG9Q"
};
let app;
let messaging;

export const useFirebase = () => {
    useEffect(() => {
        app = initializeApp(firebaseConfig);
        messaging = getMessaging(app);
    }, []);

    return { app, messaging };
};

export const getFirebaseAuth = () => {
    const auth = getAuth(app);
    return auth;
};
