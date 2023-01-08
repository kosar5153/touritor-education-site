import React, { useContext } from "react";
import AllCourseContext from "../../../context/main-data/allDataContext";

const Loader = () => {
  const { isLoading } = useContext(AllCourseContext);
  return (
    <>
      {isLoading ? (
        <div className=" mx-auto fixed top-0 right-0 bg-black/70 flex justify-center items-center w-full h-full z-[2000]">
          <img
            src={require("../../../Assets/images/gift/Spinner.gif")}
            className=" w-[20%]"
          />
        </div>
      ) : null}
    </>
  );
};

export default Loader;
