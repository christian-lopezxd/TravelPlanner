import React from 'react'
import Navbar from '../../Components/SuperAdmin/Navbar/Navbar'
import Sidebar from '../../Components/SuperAdmin/SideBar/SideBar'
import FriendsContainer from '../../Components/User/FriendsContainer/FriendsContainer'


const Friends = () => {
  return (
    <div className='bg-lightgray min-h-[100vh]'>
      <Navbar />
      <div className='grid grid-cols-6 min-h-[89.5vh]'>
        <Sidebar />
        <FriendsContainer/>


      </div>

    </div>
  )
}

export default Friends