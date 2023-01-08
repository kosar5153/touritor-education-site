import React from "react";
import "./SlideShow.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/thumbs";
import "swiper/css/autoplay";
import { Navigation, Pagination, Thumbs, Autoplay } from "swiper";
import NewsItemSmall from "../NewsItemSmall/NewsItemSmall";

// eslint-disable-next-line
import "swiper/css/bundle";

export default ({ dataNews }) => {
  return (
    <div>
      <Swiper
        loop
        modules={[Navigation, Thumbs, Pagination, Autoplay]}
        pagination={true}
        autoplay={{
          delay: 3000,
        }}
        spaceBetween={20}
        slidesPerView={1}
        grabCursor={true}
        breakpoints={{
          // when window width is >= 640px
          640: {
            slidesPerView: 1,
          },
          // when window width is >= 768px
          768: {
            slidesPerView: 2,
          },

          1024: {
            slidesPerView: 3,
          },
        }}
        className=" min-h-[90vh] 
        xl:min-h-[80vh]
        mt-12"
      >
        {dataNews.map((news) => (
          <SwiperSlide key={news["_id"]}>
            <NewsItemSmall news={news} key={news["_id"]} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
