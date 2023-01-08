import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { sideData } from "./sideData";

import { UserInfoContext } from "../../../context/user-context/UserInfoContext";
import { isEmpty } from "lodash";
import { Loading } from "../../commen/Loading/Loading";

const USidebar = () => {
  const { userData } = useContext(UserInfoContext);
  const navigate = useNavigate();
  return (
    <>
      <div className="   rounded-lg">
        {isEmpty(userData) ? (
          <Loading />
        ) : userData.profile ? (
          <img className=" w-full rounded-lg" src={userData.profile} />
        ) : (
          <img
            className=" w-full rounded-lg opacity-90"
            src={require("../../../Assets/images/Touritor/s2.gif")}
          />
        )}

        <ul className=" my-2">
          {sideData.map((item, index) => (
            <li
              key={index}
              className=" text-[14px]  mb-3 border-b border-b-Main-Blue/30 border-dotted  text-Main-Blue hover:bg-green-300 py-2  rounded"
            >
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? " flex items-center  bg-Main-Blue text-white p-1 px-2 rounded scale-95"
                    : " flex items-center"
                }
                to={item.href}
              >
                <span className=" ml-1 text-xl">{item.icon}</span>
                {item.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default USidebar;
