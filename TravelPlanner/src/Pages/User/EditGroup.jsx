import React from 'react'
import Navbar from '../../Components/User/Navbar/Navbar'
import Sidebar from '../../Components/User/Sidebar/Sidebar'
import EditGroupCard from '../../Components/User/EditGroupCard/EditGroupCard'

const EditGroup = () => {
  return (
    <div className='bg-lightgray min-h-[100vh]'>
    <Navbar/>
   <div className='grid grid-cols-6 min-h-[89.5vh]'>
   <Sidebar/>
   <EditGroupCard/>
    
    
   </div>
    
</div>
  )
}

export default EditGroup