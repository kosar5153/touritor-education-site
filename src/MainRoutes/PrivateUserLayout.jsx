import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateUserLayout = () => {
  const userCooki = document.cookie;
  return userCooki !== "" ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateUserLayout;
