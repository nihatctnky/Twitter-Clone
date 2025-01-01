// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";



// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDP4gq__5fa7ggkDgNDMrUfPcyF2IVtYeg",
    authDomain: "twitter-d1653.firebaseapp.com",
    projectId: "twitter-d1653",
    storageBucket: "twitter-d1653.firebasestorage.app",
    messagingSenderId: "1005889943350",
    appId: "1:1005889943350:web:8a7d4d4797b020588e2597"
};
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const provider = new GoogleAuthProvider();

export const db = getFirestore(app)

export const stroga = getStorage(app)