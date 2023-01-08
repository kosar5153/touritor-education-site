import React, { useContext, useEffect, useState } from "react";
import { UserInfoContext } from "../../context/user-context/UserInfoContext";

import * as shamsi from "shamsi-date-converter";
import { isEmpty } from "lodash";
import { useNavigate } from "react-router-dom";
import { Loading } from "../commen/Loading/Loading";

const UDashboard = () => {
  const { userData } = useContext(UserInfoContext);

  const [userCourses, setUserCourses] = useState([]);

  const date = shamsi.gregorianToJalali(userCourses.registerDate);

  const finalDate = `${date[0]}/${date[1] < 10 ? `0${date[1]}` : date[1]}/${
    date[2] < 10 ? `0${date[2]}` : date[2]
  }`;

  useEffect(() => {
    if (!isEmpty(userData)) {
      setUserCourses(userData);
    }
  }, [userData]);

  return (
    <>
      {!userData ? (
        <Loading />
      ) : (
        <div>
          <ul className=" grid grid-cols-2 gap-8 pt-5">
            <li className=" bg-red-300 p-5 rounded-lg  text-gray-700 dark:bg-Dark-ItemBg dark:text-gray-400 shadow-xl dark:border-b dark:border-Dark-Teal">
              <span> نام کاربری : </span>
              <span> {userCourses.fullName}</span>
            </li>
            <li className=" bg-red-300 p-5 rounded-lg  text-gray-700 dark:bg-Dark-ItemBg dark:text-gray-400 shadow-xl dark:border-b dark:border-Dark-Teal">
              <span>ایمیل : </span>
              <span>{userCourses.email}</span>
            </li>
            <li className=" bg-red-300 p-5 rounded-lg  text-gray-700 dark:bg-Dark-ItemBg dark:text-gray-400 shadow-xl dark:border-b dark:border-Dark-Teal">
              <span>شماره تماس : </span>
              <span> {userCourses.phoneNumber}</span>
            </li>
            <li className=" bg-red-300 p-5 rounded-lg  text-gray-700 dark:bg-Dark-ItemBg dark:text-gray-400 shadow-xl dark:border-b dark:border-Dark-Teal">
              <span> تاریخ تولد : </span>
              <span> {userCourses.birthDate}</span>
            </li>
            <li className=" bg-red-300 p-5 rounded-lg  text-gray-700 dark:bg-Dark-ItemBg dark:text-gray-400 shadow-xl dark:border-b dark:border-Dark-Teal">
              <span>شماره ملی : </span>
              <span> {userCourses.nationalId}</span>
            </li>

            <li className=" bg-red-300 p-5 rounded-lg  text-gray-700 dark:bg-Dark-ItemBg dark:text-gray-400 shadow-xl dark:border-b dark:border-Dark-Teal">
              <span> تاریخ اولین حضور شما : </span>
              <span> {finalDate}</span>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default UDashboard;
