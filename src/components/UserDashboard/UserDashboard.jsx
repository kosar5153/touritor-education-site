import React from "react";

import { RiDashboardFill } from "react-icons/ri";
import { Outlet } from "react-router-dom";

import Title from "../commen/Title/Title";
import USidebar from "./USidebar/USidebar";

const UserDashboard = () => {
  return (
    <div>
      <Title iconBox={<RiDashboardFill />}>داشبورد</Title>
      <div className=" container mx-auto  px-5 md:px-10 ">
        <div className=" grid grid-cols-12 gap-4">
          <div
            className=" p-2 bg-Main-Green shadow-xl rounded-lg 
            col-span-12
          md:col-span-3
          lg:col-span-3
          xl:col-span-2
            dark:bg-Dark-Teal
          "
          >
            <USidebar />
          </div>
          <div
            className=" border-y-4 border-Main-Green p-5 bg-green-100 
          shadow-xl rounded-lg 
         col-span-12 
          md:col-span-9
          lg:col-span-9
          xl:col-span-10
          dark:bg-Dark-ItemBg dark:border-Dark-Teal
          "
          >
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
