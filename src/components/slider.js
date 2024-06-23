import { useState, useEffect } from 'react';
import Glide from "@glidejs/glide"
import { Controls, Breakpoints } from '@glidejs/glide/dist/glide.modular.esm'
import slider from '../assets/images/cummunity/slider.svg'


export default function Slider_() {

  useEffect(() => {
    const slider = new Glide(".glide-08", {
      type: "carousel",
      focusAt: 'center',
      animationDuration: 5000,
      autoplay: true,
      rewind: true,
      perView: 2,
      gap: 48,
      classes: {
        nav: {
          active: "[&>*]:bg-wuiSlate-700",
        },
      },
      breakpoints: {
        1024: {
          perView: 2,
        },
        640: {
          perView: 1,
        },
      },
    }).mount({ Controls, Breakpoints })

    return () => {
      slider.destroy()
    }
  }, [])

  return (


    <>
      {/*<!-- Component: Testimonial carousel --> */}
      <div className="glide-08 mt-20 relative w-full overflow-hidden bg-gradient-to-r from-red-400 to-orange-500 py-6">
        {/*    <!-- Slides --> */}
        <div data-glide-el="track" className='h-72'>
          <ul className="whitespace-no-wrap bg h-72 flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden ">
            <li className='shadow-stone-500 '>
              <div className="container rounded-2xl text-5xl text-start h-full w-full">
                <ul>
                  <li>" Connect</li>
                  <li>Learn & </li>
                  <li>Collaborate "</li>
                </ul>
              </div>
            </li>
            <li>
              <div className=" h-full w-full container rounded-2xl text-4xl text-start px-10 text-pretty leading-relaxed">

                " Together , lets automate for a brighter future. "

              </div>
            </li>
            <li>
              <div className=" h-full w-full container rounded-2xl text-4xl text-start px-10 text-pretty leading-relaxed">
                "Transforming dreams into automated realities"
              </div>
            </li>
          </ul>
        </div>
        {/*    <!-- Controls --> */}
        {/* <div
          className="absolute left-0 top-1/2 flex h-0 w-full items-center justify-between px-4 "
          data-glide-el="controls"
        >
          <button
            className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-700 bg-white/20 text-slate-700 transition duration-300 hover:border-slate-900 hover:text-slate-900 focus-visible:outline-none lg:h-12 lg:w-12"
            data-glide-dir="<"
            aria-label="prev slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-5 w-5"
            >
              <title>prev slide</title>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
              />
            </svg>
          </button>
          <button
            className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-700 bg-white/20 text-slate-700 transition duration-300 hover:border-slate-900 hover:text-slate-900 focus-visible:outline-none lg:h-12 lg:w-12"
            data-glide-dir=">"
            aria-label="next slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-5 w-5"
            >
              <title>next slide</title>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </button>
        </div> */}
        {/*    <!-- Indicators --> */}
        {/* <div
          className="-mt-6 flex w-full items-center justify-center gap-2"
          data-glide-el="controls[nav]"
        >
          <button
            className="group p-4"
            data-glide-dir="=0"
            aria-label="goto slide 1"
          >
            <span className="block h-2 w-2 rounded-full bg-white/20 opacity-70 ring-1 ring-slate-700 transition-colors duration-300 focus:outline-none"></span>
          </button>
          <button
            className="group p-4"
            data-glide-dir="=1"
            aria-label="goto slide 2"
          >
            <span className="block h-2 w-2 rounded-full bg-white/20 opacity-70 ring-1 ring-slate-700 transition-colors duration-300 focus:outline-none"></span>
          </button>
          <button
            className="group p-4"
            data-glide-dir="=2"
            aria-label="goto slide 3"
          >
            <span className="block h-2 w-2 rounded-full bg-white/20 opacity-70 ring-1 ring-slate-700 transition-colors duration-300 focus:outline-none"></span>
          </button>
        </div> */}

      </div>
      {/*<!-- End Testimonial carousel --> */}
    </>

  );
}
