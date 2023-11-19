import { BrowserRouter } from "react-router-dom";
import NoAuthRouter from "./NoAuthRouter";
import SuperAdminRouter from "./SuperAdminRouter";
import UserRouter from "./UserRouter";
import { useState, useEffect } from "react";
import jwt_decode from "jwt-decode";

const MainRouter = () => {
    const token = localStorage.getItem("token");
    const [userRole, setUserRole] = useState(null);

    useEffect(() => {
        if (token) {
            try {
                const decoded = jwt_decode(token);
                localStorage.setItem("role", decoded.user.role )
                localStorage.setItem("id", decoded.user._id )
                if (decoded && decoded.user && decoded.user.role) {
                    setUserRole(decoded.user.role);
                }
            } catch (error) {
                console.error("Error decoding token:", error);
                // Manejar el error según sea necesario
            }
        }
    }, [token]);

    return (
        <BrowserRouter>
            {!token && <NoAuthRouter />}
            {token && userRole === 'admin' && <SuperAdminRouter />}
            {token && userRole === 'user' && <UserRouter />}
        </BrowserRouter>
    );
}

export default MainRouter
