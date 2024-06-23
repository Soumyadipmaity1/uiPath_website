import React, { useRef, useEffect } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion';
import { MdKeyboardArrowRight } from "react-icons/md";
export default function BoxCard({ icon, text, title, delay, link ,subTxt}) {
    const ref = useRef();
    const isInView = useInView(ref, { once: true });

    const mainAnimation = useAnimation();
    useEffect(() => {
        if (isInView) {
            mainAnimation.start("visiable");
        }
    }, [isInView]);
    return (
        <motion.div
            ref={ref}
            variants={{
                hidden: {
                    opacity: 0, translateX: -10, transformOrigin: 'right',
                },
                visiable: {
                    opacity: 1, translateX: 0, transformOrigin: 'right',
                }
            }}
            initial="hidden"
            animate={mainAnimation}
            transition={{ duration: .7, delay: delay }}
            style={{
                "height": "383px",
                "padding": "10px 30px",
                "display": "flex",
                "flex-direction": "column",
                "justify-content": "center",
            }} className="main_bx w-full my-2 rounded-md bg-[#1b1c1e]">
            <motion.div
                ref={ref}
                variants={{
                    hidden: {
                        opacity: 0, translateY: -10,
                        // transformOrigin: 'bottom',
                    },
                    visiable: {
                        opacity: 1, translateY: 0,
                        // transformOrigin: 'bottom',
                    }
                }}
                initial="hidden"
                animate={mainAnimation}
                transition={{ duration: .7, delay: .8 }}

                className="icon text-[4rem]">
                {icon}
            </motion.div>
            <motion.div
                ref={ref}
                variants={{
                    hidden: {
                        opacity: 0, translateY: 5,
                        // transformOrigin: 'bottom',
                    },
                    visiable: {
                        opacity: 1, translateY: 0,
                        // transformOrigin: 'bottom',
                    }
                }}
                initial="hidden"
                animate={mainAnimation}
                transition={{ duration: .7, delay: .85 }}
                className="title text-2xl mt-10 text-[#889ce7]">
                {title}
            </motion.div>
            <motion.div
                ref={ref}
                variants={{
                    hidden: {
                        opacity: 0, translateX: 10,
                        // transformOrigin: 'bottom',
                    },
                    visiable: {
                        opacity: 1, translateX: 0,
                        // transformOrigin: 'bottom',
                    }
                }}
                initial="hidden"
                animate={mainAnimation}
                transition={{ duration: .7, delay: .8 }}
                className="txt">
                {text}
                <br/>
                {subTxt}
            </motion.div>
            <center>
                <a target='_blank' href={link}>
                    <div className="cicrcleBtn w-[30px] h-[30px] border border-orange-600 my-2 cursor-pointer group hover:bg-orange-600 rounded-full flex justify-center items-center">
                        <MdKeyboardArrowRight className='group hover:text-white' color='orange' />
                    </div>
                </a>
            </center>
            <center>
                <motion.div
                    ref={ref}
                    variants={{
                        hidden: {
                            opacity: 0, scale: 0,
                            // transformOrigin: 'bottom',
                        },
                        visiable: {
                            opacity: 1, scale: 1,
                            // transformOrigin: 'bottom',
                        }
                    }}
                    initial="hidden"
                    animate={mainAnimation}
                    transition={{ duration: .7, delay: .8 }}
                    className="underline mt-2 w-[80%] h-[3px] bg-[#3f4349]">

                </motion.div>
            </center>
        </motion.div>
    )
}
