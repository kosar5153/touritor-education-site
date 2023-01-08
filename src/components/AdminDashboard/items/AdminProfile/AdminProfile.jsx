import React from "react";
import { useContext } from "react";
import { AdminContext } from "../../../../context/admin-context/AdminContext";
import { CgCloseR } from "react-icons/cg";
import { MdOutlineClose } from "react-icons/md";
import { GiSpotedFlower } from "react-icons/gi";

const AdminProfile = () => {
  const { adminInfo, handleClick } = useContext(AdminContext);

  return (
    <div
      className=" absolute top-[65px]
     right-5   z-[1000] p-5  dark:border-4 dark:border-teal-600
      rounded-lg bg-gray-200 shadow-lg
      text-gray-500
       dark:bg-Dark-ItemBg  dark:text-gray-300
     "
    >
      <ul className=" w-64  gap-5 grid grid-cols-1">
        <li
          onClick={() => handleClick("")}
          className="cursor-pointer text-rose-400 text-2xl flex justify-between"
        >
          <GiSpotedFlower className=" animate-TwCon-round-Anim" />
          <MdOutlineClose />
        </li>
        <li>
          <img src={adminInfo.profile} className=" w-full rounded-lg" />
        </li>
        <li>
          <span>نام کاربری : </span>
          <span>{adminInfo.fullName}</span>
        </li>
        <li>
          <span> ایمیل : </span>
          <span>{adminInfo.email}</span>
        </li>
        <li>
          <span> تلفن : </span>
          <span>{adminInfo.phoneNumber}</span>
        </li>
        <li>
          <span> شماره ملی : </span>
          <span>{adminInfo.nationalId}</span>
        </li>
      </ul>
    </div>
  );
};

export default AdminProfile;
