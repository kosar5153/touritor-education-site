import React, { useState } from "react";
import { BsFillCloudArrowDownFill } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { AiOutlineCloudDownload } from "react-icons/ai";

const CourseUlVideo = ({ item }) => {
  const [closeVideo, setCloseVideo] = useState(false);
  return (
    <>
      {" "}
      <ul
        className=" hover:border-green-500   w-full border-4 border-Main-Blue
       border-dotted p-5 my-4
       dark:hover:border-Dark-Sea dark:border-Dark-Teal
       "
      >
        <li
          className="  
     grid grid-cols-2
    "
        >
          <div className=" flex">
            {" "}
            <span
              className=" ml-2 border border-green-400 rounded px-3
             dark:border-Dark-Sea
            "
            >
              {item.id}
            </span>
            <h2> {item.title}</h2>
          </div>
          <div className="  flex items-end  justify-end">
            <span>{item.time}</span>
            <span
              className=" cursor-pointer mr-3 text-4xl"
              onClick={() => setCloseVideo(!closeVideo)}
            >
              <BsFillCloudArrowDownFill
                className={
                  closeVideo
                    ? " text-Main-Blue  hover:scale-110  dark:text-Dark-Teal"
                    : "text-green-700  hover:text-Main-Blue  dark:text-Dark-Sea"
                }
              />
            </span>
          </div>
        </li>
        <li className={closeVideo ? `flex flex-col` : `hidden`}>
          <div className=" w-full mb-8  py-6">
            <video controls src={item.href} className=" w-full rounded-xl" />
          </div>
          <NavLink
            download={true}
            to={item.href}
            className=" flex justify-center items-center 
            bg-green-700  p-4 rounded-lg text-white
             hover:bg-Main-Blue
              dark:bg-Dark-Teal dark:hover:bg-Dark-Pink
            "
          >
            <AiOutlineCloudDownload className=" text-3xl ml-2" />
            دانلود این بخش
          </NavLink>
        </li>
      </ul>
    </>
  );
};

export default CourseUlVideo;
