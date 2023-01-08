import React, { useContext } from "react";
import { ImEye } from "react-icons/im";

import { NavLink, useParams } from "react-router-dom";

import AllCourseContext from "../../../../context/main-data/allDataContext";
import { CgCornerDoubleUpLeft } from "react-icons/cg";
import { Loading } from "../../../commen/Loading/Loading";
import { AdminContext } from "../../../../context/admin-context/AdminContext";
import { useEffect } from "react";
import { getStudentById } from "../../../../services/student-services";
import { useState } from "react";

const ShowStudent = () => {
  const { stId } = useParams();
  const { adminStorageToken } = useContext(AdminContext);

  const [studentItem, setstudentItem] = useState("");

  const getOneData = async () => {
    try {
      const result = await getStudentById(stId);
      console.log("getStudentById");
      setstudentItem(result.data.result);
    } catch {}
  };

  useEffect(() => {
    getOneData();
  }, [stId]);

  // usereducer

  return (
    <>
      {adminStorageToken && !studentItem ? (
        <Loading />
      ) : (
        <div className=" p-7  ">
          <div
            className=" p-7 py-8 bg-white rounded-lg shadow-md min-h-screen
      
        flex flex-col justify-start relative overflow-x-hidden dark:bg-Dark-ItemBg 
      "
          >
            <div className="flex justify-between items-center">
              <div></div>
              <span className=" text-xl text-gray-700 dark:text-gray-300 flex items-center justify-center">
                <ImEye className=" text-xl ml-1" />
                {studentItem.fullName}
              </span>
              <NavLink
                to={"/admindashboard/pages/students/"}
                className=" text-3xl  text-rose-400  hover:text-rose-500 "
              >
                <CgCornerDoubleUpLeft />
              </NavLink>
            </div>
            <div className=" mt-10 ">
              <>
                <div className=" bg-purple-100 dark:bg-purple-100/30 p-5 rounded-md">
                  <ul className=" grid grid-cols-1 sm:grid-cols-2 gap-8 ">
                    <li className=" bg-purple-600 p-5 rounded-lg  text-gray-50">
                      <div className=" flex justify-center items-end gap-10">
                        <img
                          src={
                            studentItem.profile
                              ? studentItem.profile
                              : require("../../../../Assets/images/gift/Spinner.gif")
                          }
                          className=" w-72 object-cover object-top rounded-md"
                        />
                      </div>
                    </li>

                    <li className=" bg-purple-600 p-5 rounded-lg  text-gray-50">
                      <span className=" mb-3 text-[14px]">نام : </span>
                      <div className=" w-full rounded mt-2 min-h-10  py-3   bg-teal-50 px-4 text-gray-700">
                        {studentItem.fullName}
                      </div>
                    </li>

                    <li className=" bg-purple-600 p-5 rounded-lg  text-gray-50">
                      <span className=" mb-3 text-[14px]"> ایمیل : </span>

                      <div className=" w-full rounded mt-2 min-h-10  py-3   bg-teal-50 px-4 text-gray-700">
                        {studentItem.email}{" "}
                      </div>
                    </li>

                    <li className=" bg-purple-600 p-5 rounded-lg  text-gray-50">
                      <span className=" mb-3 text-[14px]"> تلفن : </span>

                      <div className=" w-full rounded mt-2 min-h-10  py-3   bg-teal-50 px-4 text-gray-700">
                        {studentItem.phoneNumber}
                      </div>
                    </li>

                    <li className=" bg-purple-600 p-5 rounded-lg  text-gray-50">
                      <span className=" mb-3 text-[14px]">
                        {" "}
                        دروس خریداری شده :{" "}
                      </span>
                      <select className=" w-full rounded mt-2 min-h-10  py-3   bg-teal-50 text-gray-700 px-4">
                        {studentItem.courses.length > 0 ? (
                          studentItem.courses.map((it) => (
                            <option className=" py-3">{`${it.title} ( ${it.lesson.lessonName} ) `}</option>
                          ))
                        ) : (
                          <option>هنوز درسی خریداری نشده</option>
                        )}
                      </select>
                    </li>
                  </ul>
                </div>
              </>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ShowStudent;
