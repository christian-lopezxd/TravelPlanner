import React from 'react'
import { useEffect, useState} from 'react';
import AuthServices from '../../../Services/AuthServices';



const ProfileCard = () => {
    
   
  
  return (
    <div className="flex col-span-5 items-center justify-center gap-2  py-5 text-white bg-lightgray min-h-[89.5vh]">
       <div className='bg-white w-[90%] flex flex-col items-center justify-center gap-4 p-10 min-h-[100%] '>

       <div className='w-[30%] h-[30vh]'>
       <img
          src=""
          className="w-full h-full object-fill transition-all transform-gpu scale-100 hover:scale-105"
        />
       </div>

       </div>
    </div>
  )
}

export default ProfileCard