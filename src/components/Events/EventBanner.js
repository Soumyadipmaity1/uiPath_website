import React from 'react'
import img from "../../assets/images/event-venue.jpg";

export default function EventBanner() {
    return (
        <div className="wrapper event_banner mt-20">
            <div style={{ backgroundImage: `linear-gradient(45deg, black, transparent),url(${img})`, backgroundSize: 'cover' }} className="h-[60vh] w-full bg-[#fedad3] flex flex-col justify-center items-center">
                <h1 className=" mt-18 font-semibold text-xl">OUR EVENTS</h1>
                <h1 className="font-semibold md:text-6xl text-2xl text-center">
                    Lectures,workshops & master-classes
                </h1>
            </div>
        </div>
    )
}
