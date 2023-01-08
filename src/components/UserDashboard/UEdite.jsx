import React, { useReducer } from "react";
import { FaUser, FaPhone } from "react-icons/fa";
import { HiIdentification } from "react-icons/hi";
import { BsFillCalendarDateFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { useContext } from "react";
import { UserInfoContext } from "../../context/user-context/UserInfoContext";
import { FiUploadCloud } from "react-icons/fi";
import { Navigate, useNavigate } from "react-router-dom";
import AllCourseContext from "../../context/main-data/allDataContext";
import {
  toastifuyErr,
  toastifuySuccess,
} from "../../helperFunctions/toastifuy/toastifuy";
import { updateStudent } from "../../services/student-services";
import { uploadImage } from "../../services/upload-image";
import { Loading } from "../commen/Loading/Loading";
import { useEffect } from "react";

import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import "react-multi-date-picker/styles/colors/teal.css";
import transition from "react-element-popper/animations/transition";

import { useState } from "react";

const UEdite = () => {
  const navigate = useNavigate();

  const { userData, setUserFromCookie } = useContext(UserInfoContext);
  const { setIsLoading } = useContext(AllCourseContext);

  const [datePicker, setDatePicker] = useState();

  const initialValues = userData;

  const reducer = (state, action) => {
    switch (action.type) {
      case "CH_FULLNAME":
        return { ...state, fullName: action.payload };

      case "CH_EMAIL":
        return { ...state, email: action.payload };

      case "CH_PHONENUMBER":
        return { ...state, phoneNumber: action.payload };

      case "CH_NATIONALID":
        return { ...state, nationalId: action.payload };

      case "CH_BIRTHDATE":
        return { ...state, birthDate: action.payload };

      case "CH_PROFILE":
        return { ...state, profile: action.payload };
      case "CH_UPDATE_STATE":
        return { ...state, ...userData };
    }
  };

  const [state, dispatch] = useReducer(reducer, initialValues);

  const handelUploadImage = async (imageUrl) => {
    const formData = new FormData();

    formData.append("image", imageUrl);

    try {
      setIsLoading(true);
      const { status, data } = await uploadImage(formData);

      console.log("status", status, data);

      if (status === 200) {
        setIsLoading(false);
        toastifuySuccess("عکس با موفقیت آپلود شد");
        dispatch({
          type: "CH_PROFILE",
          payload: data.result,
        });
      }
    } catch (error) {
      setIsLoading(false);
      toastifuyErr("مشکلی در آپلود عکس بوجود آمده");
    }
  };

  const handelChangeSubmit = async (event) => {
    event.preventDefault();

    const editUser = {
      fullName: state.fullName,
      email: state.email,
      phoneNumber: state.phoneNumber,
      nationalId: state.nationalId,
      birthDate: `${datePicker.year}/${
        datePicker.month.number > 10
          ? `${datePicker.month.number}`
          : `0${datePicker.month.number}`
      }/${datePicker.day > 10 ? `${datePicker.day}` : `0${datePicker.day}`}`,
      profile: state.profile,
    };
    console.log(editUser);

    if (state.profile) {
      try {
        setIsLoading(true);
        const { data, status } = await updateStudent(userData["_id"], editUser);
        setIsLoading(false);
        if (status === 200) {
          toastifuySuccess("اطلاعات شما با موفقیت تغییر یافت");
          setUserFromCookie();

          setTimeout(() => {
            navigate("/userdashboard/udashboard");
          }, 2000);
          console.log(data);
        }
      } catch (error) {
        console.log("error", error);
        toastifuyErr("مشکلی در به روز رسانی بوجود آمده");
        setIsLoading(false);
      }
    } else {
      toastifuyErr(" عکس مورد نظر هنوز آپلود نشده لطفا کمی منتظر بمانید");
    }
  };

  useEffect(() => {
    dispatch({
      type: "CH_UPDATE_STATE",
    });

    setDatePicker(userData.birthDate);
  }, [userData]);

  return (
    <div>
      {!userData ? (
        <Loading />
      ) : (
        <form onSubmit={handelChangeSubmit} className="   w-full  pt-5 ">
          <div className=" grid grid-cols-2   gap-3 gap-y-6">
            <div className=" flex text-gray-50  bg-emerald-600 dark:bg-Dark-ItemBg dark:border-b dark:border-Dark-Teal shadow-xl  dark:rounded-0 rounded  flex-row-reverse items-center    ">
              <input
                placeholder="نام کاربری "
                id="userName"
                className=" w-full p-3 pr-1   placeholder:text-gray-50   focus:text-2xl    focus:outline-none bg-transparent"
                value={state.fullName}
                onChange={(event) =>
                  dispatch({
                    type: "CH_FULLNAME",
                    payload: event.target.value,
                  })
                }
              />
              <label for="userName" className=" mr-2 text-xl ">
                <FaUser />
              </label>
            </div>

            <div className=" flex text-gray-50  bg-emerald-600 dark:bg-Dark-ItemBg dark:border-b dark:border-Dark-Teal shadow-xl  dark:rounded-0 rounded  flex-row-reverse items-center    ">
              <input
                placeholder=" شماره ملی "
                id="nationalId"
                className=" w-full p-3 pr-1   placeholder:text-gray-50   focus:text-xl    focus:outline-none bg-transparent"
                value={state.nationalId}
                onChange={(event) =>
                  dispatch({
                    type: "CH_NATIONALID",
                    payload: event.target.value,
                  })
                }
              />
              <label for="nationalId" className=" text-xl  mr-2">
                <HiIdentification />
              </label>
            </div>

            <div
              className=" flex justify-end text-gray-50  bg-emerald-600 
            dark:bg-Dark-ItemBg dark:border-b dark:border-Dark-Teal shadow-xl  dark:rounded-0 rounded  flex-row-reverse items-center    "
            >
              {/* <div className="w-fu"></div> */}
              <DatePicker
                value={datePicker}
                onChange={setDatePicker}
                calendar={persian}
                locale={persian_fa}
                calendarPosition="bottom-right"
                className="teal"
                animations={[transition()]}
                style={{
                  background: "transparent",
                  borderRadius: "4px",
                  fontSize: "18px",
                  padding: "20px 10px",
                  color: "#ccc",
                  display: "inline-flex",
                  border: "0",
                  boxShadow: "none",
                  zIndex: "1000",
                }}
              />
              <label for="birthDate" className=" text-xl  mr-2">
                <BsFillCalendarDateFill />
              </label>
            </div>

            <div className=" flex text-gray-50  bg-emerald-600 dark:bg-Dark-ItemBg dark:border-b dark:border-Dark-Teal shadow-xl  dark:rounded-0 rounded  flex-row-reverse items-center    ">
              <input
                placeholder=" شماره تلفن "
                id="userName"
                className=" w-full p-3 pr-1   placeholder:text-gray-50   focus:text-xl    focus:outline-none bg-transparent"
                value={state.phoneNumber}
                onChange={(event) =>
                  dispatch({
                    type: "CH_PHONENUMBER",
                    payload: event.target.value,
                  })
                }
              />
              <label for="userName" className=" text-xl  mr-2">
                <FaPhone />
              </label>
            </div>

            <div className=" flex text-gray-50  bg-emerald-600 dark:bg-Dark-ItemBg dark:border-b dark:border-Dark-Teal shadow-xl   dark:rounded-0 rounded  flex-row-reverse items-center    ">
              <input
                placeholder="  ایمیل "
                id="ایمیل"
                className=" w-full p-3 pr-1   placeholder:text-gray-50   focus:text-xl    focus:outline-none bg-transparent"
                value={state.email}
                onChange={(event) =>
                  dispatch({
                    type: "CH_EMAIL",
                    payload: event.target.value,
                  })
                }
              />
              <label for="userName" className=" text-xl  mr-2">
                <MdEmail />
              </label>
            </div>

            <div className=" bg-emerald-600 dark:bg-Dark-ItemBg dark:border-b dark:border-Dark-Teal shadow-xl  dark:rounded-0 p-5 rounded-lg  text-gray-700">
              <label
                for="image"
                className=" w-full  bg-yellow-200 hover:bg-yellow-300 cursor-pointer text-center justify-center flex rounded mt-2 h-10 px-3 py-2 gap-2"
              >
                <FiUploadCloud />
                انتخاب عکس{" "}
              </label>

              <input
                id="image"
                name="image"
                type={"file"}
                className=" hidden"
                onChange={(e) => handelUploadImage(e.target.files[0])}
              />
            </div>
          </div>
          <div className="mt-8 flex justify-start gap-5">
            <button className="    bg-yellow-500 text-cyan-50 py-2 px-8 rounded  shadow-2xl">
              ویرایش
            </button>
            <button className="   bg-red-500 text-cyan-50 py-2 px-8 rounded  shadow-2xl">
              انصراف
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default UEdite;

// kosaraghajani401@gmail.com kosarAghajani@401
