import React from "react";
import { MdLocalOffer } from "react-icons/md";
import HomeTitle from "../HomeTitle/HomeTitle";
import Tabs from "../Tabs/Tabs";
import "./SpecialCourse.css";
const SpecialCourse = () => {
  return (
    <div className=" w-full css-special mt-36 ">
      <div
        className=" container mx-auto px-5 md:px-0 py-4
      
      xl:min-h-[180vh]
      "
      >
        <div
          className=" my-16 text-red-500  dark:text-Dark-Pink
        
        xl:text-red-400
        "
        >
          <h2 className=" text-3xl flex items-center justify-center ">
            <span
              className=" ml-1 text-3xl animate-TwCon-lamp-movement 
             text-red-400   dark:text-Dark-Pink"
            >
              {" "}
              <MdLocalOffer />
            </span>
            پیشنهادات ما برای شما
          </h2>
        </div>
        <Tabs />
      </div>
    </div>
  );
};

export default SpecialCourse;
