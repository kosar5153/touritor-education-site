import React, { useContext, useState } from "react";

import { NavLink, useParams } from "react-router-dom";

import AllCourseContext from "../../../../context/main-data/allDataContext";
import Loader from "../../../commen/Loader/Loader";
import { CgCornerDoubleUpLeft } from "react-icons/cg";
import { MdLeakAdd } from "react-icons/md";
import { IoPersonAddSharp, IoPersonRemove } from "react-icons/io5";
import { BsPatchPlus } from "react-icons/bs";
import { HiMinus } from "react-icons/hi";
import {
  toastifuyErr,
  toastifuySuccess,
} from "../../../../helperFunctions/toastifuy/toastifuy";
import {
  addCourseToStudent,
  removeCourseToStudent,
} from "../../../../services/course-server";

const StToCourse = () => {
  const { allCourses, students, setIsLoading, setforceCourse } =
    useContext(AllCourseContext);

  //   remove states
  const [removeCourse, setrRemoveCourse] = useState();
  const [studentInCourse, setStudentInCourse] = useState();
  const [removeStudent, setRemoveStudent] = useState();

  //   add states
  const [addCourse, setAddCourse] = useState();
  const [addStudent, setAddStudent] = useState();

  // handelAddSubmit
  const handelAddSubmit = async (event) => {
    event.preventDefault();
    console.log(addCourse, addStudent);
    if (addCourse && addStudent) {
      try {
        setIsLoading(true);
        const res = await addCourseToStudent(
          {
            courseId: addCourse,
          },
          addStudent
        );

        if (res.status === 200) {
          setIsLoading(false);
          toastifuySuccess("دانشجو با موفقیت به دوره مورد نظر اضافه شد");
          setforceCourse((prevState) => !prevState);
          setAddStudent("");
          setStudentInCourse("");
          setRemoveStudent("");
          setrRemoveCourse("");
        }
      } catch (error) {
        setIsLoading(false);
        if (error.response.status === 400) {
          toastifuyErr("   ظرفیت پر است");
        } else if (error.response.status === 404) {
          toastifuyErr(" دانشجو قبلا به دوره اضافه شده ");
        } else {
          toastifuyErr("مشکلی پیش آمده است");
        }
        console.log(error.response.status);
      }
    } else {
      toastifuyErr("دوره یا دانشجو را انتخاب کنید");
    }
  };

  //  handelremoveCourse
  const handelremoveCourse = (event) => {
    setrRemoveCourse(event.target.value);
    let courseItem = allCourses.find((it) => it["_id"] === event.target.value);

    setStudentInCourse(courseItem.students);
  };

  // handelRemoveSubmit
  const handelRemoveSubmit = async (event) => {
    event.preventDefault();
    console.log(removeCourse, removeStudent);
    if (removeCourse && removeStudent) {
      try {
        setIsLoading(true);
        const res = await removeCourseToStudent(
          {
            courseId: removeCourse,
          },
          removeStudent
        );

        if (res.status === 200) {
          setIsLoading(false);
          toastifuySuccess("دانشجو با موفقیت از دوره مورد نظر حذف شد");
          setforceCourse((prevState) => !prevState);
          setStudentInCourse("");
          setRemoveStudent("");
        }
      } catch (error) {
        setIsLoading(false);
        if (error.response.status === 404) {
          toastifuyErr("دانشجویی با آیدی داده شده در این دوره یافت نشد");
        } else if (error.response.status === 500) {
          toastifuyErr("خطایی رخ داده است، لطفا دوباره امتحان کنید");
        } else {
          toastifuyErr("مشکلی پیش آمده است");
        }
      }
    } else {
      toastifuyErr("دوره یا دانشجو را انتخاب کنید");
    }
  };

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
            <MdLeakAdd className=" text-xl ml-1 " />
            دانشجو و دوره
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
            <div
              className="  text-gray-600 dark:bg-Dark-Sea p-5 rounded-md mb-5 
              shadow-lg  bg-gray-200
             "
            >
              <form onSubmit={handelAddSubmit}>
                <div className=" flex justify-between items-center">
                  <span className="flex items-center gap-1">
                    <IoPersonAddSharp /> افزودن دانشجو به دوره :
                  </span>
                  <button
                    className=" flex items-center justify-center gap-1 
                  bg-emerald-600 text-gray-50 px-2 py-1 
                  text-[12px] rounded hover:bg-emerald-700"
                  >
                    <BsPatchPlus className="animate-TwCon-round-Anim text-[13px]" />
                    افزودن
                  </button>
                </div>

                <div
                  className=" grid grid-cols-1 my-2 gap-3 mt-5 w-full        
                 md:grid-cols-2
                "
                >
                  <select
                    className=" bg-gray-100 p-4 border-2 rounded-lg border-emerald-300"
                    onChange={(e) => setAddCourse(e.target.value)}
                    value={addCourse}
                  >
                    <option>انتخاب دوره مورد نظر</option>

                    {allCourses.map((it) => (
                      <option value={it["_id"]}>{it.title}</option>
                    ))}
                  </select>
                  <select
                    className=" bg-gray-100 p-4 border-2 rounded-lg border-emerald-300"
                    onChange={(e) => setAddStudent(e.target.value)}
                    value={addStudent}
                  >
                    <option>انتخاب دانشجوی مورد نظر</option>

                    {students &&
                      students.map((it) => (
                        <option value={it["_id"]}>{it.fullName}</option>
                      ))}
                  </select>
                </div>
              </form>
            </div>

            <div
              className="  text-gray-600 dark:bg-Dark-Sea p-5 rounded-md mb-5 
              shadow-lg bg-gray-200
             "
            >
              <form onSubmit={handelRemoveSubmit}>
                <div>
                  <div className=" flex justify-between items-center">
                    <span className="flex items-center gap-1">
                      <IoPersonRemove /> حذف دانشجو از دوره :
                    </span>
                    <button
                      className=" flex items-center justify-center gap-1 
                  bg-red-600 text-gray-50
                   px-2 py-1 text-[12px] rounded hover:bg-red-700"
                    >
                      <HiMinus className=" text-[13px]" />
                      حذف
                    </button>
                  </div>
                  <div
                    className=" grid grid-cols-1 my-2 gap-3 mt-5 w-full
                   md:grid-cols-2
                  "
                  >
                    <select
                      className=" bg-gray-100 p-4 border-2 rounded-lg border-red-300"
                      onChange={(event) => handelremoveCourse(event)}
                      value={removeCourse}
                    >
                      <option>انتخاب دوره مورد نظر</option>

                      {allCourses.map((it) => (
                        <option value={it["_id"]}>{it.title}</option>
                      ))}
                    </select>
                    <select
                      className=" bg-gray-100 p-4 border-2 rounded-lg border-red-300"
                      onChange={(e) => setRemoveStudent(e.target.value)}
                    >
                      <option>انتخاب دانشجوی مورد نظر</option>
                      {studentInCourse && studentInCourse.length > 0 ? (
                        studentInCourse.map((it) => (
                          <option value={it["_id"]}>{it.fullName}</option>
                        ))
                      ) : (
                        <option>دانشجویی برای این دوره وجود ندارد</option>
                      )}
                    </select>
                  </div>
                </div>
              </form>
            </div>
          </>
        </div>
      </div>
    </div>
  );
};

export default StToCourse;
