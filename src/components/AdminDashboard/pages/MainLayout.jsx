import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import { AdminContext } from "../../../context/admin-context/AdminContext";

import { Navbar, Sidebar } from "../items";

const MainLayout = () => {
  const { activeAdminMenu } = useContext(AdminContext);
  return (
    <div
      className=" relative dark:bg-main-dark-bg   bg-stone-100  min-h-screen 
    
     dark:bg-Dark-MainBg
    "
    >
      <div className=" grid grid-cols-12 ">
        <div className={`${activeAdminMenu ? "TWI-AdminChngeWidth " : ""}  `}>
          <Sidebar />
        </div>
        <div
          className={`  ${
            activeAdminMenu
              ? "col-start-3 col-end-13"
              : "col-start-1 col-end-13"
          }`}
        >
          <div>
            <Navbar />{" "}
          </div>

          <div>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
