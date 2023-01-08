import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./HomeCourseItem.css";

import { RiUserHeartFill } from "react-icons/ri";
import ShoppingCardContext from "../../../context/shopping-cart-context/shoppingCard-context";
import { IoBagAddSharp, IoBagRemoveSharp } from "react-icons/io5";

import StarCourse from "../StarCourse/StarCourse";
import HomeCourseClick from "./HomeCourseClick";

const HomeCourseItem = ({ item }) => {
  const { addToCart, removeFromCart, cart } = useContext(ShoppingCardContext);
  const [clicked, setClicked] = useState(false);

  return (
    <>
      <div
        className="css-HomeCourseItem bg-green-50 p-5 rounded-2xl shadow-xl border border-teal-500
    relative 
      transition-all duration-700
       dark:bg-Dark-ItemBg
    "
      >
        <img
          className=" rounded-xl  flex mx-auto  relative -top-20 w-full  h-48 object-top object-cover  cursor-cell"
          src={`${item.lesson.image}`}
          // src={require("../../../Assets/images/Touritor/course_image8.jpg")}

          onClick={() => setClicked(true)}
        />
        <div className=" flex flex-col text-teal-800  gap-3   text-lg -mt-7 ">
          <div className="  flex items-center  justify-between ">
            <h2 className=" dark:text-gray-300"> {item.title}</h2>
            {/* shop */}
            <div className=" ">
              {cart.some((p) => p["_id"] === item["_id"]) ? (
                <div
                  onClick={() => {
                    removeFromCart(item);
                  }}
                  className={
                    " text-4xl text-green-500 dark:text-Dark-Sea  cursor-pointer"
                  }
                >
                  <IoBagRemoveSharp />
                </div>
              ) : (
                <div
                  onClick={() => {
                    addToCart(item);
                  }}
                  className={
                    " text-4xl text-orange-500  dark:text-orange-400 cursor-pointer"
                  }
                >
                  <IoBagAddSharp />
                </div>
              )}
            </div>
          </div>
          <hr className=" border-[1px]" />
          <div className=" flex justify-between items-center  ">
            <div className=" flex justify-start items-start   text-teal-600 dark:text-Dark-Teal">
              <RiUserHeartFill />
              <span>{item.teacher.fullName}</span>
            </div>

            {item.cost === 0 ? (
              <div className="flex justify-start items-center text-red-500 dark:text-Dark-Pink">
                رایگان
              </div>
            ) : (
              <div className="flex justify-start items-center text-red-500 dark:text-Dark-Pink">
                {item.cost.toLocaleString()}
                <span className="mr-2">تومان</span>
              </div>
            )}
          </div>
          <div
            className="  flex   justify-center 
          absolute top-28 right-0 w-full"
          >
            <div className="text-yellow-400 text-2xl bg-teal-800/80 dark:bg-Dark-Teal/80 p-2 gap-2 rounded-full">
              <StarCourse />
            </div>
          </div>

          <NavLink
            to={`allcourse/coursedetail/${item["_id"]}`}
            className=" bg-teal-800  dark:bg-Dark-Teal text-teal-100  mb-3 
        mt-3   p-3 rounded-lg text-center flex items-center justify-center
         hover:bg-teal-600
        "
          >
            مشاهده دوره
          </NavLink>
        </div>
      </div>
      {clicked && <HomeCourseClick item={item} closeClickBox={setClicked} />}
    </>
  );
};

export default HomeCourseItem;
