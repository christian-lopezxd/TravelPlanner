import React from 'react'
import { GoPlus } from "react-icons/go";
import { NavLink } from 'react-router-dom';


const ContinentCard = (props) => {
  return (
    <div className="flex justify-between items-center w-[100%] bg-white shadow-2xl min-h-[30px] rounded p-3 font-montserrat text-black rounded-xl ">


    <div className='w-[50%] flex items-center gap-4 '>


      <div className='flex flex-col w-[80%]'>
        <h1 className='font-thin'>{props.name}</h1>
        
        
      </div>

    </div>

    <div className='flex gap-2 font-semibold p-2'>
      <NavLink to={`/continent/${props.id}` }><button className='bg-purple hover:bg-darkpurple text-white text-2xl p-2 rounded shadow-2xl'><GoPlus /> </button></NavLink>
    </div>

  </div>
  )
}

export default ContinentCard