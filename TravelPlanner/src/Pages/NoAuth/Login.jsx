import React from "react";
import Navbar from "../../Components/NoAuth/Navbar/Navbar";
import LoginCard from "../../Components/NoAuth/LoginCard/LoginCard";

const Login = () => {
    return (
        <section className="min-h-screen flex flex-col">
            <Navbar />
            <div className=" flex grow items-center justify-center bg-lightgray ">
            <LoginCard/>
            </div>
           

        </section>
    )
}

export default Login;