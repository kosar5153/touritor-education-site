import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AdminContext } from "../../../../../context/admin-context/AdminContext";

const Logout = () => {
  const navigate = useNavigate();
  const { setAdminInfo, setAdminToken } = useContext(AdminContext);
  useEffect(() => {
    localStorage.removeItem("admin-token");
    setAdminInfo(null);
    setAdminToken(null);
    navigate("/");
  }, []);

  return null;
};

export default Logout;
