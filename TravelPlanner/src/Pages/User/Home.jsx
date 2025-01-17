import React from 'react'
import Navbar from '../../Components/User/Navbar/Navbar'
import CardContainer from '../../Components/User/CardContainer/CardContainer'
import Sidebar from '../../Components/User/Sidebar/Sidebar'


const Home = () => {
  return (
    <div className='bg-lightgray min-h-[100vh]'>
        <Navbar/>
       <div className='grid grid-cols-6 min-h-[89.5vh]'>
       <Sidebar/>
       <CardContainer/>
        
       </div>
        
    </div>
  )
}

export default Home