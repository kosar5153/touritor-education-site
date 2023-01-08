import React, { useState } from "react";
import "./SignUp.css";

import {
  BsBrightnessAltHigh,
  BsFillCalendarDateFill,
  BsFillEyeFill,
  BsFillEyeSlashFill,
} from "react-icons/bs";
import { RiAddFill, RiLockPasswordFill } from "react-icons/ri";
import { NavLink, useNavigate } from "react-router-dom";
// import MainHomeLink from "../../items/MainHomeLink/MainHomeLink";

import { employeschema } from "../../../../../validations/admin-validations/addCourse-validation";
import { ErrorMessage, Field, Form, Formik, useFormik } from "formik";
import InputField from "./InputField";
import { registerData } from "./registerData";

import {
  toastifuyErr,
  toastifuySuccess,
} from "../../../../../helperFunctions/toastifuy/toastifuy";
import { changeDate } from "../../../../../helperFunctions/changeDate";
import Loader from "../../../../commen/Loader/Loader";
import { useContext } from "react";
import AllCourseContext from "../../../../../context/main-data/allDataContext";
import MainHomeLink from "../../../../items/MainHomeLink/MainHomeLink";
import {
  addEmploy,
  getAllEmployes,
} from "../../../../../services/employes-services";
import { CgCornerDoubleUpLeft } from "react-icons/cg";

const SignUp = () => {
  const { setIsLoading, setEmployes } = useContext(AllCourseContext);

  let navigate = useNavigate();

  // .....
  const [birthDate, setBirthDate] = useState("");
  const [birthDateShamsi, setBirthDateShamsi] = useState("");
  const [handelRole, sethandelRole] = useState("teacher");

  // get date and change miladi to shamsi
  const handelBirthDate = (event) => {
    setBirthDate(event.target.value);

    // get and change date
    const finalDate = changeDate(event);

    setBirthDateShamsi(finalDate);
  };

  // initial input value
  const initialValues = {
    fullName: "",
    email: "",
    password: "",
    phoneNumber: "",
    nationalId: "",
    address: "",
    role: "teacher",
    profile:
      "http://res.cloudinary.com/df9w7u89a/image/upload/v1666800839/dfc79kgjcj5o4pqbts1t.gif",
  };

  // submit handler function
  const submiteHandler = async (values) => {
    let user = {
      ...values,
      birthDate: birthDateShamsi,
    };
    console.log(user);

    try {
      setIsLoading(true);
      let newsResult = await addEmploy(user);
      console.log(newsResult.status);
      if (newsResult.status === 200) {
        toastifuySuccess(`  کارمند جدید با موفقیت اضافه شد`);
        setIsLoading(false);
        try {
          let { data } = await getAllEmployes();
          let newsResult = data.result;
          setEmployes(newsResult);
        } catch (err) {
          console.log(err);
        }
        navigate("/admindashboard/pages/employes");
      }
    } catch (err) {
      console.log(err);
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
        <div className=" flex justify-between  items-center w-full">
          <h2
            className=" text-2xl   md:text-3xl leading-relaxed    mt-10 mb-1 
           flex items-center justify-start gap-1
        lg:my-10   text-Dark-Teal
        
        
        "
          >
            <RiAddFill />
            افزودن کارمند جدید
          </h2>

          <NavLink
            to={"/admindashboard/pages/employes"}
            className=" text-3xl  text-rose-400  hover:text-rose-500 "
          >
            <CgCornerDoubleUpLeft />
          </NavLink>
        </div>

        <Formik
          initialValues={initialValues}
          validationSchema={employeschema}
          onSubmit={(values) => {
            if (birthDateShamsi) {
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
                  type={it.type}
                />
              ))}

              <div className=" flex  rounded lg:bg-transparent flex-row-reverse items-center  my-3 border-b-2 border-dotted hover:border-solid">
                <Field
                  type={"date"}
                  placeholder="  تاریخ تولد "
                  id="birthDate"
                  name="birthDate"
                  className=" w-full p-3 placeholder-green-200/80  
                  text-xl focus:text-2xl  focus:outline-none bg-transparent
                  text-Dark-Teal dark:text-cyan-50 
                  "
                  value={birthDate}
                  onChange={(e) => handelBirthDate(e)}
                />
                <label
                  for="birthDate"
                  className=" text-2xl dark:text-cyan-100/60 mr-2
                  text-Dark-Teal
                  "
                >
                  <BsFillCalendarDateFill />
                </label>
              </div>

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

              <div className=" flex  rounded lg:bg-transparent flex-row-reverse items-center  my-3 border-b-2 border-dotted hover:border-solid">
                <Field
                  id="role"
                  name="role"
                  as={"select"}
                  className=" w-full p-3 placeholder-green-200/80  
                  text-xl focus:text-2xl  focus:outline-none bg-transparent
                  text-Dark-Teal dark:text-cyan-50  
                  "
                  value={handelRole}
                  onChange={(e) => sethandelRole(e.target.value)}
                >
                  <option className="dark:text-gray-500" value={"teacher"}>
                    استاد
                  </option>
                  <option className="dark:text-gray-500" value={"admin"}>
                    ادمین
                  </option>
                </Field>
                <label
                  for="role"
                  className=" text-2xl dark:text-cyan-100/60 mr-2
                  text-Dark-Teal
                  "
                >
                  <BsBrightnessAltHigh />
                </label>
              </div>
            </div>

            <button
              className=" flex items-center gap-1 justify-center my-10 
             bg-emerald-600  hover:bg-emerald-700 text-cyan-50 py-2 px-8 rounded  shadow-2xl"
            >
              <RiAddFill />
              افزودن کارمند جدید
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default SignUp;
