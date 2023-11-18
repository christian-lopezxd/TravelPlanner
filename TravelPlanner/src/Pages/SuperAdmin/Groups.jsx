import React from 'react'
import Navbar from '../../Components/SuperAdmin/Navbar/Navbar'
import SideBar from '../../Components/SuperAdmin/SideBar/SideBar'
import GroupContainer from '../../Components/SuperAdmin/GroupContainer/GroupContainer'



const Groups = () => {

 



    return (
      <div className='bg-lightgray min-h-[100vh]'>
      <Navbar/>
     <div className='grid grid-cols-6 min-h-[89.5vh]'>
     <SideBar/>
    <GroupContainer/>
    
     
      
     </div>
      
  </div>
    )
  }
  
  export default Groups