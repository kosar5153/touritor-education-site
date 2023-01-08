import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { RiCloseFill, RiQuestionAnswerFill } from "react-icons/ri";
import { changeDateSimple } from "../../../helperFunctions/changeDate";
import Button from "../../commen/Button/Button";
import RespoComment from "./RespoComment";

const UserComment = ({ item }) => {
  const date = changeDateSimple(item.createDate);
  console.log("itemitem", item);
  const [showCommentBox, setshowCommentBox] = useState(false);
  return (
    <>
      <ul
        className="  grid 
      
         grid-cols-1
 
       bg-green-200 my-4 p-3 rounded-lg content-center"
      >
        <li
          className=" flex 
        
         gap-1
         md:gap-0
      justify-between items-center"
        >
          <span className=" text-pink-600 flex items-center gap-1 text-xl animate-pulse">
            <FaUserCircle />
            {item.username}
          </span>
          <span className=" dark:text-gray-400">{date}</span>

          <div className=" relative">
            <button
              className={
                " bg-green-700  px-3 py-2 rounded-md text-white text-[13px]  relative"
              }
              onClick={() => setshowCommentBox(!showCommentBox)}
            >
              {!showCommentBox ? (
                <span className=" flex items-center  gap-1 ">
                  <RiQuestionAnswerFill className=" text-xl" />
                  پاسخ به این پرسش
                </span>
              ) : (
                <RiCloseFill className=" text-xl " />
              )}
            </button>
            {showCommentBox && <RespoComment comId={item["_id"]} />}
          </div>
        </li>

        <li className=" w-full mt-3   dark:text-gray-600">
          <p>{item.comment}</p>
        </li>

        {item.answer && (
          <li
            className=" bg-teal-200 mr-5 mt-4 rounded-lg p-2 border border-teal-700
          dark:text-gray-600
          "
          >
            {item.answer}
          </li>
        )}
      </ul>
    </>
  );
};

export default UserComment;
