import React, { useEffect, useRef } from 'react'

import uiPath from '../assets/images/cummunity/uiPathStudentCommunity.svg'
import bg1 from '../assets/images/cummunity/bgImage1.svg'
import bg2 from '../assets/images/cummunity/bgImage2.svg';
import img from '../assets/images/grid_img.png';

export default function Community() {
    return (
        <section style={{ background: `url(${img})`, backgroundSize: 'cover' }} className='bg-black lg:h-[800px] h-screen community_section'>
            <div className=' h-1/2 flex flex-row justify-center '>
                <img src={uiPath} alt='' className='h-1/2 lg:my-28 md:my-8 my-14 w-10/12 ' />
            </div>

            <div className='relative h-1/2 '>

                <img src={bg1} alt='img_1' className='absolute lg:top-18 left-0' />
                <img src={bg2} alt='img_2' className='absolute lg:top-18 right-0' />
                <div className='absolute lg:top-24 md:top-12 flex lg:flex-row md:flex-row flex-col justify-center lg:gap-x-48 md:gap-x-24 gap-y-10 w-full'>
                    <div className='text-center'>
                        <p className=' lg:text-7xl text-3xl font-sans font-bold text-transparent bg-clip-text bg-gradient-to-b from-orange-500 to-orange-900'>12</p>
                        <p className='text-base lg:text-3xl font-bold'>Domains</p>
                    </div>
                    <div className='text-center '>
                        <p className=' lg:text-7xl text-3xl font-sans font-bold text-transparent bg-clip-text bg-gradient-to-b from-orange-500 to-orange-900'>2</p>
                        <p className='text-base lg:text-3xl font-bold'>Event </p>
                        <p className='text-base lg:text-3xl font-bold'>Organised</p>

                    </div>
                    <div className='text-center'>
                        <p className=' lg:text-7xl text-3xl font-sans font-bold text-transparent bg-clip-text bg-gradient-to-b from-orange-500 to-orange-900'>2</p>
                        <p className='text-base lg:text-3xl font-bold'>Challenge </p>
                        <p className='text-base lg:text-3xl font-bold'>Accepted</p>
                    </div>

                </div>
            </div>

        </section>
    )
}
