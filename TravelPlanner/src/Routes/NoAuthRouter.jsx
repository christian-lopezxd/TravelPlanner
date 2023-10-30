import React from "react";
import { Route, Routes} from "react-router";
import Lobby from "../Pages/NoAuth/Lobby";
import Login from "../Pages/NoAuth/Login";
import Register from "../Pages/NoAuth/Register";


const NoAuthRouter = () => {
    return(
        <Routes>
            <Route path="/" element={<Lobby/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/register" element={<Register/>}></Route>
        </Routes>

    )
}

export default NoAuthRouter;