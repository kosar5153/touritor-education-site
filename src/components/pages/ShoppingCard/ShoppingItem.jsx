import React, { useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { ImEye } from "react-icons/im";
import { RiEyeCloseFill } from "react-icons/ri";
import { NavLink } from "react-router-dom";

const ShoppingItem = ({ item, removeFromCart }) => {
  return (
    <>
      <li
        className=" bg-INPUT-BLUE m-2  relative
        text-sky-100 rounded shadow-2xl
         hover:text-INPUT-BLUE  hover:border-INPUT-BLUE 
          hover:bg-slate-300 border-b-2 mb-3 md:mb-3   p-3  
          border-INPUT-BLUE  gap-4 lg:gap-10
          grid grid-cols-2   lg:grid-cols-5 
          "
      >
        <img
          className="  col-span-5   lg:col-span-1 mx-auto rounded-md"
          src={item.lesson.image}
        />
        <div className="TwIN-ShopTitle col-span-5  text-center  lg:col-span-3  ">
          <h2 className="w-full text-xl lg:text-[1rem]  block  mb-1">
            {item.title}{" "}
          </h2>
          <span className=" text-[1rem] text-green-600">
            {item.cost.toLocaleString()}
          </span>{" "}
          <span className=" text-[1rem] text-green-600">تومان</span>
        </div>

        <div
          className=" flex   gap-2 col-span-5 lg:col-span-1 order-first  lg:order-last
         lg:flex-col-reverse  lg:items-end  lg:justify-between
         flex-row  items-center  justify-between
        "
        >
          <NavLink
            to={`/allcourse/coursedetail/${item["_id"]}`}
            className=" text-2xl TWIN-eye text-center justify-center flex"
          >
            <RiEyeCloseFill className="close" />
            <ImEye className=" open hidden" />
          </NavLink>

          <div
            onClick={() => removeFromCart()}
            className="  lg:text-2xl  text-3xl hover:text-red-600 flex justify-end   cursor-pointer  text-red-400"
          >
            <AiFillCloseCircle />
          </div>
        </div>
      </li>
    </>
  );
};

export default ShoppingItem;
