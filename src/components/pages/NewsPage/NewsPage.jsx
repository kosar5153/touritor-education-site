import React, { useEffect, useState } from "react";
import Title from "../../commen/Title/Title";
import { SiGooglenews } from "react-icons/si";
import NewsItemBig from "../../items/NewsItemBig/NewsItemBig";
import { getAllNews } from "../../../services/news-services";
import AllCourseContext from "../../../context/main-data/allDataContext";
import { useContext } from "react";
import Pagination from "../../commen/Pagination/Pagination";
import { paginate } from "../../../helperFunctions/paginate/paginate";

const NewsPage = () => {
  const [news, setNews] = useState([]);
  const { allNews } = useContext(AllCourseContext);

  useEffect(() => {
    if (allNews) {
      setNews(allNews);
    }
  }, [allNews]);

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
    const pageCount = Math.ceil(allNews?.length / perPage);
    if (pageCount > currentPage) {
      setCurrentPage(currentPage + 1);
    } else if (pageCount <= currentPage) {
      setCurrentPage(currentPage);
    }
  };

  let courseItem = paginate(allNews, currentPage, perPage);

  // let filterCourses = allNews.filter((course) =>
  //   course.title.includes(search)
  // );
  // if (filterCourses != "") {
  //   courseItem = paginate(filterCourses, currentPage, perPage);
  // }

  return (
    <div className=" container mx-auto my-5 px-5 lg:p-0">
      <Title iconBox={<SiGooglenews />}>به روز ترین اخبار دنیا</Title>
      <div className=" grid gap-5 grid-cols-12">
        <div
          className=" 
        col-span-12
        md:col-span-4
        xl:col-span-3
        bg-green-200 p-5 rounded-xl shadow-md text-gray-600
         dark:bg-Dark-ItemBg dark:text-gray-200
        
        "
        >
          <ul className=" flex flex-col gap-4">
            <li className=" border-b border-green-400 py-2 text-red-600 dark:text-Dark-Pink">
              دسته بندی خبرها
            </li>
            <li className=" border-b border-green-400 py-2">بوت استرپ</li>
            <li className=" border-b border-green-400 py-2">ری اکت</li>
            <li className=" border-b border-green-400 py-2">طراحی وب </li>
            <li className=" border-b border-green-400 py-2">بک اند</li>
          </ul>
        </div>
        <div
          className="
         col-span-12
        md:col-span-8

       
        xl:col-span-9
        "
        >
          {courseItem.map((item) => (
            <NewsItemBig item={item} key={item.id} />
          ))}
          <Pagination
            allCourse={allNews}
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

export default NewsPage;
