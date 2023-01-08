import React, { useEffect } from "react";
import { AiFillCaretDown, AiFillFire } from "react-icons/ai";
import { BiSearchAlt } from "react-icons/bi";
import Course from "../../items/Course/Course";
import "./AllCourses.css";

import Title from "../../commen/Title/Title";
import { useContext } from "react";
import AllCourseContext from "../../../context/main-data/allDataContext";
import { useState } from "react";
import Loader from "../../commen/Loader/Loader";

import { useSearchParams } from "react-router-dom";
import Pagination from "../../commen/Pagination/Pagination";
import { paginate } from "../../../helperFunctions/paginate/paginate";

const AllCourses = () => {
  const { allCourses } = useContext(AllCourseContext);

  const [filterdCourse, setfilterdCourse] = useState(allCourses);
  const [searchFiltering, setsearchFiltering] = useState();
  const [search, setSearch] = useState("");
  {
    console.log("filterdCourse", filterdCourse);
  }

  // set all data

  useEffect(() => {
    console.log("mainFilter");
    setfilterdCourse(allCourses);
  }, [allCourses]);

  // paginate State
  const [perPage, setPerpage] = useState(6);
  const [currentPage, setCurrentPage] = useState(1);

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
    const pageCount = Math.ceil(filterdCourse?.length / perPage);
    if (pageCount > currentPage) {
      setCurrentPage(currentPage + 1);
    } else if (pageCount <= currentPage) {
      setCurrentPage(currentPage);
    }
  };

  let courseItem = paginate(filterdCourse, currentPage, perPage);

  useEffect(() => {
    {
      console.log("search");
    }
    let filterCourses = allCourses.filter((course) =>
      course.title.includes(search)
    );
    setfilterdCourse(filterCourses);
  }, [search]);

  useEffect(() => {
    {
      console.log("searchFiltering");
    }
    if (searchFiltering === "cost") {
      let filterCourses = allCourses.filter((course) => course.cost === 0);
      setfilterdCourse(filterCourses);
    } else if (searchFiltering === "capacity") {
      let filterCourses = allCourses.filter((course) => course.capacity < 10);
      setfilterdCourse(filterCourses);
    } else if (searchFiltering === "allCourse") {
      setfilterdCourse(allCourses);
    }
  }, [searchFiltering]);

  return (
    <div
      className=" container mx-auto
    
     px-5 lg:px-0
    
    "
    >
      <Title iconBox={<AiFillFire />}> دوره های آموزشی توریتور... </Title>
      {/* top sort  */}
      <div
        className=" flex flex-col
       justify-between items-center
      
     lg:flex-row
      "
      >
        <div className=" flex items-center w-full mb-4 lg:mb-0">
          <input
            id="courseSearch"
            placeholder="دنبال چی میگردی؟؟"
            type="text"
            className="css-serchInpt  focus:outline-none focus:border focus:border-dotted  
              focus:border-green-700     flex px-3 py-5   rounded-lg  bg-green-100
               shadow-xl   placeholder:text-green-600 
               lg:w-[19rem] w-[100%]  
               dark:bg-Dark-ItemBg  dark:text-gray-200 dark:placeholder:text-gray-200 
                    "
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
          <label
            className=" inline-block  text-green-600 dark:text-gray-200  cursor-pointer text-5xl mx-5"
            for="courseSearch"
          >
            <BiSearchAlt />
          </label>
        </div>
        <div
          className=" flex items-center justify-between w-full lg:w-auto 
         bg-green-100 dark:text-gray-200  rounded-lg p-4 text-green-700  shadow-lg dark:bg-Dark-ItemBg"
        >
          <select
            name="orderby"
            className="
            bg-green-100 ml-2 dark:bg-Dark-ItemBg dark:text-gray-200           
          "
            onChange={(e) => setsearchFiltering(e.target.value)}
          >
            <option value="allCourse"> مرتب سازی دوره ها </option>
            <option value="cost"> مرتب سازی بر اساس دوره های رایگان </option>
            <option value="capacity">
              {" "}
              مرتب سازی بر اساس گنجایش کمتر از 10{" "}
            </option>
          </select>
          <AiFillCaretDown />
        </div>
      </div>
      {/* bottom  */}
      <div className="  grid gap-5 grid-cols-12   my-5">
        {/* tabel */}
        <div
          className="col-span-12
       
        lg:col-span-4 
        xl:col-span-3 
         
         "
        >
          <div
            className=" my-3 mb-8 bg-green-100 shadow-xl rounded-lg p-4
          
           dark:bg-Dark-ItemBg
          "
          >
            <h2 className=" text-xl  text-green-800 dark:text-gray-300">
              فیلتر بر اساس
            </h2>
            <ul className=" mt-2">
              <li
                className=" my-3 bg-green-300  dark:bg-Dark-Teal p-3 rounded-lg
               text-gray-800 cursor-pointer hover:bg-green-400 "
              >
                همه
              </li>
              <li
                className=" my-3 bg-green-300  dark:bg-Dark-Teal p-3 rounded-lg
               text-gray-800 cursor-pointer hover:bg-green-400 "
              >
                خریدنی
              </li>
              <li
                className=" my-3 bg-green-300  dark:bg-Dark-Teal p-3 rounded-lg
               text-gray-800 cursor-pointer hover:bg-green-400 "
              >
                رایگان
              </li>
            </ul>
          </div>

          <div
            className=" my-3 bg-green-100 shadow-xl rounded-lg p-4
          
           dark:bg-Dark-ItemBg   
          "
          >
            <h2 className=" text-xl  text-green-800 dark:text-gray-300">
              {" "}
              فیلتر بر اساس دسته بندی ها
            </h2>
            <ul className=" mt-2">
              <li
                className=" my-3 bg-green-300 dark:bg-Dark-Teal p-3 rounded-lg
               text-gray-800 cursor-pointer hover:bg-green-400  relative"
              >
                <input
                  type="checkbox"
                  name="categories"
                  className=" hidden"
                  value=" نویسی و طراحی وب"
                  id="cat-1"
                />
                <label for="cat-1" className=" text-[1rem] ">
                  {" "}
                  برنامه نویسی وب
                </label>
              </li>
              <li
                className=" my-3 bg-green-300 dark:bg-Dark-Teal p-3 rounded-lg
               text-gray-800 cursor-pointer hover:bg-green-400  relative"
              >
                <input
                  type="checkbox"
                  name="categories"
                  className=" hidden"
                  value=" نویسی و طراحی وب"
                  id="cat-1"
                />
                <label for="cat-1" className=" text-[1rem] ">
                  {" "}
                  طراحی وب
                </label>
              </li>
            </ul>
          </div>
        </div>

        {/* content */}
        <div
          className=" col-span-12
          rounded-lg my-3
          
          lg:col-span-8 
          xl:col-span-9 
          
          "
        >
          <div
            className="css-courseHolder  grid mb-20

          grid-cols-1
          md:grid-cols-2
          lg:grid-cols-2
          xl:grid-cols-3

          gap-5"
          >
            {" "}
            {courseItem?.map((course) => (
              <Course item={course} key={course["_id"]} />
            ))}
          </div>
          <Pagination
            allCourse={filterdCourse}
            perPage={perPage}
            currentPage={currentPage}
            courseItem={courseItem}
            handelPageChang={handelPageChang}
            handelPageChangRight={handelPageChangRight}
            handelPageChangLeft={handelPageChangLeft}
          />
        </div>
      </div>
    </div>
  );
};

export default AllCourses;
