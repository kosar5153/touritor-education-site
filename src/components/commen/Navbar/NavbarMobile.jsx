import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import MegaMenu from "./MegaMenu";
import { navData } from "./navData";
import { CgClose, CgMenuGridO } from "react-icons/cg";
import { BsFillCaretDownFill } from "react-icons/bs";

const NavbarMobile = ({ setIsClose, isClose }) => {
  const [dropDown, setDropDown] = useState(false);
  return (
    <div
      className={
        isClose
          ? `TwIN-NavbarMobile translate-x-0  `
          : `TwIN-NavbarMobile translate-x-[100%] `
      }
    >
      <div className=" flex justify-between items-center">
        <NavLink to={"/"} className="TwIN-logo">
          <img
            src={require("../../../Assets/images/Touritor/white-logo.png")}
            alt=""
            className=" w-32"
          />
        </NavLink>
        <div
          className=" TwIN-IconNav text-green-300 text-xl
        
         hover:animate-TwCon-round-Anim transition ease-in duration-300
        "
          onClick={() => setIsClose(false)}
        >
          <CgClose />
        </div>
      </div>
      <ul className="my-8 ">
        {navData.map((item) => (
          <li
            onClick={() => setDropDown(!dropDown)}
            key={item.id}
            className=" TwIN-NavLi flex justify-start 
          hover:text-teal-300   mx-5 relative
           text-green-100 mb-5 border-b border-teal-500 border-dotted py-2
           hover:bg-slate-800 rounded pr-2  flex-col items-start
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
              <span className=" TwIN-NavIcon">{item.icon}</span>
              <span className="TwIN-SpanDot relative mx-3">{item.title}</span>

              {item.dropDown ? (
                <BsFillCaretDownFill className=" text-[12px] mr-1 TwIN-NavIcon" />
              ) : null}
            </NavLink>

            {item.dropDown && dropDown ? (
              <MegaMenu dropDown={item.dropDown} />
            ) : null}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavbarMobile;
