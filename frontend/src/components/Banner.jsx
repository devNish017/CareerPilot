import React from 'react'
import rightimg from '../assets/right_image.png'

import Cards from './Cards'
function Banner() {
  return (
    <>
    <div className='grid grid-cols-2 gap-4 container mx-auto mt-15  h-full  border-2'>
    <div> 
        <h2 className='w-50 ml-3 md:w-90  text-3xl md:text-6xl font-bold  mt-10'>Boost Your <span className='text-blue-700'>Placement</span> Success with AI</h2>
        <p className='md:w-90 ml-3 md:text-xl text-gray-500 mt-2.5 font-semibold'> Analyze Resume, Improve ATS Score,Match Jobs,Track Readiness</p>
    </div>
    <div> 
        <img src={rightimg} className='md:h-100 md:w-100  border-b-amber-700'/>
    </div>

    </div>

    </>
  )
}

export default Banner