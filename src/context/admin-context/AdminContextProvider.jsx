import React, { useEffect, useState } from "react";
import { decodeToken } from "react-jwt";
import { AdminContext } from "./AdminContext";
import { getEmployById } from "../../services/employes-services/index.jsx";
import { useLocation, useNavigate } from "react-router-dom";

const initialState = {
  chat: false,
  cart: false,
  adminProfile: false,
  notification: false,
};

const AdminContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();

  // admin info
  const [adminInfo, setAdminInfo] = useState("");
  const [adminToken, setAdminToken] = useState("");

  // -------------------
  const [screenSize, setScreenSize] = useState(undefined);

  const [activeAdminMenu, setActiveAdminMenu] = useState(true);
  const [isClicked, setIsClicked] = useState(initialState);

  const handleClick = (clicked) =>
    setIsClicked({ ...initialState, [clicked]: true });

  // handelResize menu
  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 1000) {
      setActiveAdminMenu(false);
    } else {
      setActiveAdminMenu(true);
    }
  }, [screenSize]);

  const handelAdminInfo = async (id, adminStorageToken) => {
    try {
      const newsResult = await getEmployById(id, adminStorageToken);

      const newData = newsResult.data.result;
      console.log("newData", newData);
      setAdminInfo(newData);
    } catch (err) {
      console.log(err);
    }
  };
  console.log("adminInfo", adminInfo);

  const adminStorageToken = localStorage.getItem("admin-token");
  const decodStorageToken = decodeToken(adminStorageToken);

  useEffect(() => {
    if (adminStorageToken) {
      setAdminToken(adminStorageToken);
      const decodStorageToken = decodeToken(adminStorageToken);
      handelAdminInfo(decodStorageToken["_id"], adminStorageToken);
    }
  }, []);

  useEffect(() => {
    if (adminStorageToken) {
      handelAdminInfo(decodStorageToken["_id"], adminStorageToken);
    }
  }, [adminStorageToken]);

  const handelRedirect = async (adId, adminToken) => {
    try {
      const newsResult = await getEmployById(adId, adminToken);

      const newData = newsResult.data.result;
      console.log("newData", newData);
      setAdminInfo(newData);
      navigate("/admindashboard");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    console.log("adminInfo", adminInfo);
    if (adminInfo === null) {
      navigate("/admindashboard/login");
    }
  }, [adminInfo]);

  return (
    <AdminContext.Provider
      value={{
        activeAdminMenu,
        setActiveAdminMenu,
        isClicked,
        setIsClicked,
        handleClick,
        screenSize,
        setScreenSize,
        adminInfo,
        setAdminInfo,
        setAdminToken,
        adminStorageToken,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
};

export default AdminContextProvider;
