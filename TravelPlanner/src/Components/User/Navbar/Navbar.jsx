import React from 'react'
import { NavLink } from 'react-router-dom';
import Anchors from './Anchors/Anchors';

const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-5 bg-primary font-montserrat font-thin text-white h-[50px] sticky  top-0">
      <NavLink to="/">TravelPlanner✈</NavLink>
      <Anchors/>

    </div>
  )
}

export default Navbar;