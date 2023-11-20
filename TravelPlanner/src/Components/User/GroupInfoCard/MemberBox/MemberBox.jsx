  import React from 'react'
  import { FaUserAlt } from "react-icons/fa";
  import { FaArrowUp } from "react-icons/fa";
  import { FaArrowDown } from "react-icons/fa";
  import { ImCross } from "react-icons/im";
  import { MdOutlineReportProblem } from "react-icons/md";
  import GroupServices from '../../../../Services/GroupServices';
  import { RiVipCrownLine } from "react-icons/ri";
import UsersServices from '../../../../Services/UsersServices';


  const MemberBox = (props) => {
    let icon = "";
    let color = "";
    let message = "";
    let onClickHandler;

    const makeAdmin = () => {
      GroupServices.makeAdmin(props.email, props.idg);
    };

    const removeAdmin = () => {
      GroupServices.removeAdmin(props.email, props.idg);
    };


    const pedirTexto=()=> {
      var respuesta = prompt("Available report reasons: \n 1. Harassment or Bullying \n 2. Spam or Unwanted Content \n 3. Inappropriate Content \n 4. Impersonation or Fake Accounts \n \n Insert a number between 1 and 4:");
  
      if (respuesta !== null && respuesta > 0 && respuesta < 5) {
        UsersServices.createReport(props.email,respuesta)
      } else {
        alert("action canceled");
      }
    }

    if ( props.role === "admin") {
      icon = <FaArrowDown />;
      color = "bg-red hover:bg-darkred";
      message = "Descend";
      onClickHandler = removeAdmin;
    } else if(props.role === "group_owner"){
      icon = <RiVipCrownLine/>
      color ="bg-yellow"

    }
    else {
      icon = <FaArrowUp />;
      color = "bg-green hover:bg-darkgreen";
      message = "Ascend";
      onClickHandler = makeAdmin;
    }

    const deleteMember = () => {
      GroupServices.removePartipant(props.email, props.idg);
    };

    return (
      <div className='flex justify-between pl-5 w-[100%] p-2 items-center shadow '>
        <div className='flex items-center gap-2'>
          <h1><FaUserAlt/></h1>
          <h1>{props.name}</h1>
        </div>
        <div className='flex items-center gap-2'>
          <button
            className={`text-white text-2xl  p-2 rounded shadow-2xl ${color}`}
            title={message}
            onClick={onClickHandler} 
          >
            {icon}
          </button>
          <button
            className='bg-yellow hover:bg-darkyellow text-white text-2xl p-2 rounded shadow-2xl'
            title="Report"
            onClick={pedirTexto}
          >
            <MdOutlineReportProblem />
          </button>
          <button
            className='bg-red hover:bg-darkred text-white text-2xl p-2 rounded shadow-2xl'
            title="Delete from group"
            onClick={deleteMember}
          >
            <ImCross />
          </button>
        </div>
      </div>
    );
  };

  export default MemberBox;
