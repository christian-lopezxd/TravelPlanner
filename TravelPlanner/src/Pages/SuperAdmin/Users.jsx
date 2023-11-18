import React from 'react'
import Navbar from '../../Components/SuperAdmin/Navbar/Navbar'
import SideBar from '../../Components/SuperAdmin/SideBar/SideBar'
import UsersContainer from '../../Components/SuperAdmin/UsersContainer/UsersContainer'


const Users = () => {
    return (
        <div className='bg-lightgray min-h-[100vh]'>
        <Navbar/>
       <div className='grid grid-cols-6 min-h-[89.5vh]'>
       <SideBar/>
       <UsersContainer/>
      
       
        
       </div>
        
    </div>
      )
}

export default Users