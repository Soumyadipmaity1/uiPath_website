import React from 'react'
import { FaLink } from "react-icons/fa";
import { BsCalendarDate } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
export default function EventCard({ item }) {
    console.log(item)
    return (
        <div className='main_wrapper md:w-4/12 w-full px-2 my-2'>
            <div className="wrapper relative bg-[#2d3436]  rounded-lg ">
                <div className="imageBox  p-4 overflow-hidden ">
                    <img src={item.photo} alt="img" className='rounded-[45px]' />
                </div>
                <div className="date_time flex items-center justify-between px-4">
                    {item.date && <div className="date flex items-center gap-2">
                        <BsCalendarDate />
                        {item.date}
                    </div>}
                    {item.venue && <div className="time flex items-center gap-2">
                        <FaLocationDot />
                        {item.venue}

                    </div>}
                </div>
                <div className="content_bx mt-4 p-2">
                    <div className="title capitalize">
                        {item.name}

                    </div>
                    <div className="text my-2">
                        {item.descripton}

                    </div>
                </div>
                {item.link && <div className="button px-4 flex items-center justify-between border-t border-t-white w-full h-[50px]">
                    <div className="txt">
                        Event Information
                    </div>
                    <a href={item.link} target='_blank' >
                        <button>
                            <FaLink />
                        </button>
                    </a>
                </div>}
            </div>
        </div>
    )
}
