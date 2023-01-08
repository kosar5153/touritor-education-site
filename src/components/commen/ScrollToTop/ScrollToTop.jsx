import React from "react";
import "./ScrollToTop.css";
import { FiChevronsDown } from "react-icons/fi";

import { useState } from "react";
import { useEffect } from "react";

const ScrollToTop = () => {
  const [scrollToTop, setScrollTop] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setScrollTop(true);
      } else {
        setScrollTop(false);
      }
    });
  }, []);

  const handelBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      {scrollToTop && (
        <div
          className=" css-scrollTop
     w-12  h-12 rounded-full flex justify-center
      items-center  fixed bottom-5 
      right-5 overflow-hidden
       border-dotted border-4  border-Dark-Teal
        cursor-pointer hover:border-solid hover:border-2
         bg-Main-Blue  shadow
       "
          onClick={handelBackToTop}
        >
          <FiChevronsDown className="  absolute    rotate-180  text-2xl    text-teal-100 z-[1000]" />
          <div className=" css-bgGradient  rounded-full    w-20  h-20 "></div>
        </div>
      )}
    </>
  );
};

export default ScrollToTop;
