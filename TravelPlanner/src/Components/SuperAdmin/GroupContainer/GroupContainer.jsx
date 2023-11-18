import React from 'react'
import { useEffect, useState } from 'react'
import GroupServices from '../../../Services/GroupServices'

import GroupCard from './GroupCard/GroupCard'

const GroupContainer = () => {
  const [data, setData] = useState("")

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

    
    <div className='flex flex-wrap justify-center w-[100%] h-[30vh] p-5 gap-1'>
    { data ? data.map((transport) =>{
          const {name, _id} = transport;

          return( <GroupCard
            name={name}
            id={_id}
            />
            );
        }) : ""}
    </div>
    </div>
   

   

   
   </div>
  )
}

export default GroupContainer