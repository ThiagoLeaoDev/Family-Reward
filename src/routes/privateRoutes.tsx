import React from "react";
import { useAuth } from "../hooks/auth";
import { Outlet } from "react-router-dom";

export const PrivateRoutes = () => {
  const { userStorageLoading } = useAuth();

  if (userStorageLoading) {
    return <div>Loading...</div>;
  }

  // if (!user) {
  //   return <Navigate to="/login" />;
  // }

  return <Outlet />;
};
