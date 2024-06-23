import React from 'react'
// F9742A
// F6F0E0
export default function LeadCard({ item }) {
    return (
        <div className='w-full p-4 md:w-6/12 lg:w-3/12 px-6  h-[200px] relative'>
            <div className="below_bg rounded-md bg-[#f9742a] w-[86%] h-[76%] left-[26px] top-[26px] absolute -z-10" style={{ "rotate": "169deg" }}></div>
            <div className="main_bx rounded-md w-full h-full bg-[#1e272e]">
                <div className="profile w-[90px] overflow-hidden h-[90px] bg-white absolute rounded-full" style={{
                    "top": "-22px",
                    "left": "50%",
                    "transform": "translateX(-50%)"
                }} >
                    <img src={item.src} alt="" />
                </div>
                <div className="context_bx pt-20 text-center text-white">
                <div className="name title text-xl">{item.name}</div>
                <div className="role">{item.postion}</div>
                </div>
            </div>
        </div>
    )
}
