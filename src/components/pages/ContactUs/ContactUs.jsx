import React from "react";
import { AiFillInstagram, AiFillPhone } from "react-icons/ai";
import { RiBuildingFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
const ContactUs = () => {
  return (
    <div className=" container mx-auto  py-7">
      <h1 className=" flex justify-center text-3xl text-[#21722f]  dark:text-Dark-Teal  text-center my-10">
        <AiFillPhone className=" ml-2  animate-TwCon-book-movement" />
        با ما ارتباط...
      </h1>
      <div className=" grid grid-cols-1">
        {/* top address */}
        <div
          className=" grid xl:grid-cols-4  gap-5 
          grid-cols-1 md:grid-cols-2 p-10 md:p-0
        "
        >
          <div
            className=" text-green-900 flex justify-start items-center  rounded-lg shadow-xl bg-teal-50 p-5
           dark:bg-Dark-ItemBg dark:text-Dark-Sea
          "
          >
            <RiBuildingFill className=" ml-4 border-2 border-green-600 p-2 rounded-lg  text-[3rem] " />
            <span className=" text-[1rem]">تهران، خیابان آزادی</span>
          </div>
          <div
            className=" text-green-900  flex justify-start items-center  rounded-lg shadow-xl bg-teal-50 p-5
           dark:bg-Dark-ItemBg dark:text-Dark-Sea
          "
          >
            <MdEmail className=" ml-4 border-2  border-green-600 p-2 rounded-lg  text-[3rem] " />
            <span className=" text-[1rem]"> info@gmail.com</span>
          </div>
          <div
            className=" text-green-900  flex justify-start items-center  rounded-lg shadow-xl bg-teal-50 p-5
           dark:bg-Dark-ItemBg dark:text-Dark-Sea
          "
          >
            <AiFillPhone className=" ml-4 border-2  border-green-600 p-2 rounded-lg  text-[3rem] " />
            <span className=" text-[1rem]"> 0911111111</span>
          </div>
          <div
            className=" text-green-900 flex justify-start items-center  rounded-lg shadow-xl bg-teal-50 p-5
           dark:bg-Dark-ItemBg dark:text-Dark-Sea
          "
          >
            <AiFillInstagram className=" ml-4 border-2 border-green-600 p-2 rounded-lg  text-[3rem] " />
            <span className=" text-[1rem]"> turitor@</span>
          </div>
        </div>
        {/* bottom email to us */}
        <div className=" mt-20">
          <img
            src={require("../../../Assets/images/Touritor/contact_image.png")}
            className=" mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
