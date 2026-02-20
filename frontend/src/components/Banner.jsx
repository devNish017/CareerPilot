import React from 'react'
import rightimg from '../assets/right_image.png'
import Cards from './Cards'
import list from "../assets/list.js"
function Banner() {
  return (
    <>
    <div className='grid grid-cols-2 gap-4 container mx-auto mt-10  h-full  '>
    <div> 
        <h2 className='w-50 ml-3 md:w-90  text-3xl md:text-6xl font-bold  mt-10'>Boost Your <span className='text-blue-700'>Placement</span> Success with AI</h2>
        <p className='md:w-90 ml-3 md:text-xl text-gray-500 mt-2.5 font-semibold'> Analyze Resume, Improve ATS Score,Match Jobs,Track Readiness</p>
    </div>
    <div> 
        <img src={rightimg} className='md:h-100 md:w-100  border-b-amber-700'/>
    </div>

    </div>

    {/* Features.... */}
    <div>
      <h2 className='text-black font-bold text-2xl mt-5  ml-3 md:ml-30 text-center md:text-left '> Features</h2>

    {/* Mobile Carousel */}
<div className="md:hidden">
  <div className="carousel w-full">
    {list.map((item) => (
      <div key={item.id} className="carousel-item w-full flex justify-center">
        <Cards
          title={item.title}
          desc={item.desc}
          icon={item.icon}
          className="w-fit"
        />
      </div>
    ))}
  </div>
</div>
            {/* badi devices ke liye  */}
      <div className='hidden md:flex  w-full'
      >
          {
            list.map((item)=>(
              <Cards  
              className='h-100 '


                 key={item.id}
                 icon={item.icon}
                 title={item.title}
                 desc={item.desc}
              
              
              />
            ))
          }
      </div>
    </div>

    </>
  )
}

export default Banner