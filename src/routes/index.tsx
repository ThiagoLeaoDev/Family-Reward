import React from "react";
import { Routes, Route } from "react-router-dom";

import { PrivateRoutes } from "./privateRoutes";
import { Profile } from "../pages/Profile";
import { Home } from "../pages/Home";
import { TaskPage } from "../pages/Task";
import { ExecutionPage } from "../pages/Execution";
import { CreateTask } from "../pages/CreateTask";
import { Login } from "../pages/Login";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<PrivateRoutes />}>
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/task/:id" element={<TaskPage />} />
        <Route path="/execution/:id" element={<ExecutionPage />} />
        <Route path="/create-task" element={<CreateTask />} />
      </Route>
    </Routes>
  );
};
