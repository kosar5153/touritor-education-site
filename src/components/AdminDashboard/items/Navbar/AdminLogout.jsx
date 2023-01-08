import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AdminContext } from "../../../../context/admin-context/AdminContext";
import { toastifuySuccess } from "../../../../helperFunctions/toastifuy/toastifuy";

const AdminLogout = () => {
  const navigate = useNavigate();
  const { setAdminInfo, setAdminToken } = useContext(AdminContext);
  useEffect(() => {
    localStorage.removeItem("admin-token");
    toastifuySuccess("ادمین عزیز با موفقیت از حساب خود خارج شدید");
    // setAdminToken(null);
    setAdminInfo(null);
    navigate("/");
  }, []);
  return null;
};

export default AdminLogout;
