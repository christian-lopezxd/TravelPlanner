const url = "./.."
import axios from "axios";


const GroupServices = () => {}


GroupServices.getAll = async ( ) => {

   
    try{
      const response = await axios.get(`${url}/api/group/`,   {
        
        headers: {
          'Authorization': 'Bearer ' + localStorage.getItem("token")
        }
        
        }) 
        
        
      return response.data
  }catch(error){
      throw error
  }
}

GroupServices.getAllunaproved = async ( ) => {

   
  try{
    const response = await axios.get(`${url}/api/group/f/gav`,   {
      
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem("token")
      }
      
      }) 
      
      
    return response.data
}catch(error){
    throw error
}
}

GroupServices.toggleApproved = async (idg) => {
  const config = {
    headers: {
        
        "Authorization":'Bearer ' + localStorage.getItem("token")
    }

  }
  try {
    const response = await axios.post(`${url}/api/group/f/av`,{
      idg

    }, config)
    window.location.reload()
    return response.data
    
  } catch (error) {
    throw error
  }
} 


GroupServices.getOne = async (id) => {

   
    try{
      const response = await axios.get(`${url}/api/group/${id}`,   {
        
        headers: {
          'Authorization': 'Bearer ' + localStorage.getItem("token")
        }
        
        }) 
        
        
      return response.data
  }catch(error){
      throw error
  }
}

GroupServices.getImages = async (id, name) => {
  try {
    const response = await axios.get(`${url}/images/${id}/${name}`, {
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem("token"),
        'Access-Control-Allow-Origin': '*',
      },
      responseType: 'blob'
    });

    const imageUrl = URL.createObjectURL(response.data);
    return imageUrl;
  } catch (error) {
    throw error;
  }
};





GroupServices.Create = async(formData, navigate) => {
    
    try{
        const response = await axios.postForm(`${url}/api/group`, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
                'Authorization': 'Bearer ' + localStorage.getItem("token")
              }
  
          }) 
          if (response.status === 201) {
            alert("Group created successfully! please wait for an admin to approve it");
            navigate("/");
          }
        
  
         
        return response.data.status
        
    }catch(error){
        
        alert("Error creating a new group. Please try again.");
        throw error
    }
}

GroupServices.Delete  = async(idg) => {
  const config = {
    headers: {
        
        "Authorization":'Bearer ' + localStorage.getItem("token")
    }
  }
    
  var resultado = confirm("¿Estás seguro de que quieres realizar esta acción?");
    if (resultado) {


      try {
        const response = await axios.delete(`${url}/api/group`, {
          idg
          
        }, config);
    return response;
    
      } catch (error) {
      
      }
     
    } else {
      alert("Acción cancelada");
    }
  }




export default GroupServices;
