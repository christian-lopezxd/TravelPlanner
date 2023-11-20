import axios from "axios";
const url =  "./.."
const UsersServices = () => {};


UsersServices.getUsers = async () => {

   
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

UsersServices.getAllReported = async () => {


  try {
    const response = await axios.get(`${url}/api/report`, {

      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem("token"),
        'Access-Control-Allow-Origin': '*',

      }

    })


    return response.data
  } catch (error) {
    throw error
  }
}

UsersServices.getImages = async ( name) => {
  try {
    const response = await axios.get(`${url}/images/${name}`, {
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem("token"),
        'Access-Control-Allow-Origin': '*',
      },
      responseType: 'blob'
    });

    const imageUrl = URL.createObjectURL(response.data);
    return imageUrl;
  } catch (error) {
    return '/Images/placeholder.png';
  }
};



UsersServices.update = async(formData, navigate) => {
    
  try{
      const response = await axios.putForm(`${url}/api/user`, formData, {
          headers: {
              "Content-Type": "multipart/form-data",
              'Authorization': 'Bearer ' + localStorage.getItem("token")

            }

        })
        
        console.log(response)
  if (response.status === 201) {
      alert("Usuario editado exitosamente");
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
  alert("Error en la petición de edicion. Por favor, inténtalo de nuevo.");
  }
}

UsersServices.createReport = async (email, reason) => {
  
  const config = {
    headers: {

      "Authorization": 'Bearer ' + localStorage.getItem("token"),
      'Access-Control-Allow-Origin': '*',
    }
  }
 
    try {
      const response = await axios.post(`${url}/api/report`, {
       
          email,
          reason
        



      }, config)
      alert("User reported successfully")

      window.location.reload()
      return response.data

    } catch (error) {
      throw error
    }
  
}

UsersServices.ban = async (email) => {
  const config = {
    headers: {

      "Authorization": 'Bearer ' + localStorage.getItem("token"),
      'Access-Control-Allow-Origin': '*',
    }
  }
 
    try {
      const response = await axios.post(`${url}/api/report/b`, {
       
          email
        



      }, config)
      alert("User banned successfully")

      window.location.reload()
      return response.data

    } catch (error) {
      throw error
    }
};




export default UsersServices;