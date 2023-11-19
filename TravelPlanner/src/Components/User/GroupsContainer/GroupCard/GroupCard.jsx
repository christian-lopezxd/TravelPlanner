import React from 'react';
import { NavLink } from 'react-router-dom';
import { AiOutlineEdit } from "react-icons/ai";
import { BsTrash3 } from "react-icons/bs";
import { AiOutlineTeam } from "react-icons/ai";
import GroupServices from '../../../../Services/GroupServices';
import { useState } from 'react';
import { useEffect } from 'react';


const GroupCard = (props) => {


  const [data, setData] = useState()

  useEffect(() => {
      
    GroupServices.getImages(props.id, props.picture).then((info) => {
      setData(info);

      
    });
  
   
    
  }, []);
 
  const deleteGroup = () =>{
    GroupServices.Delete(props.id);
  }
  return (
    <div className='w-[30%] h-[30vh] relative group '>
      <div className='w-full h-[100%] relative overflow-hidden rounded'>
        <img
          src={data}
          className="w-full h-full object-fill transition-all transform-gpu scale-100 hover:scale-105"
        />
        <div className='flex flex-col  gap-4 absolute inset-0 p-4 bg-black text-white bg-opacity-50 transition-all transform-gpu opacity-0 group-hover:opacity-100 font-montserrat justify-center items-center'>
          <p>{props.name}</p>
          <div>
            <div className='flex gap-2 font-semibold p-2'>
              <NavLink to={`/group/${props.id}`}><button className='bg-purple hover:bg-darkpurple text-white text-2xl p-2 rounded shadow-2xl'><AiOutlineTeam /></button></NavLink>
              <NavLink to={`/editGroup/${props.id}`}><button className='bg-purple hover:bg-darkpurple text-white text-2xl p-2 rounded shadow-2xl'><AiOutlineEdit /></button></NavLink>
              <button className='bg-purple hover:bg-darkpurple text-white text-2xl p-2 rounded shadow-2xl' onClick={deleteGroup}><BsTrash3 /> </button>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GroupCard;
