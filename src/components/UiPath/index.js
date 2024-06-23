import React, { useRef, useEffect } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion';
import BoxCard from './BoxCard';
import { TbBrandDatabricks, TbCertificate } from "react-icons/tb";
import { SiHtmlacademy } from "react-icons/si";
import { SiUnacademy } from "react-icons/si";
import { FaRegComments } from "react-icons/fa6";
import Button from './Button';
export default function UiPathInfo() {
    const color = "#e17055";
    const ref = useRef();
    const isInView = useInView(ref, { once: true });
    const mainAnimation = useAnimation();
    useEffect(() => {
        if (isInView) {
            mainAnimation.start("visiable");
        }
    }, [isInView]);
    return (
        <div className='mx-auto w-11/12 main_wrapper flex flex-wrap items-center  relative'>
            <div className="border_wraper hidden md:block absolute border border-[#ffffff3b] w-full h-[80%] -z-10">
                <div className="wrapper w-6/12 border-r border-r-[#ffffff3b] h-full"></div>
            </div>
            <motion.div
                ref={ref}
                variants={{
                    hidden: {
                        opacity: 0, y: 10,
                    },
                    visiable: {
                        opacity: 1, y: 0,
                    }
                }}
                initial="hidden"
                animate={mainAnimation}
                transition={{ duration: .5, delay: .25 }}
                className="md:w-6/12 w-full   pl-8  border-r-[#ffffff3b]">
                <div className="title text-4xl">
                    Explore UiPath guides. Build your knowledge and Connection
                </div>
                <motion.div

                    ref={ref}
                    variants={{
                        hidden: {
                            opacity: 0, translateY: -10, transformOrigin: 'bottom',
                        },
                        visiable: {
                            opacity: 1, translateY: 0, transformOrigin: 'bottom',
                        }
                    }}
                    initial="hidden"
                    animate={mainAnimation}
                    transition={{ duration: .7, delay: .25 }}
                    className="subTXt mt-4">
                    We strive to accelerate human achievement by creating the tools that help people see new possibilities, think bigger, and achieve more—for better workplaces and a better world.
                </motion.div>
                <br />

                <Button />
            </motion.div>
            <div className="md:w-6/12 w-full flex flex-wrap px-2 gap-2">
                <div className="md:w-5/12 w-full" >
                    <BoxCard link={'https://www.uipath.com/'} delay={.25} title={"UiPath Official"} text={"Visit the ultimate platform of RPA and AI.See how automation and AI are the catalyst for continuous reinvention."} 
               
                    icon={
                        <TbBrandDatabricks color={`${color}`} />
                    } />
                    <BoxCard link={'https://academy.uipath.com/?_gl=1*1mw7n7o*_gcl_au*MTk5MjQ4Mzc4MS4xNzE1ODQ4NTEw'} delay={.35} title={"UiPath Academy"} text={"Elevate your skills to new heights with the in-depth training necessary to master UiPath."} icon={
                        <SiHtmlacademy color={`${color}`} />
                    } />
                </div>
                <div className="md:w-5/12 w-full md:mt-[8rem] mt-0" >
                    <BoxCard link={'https://www.uipath.com/learning/certification'} delay={.30} title={"UiPath Certificate"} text={"Prove your expertise with an industry-leading process automation certification"} icon={<SiUnacademy color={`${color}`} />} />
                    <BoxCard
                        link={'https://community.uipath.com/'}
                        delay={.40} title={"UiPath Community"} text={"Engage with professionals and colleagues on cutting-edge developments in automation and AI."} icon={<FaRegComments color={`${color}`} />} />
                </div>
            </div>
        </div>
    )
}
