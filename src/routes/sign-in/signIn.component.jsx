import React from "react";
import {signInWithGooglePopup}   from "../../utils/firebase/firebaseUtils";
const SignIn = () => { 
    const logGoogleUser = async () => {
        const user = await signInWithGooglePopup();
        console.log(user);
    }
    return (
        <div className='sign-in'>
            Sign-In Page
            <button onClick={logGoogleUser}>Sign In with Google</button>
        </div>
    )};

export default SignIn;