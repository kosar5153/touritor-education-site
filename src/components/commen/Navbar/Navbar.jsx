import React, { useContext, useState } from "react";
import "./Navbar";

import { NavLink } from "react-router-dom";

import { FaShoppingCart, FaUser } from "react-icons/fa";
import { BiCategory, BiWorld, BiSearchAlt } from "react-icons/bi";
import { BsFillMoonStarsFill, BsSunFill } from "react-icons/bs";
import { CgClose, CgMenuGridO } from "react-icons/cg";

import SearchBox from "./SearchBox";
import ShoppingBox from "../../pages/ShoppingCard/ShoppingBox";
import NavbarLarge from "./NavbarLarge";
import NavbarMobile from "./NavbarMobile";
import ShoppingCardContext from "../../../context/shopping-cart-context/shoppingCard-context";
import { darkLightMode } from "../../../helperFunctions/modeHandler";
import { UserInfoContext } from "../../../context/user-context/UserInfoContext";
import { RiUserFollowFill } from "react-icons/ri";
import { ThemeState } from "../../../context/dark-mode/ThemeState";

const Navbar = () => {
  const [searchBt, setSearchBt] = useState(false);

  const [isClose, setIsClose] = useState(false);
  const [shopClose, setShopClose] = useState(false);

  const { cart } = useContext(ShoppingCardContext);
  const { userData } = useContext(UserInfoContext);
  const { handelThemeSwitch, theme } = useContext(ThemeState);

  // close search box
  const closeSearchBox = () => {
    setSearchBt(false);
  };

  return (
    <nav
      className="bg-Main-Blue  z-[1000]    flex items-center sticky top-0
    
      dark:bg-Dark-MainBg 
    "
    >
      <div className=" container  mx-auto py-7 ">
        <div
          className="   justify-between   flex
          md:px-0 md:flex-row  md:border-0
        flex-col px-5 border-b  border-teal-700 
        
        "
        >
          <NavLink
            to={"/"}
            className="TwIN-logo   w-32
           mx-auto md:mr-0
          "
          >
            <img
              src={require("../../../Assets/images/Touritor/white-logo.png")}
              alt=""
              className=""
            />
          </NavLink>

          {/* largScreen */}
          <NavbarLarge />

          <NavbarMobile isClose={isClose} setIsClose={setIsClose} />

          {/* sec3 icons box */}
          <div className="  my-10 md:my-0">
            <ul className="flex flex-row-reverse justify-between items-center text-teal-100">
              {/* mobile btn */}
              <li
                className=" TwIN-IconNav lg:hidden transition-all"
                onClick={() => setIsClose(!isClose)}
              >
                {isClose ? <CgClose /> : <CgMenuGridO />}
              </li>
              {/* icon menus */}
              <li
                className="TwIN-IconNav relative "
                onClick={() => setShopClose(!shopClose)}
              >
                <NavLink to={"/shoppingpage"}>
                  <FaShoppingCart />
                </NavLink>
                <ShoppingBox
                  shopClose={shopClose}
                  setShopClose={setShopClose}
                />
                <div
                  className=" bg-red-600 w-6 h-6 p-1
                 rounded-full text-xs flex justify-center items-start 
                absolute  -left-3 -top-3"
                >
                  {cart.length}
                </div>
              </li>
              {/* <li className=" TwIN-IconNav">
                <BiWorld />
              </li> */}
              <li
                className=" TwIN-IconNav"
                onClick={() => setSearchBt(!searchBt)}
              >
                <BiSearchAlt />
              </li>
              <li className=" TwIN-IconNav" onClick={handelThemeSwitch}>
                {theme === "light" ? <BsFillMoonStarsFill /> : <BsSunFill />}
              </li>
              <li className=" TwIN-IconNav">
                {userData ? (
                  <NavLink to="userdashboard" className=" text-Main-Green">
                    <RiUserFollowFill />
                  </NavLink>
                ) : (
                  <NavLink to="login">
                    <FaUser />
                  </NavLink>
                )}
              </li>
            </ul>
            {/* search page */}
          </div>
        </div>
      </div>
      {searchBt ? <SearchBox closeFun={closeSearchBox} /> : null}
    </nav>
  );
};

export default Navbar;
