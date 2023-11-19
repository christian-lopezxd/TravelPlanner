import React from "react";
import { Route, Routes} from "react-router";
import Groups from "../Pages/SuperAdmin/Groups";
import Continents from "../Pages/SuperAdmin/Continents";
import ContinentInfo from "../Pages/SuperAdmin/ContinentInfo";
import Friends from "../Pages/SuperAdmin/Friends";
import Transport from "../Pages/SuperAdmin/Transport";
import Users from "../Pages/SuperAdmin/Users";
import Profile from "../Pages/SuperAdmin/Profile";
import EditProfile from "../Pages/SuperAdmin/EditProfile";


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
            <Route path="/Profile" element={<Profile/>}></Route>
            <Route path="/Profile/edit" element={<EditProfile/>}></Route>
        </Routes>

    )
}

export default SuperAdminRouter;