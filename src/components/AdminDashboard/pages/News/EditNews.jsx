import React, { useContext } from "react";
import { BsPatchPlus } from "react-icons/bs";
import { HiMinus } from "react-icons/hi";
import { FiUploadCloud } from "react-icons/fi";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { uploadImage } from "../../../../services/upload-image";
import {
  toastifuyErr,
  toastifuySuccess,
} from "../../../../helperFunctions/toastifuy/toastifuy";
import AllCourseContext from "../../../../context/main-data/allDataContext";
import Loader from "../../../commen/Loader/Loader";
import { useReducer } from "react";
import { CgCornerDoubleUpLeft } from "react-icons/cg";
import { updateNews } from "../../../../services/news-services";
import { BiEditAlt } from "react-icons/bi";

const EditNews = () => {
  const navigate = useNavigate();

  const { neId } = useParams();

  const { allNews, setIsLoading, fetchAllNews } = useContext(AllCourseContext);

  const newsItem = allNews.find((item) => item["_id"] === neId);

  // usereducer

  //   description"category"topics"lessonName}image
  const initialValues = newsItem;

  const reducer = (state, action) => {
    switch (action.type) {
      case "CHANGE_IMAGE":
        return { ...state, image: action.payload };
      case "CH_TITLE":
        return { ...state, title: action.payload };

      case "CH_CATEGORY":
        return { ...state, category: action.payload };

      case "CH_TEXT":
        return { ...state, text: action.payload };
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

    const newNews = {
      title: state.title,
      image: state.image,
      category: state.category,
      text: state.text,
    };
    console.log(newNews);

    try {
      setIsLoading(true);
      const { data, status } = await updateNews(neId, newNews);
      setIsLoading(false);
      if (status === 200) {
        toastifuySuccess("خبر با موفقیت تغییر یافت");
        fetchAllNews();
        setTimeout(() => {
          return navigate("/admindashboard/pages/news");
        }, 2000);
        console.log(data);
      }
    } catch (error) {
      toastifuyErr("مشکلی در به روز رسانی بوجود آمده");
      setIsLoading(false);
      console.log(error);
    }
  };

  return (
    <div className=" p-7  ">
      <div
        className=" p-7 py-8 bg-white rounded-lg shadow-md min-h-screen
      
        flex flex-col justify-start relative overflow-x-hidden
        dark:bg-lime-100/20 
      "
      >
        <Loader />
        <div className="flex justify-between items-center">
          <div></div>
          <span
            className=" text-xl text-gray-700 flex items-center justify-center
           dark:text-gray-50
          "
          >
            <BiEditAlt className=" text-xl ml-1" />
            ویرایش خبر
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
              dark:bg-lime-100/20 
            "
            >
              <ul className=" grid grid-cols-1 sm:grid-cols-2 gap-8 ">
                <li className=" bg-lime-700/80 p-5 rounded-lg  text-gray-700 col-span-2">
                  <label className="text-lime-50"> آپلود عکس : </label>
                  <div className=" flex justify-center items-end gap-10">
                    <img
                      src={state.image}
                      className=" w-72 object-cover object-top rounded-md"
                    />
                    <label
                      for="image"
                      className="   w-52  bg-yellow-200 hover:bg-yellow-300 cursor-pointer text-center justify-center flex rounded mt-2 h-10 px-3 py-2 gap-2"
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

                <li className=" bg-lime-700/80 p-5 rounded-lg  text-gray-700">
                  <label for="title" className="text-lime-50">
                    {" "}
                    عنوان خبر :{" "}
                  </label>
                  <input
                    id="title"
                    name="title"
                    className=" w-full rounded mt-2 h-10 focus:outline-teal-700  placeholder:text-gray-600 px-4"
                    placeHolder={"عنوان  مورد نظر را وارد کنید"}
                    value={state.title}
                    onChange={(event) =>
                      dispatch({
                        type: "CH_TITLE",
                        payload: event.target.value,
                      })
                    }
                  />
                </li>

                <li className=" bg-lime-700/80 p-5 rounded-lg  text-gray-700">
                  <label for="category" className="text-lime-50">
                    {" "}
                    دسته بندی :{" "}
                  </label>
                  <input
                    id="category"
                    name="category"
                    className=" w-full rounded min-h-20 mt-2 focus:outline-teal-700  placeholder:text-gray-600 py-2 px-4"
                    type={"textarea"}
                    value={state.category}
                    onChange={(event) =>
                      dispatch({
                        type: "CH_CATEGORY",
                        payload: event.target.value,
                      })
                    }
                  />
                </li>

                <li className=" bg-lime-700/80 p-5 rounded-lg  text-gray-700">
                  <label for="text" className="text-lime-50">
                    {" "}
                    توضیحات :{" "}
                  </label>
                  <textarea
                    id="text"
                    name="text"
                    className=" w-full rounded min-h-20 mt-2 focus:outline-teal-700  placeholder:text-gray-600 pt-2 px-4"
                    placeHolder={" توضیحات در مورد درس مورد نظر"}
                    value={state.text}
                    onChange={(event) =>
                      dispatch({
                        type: "CH_TEXT",
                        payload: event.target.value,
                      })
                    }
                  />
                </li>

                <li className="  gap-8">
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

export default EditNews;
