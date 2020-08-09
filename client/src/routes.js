import React from "react";
import { Navigate } from "react-router-dom";
import DashboardLayout from "./layout/DashboardLayout";
import MainLayout from "./layout/MainLayout";
import DashboardView from "./views/dashboard/DashboardView";
import NotFoundView from "./views/errors/NotFoundView";
import LoginView from "./views/auth/LoginView";
import RegisterView from "./views/auth/RegisterView";

const routes = [
  {
    path: "app",
    element: <DashboardLayout />,
    children: [
      { path: "dashboard", element: <DashboardView /> },
      { path: "*", element: <Navigate to="/404" /> },
    ],
  },
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "login", element: <LoginView /> },
      { path: "register", element: <RegisterView /> },
      { path: "404", element: <NotFoundView /> },
      { path: "/", element: <Navigate to="/app/dashboard" /> },
      { path: "*", element: <Navigate to="/404" /> },
    ],
  },
];

export default routes;
