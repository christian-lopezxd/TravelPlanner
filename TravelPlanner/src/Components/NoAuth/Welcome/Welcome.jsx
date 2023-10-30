import React from "react";

const Welcome = () => {
    return(
        <div className="flex items-center justify-between grow gap-4 pl-5 bg-secondary">
            <h1 className="font-bold font-montserrat text-left text-6xl "> All <br/> your <br/> dreams in <br/>one place.</h1>
        
            <img src="./public/Images/pinboard.jpg" className="max-h-[93.1vh] drop-shadow-2xl" />
            </div>
    )
}

export default Welcome;