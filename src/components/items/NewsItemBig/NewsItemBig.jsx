import React from "react";
import { NavLink, useSearchParams } from "react-router-dom";
import { HiArrowCircleLeft } from "react-icons/hi";
import "./News.css";
const NewsItemBig = ({ item }) => {
  let itemId = item["_id"];
  return (
    <div
      className=" grid grid-cols-3 gap-3 bg-green-50 
    shadow-xl rounded-xl border-teal-600 border-2  border-dotted mb-5
     dark:bg-Dark-ItemBg   
    "
    >
      <div
        className=" col-span-3 h-full 
      sm:col-span-1
      "
      >
        <img
          className="  rounded-t-xl
              h-52  w-full   
          object-cover  object-top
          sm:rounded-l-none sm:rounded-r-xl 
          "
          src={item.image}
        />
      </div>
      <div
        className=" col-span-3 px-4 py-5 gap-3 
      
       flex flex-col justify-center items-start
        sm:col-span-2
      "
      >
        <h2 className=" text-xl text-emerald-700  dark:text-Dark-Sea">
          {item.title}{" "}
        </h2>
        <p
          className=" text-gray-700 leading-loose line-clamp
        dark:text-gray-300"
        >
          {item.text}
        </p>
        <NavLink
          className=" flex items-center text-red-600 text-[14px]      
           hover:scale-110 
            dark:text-Dark-Pink
          "
          to={`newsdetail/${itemId}`}
        >
          مشاهده ادامه مطلب
          <HiArrowCircleLeft className=" mr-1" />
        </NavLink>
      </div>
    </div>
  );
};

export default NewsItemBig;
