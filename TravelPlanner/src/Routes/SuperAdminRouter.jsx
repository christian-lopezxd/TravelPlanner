import React from "react";
import { Route, Routes} from "react-router";
import Groups from "../Pages/SuperAdmin/Groups";
import Continents from "../Pages/SuperAdmin/Continents";
import ContinentInfo from "../Pages/SuperAdmin/ContinentInfo";
import Friends from "../Pages/SuperAdmin/Friends";
import Transport from "../Pages/SuperAdmin/Transport";
import Users from "../Pages/SuperAdmin/Users";


const SuperAdminRouter = () => {
    return(
        <Routes>
            <Route path="/" element={<Groups/>}></Route>
            <Route path="/continents" element={<Continents/>}></Route>
            <Route path="/continent/:id" element={<ContinentInfo/>}></Route>
            <Route path="/groups" element={<Groups/>}></Route>
            <Route path="/transport" element={<Transport/>}></Route>
            <Route path="/users" element={<Users/>}></Route>
            <Route path="/friends" element={<Friends/>}></Route>
        </Routes>

    )
}

export default SuperAdminRouter;