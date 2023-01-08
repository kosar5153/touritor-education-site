import React, { useContext, useState } from "react";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { AdminContext } from "../../../../context/admin-context/AdminContext";

const SidbarItems = ({ link }) => {
  const { activeAdminMenu, screenSize, setActiveAdminMenu } =
    useContext(AdminContext);

  const [closeBtn, setCloseBtn] = useState(false);
  const handelClose = () => {
    setCloseBtn(!closeBtn);
  };

  const handleCloseSideBar = () => {
    if (activeAdminMenu === screenSize <= 1000) {
      setActiveAdminMenu(false);
    }
  };

  return (
    <div className=" text-gray-100 gap-y-12">
      <p
        onClick={handelClose}
        key={link.title}
        className=" cursor-pointer flex justify-between items-center my-4  text-[15px] text-teal-100   p-1  border-b  border-teal-700"
      >
        <span>{link.title}</span>
        {closeBtn ? <AiFillCaretUp /> : <AiFillCaretDown />}
      </p>
      <ul
        className={
          closeBtn
            ? "h-auto transition-all bg-teal-700/80 rounded py-1 "
            : "transition-all h-0 overflow-hidden"
        }
      >
        {link.links.map((it) => (
          <li className=" my-2 mr-1" onClick={handleCloseSideBar}>
            <NavLink
              to={`${it.src}`}
              className={({ isActive }) =>
                isActive ? "TWI-DashNav TWI-ActiveDashNav" : "TWI-DashNav"
              }
            >
              <span className="ml-2">{it.icon}</span>
              {it.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SidbarItems;
