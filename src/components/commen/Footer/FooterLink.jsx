import React from "react";
import { NavLink } from "react-router-dom";
import "./Footer.css";

import { BsFacebook, BsGithub, BsPinterest, BsTelegram } from "react-icons/bs";
import { FaCopyright } from "react-icons/fa";

const FooterLink = () => {
  return (
    <div className="css-Footer  py-5  pt-20 px-3 md:px-0">
      <div
        className="TwIN-FooterLink w-full  
         container mx-auto
       grid grid-cols-1 gap-8  md:grid-cols-4 content-center
      "
      >
        <div>
          <NavLink to={"/"}>
            <img
              className=" w-40"
              src={require("../../../Assets/images/Touritor/white-logo.png")}
            />
          </NavLink>
        </div>
        <div
          className=" flex justify-start  md:justify-center items-center text-xl
           col-span-2 text-green-300"
        >
          <FaCopyright className=" ml-1" />
          <p>تمامی حقوق این سایت مربوط به تیم توریتور میباشد...</p>
        </div>

        <ul
          className=" flex justify-start md:justify-end items-center 
         gap-5 text-2xl  "
        >
          <li className=" text-blue-100">
            <NavLink to={"/"}>
              <BsFacebook />
            </NavLink>
          </li>
          <li className=" text-red-500">
            <NavLink to={"/"}>
              <BsPinterest />
            </NavLink>
          </li>
          <li className=" text-yellow-300">
            <NavLink to={"/"}>
              <BsGithub />
            </NavLink>
          </li>
          <li className=" text-blue-400">
            <NavLink to={"/"}>
              <BsTelegram />
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FooterLink;
