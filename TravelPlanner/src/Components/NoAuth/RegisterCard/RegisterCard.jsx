import React from "react";
import { useState } from "react"
import { useNavigate } from "react-router-dom";
import AuthServices from "../../../Services/AuthServices";

const RegisterCard = () => {

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [picture, setPicture] = useState([]);

  const Create = (e) => {
    e.preventDefault();

    if (password == repeatPassword) {
      const formData = new FormData();
  formData.append('name', name);
  formData.append('email', email);
  formData.append("password", password)
  formData.append("role", "user")
  formData.append("picture", picture)
 

  AuthServices.Register(formData, navigate);
      
      setName("");
      setEmail("");
      setPassword("");
      setRepeatPassword("");
    } else {
      alert("Contraseñas no coinciden");
    }

    if (!name || !email || !password || !repeatPassword || !picture) {
      alert("faltan argumentos");
      return;
    }


    
  };


  return (
    <form onSubmit={(e) => Create(e)} className="flex flex-col bg-white px-10 py-10 rounded-3xl text-sm  w-[33vw] " >
      <h1 className="text-black font-barlow font-semibold text-center text-3xl">
        ✈ TravelPlanner
      </h1>

      <div className="text-sm  flex flex-col mt-8 gap-y-5">
        <div className="">
          <div className=" text-grissoft">Name</div>
          <label className="relative block text-grissoft ">
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full text-sm p-2 pl-5 pr-3 bg-transparent border-b border-gray-500 focus:outline-none"
              type="name"
              placeholder="Enter your username"
              maxLength="15"
              required
            />
          </label>
        </div>
        <div className="">
          <div className=" text-grissoft">Email</div>
          <label className="relative block text-grissoft ">
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              name="email"
              className="w-full text-sm p-2 pl-5 pr-3 bg-transparent border-b border-gray-500 focus:outline-none"
              type="email"
              placeholder="Enter your email adress"
              required
            />
          </label>
        </div>

        <div className="">
          <label className=" text-grissoft">Password</label>
          <label className="relative block  text-grissoft">

            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}

              pattern="^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_+{}[\]:;\'<>,.?/\\|]).{8,30}$"
              title="La contraseña debe tener al menos 8 caracteres, incluyendo una minúscula, una mayúscula, un número y un carácter especial."
              name="password"
              className="w-full text-sm p-2 pl-5 bg-transparent border-b border-gray-500 focus:outline-none"
              type="password"
              placeholder="Enter your password"
              required
            />
          </label>
        </div>

        <div className="">
          <label className="text-grissoft">Repeat Password</label>
          <label className="relative block  text-grissoft">
            <input
              value={repeatPassword}
              onChange={(e) => setRepeatPassword(e.target.value)}
              name="password"
              pattern="^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_+{}[\]:;\'<>,.?/\\|]).{8,30}$"
              title="La contraseña debe tener al menos 8 caracteres, incluyendo una minúscula, una mayúscula, un número y un carácter especial."
              className="w-full text-sm p-2 pl-5 bg-transparent border-b border-gray-500 focus:outline-none"
              type="password"
              placeholder="Enter your password again"
              required
            />
          </label>
        </div>
        <div className="flex flex-col gap-2">
        <label className="text-grissoft">Profile Picture</label>
        <input onChange={(e) => setPicture(e.target.files[0])} type="file" accept="image/jpeg" multiple className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-purple file:text-white hover:file:bg-darkpurple  " placeholder="Enter group name"></input>
        </div>

        <div className="flex justify-center">

          <button type="submit" className="font-monserrat font-semibold text-black bg-secondary hover:bg-primary py-2 px-4 rounded-2xl w-full text-center hover:text-white">Register</button>
        </div>
      </div>
    </form>
  )
}

export default RegisterCard;