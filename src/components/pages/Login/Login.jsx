import React, { useContext, useEffect, useState } from "react";
import "./Login.css";

import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";

import { Navigate, NavLink, useNavigate } from "react-router-dom";
import MainHomeLink from "../../items/MainHomeLink/MainHomeLink";
import InputField from "./InputField";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import { ErrorMessage, Field, Form, Formik } from "formik";

import { userLogin } from "../../../services/auth-server";
import {
  toastifuyErr,
  toastifuySuccess,
} from "../../../helperFunctions/toastifuy/toastifuy";
import { loginSchema } from "../../../validations/user-validation";
import { setCooki } from "../../../helperFunctions/cookiHandler";
import { UserInfoContext } from "../../../context/user-context/UserInfoContext";
import { isEmpty } from "lodash";
import { getStudentById } from "../../../services/student-services";
import Loader from "../../commen/Loader/Loader";
import AllCourseContext from "../../../context/main-data/allDataContext";

const Login = () => {
  const { setIsLoading } = useContext(AllCourseContext);

  const { userData, setUserToken, setUserData } = useContext(UserInfoContext);

  let navigate = useNavigate();
  // token save in cooki
  const [checked, setChecked] = useState(false);

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

  // login handler
  // initial input value
  const initialValues = {
    email: "",
    password: "",
  };
  // submit handler function
  const submiteHandler = async (values) => {
    let user = values;

    try {
      setIsLoading(true);

      let { status, data } = await userLogin(user);
      if (status === 200) {
        toastifuySuccess(`دوست عزیز به سایت  توزیتور خوش آمدید`);

        setUserToken(data.result.jwtToken);
        const userInfo = await getStudentById(data.result.studentModel["_id"]);
        console.log("userInfo", userInfo.data.result);
        setUserData(userInfo.data.result);
        setIsLoading(false);

        if (checked) {
          setCooki("user-token", `${data.result.jwtToken}`, "/", 2);
        }
        setTimeout(() => {
          navigate("/");
        }, 600);
      }
    } catch (err) {
      setIsLoading(false);

      console.log(err);
      if (err.message.eventId === 400) {
        toastifuyErr(err.message.message);
      } else {
        toastifuyErr("مشکلی پیش آمده لطفا دوباره اطلاعات خود را چک کنید");
      }
    }
  };

  if (!isEmpty(userData)) return <Navigate replace to={"/"} />;
  return (
    <div
      className="bounce2   flex justify-center  py-20  bg-cyan-900  dark:bg-Dark-MainBg w-full  h-auto mx-auto right-0 top-0  z-[1000]
    "
    >
      <Loader />

      <div
        className=" relative css-login px-10 flex flex-col p-5  items-start  w-3/4 md:w-1/2 rounded-xl shadow-2xl  mb-16
    dark:bg-Dark-ItemBg
        "
      >
        <h2 className=" leading-relaxed text-3xl  text-[#ff6978] lg:text-cyan-100  my-10  ">
          وارد حساب کاربری خودت شو!!
        </h2>
        <Formik
          initialValues={initialValues}
          validationSchema={loginSchema}
          onSubmit={submiteHandler}
        >
          <Form className="  mt-2 w-full  ">
            <div className="flex flex-col   ">
              <InputField
                icon={<MdEmail />}
                placeholder="  ایمیل "
                id="email"
                name="email"
              />

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
                  <span className=" text-red-300 mb-5 mt-1 text-[13px]">
                    {err}
                  </span>
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
                  مرا به خاطر بسپار
                </span>
              </div>
            </div>
            <div className="my-5 grid justify-items-stretch gap-3 lg:gap-8  text-center grid-cols-1 lg:grid-cols-2">
              <button
                type="submit"
                className="  text-center  bg-emerald-600 hover:bg-emerald-700 text-cyan-50 py-2 px-8 rounded   shadow-2xl"
              >
                ورود
              </button>
              <NavLink
                to={"/signup"}
                type="submit"
                className="   bg-emerald-600 hover:bg-emerald-700 text-cyan-50 py-2 px-8 rounded   shadow-2xl"
              >
                ثبتنام
              </NavLink>
            </div>
          </Form>
        </Formik>
        <NavLink
          to="/forgetpass"
          className="my-3   hover:border-b-2 border-dotted border-emerald-600 py-2 hover:text-[#ffe0e3] text-[#f6afb6]  shadow-2xl"
        >
          ...رمزمو فراموش کردم...{" "}
        </NavLink>

        <img
          src={require("../../../Assets/images/Touritor/image8.png")}
          className=" w-24 lg:left-56 lg:w-34 block absolute  left-24 bottom-0  animate-TwCon-cloudy-movement "
        />
      </div>
      <MainHomeLink />
    </div>
  );
};

export default Login;
