import React from 'react'
import ContinentInfoCard from './ContinentInfoCard/ContinentInfoCard';
import AddContinentCard from '../ContinentContainer/AddContinentCard/AddContinentCard';
import AddCountry from './AddCountry/AddCountry';
import CountryServices from '../../../Services/CountryServices';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ContinentInfoContainer = () => {
  const cid = useParams()
  const [data, setData] = useState("")

  useEffect(() => {
  
    CountryServices.getAll().then((info) => {
      setData(info);
      
    });
  
   
    
  }, []);

 

  return (
    <div className="flex col-span-5 items-center justify-center gap-2  py-5 text-white bg-lightgray min-h-[89.5vh]" >
        <div className='bg-white w-[90%] flex flex-col items-center  gap-4 p-10 min-h-[100%] '>
          <AddCountry/>
          { data ? data.map((country) =>{
          const {name, _id, continent_id} = country;

          if(cid.id == continent_id){
            return( <ContinentInfoCard
              name={name}
              id={_id}
              key={_id}
              />
              );
          }
        }) : ""}
        </div>
     </div>
  )
}

export default ContinentInfoContainer;