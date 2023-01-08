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
import { createLesson } from "../../../../services/lesson-services";
import AllCourseContext from "../../../../context/main-data/allDataContext";
import Loader from "../../../commen/Loader/Loader";
import { createNews } from "../../../../services/news-services";
import { BiBookAdd } from "react-icons/bi";
import { CgCornerDoubleUpLeft } from "react-icons/cg";

const AddNews = () => {
  const { fetchAllNews, setIsLoading } = useContext(AllCourseContext);

  const [file, setFile] = useState();
  {
    console.log(file);
  }

  const UploadImgHandler = async (event) => {
    event.preventDefault();

    const formData = new FormData();

    formData.append("image", file);

    try {
      setIsLoading(true);
      const { status, data } = await uploadImage(formData);
      console.log("data", data);

      if (status === 200) {
        toastifuySuccess("عکس با موفقیت آپلود شد");
        setIsLoading(false);

        // addNews(data.result);
      }
    } catch (error) {
      setIsLoading(false);
      toastifuyErr("مشکلی در آپلود عکس بوجود آمده");
    }
  };

  const [Ctitle, setCtitle] = useState("");
  const [Ccategory, setCcategory] = useState("");
  const [CText, setCtext] = useState("");

  const validator = (Info) => {
    setIsLoading(false);
    if (!Info.title) return "اسم خبر وارد نشده";
    else if (!Info.text) return "متن خبر مشخص نشده";
    else if (!Info.category) return "دسته خبر مشخص نشده";
  };

  const addNews = async (imgUpl) => {
    const newsInfo = {
      title: Ctitle,
      category: Ccategory,
      image: imgUpl,
      text: CText,
    };
    console.log(newsInfo);
    setIsLoading(true);
    const error = validator(newsInfo);
    if (error) {
      setIsLoading(false);
      return toastifuyErr(error);
    } else if (!error) {
      try {
        setIsLoading(true);
        const res = await createNews(newsInfo);
        console.log(res);
        if (res.status === 200) {
          setIsLoading(false);
          toastifuySuccess("خبر با موفقیت ساخته شد");
          fetchAllNews();
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
    setCcategory("");
    setCtext("");
    setFile("");
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
            className=" text-xl text-gray-700 
          flex items-center justify-center 
          dark:text-gray-300"
          >
            <BiBookAdd className=" text-xl ml-1" />
            افزودن خبر
          </span>
          <NavLink
            to={"/admindashboard/pages/news/"}
            className=" text-3xl  text-rose-400  hover:text-rose-500 "
          >
            <CgCornerDoubleUpLeft />
          </NavLink>
        </div>
        <div className=" mt-10 ">
          <form>
            <div
              className=" bg-lime-100 p-5 rounded-md
            dark:bg-cyan-100/20
            "
            >
              <ul className=" grid grid-cols-1 sm:grid-cols-2 gap-8 ">
                <li className=" bg-lime-700/80 p-5 rounded-lg  text-gray-50">
                  <label for="lessonName"> عنوان خبر : </label>
                  <input
                    id="lessonName"
                    name="lessonName"
                    className=" w-full rounded mt-2 h-10 focus:outline-teal-700  placeholder:text-gray-600 text-gray-600 px-4"
                    placeHolder={"عنوان  مورد نظر را وارد کنید"}
                    value={Ctitle}
                    onChange={(e) => setCtitle(e.target.value)}
                  />
                </li>

                <li className=" bg-lime-700/80 p-5 rounded-lg  text-gray-50">
                  <label for="category"> دسته بندی : </label>
                  <input
                    id="category"
                    name="category"
                    placeholder="دسته خبر"
                    className=" w-full rounded min-h-20 mt-2 focus:outline-teal-700  placeholder:text-gray-600 text-gray-600 py-2 px-4"
                    value={Ccategory}
                    onChange={(e) => setCcategory(e.target.value)}
                  />
                </li>

                <li className=" bg-lime-700/80 p-5 rounded-lg  text-gray-50">
                  <label for="text"> متن مقاله : </label>
                  <textarea
                    id="text"
                    name="text"
                    className=" w-full rounded mt-2  h-20  focus:outline-teal-700  placeholder:text-gray-600 text-gray-600 px-4"
                    placeHolder={"متن مورد نظر را وارد کنید "}
                    value={CText}
                    onChange={(e) => setCtext(e.target.value)}
                  />
                </li>

                <li className=" bg-lime-700/80 p-5 rounded-lg  text-gray-50">
                  <label> آپلود عکس : </label>
                  <label
                    for="image"
                    className=" w-full  bg-yellow-200 hover:bg-yellow-300 cursor-pointer
                    text-center justify-center flex rounded mt-2 h-10 px-3 py-2 gap-2
                   text-gray-700
                    "
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

                <li
                  className=" flex gap-0 flex-col
                
                lg:flex-row lg:gap-5"
                >
                  <button
                    type="submit"
                    className="  my-3  w-full  bg-blue-600 text-cyan-50 py-3 px-8 rounded  shadow-2xl
                       flex justify-center items-center gap-1
                          hover:bg-blue-700
                      "
                    onClick={UploadImgHandler}
                  >
                    {" "}
                    <BsPatchPlus className=" text-xl animate-TwCon-round-Anim" />
                    افزودن خبر جدید
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

export default AddNews;
