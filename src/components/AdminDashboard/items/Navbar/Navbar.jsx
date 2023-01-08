import React, { useContext, useEffect } from "react";

import { HiOutlineMenuAlt1 } from "react-icons/hi";
import {
  BsChatSquareText,
  BsFillMoonStarsFill,
  BsSunFill,
} from "react-icons/bs";
import { BiExit, BiShoppingBag } from "react-icons/bi";
import { FaAngleDown } from "react-icons/fa";
import { TiHomeOutline } from "react-icons/ti";
import { IoNotificationsOutline } from "react-icons/io5";

import { AdminContext } from "../../../../context/admin-context/AdminContext";
import { NavButton } from "./NavButton";
import { AdminProfile, Cart, Chat, Notification } from "../.";
import { ThemeState } from "../../../../context/dark-mode/ThemeState";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const {
    activeAdminMenu,
    setActiveAdminMenu,
    isClicked,
    setIsClicked,
    handleClick,
    adminInfo,
  } = useContext(AdminContext);

  const { handelThemeSwitch, theme } = useContext(ThemeState);
  return (
    <div className=" shadow-md bg-white dark:bg-Dark-MainBg relative">
      {/* menu */}
      <div className=" flex justify-between w-full p-2 relative">
        <div className="css-rightNav">
          <div className="  justify-between items-start flex-row-reverse hidden sm:flex ">
            <NavButton
              icon={<BiShoppingBag />}
              color="rgb(13 148 136 ) "
              customFunc={() => handleClick("cart")}
            />
            <NavButton
              icon={<BsChatSquareText />}
              color="rgb(13 148 136 ) "
              dotColor="rgb(252, 102, 92)"
              customFunc={() => handleClick("chat")}
              customClass={"right-2 top-2"}
            />
            <NavButton
              icon={<IoNotificationsOutline />}
              color="rgb(13 148 136 ) "
              dotColor="rgb(254, 201, 15)"
              customFunc={() => handleClick("notification")}
              customClass={"right-4 top-3"}
            />
            <div
              onClick={() => handleClick("adminProfile")}
              className=" mr-5 flex items-center ml-5 text-gray-500 cursor-pointer hover:text-teal-600"
            >
              <img
                src={adminInfo.profile}
                className=" w-11 h-11 rounded-full border-2  border-teal-400 "
              />

              <span className=" mr-2 pt-2"> {adminInfo.fullName}</span>
              <span className=" pt-2">
                {" "}
                <FaAngleDown />
              </span>
            </div>
          </div>
        </div>
        <div className="css-leftNav flex gap-2 items-center flex-row-reverse">
          <NavButton
            icon={<HiOutlineMenuAlt1 />}
            color="rgb(13 148 136 )"
            customFunc={() => setActiveAdminMenu((prevState) => !prevState)}
          />
          <div
            onClick={handelThemeSwitch}
            className="text-2xl text-teal-600 cursor-pointer"
          >
            {theme === "light" ? <BsFillMoonStarsFill /> : <BsSunFill />}
          </div>
          <NavLink to={"/Logout"}>
            <TiHomeOutline className="text-2xl text-teal-600 cursor-pointer ml-3" />
          </NavLink>
          <NavLink to={"/admindashboard/adminlogout"}>
            <BiExit className="text-2xl text-teal-600 cursor-pointer ml-3" />
          </NavLink>
        </div>
      </div>
      {/* Box */}
      {/* {isClicked.chat && <Chat />} */}
      {/* {isClicked.cart && <Cart />} */}
      {isClicked.adminProfile && <AdminProfile />}
      {/* {isClicked.notification && <Notification />}  */}
    </div>
  );
};

export default Navbar;
