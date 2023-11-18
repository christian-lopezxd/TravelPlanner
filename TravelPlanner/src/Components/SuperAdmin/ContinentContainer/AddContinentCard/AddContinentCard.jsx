import React from 'react'
import { useEffect, useState } from 'react'
import ContinentServices from '../../../../Services/ContinentServices'

const AddContinentCard = () => {

    const [name, setName] = useState("")

  const Create = (e) => {
    e.preventDefault()
    ContinentServices.Create(name)

    
    
  }
  return (
    <div className="flex justify-center items-center w-[75%] bg-white  min-h-[30px] rounded p-3 font-montserrat text-black rounded-xl ">
     <form onSubmit={(e) => Create(e)} className="flex  gap-2 items-center" >
            <label>Add a Continent: </label>
            <input value={name}
              onChange={(e) => set(e.target.value)} type="name" className="text-black p-2 ml-5 rounded border border-lightgray  "placeholder="Add a continent name"></input>
            <div className="flex justify-center  "><button type="submit"  className="bg-purple text-white hover:bg-darkpurple rounded-xl font-semibold  p-2"> Create</button></div>
        </form>



  </div>
  )
}

export default AddContinentCard


