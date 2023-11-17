import axios from "axios"
import { useEffect, useState } from "react"
const url = "https://sed.mingo.studio"


const TransportServices = () => {}

TransportServices.getAll = async ( ) => {

   
    try{
      const response = await axios.get(`${url}/api/transport`,   {
        
        headers: {
          'Authorization': 'Bearer ' + localStorage.getItem("token")
        }
        
        }) 
        
        console.log(response)
        
      return response.data
  }catch(error){
      throw error
  }
}

export default TransportServices;