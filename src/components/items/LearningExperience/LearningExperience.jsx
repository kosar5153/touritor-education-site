import React from "react";
import "./LearningExperience.css";
import LearningImage from "../LearningImage/LearningImage";
import { FaEye } from "react-icons/fa";
import { AiFillPlusCircle } from "react-icons/ai";
import Button from "../../commen/Button/Button";
import { NavLink } from "react-router-dom";

const LearningExperience = () => {
  return (
    <section
      className=" css-bgWave w-full  
      bg-gradient-to-b
    from-Main-Blue to-teal-500
      
     py-5  px-10 
      dark:from-Dark-MainBg
      dark:to-Dark-MainBg 

     "
    >
      <div className=" container  mx-auto grid md:grid-cols-1 lg:grid-cols-2 content-center gap-10">
        {/* right section for imag */}
        <div className={`css-learningBg  hidden lg:grid  `}>
          <LearningImage />
        </div>

        {/*  left section for text  */}
        <div
          className="css-textContent   
        text-teal-50 text-shadow flex items-center
        
         md:text-right
   
        "
        >
          <div>
            <h1
              className=" font-bold leading-normal text-3xl  text-center
              lg:text-5xl lg:leading-normal 
              md:text-4xl md:leading-normal 
              sm:text-4xl sm:leading-normal  sm:text-right
              
            "
            >
              ما بهترین تجربه یادگیری جهان را تصور می کنیم.
            </h1>
            <p
              className=" my-6  text-xl text-teal-200  text-center
             leading-loose  font-['Estedad-FD-Light.ttf'] w-full
            sm:text-right sm:w-4/5
             "
            >
              دوره های turitor برای هر یک از گروه های سنی مختلف و مهارت های
              مختلفی وجود دارد.
            </p>
            {/* btn */}
            <div className="css-btnHolder flex gap-5 flex-col sm:flex-row">
              <NavLink to={"/allcourse"}>
                <Button customClass="TwIN-btnAdd w-full" icon={<FaEye />}>
                  مشاهده دوره ها
                </Button>
              </NavLink>
              <NavLink to={"/newspage"}>
                <Button
                  customClass="TwIN-btnstartUser w-full"
                  icon={<AiFillPlusCircle />}
                >
                  اخبار موجود در توریتور
                </Button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearningExperience;
