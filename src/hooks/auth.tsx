import React, { createContext, useContext, useState, ReactNode, useEffect } from "react";

import { User } from "../interfaces/user";

import { createUser } from "../services/user";

import { setUserLocalStorage } from "../utils/auth";

interface AuthContextData {
  user: User | null;
  updateUser: (userData: User | null) => void;
  signOut: () => void;
  userStorageLoading: boolean;
  registerUser: (userData: User) => void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [userStorageLoading, setUserStorageLoading] = useState(true);

  useEffect(() => {
    async function loadUserStorageData() {
      const userStorage = localStorage.getItem("u");

      if (userStorage) {
        const userLogged = JSON.parse(userStorage) as User;
        setUser(userLogged);
      }

      setUserStorageLoading(false);
    }

    loadUserStorageData();
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

  return <AuthContext.Provider value={{ user, updateUser, signOut, registerUser, userStorageLoading }}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}
