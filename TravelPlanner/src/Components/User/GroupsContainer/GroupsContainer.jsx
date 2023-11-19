import React from 'react'
import GroupCard from './GroupCard/GroupCard'
import { NavLink } from 'react-router-dom'
import { useEffect } from 'react'
import { useState } from 'react'
import GroupServices from '../../../Services/GroupServices'
const GroupsContainer = () => {

  const [data, setData] = useState(null)

  useEffect(() => {
      
    GroupServices.getAll().then((info) => {
      setData(info);
      
    });
  
   
    
  }, []);
  

console.log(data)

  return (
    <div className="flex col-span-5 items-center justify-center gap-2  py-5 text-white bg-lightgray min-h-[89.5vh]" > 
     <div className='bg-white w-[90%] flex flex-col items-center  gap-4  min-h-[100%] '>
     <div className='bg-primary w-full h-[10vh]'> </div>
     <NavLink to="/NewGroup"> <button className='bg-purple hover:bg-darkpurple text-white text-2xl px-2 py-1 rounded shadow'>+ New Group</button></NavLink>

     
     <div className='flex flex-wrap justify-center w-[100%] p-5 gap-1'>
      {
        data ? data.map((group, ) =>{
          const {name, picture, _id, aproved} = group;

          if(aproved == true){
            return( <GroupCard 
              key={name}
              name={name}
              picture={picture} 
              id = {_id}/>
              );
          }
        }) : ""
      }
     </div>
     </div>
    

    

    
    </div>
  )
}

export default GroupsContainer