import React, { useEffect, useState } from "react";
import { TbListDetails } from "react-icons/tb";
import Title from "../../commen/Title/Title";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { useParams } from "react-router-dom";
import { getNewsById } from "../../../services/news-services";
import StarCourse from "../../items/StarCourse/StarCourse";

const NewsDetail = () => {
  let [newsDetail, setNewsDetail] = useState({});
  console.log(newsDetail);

  let { newsId } = useParams();

  useEffect(() => {
    const fetchDta = async () => {
      try {
        let { data } = await getNewsById(newsId);
        let result = data.result;
        setNewsDetail(result);
      } catch (err) {
        console.log(err);
      }
    };

    fetchDta();
  }, []);
  return (
    <div className=" container mx-auto  px-5 lg:px-0  py-8">
      <Title iconBox={<TbListDetails />}>{newsDetail.title} </Title>
      <div className=" grid grid-cols-12 gap-4">
        <div
          className=" 
        col-span-12 
        lg:col-span-5 
         bg-green-200 rounded-xl p-5 dark:bg-Dark-Sea "
        >
          <img
            className=" flex object-contain rounded-xl"
            src={newsDetail.image}
          />
          <h2 className=" my-3 text-xl text-Main-Blue">
            دسته بندی : {newsDetail.category}{" "}
          </h2>
          <div className=" text-yellow-400 text-2xl flex">
            <StarCourse />
          </div>
        </div>
        <div
          className=" 
         col-span-12
        lg:col-span-7 
         mb-14
          
         "
        >
          <p className=" leading-[3rem]  text-gray-800 dark:text-gray-400">
            {newsDetail.text}
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsDetail;
