import React, { useEffect, useRef } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'
import MentorCard from './mentorCard'
import mentor_data from "../../data/mentor_data";
import "./style.css";

export default function Mentor() {
  const ref = useRef();
  const isInView = useInView(ref, { once: true });
  const mainAnimation = useAnimation();
  useEffect(() => {
    if (isInView) {
      mainAnimation.start("visiable");
    }
  }, [isInView]);
  return (
    <section>
      <div className="wrapper mx-auto w-11/12">
        <div className="flex items-center flex-wrap">
          <div className="headline w-full md:w-4/12">
            <div

              className="title text-4xl mb-5">
              <motion.span

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
                transition={{ duration: .5, delay: .20 }}
              >
                Our
              </motion.span>  <motion.span


                className='higlight'
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
                transition={{ duration: .5, delay: .25 }}>Mentors</motion.span>
            </div>
            <motion.div ref={ref}
              variants={{
                hidden: {
                  opacity: 0, translateX: 10,
                },
                visiable: {
                  opacity: 1, translateX: 0,
                }
              }}
              initial="hidden"
              animate={mainAnimation}
              transition={{ duration: .5, delay: .35 }} className="subTxt">
              The mentors guide, support, and facilitate student activities, ensuring smooth communication, skill development, and fostering a collaborative community environment.
            </motion.div>
          </div>
          <div className="wrapper_box md:w-8/12 w-full flex justify-center flex-wrap gap-2 mt-10 py-5">
            {
              mentor_data.map((item, index) => {
                return <MentorCard key={index} name={item.name} role={item.role} src={item.src} position={item.position} delay={item.animation_delay} />
              })
            }


          </div>
        </div>
      </div>
    </section>
  )
}
