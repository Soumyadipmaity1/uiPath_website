import React, { useEffect, useRef } from "react";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import UserPic from "../assets/images/why-uipath.jpeg";
import { motion, useInView, useAnimation } from "framer-motion";
import video from "../assets/BUMPER.mp4";
export default function About() {
  const ref = useRef();
  const isInView = useInView(ref, { once: true });
  const mainAnimation = useAnimation();
  const videoControl = useRef(null);

  useEffect(() => {
    if (isInView) {
      mainAnimation.start("visiable");
    }
    if (videoControl.current) {
      videoControl.current.play();
    }
  }, [isInView, mainAnimation]);
  useEffect(() => {
    // videoControl?.current?.play();
  }, []);
  return (
    <section className="py-14">
      <div className="about_wrapper mx-auto w-11/12 py-6">
        <motion.div
          ref={ref}
          variants={{
            hidden: {
              opacity: 0,
              y: 20,
            },
            visiable: {
              opacity: 1,
              y: 0,
            },
          }}
          initial="hidden"
          animate={mainAnimation}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="heading title text-4xl"
        >
          Why <span className="highlight">UiPath?</span>
        </motion.div>
        <div className="wrapper flex flex-wrap-reverse items-center my-5 py-6 gap-4">
          <div className="md:w-6/12 w-full list-none border-0 md:border-r border-r-[#FF7D36] pr-4">
            <motion.div
              ref={ref}
              variants={{
                hidden: {
                  opacity: 0,
                  y: 10,
                },
                visiable: {
                  opacity: 1,
                  y: 0,
                },
              }}
              initial="hidden"
              animate={mainAnimation}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="list"
            >
              <IoCheckmarkDoneSharp className="icon" />A vibrant hub within the
              global network of aspiring minds.
            </motion.div>
            <motion.div
              ref={ref}
              variants={{
                hidden: {
                  opacity: 0,
                  y: 10,
                },
                visiable: {
                  opacity: 1,
                  y: 0,
                },
              }}
              initial="hidden"
              animate={mainAnimation}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="list"
            >
              <IoCheckmarkDoneSharp className="icon" />
              Dedicated to empowering the next generation of developers.
            </motion.div>
            <motion.div
              ref={ref}
              variants={{
                hidden: {
                  opacity: 0,
                  y: 10,
                },
                visiable: {
                  opacity: 1,
                  y: 0,
                },
              }}
              initial="hidden"
              animate={mainAnimation}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="list"
            >
              <IoCheckmarkDoneSharp className="icon" />A dynamic collective
              where technology meets creativity.
            </motion.div>
            <motion.div
              ref={ref}
              variants={{
                hidden: {
                  opacity: 0,
                  y: 10,
                },
                visiable: {
                  opacity: 1,
                  y: 0,
                },
              }}
              initial="hidden"
              animate={mainAnimation}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="list"
            >
              <IoCheckmarkDoneSharp className="icon" />
              Offers a comprehensive platform for holistic development.
            </motion.div>
            <motion.div
              ref={ref}
              variants={{
                hidden: {
                  opacity: 0,
                  y: 10,
                },
                visiable: {
                  opacity: 1,
                  y: 0,
                },
              }}
              initial="hidden"
              animate={mainAnimation}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="list"
            >
              <IoCheckmarkDoneSharp className="icon" />
              Beyond automation, the community encompasses various domains i.e,
              Mastery in
            </motion.div>
            <motion.div
              ref={ref}
              variants={{
                hidden: {
                  opacity: 0,
                  y: 20,
                },
                visiable: {
                  opacity: 1,
                  y: 0,
                },
              }}
              initial="hidden"
              animate={mainAnimation}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="list"
            >
              <IoCheckmarkDoneSharp className="icon text-3xl" />
              UiPath's robotic process automation. Exploration of web
              development, core machine learning, RPA/AI, UI automation, and
              cloud computing.
            </motion.div>
          </div>
          <div className="md:w-5/12 w-full px-4">
            <motion.div
              ref={ref}
              variants={{
                hidden: {
                  opacity: 0,
                  x: 20,
                },
                visiable: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              animate={mainAnimation}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="image rounded-md w-full h-fit bg-white"
            >
              {/* <img src={UserPic} className='w-full h-full rounded-md' alt="about_img" /> */}
              <video
                title="Advertisement"
                webkit-playsinline="true"
                playsinline="true"
                ref={videoControl}
                muted
                loop
                autoplay=""
              >
                <source src={video} type="video/mp4" />
                You can add additional source tags for different video formats
                Your browser does not support the video tag.
              </video>
              {/* <video loop autoPlay>
                <source src={require('../assets/BUMPER.mp4')} type="video/mp4" />
              </video> */}
              {/* <video >
                <source src={video} type="video/mp4" />
              </video> */}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
