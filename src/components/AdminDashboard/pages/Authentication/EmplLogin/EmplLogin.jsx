import React, { useState } from "react";
import "./SignUp.css";

import {
  BsBrightnessAltHigh,
  BsFillCalendarDateFill,
  BsFillEyeFill,
  BsFillEyeSlashFill,
} from "react-icons/bs";
import { RiAddFill, RiDashboardLine, RiLockPasswordFill } from "react-icons/ri";
import { NavLink, useNavigate } from "react-router-dom";
// import MainHomeLink from "../../items/MainHomeLink/MainHomeLink";

import { employeloginschema } from "../../../../../validations/admin-validations/addCourse-validation";
import { ErrorMessage, Field, Form, Formik, useFormik } from "formik";
import InputField from "./InputField";
import { registerData } from "./registerData";

import {
  toastifuyErr,
  toastifuySuccess,
} from "../../../../../helperFunctions/toastifuy/toastifuy";
import { TbFlower } from "react-icons/tb";
import { FiHome } from "react-icons//fi";
import Loader from "../../../../commen/Loader/Loader";
import { useContext } from "react";
import AllCourseContext from "../../../../../context/main-data/allDataContext";
import { loginEmploy } from "../../../../../services/employes-services";
import { FaDashcube } from "react-icons/fa";
import { AiOutlineFullscreenExit } from "react-icons/ai";
import { AdminContext } from "../../../../../context/admin-context/AdminContext";
import {
  setCooki,
  removeCooki,
} from "../../../../../helperFunctions/cookiHandler";
import { useEffect } from "react";
import { UserInfoContext } from "../../../../../context/user-context/UserInfoContext";
const EmplSignup = () => {
  const { setIsLoading } = useContext(AllCourseContext);
  const { setAdminInfo, setAdminToken, adminInfo } = useContext(AdminContext);

  const { setUserData, setUserToken, userToken } = useContext(UserInfoContext);
  useEffect(() => {
    removeCooki("user-token", `${userToken}`, "/", 2);
    setUserToken(null);
    setUserData(null);

    const adminToken = localStorage.getItem("admin-token");

    if (adminToken && (adminToken !== null || adminToken !== undefined)) {
      setAdminToken(adminToken);
    }
  }, []);

  let navigate = useNavigate();

  // token save in cooki
  const [checked, setChecked] = useState(false);

  // initial input value
  const initialValues = {
    email: "",
    password: "",
  };

  // submit handler function
  const submiteHandler = async (values) => {
    let user = {
      ...values,
    };
    console.log(user);

    try {
      setIsLoading(true);
      let newsResult = await loginEmploy(user);
      console.log(newsResult);
      // localStorage.setItem("adminInfo", newsResult.data.result.jwtToken);
      if (newsResult.status === 200) {
        setAdminInfo(newsResult.data.result.employeeModel);
        toastifuySuccess(`به داشبورد توریتور خوش آمدید`);

        navigate("/admindashboard");
        setIsLoading(false);
        if (checked) {
          console.log(checked);
          localStorage.setItem("admin-token", newsResult.data.result.jwtToken);
        }
      }
    } catch (err) {
      console.log(err);
      setIsLoading(false);

      toastifuyErr("مشکلی پیش آمده لطفا دوباره اطلاعات خود را چک کنید");
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

  {
    console.log(checked);
  }
  return (
    <div
      className=" css-sign   flex justify-center py-10 px-10   md:py-20 mt-0  w-full  h-auto mx-auto 
      dark:bg-Dark-MainBg  
    "
    >
      <Loader />
      <div
        className="     px-10 flex flex-col p-5  items-start  bg-gray-50   w-3/4  rounded-xl shadow-2xl  mb-16
        dark:bg-Dark-ItemBg border-y-4 border-Dark-Teal 
      "
      >
        <div className=" flex justify-center  items-center w-full">
          <h2
            className=" text-2xl   md:text-3xl leading-relaxed    mt-10 mb-1 
           flex items-center justify-start gap-1
        lg:my-10   text-Dark-Teal
        
        
        "
          >
            <FaDashcube />
            ورود به داشبورد توریتور
          </h2>
        </div>

        <Formik
          initialValues={initialValues}
          validationSchema={employeloginschema}
          onSubmit={(values) => {
            submiteHandler(values);
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
                  type={it.type}
                />
              ))}

              <div className="flex  rounded lg:bg-transparent flex-row-reverse items-center  my-3 border-b-2 border-dotted hover:border-solid">
                <div
                  className=" text-xl ml-2 cursor-pointer
                  text-Dark-Teal dark:text-cyan-50 
                
                "
                >
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
                  className=" w-full p-3 placeholder-Dark-Teal 
                   text-xl focus:text-2xl  focus:outline-none bg-transparent
                  text-Dark-Teal dark:text-cyan-50 dark:placeholder-green-200/80 
                  
                  "
                  type={showPass}
                />
                <label
                  for="password"
                  className=" text-2xl dark:text-cyan-100/60 mr-2
                  text-Dark-Teal
                  "
                >
                  <RiLockPasswordFill />
                </label>
              </div>
              <ErrorMessage name={"password"}>
                {(err) => (
                  <span className=" text-red-400 text-[13px]">{err}</span>
                )}
              </ErrorMessage>
            </div>

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
              <span className="leading-relaxed text-xl dark:text-cyan-100 text-cyan-600">
                {" "}
                مرا به خاطر بسپار
              </span>
            </div>

            <button
              className=" flex items-center gap-1 justify-center my-10  mx-auto
             bg-emerald-600  hover:bg-emerald-700 text-cyan-50 py-2 px-8 rounded  shadow-2xl"
            >
              <AiOutlineFullscreenExit />
              ورود ادمین
            </button>
            <div className=" flex justify-between">
              <NavLink
                to={"/admindashboard/signup"}
                className="dark:text-gray-400 text-gray-500 flex  items-center  text-xl"
              >
                <TbFlower className=" text-teal-500 animate-TwCon-round-Anim text-xl ml-2" />
                صفحه ثبتنام
              </NavLink>
              <NavLink
                to={"/"}
                className="dark:text-gray-300 text-gray-500 flex  items-center  text-2xl"
              >
                <FiHome className=" text-teal-500" />
              </NavLink>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default EmplSignup;
