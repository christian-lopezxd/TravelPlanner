import React from "react";
import Anchors from "./Anchors/Anchors";
import { NavLink } from "react-router-dom";


const Navbar =()=>{
    return(
        <div className="flex justify-between items-center px-5 bg-primary font-barlow font-thin text-white h-[10.5vh] sticky top-0 z-[99]">
            <NavLink to="/" className="font-semibold text-secondary text-2xl">✈ TravelPlanner</NavLink>
            <Anchors/>

        </div>
    )
}

export default Navbar;