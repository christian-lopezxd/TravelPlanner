import React from 'react'
import ActionButton from './ActionButton/ActionButton';
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineTeam } from "react-icons/ai";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import Logout from './Logout/Logout';
import { GoGear } from "react-icons/go";



const Sidebar = () => {
    return (

        <div className='flex flex-col col-span-1  justify-between bg-primary max-h-[89.5vh] sticky top-[10.5vh]' >

            <div className='flex flex-col  '>
                <ActionButton icon={<AiOutlineTeam />} name="Groups" url="groups" />
                <ActionButton icon={<AiOutlineUsergroupAdd />} name="Friends" url="friends" />
           
                
            </div>


            <div className='w-full flex flex-col'>
            <ActionButton icon={<GoGear/>} name="Settings" url="Profile" className="hover:bg-black"/>
                <Logout/>

            </div>


        </div>

    );

}

export default Sidebar;