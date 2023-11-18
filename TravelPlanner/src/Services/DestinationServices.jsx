import axios from "axios"
import { useEffect, useState } from "react"
const url = "./.."

const DestinationServices = () => {}


DestinationServices.getAll = async (id) => {
    try{
      const response = await axios.get(`${url}/api/destination/${id}`,   {
        
        headers: {
          'Authorization': 'Bearer ' + localStorage.getItem("token")
        }
        
        }) 
        
       
      return response.data
  }catch(error){
      throw error
  }
}

DestinationServices.Create  = async(formData) => {
    
  try{
      const response = await axios.postForm(`${url}/api/destination`, formData, {
          headers: {
              "Content-Type": "multipart/form-data",
              'Authorization': 'Bearer ' + localStorage.getItem("token")
            }

        }) 
        console.log(response)
      

       
      return response.data
      
  }catch(error){
      throw error
  }
}

export default DestinationServices;



