import React, { useContext } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { AdminContext } from "../../../../context/admin-context/AdminContext";
import { links } from "../../data/data";
import SidbarItems from "./SidbarItems";
import "./SidStyle.css";

const Sidebar = () => {
  const { activeAdminMenu, setActiveAdminMenu } = useContext(AdminContext);

  return (
    <div
      className={
        activeAdminMenu
          ? " TWI-AdminSidbar right-0"
          : "TWI-AdminSidbar right-[-100%]"
      }
    >
      <div className="  css-scrollbar    shadow-lg  h-screen   bg-teal-800  overflow-y-scroll">
        <div className="  py-8 px-1 ">
          <div className=" flex justify-between  border-b border-teal-500 pb-4">
            <NavLink to={"/"}>
              <img
                src={require("../../../../Assets/images/Touritor/white-logo.png")}
                className=" w-28   "
              />
            </NavLink>
            <button
              onClick={() => setActiveAdminMenu(false)}
              className=" ml-1  text-2xl  text-white/80 hover:text-white/100"
            >
              <AiOutlineCloseCircle />
            </button>
          </div>
          <div className="  py-4 px-1 flex-col ">
            {links.map((link) => (
              <SidbarItems link={link} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
