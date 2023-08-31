import React, { ReactNode, createContext, useEffect, useState } from "react";
import Cookies from "universal-cookie";
import { useNavigate } from "react-router-dom";

import { recoverUserInformation, signInRequest } from "../services/exampleAuth";

import { User } from "../interfaces/user";
import { api } from "../services";

type AuthContextData = {
  isAuthenticated: boolean;
  user: User | null;
  signIn: (data: SignInData) => Promise<void>;
};

type SignInData = {
  email: string;
  password: string;
};

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: { children: ReactNode }) {
  const navigate = useNavigate();
  const cookies = new Cookies();

  const [user, setUser] = useState<User | null>(null);

  const isAuthenticated = !!user;

  useEffect(() => {
    const token = cookies.get("auth.token");

    console.log("token", token);

    if (token) {
      recoverUserInformation().then((user) => {
        console.log("user", user.user);
        setUser(user.user);
      });
    }
  }, []);

  async function signIn({ email, password }: SignInData) {
    const { token, user } = await signInRequest({
      email,
      password,
    });

    cookies.set("auth.token", token, {
      // maxAge: 60 * 60 * 24 * 30, // 30 days
      maxAge: 60 * 60 * 1, // 1 hour
    });

    api.defaults.headers["Authorization"] = `Bearer ${token}`;

    setUser(user);

    navigate("/home");
  }

  return <AuthContext.Provider value={{ user, isAuthenticated, signIn }}>{children}</AuthContext.Provider>;
}
