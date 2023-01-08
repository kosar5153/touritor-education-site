import React, { useContext } from "react";
import { ImEye } from "react-icons/im";
import { BsJournalPlus } from "react-icons/bs";

import { NavLink, useParams } from "react-router-dom";

import AllCourseContext from "../../../../context/main-data/allDataContext";
import Loader from "../../../commen/Loader/Loader";
import { CgCornerDoubleUpLeft } from "react-icons/cg";

const ShowLesson = () => {
  const { lesId } = useParams();

  const { lessons } = useContext(AllCourseContext);

  const lessonItem = lessons.find((item) => item["_id"] === lesId);

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
            className=" text-xl text-gray-700 flex items-center justify-center
          dark:text-gray-300
          
          "
          >
            <ImEye className=" text-xl ml-1" />
            مشاهده درس {lessonItem.lessonName}
          </span>
          <NavLink
            to={"/admindashboard/pages/lessons/"}
            className=" text-3xl  text-rose-400  hover:text-rose-500 "
          >
            <CgCornerDoubleUpLeft />
          </NavLink>
        </div>
        <div className=" mt-10 ">
          <>
            <div
              className=" bg-cyan-100 p-5 rounded-md
            dark:bg-cyan-100/25
            "
            >
              <ul className=" grid grid-cols-1 md:grid-cols-2 gap-8 ">
                <li className=" bg-teal-500 p-5 rounded-lg  text-gray-700 md:col-span-2">
                  <div className=" flex justify-center items-end gap-10">
                    <img
                      src={lessonItem.image}
                      className=" w-72 object-cover object-top rounded-md"
                    />
                  </div>
                </li>

                <li className=" bg-teal-500 p-5 rounded-lg  text-gray-700">
                  <span className=" mb-3 text-[14px]">نام درس : </span>
                  <div className=" w-full rounded mt-2 min-h-10  py-3   bg-teal-50 px-4">
                    {lessonItem.lessonName}
                  </div>
                </li>

                <li className=" bg-teal-500 p-5 rounded-lg  text-gray-700">
                  <span className=" mb-3 text-[14px]">موضوع درس : </span>

                  <div className=" w-full rounded mt-2 min-h-10  py-3   bg-teal-50 px-4">
                    {lessonItem.topics.map((it) => it)}
                  </div>
                </li>

                <li className=" bg-teal-500 p-5 rounded-lg  text-gray-700">
                  <span className=" mb-3 text-[14px]">دسته درس : </span>

                  <div className=" w-full rounded mt-2 min-h-10  py-3   bg-teal-50 px-4">
                    {lessonItem.category}
                  </div>
                </li>

                <li className=" bg-teal-500 p-5 rounded-lg  text-gray-700">
                  <span className=" mb-3 text-[14px]">توضیحات درس : </span>

                  <div className=" w-full rounded mt-2 min-h-10  py-3   bg-teal-50 px-4">
                    {lessonItem.description}
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

export default ShowLesson;
