import React from 'react'
import UsersServices from '../../../Services/UsersServices';
import { useState, useEffect } from 'react';
import ReportsCard from './ReportsCard/ReportsCard';

const ReportsContainer = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        
      UsersServices.getAllReported().then((info) => {
        setData(info);
        
      });
    
     
      
    }, []);
    

  return (
    <div className="flex col-span-5 items-center justify-center gap-2  py-5 text-white bg-lightgray min-h-[89.5vh]" > 
    <div className='bg-white w-[90%] flex flex-col items-center  gap-4  min-h-[100%] '>
    <div className='bg-primary w-full flex h-[10vh] items-center p-5 font-montserrat font-semibold text-xl'> Reported Users</div>
    
    <div className='flex flex-wrap justify-center w-[100%] p-5 gap-1'>

    { data ? data.map((user) =>{
          const {email, _id, reason,user_id,} = user;

          return( <ReportsCard
            email={email}
            id={_id}
            key={_id}
            reason = {reason}
            user_id = {user_id}
            />
            );
        }) : ""}
    </div>
    </div>
   

   

   
   </div>
  )
}

export default ReportsContainer