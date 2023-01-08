import React from "react";
import ScrollToTop from "../../commen/ScrollToTop/ScrollToTop";
import HelpToYou from "../../items/HelpToYou/HelpToYou";
import LearningExperience from "../../items/LearningExperience/LearningExperience";
import NewsSectionHome from "../../items/NewsSectionHome/NewsSectionHome";
import OurCourse from "../../items/OurCourse/OurCourse";

import SpecialCourse from "../../items/SpecialCourse/SpecialCourse";

const MainHomePage = () => {
  return (
    <div>
      <LearningExperience />
      <HelpToYou />
      <SpecialCourse />
      <NewsSectionHome />
      <OurCourse />
      <ScrollToTop />
    </div>
  );
};

export default MainHomePage;
