import React from 'react'
import Sidebar from '../../Components/User/Sidebar/Sidebar'
import Navbar from '../../Components/User/Navbar/Navbar'
import GroupInfoCard from '../../Components/User/GroupInfoCard/GroupInfoCard'

const GroupInfo = () => {
  return (
    <div className='bg-lightgray min-h-[100vh]'>
    <Navbar/>
   <div className='grid grid-cols-6 min-h-[89.5vh]'>
   <Sidebar/>
   <GroupInfoCard/>
    
    
   </div>
    
</div>
  )
}

export default GroupInfo