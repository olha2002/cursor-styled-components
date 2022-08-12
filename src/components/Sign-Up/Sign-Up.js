import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  BodyDiv,
  IconContainer,
  IconDiv,
  Icon,
  IconText,
  FormsContainer,
  FormsDiv,
  InitialsDiv,
  NameForm,
  SurnameForm,
  EmailForm,
  PasswordForm,
  RememberDiv,
  RememberCheck,
  RememberLabel,
  Button,
  ButtonContainer,
  ForgotLinks,
  NoAccount,
  Footer,
  Copyright,
} from "../StyledComponents/StyledComponents";

export const SignUp = () => {
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const signUpLink = useNavigate();

  const defaultInput = "2px solid grey";
  const successInput = "2px solid green";
  const errorInput = "2px solid red";

  const emailValidation = /[a-zA-Z0-9]{2,3}@[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}/;
  const passwordValidation =
    /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,}/g;

  const firstNameHandler = (e) => {
    if (!e.target.value) {
      e.target.style.border = defaultInput;
    } else if (e.target.value.length <= 2) {
      e.target.style.border = errorInput;
    } else {
      e.target.style.border = successInput;
      setFirstName(e.target.value);
    }
  };

  const lastNameHandler = (e) => {
    if (!e.target.value) {
      e.target.style.border = defaultInput;
    } else if (e.target.value.length <= 2) {
      e.target.style.border = errorInput;
    } else {
      e.target.style.border = successInput;
      setLastName(e.target.value);
    }
  };

  const emailHandler = (e) => {
    if (!e.target.value.length) {
      e.target.style.border = defaultInput;
      return;
    } else if (emailValidation.test(String(e.target.value).toLowerCase())) {
      setEmail(e.target.value);
      e.target.style.border = successInput;
    } else {
      e.target.style.border = errorInput;
    }
  };

  const passwordHandler = (e) => {
    if (!e.target.value.length) {
      e.target.style.border = defaultInput;
      return;
    } else if (passwordValidation.test(String(e.target.value))) {
      setPassword(e.target.value);
      e.target.style.border = successInput;
    } else {
      e.target.style.border = errorInput;
    }
  };

  const submitHandler = () => {
    if (
      firstName !== null &&
      lastName !== null &&
      email !== null &&
      password !== null
    ) {
      const data = {
        firstName,
        lastName,
        email,
        password,
      };
      localStorage.setItem("user", JSON.stringify(data));
      console.log(JSON.parse(localStorage.getItem("user")));
      signUpLink("/", { replace: true });
    } else {
      alert(`
        Please check your details:
        More than 3 symbols in firstName and surName.
        Email should contain at least 3 symbols, @, dot
        Password should contain 8 symbols, lower and capital letter
        `);
    }
  };

  return (
    <BodyDiv>
      <IconContainer>
        <IconDiv>
          <Icon src={require("../../icons/lock-icon.png")}></Icon>
        </IconDiv>
        <IconText>Sign Up</IconText>
      </IconContainer>
      <FormsContainer>
        <FormsDiv>
          <InitialsDiv>
            <NameForm
              type="text"
              placeholder="First Name *"
              onChange={firstNameHandler}
            ></NameForm>
            <SurnameForm
              type="text"
              placeholder="Last Name *"
              onChange={lastNameHandler}
            ></SurnameForm>
          </InitialsDiv>
          <EmailForm
            type="email"
            placeholder="Email Address *"
            onChange={emailHandler}
          ></EmailForm>
          <PasswordForm
            type="password"
            placeholder="Password *"
            onChange={passwordHandler}
          ></PasswordForm>
        </FormsDiv>
        <RememberDiv>
          <RememberLabel for="remember">
            I want to receive inspiration, marketing promotions and updates via
            email.
          </RememberLabel>
          <RememberCheck
            type="checkbox"
            id="remember"
            name="remember"
          ></RememberCheck>
        </RememberDiv>
      </FormsContainer>
      <ButtonContainer>
        <Button onClick={submitHandler}>Sign Up</Button>
        <ForgotLinks>
          <NoAccount to="/">Already have an account? Sign In</NoAccount>
        </ForgotLinks>
      </ButtonContainer>
      <Footer>
        <Copyright>Copyright © Your Website 2020.</Copyright>
      </Footer>
    </BodyDiv>
  );
};
