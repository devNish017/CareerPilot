import React from 'react'
import img1 from '../assets/logo1.png'
function Navbar() {
  return (
    <>
    <div>
<div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-blue-400">
        <li><a>Home</a></li>
        <li><a>Contact</a></li>
        <li><a>About</a></li>
        <li><a>Github</a></li>
        
        
      </ul>
    </div>
    <div  className='flex  w-40'> 
      <img className='h-12 w-12 hidden md:block ' src={img1}/>
    <a className="btn btn-ghost text-[14px] md:text-md md:w-fit  font-bold ">AI Resume & Placement Tracker</a>
    </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 text-[15px] font-semibold text-blue-400">
      <li><a>Home</a></li>
        <li><a>Contact</a></li>
        <li><a>About</a></li>
        <li><a>Github</a></li>
      
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn bg-blue-500 rounded-3xl text-white px-2.5 py-2  ">Login/Signup</a>
  </div>
</div>
        
    </div>
    
    </>
  )
}

export default Navbar