import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { FaChalkboardTeacher } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "./NewsItemSmall.css";

const NewsItemSmall = ({ news }) => {
  return (
    <div
      className=" border-2 border-dotted border-teal-500 
     hover:border-solid
     hover:border
     hover:scale-90
     transition  duration-500
    bg-white shadow-xl rounded-xl p-5 dark:bg-Dark-ItemBg"
    >
      <img
        className=" flex mx-auto rounded-xl h-48 w-full object-cover object-top"
        src={news.image}
      />

      <div className="">
        <h2 className=" my-5 text-[1.2rem] text-gray-700 dark:text-gray-300">
          {" "}
          {news.title}
        </h2>

        <p className=" my-5 text-[1rem] text-gray-600 line-clamp dark:text-gray-400">
          {news.text}
        </p>

        <NavLink
          to={`/newspage/newsdetail/${news["_id"]}`}
          className="  bg-emerald-700  dark:bg-Dark-Teal text-green-100  
        my-3  w-full p-3 rounded-lg text-center flex items-center justify-center
         hover:bg-emerald-500
        "
        >
          بیشتر بخون
        </NavLink>
      </div>
    </div>
  );
};

export default NewsItemSmall;
