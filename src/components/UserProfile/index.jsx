import React, { useEffect, useState } from 'react'
import { getAPI } from "../../helpers/fetchAPI"
import axios from 'axios'
import "./style.css"

const UserProfile = ({token}) => {

  const [userInfo, setUserInfo] = useState({})
  
  const userUrl = "https://fetchprojectback-ncolombo.vercel.app/api/users/info"

    useEffect(()=> {
      const fetchApi = async()=> {
        await axios.get(userUrl, {
          headers: {
            'Authorization': token
          }
        })
        .then((response)=> {
          setUserInfo(response.data)
        })
        .catch()
      }
      fetchApi()
    },[])
    
  return (
    <div>
        <p className='user-info'>Usuario: {userInfo.userName || "Cargando..."}</p>
        <p className='user-info'>Email: {userInfo.email || "Cargando..."}</p>
    </div>
  )
}

export {UserProfile}
