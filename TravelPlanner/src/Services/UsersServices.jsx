import axios from "axios";
const url = "./.."
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

UsersServices.Create = async(formData) => {
    
  try{
      const response = await axios.postForm(`${url}/api/user`, formData, {
          headers: {
              "Content-Type": "multipart/form-data",
              'Authorization': 'Bearer ' + localStorage.getItem("token")
            }

        }) 
      
      

       
      return response.data
      
  }catch(error){
      throw error
  }
}


export default UsersServices;