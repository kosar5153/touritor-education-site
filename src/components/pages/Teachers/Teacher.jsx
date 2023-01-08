import React, { useContext, useState } from "react";
import { useEffect } from "react";
import { BsFlower2, BsFlower3 } from "react-icons/bs";
import { GiSpotedFlower, GiSunflower } from "react-icons/gi";
import { useParams } from "react-router-dom";
import AllCourseContext from "../../../context/main-data/allDataContext";
import { getTeacherById } from "../../../services/teachers";
import Loader from "../../commen/Loader/Loader";

const Teacher = () => {
  const { loading, setIsLoading } = useContext(AllCourseContext);

  const { tchId } = useParams();

  const [teacher, setTeacher] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);

        const { data } = await getTeacherById(tchId);
        console.log("data", data.result);
        setIsLoading(false);
        setTeacher(data.result);
      } catch (err) {
        console.log(err);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className=" css-teachers  bg-cyan-700 ">
          <div
            className=" container mx-auto  py-7 flex-col
      
        flex md:flex-row items-center gap-10 justify-center"
          >
            <div>
              <img
                src={
                  teacher.profile
                    ? teacher.profile
                    : require("../../../Assets/images/gift/Spinner.gif")
                }
                className={`rounded-xl   w-64 h-64 object-cover object-top   bg-cyan-700`}
              />
            </div>
            <div>
              <ul>
                <li className=" flex items-center mb-8   p-2 rounded-lg bg-cyan-700 ">
                  <BsFlower3 className=" animate-TwCon-round-Anim text-4xl text-rose-500 ml-2" />
                  <span className=" text-2xl text-gray-50">
                    {teacher.fullName}
                  </span>
                </li>
                <li className=" flex items-center mb-3">
                  <GiSpotedFlower className=" animate-TwCon-round-Anim text-3xl  text-Main-Blue dark:text-pink-500 ml-2" />
                  <span className=" text-2xl text-gray-700 dark:text-gray-200">
                    {teacher.email}
                  </span>
                </li>
                <li className=" flex items-center mb-3">
                  <GiSunflower className=" animate-TwCon-round-Anim text-3xl text-orange-500 ml-2" />
                  <span className=" text-xl text-gray-700 dark:text-gray-200">
                    {teacher.birthDate}
                  </span>
                </li>
                <li className=" flex items-center mb-3">
                  <BsFlower2 className=" animate-TwCon-round-Anim text-3xl text-teal-500 ml-2" />
                  <span className=" text-xl text-gray-700 dark:text-gray-200">
                    {teacher.phoneNumber}{" "}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Teacher;
