import React, { useContext, useEffect, useState } from "react";
import {
  MdInsertComment,
  MdOutlineAlternateEmail,
  MdOutlineMarkEmailRead,
} from "react-icons/md";
import { FaComment } from "react-icons/fa";
import { BiUserCircle } from "react-icons/bi";
import UserComment from "./UserComment";
import { sendComments } from "../../../services/comment-server";
import {
  toastifuyErr,
  toastifuySuccess,
} from "../../../helperFunctions/toastifuy/toastifuy";
import Loader from "../../commen/Loader/Loader";

const CommentBox = ({ allComents, cId, fetchAllComments, setIsLoading }) => {
  const commentFilter = allComents.filter((it) => it.postId === cId);

  const [postId, setpostId] = useState(cId);
  const [email, setemail] = useState("");
  const [username, setusername] = useState("");
  const [comment, setcomment] = useState("");

  const handelSubmit = async (e) => {
    e.preventDefault();
    const newComment = {
      postId,
      email,
      username,
      comment,
    };
    try {
      setIsLoading(true);
      const res = await sendComments(newComment);
      console.log(res);
      if (res.status === 200) {
        setIsLoading(false);
        toastifuySuccess("نظر شما با موفقیت ثبت گردید");
        reset();
        fetchAllComments();
      }
    } catch (error) {
      setIsLoading(false);
      toastifuyErr("مشکلی در ارسال پیام آمده است");
      console.log(error);
    }
  };

  const reset = () => {
    setcomment("");
  };

  return (
    <div>
      <Loader />
      <div className=" grid grid-cols-1">
        <h2 className=" mt-2 flex text-2xl text-red-500 dark:text-Dark-Pink">
          <MdInsertComment className=" flex  animate-TwCon-book-movement text-3xl ml-2" />
          نظرات کاربران در رابطه با این دوره
        </h2>
        <form onSubmit={handelSubmit}>
          <textarea
            className=" min-h-[15rem] my-6 rounded-lg p-5 w-full focus:outline-none
             dark:bg-gray-300 dark:text-gray-600
            "
            type="text"
            value={comment}
            placeholder="نظر خود را بیان کنید..."
            onChange={(e) => setcomment(e.target.value)}
          ></textarea>
          <div className=" grid  grid-cols-3 gap-3 items-center">
            <div
              className=" flex items-center bg-red-400 px-3 gap-3 text-white h-14 rounded-lg col-span-3
              md:col-span-2
            dark:bg-gray-400
            "
            >
              <input
                id="commentEmail"
                type={"email"}
                value={email}
                placeholder="ایمیل خود را وارد کنید"
                className="    placeholder:text-[15px] bg-red-400 
                 dark:bg-gray-400
                placeholder:text-white placeholder:bg-transparent rounded-md px-2 focus:outline-none w-full"
                onChange={(e) => setemail(e.target.value)}
              />
              <label className="commentEmail text-2xl">
                <MdOutlineAlternateEmail />
              </label>
            </div>

            <div
              className=" flex items-center justify-between
             bg-red-500 
              dark:bg-gray-400
             px-3 text-white h-14 rounded-lg col-span-3
           
             md:col-span-1
             
             "
            >
              <input
                id="username"
                type={"username"}
                value={username}
                placeholder=" نام کاربری خود را وارد کنید"
                className="    placeholder:text-[15px] placeholder:text-white focus:outline-none  bg-transparent rounded-md px-2"
                onChange={(e) => setusername(e.target.value)}
              />
              <label className="commentEmail text-2xl">
                <BiUserCircle />
              </label>
            </div>
          </div>
          <button className=" flex justify-center items-center px-5 py-3 rounded-lg  bg-teal-700 text-white my-4 col-span-1">
            <MdOutlineMarkEmailRead className="  text-2xl" />
            دیدگاه خود را ارسال کنید
          </button>
        </form>{" "}
      </div>
      <div className=" my-5">
        <h2 className=" flex text-xl">
          <FaComment className=" ml-2" />
          نظرات کاربران این دوره
        </h2>
        {commentFilter && commentFilter.length > 0 ? (
          commentFilter.map((item) => (
            <UserComment item={item} key={item["_id"]} />
          ))
        ) : (
          <div className=" bg-Main-Blue/20 my-5 p-3 rounded-lg">
            نظری ثبت نشده است
          </div>
        )}
      </div>
    </div>
  );
};

export default CommentBox;
