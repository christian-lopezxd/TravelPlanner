const url = "https://sed.mingo.studio"
import axios from "axios";


const FriendServices = () =>{}


FriendServices.getAll = async ( ) => {

   
    try{
      const response = await axios.get(`${url}/api/friend`,   {
        
        headers: {
          'Authorization': 'Bearer ' + localStorage.getItem("token")
        }
        
        }) 
        
        console.log(response)
        
      return response.data.friend
  }catch(error){
      throw error
  }
}


FriendServices.add = async (email) => {

  const config = {
    headers: {
        
        "Authorization":'Bearer ' + localStorage.getItem("token")
    }
}


  try{
    const response = await axios.post(`${url}/api/friend`, {
        email,
       
        
      }, config) 
     

      window.location.reload()
    return response.data.jwt
}catch(error){
    throw error
}
}


FriendServices.getImages = async (id) => {
  try {
    const response = await axios.get(`${url}/images/${id}`, {
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem("token"),
        'Access-Control-Allow-Origin': '*',
      },
      responseType: 'blob'
    });

    const imageUrl = URL.createObjectURL(response.data);
    return imageUrl;

  } catch (error) {
    return 'https://i0.wp.com/conference.nbasbl.org/wp-content/uploads/2022/05/placeholder-image-1.png?ssl=1';
  
  }
};


export default FriendServices;