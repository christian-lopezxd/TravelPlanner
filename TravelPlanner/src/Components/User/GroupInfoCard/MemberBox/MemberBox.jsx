import React from 'react'
import { FaUserAlt } from "react-icons/fa";
import GroupServices from '../../../../Services/GroupServices';


const MemberBox = (props) => {

 
  return (
    <div className='flex justify-start pl-5 w-[75%] p-2 items-center shadow gap-2'>
        <h1><FaUserAlt/></h1>
        <h1>{props.name}</h1>
    </div>
  )
}

export default MemberBox