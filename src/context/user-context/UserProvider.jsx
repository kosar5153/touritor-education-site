import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { UserInfoContext } from "./UserInfoContext";

import { useJwt } from "react-jwt";
import { getStudentById } from "../../services/student-services";

const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState("");
  const [userToken, setUserToken] = useState();

  // get token from cookie
  const userCooki = document.cookie;

  const { decodedToken } = useJwt(userCooki);
  console.log("decodedToken", decodedToken);

  const setUserFromCookie = async () => {
    const userId = decodedToken["_id"];

    try {
      let student = await getStudentById(userId);
      setUserData(student.data.result);
    } catch (err) {
      console.log("studenterr", err);
    }
  };

  useEffect(() => {
    if (decodedToken) {
      setUserToken(decodedToken);

      setUserFromCookie();
    }
  }, []);

  useEffect(() => {
    setUserFromCookie();
  }, [decodedToken]);

  return (
    <UserInfoContext.Provider
      value={{
        userToken,
        setUserToken,
        userData,
        setUserData,
        setUserFromCookie,
      }}
    >
      {children}
    </UserInfoContext.Provider>
  );
};

export default UserProvider;
