import axios from "axios"
import { useEffect, useState } from "react"
const url =  "./.."

const DestinationServices = () => { }


DestinationServices.getAll = async (id) => {
  try {
    const response = await axios.get(`${url}/api/destination/${id}`, {

      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem("token")
      }

    })


    return response.data
  } catch (error) {
    throw error
  }
}

DestinationServices.getOne = async (id) => {
  try {
    const response = await axios.get(`${url}/api/destination/fd/${id}`, {

      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem("token")
      }

    })


    return response.data
  } catch (error) {
    throw error
  }
}



DestinationServices.Create = async (formData, navigate) => {

  try {
    const response = await axios.postForm(`${url}/api/destination`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        'Authorization': 'Bearer ' + localStorage.getItem("token")
      }

    })

    if (response.status === 201) {
      alert("Trip created successfully!");
      navigate("/");
    } else {
      // Otro código de estado, manejar según sea necesario
      alert("Error al intentar registrar al usuario.");
    }



    return response.data

  } catch (error) {
    alert("Error creating a new trip. Please try again.");
    throw error
  }
}

DestinationServices.Edit = async (formData, navigate) => {

  try {
    const response = await axios.putForm(`${url}/api/destination/ui`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        'Authorization': 'Bearer ' + localStorage.getItem("token")
      }

    })

    if (response.status === 201) {
      alert("Trip edited successfully!");
      navigate("/");
    } else {
    
      alert("Error al intentar registrar al usuario.");
    }



    return response.data

  } catch (error) {
    alert("Error creating a new trip. Please try again.");
    throw error
  }
}

DestinationServices.getImages = async (gid, id, picture) => {
  try {
    const response = await axios.get(`${url}/images/${gid}/${id}/${picture}`, {
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

DestinationServices.Delete = async (idd, gid) => {
  const config = {

  }

  var resultado = confirm("¿Estás seguro de que quieres realizar esta acción?");
  if (resultado) {


    try {
      const response = await axios.delete(`${url}/api/destination`, {
        headers: {

          "Authorization": 'Bearer ' + localStorage.getItem("token"),
          'Access-Control-Allow-Origin': '*',
        },
        data: {
          idd,
          gid
        }

      });
      window.location.reload()
      return response;

    } catch (error) {

    }

  } else {
    alert("Acción cancelada");
  }
}




export default DestinationServices;



