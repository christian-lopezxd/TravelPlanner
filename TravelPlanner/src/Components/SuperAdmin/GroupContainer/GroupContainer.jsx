import React from 'react'
import { useEffect, useState } from 'react'
import GroupServices from '../../../Services/GroupServices'

import GroupCard from './GroupCard/GroupCard'

const GroupContainer = () => {
  const [data, setData] = useState("")

  useEffect(() => {
      
    GroupServices.getAllunaproved().then((info) => {
      setData(info);
      
    });
  
   
    
  }, []);

  console.log(data)
 
  return (
    <div className="flex col-span-5 items-center justify-center gap-2  py-5 text-white bg-lightgray min-h-[89.5vh]" > 
    <div className='bg-white w-[90%] flex flex-col items-center  gap-4  min-h-[100%] '>
    <div className='bg-primary w-full flex h-[10vh] items-center p-5 font-montserrat font-semibold text-xl'> Unapproved Groups </div>

    
    <div className='flex flex-wrap justify-center w-[100%] p-5 gap-1'>
    { data ? data.map((transport) =>{
          const {name, _id, picture,description, budget, begin_date, end_date} = transport;

          return( <GroupCard
            name={name}
            key={_id}
            id={_id}
            picture ={picture}
            description={description}
            budget={budget}
            begin_date = {begin_date}
            end_date = {end_date}
            />
            );
        }) : ""}
    </div>
    </div>
   

   

   
   </div>
  )
}

export default GroupContainer