import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LoginComponent from "../components/login/Login";
import TasksComponent from "../components/Tareas/TasksComponent";
import { AuthProvider } from "../provider/AuthProvide";
import { PrivateRoutes } from "./PrivateRoutes";

const AllRoutes = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<LoginComponent />} />
          <Route element={<PrivateRoutes />}>
            <Route path="/tareas" element={<TasksComponent />} />
            <Route path="*" element={<Navigate to="/login" replace />} />
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default AllRoutes;
