import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { Cart } from './Cart'

export const Product = () => {  
  const {islogin,login,logout} = useContext(AuthContext)
  return (
    <div>Product : 
      { islogin? " Logged in ": " logged out"}
    <Cart/>
    </div>
  )
}
