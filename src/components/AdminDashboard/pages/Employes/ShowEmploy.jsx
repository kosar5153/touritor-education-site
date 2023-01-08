import React, { useContext } from "react";
import { ImEye } from "react-icons/im";

import { NavLink, useParams } from "react-router-dom";

import AllCourseContext from "../../../../context/main-data/allDataContext";
import Loader from "../../../commen/Loader/Loader";
import { CgCornerDoubleUpLeft } from "react-icons/cg";
import { handelDate } from "../../../../helperFunctions/changeDate";

const ShowEmploy = () => {
  const { shId } = useParams();

  const { employes } = useContext(AllCourseContext);

  const employItem = employes.find((item) => item["_id"] === shId);

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
          <span className=" text-xl text-gray-700 flex items-center justify-center dark:text-gray-300">
            <ImEye className=" text-xl ml-1" />
            {employItem.role === "admin" ? "ادمین" : "استاد"}{" "}
            {employItem.fullName}
          </span>
          <NavLink
            to={"/admindashboard/pages/employes/"}
            className=" text-3xl  text-rose-400  hover:text-rose-500 "
          >
            <CgCornerDoubleUpLeft />
          </NavLink>
        </div>
        <div className=" mt-10 ">
          <>
            <div className=" bg-orange-100 dark:bg-orange-100/20 p-5 rounded-md">
              <ul className=" grid grid-cols-1 sm:grid-cols-2 gap-8 ">
                <li className=" bg-orange-500 p-5 rounded-lg  text-gray-50">
                  <div className=" flex justify-center items-end gap-10">
                    <img
                      src={
                        employItem.profile
                          ? employItem.profile
                          : require("../../../../Assets/images/gift/Spinner.gif")
                      }
                      className=" w-72 object-cover object-top rounded-md"
                    />
                  </div>
                </li>

                <li className=" bg-orange-500 p-5 rounded-lg  text-gray-50">
                  <span className=" mb-3 text-[14px]"> نقش : </span>

                  <div className=" w-full rounded mt-2 min-h-10  py-3   bg-teal-50 px-4 text-gray-700">
                    {employItem.role === "admin" ? "ادمین" : "استاد"}{" "}
                  </div>
                </li>

                <li className=" bg-orange-500 p-5 rounded-lg  text-gray-50">
                  <span className=" mb-3 text-[14px]">نام : </span>
                  <div className=" w-full rounded mt-2 min-h-10  py-3   bg-teal-50 px-4 text-gray-700">
                    {employItem.fullName}
                  </div>
                </li>

                <li className=" bg-orange-500 p-5 rounded-lg  text-gray-50">
                  <span className=" mb-3 text-[14px]"> ایمیل : </span>

                  <div className=" w-full rounded mt-2 min-h-10  py-3   bg-teal-50 px-4 text-gray-700">
                    {employItem.email}{" "}
                  </div>
                </li>

                <li className=" bg-orange-500 p-5 rounded-lg  text-gray-50">
                  <span className=" mb-3 text-[14px]"> آدرس : </span>

                  <div className=" w-full rounded mt-2 min-h-10  py-3   bg-teal-50 px-4 text-gray-700">
                    {employItem.address}
                  </div>
                </li>
                <li className=" bg-orange-500 p-5 rounded-lg  text-gray-50">
                  <span className=" mb-3 text-[14px]"> تلفن : </span>

                  <div className=" w-full rounded mt-2 min-h-10  py-3   bg-teal-50 px-4 text-gray-700">
                    {employItem.phoneNumber}
                  </div>
                </li>
                <li className=" bg-orange-500 p-5 rounded-lg  text-gray-50">
                  <span className=" mb-3 text-[14px]"> شماره ملی : </span>

                  <div className=" w-full rounded mt-2 min-h-10  py-3   bg-teal-50 px-4 text-gray-700">
                    {employItem.nationalId}
                  </div>
                </li>
                {employItem.role === "teacher" && (
                  <li className=" bg-orange-500 p-5 rounded-lg  text-gray-50">
                    <span className=" mb-3 text-[14px]">
                      {" "}
                      دروس تدریس شده :{" "}
                    </span>
                    <select className=" w-full rounded mt-2 min-h-10  py-3   bg-teal-50 text-gray-700 px-4">
                      {employItem.courses.length > 0 ? (
                        employItem.courses.map((it) => (
                          <option className=" py-3">{`${it.title} ( ${it.lesson.lessonName} ) `}</option>
                        ))
                      ) : (
                        <option>
                          درسی توسط استاد {employItem.fullName} هنوز تدریس نشده
                        </option>
                      )}
                    </select>
                  </li>
                )}
              </ul>
            </div>
          </>
        </div>
      </div>
    </div>
  );
};

export default ShowEmploy;
