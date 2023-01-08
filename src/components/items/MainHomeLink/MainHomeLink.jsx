import React from "react";
import { NavLink } from "react-router-dom";

const MainHomeLink = () => {
  return (
    <NavLink
      to={"/"}
      className=" py-2 px-3 w-24 md:w-36 border rounded 
      bg-INPUT-BLUE fixed  border-green-600 shadow-2xl left-5  md:right-5 lg:bottom-auto lg:top-10 lg:right-10"
    >
      <img src={require("../../../Assets/images/Touritor/white-logo.png")} />
    </NavLink>
  );
};

export default MainHomeLink;
