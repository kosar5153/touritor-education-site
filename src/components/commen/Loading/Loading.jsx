import React from "react";

export const Loading = () => {
  return (
    <div className=" flex w-full h-full mx-auto justify-center items-center py-12 ">
      <img
        className=" w-[25%] "
        src={require("../../../Assets/images/gift/Spinner.gif")}
      />
    </div>
  );
};
