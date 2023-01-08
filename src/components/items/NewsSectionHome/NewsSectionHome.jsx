import React, { useEffect, useState } from "react";
import HomeTitle from "../HomeTitle/HomeTitle";
import { IoNewspaper } from "react-icons/io5";
import SlideShow from "../SlideShow/SlideShow";
import { NavLink } from "react-router-dom";
import { getAllNews } from "../../../services/news-services";
import { useContext } from "react";
import AllCourseContext from "../../../context/main-data/allDataContext";
const NewsSectionHome = () => {
  let [allNewsH, setAllNewsH] = useState([]);

  const { allNews } = useContext(AllCourseContext);
  useEffect(() => {
    setAllNewsH(allNews);
  }, []);
  useEffect(() => {
    setAllNewsH(allNews);
  }, [allNews]);

  return (
    <div className=" container mx-auto px-5 lg:px-10 mt-32">
      <div className=" flex flex-col justify-center items-center  gap-y-3">
        <HomeTitle icon={<IoNewspaper />}>
          به روز ترین اخبار دنیای برنامه نویسی
        </HomeTitle>
        <NavLink
          className=" text-red-600 dark:text-Dark-Pink "
          to={"/newspage"}
        >
          مشاهده تمامی اخبار
        </NavLink>
      </div>
      <SlideShow dataNews={allNewsH} />
    </div>
  );
};

export default NewsSectionHome;
