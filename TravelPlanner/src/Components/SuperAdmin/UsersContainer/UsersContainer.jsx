import React from 'react'
import UserCard from './UserCard/UserCard'
import { useState, useEffect } from 'react'
import UsersServices from '../../../Services/UsersServices'
const UsersContainer = () => {

  const [users, setUsers] = useState()
  useEffect(() => {

    UsersServices.getUsers().then((info) => {
      setUsers(info);

    });




  }, []);

 


  return (
    <div className="flex col-span-5 items-center justify-center gap-2  py-5 text-white bg-lightgray min-h-[89.5vh]" >
      <div className='bg-white w-[90%] flex flex-col items-center  gap-4 p-10 min-h-[100%] '>
        {
          users ? users.map((user,) => {
            const { name, email, id, picture } = user;
            return (
              <UserCard name={name} email={email} key={email} picture={picture} />
            );
          }) : ""
        }
      </div>
    </div>
  )
}

export default UsersContainer