import axios from "axios"
const url = "http://127.0.0.1:3001"

const ContinentServices = () => {}

ContinentServices.getAll = async ( ) => {

   
    try{
      const response = await axios.get(`${url}/api/continent`,   {
        
        headers: {
          'Authorization': 'Bearer ' + localStorage.getItem("token")
        }
        
        }) 
        
     
      
      return response.data
  }catch(error){
      throw error
  }
}

ContinentServices.Create = async(name) => {
    
  const config = {
    headers: {
        
        "Authorization":'Bearer ' + localStorage.getItem("token")
    }
}

  try{
    const response = await axios.post(`${url}/api/continent`, {
      name
     
      
    }, config)
    window.location.reload()
      return response.data
  }catch(error){
      throw error
  }


}



ContinentServices.Update = async(name, idc, cid) => {
    
  const config = {
    headers: {
        
        "Authorization":'Bearer ' + localStorage.getItem("token")
    }
}

  try{
    const response = await axios.put(`${url}/api/country`, {
      name,
      idc
     
      
    }, config)
     
      return response.data
  }catch(error){
      throw error
  }


}

export default ContinentServices;
