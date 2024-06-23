import React, { useEffect, useRef } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'
export default function MentorCard({ name, position, src, role,delay }) {
    const ref = useRef();
    const isInView = useInView(ref, { once: true });
    const mainAnimation = useAnimation();
    useEffect(() => {
        if (isInView) {
            mainAnimation.start("visiable");
        }
    }, [isInView]);
    return (<motion.div
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
        transition={{ duration: .5, delay: delay }}
        className='md:w-5/12 md:px-0 w-full px-12 mentor_card'>
        <div className="image h-[220px] w-full relative bg-slate-200 rounded-md overflow-hidden">
            <img src={src} alt="img" className='w-full' />
        </div>
        <div className="content my-2 text-center">
            <div className="post_type text-2xl">
                {role}
            </div>
            <div className="name text-1xl">
                {name}
            </div>
            <div className="subTxt mt-2 text-[15px]">
                {position}
            </div>
        </div>
    </motion.div>)
}
