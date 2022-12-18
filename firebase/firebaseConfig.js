// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// import { firebase } from "firebase";

// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
    projectId: "fir-prac-b801a",
    storageBucket: "fir-prac-b801a.appspot.com",
    messagingSenderId: "857339810260",
    appId: process.env.NEXT_PUBLIC_APP_ID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
