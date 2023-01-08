import React from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaFacebookF, FaTelegramPlane } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { NavLink } from "react-router-dom";

const TeacherItem = ({ info }) => {
  return (
    <>
      <div
        className="  bg-green-100
         rounded-xl  p-10  drop-shadow-xl
         dark:bg-Dark-ItemBg
         "
      >
        <div className=" flex flex-col justify-between relative">
          <img
            src={
              info.profile
                ? info.profile
                : require("../../../Assets/images/gift/Spinner.gif")
            }
            className={`rounded-xl  w-36  absolute -top-5 -left-5  bg-cyan-700`}
          />
          <ul
            className=" bg-gradient-to-b to-[#14b8a6]  from-[#264067] 
            
            
            w-full flex flex-col 
            justify-center items-start p-5 rounded-xl text-teal-50  pt-10"
          >
            <li className=" text-[1.5rem]"> {info.fullName}</li>
            <li className=" flex justify-between my-6 gap-4 text-[1rem]">
              <NavLink
                to={`/teachers/teacher/${info["_id"]}`}
                className="hover:text-green-400"
              >
                {" "}
                <BsFillTelephoneFill />
              </NavLink>
              <NavLink
                to={`/teachers/teacher/${info["_id"]}`}
                className="hover:text-green-400"
              >
                {" "}
                <RiInstagramFill />
              </NavLink>
              <NavLink
                to={`/teachers/teacher/${info["_id"]}`}
                className="hover:text-green-400"
              >
                {" "}
                <FaTelegramPlane />
              </NavLink>
              <NavLink
                to={`/teachers/teacher/${info["_id"]}`}
                className="hover:text-green-400"
              >
                {" "}
                <FaFacebookF />
              </NavLink>
            </li>
            <li className="  text-rose-200 hover:text-green-200">
              <NavLink to={`/teachers/teacher/${info["_id"]}`}>
                منو بیشتر بشناس
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default TeacherItem;
