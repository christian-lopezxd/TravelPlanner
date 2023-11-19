import axios from "axios"
import { useEffect, useState } from "react"
const url = "./.."


const TransportServices = () => {}

TransportServices.getAll = async ( ) => {

   
    try{
      const response = await axios.get(`${url}/api/transport`,   {
        
        headers: {
          'Authorization': 'Bearer ' + localStorage.getItem("token")
        }
        
        }) 
        
        
      return response.data
  }catch(error){
      throw error
  }
}

TransportServices.Create = async(name) => {
    
  const config = {
    headers: {
        
        "Authorization":'Bearer ' + localStorage.getItem("token")
    }
}

  try{
    const response = await axios.post(`${url}/api/transport`, {
      name,
     
      
    }, config)
    window.location.reload()
      return response.data
  }catch(error){
      throw error
  }


}


TransportServices.Update = async(name) => {
    
  const config = {
    headers: {
        
        "Authorization":'Bearer ' + localStorage.getItem("token")
    }
}

  try{
    const response = await axios.put(`${url}/api/friend`, {
      name,
     
      
    }, config)
     
      return response.data
  }catch(error){
      throw error
  }


}

export default TransportServices;
