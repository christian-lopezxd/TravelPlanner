import React from "react";
import { Route, Routes} from "react-router";
import Home from "../Pages/User/Home";
import Groups from "../Pages/User/Groups";
import Friends from "../Pages/User/Friends";
import CreateTrip from "../Pages/User/CreateTrip";
import TripInfo from "../Pages/User/TripInfo";
import GroupInfo from "../Pages/User/GroupInfo";
import EditGroup from "../Pages/User/EditGroup";
import EditTrip from "../Pages/User/EditTrip";
import CreateGroup from "../Pages/User/CreateGroup";
import Profile from "../Pages/User/Profile";
import EditProfile from "../Pages/User/EditProfile";


const UserRouter = () => {
    return(
        <Routes>
            <Route path="/" element={<Groups/>}></Route>
            <Route path="/group/:id/NewTrip" element={<CreateTrip/>}></Route>
            <Route path="/EditTrip/:id" element={<EditTrip/>}></Route>
            <Route path="/Trip/:id" element={<TripInfo/>}></Route>
            <Route path="/groups" element={<Groups/>}></Route>
            <Route path="/NewGroup" element={<CreateGroup/>}></Route>
            <Route path="/group/:id" element={<GroupInfo/>}></Route>
            <Route path="/EditGroup/:id" element={<EditGroup/>}></Route>
            <Route path="/friends" element={<Friends/>}></Route>
            <Route path="/profile" element={<Profile/>}></Route>
            <Route path="/profile/edit" element={<EditProfile/>}></Route>
            
        </Routes>

    )
}

export default UserRouter;