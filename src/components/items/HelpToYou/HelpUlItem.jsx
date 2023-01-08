import React from "react";

const HelpUlItem = ({ href, children }) => {
  return (
    <>
      {" "}
      <li
        className=" bg-green-50 rounded-xl text-Main-Blue leading-loose shadow-lg  p-5 flex gap-3 items-center
        dark:bg-Dark-ItemBg dark:text-gray-300 dark:shadow-lg
      "
      >
        <img src={href} className=" " />
        <p className=" ">{children}</p>
      </li>
    </>
  );
};

export default HelpUlItem;
