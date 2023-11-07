import React from 'react'
import { NavLink } from 'react-router-dom'

const Anchors = () => {
  return (
    <div className="flex gap-5">
        <NavLink to="/Add"><button className="p-2 hover:bg-secondary rounded hover:text-white">Add</button> </NavLink>

    </div>
  )
}

export default Anchors;