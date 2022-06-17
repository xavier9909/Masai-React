import React, { useContext } from 'react'
import {Link, useNavigate} from "react-router-dom"
import { Authcontext } from '../context/Auth'
export const Navbar = () => {
  const navigate = useNavigate()
  const Handleclick = ()=>{
  if(isAuth)
  {
   logout()
  
  }
  else{navigate("/login")}
 
  }
  const {isAuth,logout} = useContext(Authcontext)
  
  return (
    <div>Navbar :
    
    <Link to=""  >Home</Link>
    
    <Link to="/Feeds" >Feeds</Link>

    <button onClick={Handleclick}  >{isAuth ? "logout":"login"}</button>
    </div>
  )
}
