import React from "react";
import Button from "../Button/Button";
import { MdEmail } from "react-icons/md";

const FooterSearch = () => {
  return (
    <div
      className=" css-FooterSearch bg-teal-500  py-5 px-10 rounded-2xl max-w-[1024px]
     mx-auto  relative -bottom-14 "
    >
      <form className=" flex">
        <input
          className=" w-full py-5 relative px-8 rounded-2xl"
          type={"email"}
          placeholder="برای پیوستن به ما ایمیل خود را وارد کنید.."
        />
        <Button icon={<MdEmail />} customClass={"TwIN-FooterBtn"}>
          اشتراک
        </Button>
      </form>
    </div>
  );
};

export default FooterSearch;
