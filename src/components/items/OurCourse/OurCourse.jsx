import React, { useContext, useEffect, useState } from "react";
import HomeTitle from "../HomeTitle/HomeTitle";
import "./OurCourse.css";

import { GiFluffyTrefoil } from "react-icons/gi";
import HomeCourseItem from "../HomeCourseItem/HomeCourseItem";
import { NavLink } from "react-router-dom";

import AllCourseContext from "../../../context/main-data/allDataContext";
import { Loading } from "../../commen/Loading/Loading";
import { paginate } from "../../../helperFunctions/paginate/paginate";

const OurCourse = () => {
  const [allCourse, setAllCourse] = useState([]);
  const { allCourses } = useContext(AllCourseContext);

  useEffect(() => {
    setAllCourse(allCourses ? allCourses : []);
  }, [allCourses]);

  const courses = paginate(allCourse, 1, 6);

  return (
    <div className="css-OurCourse   mt-28  mb-16">
      <div className=" container mx-auto px-5 md:p-0">
        <div className=" flex flex-col justify-center items-center">
          <HomeTitle icon={<GiFluffyTrefoil />}>
            دوره های موجود در توریتور
          </HomeTitle>
          <NavLink
            className=" text-red-600 dark:text-Dark-Pink"
            to={"/allcourse"}
          >
            تمامی دوره ها
          </NavLink>
        </div>

        <div
          className=" grid  gap-10 gap-y-28  mt-28
          px-8         
          grid-cols-1
          md:grid-cols-2
          lg:grid-cols-2     
          xl:grid-cols-3     
          xl:px-12
        "
        >
          {courses && courses.length > 0 ? (
            courses.map((item) => (
              <HomeCourseItem item={item} key={item["_id"]} />
            ))
          ) : (
            <div className=" col-span-3">
              <Loading />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default OurCourse;
