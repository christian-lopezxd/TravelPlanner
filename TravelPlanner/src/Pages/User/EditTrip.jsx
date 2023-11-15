import React from 'react'
import Navbar from '../../Components/User/Navbar/Navbar'
import Sidebar from '../../Components/User/Sidebar/Sidebar'
import EditTripCard from '../../Components/User/EditTripCard/EditTripCard'

const EditTrip = () => {
  return (
    <div className='bg-lightgray min-h-[100vh]'>
    <Navbar/>
   <div className='grid grid-cols-6 min-h-[89.5vh]'>
   <Sidebar/>
   <EditTripCard/>
    
    
   </div>
    
</div>
  )
}

export default EditTrip