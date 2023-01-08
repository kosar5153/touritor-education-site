import React from "react";

const TopPage = () => {
  const handelBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    handelBackToTop();
  }, []);

  return null;
};

export default TopPage;
