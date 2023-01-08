import React from "react";
import "./EcommStyle.css";

import { earningData } from "../../data/earningData";
import { AdminBarChart, AverageBox } from "../../items";
import { GoPrimitiveDot } from "react-icons/go";
import { AdminContext } from "../../../../context/admin-context/AdminContext";
import { useContext } from "react";
import { Loading } from "../../../commen/Loading/Loading";
import AllCourseContext from "../../../../context/main-data/allDataContext";
import { useState } from "react";
import { useEffect } from "react";

const Ecommerce = () => {
  const { adminInfo } = useContext(AdminContext);
  const { allCourses } = useContext(AllCourseContext);

  const [cost, setCost] = useState(0);

  useEffect(() => {
    setCost(allCourses.reduce((accr, curr) => accr + Number(curr.cost), 0));
  }, [allCourses]);

  return (
    <>
      {!adminInfo ? (
        <Loading />
      ) : (
        <>
          <div className="  grid  grid-cols-1  px-7 ">
            {/* invoice */}
            <div className=" css-ecommercBg h-56  shadow-lg  rounded-2xl  my-8  flex justify-end  items-center ">
              <div className=" ml-16 ">
                <div>
                  <p className="font-bold text-xl text-gray-200 mb-3">درآمد</p>
                  <p className="text-3xl text-gray-800 mb-5 ">
                    <span className="ml-2">{cost.toLocaleString()} </span>
                    تومان
                  </p>
                </div>
                <button
                  type="button"
                  className=" bg-rose-600  text-rose-100  rounded-md  p-2 px-5 hover:bg-rose-700"
                >
                  دانلود فاکتور
                </button>
              </div>
            </div>

            {/* info box */}
            <div className="css-ecommercBoxInfo ">
              <div
                className=" grid gap-7 
        grid-cols-2

        "
              >
                {earningData.map((item) => (
                  <AverageBox item={item} />
                ))}
              </div>
            </div>

            {/* chart */}
            <div
              className="css-pieChart  grid grid-cols-12  bg-white h-auto px-5 py-10 rounded-2xl 
      shadow-lg my-10 ltr   w-full
       dark:bg-Dark-ItemBg dark:text-gray-300
      "
            >
              <div
                className=" col-span-12
         md:col-span-6
        "
              >
                <AdminBarChart />
              </div>
              <div
                className=" 
          col-span-12 p-1
          md:col-start-8 md:col-end-13   md:p-0
        "
              >
                <div>
                  <div className="flex justify-between items-center  flex-row-reverse mt-5 md:mt-0">
                    <p className="font-semibold text-2xl  text-gray-600 dark:text-Dark-Sea">
                      میانگین درآمد در سال{" "}
                    </p>
                    <div className="flex items-center gap-4">
                      <p className="flex flex-row-reverse items-center gap-2 text-teal-500  text- hover:drop-shadow-xl">
                        <span>
                          <GoPrimitiveDot />
                        </span>
                        <span>هزینه</span>
                      </p>
                      <p
                        className="flex flex-row-reverse items-center gap-2 text-teal-700
                 hover:drop-shadow-xl
                
                 "
                      >
                        <span>
                          <GoPrimitiveDot />
                        </span>
                        <span>بودجه</span>
                      </p>
                    </div>
                  </div>
                  <div className="  flex  justify-start  mt-10 flex-col   text-center   gap-7  ">
                    <div className=" flex-row-reverse flex items-center mt-7     text-right">
                      <span
                        className=" text-gray-500  text-xl ml-1
                
                dark:text-gray-300
                "
                      >
                        {" "}
                        : بودجه{" "}
                      </span>

                      <span
                        className=" text-teal-800 text-3xl ml-3
                 dark:text-teal-400
                 "
                      >
                        19853000000
                      </span>
                      <span className="text-teal-800 text-xl ml-1">تومان</span>
                    </div>
                    <div className=" flex-row-reverse flex items-center  text-right">
                      <span className=" text-gray-500 text-xl ml-1">
                        {" "}
                        : هزینه{" "}
                      </span>

                      <span className=" text-teal-600 text-3xl ml-3">
                        2840000
                      </span>
                      <span className="text-teal-600 text-xl ml-1">تومان</span>
                    </div>
                    <div className=" flex-row-reverse flex items-center  text-right">
                      <span className=" text-gray-500 text-xl ml-1">
                        {" "}
                        : میانگین سود{" "}
                      </span>

                      <span className="   text-emerald-700 dark:text-emerald-400 text-2xl ml-3">
                        8540000
                      </span>
                      <span className="text-emerald-700 dark:text-emerald-400 text-xl ml-1">
                        تومان
                      </span>
                    </div>
                    <button
                      type="button"
                      className=" ml-auto  bg-rose-600  text-rose-100  rounded-md  p-2 px-10 shadow hover:bg-rose-700"
                    >
                      دانلود فاکتور
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Ecommerce;
