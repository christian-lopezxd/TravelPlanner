import React from 'react'
import Reason from './Reason/Reason'
import { FaBan } from "react-icons/fa";
import UsersServices from '../../../../Services/UsersServices';
const ReportsCard = (props) => {
  const ban = () => {
    UsersServices.ban(props.email)
  }

    const data = props.reason;
  return (
    <div className="flex justify-between items-center w-[100%] bg-white shadow-2xl min-h-[30px] rounded p-3 font-montserrat text-black rounded-xl ">


    <div className='w-[50%] flex items-center gap-4 '>

      <div className="w-20 h-20 rounded-full overflow-hidden">
        <img
          src="/Images/placeholder.png"
          alt="Imagen"
          className="w-full h-full object-cover"
      
        />
      </div>

      <div className='flex flex-col gap-2 w-[80%]'>
        <h1 className='font-semibold'>{props.email}</h1>
        <div>
        <h1>Reasons:</h1>
        {data.map((reason, index) => (
          <Reason name={reason} key={index} />
        ))
        }
        </div>


      
        
      </div>

    </div>




    <div className='flex gap-2 font-semibold p-2'>
      <button className='bg-red hover:bg-red text-white text-2xl p-2 rounded shadow-2xl' onClick={ban}> <FaBan/></button>
    </div>

  </div>
  )
}

export default ReportsCard