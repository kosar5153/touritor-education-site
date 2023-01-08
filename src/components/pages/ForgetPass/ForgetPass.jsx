import React, { useContext } from "react";
import "./ForgetPass.css";

import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";

import { NavLink } from "react-router-dom";
import MainHomeLink from "../../items/MainHomeLink/MainHomeLink";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { forgetPassSchema } from "../../../validations/user-validation";
import {
  toastifuyErr,
  toastifuySuccess,
} from "../../../helperFunctions/toastifuy/toastifuy";
import { userFordetPass } from "../../../services/auth-server";
import AllCourseContext from "../../../context/main-data/allDataContext";
import Loader from "../../commen/Loader/Loader";

const ForgetPass = () => {
  const { setIsLoading } = useContext(AllCourseContext);

  // initialValue
  const initialValues = {
    email: "",
  };

  // submit handler function
  const submiteHandler = async (values) => {
    let email = values;
    console.log("email", email);
    try {
      setIsLoading(true);

      let newsResult = await userFordetPass(email);

      if (newsResult.status === 200) {
        toastifuySuccess(`لینک تغییر رمز عبور به ایمیل شما ارسال شد`);
        setIsLoading(false);
      }
    } catch (err) {
      setIsLoading(false);

      if (err.response.status == 501) {
        toastifuyErr(`ایمیل وارد شده معتبر نمیباشد`);
      } else {
        toastifuyErr(
          `مشکلی پیش آمده لطفا بعد از چند دقیقه دوباره اقدام نمایید`
        );
      }
    }
  };
  return (
    <div
      className="bounce2  min-h-screen  flex justify-center  py-20  bg-cyan-900 w-full  h-auto mx-auto right-0 top-0  z-[1000]
      dark:bg-Dark-MainBg
      "
    >
      <div
        className=" relative   bg-[#0e3a5d]  dark:bg-Dark-ItemBg px-10 flex flex-col p-5  items-start  w-3/4 md:w-1/2  rounded-xl shadow-2xl  mb-16
    "
      >
        <Loader />

        <h2 className=" z-10 block  leading-relaxed text-3xl  text-[#ff6978] lg:text-cyan-100  my-5  ">
          رمزتو فراموش کردی؟؟{" "}
        </h2>
        <img
          src={require("../../../Assets/images/Touritor/image14.png")}
          className=" block absolute left-10 top-10 animate-TwCon-lamp-movement "
        />
        <img
          src={require("../../../Assets/images/Touritor/image11.png")}
          className=" block absolute right-20  bottom-0  animate-TwCon-cloudy-movement "
        />
        <Formik
          initialValues={initialValues}
          validationSchema={forgetPassSchema}
          onSubmit={submiteHandler}
        >
          <Form className="  mt-8 w-full ">
            <div className="flex flex-col  relative  ">
              <div className="flex bg-[#b44a55] rounded lg:bg-transparent flex-row-reverse items-center  my-3 mb-0 border-b-2 border-dotted hover:border-solid">
                <Field
                  placeholder="  ایمیل "
                  type={"email"}
                  id="email"
                  name="email"
                  className=" w-full p-3 placeholder-green-200/80  text-cyan-50 text-xl focus:text-2xl  focus:outline-none bg-transparent"
                />
                <label for="email" className=" text-2xl text-cyan-100/60 mr-2">
                  <MdEmail />
                </label>
              </div>
              <ErrorMessage name={"email"}>
                {(err) => (
                  <span className=" text-red-300 mb-5 text-[13px]">{err}</span>
                )}
              </ErrorMessage>
            </div>
            <div className=" my-3 mt-20 grid justify-items-stretch gap-3 lg:gap-8  grid-cols-1 lg:grid-cols-2 text-center ">
              <button
                type="submit"
                className="  text-center  bg-emerald-600 hover:bg-emerald-700 text-cyan-50 py-2 px-8 rounded   shadow-2xl"
              >
                فراموشی رمز
              </button>
              <NavLink
                to={"/login"}
                type="submit"
                className="    bg-emerald-600 hover:bg-emerald-700 text-cyan-50 py-2 px-8 rounded   shadow-2xl"
              >
                ورود
              </NavLink>
            </div>
          </Form>
        </Formik>
        <MainHomeLink />
      </div>
    </div>
  );
};

export default ForgetPass;
