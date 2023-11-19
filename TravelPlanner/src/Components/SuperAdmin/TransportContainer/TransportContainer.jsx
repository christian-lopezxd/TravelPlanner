import React from 'react'
import AddTransportCard from './AddTransportCard/AddTransportCard'
import TransportCard from './TransportCard/TransportCard'
import TransportServices from '../../../Services/TransportServices'
import { useState, useEffect } from 'react'

const TransportContainer = () => {
    const [data, setData] = useState([])

  useEffect(() => {
      
    TransportServices.getAll().then((info) => {
      setData(info);
      
    });
  
   
    
  }, []);



    return (
        <div className="flex col-span-5 items-center justify-center gap-2  py-5 text-white bg-lightgray min-h-[89.5vh]" >
            <div className='bg-white w-[90%] flex flex-col items-center  gap-4 p-10 min-h-[100%] '>
                <AddTransportCard/>
                { data ? data.map((transport) =>{
          const {name, _id} = transport;

          return( <TransportCard
            name={name}
            key={_id}
            />
            );
        }) : ""}
    
            </div>
         </div>
      )
}

export default TransportContainer