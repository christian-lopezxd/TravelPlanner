import React from 'react'
import { NavLink } from 'react-router-dom'
import { IoChevronBackSharp } from "react-icons/io5";
 

const EditTripCard = () => {
  return (
    <div className="flex col-span-5 items-center justify-center gap-2  py-5 text-black bg-lightgray min-h-[89.5vh]" >
            <div className='bg-white w-[90%] flex flex-col items-center  gap-4  min-h-[100%] rounded font-montserrat'>
                <div className='bg-secondary text-black font-semibold w-full h-[10vh] flex items-center gap-2 text-2xl p-3'>
                    <NavLink to="/groups" className="flex items-center"> <button> <IoChevronBackSharp /> </button></NavLink>
                    <h1>Create a new group</h1>
                </div>
                <form className="flex flex-col gap-2 items-center justify-between w-full gap-5 grow">
                    <input type="name" className="text-black p-2 ml-5  border-b border-b-black w-[50%]" placeholder="Enter group name"></input>
                    <div className='w-[100%]  flex items-start justify-center gap-5 '>
                        <div className='w-[45%] flex flex-col p-5 gap-3 justify-center  rounded-xl '>
                            <label>Description: </label>
                            <input type="text" className="text-black p-2   border rounded border-black " placeholder="Enter a description"></input>
                            <label>Country: </label>
                            <select name="Countries" className="bg-white border rounded-md p-2 m-1 w-full">

                                <option defaultValue={0} ></option>


                            </select>
                            <label>Budget: </label>
                            <input type="number" className="text-black p-2   border-b border-b-black " placeholder="Enter budget $"></input>
                            <label>Images: </label>
                            <input type="file" accept="image/jpeg" multiple className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-purple file:text-white hover:file:bg-darkpurple  " placeholder="Enter group name"></input>
                        </div>

                        <div className='flex flex-col w-[45%] p-5 gap-3 rounded-xl'>
                            <label>place of stay: </label>
                            <input type="text" className="text-black p-2   border rounded border-black " placeholder="Enter a description"></input>
                            <label>Transport: </label>
                            <select name="Countries" className="bg-white border rounded-md p-2 m-1 w-full">

                                <option defaultValue={0} ></option>


                            </select>
                            <div className='flex flex-col'>
                                <label>Start date:</label>
                                <input type="date" className="text-black p-2  border-b border-b-black" placeholder="Enter the trip date"></input>
                            </div>
                            <div className='flex flex-col'>
                                <label>End date:</label>
                                <input type="date" className="text-black p-2  border-b border-b-black" placeholder="Enter the trip date"></input>

                            </div>
                        </div>
                    </div>

                    <div className='w-full flex justify-end p-5'>

                        <button type="submit" className='bg-purple hover:bg-darkpurple text-white font-semibold text-lg px-2 py-1 rounded shadow'>Create</button>
                    </div>

                </form>


            </div>
        </div>
  )
}

export default EditTripCard