import React, { useContext } from "react";
import { useState } from "react";
import { BsJournalPlus, BsPatchPlus } from "react-icons/bs";
import { HiMinus } from "react-icons/hi";
import { FiUploadCloud } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import { uploadImage } from "../../../../services/upload-image";
import {
  toastifuyErr,
  toastifuySuccess,
} from "../../../../helperFunctions/toastifuy/toastifuy";
import {
  createLesson,
  getAllLessons,
} from "../../../../services/lesson-services";
import AllCourseContext from "../../../../context/main-data/allDataContext";
import Loader from "../../../commen/Loader/Loader";
import { CgCornerDoubleUpLeft } from "react-icons/cg";

const AddLesson = () => {
  const { setLessons, setIsLoading } = useContext(AllCourseContext);

  const [file, setFile] = useState();

  const UploadImgHandler = async (event) => {
    event.preventDefault();

    const formData = new FormData();

    formData.append("image", file);

    try {
      setIsLoading(true);
      const { status, data } = await uploadImage(formData);

      if (status === 200) {
        setIsLoading(false);
        toastifuySuccess("عکس با موفقیت آپلود شد");
        addLesson(data.result);
      }
    } catch (error) {
      setIsLoading(false);
      toastifuyErr("مشکلی در آپلود عکس بوجود آمده");
    }
  };

  const [Ctitle, setCtitle] = useState();
  const [Ctopic, setCtopic] = useState([]);
  const [Cdesc, setCdesc] = useState();
  const [category, setCategory] = useState(0);

  let topicArray = [];

  topicArray.push(Ctopic);

  const validator = (Info) => {
    setIsLoading(false);
    if (!Info.lessonName) return "اسم دوره وارد نشده";
    else if (!Info.topics) return "زمينه دوره مشخص نشده";
    else if (!Info.description) return "توضيحات دوره مشخص نشده";
    else if (!Info.category) return "دسته دوره مشخص نشده";
  };

  const addLesson = async (imgUpl) => {
    setIsLoading(true);
    const LessonInfo = {
      lessonName: Ctitle,
      topics: topicArray,
      image: imgUpl,
      description: Cdesc,
      category,
    };
    const error = validator(LessonInfo);
    if (error) {
      setIsLoading(false);
      return toastifuyErr(error);
    } else if (!error) {
      try {
        setIsLoading(true);
        const res = await createLesson(LessonInfo);
        console.log(res);
        if (res.status === 200) {
          setIsLoading(false);
          toastifuySuccess("درس با موفقیت اضافه شد");
          // lessons

          try {
            let { data } = await getAllLessons();
            let newsResult = data.result;

            console.log("teachers", newsResult);
            setLessons(newsResult);
          } catch (err) {
            console.log(err);
          }
          reset();
        }
      } catch (error) {
        setIsLoading(false);
        toastifuyErr("مشکلی پیش آمده است");
        console.log(error);
      }
    }
  };

  const reset = () => {
    setCtitle("");
    setCtopic([]);
    setCdesc("");
    setFile("");
    setCategory(0);
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
          dark:text-gray-300"
          >
            <BsJournalPlus className=" text-xl ml-1" />
            افزودن درس
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
            <div className=" bg-cyan-100 dark:bg-cyan-100/20 p-5 rounded-md">
              <ul className=" grid grid-cols-1 sm:grid-cols-2 gap-8 ">
                <li className=" bg-teal-500 p-5 rounded-lg  text-gray-700">
                  <label for="lessonName"> نام درس : </label>
                  <input
                    id="lessonName"
                    name="lessonName"
                    className=" w-full rounded mt-2 h-10 focus:outline-teal-700  placeholder:text-gray-600 px-4"
                    placeHolder={"عنوان  مورد نظر را وارد کنید"}
                    value={Ctitle}
                    onChange={(e) => setCtitle(e.target.value)}
                  />
                </li>

                <li className=" bg-teal-500 p-5 rounded-lg  text-gray-700">
                  <label for="topics"> موضوع درس : </label>
                  <input
                    id="topics"
                    name="topics"
                    className=" w-full rounded mt-2 h-10 focus:outline-teal-700  placeholder:text-gray-600 px-4"
                    placeHolder={"موضوع دوره مورد "}
                    value={Ctopic}
                    onChange={(e) => setCtopic(e.target.value)}
                  />
                </li>

                <li className=" bg-teal-500 p-5 rounded-lg  text-gray-700">
                  <label for="category"> دسته بندی : </label>
                  <input
                    id="category"
                    name="category"
                    className=" w-full rounded min-h-20 mt-2 focus:outline-teal-700  placeholder:text-gray-600 py-2 px-4"
                    value={category}
                    type={"number"}
                    onChange={(e) => setCategory(e.target.value)}
                  />
                </li>

                <li className=" bg-teal-500 p-5 rounded-lg  text-gray-700">
                  <label for="description"> توضیحات : </label>
                  <textarea
                    id="description"
                    name="description"
                    className=" w-full rounded min-h-20 mt-2 focus:outline-teal-700  placeholder:text-gray-600 pt-2 px-4"
                    placeHolder={" توضیحات در مورد درس مورد نظر"}
                    value={Cdesc}
                    onChange={(e) => setCdesc(e.target.value)}
                  />
                </li>

                <li className=" bg-teal-500 p-5 rounded-lg  text-gray-700">
                  <label> آپلود عکس : </label>
                  <label
                    for="image"
                    className=" w-full  bg-yellow-200 hover:bg-yellow-300 cursor-pointer text-center justify-center flex rounded mt-2 h-10 px-3 py-2 gap-2"
                  >
                    <FiUploadCloud />
                    انتخاب عکس{" "}
                  </label>

                  <input
                    id="image"
                    name="image"
                    type={"file"}
                    className=" hidden"
                    onChange={(e) => setFile(e.target.files[0])}
                  />
                </li>
                <li>
                  <button
                    type="submit"
                    className="my-3  w-full  bg-blue-600 text-cyan-50 py-3 px-8 rounded  shadow-2xl
                       flex justify-center items-center gap-1
                          hover:bg-blue-700
                      "
                    onClick={UploadImgHandler}
                  >
                    {" "}
                    <BsPatchPlus className=" text-xl animate-TwCon-round-Anim" />
                    ساخت ترم جدید
                  </button>
                  <NavLink
                    to={"/admindashboard/pages/courses"}
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

export default AddLesson;
