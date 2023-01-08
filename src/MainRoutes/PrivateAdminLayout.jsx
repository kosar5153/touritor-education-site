import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateAdminLayout = () => {
  const adminStorageToken = localStorage.getItem("admin-token");
  return adminStorageToken ? (
    <Outlet />
  ) : (
    <Navigate to="/admindashboard/login" />
  );
};

export default PrivateAdminLayout;
