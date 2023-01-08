import React, { useContext, useState } from "react";
import { useEffect } from "react";
import AllCourseContext from "../../../context/main-data/allDataContext";
import { paginate } from "../../../helperFunctions/paginate/paginate";
import Course from "../../items/Course/Course";

const Tabs = () => {
  const [toggle, setToggle] = useState(1);
  const [allCoursesTab, setallCoursesTab] = useState();

  let { allCourses } = useContext(AllCourseContext);

  useEffect(() => {
    setallCoursesTab(allCourses);
  }, []);
  useEffect(() => {
    setallCoursesTab(allCourses);
  }, [allCourses]);

  // becuase I didnt have a backend for this part I decided to make static
  const offCourse = allCourses.filter((it) => it.cost !== 0);
  const discountData = paginate(offCourse, 1, 4);
  const freeCourseData = allCourses.filter((it) => it.cost == 0);

  const offerCourseData = paginate(allCoursesTab, 1, 6);

  return (
    <div>
      <ul
        className=" shadow-xl mx-auto bg-green-50 flex justify-around
        w-full flex-col 
        sm:flex-row
        lg:w-[60%]
          text-teal-800
        p-6 rounded-xl 
          dark:bg-Dark-ItemBg dark:text-gray-100
           
       "
      >
        <li
          onClick={() => setToggle(1)}
          className={
            toggle === 1
              ? `TwIN-TabLi   text-red-500 dark:text-Dark-Teal`
              : `TwIN-TabLi`
          }
        >
          دوره های در تخفیف
        </li>
        <li>|</li>
        <li
          onClick={() => setToggle(2)}
          className={
            toggle === 2
              ? `TwIN-TabLi  text-red-500 dark:text-Dark-Teal`
              : `TwIN-TabLi`
          }
        >
          دوره های رایگان
        </li>
        <li>|</li>
        <li
          onClick={() => setToggle(3)}
          className={
            toggle === 3
              ? `TwIN-TabLi  text-red-500 dark:text-Dark-Teal`
              : `TwIN-TabLi`
          }
        >
          {" "}
          پیشنهاد ویژه ما (پربازدیدترین ها){" "}
        </li>
      </ul>

      <div className={toggle === 1 ? `Tw-TabContent  xl:px-10` : "hidden"}>
        {discountData?.map((course, index) => (
          <Course
            item={course}
            discount={true}
            discountRange={Math.floor(Math.random() * 10)}
          />
        ))}
      </div>
      <div className={toggle === 2 ? `Tw-TabContent xl:px-10` : "hidden"}>
        {freeCourseData?.map((course) => (
          <Course item={course} freeCourse={true} />
        ))}
      </div>
      <div className={toggle === 3 ? `Tw-TabContent xl:px-10` : "hidden"}>
        {offerCourseData?.map((course) => (
          <Course item={course} offerCourse={true} />
        ))}
      </div>
    </div>
  );
};

export default Tabs;
