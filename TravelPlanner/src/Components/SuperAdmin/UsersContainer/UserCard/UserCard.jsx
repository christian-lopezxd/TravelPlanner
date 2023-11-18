import React from 'react'
import { GoGear } from "react-icons/go";
import { useState, useEffect } from 'react';

const UserCard = () => {
  return (
    <div className="flex justify-between items-center w-[100%] bg-white shadow-2xl min-h-[30px] rounded p-3 font-montserrat text-black rounded-xl ">


    <div className='w-[50%] flex items-center gap-4 '>

      <div className="w-20 h-20 rounded-full overflow-hidden">
        <img
          src=""
          alt="Imagen"
          className="w-full h-full object-cover"
          onError={(e) => { 
            e.target.onerror = null; 
            e.target.src = 'https://i0.wp.com/conference.nbasbl.org/wp-content/uploads/2022/05/placeholder-image-1.png?ssl=1'; 
          }}
        />
      </div>

      <div className='flex flex-col w-[80%]'>
        <h1 className='font-thin'>name</h1>
        <h1 className='font-semibold'>email</h1>
        
      </div>

    </div>




    <div className='flex gap-2 font-semibold p-2'>
      <button className='bg-purple hover:bg-darkpurple text-white text-2xl p-2 rounded shadow-2xl'><GoGear /> </button>
    </div>

  </div>
  )
}

export default UserCard