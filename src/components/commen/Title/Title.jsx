import React from "react";

const Title = ({ children, iconBox }) => {
  return (
    <>
      {" "}
      {/* <h2 className=" mt-2 flex text-2xl text-red-500"> */}
      <h2
        className={` flex justify-center text-3xl text-[#264067]   text-center my-10
 dark:text-Dark-Teal
        `}
      >
        <span className=" flex  animate-bounce text-3xl ml-2">{iconBox}</span>
        {children}
      </h2>
    </>
  );
};

export default Title;
