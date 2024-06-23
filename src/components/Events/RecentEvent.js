import React from 'react'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';
import { FaMedium } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import photos from './AutoMatrixPhoto';

// import required modules
import { EffectCards, Autoplay } from 'swiper/modules';
import SocalMediaIicon from '../../utils/UI/SocalMediaIicon';
export default function RecentEvent() {
    return (
        <div className='parrent_wrapper flex flex-wrap mx-auto w-11/12  my-4'>
            <div className="w-full md:w-6/12   px-6">
                <Swiper
                    effect={'cards'}
                    grabCursor={true}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                    }}
                    modules={[EffectCards, Autoplay]}
                    className="mySwiper"
                >
                    {photos.map((item, index) => <SwiperSlide>
                        <div key={index} className="img_wrapper h-[500px]">
                            <img src={item} alt="" />
                        </div>
                    </SwiperSlide>)}

                </Swiper>
            </div>
            <div className="w-full md:w-6/12 mt-4 md:mt-0">
                <div className="mainContainer md:pl-16 pl-0">
                    <div className="higlihted_area bg-orange-500 px-3 rounded-full py-2 w-[200px]">
                        Our Recent Activity
                    </div>
                    <div className="title text-3xl my-2">
                        Dive into Automation Magic: "Automatrix – Unleashing the Power of UiPath Studio for Email Mastery!" 🎬
                    </div>
                    <div className="descrbtion">
                        <p>
                            Participants enchanted their inboxes with UiPath Studio at our "Automatrix" workshop. They learned to set up UiPath, log into Gmail, and automate tasks like email retrieval, forwarding, saving attachments, and preserving content. Stay tuned for more spellbinding events! 🚀📧

                        </p>
                    </div>
                    <div className="socalMedia mt-5 flex gap-2">

                        <SocalMediaIicon link={"https://www.instagram.com/reel/C5NpAB1r8p2/?igsh=eHh2aHFqNTFvMDdh"} icon={<FaInstagram fill="black" />} />
                        <SocalMediaIicon link={"https://www.linkedin.com/feed/update/urn:li:activity:7183069640758091776 "} icon={<FaLinkedin fill="black" />} />
                        <SocalMediaIicon link={"https://medium.com/@uipathcommunitykiit/automatrix-a-workshop-by-uipath-student-community-kiit-b2004f6d324b "} icon={<FaMedium fill="black" />} />


                    </div>
                </div>
            </div>
        </div>
    )
}
// -webkit-linear-gradient(top, #e17055, #cd3334) text


{/* <div style={{
                "background": "-webkit-linear-gradient(top, #e17055, #cd3334) text",
                "-webkit-background-clip": "text",
                "-webkit-text-fill-color": "transparent"
            }} className="heading font-semibold text-4xl my-10">
                Recently at USC
            </div>
            <div className="recent_img_wrapper">
                <div className="parent">
                    <div className="div1 box relative h-[400px] p-1 rounded-md overflow-hidden cursor-pointer ">
                        <div className="overlay absolute w-full h-full bg-[#0000008f] p-5 pb-7 text-3xl flex items-end">
                            <div className="text duration-200">
                                Volunteer power at Automatrix Events! Making moments matter.
                            </div>
                        </div>
                        <img className='rounded-md w-full h-full' src={img1} alt="" />

                    </div>
                    <div className="div2 box relative h-[400px] p-1 rounded-md overflow-hidden cursor-pointer">
                        <div className="overlay absolute w-full h-full bg-[#0000008f] p-5 pb-7 text-3xl flex items-end">
                            <div className="text duration-200">
                                Volunteer power at Automatrix Events! Making moments matter.
                            </div>
                        </div>
                        <img className='rounded-md w-full h-full' src={img2} alt="" /></div>
                    <div className="div3 box relative h-[300px] p-1 rounded-md overflow-hidden cursor-pointer">
                        <div className="overlay absolute w-full h-full bg-[#0000008f] p-5 pb-7 text-3xl flex items-end">
                            <div className="text duration-200">
                                Volunteer power at Automatrix Events! Making moments matter.
                            </div>
                        </div>
                        <img className='rounded-md w-full h-full' src={img3} alt="" /></div>
                    <div className="div4 box relative h-[300px] p-1 rounded-md overflow-hidden cursor-pointer">
                        <div className="overlay absolute w-full h-full bg-[#0000008f] p-5 pb-7 text-3xl flex items-end">
                            <div className="text duration-200">
                                Volunteer power at Automatrix Events! Making moments matter.
                            </div>
                        </div>
                        <img className='rounded-md w-full h-full' src={img4} alt="" /></div>
                    <div className="div5 box relative h-[300px] p-1 rounded-md overflow-hidden cursor-pointer">
                        <div className="overlay absolute w-full h-full bg-[#0000008f] p-5 pb-7 text-3xl flex items-end">
                            <div className="text duration-200">
                                Volunteer power at Automatrix Events! Making moments matter.
                            </div>
                        </div>
                        <img className='rounded-md w-full h-full' src={img5} alt="" /></div>


                </div>
            </div> */}