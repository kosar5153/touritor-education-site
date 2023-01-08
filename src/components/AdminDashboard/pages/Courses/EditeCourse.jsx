import React, { useContext, useReducer } from "react";
import { useState } from "react";
import { BsPatchPlus } from "react-icons/bs";
import { CgCornerDoubleUpLeft } from "react-icons/cg";
import { HiMinus } from "react-icons/hi";
import { TbEdit } from "react-icons/tb";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import AllCourseContext from "../../../../context/main-data/allDataContext";
import { handelDate } from "../../../../helperFunctions/changeDate";
import {
  toastifuyErr,
  toastifuySuccess,
} from "../../../../helperFunctions/toastifuy/toastifuy";
import { getAllCourse, updateCourse } from "../../../../services/course-server";
import Loader from "../../../commen/Loader/Loader";

import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import "react-multi-date-picker/styles/colors/teal.css";
import transition from "react-element-popper/animations/transition";
import { useEffect } from "react";

const EditeCourse = () => {
  // navigate
  const navigate = useNavigate();

  // context
  const { teachers, lessons, allCourses, setIsLoading, setAllCourses } =
    useContext(AllCourseContext);

  const { edId } = useParams();
  const courseItem = allCourses.find((item) => item["_id"] === edId);

  const initialValues = courseItem;

  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();

  console.log(startDate);
  console.log(endDate);

  const reducer = (state, action) => {
    switch (action.type) {
      case "CH_TITLE":
        return { ...state, title: action.payload };

      case "CH_COST":
        return { ...state, cost: Number(action.payload) };

      case "CH_TEACHER":
        return { ...state, teacher: action.payload };

      case "CH_LESSON":
        return { ...state, lesson: action.payload };
      case "CH_CAPACITY":
        return { ...state, capacity: Number(action.payload) };
    }
  };
  const [state, dispatch] = useReducer(reducer, initialValues);

  const handelChangeSubmit = async (event) => {
    event.preventDefault();

    const updatestate = {
      title: state.title,
      cost: state.cost,
      startDate: `${startDate.year}/${
        startDate.month.number > 10
          ? `${startDate.month.number}`
          : `0${startDate.month.number}`
      }/${startDate.day > 10 ? `${startDate.day}` : `0${startDate.day}`}`,
      endDate: `${endDate.year}/${
        endDate.month.number > 10
          ? `${endDate.month.number}`
          : `0${endDate.month.number}`
      }/${endDate.day > 10 ? `${endDate.day}` : `0${endDate.day}`}`,
      capacity: state.capacity,
      teacher: state.teacher,
      lesson: state.lesson,
    };

    try {
      setIsLoading(true);
      const { data, status } = await updateCourse(edId, updatestate);
      setIsLoading(false);
      if (status === 200) {
        toastifuySuccess("دوره با موفقیت تغییر یافت");
        // courses

        try {
          setIsLoading(true);
          let { data } = await getAllCourse();
          let coursesResult = data.result;
          setAllCourses(coursesResult);
          setIsLoading(false);
          return navigate("/admindashboard/pages/courses");
        } catch (err) {
          console.log(err);
        }
      }
    } catch (error) {
      toastifuyErr("مشکلی در به روز رسانی بوجود آمده");
      toastifuyErr("لطفا اطلاعات و فرمت تاریخ را درست وارد نمایید  ");
      setIsLoading(false);
    }
  };

  useEffect(() => {
    setStartDate(handelDate(courseItem.startDate));
    setEndDate(handelDate(courseItem.endDate));
    {
      console.log(courseItem.startDate);
      console.log(courseItem.endDate);
    }
  }, [allCourses]);

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
          <span className=" text-xl text-gray-700 dark:text-gray-300  flex items-center justify-center">
            <TbEdit className=" text-xl ml-1" />
            ویرایش ترم {state.title}
          </span>
          <NavLink
            to={"/admindashboard/pages/courses/"}
            className=" text-3xl  text-rose-400  hover:text-rose-500 "
          >
            <CgCornerDoubleUpLeft />
          </NavLink>
        </div>
        <div className=" mt-10 ">
          <form onSubmit={handelChangeSubmit}>
            <div className=" bg-rose-50 dark:bg-rose-50/25 p-5 rounded-md">
              <ul className=" grid grid-cols-1 sm:grid-cols-2 gap-8 ">
                <li className=" bg-rose-500 p-5 rounded-lg  text-gray-50">
                  <label for="title"> تغییرات دوره : </label>
                  <input
                    id="title"
                    name="title"
                    className=" w-full rounded mt-2 h-10 focus:outline-rose-200  text-gray-500 px-4"
                    placeHolder={"عنوان دوره مورد نظر را انتخاب کنید"}
                    value={state.title}
                    onChange={(event) =>
                      dispatch({
                        type: "CH_TITLE",
                        payload: event.target.value,
                      })
                    }
                  />
                </li>

                <li className=" bg-rose-500 p-5 rounded-lg  text-gray-50">
                  <label for="cost"> قیمت ترم (تومان) : </label>
                  <input
                    id="cost"
                    name="cost"
                    type={"number"}
                    className=" w-full rounded mt-2 h-10 focus:outline-rose-200 text-gray-500  pr-4"
                    value={state.cost}
                    onChange={(event) =>
                      dispatch({
                        type: "CH_COST",
                        payload: event.target.value,
                      })
                    }
                  />
                </li>
                <li className=" bg-rose-500 p-5 rounded-lg  text-gray-50">
                  <label for="teacher"> استاد مورد نظر : </label>
                  <select
                    as="select"
                    id="teacher"
                    name="teacher"
                    className=" w-full rounded mt-2 h-10 focus:outline-rose-200 text-gray-500 px-5 cursor-pointer"
                    onChange={(event) =>
                      dispatch({
                        type: "CH_TEACHER",
                        payload: event.target.value,
                      })
                    }
                  >
                    <option value={""} className="   cursor-pointer">
                      {state.teacher.fullName}
                    </option>
                    {teachers ? (
                      teachers.map((teacher) => (
                        <option
                          value={teacher["_id"]}
                          key={teacher["_id"]}
                          className="  cursor-pointer"
                        >
                          {teacher.fullName}
                        </option>
                      ))
                    ) : (
                      <option className="  cursor-pointer">
                        استادی وجود ندارد
                      </option>
                    )}
                  </select>
                </li>

                <li className=" bg-rose-500 p-5 rounded-lg  text-gray-50">
                  <label for="lesson"> درس مورد نظر : </label>

                  <select
                    as="select"
                    id="lesson"
                    name="lesson"
                    className=" w-full rounded mt-2 h-10 focus:outline-rose-200 px-4 text-gray-500"
                    onChange={(event) =>
                      dispatch({
                        type: "CH_LESSON",
                        payload: event.target.value,
                      })
                    }
                  >
                    <option value={""} className="  cursor-pointer bg-white">
                      {courseItem.lesson.lessonName}
                    </option>
                    {lessons ? (
                      lessons.map((lesson) => (
                        <option
                          value={lesson["_id"]}
                          key={lesson["_id"]}
                          className="  cursor-pointer bg-white"
                        >
                          {lesson.lessonName}
                        </option>
                      ))
                    ) : (
                      <option value={""} className="  cursor-pointer">
                        درسی وجود ندارد
                      </option>
                    )}
                  </select>
                </li>

                <li className=" bg-rose-500 p-5  rounded-lg  relative text-gray-50">
                  <label for="startDate"> شروع ترم : </label>
                  <div className=" bg-white rounded mt-2 relative pr-3">
                    <DatePicker
                      value={startDate}
                      onChange={setStartDate}
                      calendar={persian}
                      locale={persian_fa}
                      calendarPosition="bottom-right"
                      className="teal"
                      animations={[transition()]}
                      style={{
                        backgroundColor: "transparent",
                        borderRadius: "4px",
                        fontSize: "16px",
                        color: "#818181",
                        display: "block",
                        width: "100%",
                        height: "100%",
                        border: "0",
                        boxShadow: "none",
                        zIndex: "1000",
                      }}
                    />
                  </div>
                </li>

                <li className=" bg-rose-500 p-5 rounded-lg  text-gray-50">
                  <label for="endDate"> پایان ترم : </label>
                  <div className=" bg-white rounded mt-2 relative pr-3">
                    <DatePicker
                      value={endDate}
                      onChange={setEndDate}
                      calendar={persian}
                      locale={persian_fa}
                      calendarPosition="bottom-right"
                      className="teal"
                      animations={[transition()]}
                      style={{
                        backgroundColor: "transparent",
                        borderRadius: "4px",
                        fontSize: "16px",
                        color: "#818181",
                        display: "block",
                        width: "100%",
                        height: "100%",
                        border: "0",
                        boxShadow: "none",
                        zIndex: "1000",
                      }}
                    />
                  </div>
                </li>

                <li className=" bg-rose-500 p-5 rounded-lg  text-gray-50">
                  <label for="capacity"> ظرفیت ترم : </label>

                  <input
                    id="capacity"
                    name="capacity"
                    type={"number"}
                    className=" w-full rounded mt-2 h-10 focus:outline-rose-200 text-gray-500  pr-4"
                    value={state.capacity}
                    onChange={(event) =>
                      dispatch({
                        type: "CH_CAPACITY",
                        payload: event.target.value,
                      })
                    }
                  />
                </li>
                <li>
                  <button
                    type="submit"
                    className="my-3  w-full  bg-green-600 text-cyan-50 py-3 px-8 rounded  shadow-2xl
                       flex justify-center items-center gap-1
                          hover:bg-blue-700
                      "
                  >
                    {" "}
                    <BsPatchPlus className=" text-xl animate-TwCon-round-Anim" />
                    ویرایش ترم
                  </button>
                  <NavLink
                    to={"/admindashboard/pages/courses"}
                    className="my-3  w-full bg-blue-500  text-cyan-50 py-3 px-8 rounded  shadow-2xl
                      flex justify-center items-center gap-1
                       hover:bg-yellow-700
                      "
                  >
                    {" "}
                    <HiMinus className=" text-xl " />
                    انصراف از تغییر
                  </NavLink>
                </li>
              </ul>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditeCourse;
