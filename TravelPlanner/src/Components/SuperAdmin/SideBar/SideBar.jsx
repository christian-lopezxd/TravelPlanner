import React from 'react'
import ActionButton from '../../User/Sidebar/ActionButton/ActionButton';
import { AiOutlineTeam } from "react-icons/ai";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import Logout from '../../User/Sidebar/Logout/Logout';
import { MdEmojiTransportation } from "react-icons/md";
import { FaRegMap } from "react-icons/fa";
import { GoGear } from "react-icons/go";
import { MdOutlineReportProblem } from "react-icons/md";




const Sidebar = () => {
    return (

        <div className='flex flex-col col-span-1  justify-between bg-primary max-h-[89.5vh] sticky top-[10.5vh]' >

            <div className='flex flex-col  '>
                <ActionButton icon={<AiOutlineTeam />} name="Groups" url="groups" />
                <ActionButton icon={<AiOutlineUsergroupAdd />} name="Users" url="users" />
                <ActionButton icon={<AiOutlineUsergroupAdd />} name="Friends" url="friends" />
                <ActionButton icon={<FaRegMap />} name="Continents" url="continents" />
                <ActionButton icon={<MdEmojiTransportation />} name="Transports" url="transport" />
                <ActionButton icon={<MdOutlineReportProblem />} name="Reports" url="reports" />
            </div>


            <div className='w-full flex flex-col'>
            <ActionButton icon={<GoGear/>} name="Settings" url="Profile" className="hover:bg-black"/>
                <Logout/>

            </div>


        </div>

    );

}

export default Sidebar;