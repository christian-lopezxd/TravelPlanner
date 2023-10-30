import React from "react";
import Anchors from "./Anchors/Anchors";
import { NavLink } from "react-router-dom";


const Navbar =()=>{
    return(
        <div className="flex justify-between items-center px-5 bg-primary font-montserrat font-thin text-white h-[50px]">
            <NavLink to="/">TravelPlanner✈</NavLink>
            <Anchors/>

        </div>
    )
}

export default Navbar;