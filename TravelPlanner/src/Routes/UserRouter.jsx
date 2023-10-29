import React from "react";
import { Route, Routes} from "react-router";


const UserRouter = () => {
    return(
        <Routes>
            <Route path="/" element={<Lobby/>}></Route>
        </Routes>

    )
}

export default UserRouter;