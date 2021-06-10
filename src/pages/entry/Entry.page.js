import React, { useState } from "react";
import "./entry.style.css";
import { Jumbotron } from "react-bootstrap";

import LoginForm from "../../components/login/Login.comp";
import ResetPassword from "../../components/password-reset/PasswordReset.comp";
const Entry = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formLoad, setFormLoad] = useState("login");
  const handleOnChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);

      default:
        break;
    }
  };
  //For Login form Submit

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      return alert("Fill up all the form");
    }
    console.log(email, password);
    //TODO Call api to submit the form
  };

  //For reset password submit

  const handleOnResetSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      return alert("Enter your email address!");
    }

    console.log(email);
  };

  //From Switcher

  const formSwitcher = (formType) => {
    setFormLoad(formType);
  };

  return (
    <div className="entry-page bg-info">
      <Jumbotron className="form-box">
        {formLoad === "login" && (
          <LoginForm
            handleOnChange={handleOnChange}
            handleOnSubmit={handleOnSubmit}
            email={email}
            password={password}
            formSwitcher={formSwitcher}
          ></LoginForm>
        )}
        {formLoad === "reset" && (
          <ResetPassword
            handleOnChange={handleOnChange}
            handleOnResetSubmit={handleOnResetSubmit}
            email={email}
            password={password}
            formSwitcher={formSwitcher}
          ></ResetPassword>
        )}
      </Jumbotron>
    </div>
  );
};

export default Entry;
