import React, { useContext } from "react";
import { useState } from "react";
import AllCourseContext from "../../../context/main-data/allDataContext";
import {
  toastifuyErr,
  toastifuySuccess,
} from "../../../helperFunctions/toastifuy/toastifuy";
import { answerComment } from "../../../services/comment-server";
import Loader from "../../commen/Loader/Loader";

const RespoComment = ({ setshowCommentBox, comId }) => {
  const { fetchAllComments, setIsLoading } = useContext(AllCourseContext);
  const [answer, setanswer] = useState("");
  const [id, setid] = useState(comId);

  const handelSubmit = async (e) => {
    e.preventDefault();
    const newComment = {
      id,
      answer,
    };
    try {
      setIsLoading(true);
      const res = await answerComment(newComment);
      console.log(res);
      if (res.status === 200) {
        setIsLoading(false);
        toastifuySuccess("نظر شما با موفقیت ثبت گردید");
        reset();
        fetchAllComments();
      }
    } catch (error) {
      setIsLoading(false);
      toastifuyErr("مشکلی در ارسال پاسخ آمده است");

      console.log(error);
    }
  };
  const reset = () => {
    setanswer("");
  };
  return (
    <div className=" absolute left-0 top-12 w-[50vw] bg-green-900 rounded-lg   p-5 z-[1000]">
      <Loader />

      <form onSubmit={handelSubmit}>
        <textarea
          placeholder="پاسخ به این پیام"
          className=" w-full h-[200px] p-3 rounded-lg focus:outline-none dark:text-gray-600"
          value={answer}
          onChange={(e) => setanswer(e.target.value)}
        />
        <button className="  hover:bg-yellow-400 rounded-md  w-full py-1 text-[15px] mt-2  text-white">
          ارسال پاسخ
        </button>
      </form>
    </div>
  );
};

export default RespoComment;
