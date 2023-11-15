import React from 'react'
import { BiLogOut } from "react-icons/bi";
import { useNavigate } from "react-router"

const Logout = () => {
  const navigate = useNavigate()
  const logOut=()=>{
        localStorage.removeItem("token")
        navigate("/")
        window.location.reload()
    }




  return (
    <button className="hover:bg-black w-full" onClick={logOut}>
        <div className='flex  items-center justify-center gap-2 text-white font-montserrat font-semibold px-10 py-3 text-3xl text-left'>
         <div><BiLogOut/></div>
        <div className='min-w-[75%]'><h1>Logout</h1></div>
    </div>
    </button>
  )
}

export default Logout;