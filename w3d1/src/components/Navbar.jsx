import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { ThemeContext } from '../context/ThemeContext'
import { Wishlist } from './Wishlist'

export const Navbar = () => {
  const {islogin,login,logout} = useContext(AuthContext)
  const {islight ,Toggletheme} = useContext(ThemeContext)
  console.log(islight);
  console.log(islogin);
  return (
    <div>Navbar
    <button onClick={()=>{
      if(!islogin) {login("L","R")}
      else{logout()}
    }} >{islogin ? "Logout": "Login"}</button>
    <button onClick={Toggletheme}  >{islight ? "dark":"light"}</button>
    <Wishlist/>
    </div>
  )
}
