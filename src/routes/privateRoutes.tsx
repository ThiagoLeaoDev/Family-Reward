import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Outlet, Navigate } from "react-router-dom";

import { Menu } from "../components/Menu";

export const PrivateRoutes = () => {
  const { user } = useContext(AuthContext);

  return user ? (
    <>
      <Menu />
      <Outlet />
    </>
  ) : (
    <Navigate to="/login" />
  );
};
