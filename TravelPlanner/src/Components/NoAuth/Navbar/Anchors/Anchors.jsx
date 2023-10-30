import React from "react";
import { NavLink } from "react-router-dom";

const Anchors = () => {
    return(
        <div className="flex gap-5">
            <NavLink to="/login" > <button className="p-2 hover:bg-secondary rounded hover:text-white"> Login</button> </NavLink>
            <NavLink to="/register" > <button className="p-2 hover:bg-secondary rounded hover:text-white"> Register </button> </NavLink>

        </div>
    )
}

export default Anchors;