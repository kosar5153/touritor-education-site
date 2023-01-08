import React, { useContext, useEffect, useState } from "react";

import { FiCodesandbox } from "react-icons/fi";
import { MdPayments } from "react-icons/md";
import { BsCheckCircle } from "react-icons/bs";

import ShoppingItem from "./ShoppingItem";
import { FaShoppingCart } from "react-icons/fa";
import ShoppingCardContext from "../../../context/shopping-cart-context/shoppingCard-context";
import { UserInfoContext } from "../../../context/user-context/UserInfoContext";
import { Navigate, useNavigate } from "react-router-dom";
import {
  toastifuyErr,
  toastifuySuccess,
} from "../../../helperFunctions/toastifuy/toastifuy";
import Loader from "../../commen/Loader/Loader";
import { addCourseToStudent } from "../../../services/course-server";
import AllCourseContext from "../../../context/main-data/allDataContext";
import { getStudentById } from "../../../services/student-services";
const ShoppingPage = () => {
  const navigate = useNavigate();

  const {
    cart,
    removeFromCart,
    removeFromCartAfterBuy,
    WalletBalance,
    reducePrice,
  } = useContext(ShoppingCardContext);
  const { userData, setUserData } = useContext(UserInfoContext);
  const { setIsLoading } = useContext(AllCourseContext);

  const [cost, setCost] = useState(0);
  const [choosePay, setChoosePay] = useState("onlinepay");

  useEffect(() => {
    if (cart.length > 0) {
      cart.map((item) => {
        setCost(item.cost);
        console.log(cost);
      });
    }

    // cost
    setCost(cart.reduce((accr, curr) => accr + Number(curr.cost), 0));
  }, [cart]);

  const addCourseToStAxi = async (cId, studentId) => {
    try {
      setIsLoading(true);
      const cIds = {
        courseId: cId["_id"],
      };
      console.log(cIds);
      const { data, status } = await addCourseToStudent(cIds, studentId);
      setIsLoading(false);
      if (status === 200) {
        toastifuySuccess(`دوره ${cId.title} با موفقیت خریداری شد`);
        removeFromCartAfterBuy(cId);
        try {
          let student = await getStudentById(studentId);
          setUserData(student.data.result);
          navigate("/userdashboard/coursepurchase");
        } catch (err) {
          console.log("studenterr", err);
        }
      }
    } catch (error) {
      toastifuyErr(`متاسفانه مشکلی در خرید دوره ${cId.title} پیش آمده `);
      toastifuyErr(`  دوره قبلا خریداری شده است ${cId.title} پیش آمده `);
      removeFromCartAfterBuy(cId);
      navigate("/userdashboard/coursepurchase");
      setIsLoading(false);
      console.log(error, studentId);
    }
  };

  // add item to user course
  const finalPayment = async (cart) => {
    if (userData !== null && userData !== "" && userData !== undefined) {
      if (choosePay === "onlinepay") {
        await cart.map((cId) => addCourseToStAxi(cId, userData["_id"]));
      }
      if (choosePay === "walletpay") {
        if (WalletBalance < Number(cost)) {
          toastifuyErr(
            " لطفا حساب خود را شارژ کنید یا نحوه پرداخت خود را تغییر دهید"
          );
        } else {
          const finalp = WalletBalance - Number(cost);
          await cart.map((cId) => addCourseToStAxi(cId, userData["_id"]));
          reducePrice(finalp);
        }
      }
    } else {
      toastifuyErr("لطفا وارد حساب کاربری خود شوید");
      navigate("/login");
    }
  };

  return (
    <div className=" w-full   mx-auto p-11 py-2">
      <Loader />
      <h1
        className=" flex justify-center items-center
         text-3xl text-[#264067]  
          text-center my-10  dark:text-Dark-Teal
           flex-col gap-2
            md:flex-row md:gap-0
      "
      >
        <FaShoppingCart className=" ml-2  mb-2 animate-TwCon-book-movement" />
        سبد خرید
        {cart.length > 0 ? (
          <span className=" text-xl mr-1 text-emerald-600  dark:text-Dark-Pink">{`( ${cart.length} دوره موجود در سبد خرید) `}</span>
        ) : (
          <span className=" text-xl mr-1  text-pink-600 ">{` (سبد خرید خالیست) `}</span>
        )}
      </h1>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-3  grid-rows-8">
        {/* sidbar */}
        <div className="css-pay   row-start-2   lg:row-start-1 lg:col-start-1 lg:col-end-5 px-0 mt-5 md:mt-0  md:px-5    rounded-2xl">
          {/* offer code */}
          <div className=" w-full flex  shadow-2xl mb-5">
            <button
              className=" bg-green-700  rounded-r-lg shadow-md text-green-100 dark:bg-Dark-Teal flex   w-36 px-2 py-2
             items-center  justify-around text-xl "
            >
              <FiCodesandbox className="" />
              <span className=" block   text-[15px]">اعمال کد</span>
            </button>
            <input
              placeholder="کد تخفیف"
              className=" pr-2 py-3 shadow-md rounded-l-lg block w-full bg-green-50 dark:bg-Dark-ItemBg "
            />
          </div>

          {/*choose  payment */}
          <div
            className=" w-full flex flex-col 
            shadow-2xl bg-green-100
           dark:bg-Dark-ItemBg dark:text-gray-300 rounded-lg p-4
            text-Main-Blue border-b-4 border-teal-600"
          >
            <h2 className="  block w-full">انتخاب نحوه پرداخت</h2>
            <div
              className="TwIN-RadioPay  grid grid-cols-2 mt-3 
            text-red-500 dark:text-red-400  gap-4 md:gap-0"
            >
              <div className=" flex items-center gap-1 col-span-2 md:col-span-1 ">
                <input
                  type={"radio"}
                  name="pay"
                  className=" TWIN-radioBtn "
                  id="online"
                  onChange={() => setChoosePay("onlinepay")}
                />
                <label
                  for="online"
                  className={` cursor-pointer ${
                    choosePay === "onlinepay" ? "flex text-emerald-500" : ""
                  }`}
                >
                  درگاه پرداخت آنلاین
                </label>
                <BsCheckCircle
                  className={`TwIN-checkBoxIcon  ${
                    choosePay === "onlinepay"
                      ? "flex text-emerald-500"
                      : "hidden"
                  }`}
                />
              </div>
              <div className=" flex items-center gap-1 col-span-2 md:col-span-1">
                <input
                  type={"radio"}
                  name="pay"
                  className="TWIN-radioBtn"
                  id="bag"
                  onChange={() => setChoosePay("walletpay")}
                />
                <label for="bag" className=" cursor-pointer ">
                  {" "}
                  کیف پول
                  <span className=" mr-1">
                    {WalletBalance.toLocaleString()}
                  </span>
                </label>
                <BsCheckCircle className="TwIN-checkBoxIcon hidden" />
              </div>
            </div>
          </div>

          {/* Final payment */}
          <ul className="  bg-green-100 dark:bg-Dark-ItemBg dark:text-gray-300 my-5 shadow-2xl rounded-lg p-4 border-b-4 border-teal-600">
            <li className=" text-gray-600 dark:text-gray-300 mb-3 border-b py-2">
              <span className="text-gray-400"> موجودی کیف پول : </span>
              <span> {WalletBalance.toLocaleString()} </span>
              <span> تومان </span>
            </li>
            <li className=" text-gray-600 dark:text-gray-300 mb-3 border-b py-2">
              <span className="text-gray-400"> مبلغ کل : </span>
              <span> {cost.toLocaleString()} </span>
              <span> تومان </span>
            </li>
            <li className=" text-gray-600 dark:text-gray-300 mb-3 border-b py-2">
              <span className="text-gray-400"> تخفیف : </span>
              <span> 0 </span>
              <span> تومان </span>
            </li>
            <li className=" text-green-600  dark:text-gray-300 mb-3  text-[18px]  py-2">
              <span className="text-gray-400"> پرداخت نهایی : </span>
              <span className=""> {cost.toLocaleString()} </span>
              <span> تومان </span>
            </li>
          </ul>

          {/* Final Button */}
          <div className="">
            <button
              onClick={() => finalPayment(cart)}
              className="TwIN-btnFinalPay flex justify-center items-center text-2xl"
            >
              <MdPayments className="  ml-2" />
              پرداخت نهایی
            </button>
          </div>
        </div>

        {/* content - itemsّ */}
        <div className="  css-items shadow-md row-start-1 md:row-start-2  lg:row-start-1  lg:col-start-5 lg:col-end-13 bg-green-100  dark:bg-Dark-ItemBg p-5 py-7 rounded-2xl  ">
          {cart.length > 0 ? (
            <ul>
              {" "}
              {cart.map((item) => (
                <ShoppingItem
                  key={item["_key"]}
                  removeFromCart={() => removeFromCart(item)}
                  item={item}
                />
              ))}
            </ul>
          ) : (
            <div className=" relative">
              <img
                src={require("../../../Assets/images/gift/s3.gif")}
                className=" rounded-xl w-full h-full object-cover"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShoppingPage;
