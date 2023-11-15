import { BrowserRouter } from "react-router-dom";
import NoAuthRouter from "./NoAuthRouter";
import AdminRouter from "./AdminRouter";
import SuperAdminRouter from "./SuperAdminRouter";
import UserRouter from "./UserRouter";
import { useState } from "react";



const MainRouter = () => {

    const token = localStorage.getItem("token");


    return (
        <BrowserRouter>
            {!token && <NoAuthRouter />}
            {token && <UserRouter />}

        </BrowserRouter>
    )
}

export default MainRouter;