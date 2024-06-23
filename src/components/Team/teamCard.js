import React from 'react'

export default function TeamCard({ name, image, postion }) {
    return (
        <div className="md:w-4/12 w-full cursor-pointer memberBoxWrapper">
            <div className="wrapper_box p-2 bg-[#2c3e50] h-[400px] rounded-md m-2">
                <div className="img_wrapper relative rounded-md h-[80%] overflow-hidden">
                    <img className='w-full h-full object-cover' src={image} alt="" />
                </div>
                <div className="content_area h-[20%] flex justify-center items-center flex-col">
                    <div className="title">
                        {name}
                    </div>
                    <div className="role">
                        {postion}
                    </div>
                </div>
            </div>
        </div>
    )
}
