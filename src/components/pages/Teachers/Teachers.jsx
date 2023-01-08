import React, { useContext, useState } from "react";
import { FaChalkboardTeacher } from "react-icons/fa";
import AllCourseContext from "../../../context/main-data/allDataContext";
import { paginate } from "../../../helperFunctions/paginate/paginate";
import Pagination from "../../commen/Pagination/Pagination";
import Title from "../../commen/Title/Title";
import TeacherItem from "./TeacherItem";
import "./Teachers.css";

const Teachers = () => {
  const { teachers, setTeachers } = useContext(AllCourseContext);

  // paginate State
  const [perPage, setPerpage] = useState(4);
  const [currentPage, setCurrentPage] = useState(1);

  // paginate func
  const handelPageChang = (page) => {
    setCurrentPage(page);
  };

  // paginate func
  const handelPageChangRight = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    } else if (currentPage === 1) {
      setCurrentPage(currentPage);
    }
  };
  // paginate func
  const handelPageChangLeft = () => {
    const pageCount = Math.ceil(teachers?.length / perPage);
    if (pageCount > currentPage) {
      setCurrentPage(currentPage + 1);
    } else if (pageCount <= currentPage) {
      setCurrentPage(currentPage);
    }
  };
  let courseItem = paginate(teachers, currentPage, perPage);

  return (
    <div className=" css-teachers">
      <div className=" container mx-auto  py-7">
        <Title iconBox={<FaChalkboardTeacher />}>
          با مدرسان ما آشنا شوید...
        </Title>
        <div
          className=" grid grid-cols-1   gap-5 
       lg:grid-cols-2 
     
      "
        >
          {teachers &&
            courseItem.map((info) => (
              <TeacherItem key={info["_id"]} info={info} />
            ))}
          <div className=" col-span-2">
            <Pagination
              allCourse={teachers}
              perPage={perPage}
              currentPage={currentPage}
              courseItem={courseItem}
              handelPageChang={handelPageChang}
              handelPageChangRight={handelPageChangRight}
              handelPageChangLeft={handelPageChangLeft}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teachers;
