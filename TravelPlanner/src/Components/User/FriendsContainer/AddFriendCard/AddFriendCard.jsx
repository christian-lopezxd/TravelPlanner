import React, { useState } from 'react'
import FriendServices from '../../../../Services/FriendServices';

const AddFriendCard = () => {

  const [email, setEmail] = useState("")

  const Create = (e) => {
    e.preventDefault()
    FriendServices.add(email)

    
    
  }




  return (
    <div className="flex justify-center items-center w-[75%] bg-white  min-h-[30px] rounded p-3 font-montserrat text-black rounded-xl ">
     <form onSubmit={(e) => Create(e)} className="flex  gap-2 items-center" >
            <label>Add a Friend: </label>
            <input value={email}
              onChange={(e) => setEmail(e.target.value)} type="name" className="text-black p-2 ml-5 rounded border border-lightgray  "placeholder="enter a user email"></input>
            <div className="flex justify-center  "><button type="submit"  className="bg-purple text-white hover:bg-darkpurple rounded-xl font-semibold  p-2"> Send</button></div>
        </form>



  </div>
  )
}

export default AddFriendCard