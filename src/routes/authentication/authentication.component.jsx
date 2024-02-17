import React from "react";
//import React, { useEffect } from "react";
//import { getRedirectResult } from "firebase/auth";
import {
  //auth,
  signInWithGooglePopup,
  signInWithGoogleRedirect,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebaseUtils.js";

import SignUpForm from "../../components/sign-up-form/sign-up-form.component.jsx";
import SignInForm from "../../components/sign-in-form/sign-in-form.component.jsx";
import "./authentication.style.scss";
const Authentication = () => {
  //   const asyncFn = async () => {
  //     const result = await getRedirectResult(auth);
  //     console.log("result from redirectLogin", result);
  //     if (result) {
  //       const userDocRef = await createUserDocumentFromAuth(result.user);
  //       console.log("userDocRef", userDocRef);
  //     }
  //   };
  //   useEffect(() => {
  //     asyncFn();
  //   }, []);

  // const logGoogleUser = async () => {
  //   const { user } = await signInWithGooglePopup();
  //   const userDocRef = await createUserDocumentFromAuth(user);
  //   console.log("userDocRef", userDocRef);
  //   console.log(user);
  // };

  return (
    <div className="auth-container">
      {/*<button onClick={logGoogleUser}>Sign In with Google PopUp</button>
       <button onClick={signInWithGoogleRedirect}>
        Sign In with Google Redirect
      </button> */}
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
