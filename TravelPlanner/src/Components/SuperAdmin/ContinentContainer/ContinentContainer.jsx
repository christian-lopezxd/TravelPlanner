import React from 'react'
import AddContinentCard from './AddContinentCard/AddContinentCard'
import ContinentCard from './ContinentCard/ContinentCard'
import ContinentServices from '../../../Services/ContinentServices'
import { useEffect, useState } from 'react'

const ContinentContainer = () => {

  const [data, setData] = useState([])

  useEffect(() => {
      
    ContinentServices.getAll().then((info) => {
      setData(info);
      
    });
  
   
    
  }, []);
  
  return (
    <div className="flex col-span-5 items-center justify-center gap-2  py-5 text-white bg-lightgray min-h-[89.5vh]" >
        <div className='bg-white w-[90%] flex flex-col items-center  gap-4 p-10 min-h-[100%] '>
          <AddContinentCard/>
          { data ? data.map((transport) =>{
          const {name, _id} = transport;

          return( <ContinentCard
            name={name}
            id={_id}
            />
            );
        }) : ""}
        </div>
     </div>
  )
}

export default ContinentContainer