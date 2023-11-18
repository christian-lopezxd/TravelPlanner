import React from 'react'
import { useEffect, useState } from 'react'
import CountryServices from '../../../../Services/CountryServices'
import { useParams } from 'react-router-dom'

const AddCountry = () => {
  const cid = useParams()
    const [name, setName] = useState("")

  const Create = (e) => {
    e.preventDefault()
    CountryServices.Create(name, cid.id)

    
    
  }
  return (
    <div className="flex justify-center items-center w-[75%] bg-white  min-h-[30px] rounded p-3 font-montserrat text-black rounded-xl ">
     <form onSubmit={(e) => Create(e)} className="flex  gap-2 items-center" >
            <label>Add a Country: </label>
            <input value={name}
              onChange={(e) => setName(e.target.value)} type="name" className="text-black p-2 ml-5 rounded border border-lightgray  "placeholder="Add a country name"></input>
            <div className="flex justify-center  "><button type="submit"  className="bg-purple text-white hover:bg-darkpurple rounded-xl font-semibold  p-2"> Create</button></div>
        </form>



  </div>
  )
}

export default AddCountry