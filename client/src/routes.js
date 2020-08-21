import React from "react";
import { Navigate } from "react-router-dom";
import DashboardLayout from "./layout/DashboardLayout";
import MainLayout from "./layout/MainLayout";
import DashboardView from "./views/dashboard/DashboardView";
import InventoryView from "./views/dashboard/InventoryView";
import TimelineView from "./views/dashboard/TimelineView";
import NotFoundView from "./views/errors/NotFoundView";
import LoginView from "./views/auth/LoginView";
import RegisterView from "./views/auth/RegisterView";
import BallTriangleLoading from "./views/loading/Loading";

const routes = [
  {
    path: "app",
    element: <DashboardLayout />,
    children: [
      { path: "dashboard", element: <DashboardView /> },
      { path: "inventory", element: <InventoryView /> },
      { path: "timeline", element: <TimelineView /> },
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
      { path: "loading", element: <BallTriangleLoading /> },
      { path: "/", element: <Navigate to="/app/dashboard" /> },
      { path: "*", element: <Navigate to="/404" /> },
    ],
  },
];

export default routes;
