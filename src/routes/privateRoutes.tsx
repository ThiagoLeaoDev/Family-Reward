import React from "react";
import { useAuth } from "../hooks/auth";
import { Navigate, Outlet } from "react-router-dom";

export const PrivateRoutes = () => {
  const { user, userStorageLoading } = useAuth();

  if (userStorageLoading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};
