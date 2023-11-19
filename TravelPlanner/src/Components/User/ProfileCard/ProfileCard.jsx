import React from 'react'
import { useEffect, useState } from 'react';
import AuthServices from '../../../Services/AuthServices';
import UsersServices from '../../../Services/UsersServices';
import { NavLink } from 'react-router-dom';
import { AiOutlineEdit } from "react-icons/ai";




const ProfileCard = () => {


  const photo = localStorage.getItem("picture")
  const email = localStorage.getItem("email")
  const role = localStorage.getItem("role")
  const ID = localStorage.getItem("id")

  const [data, setData] = useState()
  const [users, setUsers] = useState()

  useEffect(() => {

    UsersServices.getImages(photo).then((info) => {
      setData(info);
    });
  }, []);

  useEffect(() => {

    UsersServices.getUsers().then((info) => {
      setUsers(info);
    });
  }, []);

  console.log(users)


  return (
    <div className="flex col-span-5 items-center justify-center gap-2  py-5 text-black bg-lightgray min-h-[89.5vh]">
      <div className='bg-white w-[90%] flex flex-col items-end  gap-4 p-10 min-h-[100%] font-montserrat font-semibold'>

        <div className='flex w-[100%] justify-between  '>
        <div className='w-[30%] h-[30vh]'>
          <img
            src={data}
            className="w-full h-full object-fill "
          />
        </div>
        <div className='w-[40%] flex flex-col '>
          <div className='flex justify-between'>
            <h1>email: </h1>
            <h1>{email}</h1>
          </div>
          <div className='flex justify-between'>
            <h1>role: </h1>
            <h1>{role}</h1>
          </div>
          <div className='flex justify-between'>
            <h1>id: </h1>
            <h1>{ID}</h1>
          </div>

        </div>
        </div>
        <NavLink to="/Profile/edit"> <button className='bg-purple flex items-center gap-2 hover:bg-darkpurple text-white text-2xl px-2 py-1 rounded shadow'>Edit profile <AiOutlineEdit/> </button></NavLink>
      </div>
    </div>
  )
}

export default ProfileCard