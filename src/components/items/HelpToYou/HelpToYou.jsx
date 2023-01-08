import React from "react";
import HomeTitle from "../HomeTitle/HomeTitle";
import { MdLiveHelp } from "react-icons/md";
import { helpData } from "./helpData";
import HelpUlItem from "./HelpUlItem";

const HelpToYou = () => {
  let test = document.getElementById("text");
  console.log("test : ");
  console.log(test);

  return (
    <div
      className=" container
    
    px-5
    md:px-10
    mx-auto my-20
    
    "
    >
      <HomeTitle icon={<MdLiveHelp />}>
        {" "}
        ما چه کمکی میتونیم به شما بکنیم؟؟
      </HomeTitle>

      <ul
        id="test"
        className=" grid 
       grid-cols-1 
       md:grid-cols-2
      lg:grid-cols-3     
      gap-5 mt-12 
       
      "
      >
        {helpData.map((item, index) => (
          <HelpUlItem key={index} href={item.img}>
            {item.title}
          </HelpUlItem>
        ))}
      </ul>
    </div>
  );
};

export default HelpToYou;
