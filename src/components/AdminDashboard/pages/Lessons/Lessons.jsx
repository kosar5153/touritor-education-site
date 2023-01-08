import React, { useContext, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { MdAdd, MdOutlinePlayLesson } from "react-icons/md";
import { BsJournalBookmark } from "react-icons/bs";

import { NavLink } from "react-router-dom";
import AllCourseContext from "../../../../context/main-data/allDataContext";
import { paginate } from "../../../../helperFunctions/paginate/paginate";
import Pagination from "../../../commen/Pagination/Pagination";
import TabelItem from "./TabelItem";

const Lessons = () => {
  const { lessons } = useContext(AllCourseContext);

  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(6);

  const paginateData = paginate(lessons, currentPage, perPage);

  // paginate func
  const handelPageChang = (page) => {
    setCurrentPage(page);
  };

  // paginate func
  const handelPageChangRight = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    } else if (currentPage === 1) {
      setCurrentPage(currentPage);
    }
  };
  // paginate func
  const handelPageChangLeft = () => {
    const pageCount = Math.ceil(lessons?.length / perPage);
    if (pageCount > currentPage) {
      setCurrentPage(currentPage + 1);
    } else if (pageCount <= currentPage) {
      setCurrentPage(currentPage);
    }
  };
  return (
    <div className=" p-7  ">
      <div
        className=" p-7 py-8 bg-white rounded-lg shadow-md min-h-screen
      
        flex flex-col justify-start relative 
        overflow-x-auto  md:overflow-clip
         dark:bg-Dark-ItemBg
      "
      >
        <div
          className="flex justify-between items-center
         flex-col gap-7 
         md:flex-row md:gap-0 
        "
        >
          <NavLink to={"/admindashboard/adddata/lesson"}>
            <button
              className=" flex items-center justify-center text-[11px] bg-emerald-600
          px-3 pr-1 py-2 rounded
          text-white
          dark:text-gray-300 "
            >
              <MdAdd className=" text-xl ml-1" />
              افزودن درس
            </button>
          </NavLink>
          <span
            className=" text-xl text-gray-700 flex items-center justify-center
          dark:text-gray-300
          "
          >
            <BsJournalBookmark className=" text-xl ml-1" />
            درس های موجود
          </span>
          <div className=" flex items-center justify-items-center px-3 py-1 border-2 rounded-full border-teal-600 ">
            <label
              for="courseSearch"
              className=" text-[14px] ml-1 text-teal-700  "
            >
              <BiSearch />
            </label>
            <input
              className=" text-[12px]  focus:outline-none bg-transparent"
              type={"text"}
              placeholder="جستوجو..."
              id="courseSearch"
            />
          </div>
        </div>
        <div className=" border-dashed border-t-2 w-full my-7 border-teal-700/20"></div>
        <div
          className=" grid col-1 mb-20
        w-[900px]  md:w-full 
        "
        >
          <ul className="  grid  grid-cols-5 w-full  text-center bg-teal-600 text-white  rounded-t-xl py-3 ">
            <li>تصویر درس</li>
            <li>عنوان درس</li>
            <li>اطلاعات درس</li>
            <li> ویرایش</li>
            <li className="">حذف </li>
          </ul>
          {paginateData?.map((course) => (
            <TabelItem key={course["_id"]} course={course} />
          ))}
          <div className=" w-full p-[2px] bg-teal-600 rounded-b"></div>
        </div>
        <div className=" absolute bottom-5 w-full  justify-items-center">
          <Pagination
            allCourse={lessons}
            perPage={perPage}
            currentPage={currentPage}
            courseItem={paginateData}
            handelPageChang={handelPageChang}
            handelPageChangRight={handelPageChangRight}
            handelPageChangLeft={handelPageChangLeft}
            handelClass={"bg-teal-600 "}
          />{" "}
        </div>
      </div>
    </div>
  );
};

export default Lessons;
