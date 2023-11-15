import React from 'react'
import { NavLink } from 'react-router-dom';


const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-5 bg-primary font-montserrat font-thin text-white h-[10.5vh] sticky  top-0 shadow-md z-[99]">
      <NavLink to="/" className='font-semibold text-secondary text-2xl'>TravelPlanner✈</NavLink>

    </div>
  )
}

export default Navbar;