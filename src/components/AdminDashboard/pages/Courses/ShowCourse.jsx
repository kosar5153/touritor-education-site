import React, { useContext } from "react";
import { ImEye } from "react-icons/im";

import { NavLink, useParams } from "react-router-dom";

import AllCourseContext from "../../../../context/main-data/allDataContext";
import Loader from "../../../commen/Loader/Loader";
import { CgCornerDoubleUpLeft } from "react-icons/cg";
import { handelDate } from "../../../../helperFunctions/changeDate";

const ShowCourse = () => {
  const { shId } = useParams();

  const { allCourses } = useContext(AllCourseContext);

  const courseItem = allCourses.find((item) => item["_id"] === shId);

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
          <span className=" text-xl text-gray-700 dark:text-gray-300 flex items-center justify-center">
            <ImEye className=" text-xl ml-1 " />
            دوره {courseItem.title}
          </span>
          <NavLink
            to={"/admindashboard/pages/courses/"}
            className=" text-3xl  text-rose-400  hover:text-rose-500 "
          >
            <CgCornerDoubleUpLeft />
          </NavLink>
        </div>
        <div className=" mt-10 ">
          <>
            <div className=" bg-rose-50 dark:bg-rose-50/25 p-5 rounded-md">
              <ul
                className=" grid 
              grid-cols-1            
              md:grid-cols-2        
              lg:grid-cols-3
              gap-8 "
              >
                <li className=" bg-rose-500 p-5 rounded-lg  text-gray-700 md:col-span-2 lg:col-span-3">
                  <div className=" flex justify-center items-end gap-10">
                    <img
                      src={courseItem.lesson.image}
                      className=" w-72 object-cover object-top rounded-md"
                    />
                  </div>
                </li>

                <li className=" bg-rose-500 p-5 rounded-lg  text-gray-700">
                  <span className=" mb-3 text-[14px] text-gray-50">
                    نام دوره :{" "}
                  </span>
                  <div className=" w-full rounded mt-2 min-h-10  py-3 bg-teal-50 px-4">
                    {courseItem.title}
                  </div>
                </li>

                <li className=" bg-rose-500 p-5 rounded-lg  text-gray-700">
                  <span className=" mb-3 text-[14px] text-gray-50">
                    {" "}
                    نام درس ارایه شده :{" "}
                  </span>

                  <div className=" w-full rounded mt-2 min-h-10  py-3   bg-teal-50 px-4">
                    {courseItem.lesson.lessonName}
                  </div>
                </li>

                <li className=" bg-rose-500 p-5 rounded-lg  text-gray-700">
                  <span className=" mb-3 text-[14px] text-gray-50">
                    نام استاد :{" "}
                  </span>

                  <div className=" w-full rounded mt-2 min-h-10  py-3   bg-teal-50 px-4">
                    {courseItem.teacher.fullName}
                  </div>
                </li>

                <li className=" bg-rose-500 p-5 rounded-lg  text-gray-700">
                  <span className=" mb-3 text-[14px] text-gray-50">
                    ایمیل استاد :{" "}
                  </span>

                  <div className=" w-full rounded mt-2 min-h-10  py-3   bg-teal-50 px-4">
                    {courseItem.teacher.email}
                  </div>
                </li>

                <li className=" bg-rose-500 p-5 rounded-lg  text-gray-700">
                  <span className=" mb-3 text-[14px] text-gray-50">
                    قیمت دوره :{" "}
                  </span>

                  <div className=" w-full rounded mt-2 min-h-10  py-3   bg-teal-50 px-4">
                    {courseItem.cost}
                  </div>
                </li>

                <li className=" bg-rose-500 p-5 rounded-lg  text-gray-700">
                  <span className=" mb-3 text-[14px] text-gray-50">
                    ظرفیت دوره :{" "}
                  </span>

                  <div className=" w-full rounded mt-2 min-h-10  py-3   bg-teal-50 px-4">
                    {courseItem.capacity}
                  </div>
                </li>

                <li className=" bg-rose-500 p-5 rounded-lg  text-gray-700">
                  <span className=" mb-3 text-[14px] text-gray-50">
                    {" "}
                    دانشجویان این دوره :{" "}
                  </span>

                  <select className=" w-full rounded mt-2 min-h-10  py-3   bg-teal-50 px-4  focus:outline-teal-700">
                    {courseItem.students.lenght > 0 ? (
                      courseItem.students.map((it) => <option>it</option>)
                    ) : (
                      <option>دانشجویی ثبتنام نکرده است </option>
                    )}
                  </select>
                </li>
              </ul>
            </div>
          </>
        </div>
      </div>
    </div>
  );
};

export default ShowCourse;
