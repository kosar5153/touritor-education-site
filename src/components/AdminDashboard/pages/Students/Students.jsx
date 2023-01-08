import React, { useContext, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { IoMdContacts } from "react-icons/io";
import { MdAdd, MdOutlinePlayLesson } from "react-icons/md";
import { RiContactsLine } from "react-icons/ri";

import { NavLink } from "react-router-dom";
import AllCourseContext from "../../../../context/main-data/allDataContext";
import { paginate } from "../../../../helperFunctions/paginate/paginate";
import Pagination from "../../../commen/Pagination/Pagination";
import TabelItem from "./TabelItem";
import { AdminContext } from "../../../../context/admin-context/AdminContext";
import { Loading } from "../../../commen/Loading/Loading";

const Students = () => {
  const { students } = useContext(AllCourseContext);
  const { adminStorageToken } = useContext(AdminContext);

  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(6);

  const paginateData = paginate(students, currentPage, perPage);

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
    const pageCount = Math.ceil(students?.length / perPage);
    if (pageCount > currentPage) {
      setCurrentPage(currentPage + 1);
    } else if (pageCount <= currentPage) {
      setCurrentPage(currentPage);
    }
  };
  return (
    <>
      {adminStorageToken && !students ? (
        <Loading />
      ) : (
        <div className=" p-7  ">
          <div
            className=" p-7 py-8 bg-white rounded-lg shadow-md min-h-screen
      
        flex flex-col justify-start relative 
        overflow-x-auto  md:overflow-clip 
        dark:bg-Dark-ItemBg 
      "
          >
            <div
              className="flex justify-between w-full
          flex-col gap-7 
          md:flex-row md:gap-0 
         
         items-center 
        "
            >
              <NavLink to={"/admindashboard/adddata/students"}>
                <button
                  className=" flex items-center justify-center text-[11px] bg-emerald-600
          px-3 pr-1 py-2 rounded
          text-white       
          "
                >
                  <RiContactsLine className=" text-xl ml-1" />
                  افزودن دانشجو
                </button>
              </NavLink>
              <span
                className=" text-xl text-gray-600 flex items-center justify-center
          dark:text-gray-300
          "
              >
                <IoMdContacts className=" text-xl ml-1" />
                دانشجویان
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
              <ul className="  grid  grid-cols-6 w-full  text-center bg-purple-600  text-white  rounded-t-xl py-3 ">
                <li> نقش</li>
                <li> نام کاربری</li>
                <li> ایمیل</li>
                <li> شماره تلفن</li>
                <li> اطلاعات دانشجو</li>
                <li className="">حذف </li>
              </ul>
              {paginateData?.map((student) => (
                <TabelItem key={student["_id"]} student={student} />
              ))}
              <div className=" w-full p-[2px] bg-purple-600 rounded-b"></div>
            </div>
            <div className=" absolute bottom-5 w-full  justify-items-center">
              <Pagination
                allCourse={students}
                perPage={perPage}
                currentPage={currentPage}
                courseItem={paginateData}
                handelPageChang={handelPageChang}
                handelPageChangRight={handelPageChangRight}
                handelPageChangLeft={handelPageChangLeft}
                handelClass={"bg-purple-600 "}
              />{" "}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Students;
