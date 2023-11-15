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

  const Create = (e) => {
    e.preventDefault();

    if (password == repeatPassword) {
      AuthServices.Register(name, email, password, navigate);
      setName("");
      setEmail("");
      setPassword("");
      setRepeatPassword("");
    } else {
      alert("Contraseñas no coinciden");
    }

    if (!name || !email || !password || !repeatPassword) {
      alert("faltan argumentos");
      return;
    }


    const formData = new FormData();
  formData.append('name', name);
  formData.append('email', email);
  formData.append("password", password)
 

  AuthServices.Register(formData, navigate);
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

              pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*,;.?¿])[a-zA-Z\d!@#$%^&*,;.?¿]{8,}$"
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
              pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*,;.?¿])[a-zA-Z\d!@#$%^&*,;.?¿]{8,}$"
              title="La contraseña debe tener al menos 8 caracteres, incluyendo una minúscula, una mayúscula, un número y un carácter especial."
              className="w-full text-sm p-2 pl-5 bg-transparent border-b border-gray-500 focus:outline-none"
              type="password"
              placeholder="Enter your password again"
              required
            />
          </label>
        </div>
        <div className="flex justify-center">
          <button type="submit" className="font-monserrat font-semibold text-black bg-secondary hover:bg-primary py-2 px-4 rounded-2xl w-full text-center hover:text-white">Login</button>
        </div>
      </div>
    </form>
  )
}

export default RegisterCard;