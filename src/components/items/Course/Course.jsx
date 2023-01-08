import React, { useContext, useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { FaChalkboardTeacher, FaShoppingCart } from "react-icons/fa";
import { GiReturnArrow } from "react-icons/gi";
import { IoBagAddSharp, IoBagRemoveSharp } from "react-icons/io5";
import { TbDiscount2 } from "react-icons/tb";
import { NavLink } from "react-router-dom";
import ShoppingCardContext from "../../../context/shopping-cart-context/shoppingCard-context";
import StarCourse from "../StarCourse/StarCourse";

const Course = ({ item, discount, discountRange, freeCourse, offerCourse }) => {
  const [shopIcon, setShopIcon] = useState(false);
  let { addToCart, removeFromCart, cart } = useContext(ShoppingCardContext);

  let disr = 0;
  if (discountRange > 0) {
    disr = discountRange * 10;
  } else {
    disr = 10;
  }
  let cdr = item.cost * disr;
  let finalC = cdr / 100;
  return (
    <div
      className=" bg-green-100 shadow-xl rounded-2xl p-5 relative
    
    hover:border-dotted
    hover:border-2
     hover:border-x-Main-Blue
      hover:border-y-Main-Green
    hover:scale-90
    transition  duration-500
    dark:bg-Dark-ItemBg
    "
    >
      <img
        className=" flex mx-auto  w-full h-52 object-cover object-top rounded-lg mb-10"
        src={item.lesson.image}
        // src={require("../../../Assets/images/Touritor/course_image13.jpg")}
      />

      {/* (Number(item.cost) * Number(discountRange)) / 100 */}
      <div
        className="mt-2  text-green-50 px-8 py-1  w-full  
       rounded-full  absolute top-[12.7rem] right-0 flex justify-center"
      >
        <div
          className={`${freeCourse ? "bg-red-700/80 " : "bg-green-800/80"}      
        ${
          offerCourse ? "bg-blue-600/80 " : "bg-green-800/80"
        } px-10 py-1 rounded-full`}
        >
          {discountRange ? (
            <>
              <span className=" ">{item.cost - finalC}</span>
              {console.log(item.cost - finalC, discountRange)}
              <span className=" mr-1">تومان</span>
              <span className="flex line-through text-gray-400 text-[12px]">
                {item.cost.toLocaleString()}
              </span>
            </>
          ) : (
            <>
              {item.cost.toLocaleString()}
              <span className=" mr-1">تومان</span>
            </>
          )}
        </div>
      </div>
      <div className={`${discountRange ? " mt-14" : null} mb-3`}>
        <div className=" flex justify-between items-center mt-3 mb-2">
          <h2 className=" text-xl text-[#242c7c] dark:text-gray-300">
            {item.title}
          </h2>
          {discount && (
            <span className=" text-rose-600 dark:text-Dark-Pink text-xl flex flex-row-reverse items-center gap-1">
              {discountRange > 0 ? discountRange * 10 : 10}{" "}
              <TbDiscount2 className=" text-3xl animate-TwCon-round-Anim" />
            </span>
          )}
        </div>
        <div className=" flex justify-between items-center mt-3 mb-2">
          <div className=" flex justify-start items-center my-3 text-[#2d38b1] dark:text-gray-400">
            <FaChalkboardTeacher className=" text-2xl ml-2" />
            <span className=" ml-1">استاد</span>
            {item.teacher.fullName}
          </div>

          <div className=" ">
            {cart.some((p) => p["_id"] === item["_id"]) ? (
              <div
                onClick={() => removeFromCart(item)}
                className={
                  " text-4xl text-green-500  dark:text-Dark-Teal cursor-pointer"
                }
              >
                <IoBagRemoveSharp />
              </div>
            ) : (
              <div
                onClick={() => addToCart(item)}
                className={" text-4xl   text-amber-500  cursor-pointer"}
              >
                <IoBagAddSharp />
              </div>
            )}
          </div>
        </div>

        <hr />
        <div className=" flex justify-between items-center">
          <div className=" text-amber-500  text-2xl flex">
            <StarCourse />
          </div>
          <NavLink
            to={`/allcourse/coursedetail/${item["_id"]}`}
            className=" bg-green-800 text-green-100  
        mt-4   p-3 rounded-lg text-center flex items-center justify-center
         hover:bg-[#0a0f3f] mb-1
          dark:bg-Dark-Teal
        "
          >
            <GiReturnArrow />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Course;
