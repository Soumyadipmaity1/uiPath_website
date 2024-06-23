import React,{useRef} from 'react'
import TestmonialSlider from './testmonial_slider'
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import faculty_data from "../../data/faculty_data";

export default function Testimonial() {
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
        <section className='py-6 relative' >
            <div className="wrapper mx-auto w-11/12 ">
                <div className="heading my-4">
                    <div className="title text-4xl">
                        What others say
                    </div>
                    <div className="subTxt">
                        Testimonials
                    </div>
                </div>
                <TestmonialSlider faculty_data={faculty_data} swiperRef={swiperRef} />
                <div className="contaroller_swipper">
                <div className="review-swiper-button-prev  w-[40px] h-[40px] border rounded-full flex justify-center items-center absolute top-[62%]  z-10 left-[0px] cursor-pointer" onClick={goPrev} >
                    <FaArrowLeft />
                </div>

                <div className="review-swiper-button-prev w-[40px] h-[40px] border rounded-full flex justify-center items-center absolute top-[62%]  z-10 right-[0px] cursor-pointer" onClick={goNext}>
                    <FaArrowRight />
                </div>
            </div>
            </div>
           
        </section>
    )
}
