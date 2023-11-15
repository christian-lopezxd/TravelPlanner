import React from 'react'
import FriendCard from './FriendCard/FriendCard'
import AddFriendCard from './AddFriendCard/AddFriendCard'
import FriendService from '../../../Services/FriendServices'
import { useState } from 'react'
import { useEffect } from 'react'

const FriendsContainer = () => {
  const [data, setData] = useState([])

  useEffect(() => {
      
    FriendService.getAll().then((info) => {
      setData(info);
      
    });
  
   
    
  }, []);
  

console.log(data)




  return (
    <div className="flex col-span-5 items-center justify-center gap-2  py-5 text-white bg-lightgray min-h-[89.5vh]" > 
     <div className='bg-white w-[90%] flex flex-col items-center justify-center gap-4 p-10 '>
      <AddFriendCard/>
      <FriendCard name={data.friends}/>
     </div>
    </div>
  )
}

export default FriendsContainer