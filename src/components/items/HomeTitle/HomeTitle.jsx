import React from "react";

const HomeTitle = ({ icon, children }) => {
  return (
    <div className="  my-10 mb-7">
      <h2
        className=" text-3xl flex items-center justify-center text-Main-Blue
                dark:text-Dark-Teal

      "
      >
        <span
          className=" ml-1 text-3xl  animate-bounce  text-emerald-700 dark:text-Dark-Teal
        "
        >
          {icon}
        </span>
        {children}
      </h2>
    </div>
  );
};

export default HomeTitle;
