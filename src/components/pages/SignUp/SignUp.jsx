import React, { useState } from "react";
import "./SignUp.css";

import {
  BsFillCalendarDateFill,
  BsFillEyeFill,
  BsFillEyeSlashFill,
} from "react-icons/bs";
import { RiLockPasswordFill } from "react-icons/ri";
import { NavLink, useNavigate } from "react-router-dom";
import MainHomeLink from "../../items/MainHomeLink/MainHomeLink";
import { userRegister } from "../../../services/auth-server";

import * as shamsi from "shamsi-date-converter";
import { registerSchema } from "../../../validations/user-validation";
import { ErrorMessage, Field, Form, Formik, useFormik } from "formik";
import InputField from "./InputField";
import { registerData } from "./registerData";
import { toast } from "react-toastify";
import {
  toastifuyErr,
  toastifuySuccess,
} from "../../../helperFunctions/toastifuy/toastifuy";
import Loader from "../../commen/Loader/Loader";
import { useContext } from "react";
import AllCourseContext from "../../../context/main-data/allDataContext";

import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import "react-multi-date-picker/styles/colors/teal.css";
import transition from "react-element-popper/animations/transition";

const SignUp = () => {
  const { setIsLoading } = useContext(AllCourseContext);
  let navigate = useNavigate();

  // .....
  const [datePicker, setDatePicker] = useState();

  const [checked, setChecked] = useState(false);

  // initial input value
  const initialValues = {
    fullName: "",
    email: "",
    password: "",
    phoneNumber: "",
    nationalId: "",
  };

  // submit handler function
  const submiteHandler = async (values) => {
    let user = {
      ...values,
      birthDate: `${datePicker.year}/${
        datePicker.month.number > 10
          ? `${datePicker.month.number}`
          : `0${datePicker.month.number}`
      }/${datePicker.day > 10 ? `${datePicker.day}` : `0${datePicker.day}`}`,
    };
    console.log("user", user);

    try {
      setIsLoading(true);
      let newsResult = await userRegister(user);
      console.log(newsResult.status);
      if (newsResult.status === 200) {
        toastifuySuccess(`ثبتنام شما در توریتور با موفقیت انحام شد`);
        setIsLoading(false);
        setTimeout(() => {
          navigate("/login");
        }, 600);
      }
    } catch (err) {
      setIsLoading(false);
      if (err.response.status === 401) {
        toastifuyErr("ایمیل یا شماره ملی موجود است");
      } else {
        toastifuyErr("مشکلی پیش آمده لطفا دوباره اطلاعات خود را چک کنید");
      }
    }
  };

  // show hide password
  const [showPass, setShowPass] = useState("password");
  const handelShowPass = () => {
    if (showPass === "password") {
      setShowPass("text");
    }
    if (showPass === "text") {
      setShowPass("password");
    }
  };

  return (
    <div
      className="bounce2   flex justify-center py-10 px-10   md:py-20 bg-cyan-900 w-full  h-auto mx-auto right-0 top-0  z-[1000]
      dark:bg-Dark-MainBg
    "
    >
      <Loader />
      <div
        className=" relative   css-sign px-10 flex flex-col p-5  items-start   w-full md:w-3/4 lg:w-1/2  rounded-xl shadow-2xl  mb-16
        dark:bg-Dark-ItemBg
      "
      >
        <h2 className=" text-2xl   md:text-3xl leading-relaxed    text-[#f0b4ba] lg:text-cyan-100  mt-10 mb-1 lg:my-10 ">
          ثبت نام کن و از یادگیری لذت ببر!!{" "}
        </h2>
        <Formik
          initialValues={initialValues}
          validationSchema={registerSchema}
          onSubmit={(values) => {
            if (datePicker !== "" && checked) {
              submiteHandler(values);
            } else {
              toastifuyErr("مشکلی پیش آمده لطفا دوباره اطلاعات خود را چک کنید");
            }
          }}
        >
          <Form className="  mt-8 w-full  ">
            <div className="flex flex-col   ">
              {registerData.map((it) => (
                <InputField
                  icon={it.icon}
                  name={it.name}
                  id={it.id}
                  key={it.id}
                  placeholder={it.placeholder}
                />
              ))}

              <div
                className=" flex rtl  rounded lg:bg-transparent  relative
               items-center  my-8 border-b-2 border-dotted hover:border-solid pb-5"
              >
                <label
                  for="birthDate"
                  className=" text-xl text-cyan-100/60 ml-2 mr-2"
                >
                  <BsFillCalendarDateFill />
                </label>
                <DatePicker
                  value={datePicker}
                  onChange={setDatePicker}
                  calendar={persian}
                  locale={persian_fa}
                  calendarPosition="bottom-right"
                  className="teal"
                  animations={[transition()]}
                  style={{
                    backgroundColor: "transparent",
                    borderRadius: "4px",
                    fontSize: "18px",
                    padding: "20px 10px",
                    color: "#ccc",
                    display: "inline-flex",

                    border: "0",
                    boxShadow: "none",
                    zIndex: "1000",
                    position: "absolute",
                    bottom: "5px",
                  }}
                />

                {!datePicker && (
                  <span className=" text-green-200/80 -z-0  text-[17px] absolute right-11 bottom-[15px]">
                    تاریخ تولد
                  </span>
                )}
              </div>

              <div className="flex  rounded lg:bg-transparent flex-row-reverse items-center  my-3 border-b-2 border-dotted hover:border-solid">
                <div className=" text-emerald-50 text-xl ml-2 cursor-pointer">
                  {showPass === "password" ? (
                    <BsFillEyeFill onClick={handelShowPass} />
                  ) : (
                    <BsFillEyeSlashFill onClick={handelShowPass} />
                  )}
                </div>
                <Field
                  placeholder="  رمز عبور "
                  id="password"
                  name="password"
                  className=" w-full p-3 placeholder-green-200/80  text-cyan-50 text-xl focus:text-2xl  focus:outline-none bg-transparent"
                  type={showPass}
                />
                <label
                  for="password"
                  className=" text-2xl text-cyan-100/60 mr-2"
                >
                  <RiLockPasswordFill />
                </label>
              </div>
              <ErrorMessage name={"password"}>
                {(err) => (
                  <span className=" text-red-300 text-[13px]">{err}</span>
                )}
              </ErrorMessage>

              <div className="flex items-center justify-start  my-5 ">
                <input
                  id="checkbox"
                  type="checkbox"
                  name="checkbox"
                  className="TwIN-Signcheckbox w-60 border-0 hidden"
                  value={checked}
                  onChange={(e) => setChecked(e.target.checked)}
                />
                <label
                  for="checkbox"
                  className=" text-xl text-cyan-100 w-5 h-5 
                bg-white cursor-pointer ml-2 rounded border-2 border-green-400"
                ></label>
                <span className="leading-relaxed text-xl text-cyan-100">
                  {" "}
                  تمام قوانین را خواندم و قبول دارم
                </span>
              </div>
            </div>

            <button
              type="submit"
              className="my-3   bg-emerald-600 text-cyan-50 py-2 px-8 rounded  shadow-2xl"
            >
              ثبتنام
            </button>
          </Form>
        </Formik>
        <NavLink
          to={"/login"}
          className="my-3 z-1000   hover:border-b-2 border-INPUT-BLUE border-dotted py-2 hover:text-[#fabdc3] text-cyan-400   shadow-2xl"
        >
          ...حساب کاربری دارم...
        </NavLink>

        <img
          src={require("../../../Assets/images/Touritor/image8.png")}
          className=" w-24 lg:left-56 lg:w-auto block absolute  left-24 bottom-0  animate-TwCon-cloudy-movement "
        />
        <MainHomeLink />
      </div>
    </div>
  );
};

export default SignUp;
