import React from 'react'
import Navbar from '../../Components/User/Navbar/Navbar'
import Sidebar from '../../Components/User/Sidebar/Sidebar'
import CreateTripCard from '../../Components/User/CreateTripCard/CreateTripCard'

const CreateTrip = () => {
  return (
    <div className='bg-lightgray min-h-[100vh]'>
        <Navbar/>
        
       <div className='grid grid-cols-6 min-h-[89.5vh]'>
       <Sidebar/>
       
       <CreateTripCard/>
        
       </div>
        
    </div>
  )
}

export default CreateTrip