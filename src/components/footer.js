import React, { useState } from 'react'
import logoSrc from "../assets/images/logo.png";
import { FaInstagram } from "react-icons/fa6";
import { LuLinkedin } from "react-icons/lu";
import { MdMailOutline } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import { FaRegCopyright } from "react-icons/fa6";
import GoToTop from '../utils/UI/goToTop';

export default function Footer() {
    const [visible, setVisible] = useState(false);
    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setVisible(true)
        }
        else if (scrolled <= 300) {
            setVisible(false)
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
            /* you can also use 'auto' behaviour 
               in place of 'smooth' */
        });
    };

    window.addEventListener('scroll', toggleVisible);
    return (
        <footer style={{ background: "#0F0F0F" }}>
            {visible && <GoToTop onTap={scrollToTop} />}
            <div className="wrapper flex flex-wrap w-11/12 mx-auto justify-center pt-8">
                <div className="md:w-6/12 w-full flex flex-col items-center md:items-start mt-2">
                    <div className="image_wrapper"> <img src={logoSrc} alt="site_logo" className='w-[200px]' /></div>
                    <div className="tagline text-[14px] font-semibold my-2">
                    Connect | Learn  | Collaborate
                    </div>
                    <div className="socal_icon flex gap-4 items-center mt-2">
                        <div className="box cursor-pointer hover:translate-y-1 transition-all duration-300">
                            <a href="https://www.instagram.com/usc.kiit/" target='_blank'>
                                <FaInstagram />

                            </a>
                        </div>
                        <div className="box cursor-pointer hover:translate-y-1 transition-all duration-300">
                            <a target='_blank' href="https://www.linkedin.com/company/uipath-community-kiit/mycompany/">
                                <LuLinkedin />

                            </a>

                        </div>
                        <div className="box cursor-pointer hover:translate-y-1 transition-all duration-300">
                            <MdMailOutline />
                        </div>

                    </div>
                </div>
                <div className="md:w-6/12 w-full mt-2">
                    <div className="wrapper flex flex-wrap justify-center">
                        <div className="md:w-6/12 w-full">
                            <div className="title my-2 font-semibold">
                                CONTACT US
                            </div>
                            <ul>
                            <li className='flex items-center gap-2 text-[15px] mt-1'>
                                    <div className="icon">
                                        <MdMailOutline />
                                    </div>
                                    <div className="text">

                                    uipathcommunitykiit@gmail.com

                                    </div>
                                </li>
                                <li className='flex items-center gap-2 text-[15px]'>
                                    <div className="icon">
                                        <IoCallOutline />
                                    </div>
                                    <div className="text">
                                        M Disha +91-9337489151


                                    </div>
                                </li>
                                <li className='flex items-center gap-2 text-[15px] mt-1'>
                                    <div className="icon">
                                        <IoCallOutline />
                                    </div>
                                    <div className="text">
                                        Anuska Maity  +91-9804277745
                                    </div>
                                </li>
                                <li className='flex items-center gap-2 text-[15px] mt-1'>
                                    <div className="icon">
                                        <MdMailOutline />
                                    </div>
                                    <div className="text">
                                        manvidisha0803@gmail.com
                                    

                                    </div>
                                </li>
                                <li className='flex items-center gap-2 text-[15px] mt-1'>
                                    <div className="icon">
                                        <MdMailOutline />
                                    </div>
                                    <div className="text">

                                        anuska09.maity@gmail.com

                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="md:w-6/12 w-full">
                            <div className="title my-2 font-semibold">
                                VISIT US AT
                            </div>
                            <div className="text text-[15px]">
                                KIIT UNIVERSITY <br />
                                ODISHA <br />
                                INDIA
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copy_wript_text flex justify-center items-center gap-2 py-4">
                    <div className="icon">
                        <FaRegCopyright />
                    </div>
                    <div className="text">
                        2024 USC KIIT
                    </div>
                </div>
            </div>
        </footer>
    )
}
