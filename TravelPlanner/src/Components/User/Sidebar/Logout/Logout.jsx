import React from 'react'
import { BiLogOut } from "react-icons/bi";
const Logout = () => {
  return (
    <button className="hover:bg-black w-full">
        <div className='flex  items-center justify-center gap-2 text-white font-montserrat font-semibold px-10 py-3 text-3xl text-left'>
         <div><BiLogOut/></div>
        <div className='min-w-[75%]'><h1>Logout</h1></div>
    </div>
    </button>
  )
}

export default Logout;