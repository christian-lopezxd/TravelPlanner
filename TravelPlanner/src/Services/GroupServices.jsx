const url = "https://sed.mingo.studio"
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


GroupServices.getOne = async ( id) => {

   
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




GroupServices.Create = async(formData, navigate) => {
    
    try{
        const response = await axios.postForm(`${url}/api/group`, formData, {
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



export default GroupServices;