import React from 'react'
import { FaBan } from "react-icons/fa";
import { useState, useEffect } from 'react';
import FriendServices from '../../../../Services/FriendServices';
import UsersServices from '../../../../Services/UsersServices';

const UserCard = (props) => {


  const [data, setData] = useState()

  useEffect(() => {
      
    FriendServices.getImages(props.picture).then((info) => {
      setData(info);
    });
  }, []);


const ban = () => {
  UsersServices.ban(props.email)
}

  return (
    <div className="flex justify-between items-center w-[100%] bg-white shadow-2xl min-h-[30px] rounded p-3 font-montserrat text-black rounded-xl ">


    <div className='w-[50%] flex items-center gap-4 '>

      <div className="w-20 h-20 rounded-full overflow-hidden">
        <img
          src={data}
          alt="Imagen"
          className="w-full h-full object-cover"
          
        />
      </div>

      <div className='flex flex-col w-[80%]'>
        <h1 className='font-thin'>{props.name}</h1>
        <h1 className='font-semibold'>{props.email}</h1>
        
      </div>

    </div>




    <div className='flex gap-2 font-semibold p-2'>
      <button className='bg-red hover:bg-darkred text-white text-2xl p-2 rounded shadow-2xl' onClick={ban}><FaBan /> </button>
    </div>

  </div>
  )
}

export default UserCard