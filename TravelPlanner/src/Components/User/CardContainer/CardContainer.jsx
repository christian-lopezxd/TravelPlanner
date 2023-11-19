import React from 'react'
import TripCard from './TripCard/TripCard'
import { NavLink } from 'react-router-dom'


const CardContainer = () => {
  return (
    <div className="flex col-span-5 items-center justify-center gap-2  py-5 text-white bg-lightgray min-h-[89.5vh]" > 
     <div className='bg-white w-[90%] flex flex-col items-center justify-center gap-4 p-10 '>
    
      <TripCard/>
      <TripCard/>
     
     </div>
    </div>
  )
}

export default CardContainer