import React from 'react'
import Navbar from '../../Components/SuperAdmin/Navbar/Navbar'
import Sidebar from '../../Components/SuperAdmin/SideBar/SideBar'
import ProfileCard from '../../Components/User/ProfileCard/ProfileCard'


const Profile = () => {
  return (
    <div className='bg-lightgray min-h-[100vh]'>
    <Navbar />
    <div className='grid grid-cols-6 min-h-[89.5vh]'>
      <Sidebar />
      <ProfileCard/>
      


    </div>

  </div>
  )
}

export default Profile