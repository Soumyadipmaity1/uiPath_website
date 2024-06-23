import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';
import GaleryImages from './Galery_images';


// import required modules
import { EffectCards, Autoplay } from 'swiper/modules';
export default function GalleryBanner() {
    return (
        <div className='main_wrapper mt-24 w-10/12 mx-auto flex flex-wrap items-center'>
            <div className="text_box w-full md:w-6/12 md:px-8 px-0">
                <div className="txt title text-5xl">
                    Memory Mosaic
                </div>
                <p className='mt-3'>
                    Welcome to the UiPath Student Community KIIT gallery! Discover photos of our dynamic events, activities, and fun times, capturing the lively and engaging spirit of our student community in action
                </p>
            </div>
            <div className="w-full md:w-6/12   md:pl-10 pl-0 mt-10">
                <Swiper
                    effect={'cards'}
                    grabCursor={true}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    modules={[EffectCards, Autoplay]}
                    className="mySwiper"
                >
                    {GaleryImages.map((item, index) => <SwiperSlide>
                        <div key={index} className="h-[500px] img_wrapper">
                            <img className='w-full h-full object-cover' src={item} alt={item} />
                        </div>
                    </SwiperSlide>)
                    }
                </Swiper>
            </div>

        </div>
    )
}
