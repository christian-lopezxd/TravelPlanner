import React from 'react';
import { NavLink } from 'react-router-dom';
import { AiOutlineEdit } from "react-icons/ai";
import { BsTrash3 } from "react-icons/bs";
import { AiOutlineTeam } from "react-icons/ai";
import GroupServices from '../../../../Services/GroupServices';
import { useState } from 'react';


const GroupCard = (props) => {

 
  return (
    <div className='max-w-[30%] h-full relative group '>
      <div className='w-full relative overflow-hidden rounded'>
        <img
          src={props.image ? props.image : "https://www.pulsecarshalton.co.uk/wp-content/uploads/2016/08/jk-placeholder-image.jpg"}
          className="w-full h-full object-cover transition-all transform-gpu scale-100 hover:scale-105"
        />
        <div className='flex flex-col  gap-4 absolute inset-0 p-4 bg-black text-white bg-opacity-50 transition-all transform-gpu opacity-0 group-hover:opacity-100 font-montserrat justify-center items-center'>
          <p>{props.name}</p>
          <div>
            <div className='flex gap-2 font-semibold p-2'>
              <NavLink to={`/group/${props.id}`}><button className='bg-purple hover:bg-darkpurple text-white text-2xl p-2 rounded shadow-2xl'><AiOutlineTeam /></button></NavLink>
              <NavLink to="/EditGroup/:id"><button className='bg-purple hover:bg-darkpurple text-white text-2xl p-2 rounded shadow-2xl'><AiOutlineEdit /></button></NavLink>
              <button className='bg-purple hover:bg-darkpurple text-white text-2xl p-2 rounded shadow-2xl'><BsTrash3 /> </button>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GroupCard;
