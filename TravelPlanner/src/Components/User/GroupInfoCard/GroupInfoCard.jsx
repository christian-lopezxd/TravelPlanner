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
    console.log(x.id)
    const [images, setImages] = useState()
    const [data, setData] = useState("")
    const [trips, setTrips] = useState("")
    useEffect(() => {
        
      GroupServices.getImages(x.id, data.picture).then((info) => {
        setImages(info);
        
      });
      
    
     
      
    }, [data]);

   

    useEffect(() => {
        
      GroupServices.getOne(x.id).then((info) => {
        setData(info);
        
      });

    
     
      
    }, []);

    

    useEffect(() => {
        
      DestinationServices.getAll(x.id).then((info) => {
        setTrips(info);
        
      });
      
    
     
      
    }, []);


   


    
  
  console.log(trips)
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

                    <div className='flex w-[100%] items-start'>
                        <div className='flex gap-2 flex-col w-[50%]'>
                            <h1>Members: </h1>
                            {
                                data.user_info ?  data.user_info.map((members,) =>{
                                    const {name, email, id } = members;
                                    return(
                                        <MemberBox  name= {name} email={email} key={id}/>
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
                    <div className='flex flex-col items-center'>
                    <NavLink to="NewTrip"> <button className='bg-purple hover:bg-darkpurple text-white text-2xl px-2 py-1 rounded shadow'>+ New Trip</button></NavLink>
                    <h1 className='text-left w-[100%]'>Active trips: </h1>
                    {
                                trips ?  trips.map((trip,) =>{
                                    const {name, description, _id } = trip;
                                    return(
                                        <TripCard  name= {name} description={description} key={_id} gid={x.id}/>
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
