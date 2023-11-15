import React from 'react'
import { NavLink } from 'react-router-dom'

const ActionButton = (props) => {
  return (
   <NavLink to={`/${props.url}`} className="hover:bg-black min-w-[50%]">
     <div className='flex  items-center justify-center gap-2 text-white font-montserrat font-semibold px-10 py-3 text-3xl text-left'>
         <div>{props.icon}</div>
        <div className='min-w-[75%]'><h1>{props.name}</h1></div>
    </div>
   </NavLink>
  )
}

export default ActionButton