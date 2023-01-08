import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserInfoContext } from "../../../context/user-context/UserInfoContext";
import { removeCooki } from "../../../helperFunctions/cookiHandler";

const Logout = () => {
  const navigate = useNavigate();
  const { setUserData, setUserToken, userToken } = useContext(UserInfoContext);
  useEffect(() => {
    removeCooki("user-token", `${userToken}`, "/", 2);
    setUserToken(null);
    setUserData(null);
    navigate("/");
  }, []);

  return null;
};

export default Logout;
