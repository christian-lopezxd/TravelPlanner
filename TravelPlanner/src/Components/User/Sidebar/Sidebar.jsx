import React from 'react'
import ActionButton from './ActionButton/ActionButton';
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineTeam } from "react-icons/ai";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import Logout from './Logout/Logout';


const Sidebar = () => {
    return (

        <div className='flex flex-col justify-between bg-primary max-h-[89.5vh] sticky top-[10.5vh]' >

            <div className='flex flex-col col-span-1  '>
                <ActionButton icon={<AiOutlineHome />} name="Home" url="" />
                <ActionButton icon={<AiOutlineTeam />} name="Groups" url="groups" />
                <ActionButton icon={<AiOutlineUsergroupAdd />} name="Friends" url="friends" />

            </div>


            <div className='w-full'>
                <Logout/>

            </div>


        </div>

    );

}

export default Sidebar;