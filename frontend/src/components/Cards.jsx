import React from 'react'

function Cards(props) {
  return (
   <>
   <div>

      <div className="card bg-base-100 w-70 mx-3.5 shadow-sm mt-3.5 transition duration-300 ease-in-out hover:scale-110 cursor-pointer">
  <div className="card-body">
    <img src={props.icon} className='h-15 w-15 mx-auto'/>
    <h2 className="card-title">{props.title}</h2>
    <p>{props.desc}</p>
    
  </div>
</div>

   </div>
   
   </>
  )
}

export default Cards