import React, { useContext } from "react";
import { MdOutlineDeleteSweep } from "react-icons/md";
import { TbEdit } from "react-icons/tb";
import { NavLink } from "react-router-dom";
import { RiEyeCloseFill } from "react-icons/ri";
import { ImEye } from "react-icons/im";
import { deleteNews, getAllNews } from "../../../../services/news-services";
import { customConfirmAlert } from "../../../../helperFunctions/customConfirmAlert";
import AllCourseContext from "../../../../context/main-data/allDataContext";
import { confirmAlert } from "react-confirm-alert";
import {
  toastifuyErr,
  toastifuySuccess,
} from "../../../../helperFunctions/toastifuy/toastifuy";

const TabelItem = ({ news }) => {
  const { setAllNews } = useContext(AllCourseContext);

  const handelDelete = async (cid, deleteCourse) => {
    const handelDeleteNews = async (itemId, deletItemServices) => {
      try {
        const { status } = await deletItemServices(itemId);
        if (status == 200) {
          toastifuySuccess("آیتم مورد نظر با موفقیت حذف شده");
          try {
            let { data } = await getAllNews();
            let newsResult = data.result;
            setAllNews(newsResult);
          } catch (err) {
            console.log(err);
          }
        }
      } catch (error) {
        toastifuyErr("مشکلی رخ داده است");
      }
    };

    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div
            className="p-10 py-7 rounded-lg  border-orange-400
            bg-Main-Blue dark:bg-Dark-MainBg  shadow-lg  border-dotted
            absolute top-[300px]  left-[2%] sm:left-[30%] md:left-[10%]  lg:static"
          >
            <h1 className=" text-2xl text-orange-400">پاک کردن مخاطب</h1>
            <p className=" text-xl my-7 mb-10 text-gray-300">
              مطمئنی که میخوای آیتم مورد نظر رو پاک کنی ؟
            </p>
            <button
              onClick={() => {
                handelDeleteNews(cid, deleteCourse);
                onClose();
              }}
              className=" shadow rounded p-2 ml-4 text-gray-200 bg-Dark-Teal dark:bg-Main-Blue mx-2"
            >
              مطمئن هستم
            </button>
            <button
              onClick={onClose}
              className=" shadow rounded p-2 text-gray-200  bg-rose-700"
            >
              انصراف
            </button>
          </div>
        );
      },
    });
  };

  return (
    <>
      <ul
        className=" grid  grid-cols-5 text-gray-500 bg-gray-50 
       text-[17px]
      border-b-4 border-double content-center items-end text-center py-5
      dark:bg-gray-300
      "
      >
        <li>
          <img
            className="  w-20 h-10 rounded object-cover object-top mx-auto"
            src={
              news.image
                ? news.image
                : require("../../../../Assets/images/gift/s3.gif")
            }
          />
        </li>
        <li>{news.title}</li>
        <li className=" text-cyan-800 text-center justify-center flex">
          <NavLink
            to={`shownews/${news["_id"]}`}
            className=" text-2xl TWIN-eye"
          >
            <RiEyeCloseFill className="close" />
            <ImEye className=" open hidden" />
          </NavLink>
        </li>
        <li className=" text-cyan-800 text-center justify-center flex">
          <NavLink to={`editnews/${news["_id"]}`} className=" text-3xl">
            <TbEdit />
          </NavLink>
        </li>
        <li className=" text-red-500 text-center justify-center flex">
          <div
            className=" text-3xl  cursor-pointer"
            onClick={() => handelDelete(news["_id"], deleteNews)}
          >
            <MdOutlineDeleteSweep />
          </div>
        </li>{" "}
      </ul>
    </>
  );
};

export default TabelItem;
