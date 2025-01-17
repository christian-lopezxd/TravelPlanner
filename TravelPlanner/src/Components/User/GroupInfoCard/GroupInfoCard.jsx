import React from 'react'
import { NavLink, useParams } from 'react-router-dom';
import { IoChevronBackSharp } from "react-icons/io5";
import MemberBox from './MemberBox/MemberBox';
import TripCard from '../CardContainer/TripCard/TripCard';
import { useState } from 'react';
import { useEffect } from 'react';
import GroupServices from '../../../Services/GroupServices';
import DestinationServices from '../../../Services/DestinationServices';


const GroupInfoCard = () => {


    const x = useParams();
    const [images, setImages] = useState()
    const [data, setData] = useState("")
    const [trips, setTrips] = useState("")

    const [email, setEmail] = useState("")

    const Create = (e) => {
        e.preventDefault()
        GroupServices.addpartipant(email, x.id)


    }


    



    useEffect(() => {

        GroupServices.getOne(x.id).then((info) => {
            setData(info);

        });




    }, []);

    useEffect(() => {

      if(data.picture){
        GroupServices.getImages(x.id, data.picture).then((info) => {
            setImages(info);

        });
      }
    }, [data]);



    useEffect(() => {

        DestinationServices.getAll(x.id).then((info) => {
            setTrips(info);

        });




    }, []);



    return (
        <div className="flex col-span-5 items-center justify-center gap-2 w-[100%] py-5 text-black bg-lightgray min-h-[89.5vh]" >
            <div className='bg-white w-[90%] flex flex-col items-center  gap-4  min-h-[100%] rounded font-montserrat'>
                <div className='bg-secondary text-black font-semibold w-full h-[10vh] flex items-center gap-2 text-2xl p-3'>
                    <NavLink to="/groups" className="flex items-center"> <button> <IoChevronBackSharp /> </button></NavLink>
                    <h1>{data.name}</h1>
                </div>

                <div className='flex w-[100%] flex-col p-5 gap-5'>
                    <div className='flex w-[100%]'>
                        <h1 className='w-[10%]'>Description:</h1>
                        <h1 className='w-[85%] text-justify'> {data.description}</h1>
                    </div>
                    <div className='flex items-center justify-start gap-2'>
                        <h1> Budget:</h1>
                        <h1> ${data.budget}</h1>
                    </div>

                    <div className='flex items-center justify-start gap-2'>
                        <h1>Begin date:</h1>
                        <h1>{data.begin_date}</h1>
                    </div>

                    <div className='flex w-[100%] justify-center'>
                        <div className='flex gap-2 flex-col justify-center items-center w-[75%]'>
                            <h1 className='w-[100%] text-left'>Members: </h1>
                            <div className="flex justify-center items-center w-[75%] bg-white  min-h-[30px] rounded p-3 font-montserrat text-black rounded-xl ">
                                <form onSubmit={(e) => Create(e)} className="flex  gap-2 items-center" >
                                    <label>Add a friend to this group: </label>
                                    <input value={email}
                                        onChange={(e) => setEmail(e.target.value)} type="email" className="text-black p-2 ml-5 rounded border border-lightgray  " placeholder="enter a user email"></input>
                                    <div className="flex justify-center  "><button type="submit" className="bg-purple text-white hover:bg-darkpurple rounded-xl font-semibold  p-2"> Send</button></div>
                                </form>



                            </div>
                            {
                                data.user_info ? data.user_info.map((members,) => {
                                    const { name, email, group_role } = members;
                                    
                                    return (
                                        <MemberBox name={name} email={email} key={name} idg={x.id} role={group_role} />
                                    );
                                }) : ""
                            }

                        </div>

                    </div>
                    <div className='flex flex-col gap-3'>
                        <h1>images:</h1>
                        <div className='flex gap-2 justify-center'>
                            <div className='max-w-[30%]'>
                                <img
                                    src={images}
                                    alt="Imagen"
                                    className="w-full h-full object-cover"
                                />
                            </div>


                        </div>
                    </div>
                    <div className='flex flex-col items-center justify-center w-[100%]'>
                        <NavLink to={`/${x.id}/NewTrip`}> <button className='bg-purple hover:bg-darkpurple text-white text-2xl px-2 py-1 rounded shadow'>+ New Trip</button></NavLink>
                        <h1 className='text-left w-[100%]'>Active trips: </h1>
                        {
                            trips ? trips.map((trip,) => {
                                const { name, description, _id, pictures } = trip;
                                return (
                                    <TripCard name={name} description={description} key={_id} gid={x.id} id={_id} picture={pictures[0]} />
                                );
                            }) : ""
                        }
                    </div>
                </div>



            </div>
        </div>
    )
}

export default GroupInfoCard
