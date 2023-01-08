import React, { useState } from "react";
import Button from "../../commen/Button/Button";
import "./Navbar.css";

import { VscChromeClose } from "react-icons/vsc";
import { BiSearchAlt } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import { BsFlower1, BsPatchQuestionFill } from "react-icons/bs";
import { useContext } from "react";
import AllCourseContext from "../../../context/main-data/allDataContext";
import { useEffect } from "react";
import { SiGooglenews } from "react-icons/si";
const SearchBox = ({ closeFun }) => {
  const [news, setNews] = useState([]);
  const [course, setcourse] = useState([]);
  const [inputData, setInputData] = useState("");

  const { allCourses, allNews } = useContext(AllCourseContext);

  const hanselUserSearch = (event) => {
    setInputData(event.target.value);

    let searctList = allCourses?.filter((item) =>
      item.title.startsWith(inputData)
    );
    setcourse(searctList);

    let searctListNews = allNews?.filter((item) =>
      item.title.startsWith(inputData)
    );
    setNews(searctListNews);
  };

  return (
    <>
      <div
        className="bounce2     absolute  bg-cyan-900/90 w-full h-screen mx-auto right-0 top-0  py-7
       dark:bg-Dark-ItemBg
      
      "
      >
        <div className="  p-5 container mx-auto ">
          {/* button */}
          <div className=" flex justify-between  items-center  px-0">
            <Button
              icon={<VscChromeClose />}
              customClass={"TwIN-Close"}
              closeFun={closeFun}
            />
            <label
              className=" inline-block TwIN-Close  cursor-pointer text-5xl mx-5"
              for="searchNav"
            >
              <BiSearchAlt />
            </label>
          </div>
          {/* form */}
          <form className="  rounded-xl px-8 focus:border-0 text-green-900 text-3xl">
            <input
              id="searchNav"
              placeholder="دنبال چی میگردی؟؟"
              type="text"
              className="css-serchInpt  focus:outline-none focus:border focus:border-dotted  focus:border-green-700  bg-green-300  w-full flex px-16 py-10 h-20 rounded-xl 
                    shadow-2xl   placeholder:text-green-600 "
              onChange={(event) => hanselUserSearch(event)}
            />
          </form>
          {/* search items */}
          <ul
            className="p-8 pr-11 text-right  text-green-50 text-2xl   
          css-scrollbar h-80 overflow-y-auto
          "
          >
            {course.length > 0
              ? course.map((it) => (
                  <li
                    key={it["_id"]}
                    className="TwIN-SerchLink  border-b-2 p-4 mb-3  hover:border-green-500  hover:border-solid border-dashed"
                  >
                    <NavLink
                      to={`allcourse/coursedetail/${it["_id"]}`}
                      className=" w-full flex items-center"
                      onClick={closeFun}
                    >
                      <SiGooglenews className="TwIN-logo inline-block ml-2 text-xl" />
                      {it.title}
                      {console.log(it)}
                    </NavLink>
                  </li>
                ))
              : null}
            {news.length > 0
              ? news.map((it) => (
                  <li
                    key={it["_id"]}
                    className="TwIN-SerchLink  border-b-2 p-4 mb-3  hover:border-red-500  hover:border-solid border-dashed"
                  >
                    <NavLink
                      to={`/newspage/newsdetail/${it["_id"]}`}
                      className=" w-full flex items-center"
                      onClick={closeFun}
                    >
                      <BsFlower1 className="TwIN-logo inline-block ml-2 text-xl" />
                      {it.title}
                      {console.log(it)}
                    </NavLink>
                  </li>
                ))
              : null}
            {news.length <= 0 || course.length <= 0 ? (
              <BsPatchQuestionFill className=" text-9xl flex mx-auto mt-9  text-green-400/90 animate-ping " />
            ) : null}{" "}
          </ul>
        </div>
      </div>
    </>
  );
};

export default SearchBox;
