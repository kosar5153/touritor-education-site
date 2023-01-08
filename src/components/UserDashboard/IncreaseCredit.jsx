import React, { useContext } from "react";
import { useState } from "react";
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import { TbCheckbox } from "react-icons/tb";
import { SiPayoneer } from "react-icons/si";
import ShoppingCardContext from "../../context/shopping-cart-context/shoppingCard-context";
import {
  toastifuyErr,
  toastifuySuccess,
} from "../../helperFunctions/toastifuy/toastifuy";
import { Loading } from "../commen/Loading/Loading";

const IncreaseCredit = () => {
  const { WalletBalance, chargeWallet, userData } =
    useContext(ShoppingCardContext);
  // ----------
  const [rechargeInpt, setRechargeInpt] = useState(0);

  const [checkedBox, setcheckedBox] = useState("lowPay");
  const [recharge, setRecharge] = useState("50000");

  const handelInputBox = (e) => {
    setRechargeInpt(e.target.value);
    setRecharge("");
    setcheckedBox("");
  };

  const handelCheckBox = (e, checkName) => {
    setRecharge(e.target.value);
    setcheckedBox(checkName);
    setRechargeInpt(0);
  };

  const handelChargeWallet = () => {
    if (Number(rechargeInpt) !== 0 && /^[0-9]{4,10}$/.test(rechargeInpt)) {
      chargeWallet(Number(rechargeInpt));
    } else if (!/^[0-9]{4,10}$/.test(rechargeInpt) && recharge === "") {
      toastifuyErr("لطفا عدد صحیح وارد کنید");
    } else if (recharge !== "") {
      chargeWallet(Number(recharge));
    }
  };

  return (
    <>
      {!userData ? (
        <Loading />
      ) : (
        <div>
          <div className=" mt-5  flex justify-between items-center">
            <span className=" text-Dark-Pink text-2xl dark:text-[rgb(250,105,126)] ">
              {" "}
              موجودی کیف پول شما : {WalletBalance} ت
            </span>
            <button
              className=" flex gap-1 items-center bg-emerald-600 px-3 py-2 shadow
         hover:bg-emerald-700 rounded-md text-white "
              onClick={handelChargeWallet}
            >
              <SiPayoneer />
              افزودن موجودی
            </button>
          </div>
          <ul className=" grid grid-cols-3 gap-8 pt-5">
            <li
              className="  col-span-3
        bg-red-300 
        hover:bg-red-400 dark:bg-Dark-Teal dark:border-b
         dark:border-Dark-Teal shadow-xl p-5 rounded-lg
          my-4 text-gray-700"
            >
              <input
                className=" w-full bg-transparent 
            focus:outline-none  text-xl
            placeholder:text-gray-600 placeholder:text-[16px] "
                placeholder="دوست داری چقدر حسابتو شارژکنی؟"
                value={rechargeInpt}
                onChange={handelInputBox}
              />
            </li>

            <li
              className=" TwIN-RadioPay
          bg-gray-50
        hover:bg-red-300 dark:bg-Dark-Teal dark:border-b
         dark:border-Dark-Teal shadow-xl  rounded-lg
          my-4 text-gray-700"
            >
              <input
                type={"radio"}
                className=" hidden"
                id="lowPay"
                name="fav_pay"
                value={"50000"}
                onChange={(e) => handelCheckBox(e, "lowPay")}
              />

              <label
                htmlFor="lowPay"
                className={` cursor-pointer w-full h-full  flex items-center gap-1 px-5 ${
                  checkedBox === "lowPay" &&
                  "text-green-600 dark:text-green-800"
                } `}
              >
                {checkedBox === "lowPay" ? (
                  <TbCheckbox />
                ) : (
                  <MdOutlineCheckBoxOutlineBlank />
                )}
                50,000 ت
              </label>
            </li>

            <li
              className=" TwIN-RadioPay
          bg-gray-50
                  hover:bg-red-300 dark:bg-Dark-Teal dark:border-b
         dark:border-Dark-Teal shadow-xl rounded-lg
          my-4 text-gray-700  "
            >
              <input
                type={"radio"}
                className=" hidden"
                id="mediumPay"
                name="fav_pay"
                value={"100000"}
                onChange={(e) => handelCheckBox(e, "mediumPay")}
              />

              <label
                htmlFor="mediumPay"
                className={` cursor-pointer w-full h-full  flex items-center gap-1 px-5 ${
                  checkedBox === "mediumPay" &&
                  "text-green-600 dark:text-green-800"
                } `}
              >
                {checkedBox === "mediumPay" ? (
                  <TbCheckbox />
                ) : (
                  <MdOutlineCheckBoxOutlineBlank />
                )}
                100,000 ت
              </label>
            </li>

            <li
              className=" TwIN-RadioPay
          bg-gray-50
        hover:bg-red-300 dark:bg-Dark-Teal dark:border-b
         dark:border-Dark-Teal shadow-xl p-5 rounded-lg 
          my-4 text-gray-700"
            >
              <input
                type={"radio"}
                className=" hidden"
                id="highPay"
                name="fav_pay"
                value={" 200000"}
                onChange={(e) => handelCheckBox(e, "highPay")}
              />
              <label
                htmlFor="highPay"
                className={` cursor-pointer w-full h-full  flex items-center gap-1 px-5 ${
                  checkedBox === "highPay" &&
                  "text-green-600 dark:text-green-800"
                } `}
              >
                {checkedBox === "highPay" ? (
                  <TbCheckbox />
                ) : (
                  <MdOutlineCheckBoxOutlineBlank />
                )}
                200,000 ت
              </label>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default IncreaseCredit;
