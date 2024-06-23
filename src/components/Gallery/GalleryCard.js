import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Autoplay } from 'swiper/modules';
import { useNavigate } from 'react-router-dom';

const Recurement = [
    "https://res.cloudinary.com/dy0raom2p/image/upload/v1710151941/lxwbnz6zzyqwxvw5hcj7.jpg",
    "https://res.cloudinary.com/dy0raom2p/image/upload/v1710151943/kxwxmpywmx6nlr362vpx.jpg",
    "https://res.cloudinary.com/dy0raom2p/image/upload/v1710151950/f9079ixwhwmln7dnliw8.jpg",
    "https://res.cloudinary.com/dy0raom2p/image/upload/v1710151956/psagsziqoescpgty5dey.jpg",
    "https://res.cloudinary.com/dy0raom2p/image/upload/v1710151960/vxdms3ln8j1deptwzayz.jpg",
    "https://res.cloudinary.com/dy0raom2p/image/upload/v1710151961/tsgtf9sd209j4aflhb0j.jpg",
    "https://res.cloudinary.com/dy0raom2p/image/upload/v1710151968/a8dap4sp9nx220qs3oa4.jpg",
];

export default function GalleryCard({ item, index }) {

    const navigate = useNavigate();

    return (

        <div onClick={() => navigate(`/Gallery/${index}`)} className='lg:w-4/12 md:w-6/12 w-full'>
            <div className="wrapper p-2 overflow-hidden my-4  h-[450px]">
                <div className="content_box border-2 border-white  rounded-lg overflow-hidden relative h-full">
                    <Swiper
                        centeredSlides={true}
                        autoplay={{
                            delay: 1500,
                            disableOnInteraction: false,
                        }}
                        modules={[Autoplay]}
                        className="mySwiper"
                    >
                        {item.photos.map((photo, index) => <SwiperSlide key={index}>
                            <div className="image_bx h-[450px]">
                                <img className='h-full w-full object-cover' src={photo.src} alt={`${item.tile + item.slides}`} />
                            </div>

                        </SwiperSlide>)}
                    </Swiper>
                    <div className="bottom_part z-20 p-3 bg-[#000000ad] absolute bottom-0 left-0 w-full h-[60px]">
                        <div className="content_box flex text-white justify-between">
                            <div className="left">
                                <div className="txt text-2xl">{item.title}</div>
                                <div style={{
                                    "margin-top": "3px",
                                    "height": "1px",
                                    "width": "83%"
                                }} className='underline bg-white w-[80%] h-[3px]'></div>
                            </div>
                            <div className="right text-4xl rotate-3">
                                0{index + 1}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>




    )
}
