import React from 'react'
import { NavLink, useNavigate, useParams } from 'react-router-dom'
import { IoChevronBackSharp } from "react-icons/io5";
import { useEffect, useState } from 'react';
import GroupServices from '../../../Services/GroupServices';


const EditGroupCard = () => {
    const navigate = useNavigate();
    const x = useParams()
    
    const [data, setData] = useState("")
    const [name, setName] = useState("")
      const [descripton, setDescription] = useState("")
      const [date, setDate] = useState("")
      const [budget, setBudget] = useState("")
      const [picture, setPicture] = useState("")
      const [idg, setIdg] = useState("")

    useEffect(() => {
        
        GroupServices.getOne(x.id).then((info) => {
          setData(info);
          setName(info.name) 
          setDescription(info.description)
          setBudget(info.budget) 
          setIdg(x.id)  
        });
        
      }, []);

      const edit = (e) => {
        e.preventDefault();




        const formData = new FormData();
        formData.append('name', name);
        formData.append('description', descripton);
        formData.append("picture", picture)
        formData.append("begin_date", date)
        formData.append("budget", budget)
        formData.append("idg", idg)


        GroupServices.Edit(formData, navigate);
    


    }




  return (
    <div className="flex col-span-5 items-center justify-center gap-2  py-5 text-black bg-lightgray min-h-[89.5vh]" >
            <div className='bg-white w-[90%] flex flex-col items-center  gap-4  min-h-[100%] rounded font-montserrat'>
                <div className='bg-secondary text-black font-semibold w-full h-[10vh] flex items-center gap-2 text-2xl p-3'>
                    <NavLink to="/groups" className="flex items-center"> <button> <IoChevronBackSharp /> </button></NavLink>
                    <h1>Edit Group</h1>
                </div>
                <form  onSubmit={(e) => edit(e)} className="flex flex-col gap-2 items-center justify-between w-full gap-10 grow">
                    <input value={name} onChange={(e) => setName(e.target.value)} type="name" maxLength="15" className="text-black p-2 ml-5  border-b border-b-black w-[50%]" placeholder="Enter group name"></input>
                    <div className='w-[100%]  flex items-start justify-center gap-5 '>
                        <div className='w-[45%] flex flex-col p-5 gap-5 justify-center  rounded-xl '>
                            <input value={descripton} onChange={(e) => setDescription(e.target.value)} minLength="15" type="text" className="text-black p-2   border-b border-b-black " placeholder={"Enter a description"}></input>
                            <input value={date} onChange={(e) => setDate(e.target.value)} type="date" className="text-black p-2  border-b border-b-black" placeholder="Enter the trip date"></input>
                            <input value={budget} onChange={(e) => setBudget(e.target.value)} type="number" className="text-black p-2   border-b border-b-black " placeholder="Enter estimate $"></input>
                            <input onChange={(e) => setPicture(e.target.files[0])} type="file" accept="image/jpeg" multiple className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-purple file:text-white hover:file:bg-darkpurple  "></input>
                        </div>

                       
                    </div>

                <div className='w-full flex justify-end p-5'>
                <button type="submit" className='bg-purple hover:bg-darkpurple text-white font-semibold text-lg px-2 py-1 rounded shadow'>Edit</button>
                </div>

                </form>


            </div>
        </div>
  )
}

export default EditGroupCard