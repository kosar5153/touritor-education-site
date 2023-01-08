import React, { useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const StarCourse = () => {
  let randomStart = Math.floor(Math.random() * 4);
  let completStar = [];
  let lineStar = [];

  for (let i = 0; i <= randomStart; i++) {
    completStar.push(1);
  }

  for (let i = 0; i <= 4 - completStar.length; i++) {
    lineStar.push(1);
  }
  return (
    <div className=" flex gap-2">
      {completStar.map((it) => (
        <AiFillStar />
      ))}
      {lineStar.map((it) => (
        <AiOutlineStar />
      ))}
    </div>
  );
};

export default StarCourse;
