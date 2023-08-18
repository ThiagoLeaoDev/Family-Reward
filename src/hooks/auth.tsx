import React, { createContext, useContext, useState, ReactNode, useEffect } from "react";

import { User } from "../interfaces/user";

import { createUser } from "../services/user";

import { setUserLocalStorage } from "../utils/auth";

interface AuthContextData {
  user: User | null;
  updateUser: (userData: User | null) => void;
  signOut: () => void;
  registerUser: (userData: User) => void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const user = localStorage.getItem("user");

    if (user) {
      setUser(JSON.parse(user));
    }
  }, []);

  const registerUser = async (userData: User) => {
    const response = await createUser(userData);

    setUser(response);
    setUserLocalStorage(response);
  };

  const updateUser = (userData: User | null) => {
    setUser(userData);
    setUserLocalStorage(userData);
  };

  const signOut = () => {
    setUser(null);
    setUserLocalStorage(null);
  };

  return <AuthContext.Provider value={{ user, updateUser, signOut, registerUser }}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}
