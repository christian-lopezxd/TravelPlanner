import React from 'react'
import { NavLink } from 'react-router-dom'
import { IoChevronBackSharp } from "react-icons/io5";
import { useState, useEffect } from 'react';
 import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import DestinationServices from '../../../Services/DestinationServices';
import CountryServices from '../../../Services/CountryServices';
import TransportServices from '../../../Services/TransportServices';


const EditTripCard = () => {
    const navigate = useNavigate();
    const x = useParams()
    const [name, SetName] = useState("")
    const [data, setData] = useState()
    const [description, SetDescription] = useState("")
    const [place_of_stay, SetPlace_of_stay] = useState("")
    const [tid, SetTid] = useState("")
    const [budget, SetBudget] = useState("")
    const [begin_date, SetBegin_date] = useState("")
    const [end_date, SetEnd_date] = useState("")
    const [cid, SetCid] = useState("")
    const [picture, SetPicture] = useState([])
    const [country, setCountry] = useState()
    const [transport, setTransport] = useState()
    useEffect(() => {

        CountryServices.getAll().then((info) => {
            setCountry(info);
        });

        TransportServices.getAll().then((info) => {
            setTransport(info);
        });
    }, []);

    useEffect(() => {
        
        DestinationServices.getOne(x.idt).then((info) => {
          setData(info);
          SetName(info.name)
          SetDescription(info.description)
          SetPlace_of_stay(info.place_of_stay)
          SetBudget(info.budget)
          
        });
        
      }, []);


     


    const Create = (e) => {
        e.preventDefault();




        const formData = new FormData();
        formData.append('name', name);
        formData.append('description', description);
        formData.append('place_of_stay', place_of_stay);
        formData.append('tid', tid);
        formData.append("budget", budget);
        formData.append("begin_date", begin_date);
        formData.append("end_date", end_date);
        formData.append('cid', cid);
        formData.append('gid', x.gid);
        formData.append("picture", picture);
        formData.append("idd",x.idt)


        DestinationServices.Edit(formData);








    }








  return (
    <div className="flex col-span-5 items-center justify-center gap-2  py-5 text-black bg-lightgray min-h-[89.5vh]" >
            <div className='bg-white w-[90%] flex flex-col items-center  gap-4  min-h-[100%] rounded font-montserrat'>
                <div className='bg-secondary text-black font-semibold w-full h-[10vh] flex items-center gap-2 text-2xl p-3'>
                    <NavLink to={`/group/${x.gid}`} className="flex items-center"> <button> <IoChevronBackSharp /> </button></NavLink>
                    <h1>Edit Trip</h1>
                </div>
                <form onSubmit={(e) => Create(e)} className="flex flex-col gap-2 items-center justify-between w-full gap-5 grow">
                    <input value={name} onChange={(e) => SetName(e.target.value)} type="name"  className="text-black p-2 ml-5  border-b border-b-black w-[50%]" placeholder="Enter group name"></input>
                    <div className='w-[100%]  flex items-start justify-center gap-5 '>
                        <div className='w-[45%] flex flex-col p-5 gap-3 justify-center  rounded-xl '>
                            <label>Description: </label>
                            <input value={description} onChange={(e) => SetDescription(e.target.value)}  type="text" minLength="10" className="text-black p-2   border rounded border-black " placeholder="Enter a description"></input>
                            <label>Country: </label>
                            <select value={cid} onChange={(e) => SetCid(e.target.value)} name="Countries" className="bg-white border rounded-md p-2 m-1 w-full">

                                <option defaultValue={0} ></option>
                                {
                                    country ? country.map((country) => {
                                        const { _id, continent_id, name } = country


                                        return (
                                            <option key={_id} value={_id}>{`${name}`}</option>
                                        )
                                    }) : ""
                                }


                            </select>
                            <label>Budget: </label>
                            <input value={budget} onChange={(e) => SetBudget(e.target.value)} type="number" className="text-black p-2   border-b border-b-black " placeholder="Enter budget $"></input>
                            <label>Images: </label>
                            <input value={picture} onChange={(e) => SetPicture(e.target.value)} type="file" accept="image/jpeg" multiple className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-purple file:text-white hover:file:bg-darkpurple  " placeholder="Enter group name"></input>
                        </div>

                        <div className='flex flex-col w-[45%] p-5 gap-3 rounded-xl'>
                            <label>place of stay: </label>
                            <input value={place_of_stay} onChange={(e) => SetPlace_of_stay(e.target.value)} minLength="10" type="text" className="text-black p-2   border rounded border-black " placeholder="Enter a description"></input>
                            <label>Transport: </label>
                            <select value={tid} onChange={(e) => SetTid(e.target.value)} name="Countries" className="bg-white border rounded-md p-2 m-1 w-full">

                                <option defaultValue={0} ></option>
                                {
                                    transport ? transport.map((country) => {
                                        const { _id, name } = country


                                        return (
                                            <option value={_id} key={_id}>{`${name}`}</option>
                                        )
                                    }) : ""
                                }


                            </select>
                            <div className='flex flex-col'>
                                <label>Start date:</label>
                                <input value={begin_date} onChange={(e) => SetBegin_date(e.target.value)} type="date" className="text-black p-2  border-b border-b-black" placeholder="Enter the trip date"></input>
                            </div>
                            <div className='flex flex-col'>
                                <label>End date:</label>
                                <input value={end_date} onChange={(e) => SetEnd_date(e.target.value)}  type="date" className="text-black p-2  border-b border-b-black" placeholder="Enter the trip date"></input>

                            </div>
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

export default EditTripCard