import React, { useContext, useEffect, useState } from "react";
import { MdStreetview } from "react-icons/md";
import { FaMoneyBillAlt } from "react-icons/fa";
import CourseUlVideo from "./CourseUlVideo";
import CommentBox from "../../items/CommentBox/CommentBox";
import { useParams } from "react-router-dom";
import { getOneCourse } from "../../../services/course-server";
import { Loading } from "../../commen/Loading/Loading";

import video from "../../../Assets/videos/video.mp4";
import { videoData } from "./videoData";

import AllCourseContext from "../../../context/main-data/allDataContext";
import ShoppingCardContext from "../../../context/shopping-cart-context/shoppingCard-context";
import PieChartCap from "../../items/PieChartCap/PieChartCap";
import { BsDiamondHalf, BsXDiamond, BsXDiamondFill } from "react-icons/bs";

const CourseDetail = () => {
  const [loading, setLoading] = useState(true);
  const [oneData, setOneData] = useState({});

  const { courseId } = useParams();

  const { allComents, fetchAllComments, setIsLoading } =
    useContext(AllCourseContext);
  const { addToCart } = useContext(ShoppingCardContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        let { data } = await getOneCourse(courseId);
        let result = data.result;
        setOneData(result);

        setLoading(false);
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className=" container   mx-auto my-5">
          <h1
            className=" flex justify-center text-3xl text-[#264067]   text-center my-10
          
           dark:text-Dark-Teal
          "
          >
            <MdStreetview className=" ml-2  animate-TwCon-book-movement" />
            دوره {oneData.title}
          </h1>
          <div
            className=" grid grid-cols-12 gap-5

              px-5 md:px-0
              "
          >
            <div
              className="
                col-span-12
                lg:col-span-3 "
            >
              <div
                className=" flex  bg-green-100 rounded-lg  my-2 shadow-xl
                p-4 items-center text-green-800 border-b-4 border-green-600
                
                 dark:bg-Dark-ItemBg dark:text-Dark-Sea dark:border-Dark-Sea
                "
              >
                <FaMoneyBillAlt className=" text-2xl ml-2" />
                قیمت دوره :
                <span className="mr-2 ml-1">
                  {oneData.cost.toLocaleString()}
                </span>
                <span>تومان</span>
              </div>
              <ul
                className=" shadow-xl flex  flex-col  justify-start items-start bg-green-100 rounded-lg  my-5
                    p-4   text-gray-500 border-b-4 border-green-600 gap-y-4
                    dark:bg-Dark-ItemBg dark:text-Dark-Sea dark:border-Dark-Sea
       
                        "
              >
                <li className=" flex text-Main-Blue dark:text-gray-300">
                  {" "}
                  اطلاعات دوره :
                </li>
                <li className=" flex ">
                  <span>مدرس دوره : </span>
                  <span className=" text-gray-700 mr-2 dark:text-gray-400">
                    {" "}
                    {oneData.teacher.fullName}
                  </span>
                </li>
                <li className=" flex ">
                  <span> تعداد ویدیوها : </span>
                  <span className=" text-gray-700 mr-2 dark:text-gray-400">
                    {" "}
                    50
                  </span>
                </li>
                <li className=" flex ">
                  <span> مدت زمان دوره : </span>
                  <span className=" text-gray-700 mr-2 dark:text-gray-400">
                    {" "}
                    9:32:00
                  </span>
                </li>
                <li className=" flex ">
                  <span> سطح دوره : </span>
                  <span className=" text-gray-700 mr-2 dark:text-gray-400">
                    {" "}
                    متوسط
                  </span>
                </li>
                <li className=" flex ">
                  <span> وضعیت دوره : </span>
                  <span className=" text-gray-700 mr-2 dark:text-gray-400">
                    {" "}
                    در حال برگزاری
                  </span>
                </li>
                <li className=" flex ">
                  <span> تاریخ آخرین به روز رسانی : </span>
                  <span className=" text-gray-700 mr-2 dark:text-gray-400">
                    {" "}
                    1401/08/5{" "}
                  </span>
                </li>
                <li className=" flex ">
                  <span> ظرفیت دوره : </span>
                  <span className=" text-gray-700 mr-2 dark:text-gray-400">
                    {" "}
                    {oneData.capacity}{" "}
                  </span>
                </li>
              </ul>
              <div
                className=" shadow-xl flex  text-green-100 rounded-lg  my-2 items-center
                p-4  bg-green-700 text-center justify-center cursor-pointer hover:bg-green-800
                 dark:bg-Dark-Teal
                "
                onClick={() => addToCart(oneData)}
              >
                {" "}
                ثبتنام در این دوره
              </div>
            </div>

            <div
              className="
                col-span-12
              lg:col-span-9 mt-2
              
              
              "
            >
              {/* img */}
              <div
                className=" bg-green-100 shadow-2xl p-5 rounded-lg

                grid grid-cols-12 gap-5
                dark:bg-Dark-ItemBg dark:text-Dark-Sea dark:border-Dark-Sea
                "
              >
                <img
                  className=" rounded-lg  ml-5
                  col-span-12
                  md:col-span-5"
                  src={oneData.lesson.image}
                />
                <div
                  className="
                    col-span-12
                  md:col-span-7"
                >
                  <h1
                    className=" text-pink-600  mb-5 text-2xl
                   dark:text-gray-200
                  "
                  >
                    درس
                    <span> {oneData.lesson.lessonName}</span>
                  </h1>
                  <div className=" flex items-center ">
                    <span
                      className=" text-Main-Blue text-xl
                  dark:text-gray-400 text-[16px]
                  "
                    >
                      موضوع درس :
                    </span>
                    <ul className=" flex gap-1">
                      {oneData.lesson.topics.map((item) => (
                        <li
                          className=" text-[#2c3f94]
                      dark:text-gray-300 text-[14px]  mr-1
                      "
                        >
                          {" "}
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div
                    className="  
          col-start-1 col-end-8
          lg:col-start-4 lg:col-end-8
          "
                  >
                    <div className=" flex flex-col md:flex-row">
                      <div className=" w-48  ">
                        <PieChartCap
                          allCapacity={oneData.capacity}
                          signCap={oneData.students.length}
                        />
                      </div>
                      <ul className=" flex flex-col justify-center gap-2 text-Bg-Dark">
                        <li className="  flex items-center gap-2">
                          <BsXDiamondFill />
                          <span>
                            {" "}
                            {`ظرفیت کل دوره : ${
                              oneData.capacity + oneData.students.length
                            }`}{" "}
                          </span>
                        </li>
                        <li className="  flex items-center gap-2">
                          <BsDiamondHalf />
                          <span>
                            {" "}
                            {`  دانشجویان این دوره : ${oneData.students.length}`}{" "}
                          </span>
                        </li>
                        <li className="  flex items-center gap-2">
                          <BsXDiamond />
                          <span>
                            {" "}
                            {`  ظرفیت باقیمانده : ${oneData.capacity}`}{" "}
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* text */}
              <div
                className=" bg-green-100 shadow-2xl
                    p-5 rounded-lg my-4 text-Main-Blue leading-loose
                 dark:text-gray-300   dark:bg-Dark-ItemBg 
                "
              >
                <p>{oneData.lesson.description}</p>
              </div>

              {/* video */}
              <div
                className=" bg-green-100 shadow-2xl
                p-5 rounded-lg my-4 text-Main-Blue leading-loose
                dark:bg-Dark-ItemBg dark:text-Dark-Sea 
            "
              >
                {" "}
                <div className=" w-full mb-8  py-6">
                  <video controls src={video} className=" rounded-xl w-full" />
                </div>
                <div>
                  {videoData.map((item) => (
                    <CourseUlVideo item={item} key={item.id} />
                  ))}
                </div>
              </div>

              {/* Comment box */}
              <div
                className=" bg-green-100 shadow-2xl
                p-5 rounded-lg my-4 text-Main-Blue leading-loose relative
                dark:bg-Dark-ItemBg dark:text-Dark-Sea 

            "
              >
                {allComents && (
                  <CommentBox
                    cId={oneData["_id"]}
                    allComents={allComents}
                    fetchAllComments={fetchAllComments}
                    setIsLoading={setIsLoading}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CourseDetail;
