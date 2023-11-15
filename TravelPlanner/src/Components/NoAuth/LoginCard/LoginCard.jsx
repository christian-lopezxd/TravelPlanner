import React from "react";
import AuthServices from "../../../Services/AuthServices";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
const LoginCard = () => {

  const navigate = useNavigate()
  

  const [ide, setIde] = useState("");
  const [idp, setIdp] = useState("");
    


  const Create = (e) => {
      e.preventDefault();

      if(!ide || !idp){
          alert("Ingresa credenciales validas")
          return;
      }

    
      
      AuthServices.login(ide, idp, navigate)

      
      
    }


  
  return (

    <form onSubmit={(e) => Create(e)} className="flex flex-col bg-white px-10 py-10 rounded-3xl  w-[33vw] shadow-md	 ">
      <h1  className="text-black font-barlow font-semibold text-center text-3xl">
      ✈ TravelPlanner
      </h1>

      <div className=" flex flex-col mt-8 gap-y-2">
        <div className="">
          <div className="text-lg xl:text-base text-black">Email</div>
          <label className="relative block text-black ">
            <span className="absolute inset-y-0 flex text-black items-center">

            </span>
            <input
              name="email"
              value={ide}
              onChange={(e) => setIde(e.target.value)}
              className="w-full text-sm p-2 pl-5 pr-3 bg-transparent border-b border-gray-500 focus:outline-none"
              type="email"
              placeholder="Enter your email adress"
              required
            />
          </label>
        </div>

        <div className="">
          <label className="text-lg xl:text-base text-black">
            Password
          </label>
          <label className="relative block  text-black">
            <span className="absolute inset-y-0 flex items-center text-black">

            </span>
            <input
              name="password"
              value={idp}
              onChange={(e) => setIdp(e.target.value)}
              className="w-full text-sm p-2 pl-5 bg-transparent border-b border-gray-500 focus:outline-none"
              type="password"
              placeholder="Enter your password"
              required
            />
          </label>
        </div>

        <div>
          <div className="flex justify-center  mt-10">
            <button type="submit" className="font-monserrat font-semibold text-black bg-secondary hover:bg-primary py-2 px-4 rounded-2xl w-full text-center hover:text-white">Login</button>
          </div>

        </div>

      </div>

    </form>


  )
}

export default LoginCard;