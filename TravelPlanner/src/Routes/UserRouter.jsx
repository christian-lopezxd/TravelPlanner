import React from "react";
import { Route, Routes} from "react-router";
import Home from "../Pages/User/Home";


const UserRouter = () => {
    return(
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/add" element={<Home/>}></Route>
        </Routes>

    )
}

export default UserRouter;