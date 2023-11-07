import React from "react";

const LoginCard = () => {
  return (

    <form className="flex flex-col bg-white px-10 py-10 rounded-3xl  w-1/3 ">
      <h1 className="font-montserrat font-bold text-black text-center text-5xl pb-4 ">
        Login
      </h1>

      <div className=" flex flex-col mt-8 gap-y-2">
        <div className="">
          <div className="text-lg xl:text-base text-black">Email</div>
          <label className="relative block text-black ">
            <span className="absolute inset-y-0 flex text-black items-center">

            </span>
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
          <label className="text-lg xl:text-base text-black">
            Password
          </label>
          <label className="relative block  text-black">
            <span className="absolute inset-y-0 flex items-center text-black">

            </span>
            <input
              name="password"
              className="w-full text-sm p-2 pl-5 bg-transparent border-b border-gray-500 focus:outline-none"
              type="password"
              placeholder="Enter your password"
              required
            />
          </label>
        </div>

        <div>
          <div className="flex justify-center text-white mt-10">
            <button type="submit" className="font-monserrat font-semibold text-white bg-secondary hover:bg-primary py-2 px-4 rounded-2xl w-full text-center">Login</button>
          </div>

        </div>

      </div>

    </form>


  )
}

export default LoginCard;