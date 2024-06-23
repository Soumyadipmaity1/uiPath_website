import React from 'react'
import img1 from "../../assets/images/Events/ev_2.JPG"
import EventCard from './EventCard'
import { eventsData } from '../../data/events_data'
export default function OthersEvent() {
  return (
    <div className='wrapper w-11/12 mx-auto'>
      <div style={{
        "background": "-webkit-linear-gradient(top, #e17055, #cd3334) text",
        "-webkit-background-clip": "text",
        "-webkit-text-fill-color": "transparent"
      }} className="heading font-semibold text-4xl my-10">
        Past <br /> Events
        <div className='w-[55px] mt-2 h-[2px] bg-white'></div>
      </div>
      <div className="others_boxes flex flex-wrap">
        {
          eventsData.map((item, index) =>
            <EventCard item={item} key={index} />
          )
        }
      </div>
    </div>
  )
}
