import React, { FC } from "react";
import jwtDecode from "jwt-decode";
import { GoogleLogin } from "@react-oauth/google";
// import { useNavigate } from "react-router-dom";

import { useAuth } from "../../hooks/auth";

import { LoginContainer, BackgroundImage, ContainerContent, GradientOverlay, Title, Subtitle } from "./styles";

import { User } from "../../interfaces/user";
import { useNavigate } from "react-router-dom";

interface LoginProps {}

export const Login: FC<LoginProps> = () => {
  const { registerUser } = useAuth();
  const navigate = useNavigate();

  return (
    <>
      <LoginContainer>
        <BackgroundImage
          src="https://images.unsplash.com/photo-1642505172378-a6f5e5b15580?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
          alt="Login Background"
        />
        <GradientOverlay />
        <ContainerContent>
          <Title>Bem-vindo ao App de Tarefas!</Title>
          <Subtitle>Faça login com sua conta Google para continuar.</Subtitle>
          <GoogleLogin
            onSuccess={async (credentialResponse) => {
              if (credentialResponse?.credential) {
                const decoded = jwtDecode(credentialResponse.credential) as any;

                const userData: User = {
                  name: decoded.name,
                  email: decoded.email,
                  password: "",
                  image: decoded.picture,
                  role: "user",
                  balance: 0,
                };

                await registerUser(userData);
                console.log("Login Success");
                navigate("/", { replace: true });
              } else {
                console.log("Credential not found");
              }
            }}
            onError={() => {
              console.log("Login Failed");
            }}
          />
        </ContainerContent>
      </LoginContainer>
    </>
  );
};
