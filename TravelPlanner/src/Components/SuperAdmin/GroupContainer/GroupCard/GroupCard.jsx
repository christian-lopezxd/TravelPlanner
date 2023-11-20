import React from 'react';
import { useState, useEffect } from 'react';
import GroupServices from '../../../../Services/GroupServices';
import { FaCheck } from "react-icons/fa6";
import { BsTrash3 } from "react-icons/bs";




const GroupCard = (props) => {

  

  const [images, setImages] = useState()

  useEffect(() => {
        
    GroupServices.getImages(props.id, props.picture).then((info) => {
      setImages(info);
      
    });
    
  
   
    
  }, []);

  const toggle = () =>{
    GroupServices.toggleApproved(props.id)
  }

  const deleteGroup = () => {
    GroupServices.Delete(props.id)
  }
  
  return (
    <div className="flex justify-between items-center w-[100%] bg-white shadow-2xl min-h-[30px] rounded p-3 font-montserrat text-black rounded-xl ">


    <div className='w-[50%] flex items-center gap-4 '>

      <div className="w-20 h-20 rounded-full overflow-hidden">
        <img
          src={images}
          alt="Imagen"
          className="w-full h-full object-cover"
          
        />
      </div>

      <div className='flex flex-col w-[80%]'>
        <h1 className='font-semibold text-lg'>{props.name}</h1>
        <h1 className='font-thin'>{props.description}</h1>
        <h1 className='font-thin'>${props.budget}</h1>
        <h1 className='font-thin'>{props.begin_date} </h1>
   
        
      </div>

    </div>




    <div className='flex gap-2 font-semibold p-2'>
      <button className='bg-green hover:bg-darkgreen text-white text-2xl p-2 rounded shadow-2xl' onClick={toggle}><FaCheck/></button>
      <button className='bg-red hover:bg-darkred text-white text-2xl p-2 rounded shadow-2xl' onClick={deleteGroup}><BsTrash3/> </button>
    </div>

  </div>
  )
}

export default GroupCard