import React from "react";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebaseUtils";
const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
    console.log("userDocRef", userDocRef);
    console.log(user);
  };
  return (
    <div className="sign-in">
      Sign-In Page
      <button onClick={logGoogleUser}>Sign In with Google</button>
    </div>
  );
};

export default SignIn;
