import React, { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebaseUtils";

import FormInput from "../form-input/form-input.compoenent";
import Button from "../button/button.component";
import "./sign-up-form.style.scss";

const defaultFormField = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formField, setFormField] = useState(defaultFormField);
  const { displayName, email, password, confirmPassword } = formField;
  console.log(formField);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormField({ ...formField, [name]: value });
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const { email, password, confirmPassword } = formField;
    if (password === confirmPassword) {
      try {
        const authenticatedUser = await createAuthUserWithEmailAndPassword(
          email,
          password
        );
        console.log("User Creation response ", authenticatedUser);
        const user = await createUserDocumentFromAuth(authenticatedUser.user, {
          displayName,
        });
        console.log("User Creation result ", user);
        resetForm();
      } catch (error) {
        if (error.code === "auth/email-already-in-use") {
          alert("Cannot create user .Email is already in use");
        } else {
          console.log("User Creation error ", error);
        }
      }
    } else {
      alert("Error : password and confirm Password do not match");
      console.log("Error : password and confirm Password do not match");
      return;
    }
  };

  const resetForm = () => {
    setFormField(defaultFormField);
  };

  const formElementsData = [
    {
      labelName: "Display Name",
      isRequired: true,
      handleChange: handleChange,
      name: "displayName",
      value: displayName,
      type: "text",
      placeholder: "",
    },
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
    {
      labelName: "Confirm Password",
      isRequired: true,
      handleChange: handleChange,
      name: "confirmPassword",
      value: confirmPassword,
      type: "password",
      placeholder: "",
    },
  ];

  return (
    <div className="sign-up-container">
      <h2>Don't have an account yet ?</h2>
      <span>Sign up with your email and password.</span>
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
        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  );
};

export default SignUpForm;
