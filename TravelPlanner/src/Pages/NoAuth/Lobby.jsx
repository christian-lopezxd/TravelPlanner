import React from "react";
import Navbar from "../../Components/NoAuth/Navbar/Navbar";
import Welcome from "../../Components/NoAuth/Welcome/Welcome";


const Lobby = () => {



    
    return(
        
        <section className="min-h-screen flex flex-col">
           <Navbar />
          <div className="flex justify-center grow">
          <Welcome />
          </div>

        </section>
    )
}

export default Lobby;