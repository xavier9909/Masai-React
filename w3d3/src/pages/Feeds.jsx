import React, { useContext } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { Authcontext } from '../context/Auth'

export const Feeds = () => {
  const {isAuth} = useContext(Authcontext)
  const navigate = useNavigate()
  if(isAuth){
    return <div>Feeds</div>
    
  }
  else { 
  return <Navigate to="/login" />
  }
}