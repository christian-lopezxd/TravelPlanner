import React from 'react'
import Navbar from '../../Components/SuperAdmin/Navbar/Navbar'
import SideBar from '../../Components/SuperAdmin/SideBar/SideBar'
import ContinentContainer from '../../Components/SuperAdmin/ContinentContainer/ContinentContainer'


const Continents = () => {
    return (
        <div className='bg-lightgray min-h-[100vh]'>
        <Navbar/>
       <div className='grid grid-cols-6 min-h-[89.5vh]'>
       <SideBar/>
      <ContinentContainer/>
       
        
       </div>
        
    </div>
      )
}

export default Continents