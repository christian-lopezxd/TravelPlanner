import React from "react";
import axios from "axios";
import { useState } from "react";
const url = "./.."

const AuthServices = () => {}

AuthServices.login = async (ide, idp, navigate) => {
    
    
    try{
        const response = await axios.post(`${url}/api/auth/login`, {
            ide,
           idp,

          }) 
          localStorage.setItem("token", response.data.JWT)
          localStorage.setItem("email", response.data.user.email)
          localStorage.setItem("picture", response.data.user.picture)
          if (window.location.pathname !== "/") {
            navigate("/");
            window.location.reload();
        }
          
        
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
          
          
    if (response.status === 201) {
        alert("Usuario creado exitosamente");
        navigate("/");
      } else if (response.status === 409) {
        alert("El usuario ya existe. Puedes iniciar sesión.");
        // Puedes hacer algo más aquí, como redirigir al usuario a la página de inicio de sesión
      } else {
        // Otro código de estado, manejar según sea necesario
        alert("Error al intentar registrar al usuario.");
      }
            

          
  
         
        return response.data
        
    }catch(error){
         // Aquí puedes manejar los errores de la petición
    console.error("Error en la petición de registro:", error);
    alert("Error en la petición de registro. Por favor, inténtalo de nuevo.");
    }
}




export default AuthServices;
