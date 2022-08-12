import React, { useState, useEffect } from "react";
import {
  BodyDiv,
  IconContainer,
  IconDiv,
  Icon,
  IconText,
  FormsContainer,
  FormsDiv,
  EmailForm,
  PasswordForm,
  RememberDiv,
  RememberCheck,
  RememberLabel,
  Button,
  ButtonContainer,
  ForgotLinks,
  ForgotPassword,
  NoAccount,
  Footer,
  Copyright,
} from "../StyledComponents/StyledComponents";

export const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(true);
  const rememberData = JSON.parse(localStorage.getItem("user"));

  const handleSignIn = () => {
    if (password === rememberData.password && email === rememberData.email) {
      if (rememberMe) {
        alert("You have already authorized");
      } else {
        alert("Welcome!");
      }
    } else {
      alert("User not found");
    }
  };

  const resetData = () => {
    localStorage.clear();
  };

  useEffect(() => {
    if (rememberData) {
      setEmail(rememberData.email);
      setPassword(rememberData.password);
    }
  }, []);

  return (
    <BodyDiv>
      <IconContainer>
        <IconDiv>
          <Icon src={require("../../icons/lock-icon.png")}></Icon>
        </IconDiv>
        <IconText>Sign In</IconText>
      </IconContainer>
      <FormsContainer>
        <FormsDiv>
          <EmailForm
            value={email}
            placeholder="Email Address *"
            onChange={(e) => setEmail(e.target.value)}
          ></EmailForm>
          <PasswordForm
            type="password"
            S
            value={password}
            placeholder="Password *"
            onChange={(e) => setPassword(e.target.value)}
          ></PasswordForm>
        </FormsDiv>
        <RememberDiv>
          <RememberLabel for="remember">Remember Me</RememberLabel>
          <RememberCheck
            type="checkbox"
            id="remember"
            name="remember"
            onChange={() => setRememberMe(!rememberMe)}
          ></RememberCheck>
        </RememberDiv>
      </FormsContainer>
      <ButtonContainer>
        <Button onClick={handleSignIn}>Sign In</Button>
        <ForgotLinks>
          <ForgotPassword to="/" onClick={resetData}>
            Forgot password?
          </ForgotPassword>
          <NoAccount to="/signup">Don't have an account? Sign Up</NoAccount>
        </ForgotLinks>
      </ButtonContainer>
      <Footer>
        <Copyright>Copyright © Your Website 2020.</Copyright>
      </Footer>
    </BodyDiv>
  );
};
