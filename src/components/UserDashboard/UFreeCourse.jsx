import React from "react";

import { MdFreeBreakfast } from "react-icons/md";
import { NavLink } from "react-router-dom";

const UFreeCourse = () => {
  return (
    <div>
      {" "}
      <ul>
        <li className=" bg-red-300 hover:bg-red-400 p-5 rounded-lg my-4 text-gray-700">
          <NavLink to="/" className=" flex justify-between items-center w-full">
            آموزش صفر تا صد ری اکت جی اس
            <MdFreeBreakfast />
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default UFreeCourse;
