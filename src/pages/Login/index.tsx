import React, { FC } from "react";
import { LoginContainer, BackgroundImage, ContainerContent, GradientOverlay, Title, Subtitle, GoogleLoginButton } from "./styles";

interface LoginProps {}

export const Login: FC<LoginProps> = () => {
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
          <GoogleLoginButton>Entrar com o Google</GoogleLoginButton>
        </ContainerContent>
      </LoginContainer>
    </>
  );
};
