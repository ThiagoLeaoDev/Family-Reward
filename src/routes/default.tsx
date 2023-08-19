import React, { Fragment } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import { PrivateRoutes } from "./privateRoutes";

import { Profile } from "../pages/Profile";
import { Home } from "../pages/Home";
import { TaskPage } from "../pages/Task";
import { ExecutionPage } from "../pages/Execution";
import { Login } from "../pages/Login";

import { Menu } from "../components/Menu";

export const DefaultRoutes = () => {
  return (
    <div>
      <BrowserRouter>
        <Fragment>
          <Menu />
          <Routes>
            <Route path="/" element={<PrivateRoutes />}>
              <Route path="/" element={<Home />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/task/:id" element={<TaskPage />} />
              <Route path="/execution/:id" element={<ExecutionPage />} />
            </Route>
            <Route path="/login" element={<Login />} />
          </Routes>
        </Fragment>
      </BrowserRouter>
    </div>
  );
};
