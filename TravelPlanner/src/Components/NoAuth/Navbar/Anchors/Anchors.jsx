import React from "react";
import { NavLink } from "react-router-dom";

const Anchors = () => {
    return(
        <div className="flex gap-5">
            <NavLink to="/login" > <button className="py-2 px-5 bg-secondary text-black hover:bg-primary rounded-2xl hover:text-white text-lg font-bold "> Login</button> </NavLink>
            <NavLink to="/register" > <button className="py-2 px-5 bg-secondary text-black hover:bg-primary rounded-2xl hover:text-white text-lg font-bold"> Register </button> </NavLink>

        </div>
    )
}

export default Anchors;