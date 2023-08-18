import React from "react";
import { useAuth } from "../hooks/auth";
import { Navigate, Outlet } from "react-router-dom";

export const PrivateRoutes = () => {
  const { user } = useAuth();
  console.log("PrivateRoutes", user);

  return user ? <Outlet /> : <Navigate to="/login" />;
};
