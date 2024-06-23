import React from "react";
import { useRef } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Navigation } from "swiper/modules";
import "./style.css";
import lead_data from "../../data/lead_data";
// import LeadCard from './LeadCard';
import Bottom from "./bottom";

export default function LeadSlider() {
  const swiperRef = useRef(null);
  const goNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const goPrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  return (
    <div className="main_slider_wrapper relative ">
      <Swiper
        ref={swiperRef}
        navigation={{
          nextEl: ".custom-swiper-next",
          prevEl: ".custom-swiper-prev",
        }}
        slidesPerView={4}
        spaceBetween={30}
        breakpoints={{
          1280: {
            slidesPerView: 4,
            spaceBetweenSlides: 10,
          },
          1024: {
            slidesPerView: 3,
            spaceBetweenSlides: 10,
          },
          640: {
            slidesPerView: 1,
            spaceBetweenSlides: 10,
          },
          500: {
            slidesPerView: 1,
            spaceBetweenSlides: 10,
          },
          400: {
            slidesPerView: 1,
            spaceBetweenSlides: 10,
          },
          300: {
            slidesPerView: 1,
            spaceBetweenSlides: 10,
          },
          200: {
            slidesPerView: 1,
            spaceBetweenSlides: 10,
          },
        }}
        modules={[Navigation,Autoplay]}
        autoplay={{ delay: 4000 }}
        effect="cards"
        className="mySwiper"
      >
        {lead_data.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="card ">
              <div className="des_bx py-5 flex justify-center items-center flex-col gap-2  text-center">
                <div className="photo w-[100px] h-[100px] rounded-full overflow-hidden">
                  <img
                    src={item.src}
                    alt="profile_img"
                    className="rounded-full object-cover w-full object-contain h-full"
                  />
                </div>
                <div className="name px-2 font-semibold text-[18px]">
                  {item.name}
                </div>
                <div className="subText">{item.postion}</div>
              </div>
              <Bottom
                instagram={item.instagram}
                gamil={item.gamil}
                linkedin={item.linkedin}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="contaroller_swipper">
        {/* <div
          className="review-swiper-button-prev  w-[40px] h-[40px] border rounded-full flex justify-center items-center absolute top-[50%] translate-y-[-50%] z-10 left-[0px] cursor-pointer"
          onClick={goPrev}
        >
          {/* <FaArrowLeft /> */}
        {/* </div>

        <div
          className=" swiper-button-next w-[40px] h-[40px] border rounded-full flex justify-center items-center absolute top-[50%] translate-y-[-50%] z-10 right-[0px] cursor-pointer"
          onClick={goNext}
        > */}
          {/* <FaArrowRight /> */}
        {/* </div> */} 
      </div>
    </div>
  );
}
