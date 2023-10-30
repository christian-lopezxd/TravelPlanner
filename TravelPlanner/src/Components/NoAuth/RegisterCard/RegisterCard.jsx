import React from "react";

const RegisterCard = () => {
    return(
        <form className="flex flex-col bg-white px-10 py-10 rounded-3xl text-sm  w-1/3 md:w-screen sm:w-3/4 sm:m-2 xl:w-1/2 ">
      <h1 className="font-montserrat font-bold text-grissoft text-center text-5xl pb-4">
        Register
      </h1>

      <div className="text-sm  flex flex-col mt-8 gap-y-5">
        <div className="">
          <div className=" text-grissoft">Full name</div>
          <label className="relative block text-grissoft ">
            

            <input
              
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
        <button
          type="submit"
          className="font-monserrat font-semibold text-white bg-[#1b2632] hover:bg-black py-2 px-4 rounded-2xl w-full text-center"
        >
          Register
        </button>
      </div>
    </form>
    )
}

export default RegisterCard;