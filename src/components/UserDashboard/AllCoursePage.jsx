import React, { useContext, useState } from "react";
import AllCourseContext from "../../context/main-data/allDataContext";
import { paginate } from "../../helperFunctions/paginate/paginate";
import Pagination from "../commen/Pagination/Pagination";
import Course from "../items/Course/Course";
import { useEffect } from "react";
import { Loading } from "../commen/Loading/Loading";

const AllCoursePage = () => {
  const { allCourses } = useContext(AllCourseContext);
  const [filterdCourse, setfilterdCourse] = useState(allCourses);
  // paginate State
  const [perPage, setPerpage] = useState(3);
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
    setfilterdCourse(allCourses);
  }, [allCourses]);

  return (
    <div>
      {" "}
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
          {filterdCourse === "" ? (
            <Loading />
          ) : (
            courseItem.map((course) => (
              <Course item={course} key={course["_id"]} />
            ))
          )}
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
  );
};

export default AllCoursePage;
