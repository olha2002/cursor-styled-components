import styled from "styled-components";
import { Link } from "react-router-dom";

export const BodyDiv = styled.div`
  font-family: "Roboto", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
`;

export const IconContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const IconDiv = styled.div`
  align-content: center;
  background-color: rosybrown;
  border-radius: 100%;
  display: flex;
  height: 50px;
  justify-content: center;
  width: 50px;
`;

export const Icon = styled.img`
  height: 30px;
  padding-top: 8px;
  width: 30px;
`;

export const IconText = styled.span`
  color: white;
  font-size: 24px;
  letter-spacing: 2px;
  margin-top: 10px;
`;

export const FormsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 25px;
`;

export const FormsDiv = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const InitialsDiv = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
`;

export const NameForm = styled.input`
  background-color: black;
  border: 1px solid grey;
  color: white;
  font-size: 16px;
  outline: 0;
  padding: 15px;
  width: 150px;
`;

export const SurnameForm = styled.input`
  background-color: black;
  border: 1px solid grey;
  color: white;
  font-size: 16px;
  margin-left: 20px;
  outline: 0;
  padding: 15px;
  width: 150px;
`;

export const EmailForm = styled.input`
  background-color: black;
  border: 1px solid grey;
  color: white;
  font-size: 16px;
  outline: 0;
  padding: 15px;
  width: 350px;
`;

export const PasswordForm = styled.input`
  background-color: black;
  border: 1px solid grey;
  color: white;
  font-size: 16px;
  margin-top: 20px;
  outline: 0;
  padding: 15px;
  width: 350px;
`;

export const RememberDiv = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  margin-top: 20px;
`;

export const RememberLabel = styled.label`
  color: white;
  letter-spacing: 1px;
  line-height: 1.5;
  margin-left: 5px;
  max-width: 350px;
`;

export const RememberCheck = styled.input`
  accent-color: rosybrown;
`;

export const ButtonContainer = styled.div``;

export const Button = styled.button`
  background-color: rgb(107, 195, 247);
  border-radius: 5px;
  color: black;
  cursor: pointer;
  font-weight: 600;
  letter-spacing: 2px;
  margin-top: 25px;
  padding: 10px;
  text-transform: uppercase;
  width: 390px;
  &:hover {
    color: #fff;
    background-color: rosybrown;
    transition: 0.3s;
  }
`;

export const ForgotLinks = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const ForgotPassword = styled(Link)`
  color: lightblue;
  margin-right: 30px;
  &:hover {
    color: #fff;
  }
`;

export const NoAccount = styled(Link)`
  color: lightblue;
  &:hover {
    color: #fff;
  }
`;

export const Footer = styled.div`
  margin-top: 100px;
`;

export const Copyright = styled.p`
  color: gray;
`;
