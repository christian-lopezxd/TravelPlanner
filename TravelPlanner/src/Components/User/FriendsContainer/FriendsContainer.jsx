import React from 'react'
import FriendCard from './FriendCard/FriendCard'
import AddFriendCard from './AddFriendCard/AddFriendCard'
import FriendServices from '../../../Services/FriendServices'
import { useState } from 'react'
import { useEffect } from 'react'

const FriendsContainer = () => {
  const [data, setData] = useState([])

  useEffect(() => {
      
    FriendServices.getAll().then((info) => {
      setData(info);
      
    });
  
   
    
  }, []);




  return (
    <div className="flex col-span-5 items-center justify-center gap-2  py-5 text-white bg-lightgray min-h-[89.5vh]" > 
     <div className='bg-white w-[90%] flex flex-col items-center  gap-4 p-10 min-h-[100%] '>
      <AddFriendCard/>
      { data ? data.map((friend) =>{
          const {name, email, picture} = friend;

          return( <FriendCard 
            key={name}
            name={name}
            email={email}
            picture={picture} 
            />
            );
        }) : ""}
     </div>
    </div>
  )
}

export default FriendsContainer