import React from 'react'
import UserCard from './UserCard/UserCard'

const UsersContainer = () => {
  return (
    <div className="flex col-span-5 items-center justify-center gap-2  py-5 text-white bg-lightgray min-h-[89.5vh]" > 
     <div className='bg-white w-[90%] flex flex-col items-center  gap-4 p-10 min-h-[100%] '>
      <UserCard/>
     </div>
    </div>
  )
}

export default UsersContainer