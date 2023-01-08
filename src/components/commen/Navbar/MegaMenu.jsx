import React from "react";
import { NavLink } from "react-router-dom";

const MegaMenu = ({ dropDown }) => {
  return (
    <ul
      className=" static w-[80%] mx-auto mb-3
         lg:absolute  flex-col  lg:w-52   items-center
         top-10   rounded-xl 
       text-teal-50  p-5 bg-cyan-900 shadow-2xl hidden "
      style={{
        zIndex: 1000,
      }}
    >
      {dropDown.map((it) => (
        <li
          key={it.id}
          className="w-full mb-4 border-b pb-2 hover:border-cyan-700 
          hover:border-solid
           border-dashed"
        >
          <NavLink to={it.href} className=" flex justify-start  items-center">
            <span className=" ml-4 text-xl">{it.logo}</span>
            <span>{it.coursName}</span>
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default MegaMenu;
