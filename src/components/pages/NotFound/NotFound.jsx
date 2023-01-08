import React from "react";
import notfound1 from "../../../Assets/images/404/404_test_1a.gif";
import notfound2 from "../../../Assets/images/404/404.gif";

const NotFound = () => {
  return (
    <div className="  relative w-full h-screen flex flex-col items-center ">
      <img src={notfound1} className=" absolute top-10 h-[20px] " />
      <img src={notfound1} className=" absolute top-14 top h-[50px] " />
      <img src={notfound1} className=" absolute top-20 h-[100px] " />
      <img src={notfound1} className=" absolute  top-28 h-[200px] " />
      <img src={notfound2} className=" w-full h-full object-cover " />
    </div>
  );
};

export default NotFound;
