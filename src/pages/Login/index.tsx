import React, { FC, useEffect } from "react";
// import jwtDecode from "jwt-decode";
import { GoogleLogin } from "react-google-login";

import { useAuth } from "../../hooks/auth";

import { LoginContainer, BackgroundImage, ContainerContent, GradientOverlay, Title, Subtitle } from "./styles";

import { User } from "../../interfaces/user";
import { useNavigate } from "react-router-dom";

interface LoginProps {}

export const Login: FC<LoginProps> = () => {
  const { registerUser, user } = useAuth();
  const navigate = useNavigate();

  const onSuccess = async (response: any) => {
    const decoded = response.profileObj as any;

    console.log(decoded);

    const userData: User = {
      name: decoded.name,
      email: decoded.email,
      password: "",
      image: decoded.picture,
      role: "user",
      balance: 0,
    };

    registerUser(userData);
    navigate("/", { replace: true });
  };

  useEffect(() => {
    alert(user);
  }, []);

  const onFailure = (response: any) => {
    console.log(response);
  };

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
          {/* <GoogleLogin
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
                alert("Login realizado com sucesso!");
                navigate("/", { replace: true });
              } else {
                console.log("Credential not found");
              }
            }}
            onError={() => {
              console.log("Login Failed");
            }}
            coo
          /> */}

          <GoogleLogin
            clientId="679672176669-3uimcj21sjbdk83eijgp1qi6sfi5fq0c.apps.googleusercontent.com"
            buttonText="Entrar com Google"
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={"single_host_origin"}
          />
        </ContainerContent>
      </LoginContainer>
    </>
  );
};
