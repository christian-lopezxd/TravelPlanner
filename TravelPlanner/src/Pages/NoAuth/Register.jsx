import React from "react";
import Navbar from "../../Components/NoAuth/Navbar/Navbar";
import RegisterCard from "../../Components/NoAuth/RegisterCard/RegisterCard";

const Register = () => {
    return(
        <section className="min-h-screen flex flex-col">
            <Navbar />
           <div className=" flex grow items-center justify-center bg-lightgray ">
           <RegisterCard/>
           </div>

        </section>
    )
}

export default Register;