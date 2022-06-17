import React from 'react'
import {Link, useNavigate} from "react-router-dom"
export const Navbar = () => {
  const navigate = useNavigate()
  const handleclick = ()=>{
  navigate("/login")
  }
  return (
    <div>Navbar :
    
    <Link to=""  >Home</Link>
    
    <Link to="/Feeds" >Feeds</Link>

    <button onClick={handleclick}  >Login</button>
    </div>
  )
}
