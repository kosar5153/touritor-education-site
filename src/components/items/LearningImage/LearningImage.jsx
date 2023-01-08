import React from "react";
import "./LearningImage.css";

import bookOp from "../../../Assets/images/Touritor/image1.png";
import woman from "../../../Assets/images/Touritor/image2.png";
import bubble from "../../../Assets/images/Touritor/image3.png";
import bookCl from "../../../Assets/images/Touritor/image4.png";
import bookWr from "../../../Assets/images/Touritor/image5.png";
import pen from "../../../Assets/images/Touritor/image6.png";
import line from "../../../Assets/images/Touritor/image7.png";
import cloudBig from "../../../Assets/images/Touritor/image8.png";
import lamp from "../../../Assets/images/Touritor/image14.png";
import cloudSm from "../../../Assets/images/Touritor/image11.png";
import record from "../../../Assets/images/Touritor/image10.png";
import videoI from "../../../Assets/images/Touritor/image9.png";

const LearningImage = () => {
  return (
    <div
      className=" w-[30rem] h-[33rem]  bg-transparent pr-[13rem]
     relative  rotate-z  z-0"
    >
      <img className=" absolute -z-[1]  right-0 " src={line} />
      <img
        className=" absolute -z-[1] right-0 animate-TwCon-cloudy-movement"
        src={cloudBig}
      />
      <img
        className=" absolute -z-[1] top-20 left-48 animate-TwCon-cloudy-movement "
        src={cloudSm}
      />
      <img
        className=" absolute -z-[1] top-0 left-[4rem] right-0 bottom-20 mx-auto"
        src={bubble}
      />
      <img
        className=" absolute -z-[1]  bottom-0 right-0  w-96  animate-TwCon-woman-movement "
        src={bookOp}
      />
      <img
        className=" absolute -z-[1]  bottom-10 left-[0rem] animate-TwCon-woman-movement"
        src={woman}
      />
      <img
        className=" absolute -z-[1] left-[1rem] animate-TwCon-book-movement"
        src={bookCl}
      />
      <img
        className=" absolute -z-[1] right-32  top-20 animate-TwCon-book-movement"
        src={bookWr}
      />
      <img
        className=" absolute -z-[1] right-[1rem] top-20 animate-TwCon-book-movement "
        src={pen}
      />

      <img
        className=" absolute -z-[1]  right-32  top-20 animate-TwCon-round-Anim"
        src={record}
      />
      <img
        className=" absolute -z-[1] right-72 top-40 animate-TwCon-round-Anim"
        src={videoI}
      />
      <img
        className=" absolute -z-[1] top-32 left-0  w-14 animate-TwCon-lamp-movement  "
        src={lamp}
      />
    </div>
  );
};

export default LearningImage;
