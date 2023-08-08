import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import { Profile } from "../pages/Profile";
import { Login } from "../pages/Login";
import { Home } from "../pages/Home";
import { Menu } from "../components/Menu";
import { TaskPage } from "../pages/Task";

export const AdminRoutes = () => {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route Component={Profile} path="/profile" />
        <Route Component={TaskPage} path="/task/:id" />
        <Route Component={Login} path="/login" />
        <Route Component={Home} path="/" />
      </Routes>
    </BrowserRouter>
  );
};