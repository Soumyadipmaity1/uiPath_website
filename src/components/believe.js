import React, { useState } from 'react'

export default function Believe() {
  const [activeCard, setActiveCard] = useState('learn') // Initialize with 'learn'

  const handleCardClick = (card) => {
    setActiveCard(card)
  }

  return (
    <section style={{ background: '#000' }}>
      <div className='flex flex-col items-center text-white py-16 mb-6'>
        <h2 className='text-5xl font-bold mb-4 my-4'>
          <span className='text-white'>We</span>
          <span className='text-orange-500 mx-3'>Believe</span>
          <span className='text-white'>in</span>
        </h2>
        <div className='flex   mt-6 mx-10'>
          <button
            className={activeCard === "connect" ? 'px-4 py-2 bg-black text-orange-500 font-semibold hover:text-orange-500 rounded-lg shadow-md focus:outline-none' : 'px-4 py-2 bg-black text-gray-500 font-semibold hover:text-orange-500 rounded-lg shadow-md focus:outline-none'}
            onClick={() => handleCardClick('connect')}
          >
            Connect
          </button>
          <button
            className={activeCard === "learn" ? 'px-4 py-2 bg-black text-orange-500 font-semibold hover:text-orange-500 rounded-lg shadow-md focus:outline-none' : 'px-4 py-2 bg-black text-gray-500 font-semibold hover:text-orange-500 rounded-lg shadow-md focus:outline-none'}
            onClick={() => handleCardClick('learn')}
          >
            Learn
          </button>

          <button
            className={activeCard === "collaborate" ? 'px-4 py-2 bg-black text-orange-500 font-semibold hover:text-orange-500 rounded-lg shadow-md focus:outline-none' : 'px-4 py-2 bg-black text-gray-500 font-semibold hover:text-orange-500 rounded-lg shadow-md focus:outline-none'}
            onClick={() => handleCardClick('collaborate')}
          >
            Collaborate
          </button>
        </div>

        {activeCard === 'learn' && (
          <div className='bg-black border border-gray-500 text-white md:p-8 p-2 rounded-lg mt-9 max-w-[1012px] h-auto'>
            <p className='text-xl'>
              We believe in the power of continuous learning. Our community is a
              dynamic learning environment, providing students with
              opportunities to master cutting-edge technologies such as UiPath's
              robotic process automation, web development, machine learning,
              RPA/AI, UI automation, and more. Through curated resources,
              workshops, and collaborative projects, we facilitate a culture of
              perpetual learning.
            </p>
          </div>
        )}

        {activeCard === 'connect' && (
          <div className='bg-black border border-gray-500 text-white p-8 rounded-lg mt-8 max-w-[1012px] h-auto'>
            <p className='text-xl'>
              Connect with our community of learners and mentors to create a
              supportive network of like-minded individuals. Networking is at
              the heart of our community. We recognize the significance of
              fostering connections among aspiring minds. Students can engage
              with peers, industry professionals, and mentors, creating a
              vibrant network that extends beyond the confines of academia.
              These connections not only facilitate knowledge exchange but also
              open doors to diverse perspectives and career opportunities.
            </p>
          </div>
        )}

        {activeCard === 'collaborate' && (
          <div className='bg-black border border-gray-500 text-white p-8 rounded-lg mt-8 max-w-[1012px] h-auto'>
            <p className='text-xl'>
              Collaborate on projects and workshops to deepen your knowledge and
              skills, and to create meaningful solutions to real-world
              challenges. We encourage our members to go beyond the basics and
              delve deeper into their areas of interest. Collaboration signifies
              the exploration of ideas, the creation of innovative solutions,
              and the expansion of one's skill set. Whether it's contributing to
              open-source projects, organizing events, or participating in
              hackathons, we believe in empowering students to elaborate on
              their knowledge and skills, turning theoretical learning into
              practical expertise.
            </p>
          </div>
        )}
      </div>
    </section>
  )
}
