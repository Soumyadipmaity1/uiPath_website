import React from 'react'
import { useRef } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation } from 'swiper/modules';
import './style.css';
export default function TestmonialSlider({ swiperRef, faculty_data }) {




    return (
        <div className="TestmonialSlider_main_slider_wrapper relative pt-[50px]">


            <Swiper
                ref={swiperRef}
                navigation={{
                    nextEl: '.custom-swiper-next',
                    prevEl: '.custom-swiper-prev',
                }}
                slidesPerView={1}
                spaceBetween={30}

                breakpoints={{
                    1280: {
                        slidesPerView: 1,
                        spaceBetweenSlides: 0
                    },
                    1024: {
                        slidesPerView: 1,
                        spaceBetweenSlides: 0
                    },
                    640: {
                        slidesPerView: 1,
                        spaceBetweenSlides: 0
                    },
                    500: {
                        slidesPerView: 1,
                        spaceBetweenSlides: 0
                    },
                    400: {
                        slidesPerView: 1,
                        spaceBetweenSlides: 0
                    },
                    300: {
                        slidesPerView: 1,
                        spaceBetweenSlides: 0
                    },
                    200: {
                        slidesPerView: 1,
                        spaceBetweenSlides: 0
                    }
                }}

                modules={[Navigation]}

                className="mySwiper"
            >
                {faculty_data.map((item, index) => <SwiperSlide key={index}>
                    <div className="wrapper">
                        <div className="profile flex gap-2 items-center">
                            <div className="photo w-[40px] h-[40px] rounded-full bg-white">
                                <img src={item.src} alt="faculity_img" className='w-full h-full rounded-full' />
                            </div>
                            <div className="right_side">
                                <div className="name">
                                    {item.name}
                                </div>
                                <div className="post">
                                    Academic Supervisor
                                </div>
                            </div>
                        </div>
                        <div className="subTxt textnominals">
                            {item.review}
                        </div>
                    </div>
                </SwiperSlide>)}



            </Swiper>



        </div>
    )
}
