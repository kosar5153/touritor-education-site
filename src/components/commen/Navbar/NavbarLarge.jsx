import React, { useContext, useState } from "react";
import "./Navbar";

import { BsFillCaretDownFill } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { categuryData, navData } from "./navData";
import MegaMenu from "./MegaMenu";

import { BiCategory } from "react-icons/bi";
import { UserInfoContext } from "../../../context/user-context/UserInfoContext";

const NavbarLarge = () => {
  const { userData } = useContext(UserInfoContext);

  return (
    <>
      {/* sec2 menuBar */}
      <ul
        className="  text-teal-100  justify-around 
           lg:flex hidden  ml-auto
           
      "
      >
        {/* categury */}
        <li
          className="TwIN-Categury  TwIN-NavLi flex justify-center items-center cursor-pointer
          hover:text-teal-200  mx-3  ml-10 rounded-[3px] relative bg-[#06275cb7]"
        >
          <span className="px-2 flex justify-center items-center  py-2">
            <BiCategory className=" text-2xl ml-1 " />
            دسته ها
          </span>
          {categuryData.length > 0 ? (
            <MegaMenu dropDown={categuryData} />
          ) : null}
        </li>

        {/* menu item */}
        {navData.map((item) => (
          <li
            key={item.id}
            className=" TwIN-NavLi flex justify-center items-center
          hover:text-teal-300   mx-5 relative
            "
          >
            <NavLink
              to={item.href}
              className={({ isActive }) =>
                isActive
                  ? `flex py-2 justify-center items-center  TwIN-ActiveNavLink
 `
                  : "flex py-2 justify-center items-center "
              }
            >
              <span className="TwIN-SpanDot relative">{item.title}</span>

              {item.dropDown ? (
                <BsFillCaretDownFill className=" text-[12px] mr-1 TwIN-NavIcon" />
              ) : null}
            </NavLink>

            {item.dropDown ? <MegaMenu dropDown={item.dropDown} /> : null}
          </li>
        ))}
        {userData && (
          <li
            className=" TwIN-NavLi flex justify-center items-center
          hover:text-teal-300   mx-5 relative
            "
          >
            <NavLink
              to={"userdashboard"}
              className={({ isActive }) =>
                isActive
                  ? `flex py-2 justify-center items-center  TwIN-ActiveNavLink
 `
                  : "flex py-2 justify-center items-center "
              }
            >
              <span className="TwIN-SpanDot relative">پنل کاربری</span>
            </NavLink>
          </li>
        )}
      </ul>
    </>
  );
};

export default NavbarLarge;
