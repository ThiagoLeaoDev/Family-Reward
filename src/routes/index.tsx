import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import { Profile } from "../pages/Profile";
import { Login } from "../pages/Login";
import { Home } from "../pages/Home";
import { Menu } from "../components/Menu";
import { TaskPage } from "../pages/Task";
import { ExecutionPage } from "../pages/Execution";

export const AdminRoutes = () => {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route Component={Profile} path="/profile" />
        <Route Component={TaskPage} path="/task/:id" />
        <Route Component={Login} path="/login" />
        <Route Component={Home} path="/" />
        <Route Component={ExecutionPage} path="/execution/:id" />
      </Routes>
    </BrowserRouter>
  );
};
