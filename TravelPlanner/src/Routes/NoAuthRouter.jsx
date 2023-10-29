import React from "react";
import { Route, Routes} from "react-router";
import Lobby from "../Pages/NoAuth/Lobby";


const NoAuthRouter = () => {
    return(
        <Routes>
            <Route path="/" element={<Lobby/>}></Route>
        </Routes>

    )
}

export default NoAuthRouter;