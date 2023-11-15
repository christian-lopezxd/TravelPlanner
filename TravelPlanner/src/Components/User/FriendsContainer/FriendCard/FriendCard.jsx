import React from 'react'
import { BsTrash3 } from "react-icons/bs";

const FriendCard = (props) => {
  return (
    <div className="flex justify-between items-center w-[100%] bg-white shadow-2xl min-h-[30px] rounded p-3 font-montserrat text-black rounded-xl ">


    <div className='w-[50%] flex items-center gap-4 '>

      <div className="w-20 h-20 rounded-full overflow-hidden">
        <img
          src="https://www.pulsecarshalton.co.uk/wp-content/uploads/2016/08/jk-placeholder-image.jpg"
          alt="Imagen"
          className="w-full h-full object-cover"
        />
      </div>

      <div className='flex flex-col w-[80%]'>
        <h1 className='font-thin'>#id</h1>
        <h1 className='font-semibold'>{props.name}</h1>
        <h1 className='font-semibold'>Email</h1>
      </div>

    </div>




    <div className='flex gap-2 font-semibold p-2'>
      <button className='bg-purple hover:bg-darkpurple text-white text-2xl p-2 rounded shadow-2xl'><BsTrash3 /> </button>
    </div>

  </div>
  )
}

export default FriendCard