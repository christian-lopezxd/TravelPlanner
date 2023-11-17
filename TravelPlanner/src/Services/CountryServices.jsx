import axios from "axios"
import { useEffect, useState } from "react"
const url = "https://sed.mingo.studio"


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


export default CountryServices;