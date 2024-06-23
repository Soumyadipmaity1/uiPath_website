import React from 'react'

export default function SocalMediaIicon({ link, icon }) {
    return (
        <li className='w-[32px] h-[32px] bg-white rounded-full flex justify-center items-center'><a target='_blank' href={link}>
            {icon}
        </a></li>
    )
}
