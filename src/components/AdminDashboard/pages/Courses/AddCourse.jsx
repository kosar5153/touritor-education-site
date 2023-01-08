import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useContext } from "react";
import { useState } from "react";
import { BsPatchPlus } from "react-icons/bs";
import { HiMinus } from "react-icons/hi";
import { RiPlayListAddFill } from "react-icons/ri";
import { NavLink, useNavigate } from "react-router-dom";
import AllCourseContext from "../../../../context/main-data/allDataContext";
import { changeDate } from "../../../../helperFunctions/changeDate";
import {
  toastifuyErr,
  toastifuySuccess,
} from "../../../../helperFunctions/toastifuy/toastifuy";
import { createCourse, getAllCourse } from "../../../../services/course-server";
import { addCourseSchema } from "../../../../validations/admin-validations/addCourse-validation";
import Loader from "../../../commen/Loader/Loader";

import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import "react-multi-date-picker/styles/colors/teal.css";
import transition from "react-element-popper/animations/transition";

const AddCourse = () => {
  const navigate = useNavigate();

  // --------
  const [startDateInpt, setStartDateInpt] = useState();
  const [endDateInpt, setEndDateInpt] = useState();

  const [checkDateType, setCheckDateType] = useState("");

  // context
  const { teachers, lessons, setIsLoading, setAllCourses } =
    useContext(AllCourseContext);

  // initial-value
  const initialValues = {
    title: "",
    cost: 0,
    capacity: 0,
    teacher: "",
    lesson: "",
  };

  const submiteHandler = async (values) => {
    try {
      setIsLoading(true);

      let { data } = await createCourse(values);
      console.log(data);
      setIsLoading(false);

      if (data.success) {
        toastifuySuccess("دوره مورد نظر ساخته شد");
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
      setIsLoading(false);

      toastifuyErr("مشکلی پیش آمده لطفا اطلاعات خود را چک کنید");
      console.log(error);
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

        <div className="flex justify-center items-center">
          <span
            className=" text-xl text-gray-700 flex items-center justify-center
           dark:text-gray-300
          "
          >
            <RiPlayListAddFill className=" text-xl ml-1" />
            افزودن ترم
          </span>
        </div>
        <div className=" mt-10 ">
          <Formik
            initialValues={initialValues}
            validationSchema={addCourseSchema}
            onSubmit={(values) => {
              if (startDateInpt == "" || startDateInpt == "") {
                toastifuyErr("تاریخ را وارد کنید");
              } else {
                const finalData = {
                  ...values,
                  endDate: `${endDateInpt.year}/${
                    endDateInpt.month.number > 10
                      ? `${endDateInpt.month.number}`
                      : `0${endDateInpt.month.number}`
                  }/${
                    endDateInpt.day > 10
                      ? `${endDateInpt.day}`
                      : `0${endDateInpt.day}`
                  }`,
                  startDate: `${startDateInpt.year}/${
                    startDateInpt.month.number > 10
                      ? `${startDateInpt.month.number}`
                      : `0${startDateInpt.month.number}`
                  }/${
                    startDateInpt.day > 10
                      ? `${startDateInpt.day}`
                      : `0${startDateInpt.day}`
                  }`,
                };
                console.log("finalData", finalData);
                submiteHandler(finalData);
              }
            }}
          >
            <Form>
              <div className=" bg-rose-50 p-5 rounded-md dark:bg-rose-50/25 ">
                <ul className=" grid grid-cols-1 sm:grid-cols-2 gap-8  ">
                  <li className=" bg-rose-500  p-5 rounded-lg  text-gray-50">
                    <label for="title"> نام ترم : </label>
                    <Field
                      id="title"
                      name="title"
                      className=" w-full rounded mt-2 h-10 focus:outline-rose-200  text-gray-500 px-4"
                      placeHolder={"عنوان دوره مورد نظر را انتخاب کنید"}
                    />
                    <ErrorMessage name={"title"}>
                      {(err) => (
                        <span className=" text-gray-600 mb-5 text-[13px]">
                          {err}
                        </span>
                      )}
                    </ErrorMessage>
                  </li>

                  <li className=" bg-rose-500 p-5 rounded-lg  text-gray-50">
                    <label for="cost"> قیمت ترم (تومان) : </label>
                    <Field
                      id="cost"
                      name="cost"
                      type={"number"}
                      className=" w-full rounded mt-2 h-10 focus:outline-rose-200 text-gray-500  pr-4"
                    />
                    <ErrorMessage name={"cost"}>
                      {(err) => (
                        <span className=" text-gray-600 mb-5 text-[13px]">
                          {err}
                        </span>
                      )}
                    </ErrorMessage>
                  </li>

                  <li className=" bg-rose-500 p-5 rounded-lg  text-gray-50">
                    <label for="startDate"> شروع نمایش : </label>
                    <div className=" bg-white rounded mt-2 relative pr-3">
                      <DatePicker
                        value={startDateInpt}
                        onChange={setStartDateInpt}
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

                  <li className=" bg-rose-500 p-5 rounded-lg  text-gray-50 ">
                    <label for="enddate"> پایان نمایش : </label>
                    <div className=" bg-white rounded mt-2 relative pr-3">
                      <DatePicker
                        value={endDateInpt}
                        onChange={setEndDateInpt}
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
                    <label for="teacher"> استاد مورد نظر : </label>

                    <Field
                      as="select"
                      id="teacher"
                      name="teacher"
                      className=" w-full rounded mt-2 h-10 focus:outline-rose-200 text-gray-500 pr-4"
                    >
                      <option
                        value={""}
                        className=" text-center cursor-pointer"
                      >
                        استاد مورد نظر را انتخاب کنید
                      </option>
                      {teachers ? (
                        teachers.map((teacher) => (
                          <option
                            value={teacher["_id"]}
                            key={teacher["_id"]}
                            className=" text-center cursor-pointer"
                          >
                            {teacher.fullName}
                          </option>
                        ))
                      ) : (
                        <option className=" text-center cursor-pointer">
                          استادی وجود ندارد
                        </option>
                      )}
                    </Field>

                    <ErrorMessage name={"teacher"}>
                      {(err) => (
                        <span className=" text-gray-600 mb-5 text-[13px]">
                          {err}
                        </span>
                      )}
                    </ErrorMessage>
                  </li>

                  <li className=" bg-rose-500 p-5 rounded-lg  text-gray-50">
                    <label for="lesson"> درس مورد نظر : </label>

                    <Field
                      as="select"
                      id="lesson"
                      name="lesson"
                      className=" w-full rounded mt-2 h-10 focus:outline-rose-200 text-gray-500 pr-4"
                    >
                      <option
                        value={""}
                        className=" text-center cursor-pointer bg-white"
                      >
                        درس مورد نظر را انتخاب کنید
                      </option>
                      {lessons ? (
                        lessons.map((lesson) => (
                          <option
                            value={lesson["_id"]}
                            key={lesson["_id"]}
                            className=" text-center cursor-pointer bg-white"
                          >
                            {lesson.lessonName}
                          </option>
                        ))
                      ) : (
                        <option
                          value={""}
                          className=" text-center cursor-pointer"
                        >
                          درسی وجود ندارد
                        </option>
                      )}
                    </Field>

                    <ErrorMessage name={"lesson"}>
                      {(err) => (
                        <span className=" text-gray-600 mb-5 text-[13px]">
                          {err}
                        </span>
                      )}
                    </ErrorMessage>
                  </li>

                  <li className=" bg-rose-500 p-5 rounded-lg  text-gray-50">
                    <label for="capacity"> ظرفیت ترم : </label>

                    <Field
                      id="capacity"
                      name="capacity"
                      type={"number"}
                      className=" w-full rounded mt-2 h-10 focus:outline-rose-200 text-gray-500  pr-4"
                    />
                    <ErrorMessage name={"capacity"}>
                      {(err) => (
                        <span className=" text-gray-600 mb-5 text-[13px]">
                          {err}
                        </span>
                      )}
                    </ErrorMessage>
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
                      ساخت ترم جدید
                    </button>
                    <NavLink
                      to={"/admindashboard/pages/courses"}
                      className="my-3  w-full bg-orange-500  text-cyan-50 py-3 px-8 rounded  shadow-2xl
                      flex justify-center items-center gap-1
                       hover:bg-yellow-700
                      "
                    >
                      {" "}
                      <HiMinus className=" text-xl " />
                      انصراف از ساخت
                    </NavLink>
                  </li>
                </ul>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default AddCourse;
