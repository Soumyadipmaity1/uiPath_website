import React from 'react'

export default function RightSide({ image, title1, title2, normal }) {
    return (
        <div className='w-full flex flex-wrap gap-2 items-center'>

            <div className="w-5/12 text-5xl font-bold">
                <span className='text-orange-400'>{title1}</span>

                {normal}
                <span className='text-orange-400'>{title2}</span>

            </div>
            <div className="w-6/12">
                <div className="img_wrapper rounded-md overflow-hidden">
                    <img className='object-cover' src={image} alt="" />
                </div>
            </div>
        </div>
    )
}
