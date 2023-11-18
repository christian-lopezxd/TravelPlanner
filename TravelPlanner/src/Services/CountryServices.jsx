import axios from "axios"
import { useEffect, useState } from "react"
const url = "./.."


const CountryServices = () => {}

CountryServices.getAll = async ( ) => {

   
  try{
    const response = await axios.get(`${url}/api/country`,   {
      
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem("token")
      }
      
      }) 
      
   
      
    return response.data
}catch(error){
    throw error
}
}


CountryServices.Create = async(name, cid) => {
    
  const config = {
    headers: {
        
        "Authorization":'Bearer ' + localStorage.getItem("token")
    }
}

  try{
    const response = await axios.post(`${url}/api/country`, {
      name,
      cid
     
      
    }, config)
    window.location.reload()
      return response.data
  }catch(error){
      throw error
  }


}

CountryServices.Update = async(name, idc, cid) => {
    
  const config = {
    headers: {
        
        "Authorization":'Bearer ' + localStorage.getItem("token")
    }
}

  try{
    const response = await axios.put(`${url}/api/country`, {
      name,
      cid,
      idc
     
      
    }, config)
     
      return response.data
  }catch(error){
      throw error
  }


}

export default CountryServices;
