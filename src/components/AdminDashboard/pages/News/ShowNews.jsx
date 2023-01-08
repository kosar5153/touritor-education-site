import React, { useContext } from "react";
import { ImEye } from "react-icons/im";
import { BsJournalPlus } from "react-icons/bs";

import { NavLink, useParams } from "react-router-dom";

import AllCourseContext from "../../../../context/main-data/allDataContext";
import Loader from "../../../commen/Loader/Loader";
import { CgCornerDoubleUpLeft } from "react-icons/cg";

const ShowNews = () => {
  const { neId } = useParams();

  const { allNews } = useContext(AllCourseContext);

  const newsItem = allNews.find((item) => item["_id"] === neId);

  // usereducer

  return (
    <div className=" p-7  ">
      <div
        className=" p-7 py-8 bg-white rounded-lg shadow-md min-h-screen
      
        flex flex-col justify-start relative overflow-x-hidden
        dark:bg-Dark-ItemBg
      "
      >
        <Loader />
        <div className="flex justify-between items-center">
          <div></div>
          <span
            className=" text-xl text-gray-700 
          flex items-center justify-center
           dark:text-gray-300
          "
          >
            <ImEye className=" text-xl ml-1" />
            {newsItem.title}
          </span>
          <NavLink
            to={"/admindashboard/pages/news/"}
            className=" text-3xl  text-rose-400  hover:text-rose-500 "
          >
            <CgCornerDoubleUpLeft />
          </NavLink>
        </div>
        <div className=" mt-10 ">
          <>
            <div
              className=" bg-lime-100 p-5 rounded-md
            dark:bg-lime-100/20 
            "
            >
              <ul className=" grid grid-cols-1 sm:grid-cols-1 gap-8 ">
                <li className=" bg-lime-700/80 p-5 rounded-lg  text-gray-700">
                  <div className=" flex justify-center items-end gap-10">
                    <img
                      src={
                        newsItem.image
                          ? newsItem.image
                          : require("../../../../Assets/images/gift/Spinner.gif")
                      }
                      className=" w-72 object-cover object-top rounded-md"
                    />
                  </div>
                </li>

                <li className=" bg-lime-700/80 p-5 rounded-lg  text-gray-50 ">
                  <span className=" mb-3 text-[14px]">موضوع خبر : </span>
                  <div className=" w-full rounded mt-2 min-h-10  py-3   bg-teal-50 px-4 text-gray-700">
                    {newsItem.text}
                  </div>
                </li>
              </ul>
            </div>
          </>
        </div>
      </div>
    </div>
  );
};

export default ShowNews;
