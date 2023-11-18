import React from "react";
import axios from "axios";
import { useState } from "react";
const url = "https://sed.mingo.studio"

const AuthServices = () => {}

AuthServices.login = async (ide, idp, navigate) => {
    
    
    try{
        const response = await axios.post(`${url}/api/auth/login`, {
            ide,
           idp,

          }) 
          localStorage.setItem("token", response.data.JWT)
          
          navigate("/")
          window.location.reload()
        return response.data.jwt
    }catch(error){
        throw error
    }


}

AuthServices.Register = async(formData, navigate) => {
    
    try{
        const response = await axios.postForm(`${url}/api/user`, formData, {
            headers: {
                "Content-Type": "multipart/form-data"
              }
  
          }) 
          console.log(response)
          
          alert(response.data.message);
          if(response.status== 200){
            navigate("/")
          } 
          if(response.status == 409){
            alert("Revisa bien los campos")
          } 
  
         
        return response.data.message
        
    }catch(error){
        throw error
    }
}

AuthServices.getUser = async () => {

   
    try{
      const response = await axios.get(`${url}/api/user`,   {
        
        headers: {
          'Authorization': 'Bearer ' + localStorage.getItem("token")
        }
        
        }) 
        
        
      return response.data
  }catch(error){
      throw error
  }
}


export default AuthServices;