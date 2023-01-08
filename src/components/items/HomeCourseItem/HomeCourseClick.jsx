import React, { useState, useEffect, useContext } from "react";
import { MdStreetview } from "react-icons/md";
import {
  BsChevronDoubleLeft,
  BsDiamondHalf,
  BsXDiamond,
  BsXDiamondFill,
} from "react-icons/bs";
import PieChartCap from "../PieChartCap/PieChartCap";
import {
  AiOutlineHeart,
  AiOutlineComment,
  AiFillHeart,
  AiOutlineClose,
} from "react-icons/ai";
import { IoHeartDislike, IoHeartDislikeOutline } from "react-icons/io5";
import CommentClickBox from "../CommentBox/CommentClickBox";
import {
  dislikeCourse,
  likeCountCourse,
  likeCourse,
} from "../../../services/course-server";
import AllCourseContext from "../../../context/main-data/allDataContext";
import { UserInfoContext } from "../../../context/user-context/UserInfoContext";
import {
  toastifuyErr,
  toastifuySuccess,
} from "../../../helperFunctions/toastifuy/toastifuy";
import { NavLink } from "react-router-dom";

const HomeCourseClick = ({ item, closeClickBox }) => {
  const { allComents } = useContext(AllCourseContext);
  const commentFilter = allComents.filter((it) => it.postId === item["_id"]);

  const { userData } = useContext(UserInfoContext);
  // -----------------------------
  const [like, setLike] = useState(false);
  const [dislike, setDisLike] = useState(false);
  const [comment, setComment] = useState(false);
  const [likeCount, setlikeCount] = useState();
  {
    console.log(likeCount);
  }

  const getLikeCount = async (cId) => {
    {
      console.log(cId);
    }
    try {
      let { data } = await likeCountCourse(cId);
      let likeResult = data.result;
      setlikeCount(likeResult);
      console.log("likeResult", likeResult);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getLikeCount(item["_id"]);
  }, []);

  // like dislike
  const handelLikeDubmit = async (event) => {
    event.preventDefault();

    if (userData !== null && userData["_id"]) {
      const likeOb = {
        courseId: item["_id"],
        userId: userData["_id"],
      };

      try {
        let result = await likeCourse(likeOb);
        console.log("resultlike", result);
        if (result.status == 200) {
          setLike(true);
          getLikeCount(item["_id"]);
          toastifuySuccess(result.data.message[0].message);
        }
      } catch (err) {
        console.log("likerrr", err);
      }
    } else if (userData === null) {
      toastifuyErr("لطفا وارد حساب کاربری خود شوید.");
    }
  };

  const handeldisLikeDubmit = async (event) => {
    event.preventDefault();
    if (userData["_id"]) {
      const dislikeOb = {
        courseId: item["_id"],
        userId: userData["_id"],
      };

      try {
        let result = await dislikeCourse(dislikeOb);
        if (result.status == 200) {
          setDisLike(true);
          getLikeCount(item["_id"]);
          toastifuySuccess(result.data.message[0].message);
        }
      } catch (err) {
        console.log(err);
      }
    } else {
      toastifuyErr("لطفا وارد حساب کاربری خود شوید.");
    }
  };

  return (
    <div
      className="css-scrollbar-Shop fixed top-0 right-0   bg-Bg-Dark/80 w-full h-full z-[1000]
      justify-center items-center overflow-y-auto  
     hidden md:flex
    "
    >
      <div
        className=" text-5xl text-gray-100 cursor-pointer
         absolute top-20 left-10 hover:animate-TwCon-round-Anim"
        onClick={() => closeClickBox(false)}
      >
        <AiOutlineClose />
      </div>
      <div
        className="css-HomeCourseClick    border border-teal-500   p-7 pt-9  rounded-lg

        dark:bg-Dark-ItemBg  bg-green-100 

         flex-col  gap-5 lg:w-[70%]
         
          transition-all duration-700  mt-[10px]
           absolute left-[7%]  top-40 w-[600px]  lg:relative lg:top-auto lg:left-auto
           hidden md:flex
            
     "
      >
        <div className=" grid grid-cols-8 gap-5">
          <img
            src={`${item.lesson.image}`}
            className="  col-span-8 rounded-lg
             lg:col-span-3 shadow-lg dark:shadow-none
            "
          />
          <div
            className="  
          col-start-1 col-end-8
          lg:col-start-4 lg:col-end-8
          "
          >
            <h3
              className="  flex justify-start text-xl text-[#264067]  
               text-start  mb-2
          
           dark:text-Dark-Teal
          "
            >
              <MdStreetview className=" ml-2 text-2xl  animate-TwCon-book-movement  " />
              دوره {item.title}
            </h3>
            <div className=" flex">
              <div className=" w-48  ">
                <PieChartCap
                  allCapacity={item.capacity}
                  signCap={item.students.length}
                />
              </div>
              <ul className=" flex flex-col justify-center gap-2 text-Bg-Dark">
                <li className="  flex items-center gap-2">
                  <BsXDiamondFill />
                  <span>
                    {" "}
                    {`ظرفیت کل دوره : ${
                      item.capacity + item.students.length
                    }`}{" "}
                  </span>
                </li>
                <li className="  flex items-center gap-2">
                  <BsDiamondHalf />
                  <span>
                    {" "}
                    {`  دانشجویان این دوره : ${item.students.length}`}{" "}
                  </span>
                </li>
                <li className="  flex items-center gap-2">
                  <BsXDiamond />
                  <span> {`  ظرفیت باقیمانده : ${item.capacity}`} </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div
          className="line-clamp-2  
                    p-5 rounded-lg my-4 text-Main-Blue leading-loose
                 dark:text-gray-300   dark:bg-Dark-ItemBg 
                "
        >
          <p>{item.lesson.description}</p>
        </div>

        <div className=" flex items-center justify-between">
          <form>
            <div className=" flex text-2xl gap-4  text-Dark-Sea">
              <button
                type="submit"
                className=" cursor-pointer flex "
                onClick={handelLikeDubmit}
              >
                <span className=" text-Dark-MainBg text-[12px]">
                  {likeCount && likeCount.like}
                </span>
                {like ? (
                  <AiFillHeart className="  text-Dark-Pink" />
                ) : (
                  <AiOutlineHeart className="dark:text-Dark-Sea text-Dark-Teal" />
                )}
              </button>
              <button
                type="submit"
                className=" cursor-pointer flex "
                onClick={handeldisLikeDubmit}
              >
                <span className=" text-Dark-MainBg text-[12px]">
                  {likeCount && likeCount.dislike}
                </span>
                {dislike ? (
                  <IoHeartDislike className="  text-Dark-Pink" />
                ) : (
                  <IoHeartDislikeOutline className="dark:text-Dark-Sea text-Dark-Teal" />
                )}
              </button>
              <span
                className={` cursor-pointer  flex ${
                  comment
                    ? " text-Dark-Pink"
                    : "dark:text-Dark-Sea text-Dark-Teal"
                } `}
                onClick={() => setComment(!comment)}
              >
                <span className=" text-Dark-MainBg text-[12px] ml-[2px] ">
                  {commentFilter && commentFilter.length}
                </span>
                <AiOutlineComment />
              </span>
            </div>
          </form>

          <div>
            <NavLink
              to={`/allcourse/coursedetail/${item["_id"]}`}
              className=" text-[rgb(255,199,0)] flex items-center text-[12px]
               dark:bg-none 
              bg-Dark-ItemBg px-4 py-2 rounded-md  hover:bg-Dark-MainBg"
            >
              {" "}
              <BsChevronDoubleLeft />
              مشاهده دوره
            </NavLink>
          </div>
        </div>
        <div
          className={`  transition-all duration-1000 rounded-md overflow-hidden  ${
            comment ? " h-[300px] " : "h-0 "
          }`}
        >
          <CommentClickBox cId={item["_id"]} />
        </div>
      </div>
    </div>
  );
};

export default HomeCourseClick;

//   IoHeartDislikeOutline
