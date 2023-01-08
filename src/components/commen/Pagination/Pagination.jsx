import React from "react";
import { AiFillCaretRight } from "react-icons/ai";
import { BiCaretLeft } from "react-icons/bi";
import { range } from "lodash";
import { Loading } from "../Loading/Loading";

const Pagination = ({
  allCourse,
  perPage,
  currentPage,
  courseItem,
  handelPageChang,
  handelPageChangRight,
  handelPageChangLeft,
  handelClass,
}) => {
  const pageCount = Math.ceil(allCourse?.length / perPage);
  if (pageCount === 1) return null;

  const pages = range(1, pageCount + 1);

  return (
    <ul
      className=" mt-10 mx-auto
    flex justify-center items-center gap-3 text-xl"
    >
      <li
        className="   TWIN-Paginate dark:bg-Dark-Teal"
        onClick={handelPageChangRight}
      >
        <AiFillCaretRight />
      </li>
      {pages.map((page) => (
        <li
          className={
            page === currentPage
              ? `TWIN-Paginate ${handelClass} TWIN-Active`
              : `TWIN-Paginate ${handelClass}`
          }
          key={page}
          onClick={() => handelPageChang(page)}
        >
          {page}
        </li>
      ))}

      <li
        className=" TWIN-Paginate dark:bg-Dark-Teal  "
        onClick={handelPageChangLeft}
      >
        <BiCaretLeft />
      </li>
    </ul>
  );
};

export default Pagination;
