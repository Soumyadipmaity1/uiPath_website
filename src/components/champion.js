import React, { useRef, useEffect } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion';
import img from "../assets/images/APJ-Bandyopadhyay.jpg";
export default function Champion() {
  const ref = useRef();
  const isInView = useInView(ref, { once: true });
  const mainAnimation = useAnimation();
  useEffect(() => {
    if (isInView) {
      mainAnimation.start("visiable");
    }
  }, [isInView]);
  return (
    <section >
      <div className="wrapper w-11/12 mx-auto py-8">
        <div className="title text-center font-bold md:text-4xl text-2xl flex gap-2 justify-center">
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
            transition={{ duration: .5, delay: .25 }} >Our </motion.span>  <span className='text-[#FF7D36] flex gap-2'>
            <motion.span ref={ref}
              variants={{
                hidden: {
                  opacity: 0, y: 15,
                },
                visiable: {
                  opacity: 1, y: 0,
                }
              }}
              initial="hidden"
              animate={mainAnimation}
              transition={{ duration: .5, delay: .35 }}>   Student</motion.span>
            <motion.span ref={ref}
              variants={{
                hidden: {
                  opacity: 0, y: 18,
                },
                visiable: {
                  opacity: 1, y: 0,
                }
              }}
              initial="hidden"
              animate={mainAnimation}
              transition={{ duration: .5, delay: .40 }} >      Champion</motion.span> </span>
        </div>
        <div className="content_wrapper my-9 flex justify-center flex-wrap gap-4">
          <div className="xl:w-3/12 md:w-4/12 w-8/12">
            <motion.div ref={ref}
              variants={{
                hidden: {
                  opacity: 0, x: 10,
                },
                visiable: {
                  opacity: 1, x: 0,
                }
              }}
              initial="hidden"
              animate={mainAnimation}
              transition={{ duration: .5, delay: .45 }} className="image_bx md:my-0 my-8 bg-white rounded-md h-[300px]">
              <img src={img} alt="image" className='w-full rounded-md' />
            </motion.div>
          </div>
          <div className="xl:w-7/12 md:w-6/12 w-full text-[16px]">
            <motion.div ref={ref}
              variants={{
                hidden: {
                  opacity: 0, x: -10
                },
                visiable: {
                  opacity: 1, x: 0,
                }
              }}
              initial="hidden"
              animate={mainAnimation}
              transition={{ duration: .8, delay: .85 }} >
              We're thrilled to announce that <b> Atri Bandyopadhyay</b>, our esteemed USC KIIT Coordinator, has been selected as one of UiPath's distinguished Student Champions in their latest cohort. Following a rigorous selection process, which saw over 1000 nominations and applications, Atri emerged as one of the top 100 exceptional individuals chosen for this prestigious honor.
              <br /><br />
              This select group of Student Champions embodies diversity and excellence, with 48 remarkable women and 53 outstanding men, all demonstrating exceptional proficiency in software automation. Spanning across 13 different countries, they collectively represent a rich tapestry of innovation and skill on a global scale.
            </motion.div>
          </div>




        </div>
      </div>



    </section >
  )
}
