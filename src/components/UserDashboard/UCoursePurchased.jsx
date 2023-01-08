import { isEmpty } from "lodash";
import React, { useContext, useEffect, useState } from "react";
import { confirmAlert } from "react-confirm-alert";
import { BsFillEyeFill } from "react-icons/bs";
import { GiBrokenHeart } from "react-icons/gi";
import { ImEye } from "react-icons/im";
import { RiDeleteBin5Fill, RiEyeCloseFill } from "react-icons/ri";
import { NavLink, useNavigate } from "react-router-dom";
import AllCourseContext from "../../context/main-data/allDataContext";
import ShoppingCardContext from "../../context/shopping-cart-context/shoppingCard-context";
import { UserInfoContext } from "../../context/user-context/UserInfoContext";
import {
  toastifuyErr,
  toastifuySuccess,
} from "../../helperFunctions/toastifuy/toastifuy";
import { removeCourseToStudent } from "../../services/course-server";
import { getStudentById } from "../../services/student-services";
import { Loading } from "../commen/Loading/Loading";

const UCoursePurchased = () => {
  const { setIsLoading } = useContext(AllCourseContext);
  const { AddPrice } = useContext(ShoppingCardContext);
  const { userData, setUserData } = useContext(UserInfoContext);
  const [userCourses, setUserCourses] = useState([]);

  const navigate = useNavigate();

  // useEffect(() => {
  //   if (!isEmpty(userData)) {
  //     setUserCourses(userData.courses);
  //   } else {
  //     navigate("/");
  //   }
  // }, []);

  useEffect(() => {
    setUserCourses(userData.courses);
  }, [userData.courses]);

  const handelDeletStudentFromCourse = async (cid, cCost) => {
    const handelDeleteCourse = async (cid) => {
      const removeStudent = userData["_id"];
      try {
        setIsLoading(true);
        const res = await removeCourseToStudent(
          {
            courseId: cid,
          },
          removeStudent
        );

        if (res.status === 200) {
          setIsLoading(false);
          toastifuySuccess("دوره با موفقیت حذف شد");

          const addMoneyToBascket = (cCost * 50) / 100;
          AddPrice(Number(addMoneyToBascket));
          try {
            let student = await getStudentById(removeStudent);
            setUserData(student.data.result);
          } catch (err) {}
        }
      } catch (error) {
        setIsLoading(false);
        if (error.response.status === 500) {
          toastifuyErr("خطایی رخ داده است، لطفا دوباره امتحان کنید");
        } else {
          toastifuyErr("مشکلی پیش آمده است");
          console.log(error);
        }
      }
    };

    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div
            className="p-10 py-7 rounded-lg  border-orange-400
            bg-Main-Blue dark:bg-Dark-MainBg  shadow-lg  border-dotted
            absolute top-[300px]  left-[2%] sm:left-[30%] md:left-[10%]  lg:static"
          >
            <h1 className=" text-2xl text-orange-400">پاک کردن مخاطب</h1>
            <p className=" text-xl my-7 mb-10 text-gray-300">
              مطمئنی که میخوای آیتم مورد نظر رو پاک کنی ؟
            </p>
            <button
              onClick={() => {
                handelDeleteCourse(cid, cCost);
                onClose();
              }}
              className=" shadow rounded p-2 ml-4 text-gray-200 bg-Dark-Teal dark:bg-Main-Blue mx-2"
            >
              مطمئن هستم
            </button>
            <button
              onClick={onClose}
              className=" shadow rounded p-2 text-gray-200  bg-rose-700"
            >
              انصراف
            </button>
          </div>
        );
      },
    });
  };

  return (
    <>
      {!userData ? (
        <Loading />
      ) : (
        <div>
          {userCourses && (
            <ul>
              {userCourses.length > 0 ? (
                userCourses.map((course) => (
                  <li
                    className=" bg-red-300 hover:bg-red-400 
              dark:bg-Dark-Teal   dark:hover:bg-red-400
              dark:border-Dark-Teal shadow-xl p-5 rounded-lg my-4 
              text-gray-700 flex justify-between items-center "
                  >
                    <div>
                      <NavLink
                        to={`/allcourse/coursedetail/${course["_id"]}`}
                        className="TWIN-eye flex justify-between items-center w-full gap-2 hover:text-gray-600"
                      >
                        {course.title}
                        <RiEyeCloseFill className="close" />
                        <ImEye className=" open hidden" />
                      </NavLink>
                    </div>
                    <div
                      className=" cursor-pointer hover:text-gray-600"
                      onClick={() =>
                        handelDeletStudentFromCourse(course["_id"], course.cost)
                      }
                    >
                      <RiDeleteBin5Fill />
                    </div>
                  </li>
                ))
              ) : (
                <li className=" flex flex-col justify-center items-center align-middle  mt-24 ">
                  <GiBrokenHeart className=" mb-7 animate-ping  text-7xl text-red-500" />
                  <span className=" text-2xl text-gray-700 dark:text-gray-400 mt-4">
                    دوره ای موجود نمیباشد
                  </span>
                </li>
              )}
            </ul>
          )}
        </div>
      )}
    </>
  );
};

export default UCoursePurchased;
