// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth, 
        signInWithPopup,
        signInWithRedirect,
        GoogleAuthProvider } from 'firebase/auth'

import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBuIljP8gnYVhtLHUYHrWwrcWFA_UQOo0",
  authDomain: "avi-clothing-db-32c87.firebaseapp.com",
  projectId: "avi-clothing-db-32c87",
  storageBucket: "avi-clothing-db-32c87.appspot.com",
  messagingSenderId: "49462463377",
  appId: "1:49462463377:web:8f353bc0f476b8dc3de830"
};

// Initialize Firebase
const fireBaseApp = initializeApp(firebaseConfig);

// Setting up Firebase authentication 

const provider = new GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const auth = getAuth(fireBaseApp);
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const db = getFirestore(fireBaseApp);

export const createUserDocumentFromAuth = async (userAuth, additionalData) => {

}
