const url = "https://sed.mingo.studio"
import axios from "axios";


const FriendService = () =>{}


FriendService.getAll = async ( ) => {

   
    try{
      const response = await axios.get(`${url}/api/friend`,   {
        
        headers: {
          'Authorization': 'Bearer ' + localStorage.getItem("token")
        }
        
        }) 
        
        
      return response.data
  }catch(error){
      throw error
  }
}

export default FriendService;