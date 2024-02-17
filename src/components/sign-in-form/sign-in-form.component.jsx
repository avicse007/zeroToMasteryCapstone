import React, { useState } from "react";
import {
  signInWithGooglePopup,
  signInWithGoogleRedirect,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebaseUtils";

import FormInput from "../form-input/form-input.compoenent";
import Button from "../button/button.component";
import "./sign-in-form.style.scss";

const defaultFormField = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formField, setFormField] = useState(defaultFormField);

  const { email, password } = formField;
  console.log(formField);

  const logGoogleUserRedirect = async () => {
    const { user } = await signInWithGoogleRedirect();
    const userDocRef = await createUserDocumentFromAuth(user);
    console.log("userDocRef", userDocRef);
    console.log(user);
  };

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormField({ ...formField, [name]: value });
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const { email, password } = formField;
    try {
      const user = await signInAuthUserWithEmailAndPassword(email, password);
      console.log("SignIn with Email password user", user);
      resetForm();
    } catch (error) {
      switch (error.code) {
        case "auth/invalid-login-credentials":
          alert("Incorrect login credentials", error);
          break;
        default:
          alert("Error in SignIn with Email password", error);
      }
      console.log("Error in SignIn with Email password", error);
    }
  };

  const resetForm = () => {
    setFormField(defaultFormField);
  };

  const formElementsData = [
    {
      labelName: "Email",
      isRequired: true,
      handleChange: handleChange,
      name: "email",
      value: email,
      type: "email",
      placeholder: "",
    },
    {
      labelName: "Password",
      isRequired: true,
      handleChange: handleChange,
      name: "password",
      value: password,
      type: "password",
      placeholder: "",
    },
  ];

  return (
    <div className="sign-up-container">
      <h2>Already have an account</h2>
      <span>Sign in with your email and password.</span>
      <form onSubmit={onSubmitHandler}>
        {formElementsData.map((data) => {
          const { labelName, type, isRequired, placeholder, name, value } =
            data;
          return (
            <FormInput
              labelName={labelName}
              type={type}
              isRequired={isRequired}
              placeholder={placeholder}
              name={name}
              handleChange={handleChange}
              value={value}
            />
          );
        })}
        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button type="button" buttonType="google" onClick={signInWithGoogle}>
            Google Sign-In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
