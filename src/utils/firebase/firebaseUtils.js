// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
  getAuth,
  signInWithPopup,
  signInWithRedirect,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBuIljP8gnYVhtLHUYHrWwrcWFA_UQOo0",
  authDomain: "avi-clothing-db-32c87.firebaseapp.com",
  projectId: "avi-clothing-db-32c87",
  storageBucket: "avi-clothing-db-32c87.appspot.com",
  messagingSenderId: "49462463377",
  appId: "1:49462463377:web:8f353bc0f476b8dc3de830",
};

// Initialize Firebase
const fireBaseApp = initializeApp(firebaseConfig);

// Setting up Firebase authentication

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });

export const auth = getAuth(fireBaseApp);
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);
export const db = getFirestore(fireBaseApp);

export const createUserDocumentFromAuth = async (userAuth, additionalData) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  console.log("userDocRef: ", userDocRef);
  const userSnapshots = await getDoc(userDocRef);
  console.log("userSnapshots", userSnapshots);
  console.log("userSnapshots", userSnapshots.exists());
  if (!userSnapshots.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (e) {
      console.log(
        `Error in creating a user ${displayName} and ${email} error ${e}`
      );
    }
  }
  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};
