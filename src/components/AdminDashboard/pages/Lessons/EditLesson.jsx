import React, { useContext } from "react";
import { useState } from "react";
import { BsJournalPlus, BsPatchPlus } from "react-icons/bs";
import { HiMinus } from "react-icons/hi";
import { FiUploadCloud } from "react-icons/fi";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { uploadImage } from "../../../../services/upload-image";
import {
  toastifuyErr,
  toastifuySuccess,
} from "../../../../helperFunctions/toastifuy/toastifuy";
import AllCourseContext from "../../../../context/main-data/allDataContext";
import Loader from "../../../commen/Loader/Loader";
import { useReducer } from "react";
import {
  getAllLessons,
  updateLesson,
} from "../../../../services/lesson-services";
import { CgCornerDoubleUpLeft } from "react-icons/cg";

const EditLesson = () => {
  const { lesId } = useParams();

  const navigate = useNavigate();

  const { lessons, setIsLoading, setLessons } = useContext(AllCourseContext);

  const lessonItem = lessons.find((item) => item["_id"] === lesId);
  const lessonItemIndex = lessons.findIndex((item) => item["_id"] === lesId);

  // usereducer

  //   description"category"topics"lessonName}image
  const initialValues = lessonItem;

  const reducer = (state, action) => {
    switch (action.type) {
      case "CHANGE_IMAGE":
        return { ...state, image: action.payload };
      case "CH_LESSONNAME":
        return { ...state, lessonName: action.payload };

      case "CH_TOPICS":
        return { ...state, topics: [action.payload] };

      case "CH_CATEGORY":
        return { ...state, category: action.payload };

      case "CH_DESCRIPTION":
        return { ...state, description: action.payload };
    }
  };

  const [state, dispatch] = useReducer(reducer, initialValues);

  const handelUploadImage = async (imageUrl) => {
    const formData = new FormData();

    formData.append("image", imageUrl);

    try {
      setIsLoading(true);
      const { status, data } = await uploadImage(formData);

      if (status === 200) {
        setIsLoading(false);
        toastifuySuccess("عکس با موفقیت آپلود شد");
        dispatch({
          type: "CHANGE_IMAGE",
          payload: data.result,
        });
      }
    } catch (error) {
      setIsLoading(false);
      toastifuyErr("مشکلی در آپلود عکس بوجود آمده");
    }
  };

  const handelChangeSubmit = async (event) => {
    event.preventDefault();

    const newLesson = {
      lessonName: state.lessonName,
      topics: state.topics,
      description: state.description,
      image: state.image,
      category: Number(state.category),
    };
    console.log(newLesson);

    try {
      setIsLoading(true);
      const { data, status } = await updateLesson(
        lesId,
        JSON.stringify(newLesson)
      );
      setIsLoading(false);
      if (status === 200) {
        toastifuySuccess("درس با موفقیت تغییر یافت");
        try {
          let { data } = await getAllLessons();
          let newsResult = data.result;

          console.log("teachers", newsResult);
          setLessons(newsResult);
        } catch (err) {
          console.log(err);
        }
        setTimeout(() => {
          return navigate("/admindashboard/pages/lessons");
        }, 2000);
        console.log(data);
      }
    } catch (error) {
      toastifuyErr("مشکلی در به روز رسانی بوجود آمده");
      setIsLoading(false);
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
          <span
            className=" text-xl text-gray-700 flex items-center justify-center
          dark:text-gray-300
          "
          >
            <BsJournalPlus className=" text-xl ml-1" />
            ویرایش درس
          </span>
          <NavLink
            to={"/admindashboard/pages/lessons/"}
            className=" text-3xl  text-rose-400  hover:text-rose-500 "
          >
            <CgCornerDoubleUpLeft />
          </NavLink>
        </div>
        <div className=" mt-10 ">
          <form>
            <div
              className=" bg-cyan-100 p-5 rounded-md
            dark:bg-cyan-100/25
            "
            >
              <ul className=" grid grid-cols-1 md:grid-cols-2 gap-8 ">
                <li className=" bg-teal-500 p-5 rounded-lg  text-gray-700 md:col-span-2">
                  <label> آپلود عکس : </label>
                  <div className=" flex justify-center flex-col md:flex-row mt-5 md:mt-0 items-end gap-10">
                    <img
                      src={state.image}
                      className="  w-full  md:w-72 object-cover object-top rounded-md"
                    />
                    <label
                      for="image"
                      className="w-full  md:w-52  bg-yellow-200 hover:bg-yellow-300 cursor-pointer text-center justify-center flex rounded mt-2 h-10 px-3 py-2 gap-2"
                    >
                      <FiUploadCloud />
                      انتخاب عکس{" "}
                    </label>

                    <input
                      id="image"
                      name="image"
                      type={"file"}
                      className=" hidden"
                      onChange={(e) => handelUploadImage(e.target.files[0])}
                    />
                  </div>
                </li>

                <li className=" bg-teal-500 p-5 rounded-lg  text-gray-700">
                  <label for="lessonName"> نام درس : </label>
                  <input
                    id="lessonName"
                    name="lessonName"
                    className=" w-full rounded mt-2 h-10 focus:outline-teal-700  placeholder:text-gray-600 px-4"
                    value={state.lessonName}
                  />
                </li>

                <li className=" bg-teal-500 p-5 rounded-lg  text-gray-700">
                  <label for="topics"> موضوع درس : </label>
                  <input
                    id="topics"
                    name="topics"
                    className=" w-full rounded mt-2 h-10 focus:outline-teal-700  placeholder:text-gray-600 px-4"
                    placeHolder={"موضوع درس مورد "}
                    value={state.topics.map((it) => it)}
                    onChange={(event) =>
                      dispatch({
                        type: "CH_TOPICS",
                        payload: event.target.value,
                      })
                    }
                  />
                </li>

                <li className=" bg-teal-500 p-5 rounded-lg  text-gray-700">
                  <label for="category"> دسته بندی : </label>
                  <input
                    id="category"
                    name="category"
                    className=" w-full rounded min-h-20 mt-2 focus:outline-teal-700  placeholder:text-gray-600 py-2 px-4"
                    type={"number"}
                    value={state.category}
                    onChange={(event) =>
                      dispatch({
                        type: "CH_CATEGORY",
                        payload: event.target.value,
                      })
                    }
                  />
                </li>

                <li className=" bg-teal-500 p-5 rounded-lg  text-gray-700">
                  <label for="description"> توضیحات : </label>
                  <textarea
                    id="description"
                    name="description"
                    className=" w-full rounded min-h-20 mt-2 focus:outline-teal-700  placeholder:text-gray-600 pt-2 px-4"
                    placeHolder={" توضیحات در مورد درس مورد نظر"}
                    value={state.description}
                    onChange={(event) =>
                      dispatch({
                        type: "CH_DESCRIPTION",
                        payload: event.target.value,
                      })
                    }
                  />
                </li>

                <li
                  className=" flex gap-0
                 flex-col
                 lg:flex-row lg:gap-8
                "
                >
                  <button
                    type="submit"
                    className="my-3  w-full  bg-blue-600 text-cyan-50 py-3 px-8 rounded  shadow-2xl
                       flex justify-center items-center gap-1
                          hover:bg-blue-700
                      "
                    onClick={(event) => handelChangeSubmit(event)}
                  >
                    {" "}
                    <BsPatchPlus className=" text-xl animate-TwCon-round-Anim" />
                    به روز رسانی
                  </button>
                  <NavLink
                    to={"/admindashboard/pages/lessons"}
                    className="my-3  w-full bg-rose-600  text-cyan-50 py-3 px-8 rounded  shadow-2xl
                      flex justify-center items-center gap-1
                       hover:bg-rose-700
                      "
                  >
                    {" "}
                    <HiMinus className=" text-xl " />
                    انصراف از ساخت
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

export default EditLesson;
